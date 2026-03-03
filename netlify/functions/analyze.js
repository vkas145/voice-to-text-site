const { OpenAI } = require("openai");

exports.handler = async function (event) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Base64 string from frontend
    const base64Data = event.body;

    // Convert base64 to buffer
    const buffer = Buffer.from(base64Data, "base64");

    // Create file-like object
    const file = new File([buffer], "audio.mp3", {
      type: "audio/mpeg",
    });

    const response = await openai.audio.transcriptions.create({
      file: file,
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