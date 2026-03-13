const { OpenAI } = require("openai");
const fs = require("fs");
const path = require("path");

exports.handler = async function (event) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const base64Data = event.isBase64Encoded
      ? event.body
      : Buffer.from(event.body, "utf8").toString("base64");

    const buffer = Buffer.from(base64Data, "base64");

    // Detect real file type from magic bytes
    const { ext, mime } = detectFileType(buffer);

    // Save to /tmp with correct extension
    const tmpPath = `/tmp/audio_${Date.now()}.${ext}`;
    fs.writeFileSync(tmpPath, buffer);

    const response = await openai.audio.transcriptions.create({
      file: fs.createReadStream(tmpPath),
      model: "whisper-1",
    });

    // Cleanup
    try { fs.unlinkSync(tmpPath); } catch (e) {}

    return {
      statusCode: 200,
      body: JSON.stringify({ text: response.text }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

function detectFileType(buffer) {
  // OGG (WhatsApp PTT voice messages)
  if (buffer[0] === 0x4F && buffer[1] === 0x67 && buffer[2] === 0x67 && buffer[3] === 0x53) {
    return { ext: "ogg", mime: "audio/ogg" };
  }
  // MP3 with ID3 tag
  if (buffer[0] === 0x49 && buffer[1] === 0x44 && buffer[2] === 0x33) {
    return { ext: "mp3", mime: "audio/mpeg" };
  }
  // MP3 without ID3 (starts with sync frame)
  if (buffer[0] === 0xFF && (buffer[1] === 0xFB || buffer[1] === 0xF3 || buffer[1] === 0xF2)) {
    return { ext: "mp3", mime: "audio/mpeg" };
  }
  // WAV
  if (buffer[0] === 0x52 && buffer[1] === 0x49 && buffer[2] === 0x46 && buffer[3] === 0x46) {
    return { ext: "wav", mime: "audio/wav" };
  }
  // M4A / MP4
  if (buffer[4] === 0x66 && buffer[5] === 0x74 && buffer[6] === 0x79 && buffer[7] === 0x70) {
    return { ext: "m4a", mime: "audio/mp4" };
  }
  // WebM
  if (buffer[0] === 0x1A && buffer[1] === 0x45 && buffer[2] === 0xDF && buffer[3] === 0xA3) {
    return { ext: "webm", mime: "audio/webm" };
  }
  // FLAC
  if (buffer[0] === 0x66 && buffer[1] === 0x4C && buffer[2] === 0x61 && buffer[3] === 0x43) {
    return { ext: "flac", mime: "audio/flac" };
  }
  // Default fallback — try as mp3
  return { ext: "mp3", mime: "audio/mpeg" };
}
