const { OpenAI, toFile } = require("openai");
const fs = require("fs");

exports.handler = async function (event) {
  let tmpPath = null;
  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    // Parse query params: ?language=hi&timestamps=true&summary=true
    const params = event.queryStringParameters || {};
    const language = params.language || "auto";
    const wantTimestamps = params.timestamps === "true";
    const wantSummary = params.summary === "true";

    // Receive raw binary sent as application/octet-stream
    const buffer = event.isBase64Encoded
      ? Buffer.from(event.body, "base64")
      : Buffer.from(event.body, "binary");

    // Validate file size (Whisper limit = 25MB)
    const MAX_BYTES = 25 * 1024 * 1024;
    if (buffer.length > MAX_BYTES) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "File too large. Maximum size is 25MB for Whisper API." }),
      };
    }

    // Detect real file format from magic bytes
    const { ext, mime } = detectFileType(buffer);

    // Write to /tmp with correct extension
    tmpPath = `/tmp/audio_${Date.now()}.${ext}`;
    fs.writeFileSync(tmpPath, buffer);

    // Build Whisper request
    const whisperParams = {
      file: await toFile(fs.createReadStream(tmpPath), `audio.${ext}`, { type: mime }),
      model: "whisper-1",
      response_format: wantTimestamps ? "verbose_json" : "json",
    };

    if (language !== "auto") whisperParams.language = language;

    const transcription = await openai.audio.transcriptions.create(whisperParams);

    // Format transcript text
    let transcriptText = "";
    let segments = [];

    if (wantTimestamps && transcription.segments) {
      segments = transcription.segments.map(seg => ({
        start: formatTime(seg.start),
        end: formatTime(seg.end),
        text: seg.text.trim(),
      }));
      transcriptText = segments.map(s => `[${s.start}] ${s.text}`).join("\n");
    } else {
      transcriptText = transcription.text || "";
    }

    // Word count & duration
    const wordCount = transcriptText.replace(/\[.*?\]/g, "").trim().split(/\s+/).filter(Boolean).length;
    const duration = transcription.duration ? Math.round(transcription.duration) : null;

    // Optional: AI summary via GPT-4o-mini
    let summary = null;
    if (wantSummary && transcriptText.length > 100) {
      const summaryResp = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a concise summarizer. Given a transcript, produce: 1) A 2-3 sentence summary. 2) Up to 5 bullet-point key points. Format as JSON: { summary: string, keyPoints: string[] }. Respond with JSON only, no markdown."
          },
          {
            role: "user",
            content: `Transcript:\n${transcriptText.slice(0, 4000)}`
          }
        ],
        max_tokens: 400,
      });

      try {
        summary = JSON.parse(summaryResp.choices[0].message.content);
      } catch {
        summary = { summary: summaryResp.choices[0].message.content, keyPoints: [] };
      }
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: transcriptText,
        segments: wantTimestamps ? segments : undefined,
        summary: summary || undefined,
        wordCount,
        duration,
        language: transcription.language || language,
        detectedFormat: ext,
      }),
    };

  } catch (error) {
    console.error("Error:", error.message);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: error.message }),
    };
  } finally {
    if (tmpPath) try { fs.unlinkSync(tmpPath); } catch (_) {}
  }
};

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function detectFileType(buffer) {
  if (buffer[0] === 0x4F && buffer[1] === 0x67 && buffer[2] === 0x67 && buffer[3] === 0x53)
    return { ext: "ogg", mime: "audio/ogg" };
  if (buffer[0] === 0x49 && buffer[1] === 0x44 && buffer[2] === 0x33)
    return { ext: "mp3", mime: "audio/mpeg" };
  if (buffer[0] === 0xFF && (buffer[1] & 0xE0) === 0xE0)
    return { ext: "mp3", mime: "audio/mpeg" };
  if (buffer[0] === 0x52 && buffer[1] === 0x49 && buffer[2] === 0x46 && buffer[3] === 0x46)
    return { ext: "wav", mime: "audio/wav" };
  if (buffer.length > 8 && buffer[4] === 0x66 && buffer[5] === 0x74 && buffer[6] === 0x79 && buffer[7] === 0x70)
    return { ext: "m4a", mime: "audio/mp4" };
  if (buffer[0] === 0x1A && buffer[1] === 0x45 && buffer[2] === 0xDF && buffer[3] === 0xA3)
    return { ext: "webm", mime: "audio/webm" };
  if (buffer[0] === 0x66 && buffer[1] === 0x4C && buffer[2] === 0x61 && buffer[3] === 0x43)
    return { ext: "flac", mime: "audio/flac" };
  return { ext: "mp3", mime: "audio/mpeg" };
}
