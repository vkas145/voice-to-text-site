const { OpenAI } = require("openai");

exports.handler = async function (event, context) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const body = JSON.parse(event.body);

    const response = await openai.audio.transcriptions.create({
      file: body.file,
      model: "gpt-4o-mini-transcribe",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ text: response.text }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};