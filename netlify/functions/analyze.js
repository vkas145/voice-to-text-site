const { OpenAI, toFile } = require("openai");
const fs = require("fs");

const MIME_MAP = {
  mp3: "audio/mpeg", mpeg: "audio/mpeg", wav: "audio/wav",
  m4a: "audio/mp4", ogg: "audio/ogg", flac: "audio/flac", webm: "audio/webm",
};

exports.handler = async function (event) {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  let tmpPath = null;

  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const params = event.queryStringParameters || {};

    // Text-only summarization mode (used after multi-chunk transcription)
    if (params.mode === 'summarize') {
      const text = event.isBase64Encoded
        ? Buffer.from(event.body, 'base64').toString('utf8')
        : (event.body || '');
      if (text.length < 50) return json(400, { error: 'No text provided for summary.' });
      const wantSentiment = params.sentiment === 'true';
      const systemContent = wantSentiment
        ? 'Return JSON only: {"summary":"2-3 sentence overview","keyPoints":["concise bullet point"],"sentiment":"positive|neutral|negative","tone":"one descriptive word (e.g. professional, casual, tense)","emotions":["2-3 key emotions detected in the audio"]}'
        : 'Return JSON only: { "summary": "2-3 sentences", "keyPoints": ["..."] }';
      const resp = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemContent },
          { role: 'user', content: `Transcript:\n${text.slice(0, 12000)}` },
        ],
        max_tokens: 600,
      });
      let summary;
      try { summary = JSON.parse(resp.choices[0].message.content); }
      catch { summary = { summary: resp.choices[0].message.content, keyPoints: [] }; }
      return json(200, { summary });
    }
    const language = params.language || "auto";
    const wantTimestamps = params.timestamps === "true";
    const wantSummary = params.summary === "true";
    const clientFilename = params.filename || "audio.mp3";

    // FIX: The frontend sends raw base64 text (Content-Type: text/plain).
    // Netlify may deliver this as-is (isBase64Encoded=false) or re-encode it
    // (isBase64Encoded=true). We need to handle both cases correctly.
    let buffer;
    if (event.isBase64Encoded) {
      // Netlify re-encoded the body — decode Netlify's layer first, then
      // the result IS the original base64 string from the browser, decode again.
      const bodyStr = Buffer.from(event.body, "base64").toString("utf8");
      buffer = Buffer.from(bodyStr, "base64");
    } else {
      // Body arrived as plain text — it is already the base64 string from the browser.
      buffer = Buffer.from(event.body || "", "base64");
    }

    const fileSizeMB = (buffer.length / 1024 / 1024).toFixed(2);
    console.log(`File: ${clientFilename}, ${fileSizeMB} MB, isBase64Encoded: ${event.isBase64Encoded}`);

    // Sanity check: if buffer is tiny the decode likely went wrong
    if (buffer.length < 100) {
      return json(400, { error: "Could not read audio data. Please try again." });
    }

    // 24MB ≈ 20 min of high-quality audio
    if (buffer.length > 24 * 1024 * 1024) {
      return json(400, { error: "Audio too long. Please keep recordings under 20 minutes." });
    }

    const ext = clientFilename.split(".").pop().toLowerCase();
    if (!MIME_MAP[ext]) {
      return json(400, { error: `Unsupported format: .${ext}. Please use MP3, WAV, M4A, OGG, WEBM, or FLAC.` });
    }

    // Write to /tmp
    tmpPath = `/tmp/audio_${Date.now()}.${ext}`;
    fs.writeFileSync(tmpPath, buffer);

    // Send to Whisper
    const whisperParams = {
      file: await toFile(fs.createReadStream(tmpPath), `audio.${ext}`, { type: MIME_MAP[ext] }),
      model: "whisper-1",
      response_format: "verbose_json",
    };
    if (language !== "auto") whisperParams.language = language;
    // Prompt from previous chunk anchors language/context and prevents hallucination
    if (params.prompt) whisperParams.prompt = decodeURIComponent(params.prompt).slice(0, 224);

    const transcription = await openai.audio.transcriptions.create(whisperParams);

    // Build transcript from ALL segments — never truncate
    const segs = transcription.segments || [];
    let transcriptText = "";
    let segments = [];

    if (wantTimestamps && segs.length > 0) {
      segments = segs.map(s => ({ start: fmt(s.start), end: fmt(s.end), text: s.text.trim() }));
      transcriptText = segments.map(s => `[${s.start}] ${s.text}`).join("\n");
    } else {
      transcriptText = segs.length > 0
        ? segs.map(s => s.text.trim()).join(" ")
        : (transcription.text || "");
    }

    const wordCount = transcriptText.replace(/\[.*?\]/g, "").trim().split(/\s+/).filter(Boolean).length;
    const duration = transcription.duration ? Math.round(transcription.duration) : null;

    // Optional summary + sentiment
    const wantSentiment = params.sentiment === 'true';
    let summary = null;
    if (wantSummary && transcriptText.length > 100) {
      const systemContent = wantSentiment
        ? 'Return JSON only: {"summary":"2-3 sentence overview","keyPoints":["concise bullet point"],"sentiment":"positive|neutral|negative","tone":"one descriptive word (e.g. professional, casual, tense)","emotions":["2-3 key emotions detected in the audio"]}'
        : 'Return JSON only: { "summary": "2-3 sentences", "keyPoints": ["..."] }';
      const resp = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemContent },
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
      language: toIsoCode(transcription.language) || language,
      detectedFormat: ext,
    });

  } catch (error) {
    console.error("Error:", error.message);
    return json(500, { error: error.message });
  } finally {
    if (tmpPath) try { fs.unlinkSync(tmpPath); } catch(_) {}
  }
};

