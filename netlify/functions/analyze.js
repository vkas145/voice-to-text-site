const { OpenAI } = require("openai");

exports.handler = async function (event) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Handle both raw base64 string and Netlify's auto base64 encoding
    const base64Data = event.isBase64Encoded
      ? event.body
      : Buffer.from(event.body, "utf8").toString("base64");

    const buffer = Buffer.from(base64Data, "base64");

    const file = new File([buffer], "audio.mp3", {
      type: "audio/mpeg",
    });

    const response = await openai.audio.transcriptions.create({
      file: file,
      model: "gpt-4o-mini-transcribe",  // ✅ keeping your model
    });

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