const { OpenAI, toFile } = require("openai");
const fs = require("fs");

const MIME_MAP = {
  mp3: "audio/mpeg", mpeg: "audio/mpeg", wav: "audio/wav",
  m4a: "audio/mp4", ogg: "audio/ogg", flac: "audio/flac", webm: "audio/webm",
};

exports.handler = async function (event) {
  let tmpPath = null;

  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const params = event.queryStringParameters || {};
    const language = params.language || "auto";
    const wantTimestamps = params.timestamps === "true";
    const wantSummary = params.summary === "true";
    const clientFilename = params.filename || "audio.mp3";

    // Decode base64 body
    const buffer = Buffer.from(event.body || "", "base64");
    const fileSizeMB = (buffer.length / 1024 / 1024).toFixed(2);
    console.log(`File: ${clientFilename}, ${fileSizeMB} MB`);

    // 24MB ≈ 20 min of high-quality audio
    if (buffer.length > 24 * 1024 * 1024) {
      return json(400, { error: "Audio too long. Please keep recordings under 20 minutes." });
    }

    const ext = clientFilename.split(".").pop().toLowerCase();
    if (!MIME_MAP[ext]) {
      return json(400, { error: `Unsupported format: .${ext}. Please use MP3, WAV, M4A, OGG, WEBM, or FLAC.` });
    }

    // Write to /tmp
    tmpPath = `/tmp/audio_${Date.now()}.${ext}`;
    fs.writeFileSync(tmpPath, buffer);

    // Send to Whisper
    const whisperParams = {
      file: await toFile(fs.createReadStream(tmpPath), `audio.${ext}`, { type: MIME_MAP[ext] }),
      model: "whisper-1",
      response_format: "verbose_json",
    };
    if (language !== "auto") whisperParams.language = language;

    const transcription = await openai.audio.transcriptions.create(whisperParams);

    // Build transcript from ALL segments — never truncate
    const segs = transcription.segments || [];
    let transcriptText = "";
    let segments = [];

    if (wantTimestamps && segs.length > 0) {
      segments = segs.map(s => ({ start: fmt(s.start), end: fmt(s.end), text: s.text.trim() }));
      transcriptText = segments.map(s => `[${s.start}] ${s.text}`).join("\n");
    } else {
      transcriptText = segs.length > 0
        ? segs.map(s => s.text.trim()).join(" ")
        : (transcription.text || "");
    }

    const wordCount = transcriptText.replace(/\[.*?\]/g, "").trim().split(/\s+/).filter(Boolean).length;
    const duration = transcription.duration ? Math.round(transcription.duration) : null;

    // Optional summary
    let summary = null;
    if (wantSummary && transcriptText.length > 100) {
      const resp = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: 'Return JSON only: { "summary": "2-3 sentences", "keyPoints": ["..."] }' },
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
      duration,
      language: transcription.language || language,
      detectedFormat: ext,
    });

  } catch (error) {
    console.error("Error:", error.message);
    return json(500, { error: error.message });
  } finally {
    if (tmpPath) try { fs.unlinkSync(tmpPath); } catch(_) {}
  }
};

function json(code, obj) {
  return {
    statusCode: code,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(obj),
  };
}

function fmt(s) {
  return `${Math.floor(s/60).toString().padStart(2,"0")}:${Math.floor(s%60).toString().padStart(2,"0")}`;
}
