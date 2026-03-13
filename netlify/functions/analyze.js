const { OpenAI, toFile } = require("openai");
const fs = require("fs");

exports.handler = async function (event) {
  let tmpPath = null;
  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const params = event.queryStringParameters || {};
    const language = params.language || "auto";
    const wantTimestamps = params.timestamps === "true";
    const wantSummary = params.summary === "true";
    const clientFilename = params.filename || "";  // filename sent from frontend

    // Decode body
    const buffer = event.isBase64Encoded
      ? Buffer.from(event.body, "base64")
      : Buffer.from(event.body, "binary");

    // Validate file size (Whisper limit = 25MB)
    const MAX_BYTES = 25 * 1024 * 1024;
    if (buffer.length > MAX_BYTES) {
      return json(400, { error: "File too large. Maximum size is 25MB." });
    }

    // Detect format — prefer client filename extension, fallback to magic bytes
    const { ext, mime } = detectFileType(buffer, clientFilename);

    // Write to /tmp with correct extension
    tmpPath = `/tmp/audio_${Date.now()}.${ext}`;
    fs.writeFileSync(tmpPath, buffer);

    console.log(`Processing: ${clientFilename || "unknown"} detected as .${ext} (${mime}), size: ${(buffer.length/1024).toFixed(1)}KB`);

    // Build Whisper request — always use verbose_json to get ALL segments
    const whisperParams = {
      file: await toFile(fs.createReadStream(tmpPath), `audio.${ext}`, { type: mime }),
      model: "whisper-1",
      response_format: "verbose_json",
    };

    if (language !== "auto") whisperParams.language = language;

    const transcription = await openai.audio.transcriptions.create(whisperParams);

    // Build full transcript from ALL segments — never truncate
    let transcriptText = "";
    let segments = [];

    if (transcription.segments && transcription.segments.length > 0) {
      if (wantTimestamps) {
        segments = transcription.segments.map(seg => ({
          start: formatTime(seg.start),
          end: formatTime(seg.end),
          text: seg.text.trim(),
        }));
        transcriptText = segments.map(s => `[${s.start}] ${s.text}`).join("\n");
      } else {
        // Join ALL segment texts — transcription.text can sometimes be truncated
        transcriptText = transcription.segments.map(s => s.text.trim()).join(" ");
      }
    } else {
      transcriptText = transcription.text || "";
    }

    const wordCount = transcriptText.replace(/\[.*?\]/g, "").trim().split(/\s+/).filter(Boolean).length;
    const duration = transcription.duration ? Math.round(transcription.duration) : null;

    // Optional AI summary — use full transcript up to 12000 chars
    let summary = null;
    if (wantSummary && transcriptText.length > 100) {
      const summaryResp = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a concise summarizer. Given a transcript, produce: 1) A 2-3 sentence summary. 2) Up to 5 bullet-point key points. Format as JSON: { summary: string, keyPoints: string[] }. Respond with JSON only, no markdown."
          },
          { role: "user", content: `Transcript:\n${transcriptText.slice(0, 12000)}` }
        ],
        max_tokens: 600,
      });

      try {
        summary = JSON.parse(summaryResp.choices[0].message.content);
      } catch {
        summary = { summary: summaryResp.choices[0].message.content, keyPoints: [] };
      }
    }

    return json(200, {
      text: transcriptText,
      segments: wantTimestamps ? segments : undefined,
      summary: summary || undefined,
      wordCount,
      duration,
      language: transcription.language || language,
      detectedFormat: ext,
      segmentCount: transcription.segments ? transcription.segments.length : 0,
    });

  } catch (error) {
    console.error("Error:", error.message, error.stack);
    return json(500, { error: error.message });
  } finally {
    if (tmpPath) try { fs.unlinkSync(tmpPath); } catch (_) {}
  }
};

function json(statusCode, obj) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(obj),
  };
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function detectFileType(buffer, clientFilename) {
  // Priority 1: use client filename extension — most reliable
  if (clientFilename) {
    const ext = clientFilename.split(".").pop().toLowerCase();
    const mimeMap = {
      mp3:  "audio/mpeg",
      mpeg: "audio/mpeg",
      wav:  "audio/wav",
      m4a:  "audio/mp4",
      ogg:  "audio/ogg",
      webm: "audio/webm",
      flac: "audio/flac",
      mp4:  "video/mp4",
      mov:  "video/quicktime",
      avi:  "video/x-msvideo",
      mkv:  "video/x-matroska",
      m4v:  "video/mp4",
    };
    if (mimeMap[ext]) return { ext, mime: mimeMap[ext] };
  }

  // Priority 2: magic bytes
  if (buffer[0] === 0x4F && buffer[1] === 0x67 && buffer[2] === 0x67 && buffer[3] === 0x53)
    return { ext: "ogg", mime: "audio/ogg" };
  if (buffer[0] === 0x49 && buffer[1] === 0x44 && buffer[2] === 0x33)
    return { ext: "mp3", mime: "audio/mpeg" };
  if (buffer[0] === 0xFF && (buffer[1] & 0xE0) === 0xE0)
    return { ext: "mp3", mime: "audio/mpeg" };
  if (buffer[0] === 0x52 && buffer[1] === 0x49 && buffer[2] === 0x46 && buffer[3] === 0x46)
    return { ext: "wav", mime: "audio/wav" };
  if (buffer[0] === 0x1A && buffer[1] === 0x45 && buffer[2] === 0xDF && buffer[3] === 0xA3)
    return { ext: "webm", mime: "audio/webm" };
  if (buffer[0] === 0x66 && buffer[1] === 0x4C && buffer[2] === 0x61 && buffer[3] === 0x43)
    return { ext: "flac", mime: "audio/flac" };
  if (buffer.length > 8 && buffer[4] === 0x66 && buffer[5] === 0x74 && buffer[6] === 0x79 && buffer[7] === 0x70)
    return { ext: "mp4", mime: "video/mp4" };

  return { ext: "mp3", mime: "audio/mpeg" };
}
