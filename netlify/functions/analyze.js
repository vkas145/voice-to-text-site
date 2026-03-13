const { OpenAI, toFile } = require("openai");
const fs = require("fs");

exports.handler = async function (event) {
  let tmpPath = null;
  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    // Netlify sends binary as base64 when isBase64Encoded is true
    const buffer = event.isBase64Encoded
      ? Buffer.from(event.body, "base64")
      : Buffer.from(event.body, "binary");

    console.log("Buffer size:", buffer.length);
    console.log("First 4 bytes:", buffer[0], buffer[1], buffer[2], buffer[3]);

    const { ext, mime } = detectFileType(buffer);
    console.log("Detected type:", ext, mime);

    tmpPath = `/tmp/audio_${Date.now()}.${ext}`;
    fs.writeFileSync(tmpPath, buffer);

    const stats = fs.statSync(tmpPath);
    console.log("File written, size:", stats.size);

    const audioFile = await toFile(
      fs.createReadStream(tmpPath),
      `audio.${ext}`,
      { type: mime }
    );

    const response = await openai.audio.transcriptions.create({
      file: audioFile,
      model: "whisper-1",
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: response.text }),
    };
  } catch (error) {
    console.error("Full error:", JSON.stringify(error, null, 2));
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: error.message }),
    };
  } finally {
    if (tmpPath) try { fs.unlinkSync(tmpPath); } catch (e) {}
  }
};

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
