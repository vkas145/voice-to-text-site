const { OpenAI } = require("openai");

exports.handler = async function (event) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // event.body is already base64 string
    const base64Data = event.body;

    const buffer = Buffer.from(base64Data, "base64");

    const response = await openai.audio.transcriptions.create({
      file: buffer,
      model: "gpt-4o-mini-transcribe",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ text: response.text }),
    };
  } catch (error) {
    console.error("ERROR:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};