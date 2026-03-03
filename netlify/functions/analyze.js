const { OpenAI } = require("openai");

exports.handler = async function (event) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Get base64 audio from frontend
    const { file } = JSON.parse(event.body);

    // Convert base64 to Buffer
    const buffer = Buffer.from(file.split(",")[1], "base64");

    const response = await openai.audio.transcriptions.create({
      file: buffer,
      model: "gpt-4o-mini-transcribe",
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