function json(code, obj) {
  return {
    statusCode: code,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify(obj),
  };
}

function fmt(s) {
  return `${Math.floor(s/60).toString().padStart(2,"0")}:${Math.floor(s%60).toString().padStart(2,"0")}`;
}

// Whisper returns full language names (e.g. "english") — map to ISO-639-1 codes
const LANG_NAME_TO_ISO = {
  afrikaans:"af",albanian:"sq",amharic:"am",arabic:"ar",armenian:"hy",
  assamese:"as",azerbaijani:"az",bashkir:"ba",basque:"eu",belarusian:"be",
  bengali:"bn",bosnian:"bs",breton:"br",bulgarian:"bg",burmese:"my",
  catalan:"ca","cantonese":"yue",croatian:"hr",czech:"cs",danish:"da",dutch:"nl",
  english:"en",estonian:"et",faroese:"fo",finnish:"fi",french:"fr",
  galician:"gl",georgian:"ka",german:"de",greek:"el",gujarati:"gu",
  haitian:"ht",hausa:"ha",hebrew:"he",hindi:"hi",hungarian:"hu",icelandic:"is",
  indonesian:"id",italian:"it",japanese:"ja",javanese:"jw",kannada:"kn",
  kazakh:"kk",khmer:"km",korean:"ko",lao:"lo",latin:"la",latvian:"lv",
  lingala:"ln",lithuanian:"lt",luxembourgish:"lb",macedonian:"mk",malagasy:"mg",
  malay:"ms",malayalam:"ml",maltese:"mt",maori:"mi",marathi:"mr",mongolian:"mn",
  nepali:"ne",norwegian:"no",nynorsk:"nn",occitan:"oc",pashto:"ps",persian:"fa",
  polish:"pl",portuguese:"pt",punjabi:"pa",romanian:"ro",russian:"ru",
  sanskrit:"sa",serbian:"sr",shona:"sn",sindhi:"sd",sinhala:"si",slovak:"sk",
  slovenian:"sl",somali:"so",spanish:"es",sundanese:"su",swahili:"sw",swedish:"sv",
  tagalog:"tl",tajik:"tg",tamil:"ta",tatar:"tt",telugu:"te",thai:"th",tibetan:"bo",
  turkish:"tr",turkmen:"tk",ukrainian:"uk",urdu:"ur",uzbek:"uz",vietnamese:"vi",
  welsh:"cy",yiddish:"yi",yoruba:"yo",
};

function toIsoCode(lang) {
  if (!lang) return null;
  // Already a short code (2-3 chars)
  if (lang.length <= 3) return lang.toLowerCase();
  return LANG_NAME_TO_ISO[lang.toLowerCase()] || null;
}
