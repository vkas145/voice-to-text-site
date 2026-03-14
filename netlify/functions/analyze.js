const { OpenAI, toFile } = require("openai");
const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");

// ffmpeg-static provides the binary path — works on Netlify Lambda
let ffmpegPath;
try {
  ffmpegPath = require("ffmpeg-static");
} catch(e) {
  ffmpegPath = "ffmpeg"; // fallback to system ffmpeg
}

exports.handler = async function (event) {
  const tmpFiles = [];

  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const params = event.queryStringParameters || {};
    const language = params.language || "auto";
    const wantTimestamps = params.timestamps === "true";
    const wantSummary = params.summary === "true";
    const clientFilename = params.filename || "audio.mp3";

    // Decode base64 body from frontend
    const buffer = Buffer.from(event.body || "", "base64");
    console.log(`Received: ${clientFilename}, size: ${(buffer.length / 1024 / 1024).toFixed(2)} MB`);

    const ext = clientFilename.split(".").pop().toLowerCase();
    const ts = Date.now();
    const inputPath = `/tmp/input_${ts}.${ext}`;
    fs.writeFileSync(inputPath, buffer);
    tmpFiles.push(inputPath);

    // Convert to compressed mono MP3
    const audioPath = `/tmp/audio_${ts}.mp3`;
    tmpFiles.push(audioPath);

    try {
      execSync(
        `"${ffmpegPath}" -y -i "${inputPath}" -vn -ac 1 -ar 16000 -q:a 5 -f mp3 "${audioPath}"`,
        { timeout: 120000, stdio: "pipe" }
      );
      console.log(`FFmpeg done. Audio: ${(fs.statSync(audioPath).size / 1024 / 1024).toFixed(2)} MB`);
    } catch (ffErr) {
      console.error("FFmpeg error:", ffErr.stderr?.toString() || ffErr.message);
      return json(400, { error: "Could not process this file. Supported: MP3, MP4, WAV, M4A, MOV, OGG, WEBM, MKV." });
    }

    const audioSize = fs.statSync(audioPath).size;
    const CHUNK_LIMIT = 20 * 1024 * 1024;

    let fullText = "";
    let allSegments = [];
    let totalDuration = 0;
    let detectedLanguage = language;

    if (audioSize <= CHUNK_LIMIT) {
      const result = await transcribeFile(openai, audioPath, language);
      fullText = result.text;
      allSegments = result.segments;
      totalDuration = result.duration || 0;
      detectedLanguage = result.language || language;

    } else {
      console.log(`Splitting ${(audioSize/1024/1024).toFixed(1)}MB into 10-min chunks`);

      let totalSecs = 3600;
      try {
        totalSecs = parseFloat(
          execSync(`"${ffmpegPath}" -i "${audioPath}" 2>&1 | grep Duration`, { timeout: 15000, shell: true })
            .toString().match(/Duration: (\d+):(\d+):(\d+)/)?.[0]
        ) || 3600;
        // Better: use ffprobe if available
        const probe = execSync(
          `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${audioPath}"`,
          { timeout: 15000, stdio: "pipe" }
        ).toString().trim();
        totalSecs = parseFloat(probe) || totalSecs;
      } catch(e) {}

      const CHUNK_SECS = 600;
      let offset = 0, chunkIdx = 0;

      while (offset < totalSecs) {
        const chunkPath = `/tmp/chunk_${ts}_${chunkIdx}.mp3`;
        tmpFiles.push(chunkPath);

        try {
          execSync(
            `"${ffmpegPath}" -y -ss ${offset} -i "${audioPath}" -t ${CHUNK_SECS} -c copy "${chunkPath}"`,
            { timeout: 30000, stdio: "pipe" }
          );
        } catch(e) { break; }

        const chunkSize = fs.statSync(chunkPath).size;
        if (chunkSize < 2000) break;

        console.log(`Chunk ${chunkIdx+1}: offset=${offset}s size=${(chunkSize/1024).toFixed(0)}KB`);
        const result = await transcribeFile(openai, chunkPath, language);

        result.segments.forEach(seg => {
          allSegments.push({
            start: formatTime(parseTime(seg.start) + offset),
            end:   formatTime(parseTime(seg.end) + offset),
            text:  seg.text,
          });
        });

        fullText += (fullText ? " " : "") + result.text;
        totalDuration = offset + (result.duration || CHUNK_SECS);
        detectedLanguage = result.language || detectedLanguage;
        offset += CHUNK_SECS;
        chunkIdx++;
      }
    }

    // Build transcript
    let transcriptText = "";
    let segments = [];

    if (wantTimestamps && allSegments.length > 0) {
      segments = allSegments;
      transcriptText = segments.map(s => `[${s.start}] ${s.text}`).join("\n");
    } else {
      transcriptText = fullText;
    }

    const wordCount = transcriptText.replace(/\[.*?\]/g, "").trim().split(/\s+/).filter(Boolean).length;

    // Optional summary
    let summary = null;
    if (wantSummary && transcriptText.length > 100) {
      const resp = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: 'Summarize as JSON: { "summary": "2-3 sentences", "keyPoints": ["..."] }. JSON only.' },
          { role: "user", content: `Transcript:\n${transcriptText.slice(0, 12000)}` }
        ],
        max_tokens: 600,
      });
      try { summary = JSON.parse(resp.choices[0].message.content); }
      catch { summary = { summary: resp.choices[0].message.content, keyPoints: [] }; }
    }

    return json(200, {
      text: transcriptText,
      segments: wantTimestamps ? segments : undefined,
      summary: summary || undefined,
      wordCount,
      duration: Math.round(totalDuration),
      language: detectedLanguage,
      detectedFormat: ext,
    });

  } catch (error) {
    console.error("Error:", error.message);
    return json(500, { error: error.message });
  } finally {
    tmpFiles.forEach(f => { try { fs.unlinkSync(f); } catch(_) {} });
  }
};

async function transcribeFile(openai, filePath, language) {
  const params = {
    file: await toFile(fs.createReadStream(filePath), path.basename(filePath), { type: "audio/mpeg" }),
    model: "whisper-1",
    response_format: "verbose_json",
  };
  if (language !== "auto") params.language = language;

  const t = await openai.audio.transcriptions.create(params);
  const segments = (t.segments || []).map(s => ({
    start: formatTime(s.start),
    end:   formatTime(s.end),
    text:  s.text.trim(),
  }));
  const text = segments.length > 0 ? segments.map(s => s.text).join(" ") : (t.text || "");
  return { text, segments, duration: t.duration || 0, language: t.language };
}

function json(code, obj) {
  return { statusCode: code, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }, body: JSON.stringify(obj) };
}
function formatTime(s) {
  return `${Math.floor(s/60).toString().padStart(2,"0")}:${Math.floor(s%60).toString().padStart(2,"0")}`;
}
function parseTime(str) {
  const [m, s] = str.split(":").map(Number);
  return m * 60 + s;
}
