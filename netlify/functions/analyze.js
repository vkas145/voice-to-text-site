const { OpenAI, toFile } = require("openai");
const fs = require("fs");
const path = require("path");

// Try to load ffmpeg-static — optional, only needed for video files
let ffmpegPath = null;
let execSync = null;
try {
  ffmpegPath = require("ffmpeg-static");
  execSync = require("child_process").execSync;
  console.log("ffmpeg-static loaded:", ffmpegPath);
} catch(e) {
  console.log("ffmpeg-static not available — audio-only mode");
}

// Video extensions that need ffmpeg
const VIDEO_EXTS = ["mp4", "mov", "avi", "mkv", "m4v", "webm"];
const AUDIO_EXTS = ["mp3", "mpeg", "wav", "m4a", "ogg", "flac"];

const MIME_MAP = {
  mp3: "audio/mpeg", mpeg: "audio/mpeg", wav: "audio/wav",
  m4a: "audio/mp4", ogg: "audio/ogg", flac: "audio/flac",
  webm: "audio/webm", mp4: "video/mp4", mov: "video/quicktime",
  avi: "video/x-msvideo", mkv: "video/x-matroska", m4v: "video/mp4",
};

exports.handler = async function (event) {
  const tmpFiles = [];

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

    const ext = clientFilename.split(".").pop().toLowerCase();
    const ts = Date.now();
    const inputPath = `/tmp/input_${ts}.${ext}`;
    fs.writeFileSync(inputPath, buffer);
    tmpFiles.push(inputPath);

    // Decide which file to send to Whisper
    let whisperPath = inputPath;
    let whisperExt = ext;

    const isVideo = VIDEO_EXTS.includes(ext);
    const needsConversion = isVideo || buffer.length > 20 * 1024 * 1024;

    if (needsConversion) {
      if (!ffmpegPath || !execSync) {
        // ffmpeg not available — reject video, try raw audio anyway
        if (isVideo) {
          return json(400, { error: "Video files require ffmpeg. Please upload MP3, WAV, M4A, or OGG audio instead." });
        }
        // For large audio, just try sending directly (Whisper handles up to 25MB)
      } else {
        // Convert with ffmpeg
        const audioPath = `/tmp/audio_${ts}.mp3`;
        tmpFiles.push(audioPath);
        try {
          execSync(
            `"${ffmpegPath}" -y -i "${inputPath}" -vn -ac 1 -ar 16000 -q:a 5 -f mp3 "${audioPath}"`,
            { timeout: 120000, stdio: "pipe" }
          );
          whisperPath = audioPath;
          whisperExt = "mp3";
          console.log(`Converted: ${(fs.statSync(audioPath).size / 1024 / 1024).toFixed(2)} MB`);
        } catch(ffErr) {
          return json(400, { error: "Could not convert this file. Please try MP3, WAV, or M4A." });
        }
      }
    }

    // Whisper 25MB hard limit
    if (fs.statSync(whisperPath).size > 25 * 1024 * 1024) {
      return json(400, { error: "File too large for transcription (max 25MB). Please use a shorter recording." });
    }

    // Send to Whisper
    const mime = MIME_MAP[whisperExt] || "audio/mpeg";
    const whisperParams = {
      file: await toFile(fs.createReadStream(whisperPath), `audio.${whisperExt}`, { type: mime }),
      model: "whisper-1",
      response_format: "verbose_json",
    };
    if (language !== "auto") whisperParams.language = language;

    const transcription = await openai.audio.transcriptions.create(whisperParams);

    // Build transcript from ALL segments
    const segs = transcription.segments || [];
    let transcriptText = "";
    let segments = [];

    if (wantTimestamps && segs.length > 0) {
      segments = segs.map(s => ({
        start: fmt(s.start), end: fmt(s.end), text: s.text.trim()
      }));
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
    tmpFiles.forEach(f => { try { fs.unlinkSync(f); } catch(_) {} });
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
