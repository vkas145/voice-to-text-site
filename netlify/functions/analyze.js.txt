import OpenAI from "openai";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function handler(event) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const form = formidable({ multiples: false });

  return new Promise((resolve) => {
    form.parse(event, async (err, fields, files) => {
      if (err) {
        resolve({
          statusCode: 500,
          body: JSON.stringify({ error: "File parsing failed" }),
        });
        return;
      }

      try {
        const audioFile = fs.createReadStream(files.file.filepath);

        const transcript = await openai.audio.transcriptions.create({
          file: audioFile,
          model: "whisper-1",
        });

        resolve({
          statusCode: 200,
          body: JSON.stringify({
            transcript: transcript.text,
          }),
        });
      } catch (error) {
        resolve({
          statusCode: 500,
          body: JSON.stringify({ error: error.message }),
        });
      }
    });
  });
}