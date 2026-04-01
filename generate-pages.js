const fs = require('fs');
const path = require('path');

const SITE = 'https://boloaurlikho.com';
const GA = 'G-RP14TND3FS';
const ICON = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%236366f1'/><text x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter,Arial,sans-serif' font-weight='900' font-style='italic' font-size='28' fill='white'>b</text></svg>`;

const pages = [
  // ── FORMAT PAGES ──────────────────────────────────────────────────────────
  {
    slug: 'audio-to-text', title: 'Free Audio to Text Converter Online — No Signup | Bolo Aur Likho',
    desc: 'Convert audio to text free online in seconds. Upload MP3, WAV, M4A, FLAC and more. 99+ languages, AI summary, timestamps. No signup required.',
    h1: 'Free Audio to Text Converter', sub: 'Upload any audio file and get an accurate transcript in seconds. 99+ languages. Completely free.',
    badge: 'Audio to Text',
    intro: ['Converting audio to text used to mean hours of manual typing or paying for a professional transcription service. Not anymore. Bolo Aur Likho uses OpenAI Whisper — the most accurate open-source speech recognition model available — to convert your audio to text in seconds, completely free.',
            'Whether you have a voice memo, an interview recording, a meeting, a podcast episode, or a lecture — upload it here and get a clean, accurate transcript with optional timestamps and an AI-generated summary.'],
    uses: ['Voice memos and personal recordings', 'Meeting and conference call recordings', 'Podcast and video content', 'Interviews and research recordings', 'Lectures and educational content'],
    steps: [['Upload your audio file', 'Click "Upload Audio" and select your file. Supported formats: MP3, WAV, M4A, OGG, WEBM, FLAC. Or record directly in your browser.'],
            ['Choose your options', 'Select the language (or use Auto-detect), and optionally enable Timestamps or AI Summary.'],
            ['Get your transcript', 'Click "Transcribe Now". Your text transcript will be ready within seconds.']],
    features: ['Supports MP3, WAV, M4A, OGG, WEBM, FLAC formats', '99+ languages with automatic language detection', 'AI-powered summary and key points', 'Timestamp markers [MM:SS] for long recordings', 'Audio processed and deleted immediately — private and secure'],
    faq: [['What audio formats can I convert to text?', 'Bolo Aur Likho supports MP3, WAV, M4A, OGG, WEBM, and FLAC formats.'],
          ['How accurate is the audio to text conversion?', 'Powered by OpenAI Whisper, accuracy is 95–99% for clear audio in major languages.'],
          ['Is there a file size limit?', 'You can upload audio files up to 200MB. Longer recordings are processed in parallel chunks automatically.']]
  },
  {
    slug: 'mp3-to-text', title: 'MP3 to Text Converter — Free Online AI Transcription | Bolo Aur Likho',
    desc: 'Convert MP3 to text free online. Upload any MP3 file and get an accurate AI transcript in seconds. No signup required. 99+ languages.',
    h1: 'MP3 to Text Converter — Free Online', sub: 'Upload an MP3 file and get an accurate text transcript in seconds. No account needed.',
    badge: 'MP3 to Text',
    intro: ['MP3 is the world\'s most common audio format — and now you can turn any MP3 file into accurate text in seconds. Bolo Aur Likho\'s free MP3 to text converter handles files of any length, from short voice memos to multi-hour interview recordings.',
            'No subscription, no account, no software to install. Just upload your MP3, choose your language, and get a transcript powered by OpenAI Whisper — the same AI that professionals pay hundreds of dollars a month for.'],
    uses: ['Transcribe podcast episodes from MP3 downloads', 'Convert recorded interviews to text', 'Turn voice memos into written notes', 'Transcribe music lyrics or spoken word audio', 'Convert radio recordings or broadcasts'],
    steps: [['Upload your MP3', 'Click "Upload Audio" or drag and drop your MP3 file onto the upload area.'],
            ['Select language and options', 'Choose the audio language, and optionally enable AI Summary or Timestamps.'],
            ['Download your transcript', 'Click "Transcribe Now". Copy your transcript or download it as a text file.']],
    features: ['Handles MP3 files of any bitrate (64kbps to 320kbps)', 'No file conversion needed — upload MP3 directly', '99+ languages supported', 'AI summary extracts key points automatically', 'Free with no daily limits'],
    faq: [['Can I convert a large MP3 file to text?', 'Yes. Files up to 200MB are supported. Long MP3s are split and processed in parallel for speed.'],
          ['How long does MP3 to text conversion take?', 'A 10-minute MP3 typically transcribes in 15–30 seconds.'],
          ['Do I need to create an account to convert MP3 to text?', 'No. There is no signup, no login, and no credit card required.']]
  },
  {
    slug: 'wav-to-text', title: 'WAV to Text Converter — Free Online AI Transcription | Bolo Aur Likho',
    desc: 'Convert WAV audio files to text free online. Accurate AI transcription in 99+ languages with no signup required. Powered by OpenAI Whisper.',
    h1: 'WAV to Text Converter — Free & Accurate', sub: 'Convert WAV audio to text instantly. No signup. No limits.',
    badge: 'WAV to Text',
    intro: ['WAV files are uncompressed audio, which means they contain the highest quality audio data — and that translates directly into better transcription accuracy. Bolo Aur Likho\'s free WAV to text converter handles WAV files of any size and sample rate.',
            'Used by musicians, producers, broadcasters, field researchers, and legal professionals, WAV recordings deserve a transcription tool that matches their quality. Upload your WAV file and get accurate text output in seconds.'],
    uses: ['Broadcast and radio WAV recordings', 'Field research and documentary audio', 'Legal depositions recorded as WAV', 'Music and spoken word recordings', 'Studio interview recordings'],
    steps: [['Upload your WAV file', 'Drop your WAV file onto the upload area or click to browse. Files up to 200MB are supported.'],
            ['Choose language and options', 'Select the spoken language for best accuracy. Enable timestamps for long recordings.'],
            ['Get your text', 'Click "Transcribe Now". Your WAV audio will be converted to text within seconds.']],
    features: ['Supports all WAV sample rates (8kHz to 96kHz)', 'Mono and stereo WAV files both supported', 'Best accuracy on WAV due to uncompressed audio quality', 'AI summary and key points extraction', 'No signup, no cost, no file retention'],
    faq: [['Why is WAV better than MP3 for transcription?', 'WAV is uncompressed, so it preserves all audio detail. This gives AI transcription models more information to work with, resulting in slightly better accuracy especially for difficult accents or low-volume speech.'],
          ['Can I transcribe a stereo WAV file?', 'Yes. Stereo WAV files are automatically converted to mono for processing, with no loss of transcript quality.'],
          ['What is the maximum WAV file size?', 'Up to 200MB. Large files are processed in chunks automatically.']]
  },
  {
    slug: 'm4a-to-text', title: 'M4A to Text Converter — Free Online AI Transcription | Bolo Aur Likho',
    desc: 'Convert M4A audio to text free online. Transcribe iPhone voice memos, WhatsApp audio, and M4A recordings accurately. No signup needed.',
    h1: 'M4A to Text Converter — Free Online', sub: 'iPhone voice memos, WhatsApp audio, and M4A recordings — transcribed in seconds.',
    badge: 'M4A to Text',
    intro: ['M4A is the default audio format for iPhone voice memos and many WhatsApp audio messages. If you\'ve ever tried to transcribe an iPhone recording and struggled with format compatibility, Bolo Aur Likho solves that instantly — just upload the M4A and get your text.',
            'M4A uses AAC audio compression, which retains excellent quality at small file sizes. This makes it ideal for transcription — high quality audio in a compact file means fast uploads and accurate results.'],
    uses: ['iPhone voice memo transcription', 'WhatsApp audio message to text', 'Apple Voice Recorder files', 'iTunes podcast audio', 'iOS screen recording audio tracks'],
    steps: [['Find your M4A file', 'On iPhone, export your voice memo via AirDrop or Files app. On WhatsApp, save the audio message.'],
            ['Upload to Bolo Aur Likho', 'Go to boloaurlikho.com and upload your M4A file directly.'],
            ['Get your transcript', 'Select language, click Transcribe Now, and your text will be ready in seconds.']],
    features: ['Native M4A/AAC format support — no conversion needed', 'Perfect for iPhone voice memos', 'WhatsApp audio message compatible', 'Hindi, Urdu, English and 99+ other languages', 'Immediate deletion after transcription'],
    faq: [['How do I export an iPhone voice memo as M4A?', 'Open the Voice Memos app, tap the recording, tap the three dots (…), and select Share. You can AirDrop it to your computer or email it to yourself.'],
          ['Can I transcribe WhatsApp voice notes in M4A format?', 'Yes. Save the WhatsApp audio note to your device and upload it directly to Bolo Aur Likho.'],
          ['Is M4A the same as AAC?', 'M4A is a file container format that uses AAC audio compression. Both refer to the same type of audio content.']]
  },
  {
    slug: 'ogg-to-text', title: 'OGG to Text Converter — Free Online AI Transcription | Bolo Aur Likho',
    desc: 'Convert OGG audio files to text free online. Accurate AI transcription for OGG Vorbis and Opus files. No signup required.',
    h1: 'OGG to Text Converter — Free Online', sub: 'Convert OGG Vorbis and Opus audio files to accurate text. No account needed.',
    badge: 'OGG to Text',
    intro: ['OGG is an open-source audio format widely used in Android voice recordings, web applications, and gaming. If you need to transcribe an OGG file, Bolo Aur Likho handles both OGG Vorbis and OGG Opus formats natively.',
            'Upload your OGG file and get an accurate text transcript in seconds — with no need to convert to MP3 or WAV first. It\'s completely free, with no signup required.'],
    uses: ['Android voice recorder OGG files', 'Telegram voice messages', 'Web browser audio recordings (OGG Opus)', 'Open-source game audio', 'Linux audio recordings'],
    steps: [['Upload your OGG file', 'Drop your OGG file onto the upload area or click to browse.'],
            ['Select options', 'Choose language, enable timestamps or AI summary as needed.'],
            ['Get your text', 'Click Transcribe Now and download your transcript.']],
    features: ['Supports OGG Vorbis and OGG Opus', 'Android voice recorder compatible', 'Telegram voice note compatible', '99+ languages', 'Free, no signup'],
    faq: [['What is the difference between OGG Vorbis and OGG Opus?', 'Both are open-source codecs in the OGG container. Opus is newer and more efficient at lower bitrates. Both are fully supported.'],
          ['Can I transcribe Telegram voice messages in OGG?', 'Yes. Save the Telegram voice message as an OGG file and upload it directly.'],
          ['Is OGG transcription as accurate as MP3?', 'Yes. Audio quality is comparable and transcription accuracy is equivalent.']]
  },
  {
    slug: 'flac-to-text', title: 'FLAC to Text Converter — Free Online AI Transcription | Bolo Aur Likho',
    desc: 'Convert FLAC audio files to text free online. Lossless audio transcription with maximum accuracy. No signup required.',
    h1: 'FLAC to Text Converter — Free Online', sub: 'Lossless FLAC audio gives you the best possible transcription accuracy. No signup needed.',
    badge: 'FLAC to Text',
    intro: ['FLAC (Free Lossless Audio Codec) preserves every detail of the original recording without compression artifacts. For transcription, this means the highest possible audio fidelity and the best chance of accurate speech recognition, especially for difficult accents, low voices, or noisy environments.',
            'Bolo Aur Likho supports FLAC natively. Upload your FLAC recording and get an accurate text transcript powered by OpenAI Whisper — free, with no signup required.'],
    uses: ['High-quality studio interview recordings', 'Archival audio transcription', 'Legal depositions in lossless format', 'Research field recordings', 'Music transcription projects'],
    steps: [['Upload your FLAC file', 'Drop your FLAC file onto the Bolo Aur Likho upload area.'],
            ['Choose language', 'Select the spoken language for best accuracy on technical or specialist content.'],
            ['Transcribe', 'Click Transcribe Now. FLAC files may be slightly larger but transcription speed is unaffected.']],
    features: ['Lossless audio = maximum transcription accuracy', 'Handles large FLAC files up to 200MB', 'No format conversion required', '99+ languages', 'Files deleted immediately after processing'],
    faq: [['Is FLAC better than WAV for transcription?', 'Both are lossless formats and give equivalent transcription accuracy. FLAC files are smaller due to lossless compression, making them faster to upload.'],
          ['Why would I use FLAC instead of MP3 for transcription?', 'FLAC preserves audio quality that MP3 compression discards. For difficult recordings (quiet voices, background noise), FLAC can give noticeably better results.'],
          ['Can I transcribe a multi-hour FLAC recording?', 'Yes. Files up to 200MB are supported and processed in parallel chunks automatically.']]
  },
  // ── USE-CASE PAGES ────────────────────────────────────────────────────────
  {
    slug: 'podcast-transcription', title: 'Free Podcast Transcription Online — AI Accurate | Bolo Aur Likho',
    desc: 'Transcribe your podcast for free online. Accurate AI transcription in 99+ languages with timestamps and AI summary. No signup required.',
    h1: 'Free Podcast Transcription Online', sub: 'Turn podcast episodes into searchable text. Boost your SEO. Reach more listeners.',
    badge: 'Podcast',
    intro: ['A podcast transcript does more than make your content accessible — it supercharges your SEO. Google cannot index audio, but it can index every word of a transcript. Podcasters who publish transcripts consistently outrank those who don\'t.',
            'Bolo Aur Likho transcribes your podcast episodes for free, with no word limit, no signup, and no waiting. Upload the episode MP3 or WAV, get a clean transcript, and publish it alongside your episode.'],
    uses: ['Full episode transcripts for your podcast website', 'Show notes and chapter summaries with AI', 'Clip quotes for social media', 'Repurpose episodes as blog posts', 'Create SEO content from spoken interviews'],
    steps: [['Export your episode', 'Export your podcast episode as an MP3 or WAV from your recording software.'],
            ['Upload to Bolo Aur Likho', 'Upload the file and enable "AI Summary" for a ready-made episode description.'],
            ['Publish your transcript', 'Copy the transcript, add it to your episode page, and watch your organic traffic grow.']],
    features: ['Full episode transcription with no time limit', 'AI summary for episode descriptions and show notes', 'Timestamps for chapter markers', 'Supports MP3, WAV, M4A formats', '99+ languages including Hindi, Spanish, Arabic'],
    faq: [['How long does podcast transcription take?', 'A 60-minute episode typically transcribes in 60–90 seconds.'],
          ['Will transcribing my podcast improve my SEO?', 'Yes. Published transcripts allow Google to index your spoken content, ranking you for keywords your listeners search for.'],
          ['Can I transcribe a podcast in Hindi or regional languages?', 'Yes. Select Hindi or your language from the dropdown before transcribing.']]
  },
  {
    slug: 'interview-transcription', title: 'Free Interview Transcription Online — AI Accurate | Bolo Aur Likho',
    desc: 'Transcribe interviews for free online. Accurate AI transcription for journalist, researcher, and HR interviews. No signup required.',
    h1: 'Free Interview Transcription Online', sub: 'Accurate transcripts for journalist, researcher, and HR interviews. Ready in seconds.',
    badge: 'Interview',
    intro: ['Manually transcribing an interview takes 4–6 hours for every hour of audio. Bolo Aur Likho cuts that to seconds. Upload your interview recording and get a searchable, accurate text transcript you can quote, analyse, and share immediately.',
            'Journalists, researchers, HR professionals, and documentary makers all rely on accurate interview transcription. Bolo Aur Likho handles it for free, with no account, no monthly subscription, and no per-minute charges.'],
    uses: ['Journalist interview transcription', 'Academic research interview analysis', 'HR recruitment interview notes', 'Documentary and film interview transcription', 'User research interview synthesis'],
    steps: [['Record your interview', 'Use any recorder app or device. Export as MP3, WAV, or M4A.'],
            ['Upload to Bolo Aur Likho', 'Upload the file. Enable Timestamps to reference specific moments.'],
            ['Cite and quote accurately', 'Use the timestamped transcript to pull exact quotes with confidence.']],
    features: ['Accurate verbatim transcription with punctuation', 'Timestamps for easy navigation and citation', 'AI summary extracts key themes', 'Supports long interviews up to 200MB', 'Private — audio deleted immediately'],
    faq: [['How accurate is AI interview transcription?', 'For clear, single-speaker audio, accuracy is 95–99%. Two-person interviews with clear turn-taking also achieve high accuracy.'],
          ['Can I transcribe a phone interview?', 'Yes. Record the call using a call recorder app, then upload the audio file.'],
          ['Is my interview audio kept private?', 'Yes. Audio is processed and deleted immediately. Nothing is stored or shared.']]
  },
  {
    slug: 'lecture-transcription', title: 'Free Lecture Transcription — Transcribe University Lectures Online | Bolo Aur Likho',
    desc: 'Transcribe university and school lectures for free. Accurate AI transcription for students. No signup required. 99+ languages.',
    h1: 'Free Lecture Transcription for Students', sub: 'Turn recorded lectures into searchable, revisable text notes. Completely free.',
    badge: 'Lectures',
    intro: ['Recorded lectures are only useful if you can search them, revisit key concepts, and reference exact quotes in your assignments. A transcript transforms a passive recording into an active study tool.',
            'Bolo Aur Likho transcribes university lectures, school lessons, and online course videos for free. Upload your recording and get full text notes with timestamps — search for any topic instantly, highlight, and annotate.'],
    uses: ['University lecture recordings', 'Online course video audio', 'Tutorial and workshop recordings', 'Seminar and guest speaker notes', 'Language learning lesson transcription'],
    steps: [['Record your lecture', 'Use your phone, a dictaphone, or download audio from a recorded session.'],
            ['Upload to Bolo Aur Likho', 'Upload the MP3 or WAV. Enable Timestamps for chapter navigation.'],
            ['Study smarter', 'Search, highlight, and reference your transcript for essays and revision.']],
    features: ['Full lecture transcription with no time limit', 'Timestamps every few seconds for easy navigation', 'AI summary of key lecture points', 'Supports 99+ academic languages', 'Free — no institutional account needed'],
    faq: [['Can I transcribe a 2-hour lecture?', 'Yes. There is no time limit. Long lectures are processed in chunks automatically.'],
          ['What languages are supported for lecture transcription?', '99+ languages including all major European, Asian, and South Asian languages.'],
          ['Can I use the transcript in my assignments?', 'Yes. The transcript is plain text you can copy, edit, and cite freely.']]
  },
  {
    slug: 'meeting-transcription', title: 'Free Meeting Transcription Online — AI Minutes | Bolo Aur Likho',
    desc: 'Transcribe meeting recordings for free. Get accurate meeting minutes with AI summary and action points. No signup required.',
    h1: 'Free Meeting Transcription & AI Minutes', sub: 'Upload your meeting recording and get accurate minutes with AI summary. Ready in seconds.',
    badge: 'Meetings',
    intro: ['Writing meeting minutes by hand is slow and error-prone. Recording the meeting and transcribing it means everyone gets an accurate record — and nobody spends an hour writing notes after the call.',
            'Bolo Aur Likho transcribes Zoom, Teams, Google Meet, and any other recorded meeting for free. Enable AI Summary to get a 2–3 sentence meeting summary and bullet-point action items automatically extracted from the transcript.'],
    uses: ['Zoom meeting transcription and minutes', 'Google Meet recording transcription', 'Microsoft Teams call notes', 'Board meeting minutes', 'Client call summaries'],
    steps: [['Record your meeting', 'Use Zoom, Teams, or Meet\'s built-in recording, or any screen recorder with audio.'],
            ['Upload the audio', 'Export the audio track (MP3 or M4A) and upload to Bolo Aur Likho.'],
            ['Get minutes with AI summary', 'Enable AI Summary. Get a full transcript plus key decisions and action items highlighted.']],
    features: ['Full meeting transcript with speaker turn detection', 'AI summary with key decisions and action items', 'Timestamps for referencing specific discussion points', 'Works with Zoom, Teams, Meet recordings', 'Private — audio deleted after processing'],
    faq: [['Can I transcribe a Zoom recording for free?', 'Yes. Export the Zoom recording audio as MP3 and upload it to Bolo Aur Likho.'],
          ['Does the AI summary include action items?', 'Yes. The AI summary includes a 2–3 sentence overview and bullet points of key points and decisions.'],
          ['How long does meeting transcription take?', 'A 1-hour meeting typically transcribes in 60–90 seconds.']]
  },
  {
    slug: 'zoom-transcription', title: 'Free Zoom Meeting Transcription Online | Bolo Aur Likho',
    desc: 'Transcribe Zoom meetings for free. Upload your Zoom recording audio and get accurate meeting minutes with AI summary. No signup required.',
    h1: 'Free Zoom Meeting Transcription', sub: 'Turn your Zoom recordings into searchable transcripts and meeting minutes. No account needed.',
    badge: 'Zoom',
    intro: ['Zoom\'s built-in transcription requires a paid plan and is limited to English. Bolo Aur Likho gives you free, accurate transcription for any Zoom recording in 99+ languages — no Zoom subscription upgrade needed.',
            'Export your Zoom recording audio as MP3 (it takes 30 seconds), upload it here, and get a full transcript with an AI-generated meeting summary. Perfect for sharing with team members who missed the call.'],
    uses: ['Team stand-up and sprint meeting notes', 'Client call transcription', 'Webinar and training session transcripts', 'Interview recordings from Zoom', 'Board and management meeting minutes'],
    steps: [['Export Zoom audio', 'In Zoom, go to Recordings → your meeting → Download audio (MP3).'],
            ['Upload to Bolo Aur Likho', 'Upload the MP3. Enable AI Summary for automatic meeting minutes.'],
            ['Share your minutes', 'Copy the transcript and share with your team. Done.']],
    features: ['Supports all Zoom recording formats', '99+ languages — not just English like Zoom\'s own transcription', 'AI meeting summary with key points', 'Timestamps for referencing specific moments', 'Free — no Zoom paid plan required'],
    faq: [['How do I get the audio from a Zoom recording?', 'Go to your Zoom account → Recordings → find your meeting → click the Download icon next to the audio file (MP3).'],
          ['Does Zoom transcription support Hindi?', 'Zoom\'s built-in transcription only supports English. Bolo Aur Likho supports Hindi and 98 other languages for free.'],
          ['Can I transcribe a local Zoom recording?', 'Yes. Find the recording in your Zoom recordings folder (usually in Documents/Zoom). Upload the M4A or MP4 audio to Bolo Aur Likho.']]
  },
  {
    slug: 'google-meet-transcription', title: 'Free Google Meet Transcription Online | Bolo Aur Likho',
    desc: 'Transcribe Google Meet recordings for free. Accurate AI transcription with meeting summary. No signup required. 99+ languages.',
    h1: 'Free Google Meet Transcription', sub: 'Turn Google Meet recordings into accurate text minutes. Free, no signup.',
    badge: 'Google Meet',
    intro: ['Google Meet\'s native transcription is only available on Workspace Business Standard and above — a significant paid upgrade. Bolo Aur Likho gives you free, accurate transcription for any Google Meet recording, regardless of your Workspace plan.',
            'Download your Meet recording from Google Drive, extract the audio, and upload it here. You\'ll have a full transcript and AI-generated meeting summary in under two minutes.'],
    uses: ['Team meeting notes from Google Meet', 'Client presentation transcripts', 'Online training session notes', 'Remote interview transcription', 'Academic seminar recordings'],
    steps: [['Download Meet recording', 'Google Meet saves recordings to Google Drive automatically. Download the video file.'],
            ['Extract the audio', 'Open the video in any tool and save/export as MP3 or M4A, or use an online converter.'],
            ['Transcribe and share', 'Upload to Bolo Aur Likho and get your transcript with AI summary.']],
    features: ['Free alternative to Google Workspace transcription add-on', '99+ languages', 'AI meeting summary', 'Timestamps', 'No account required'],
    faq: [['Where are Google Meet recordings saved?', 'Google Meet recordings are automatically saved to your Google Drive in a folder called "Meet Recordings".'],
          ['Can I transcribe a Google Meet recording in Hindi?', 'Yes. Select Hindi from the language dropdown before transcribing.'],
          ['Do I need a Google Workspace account to use this?', 'No. You only need the recording file. The transcription is done entirely by Bolo Aur Likho.']]
  },
  {
    slug: 'teams-transcription', title: 'Free Microsoft Teams Transcription Online | Bolo Aur Likho',
    desc: 'Transcribe Microsoft Teams meeting recordings for free. Accurate AI transcription with meeting minutes and AI summary. No signup required.',
    h1: 'Free Microsoft Teams Meeting Transcription', sub: 'Transcribe Teams recordings into accurate meeting minutes. Free, no account needed.',
    badge: 'MS Teams',
    intro: ['Microsoft Teams\' built-in transcription is limited to certain Microsoft 365 licences and supported languages. Bolo Aur Likho gives you free, accurate transcription for any Teams recording in 99+ languages.',
            'Teams recordings are saved to OneDrive or SharePoint. Download the recording, extract or use the audio directly, upload it here, and get a full meeting transcript with AI-generated summary in under two minutes.'],
    uses: ['Team standup and sprint meeting notes', 'All-hands and town hall transcripts', 'Training session notes', 'Client and partner call records', 'HR interview documentation'],
    steps: [['Download Teams recording', 'Find your recording in Teams → Chat or Channel → click the recording → open in OneDrive → Download.'],
            ['Upload the audio', 'Upload the MP4 video file (Bolo Aur Likho extracts audio automatically) or extract audio first as MP3.'],
            ['Get your meeting minutes', 'Enable AI Summary for automatic key points and decisions.']],
    features: ['Works with Teams MP4 recordings', 'Free alternative to Teams Premium transcription', '99+ languages supported', 'AI meeting summary and action points', 'Timestamps for navigation'],
    faq: [['How do I find my Microsoft Teams recording?', 'Teams recordings are saved in OneDrive (for personal meetings) or SharePoint (for channel meetings). Look in the "Recordings" folder.'],
          ['Does Teams transcription support Indian languages?', 'Teams\' built-in transcription has limited language support. Bolo Aur Likho supports Hindi, Tamil, Telugu, Bengali, Marathi, and more.'],
          ['Can I use this for Teams without a Microsoft 365 subscription?', 'Yes. As long as you have the recording file, you can transcribe it here for free.']]
  },
  {
    slug: 'whatsapp-voice-to-text', title: 'WhatsApp Voice Message to Text — Free Online | Bolo Aur Likho',
    desc: 'Convert WhatsApp voice messages to text for free. Save and upload voice notes for instant AI transcription. No signup required.',
    h1: 'WhatsApp Voice Message to Text', sub: 'Save your WhatsApp audio and get a text transcript in seconds. Free, no account needed.',
    badge: 'WhatsApp',
    intro: ['WhatsApp voice messages are fast to send but slow to listen to — especially when you receive long ones. Converting WhatsApp voice messages to text lets you read them instantly, search for key information, and respond more efficiently.',
            'Bolo Aur Likho supports Hindi, Urdu, English, Arabic, and 95+ other WhatsApp languages. Save the voice note, upload it, and read it as text in seconds.'],
    uses: ['Long WhatsApp voice notes from family or friends', 'Business WhatsApp voice messages', 'WhatsApp group audio messages', 'Customer voice notes on WhatsApp Business', 'Voice instructions sent via WhatsApp'],
    steps: [['Save the WhatsApp voice note', 'On Android: tap and hold the voice note → Save to downloads. On iPhone: tap the voice note → Share → Save to Files.'],
            ['Upload to Bolo Aur Likho', 'Upload the audio file (usually .opus or .m4a format).'],
            ['Read the text', 'Your WhatsApp voice message will be transcribed to text in seconds.']],
    features: ['Supports WhatsApp audio formats (OGG Opus, M4A)', 'Hindi, Urdu, Arabic, English and 95+ languages', 'No app download needed', 'Audio deleted immediately — completely private', 'Free with no daily limits'],
    faq: [['What format are WhatsApp voice messages saved in?', 'Android saves WhatsApp voice notes as OGG Opus files. iPhone saves them as M4A. Both are supported.'],
          ['Can I transcribe WhatsApp voice messages in Hindi?', 'Yes. Select Hindi from the language dropdown for accurate Hindi transcription.'],
          ['Is it private to transcribe WhatsApp messages?', 'Yes. Your audio is processed by AI and immediately deleted. It is never stored or shared.']]
  },
  {
    slug: 'youtube-transcription', title: 'Free YouTube Video Transcription Online | Bolo Aur Likho',
    desc: 'Transcribe YouTube videos for free. Download audio and upload for accurate AI transcription in 99+ languages. No signup required.',
    h1: 'Free YouTube Video Transcription', sub: 'Turn YouTube videos into accurate text transcripts. Great for notes, SEO, and content repurposing.',
    badge: 'YouTube',
    intro: ['YouTube\'s auto-captions are inconsistent — especially for non-English content, strong accents, or technical vocabulary. Bolo Aur Likho gives you a free, significantly more accurate alternative powered by OpenAI Whisper.',
            'Download the audio from any YouTube video (using a free tool), upload it here, and get a clean text transcript with timestamps and an optional AI summary. Perfect for students, content creators, and researchers.'],
    uses: ['Study notes from educational YouTube videos', 'Podcast episode transcripts from YouTube uploads', 'Content repurposing — turn videos into blog posts', 'Subtitle creation for your own YouTube videos', 'Research notes from documentary content'],
    steps: [['Download YouTube audio', 'Use any free YouTube audio downloader to save the video as MP3 or M4A.'],
            ['Upload to Bolo Aur Likho', 'Upload the audio file. Enable Timestamps for navigation markers.'],
            ['Publish or use your transcript', 'Copy the transcript for notes, blog posts, or subtitles.']],
    features: ['More accurate than YouTube auto-captions for accents and technical content', '99+ languages', 'Timestamps for linking to video moments', 'AI summary for long videos', 'Free, no account required'],
    faq: [['How do I download YouTube audio for transcription?', 'Search for a free "YouTube to MP3" tool in your browser, paste the video URL, and download the audio file.'],
          ['Is transcribing YouTube videos legal?', 'Transcribing for personal use, study, or research is generally permitted. Publishing transcripts of copyrighted content without permission may require the creator\'s consent.'],
          ['Can I transcribe a YouTube video in Hindi or Tamil?', 'Yes. Select the video\'s language from the dropdown for best accuracy.']]
  },
  {
    slug: 'sales-call-transcription', title: 'Free Sales Call Transcription Online — AI Accurate | Bolo Aur Likho',
    desc: 'Transcribe sales calls for free. Get accurate call transcripts with AI summary for coaching, CRM notes, and deal analysis. No signup.',
    h1: 'Free Sales Call Transcription', sub: 'Turn sales call recordings into searchable transcripts with AI-generated call summaries.',
    badge: 'Sales Calls',
    intro: ['Sales calls are goldmines of insight — buyer objections, competitor mentions, pricing discussions, and buying signals are all buried in the audio. Transcribing them makes this intelligence searchable, shareable, and actionable.',
            'Bolo Aur Likho transcribes sales calls for free with no per-minute charges. Upload any call recording and get a full transcript with an AI summary of key discussion points — ready to paste into your CRM.'],
    uses: ['CRM note creation from call recordings', 'Sales coaching and performance review', 'Competitor intelligence from buyer conversations', 'Win/loss analysis from deal calls', 'Compliance documentation for regulated industries'],
    steps: [['Record your sales call', 'Use a call recorder app or your CRM\'s recording feature. Export as MP3 or M4A.'],
            ['Upload and enable AI Summary', 'Upload the call recording and enable AI Summary for automatic key points.'],
            ['Paste into your CRM', 'Copy the AI summary and transcript excerpt directly into your CRM notes.']],
    features: ['Full call transcript with no minute limits', 'AI summary with key talking points', 'Works with Zoom, Teams, Meet, phone recordings', 'Hindi, English and 99+ languages for international sales', 'Private — audio deleted after processing'],
    faq: [['Can I transcribe calls recorded on Zoom or Teams?', 'Yes. Export the audio from your Zoom or Teams recording and upload it here.'],
          ['Is the AI summary good for CRM notes?', 'Yes. The AI summary produces a 2–3 sentence overview and bullet key points — ideal for pasting into Salesforce, HubSpot, or any CRM.'],
          ['Can I transcribe calls in Hindi for Indian sales teams?', 'Yes. Select Hindi or Auto-detect from the language dropdown.']]
  },
  {
    slug: 'webinar-transcription', title: 'Free Webinar Transcription Online — AI Accurate | Bolo Aur Likho',
    desc: 'Transcribe webinar recordings for free. Get accurate transcripts with AI summary for replay, repurposing, and accessibility. No signup.',
    h1: 'Free Webinar Transcription Online', sub: 'Turn webinar recordings into transcripts, summaries, and on-demand content.',
    badge: 'Webinars',
    intro: ['A webinar recording is only valuable if people actually watch it. A transcript dramatically increases reach — it can be published as a blog post, broken into email sequences, posted as a LinkedIn article, or indexed by Google.',
            'Bolo Aur Likho transcribes webinar recordings for free. Upload your webinar audio and get a full transcript with an AI-generated summary in minutes.'],
    uses: ['Replay transcripts for attendees who missed the live session', 'Blog post creation from webinar content', 'Email nurture sequences from webinar scripts', 'Accessibility compliance transcripts', 'Speaker notes and content repurposing'],
    steps: [['Export your webinar audio', 'Download the recording from Zoom, Webex, or your webinar platform. Export audio as MP3.'],
            ['Upload and transcribe', 'Upload to Bolo Aur Likho. Enable AI Summary for an automatic executive summary.'],
            ['Repurpose and publish', 'Use the transcript as a blog post, email series, or replay companion page.']],
    features: ['Full webinar transcription regardless of length', 'AI summary for executive overview', 'Timestamps for topic navigation', 'Supports all webinar platform recording formats', 'Free, no account required'],
    faq: [['How long can a webinar be for transcription?', 'There is no time limit. Files up to 200MB are supported and processed in parallel.'],
          ['Can I use the transcript as closed captions?', 'Yes. The timestamped transcript can be reformatted into SRT subtitle format.'],
          ['Does this work for pre-recorded webinars?', 'Yes. Both live recorded and pre-recorded webinar audio is fully supported.']]
  },
  {
    slug: 'sermon-transcription', title: 'Free Sermon Transcription Online — AI Accurate | Bolo Aur Likho',
    desc: 'Transcribe church sermons for free. Accurate AI transcription for sermon audio. No signup required. 99+ languages including Hindi and Urdu.',
    h1: 'Free Sermon Transcription Online', sub: 'Make your sermons searchable, shareable, and accessible with AI transcription.',
    badge: 'Sermons',
    intro: ['Published sermon transcripts reach congregation members who couldn\'t attend, make your ministry searchable online, and provide accessible content for the hearing impaired. Bolo Aur Likho makes sermon transcription free and effortless.',
            'Upload your sermon audio in any format and get a full, accurate text transcript. With AI summary, the key scripture passages and themes are automatically highlighted.'],
    uses: ['Sunday sermon transcription for church websites', 'Bible study notes and small group resources', 'Accessibility for hearing-impaired congregation members', 'Multilingual church communities', 'Archiving historical sermon recordings'],
    steps: [['Record or download the sermon audio', 'Use your church\'s recording system or download from your podcast/YouTube upload.'],
            ['Upload to Bolo Aur Likho', 'Upload the MP3 or WAV. Select the spoken language for best accuracy.'],
            ['Publish your transcript', 'Post the transcript on your church website alongside the audio or video.']],
    features: ['Full sermon transcription with no length limit', 'AI summary of key themes and scripture', 'Supports 99+ languages including Hindi, Urdu, Tamil', 'Timestamps for referencing specific passages', 'Free — no account required'],
    faq: [['Can I transcribe sermons in Hindi or regional Indian languages?', 'Yes. Select Hindi, Tamil, Telugu, Bengali, Marathi, or any other language from the dropdown.'],
          ['How accurate is sermon transcription?', 'For clear audio with a single preacher, accuracy is typically 95–98%. Background music or ambient noise reduces accuracy.'],
          ['Can I use the transcript for social media?', 'Yes. Pull key quotes for Instagram, Facebook, or Twitter posts directly from the transcript.']]
  },
  {
    slug: 'court-hearing-transcription', title: 'Free Court Hearing Transcription Online | Bolo Aur Likho',
    desc: 'Transcribe court hearing recordings for free. Accurate AI transcription for legal audio. No signup required. Private and secure.',
    h1: 'Free Court Hearing Transcription', sub: 'Accurate transcription for legal audio. Private — files deleted immediately after processing.',
    badge: 'Legal',
    intro: ['Court hearings, depositions, and legal proceedings require accurate transcription for review, analysis, and preparation. Bolo Aur Likho provides free AI transcription powered by OpenAI Whisper — the same model used by many commercial legal transcription services.',
            'Your audio is processed securely and deleted immediately after transcription. Nothing is retained, stored, or shared. For sensitive legal audio, this privacy guarantee matters.'],
    uses: ['Court hearing recording review and preparation', 'Deposition transcript verification', 'Client consultation notes', 'Witness statement documentation', 'Legal research from recorded proceedings'],
    steps: [['Upload your legal audio', 'Upload the court or legal recording. Supported formats: MP3, WAV, M4A, FLAC.'],
            ['Select language', 'Select the spoken language for maximum accuracy on legal terminology.'],
            ['Download and review', 'Download the transcript for review, annotation, and legal use.']],
    features: ['High accuracy on formal speech and legal terminology', 'Timestamps for referencing specific statements', 'Audio deleted immediately after processing', '99+ languages', 'Free — no subscription required'],
    faq: [['Is the transcription private for legal audio?', 'Yes. Audio is processed and immediately deleted. Nothing is stored, logged, or accessible after processing.'],
          ['Is AI court transcription legally admissible?', 'AI transcripts are useful for internal review and preparation but should be verified against official certified transcripts for court use.'],
          ['Can I transcribe Hindi court proceedings?', 'Yes. Select Hindi from the language dropdown.']]
  },
  {
    slug: 'student-transcription', title: 'Free Audio Transcription for Students — Lecture & Class Notes | Bolo Aur Likho',
    desc: 'Free audio transcription for students. Turn lectures, seminars, and tutorials into searchable text notes. No signup. 99+ languages.',
    h1: 'Free Audio Transcription for Students', sub: 'Turn lectures, tutorials, and seminars into searchable text notes. Study smarter.',
    badge: 'Students',
    intro: ['Taking notes while listening to a lecture means you miss half of what\'s being said. Recording the lecture and transcribing it means you capture everything — and can focus fully on understanding during the class.',
            'Bolo Aur Likho is completely free for students. No institutional subscription needed, no limit on how many lectures you transcribe, and no account required. Just upload and get your notes.'],
    uses: ['University lecture transcription', 'Tutorial and workshop notes', 'Language class transcription', 'Online course video notes', 'Study group recording transcription'],
    steps: [['Record your lecture', 'Use your smartphone voice recorder. Place it near the speaker for best audio quality.'],
            ['Upload after class', 'Upload the recording to Bolo Aur Likho. Enable AI Summary for a lecture overview.'],
            ['Study from text', 'Search, highlight, annotate, and create flashcards from your transcript.']],
    features: ['Completely free — no student subscription needed', 'AI summary for quick lecture review', 'Timestamps for navigating to specific topics', '99+ academic languages', 'Private — no audio stored'],
    faq: [['Can I use this for any university or college?', 'Yes. There is no institutional requirement. Any student can use it for free.'],
          ['How much does student transcription cost?', 'It is completely free. No payment, no account, no trial period.'],
          ['Can I transcribe lectures in my native language?', 'Yes. 99+ languages are supported including Hindi, Tamil, Telugu, Bengali, and all major European and Asian languages.']]
  },
  {
    slug: 'customer-service-transcription', title: 'Free Customer Service Call Transcription | Bolo Aur Likho',
    desc: 'Transcribe customer service call recordings for free. AI-accurate transcription with summary for QA, training, and CRM. No signup.',
    h1: 'Free Customer Service Call Transcription', sub: 'Transcribe support calls for QA analysis, agent training, and CRM documentation.',
    badge: 'Support Calls',
    intro: ['Customer service calls contain invaluable feedback — common complaints, product confusion, unresolved issues, and moments of delight. Transcribing them makes this feedback searchable, quantifiable, and actionable.',
            'Bolo Aur Likho transcribes support call recordings for free. Upload any call recording and get a full transcript with AI-generated summary in seconds. Ideal for QA teams, training managers, and CRM documentation.'],
    uses: ['Quality assurance transcript review', 'Agent performance coaching from call transcripts', 'Customer complaint analysis', 'Onboarding and training material creation', 'CRM documentation from call notes'],
    steps: [['Export your call recording', 'Download the call recording from your contact centre platform as MP3 or WAV.'],
            ['Upload to Bolo Aur Likho', 'Upload the recording. Enable AI Summary for automatic call summary.'],
            ['Use for QA and training', 'Copy transcripts into your QA tool or CRM. Share with agents for coaching.']],
    features: ['Full call transcript for every interaction', 'AI summary with issue and resolution highlights', 'Supports all call centre recording formats', 'Hindi, English and 99+ languages for global teams', 'Private — audio deleted after processing'],
    faq: [['Can I transcribe calls in Hindi for Indian call centres?', 'Yes. Bolo Aur Likho is particularly strong on Indian language transcription including Hindi, Gujarati, Marathi, Tamil, and Telugu.'],
          ['Is there a per-call or per-minute charge?', 'No. Transcription is completely free with no per-minute charge.'],
          ['Can I batch transcribe multiple call recordings?', 'Currently, files are uploaded one at a time. For bulk transcription, upload each file and process them in sequence.']]
  },
  // ── LANGUAGE PAGES ────────────────────────────────────────────────────────
  {
    slug: 'hindi-speech-to-text', title: 'Hindi Speech to Text — Free Online AI Transcription | Bolo Aur Likho',
    desc: 'Convert Hindi speech to text for free. Accurate Hindi audio transcription online with OpenAI Whisper. No signup required.',
    h1: 'Hindi Speech to Text — Free Online', sub: 'हिंदी ऑडियो को टेक्स्ट में बदलें — बिल्कुल मुफ्त, बिना साइन अप के।',
    badge: 'Hindi',
    intro: ['Bolo Aur Likho is purpose-built for Hindi speech to text conversion. Powered by OpenAI Whisper — trained on a massive multilingual dataset including Indian languages — it accurately transcribes Hindi speech, including mixed Hindi-English (Hinglish) conversations.',
            'Whether you have a Hindi lecture, meeting, interview, podcast, or WhatsApp voice message — upload the audio and get accurate Hindi text in seconds. Completely free, no account required.'],
    uses: ['Hindi lecture and class recording transcription', 'Bollywood and Hindi podcast transcription', 'Hindi WhatsApp voice note to text', 'Hindi meeting and sales call notes', 'Hinglish mixed-language conversation transcription'],
    steps: [['Upload your Hindi audio', 'Upload any audio file with Hindi speech. MP3, WAV, M4A, and OGG are all supported.'],
            ['Select Hindi as the language', 'Choose "Hindi" from the language dropdown for the best possible accuracy.'],
            ['Get your Hindi transcript', 'Your Hindi speech will be transcribed to Devanagari text in seconds.']],
    features: ['Accurate Hindi Devanagari transcription', 'Supports Hinglish (mixed Hindi-English)', 'Hindi WhatsApp voice note compatible', 'AI summary in Hindi', 'Free, no signup'],
    faq: [['क्या यह हिंदी ट्रांसक्रिप्शन मुफ्त है?', 'हाँ, बिल्कुल मुफ्त है। कोई साइन अप नहीं, कोई क्रेडिट कार्ड नहीं।'],
          ['Is Hinglish (mixed Hindi-English) supported?', 'Yes. Whisper handles code-switching between Hindi and English well, especially in conversational audio.'],
          ['What Hindi script is used in the output?', 'The transcript is output in Devanagari script (the standard Hindi script).']]
  },
  {
    slug: 'spanish-transcription', title: 'Free Spanish Audio Transcription Online | Bolo Aur Likho',
    desc: 'Transcribe Spanish audio to text free online. Accurate AI transcription for Spanish, Latin American and Spanish recordings. No signup.',
    h1: 'Free Spanish Audio Transcription Online', sub: 'Transcripción de audio en español — gratis y sin registro.',
    badge: 'Spanish',
    intro: ['Bolo Aur Likho provides free Spanish audio transcription for all Spanish dialects — Castilian Spanish, Latin American Spanish, Mexican Spanish, Argentinian Spanish, and more. Powered by OpenAI Whisper, it handles regional accents accurately.',
            'Upload Spanish audio in any format and get an accurate Spanish text transcript in seconds. No account required, no file limits, no cost.'],
    uses: ['Spanish podcast and interview transcription', 'Latin American business meeting notes', 'Spanish lecture and educational content', 'Spanish customer service call transcription', 'Spanish language learning content'],
    steps: [['Upload your Spanish audio', 'Upload MP3, WAV, or M4A containing Spanish speech.'],
            ['Select Spanish', 'Choose "Spanish" from the language dropdown for accurate dialect recognition.'],
            ['Get your transcript', 'Your Spanish audio will be transcribed accurately in seconds.']],
    features: ['Supports all Spanish dialects and regional accents', 'Spanish AI summary', 'Timestamps for long recordings', 'Free, no account required', '99+ additional languages also supported'],
    faq: [['Does it support Latin American Spanish?', 'Yes. All Spanish dialects including Mexican, Argentinian, Colombian, and Castilian are supported.'],
          ['¿Es gratuito?', 'Sí, es completamente gratuito. Sin registro, sin límites.'],
          ['Can I transcribe a Spanish podcast?', 'Yes. Upload the episode MP3 and select Spanish for accurate transcription.']]
  },
  {
    slug: 'french-transcription', title: 'Free French Audio Transcription Online | Bolo Aur Likho',
    desc: 'Transcribe French audio to text free online. Accurate AI transcription for French, Canadian French, and African French. No signup.',
    h1: 'Free French Audio Transcription Online', sub: 'Transcription audio en français — gratuite, sans inscription.',
    badge: 'French',
    intro: ['Bolo Aur Likho provides free French audio transcription supporting all French dialects — Metropolitan French, Canadian French (Québécois), Belgian French, and African French varieties. Powered by OpenAI Whisper.',
            'Upload your French audio and get an accurate French text transcript in seconds. No signup, no file limits, completely free.'],
    uses: ['French business meeting transcription', 'French podcast and radio transcription', 'Canadian French content transcription', 'French lecture and academic content', 'French customer service call notes'],
    steps: [['Upload French audio', 'Upload any audio file containing French speech.'],
            ['Select French', 'Choose "French" from the language dropdown.'],
            ['Get accurate transcript', 'Your French audio will be transcribed to text in seconds.']],
    features: ['All French dialects supported', 'French AI summary', 'Timestamps', 'Free, no account required', '99+ other languages available'],
    faq: [['Does it support Canadian French (Québécois)?', 'Yes. OpenAI Whisper handles Québécois and other French dialects well.'],
          ['Est-ce gratuit?', 'Oui, c\'est entièrement gratuit. Aucune inscription requise.'],
          ['Can I transcribe long French recordings?', 'Yes. There is no time limit — long recordings are processed in parallel chunks.']]
  },
  {
    slug: 'arabic-transcription', title: 'Free Arabic Audio Transcription Online | Bolo Aur Likho',
    desc: 'Transcribe Arabic audio to text free online. Accurate AI transcription for Modern Standard Arabic and regional dialects. No signup.',
    h1: 'Free Arabic Audio Transcription Online', sub: 'تحويل الصوت العربي إلى نص — مجانًا وبدون تسجيل.',
    badge: 'Arabic',
    intro: ['Bolo Aur Likho provides free Arabic audio transcription supporting Modern Standard Arabic (MSA) as well as regional dialects including Egyptian Arabic, Gulf Arabic, Levantine Arabic, and North African Arabic.',
            'Upload your Arabic audio and get an accurate Arabic text transcript in seconds. Right-to-left Arabic script output, fully accurate, completely free.'],
    uses: ['Arabic business meeting and call transcription', 'Arabic podcast and media transcription', 'Gulf and Levantine Arabic content', 'Arabic lecture transcription', 'Arabic WhatsApp voice message to text'],
    steps: [['Upload Arabic audio', 'Upload MP3, WAV, or M4A containing Arabic speech.'],
            ['Select Arabic', 'Choose "Arabic" from the language dropdown.'],
            ['Get your Arabic transcript', 'Output in Arabic script (RTL) — copy or download.']],
    features: ['Modern Standard Arabic and regional dialects', 'Right-to-left Arabic script output', 'AI summary in Arabic', 'WhatsApp Arabic voice note compatible', 'Free, no signup'],
    faq: [['Does it support Egyptian or Gulf Arabic dialects?', 'Yes. Whisper handles major Arabic dialects including Egyptian, Gulf, Levantine, and Moroccan.'],
          ['هل هو مجاني؟', 'نعم، مجاني تمامًا. لا يلزم تسجيل.'],
          ['Is Arabic transcription output in Arabic script?', 'Yes. The transcript is output in standard Arabic right-to-left script.']]
  },
  {
    slug: 'portuguese-transcription', title: 'Free Portuguese Audio Transcription Online | Bolo Aur Likho',
    desc: 'Transcribe Portuguese audio to text free online. Accurate AI transcription for Brazilian and European Portuguese. No signup required.',
    h1: 'Free Portuguese Audio Transcription Online', sub: 'Transcrição de áudio em português — grátis, sem cadastro.',
    badge: 'Portuguese',
    intro: ['Bolo Aur Likho provides free Portuguese audio transcription supporting both Brazilian Portuguese (PT-BR) and European Portuguese (PT-PT), as well as African Portuguese varieties.',
            'Upload your Portuguese audio and get an accurate transcript in seconds. Completely free, no account required.'],
    uses: ['Brazilian business meeting transcription', 'Portuguese podcast transcription', 'European Portuguese content', 'Portuguese academic lecture notes', 'Portuguese customer call transcription'],
    steps: [['Upload Portuguese audio', 'Upload any audio file with Portuguese speech.'],
            ['Select Portuguese', 'Choose "Portuguese" to get dialect-aware transcription.'],
            ['Get your transcript', 'Accurate Portuguese text in seconds.']],
    features: ['Brazilian and European Portuguese supported', 'AI summary', 'Timestamps', 'Free, no account', '99+ languages'],
    faq: [['Does it support Brazilian Portuguese (PT-BR)?', 'Yes. Brazilian and European Portuguese are both fully supported.'],
          ['É gratuito?', 'Sim, é completamente gratuito. Sem cadastro.'],
          ['Can I transcribe long Brazilian podcast episodes?', 'Yes. No time limit — long recordings processed in parallel.']]
  },
  {
    slug: 'german-transcription', title: 'Free German Audio Transcription Online | Bolo Aur Likho',
    desc: 'Transcribe German audio to text free online. Accurate AI transcription for German, Austrian, and Swiss German. No signup required.',
    h1: 'Free German Audio Transcription Online', sub: 'Deutsche Audiotranskription — kostenlos, ohne Anmeldung.',
    badge: 'German',
    intro: ['Bolo Aur Likho provides free German audio transcription for Standard German, Austrian German, and Swiss Standard German. Powered by OpenAI Whisper for high accuracy on German\'s complex compound vocabulary.',
            'Upload your German audio and get an accurate German text transcript in seconds.'],
    uses: ['German business meeting transcription', 'German podcast and broadcast transcription', 'Academic lecture notes in German', 'Austrian and Swiss German content', 'German customer service call notes'],
    steps: [['Upload German audio', 'Upload MP3, WAV, or M4A.'],
            ['Select German', 'Choose "German" from the language dropdown.'],
            ['Get German transcript', 'Accurate German text output in seconds.']],
    features: ['Standard, Austrian, and Swiss German', 'Handles German compound words accurately', 'AI summary', 'Timestamps', 'Free, no account'],
    faq: [['Does it handle Austrian German (Österreichisch)?', 'Yes. Whisper handles Austrian and Swiss German variants.'],
          ['Ist es kostenlos?', 'Ja, es ist völlig kostenlos. Keine Anmeldung erforderlich.'],
          ['Can I transcribe German technical content?', 'Yes. Whisper performs well on German technical and business vocabulary.']]
  },
  {
    slug: 'urdu-transcription', title: 'Free Urdu Audio Transcription Online | Bolo Aur Likho',
    desc: 'Transcribe Urdu audio to text free online. Accurate AI transcription for Urdu speech in Nastaliq script. No signup required.',
    h1: 'Free Urdu Audio Transcription Online', sub: 'اردو آڈیو کو متن میں تبدیل کریں — بالکل مفت، بغیر رجسٹریشن کے۔',
    badge: 'Urdu',
    intro: ['Bolo Aur Likho provides free Urdu audio transcription powered by OpenAI Whisper, outputting text in Urdu Nastaliq script. Whether you have a Pakistani Urdu broadcast, an Urdu lecture, or a WhatsApp voice message in Urdu — upload it and get accurate text in seconds.',
            'Urdu and Hindi share significant vocabulary but use different scripts. Bolo Aur Likho correctly identifies Urdu speech and outputs in Urdu script (right-to-left Nastaliq), not Devanagari.'],
    uses: ['Urdu podcast and radio transcription', 'Pakistani business meeting notes', 'Urdu lecture and academic transcription', 'Urdu WhatsApp voice message to text', 'Drama and media dialogue transcription'],
    steps: [['Upload Urdu audio', 'Upload any audio file with Urdu speech.'],
            ['Select Urdu', 'Choose "Urdu" from the language dropdown for Nastaliq script output.'],
            ['Get Urdu transcript', 'Accurate Urdu text in Nastaliq script, ready in seconds.']],
    features: ['Urdu Nastaliq script output', 'Pakistani and Indian Urdu dialects', 'RTL text output', 'AI summary', 'Free, no signup'],
    faq: [['کیا یہ مفت ہے؟', 'ہاں، بالکل مفت ہے۔ کوئی رجسٹریشن نہیں چاہیے۔'],
          ['Is Urdu output in Nastaliq or Naskh script?', 'Output is in standard Urdu script (a variant of Nastaliq/Naskh used in digital text).'],
          ['Can I transcribe Pakistani Urdu?', 'Yes. Pakistani and Indian Urdu varieties are both supported.']]
  },
  {
    slug: 'tamil-transcription', title: 'Free Tamil Audio Transcription Online | Bolo Aur Likho',
    desc: 'Transcribe Tamil audio to text free online. Accurate AI transcription for Tamil speech. No signup required.',
    h1: 'Free Tamil Audio Transcription Online', sub: 'தமிழ் ஆடியோவை உரையாக மாற்றுங்கள் — இலவசமாக, பதிவுசெய்யாமல்.',
    badge: 'Tamil',
    intro: ['Bolo Aur Likho provides free Tamil audio transcription powered by OpenAI Whisper. Upload Tamil audio — from Tamil Nadu, Sri Lanka, Singapore, or Malaysian Tamil communities — and get accurate Tamil script text output in seconds.',
            'Tamil is one of the world\'s oldest classical languages with a rich digital presence. Bolo Aur Likho supports Tamil transcription with no account, no cost, and no file limits.'],
    uses: ['Tamil news and media transcription', 'Tamil lecture and academic notes', 'Tamil podcast and YouTube content', 'Tamil business meeting notes', 'Sri Lankan and Malaysian Tamil content'],
    steps: [['Upload Tamil audio', 'Upload any audio with Tamil speech.'],
            ['Select Tamil', 'Choose "Tamil" from the language dropdown.'],
            ['Get Tamil transcript', 'Accurate Tamil script output in seconds.']],
    features: ['Tamil script (தமிழ்) output', 'Supports India, Sri Lanka, Malaysia Tamil varieties', 'AI summary', 'Timestamps', 'Free, no signup'],
    faq: [['இது இலவசமா?', 'ஆம், முற்றிலும் இலவசம். பதிவு தேவையில்லை.'],
          ['Does it support Sri Lankan Tamil?', 'Yes. Whisper handles Tamil from different regions.'],
          ['Can I transcribe Tamil movies or YouTube content?', 'Yes. Download the audio and upload it for Tamil transcription.']]
  },
  {
    slug: 'bengali-transcription', title: 'Free Bengali Audio Transcription Online | Bolo Aur Likho',
    desc: 'Transcribe Bengali audio to text free online. Accurate AI transcription for Bengali (Bangla) speech. No signup required.',
    h1: 'Free Bengali Audio Transcription Online', sub: 'বাংলা অডিও থেকে টেক্সট — সম্পূর্ণ বিনামূল্যে, নিবন্ধন ছাড়াই।',
    badge: 'Bengali',
    intro: ['Bolo Aur Likho provides free Bengali (Bangla) audio transcription for both West Bengal and Bangladeshi Bengali varieties. Powered by OpenAI Whisper, it accurately transcribes Bengali speech and outputs text in Bengali script.',
            'Upload Bengali audio files and get accurate Bengali text in seconds — no signup, no cost, no file limits.'],
    uses: ['Bengali lecture and academic content', 'Bangladeshi and West Bengal media transcription', 'Bengali podcast transcription', 'Bengali WhatsApp voice note to text', 'Bengali news and broadcast transcription'],
    steps: [['Upload Bengali audio', 'Upload MP3, WAV, or M4A with Bengali speech.'],
            ['Select Bengali', 'Choose "Bengali" from the language dropdown.'],
            ['Get Bengali transcript', 'Bengali script output in seconds.']],
    features: ['Bengali (বাংলা) script output', 'West Bengal and Bangladesh varieties', 'AI summary', 'Timestamps', 'Free, no signup'],
    faq: [['এটা কি বিনামূল্যে?', 'হ্যাঁ, সম্পূর্ণ বিনামূল্যে। কোনো নিবন্ধন দরকার নেই।'],
          ['Does it support Bangladeshi Bengali?', 'Yes. Both West Bengal and Bangladeshi Bangla varieties are supported.'],
          ['Can I transcribe Bengali YouTube videos?', 'Yes. Download the audio and upload for accurate Bengali transcription.']]
  },
  {
    slug: 'marathi-transcription', title: 'Free Marathi Audio Transcription Online | Bolo Aur Likho',
    desc: 'Transcribe Marathi audio to text free online. Accurate AI transcription for Marathi speech in Devanagari script. No signup required.',
    h1: 'Free Marathi Audio Transcription Online', sub: 'मराठी ऑडिओचे मजकुरात रूपांतर करा — पूर्णपणे मोफत, नोंदणीशिवाय।',
    badge: 'Marathi',
    intro: ['Bolo Aur Likho provides free Marathi audio transcription powered by OpenAI Whisper. Upload Marathi audio from Maharashtra or the Marathi diaspora and get accurate Devanagari text output in seconds.',
            'No account, no cost, no limits. Transcribe Marathi lectures, meetings, podcasts, and WhatsApp voice notes instantly.'],
    uses: ['Marathi lecture and academic transcription', 'Maharashtra business meeting notes', 'Marathi podcast and media content', 'Marathi WhatsApp voice note to text', 'Marathi news and broadcast transcription'],
    steps: [['Upload Marathi audio', 'Upload any audio file with Marathi speech.'],
            ['Select Marathi', 'Choose "Marathi" from the language dropdown.'],
            ['Get Marathi transcript', 'Devanagari Marathi text output in seconds.']],
    features: ['Devanagari Marathi script output', 'Maharashtra regional varieties supported', 'AI summary', 'Timestamps', 'Free, no signup'],
    faq: [['हे मोफत आहे का?', 'होय, पूर्णपणे मोफत आहे। कोणतीही नोंदणी आवश्यक नाही.'],
          ['Can I transcribe long Marathi recordings?', 'Yes. There is no time limit.'],
          ['Is Marathi output in Devanagari script?', 'Yes. Marathi text is output in standard Devanagari script.']]
  },
  // ── COMPETITOR ALTERNATIVE PAGES ──────────────────────────────────────────
  {
    slug: 'otter-ai-alternative', title: 'Best Free Otter.ai Alternative — Unlimited Transcription | Bolo Aur Likho',
    desc: 'The best free Otter.ai alternative with no 300-minute monthly cap. Unlimited AI transcription in 99+ languages. No signup required.',
    h1: 'The Best Free Otter.ai Alternative', sub: 'No 300-minute monthly limit. No signup. 99+ languages. Truly unlimited free transcription.',
    badge: 'vs Otter.ai',
    intro: ['Otter.ai\'s free plan limits you to 300 minutes of transcription per month — about 5 hours. Run a weekly podcast, transcribe daily meetings, or handle research interviews, and you\'ll hit that limit within days. Then it\'s $16.99/month.',
            'Bolo Aur Likho is a completely free Otter.ai alternative with no monthly minute cap, no signup, and support for 99+ languages — compared to Otter.ai\'s primary focus on English.'],
    uses: ['Unlimited meeting transcription without monthly caps', 'Multi-language transcription (Hindi, Spanish, Arabic, and more)', 'Podcast and interview transcription', 'Academic research without subscription costs', 'Small business and freelancer use cases'],
    steps: [['Upload any audio file', 'MP3, WAV, M4A, OGG, WEBM, FLAC — all supported.'],
            ['Get transcript + AI summary', 'Equivalent to Otter.ai\'s meeting notes and summary feature — completely free.'],
            ['No account, no limits', 'Use as much as you need. No monthly reset, no upgrade prompts.']],
    features: ['No monthly minute limit (vs Otter.ai\'s 300 min/month free)', 'No signup required (vs Otter.ai requires account)', '99+ languages (vs Otter.ai primarily English)', 'AI summary included free (vs Otter.ai paid feature)', 'Same OpenAI Whisper accuracy'],
    faq: [['Why is Otter.ai limited to 300 minutes per month?', 'Otter.ai\'s free plan is designed to convert users to its $16.99/month paid plan. The 300-minute limit is a deliberate conversion mechanism.'],
          ['Is Bolo Aur Likho as accurate as Otter.ai?', 'Both use AI speech recognition. For non-English languages, Bolo Aur Likho (using Whisper) is significantly more accurate than Otter.ai.'],
          ['Can I use Bolo Aur Likho for meeting transcription like Otter.ai?', 'Yes. Record your Zoom, Teams, or Google Meet session and upload the audio. You\'ll get a full transcript with AI summary.']]
  },
  {
    slug: 'rev-alternative', title: 'Best Free Rev.com Alternative — Free AI Transcription | Bolo Aur Likho',
    desc: 'The best free Rev.com alternative. Stop paying per minute — get unlimited free AI transcription in 99+ languages. No signup required.',
    h1: 'The Best Free Rev.com Alternative', sub: 'Stop paying $1.50/minute. Get unlimited free AI transcription powered by OpenAI Whisper.',
    badge: 'vs Rev.com',
    intro: ['Rev.com charges $1.50 per minute for human transcription and $0.25 per minute for AI transcription. For a 60-minute interview, that\'s $15 for AI and $90 for human. Costs add up fast.',
            'Bolo Aur Likho gives you free AI transcription powered by OpenAI Whisper — the same technology behind many commercial transcription services — at zero cost, with no account required.'],
    uses: ['Journalist and documentary transcription without per-minute charges', 'Research interview transcription', 'Podcast production without subscription costs', 'Legal and deposition draft transcription', 'Marketing and content production'],
    steps: [['Upload your audio', 'Upload any format — MP3, WAV, M4A, FLAC, OGG, WEBM.'],
            ['Get your transcript in seconds', 'Rev\'s AI turnaround is minutes. Bolo Aur Likho is seconds.'],
            ['Download and edit', 'Plain text transcript, ready to edit and use immediately.']],
    features: ['Free vs Rev.ai at $0.25/minute', 'Seconds vs minutes turnaround', '99+ languages vs Rev\'s limited language support', 'No signup vs Rev account required', 'AI summary included free'],
    faq: [['How is Bolo Aur Likho different from Rev?', 'Rev charges per minute ($0.25 AI, $1.50 human). Bolo Aur Likho is completely free. Both use AI for automated transcription. For human-reviewed transcription, Rev is the professional choice. For free AI transcription, Bolo Aur Likho is the best alternative.'],
          ['Is free AI transcription as accurate as Rev\'s AI transcription?', 'Both services use similar Whisper-based AI. Accuracy is comparable for clear audio.'],
          ['Does this support the same languages as Rev?', 'Bolo Aur Likho supports 99+ languages. Rev\'s AI transcription supports fewer languages, with human transcription available in a handful.']]
  },
  {
    slug: 'happy-scribe-alternative', title: 'Best Free HappyScribe Alternative | Bolo Aur Likho',
    desc: 'The best free HappyScribe alternative. No 10-minute free limit — unlimited AI transcription in 99+ languages. No signup required.',
    h1: 'Best Free HappyScribe Alternative', sub: 'No 10-minute trial limit. Unlimited free AI transcription in 99+ languages.',
    badge: 'vs HappyScribe',
    intro: ['HappyScribe gives you 10 minutes of free AI transcription — that\'s it. After that, you\'re looking at their paid plans. For anyone with more than a 10-minute recording, that free trial isn\'t very useful.',
            'Bolo Aur Likho is a free HappyScribe alternative with no time limit on the free tier — upload recordings of any length, any time, completely free.'],
    uses: ['Full episode podcast transcription (not just 10 minutes)', 'Long-form interview transcription', 'Academic lecture notes', 'Multilingual content transcription', 'Video production subtitles'],
    steps: [['Upload any length of audio', 'No 10-minute restriction. Upload full recordings up to 200MB.'],
            ['Get transcript + AI summary', 'Equivalent features to HappyScribe\'s basic paid plan — completely free.'],
            ['No account needed', 'No email, no trial, no credit card. Just transcribe.']],
    features: ['No 10-minute limit (vs HappyScribe 10-min free tier)', 'No signup (vs HappyScribe requires account)', '99+ languages', 'AI summary free', 'Immediate audio deletion for privacy'],
    faq: [['Why does HappyScribe only give 10 minutes free?', 'HappyScribe limits free usage to convert users to paid plans starting at €17/month.'],
          ['Is HappyScribe better than Bolo Aur Likho?', 'HappyScribe offers paid features like speaker diarization and subtitle editors. For basic AI transcription at no cost, Bolo Aur Likho is the stronger free choice.'],
          ['Can I use Bolo Aur Likho instead of HappyScribe for European languages?', 'Yes. French, German, Spanish, Portuguese, Italian, and all major European languages are supported.']]
  },
  {
    slug: 'descript-alternative', title: 'Best Free Descript Alternative — Free AI Transcription | Bolo Aur Likho',
    desc: 'Free Descript alternative for audio transcription. No subscription required. Accurate AI transcription in 99+ languages with AI summary.',
    h1: 'Best Free Descript Alternative for Transcription', sub: 'Get accurate AI transcription without Descript\'s subscription. Free, no account needed.',
    badge: 'vs Descript',
    intro: ['Descript is a powerful podcast and video editing platform — but if you just need audio transcription, paying $12–$24/month for Descript is overkill. Bolo Aur Likho gives you the transcription part for free.',
            'Same OpenAI Whisper AI, same accuracy, no subscription, no account. Upload your audio and get your transcript in seconds.'],
    uses: ['Podcast transcription without Descript subscription', 'Interview transcription for editing reference', 'Content research and repurposing', 'Meeting notes without video editing features', 'Affordable transcription for freelancers'],
    steps: [['Upload your podcast or interview audio', 'Upload MP3 or WAV directly.'],
            ['Get your transcript', 'Clean, accurate transcript in seconds — same Whisper AI as Descript uses.'],
            ['Edit wherever you like', 'Paste into Google Docs, Notion, or your CMS.']],
    features: ['Free vs Descript $12-$24/month', 'No video editor overhead', '99+ languages', 'AI summary', 'Instant processing'],
    faq: [['Is Descript better than Bolo Aur Likho for podcasters?', 'Descript offers video/audio editing alongside transcription. Bolo Aur Likho is transcription-only. If you only need the transcript, Bolo Aur Likho is free and just as accurate.'],
          ['Does Bolo Aur Likho export to Descript?', 'Not directly. But you can copy the transcript text and import it into Descript as a script.'],
          ['Can I use Bolo Aur Likho for my podcast workflow?', 'Yes. Transcribe the episode, get the AI summary for show notes, and copy the transcript for SEO publishing.']]
  },
  {
    slug: 'temi-alternative', title: 'Best Free Temi Alternative — Free AI Transcription | Bolo Aur Likho',
    desc: 'The best free Temi alternative. Temi charges $0.25/minute — Bolo Aur Likho is completely free. AI transcription in 99+ languages.',
    h1: 'Best Free Temi Alternative', sub: 'Stop paying $0.25 per minute. Get unlimited free AI transcription powered by OpenAI Whisper.',
    badge: 'vs Temi',
    intro: ['Temi charges $0.25 per minute of audio. For a 60-minute interview, that\'s $15. For a daily user, it\'s hundreds of dollars a year. Bolo Aur Likho is a completely free Temi alternative — same AI accuracy, zero cost.',
            'No account, no credit card, no per-minute charges. Upload any audio and get your transcript in seconds.'],
    uses: ['Unlimited interview transcription without per-minute fees', 'Daily recording transcription at no cost', 'Research projects with large volumes of audio', 'Student and academic transcription', 'Freelancer and small business use'],
    steps: [['Upload your audio', 'Any format up to 200MB.'],
            ['Get your transcript', 'Seconds, not minutes. Powered by OpenAI Whisper.'],
            ['No payment required', 'No credit card. No per-minute charge. Free forever.']],
    features: ['Free vs Temi $0.25/minute', '99+ languages vs Temi\'s English focus', 'AI summary included', 'No account required', 'No per-file or per-minute limit'],
    faq: [['How much does Temi cost per month?', 'Temi charges $0.25 per minute of audio transcribed. There is no flat monthly plan.'],
          ['Is the quality as good as Temi?', 'Both use AI speech recognition based on similar technology. Accuracy is comparable for clear audio.'],
          ['Does Bolo Aur Likho support more languages than Temi?', 'Yes. Temi focuses primarily on English. Bolo Aur Likho supports 99+ languages.']]
  },
  // ── PROFESSIONAL/INDUSTRY PAGES ───────────────────────────────────────────
  {
    slug: 'legal-transcription', title: 'Free Legal Transcription Online — Accurate AI | Bolo Aur Likho',
    desc: 'Free legal audio transcription online. Accurate AI transcription for depositions, hearings, and legal recordings. No signup required.',
    h1: 'Free Legal Audio Transcription Online', sub: 'Accurate transcription for depositions, hearings, and legal recordings. Private and secure.',
    badge: 'Legal',
    intro: ['Legal professionals need accurate, reliable transcription for depositions, court hearings, client consultations, and arbitration recordings. Bolo Aur Likho delivers AI transcription accuracy comparable to commercial legal transcription services — at no cost.',
            'Your audio is processed and immediately deleted. Nothing is stored or logged. For sensitive legal recordings, this matters.'],
    uses: ['Deposition audio transcription for review', 'Client consultation notes', 'Arbitration recording transcription', 'Contract negotiation call notes', 'Witness statement documentation'],
    steps: [['Upload legal audio', 'Securely upload MP3, WAV, or M4A. Files processed in memory only.'],
            ['Select language', 'Choose the spoken language for maximum accuracy on legal vocabulary.'],
            ['Download transcript', 'Plain text output, ready for review and legal use.']],
    features: ['AI accuracy on formal legal speech', 'Audio immediately deleted after processing', 'Timestamps for citation', 'Supports depositions in 99+ languages', 'Free, no subscription'],
    faq: [['Is AI legal transcription admissible in court?', 'AI transcripts are for internal review and preparation. Official court transcripts require certified court reporters.'],
          ['Is my legal audio kept confidential?', 'Yes. Audio is processed and immediately deleted. Nothing is retained.'],
          ['Can I transcribe depositions in Hindi or regional languages?', 'Yes. 99+ languages are supported including all major Indian languages.']]
  },
  {
    slug: 'medical-transcription', title: 'Free Medical Audio Transcription Online | Bolo Aur Likho',
    desc: 'Free medical audio transcription online. Accurate AI transcription for clinical notes, patient consultations, and medical recordings.',
    h1: 'Free Medical Audio Transcription Online', sub: 'Transcribe clinical notes, consultations, and medical recordings. Private and immediate deletion.',
    badge: 'Medical',
    intro: ['Medical professionals spend up to 2 hours per day on documentation. Voice-to-text transcription dramatically reduces this burden. Bolo Aur Likho provides free AI medical transcription powered by OpenAI Whisper.',
            'Important: for regulated clinical documentation, ensure compliance with your jurisdiction\'s data handling requirements. Bolo Aur Likho immediately deletes all audio after processing and retains no data.'],
    uses: ['Clinical consultation note dictation', 'Patient interview transcription', 'Medical conference and lecture notes', 'Research interview transcription', 'Telemedicine call notes'],
    steps: [['Dictate or upload', 'Record clinical notes by voice or upload consultation recordings.'],
            ['Get text output', 'Accurate transcription of medical terminology in seconds.'],
            ['Edit and document', 'Paste into your clinical documentation system.']],
    features: ['Handles medical terminology accurately', 'Audio immediately deleted — no data retention', 'Timestamps for clinical reference', '99+ languages for international medical teams', 'Free, no subscription'],
    faq: [['Is Bolo Aur Likho HIPAA compliant?', 'Bolo Aur Likho is not formally HIPAA certified. For regulated clinical workflows, use a HIPAA-compliant transcription service. For general medical notes, audio is deleted immediately with no retention.'],
          ['How accurate is AI medical transcription?', 'For clear speech, accuracy is 95–99%. Medical terminology is well-supported by OpenAI Whisper.'],
          ['Can I transcribe in languages other than English?', 'Yes. 99+ languages supported — important for multilingual clinical settings.']]
  },
  {
    slug: 'research-transcription', title: 'Free Research Audio Transcription Online | Bolo Aur Likho',
    desc: 'Free research interview and audio transcription. Accurate AI transcription for academic and qualitative research. No signup required.',
    h1: 'Free Research Audio Transcription Online', sub: 'Transcribe research interviews and field recordings accurately. Free for academics and researchers.',
    badge: 'Research',
    intro: ['Qualitative research generates hours of interview recordings, focus groups, and field audio. Transcribing them manually is the biggest bottleneck in the research pipeline. Bolo Aur Likho eliminates that bottleneck for free.',
            'Upload your research recordings and get accurate transcripts in seconds — ready for coding, thematic analysis, NVivo import, or direct quotation in your paper.'],
    uses: ['Semi-structured and unstructured interview transcription', 'Focus group audio transcription', 'Ethnographic field recording notes', 'Conference paper presentation transcription', 'Oral history and archival recording transcription'],
    steps: [['Upload research audio', 'Upload interview recordings in MP3, WAV, or M4A.'],
            ['Enable timestamps', 'Timestamps let you navigate back to specific moments for verification.'],
            ['Analyse and code', 'Copy transcript into NVivo, Atlas.ti, or your analysis software.']],
    features: ['Accurate verbatim transcription for qualitative analysis', 'Timestamps for data verification', 'Multilingual research support (99+ languages)', 'AI summary for initial data familiarisation', 'Free — no institutional subscription needed'],
    faq: [['Is AI transcription accurate enough for academic research?', 'For clear audio, accuracy is 95–99%. Always verify quotes against the original recording before publication.'],
          ['Can I import the transcript into NVivo or Atlas.ti?', 'Yes. Copy the plain text transcript and import it as a text document into your qualitative analysis software.'],
          ['Does it handle technical academic vocabulary?', 'Whisper performs well on most academic terminology. For highly specialised jargon, review the transcript carefully.']]
  },
  {
    slug: 'journalist-transcription', title: 'Free Journalist Audio Transcription Online | Bolo Aur Likho',
    desc: 'Free audio transcription for journalists. Transcribe interviews and press briefings accurately and fast. No signup required.',
    h1: 'Free Audio Transcription for Journalists', sub: 'Transcribe interviews and briefings accurately, on deadline. No account needed.',
    badge: 'Journalism',
    intro: ['Journalists work on deadline. Manually transcribing a 45-minute interview takes 3–4 hours. Bolo Aur Likho transcribes it in under a minute — so you can focus on writing the story, not typing the transcript.',
            'Accurate, verbatim transcription means you can quote sources with confidence and verify exact words before publishing. Timestamps let you navigate back to specific moments in the recording.'],
    uses: ['Source interview transcription for print and digital', 'Press conference and briefing notes', 'Investigative recording transcription', 'Phone interview documentation', 'Podcast and broadcast transcript production'],
    steps: [['Record your interview', 'Use a voice recorder app or dedicated recorder. Export as MP3.'],
            ['Upload to Bolo Aur Likho', 'Upload immediately after the interview. Enable Timestamps.'],
            ['Write your story', 'Use the timestamped transcript to pull quotes accurately and efficiently.']],
    features: ['Fast: 45-minute interview transcribed in under 60 seconds', 'Timestamps for quote verification', 'AI summary for quick source review', '99+ languages for international reporting', 'Private — audio deleted immediately'],
    faq: [['How accurate is AI transcription for interview quotes?', 'For clear audio, accuracy is 95–99%. Always verify exact quotes against the timestamp in the original recording before publishing.'],
          ['Can I use this for off-the-record recordings?', 'Yes. Audio is processed and immediately deleted. Nothing is stored or accessible after processing.'],
          ['Does it handle multiple speakers?', 'Yes, though speaker diarization (labelling which speaker said what) is not yet supported. Timestamps help you identify speaker changes manually.']]
  },
  {
    slug: 'hr-transcription', title: 'Free HR Interview Transcription Online | Bolo Aur Likho',
    desc: 'Free HR interview and meeting transcription. Accurate AI transcription for recruitment, performance reviews, and HR documentation. No signup.',
    h1: 'Free HR Interview Transcription Online', sub: 'Transcribe recruitment interviews and HR meetings accurately. Private and free.',
    badge: 'HR',
    intro: ['HR teams conduct hundreds of interviews, performance reviews, and disciplinary hearings every year. Accurate documentation of these conversations is essential — and time-consuming if done manually.',
            'Bolo Aur Likho provides free HR interview transcription with no account required. Get a full transcript and AI summary of each conversation in seconds.'],
    uses: ['Recruitment interview notes and documentation', 'Performance review transcription', 'Exit interview documentation', 'Disciplinary meeting records', 'Training session transcription'],
    steps: [['Record the HR conversation', 'With appropriate consent, record the interview or meeting.'],
            ['Upload to Bolo Aur Likho', 'Upload the recording and enable AI Summary for a quick conversation overview.'],
            ['Document and archive', 'Store the transcript in your HR system for future reference.']],
    features: ['Full interview transcription with timestamps', 'AI summary for efficient documentation', 'Private — audio deleted after processing', 'Hindi, English and 99+ languages for diverse teams', 'Free — no HR software subscription required'],
    faq: [['Is it legal to transcribe HR interviews?', 'Yes, with appropriate consent from all participants. Check your jurisdiction\'s employment and data protection laws.'],
          ['Is the transcription private?', 'Yes. Audio is processed and immediately deleted. No data is stored or shared.'],
          ['Can I transcribe HR conversations in Hindi?', 'Yes. Hindi and all major Indian languages are supported.']]
  },
  {
    slug: 'content-creator-transcription', title: 'Free Audio Transcription for Content Creators | Bolo Aur Likho',
    desc: 'Free audio transcription for YouTubers, podcasters, and content creators. Turn recordings into blog posts, captions, and SEO content. No signup.',
    h1: 'Free Transcription for Content Creators', sub: 'Turn your videos and podcasts into blog posts, captions, and searchable content. Free.',
    badge: 'Creators',
    intro: ['One piece of spoken content — a YouTube video, podcast episode, or livestream — can become ten pieces of written content: a blog post, a LinkedIn article, social media captions, email newsletter content, a lead magnet, and more.',
            'Bolo Aur Likho gives content creators a free, fast way to convert audio to text. No subscription, no account, no manual typing. Upload your content and repurpose it in seconds.'],
    uses: ['YouTube video to blog post conversion', 'Podcast episode show notes and transcripts', 'Livestream highlights and quotes', 'TikTok and Reel caption creation', 'Email newsletter content from spoken ideas'],
    steps: [['Upload your content audio', 'Export audio from your video editor or recording software as MP3.'],
            ['Enable AI Summary', 'Get a ready-made content summary and key points for show notes.'],
            ['Repurpose everywhere', 'Use the transcript for a blog post, caption quotes for social, and the summary for your newsletter.']],
    features: ['Full transcript for SEO blog posts', 'AI summary for show notes and email content', 'Timestamps for YouTube chapter markers', '99+ languages for global creator audiences', 'Free — no Creator Studio subscription needed'],
    faq: [['Can I use the transcript as subtitles for YouTube?', 'Yes. The timestamped transcript can be reformatted as SRT subtitles.'],
          ['How do I turn a YouTube video into a blog post?', 'Download the video audio as MP3, transcribe it here, lightly edit the text, and publish as a blog post with the video embedded.'],
          ['Does AI summary work well for podcast show notes?', 'Yes. The AI produces a 2–3 sentence description and bullet point key takeaways — ideal for show notes.']]
  },
  {
    slug: 'class-recording-transcription', title: 'Free Class Recording Transcription — Students & Teachers | Bolo Aur Likho',
    desc: 'Free class recording transcription for students and teachers. Turn recorded lessons into searchable notes. No signup required.',
    h1: 'Free Class Recording Transcription', sub: 'Turn recorded lessons into searchable, shareable text notes. Free for students and teachers.',
    badge: 'Education',
    intro: ['Recording a class is only useful if you can find information in it quickly. A transcript transforms a 90-minute recording into a searchable document — find any topic in seconds, copy quotes into your assignments, and share notes with classmates.',
            'Bolo Aur Likho is free for every student and teacher. No institutional account, no app download, no cost.'],
    uses: ['University and school class recording transcription', 'Online class and Zoom lesson notes', 'Special needs support — accessible notes for hearing-impaired students', 'Teacher prep from recorded lesson reviews', 'Exam revision from lecture recordings'],
    steps: [['Record your class', 'Use your phone or a dictaphone. For online classes, record via OBS or built-in meeting tools.'],
            ['Upload after class', 'Upload the recording and enable AI Summary for a lesson overview.'],
            ['Share with classmates', 'Copy the transcript into Google Docs and share the link with your study group.']],
    features: ['Full class transcript with no length limit', 'AI lesson summary and key points', 'Timestamps for topic navigation', '99+ languages for international students', 'Free — no school subscription needed'],
    faq: [['Can I share the transcript with my classmates?', 'Yes. Copy the transcript into Google Docs, Notion, or any sharing platform.'],
          ['Does it work for online classes on Zoom or Teams?', 'Yes. Record the Zoom or Teams session and upload the audio or video file.'],
          ['Is this suitable for students with hearing impairments?', 'Yes. Accurate class transcripts provide essential accessibility support for hearing-impaired students.']]
  },
  {
    slug: 'transcription-for-deaf', title: 'Free Audio Transcription for Deaf and Hard of Hearing | Bolo Aur Likho',
    desc: 'Free AI audio transcription for the deaf and hard of hearing community. Accurate text from any audio. No signup, no cost.',
    h1: 'Free Audio Transcription for Deaf and Hard of Hearing', sub: 'Making spoken content accessible to everyone. Free, accurate, no account needed.',
    badge: 'Accessibility',
    intro: ['Audio and video content is inaccessible to deaf and hard of hearing individuals without transcripts or captions. Bolo Aur Likho makes accurate transcription free and instant — removing a barrier that costs and technical complexity have historically maintained.',
            'Upload any audio — a meeting, a lecture, a podcast, a video — and get an accurate text transcript immediately. No cost, no account, no complexity.'],
    uses: ['Meeting transcription for deaf colleagues', 'Lecture notes for hearing-impaired students', 'Podcast and media content accessibility', 'Family or social conversation transcription', 'Legal and medical appointment notes'],
    steps: [['Upload any audio', 'Any format — MP3, WAV, M4A, OGG, WEBM, FLAC.'],
            ['Get your transcript', 'Accurate text in seconds. Enable Timestamps for navigation.'],
            ['Read and share', 'Copy or download the transcript for immediate use.']],
    features: ['Free with no account barrier', 'Accurate text from any audio source', 'Timestamps for navigating long content', '99+ languages for diverse communities', 'Works on mobile and desktop'],
    faq: [['Is this tool accessible for screen reader users?', 'Yes. The interface works with standard screen readers and keyboard navigation.'],
          ['Can I transcribe audio from a TV programme or video?', 'Yes. Extract the audio track and upload it for accurate transcription.'],
          ['Is there a limit on how much I can transcribe?', 'No. There are no limits on usage. Transcribe as much as you need, completely free.']]
  },
  {
    slug: 'online-transcription', title: 'Free Online Audio Transcription — AI Accurate | Bolo Aur Likho',
    desc: 'Free online audio transcription powered by AI. Upload any audio file and get an accurate text transcript in seconds. No signup required.',
    h1: 'Free Online Audio Transcription', sub: 'The fastest, most accurate free online transcription tool. No account. No limits.',
    badge: 'Online Tool',
    intro: ['Bolo Aur Likho is a free online audio transcription service powered by OpenAI Whisper — the same AI model trusted by professionals worldwide. Upload your audio directly in your browser and get an accurate text transcript in seconds.',
            'No software to install, no account to create, no subscription to buy. Works on any device — desktop, tablet, or mobile — in any modern browser.'],
    uses: ['Quick audio to text conversion for any use case', 'Transcription from anywhere — laptop, tablet, or phone', 'One-off transcription without committing to a service', 'Team and organisational use without per-seat pricing', 'International content in 99+ languages'],
    steps: [['Go to boloaurlikho.com', 'No download, no install. Works entirely in your browser.'],
            ['Upload or record', 'Upload a file or record directly using your device\'s microphone.'],
            ['Transcribe and use', 'Get your transcript in seconds. Copy, download, or share.']],
    features: ['100% browser-based — no software needed', 'Works on desktop, tablet, and mobile', '99+ languages', 'AI summary and timestamps', 'Free, no account required'],
    faq: [['Does online transcription work on my phone?', 'Yes. Bolo Aur Likho works fully on Android and iPhone browsers.'],
          ['Do I need to install anything?', 'No. It works entirely in your web browser.'],
          ['Is it free to use unlimited?', 'Yes. No monthly limits, no per-minute charges, no subscription required.']]
  },
  {
    slug: 'automatic-transcription', title: 'Free Automatic Audio Transcription — AI Powered | Bolo Aur Likho',
    desc: 'Free automatic audio transcription powered by AI. Upload any audio and get accurate text automatically in seconds. No signup required.',
    h1: 'Free Automatic Audio Transcription', sub: 'Upload audio. Get text automatically. No human involved. No cost.',
    badge: 'Automatic AI',
    intro: ['Automatic transcription uses AI to convert speech to text without any human involvement — delivering results in seconds rather than hours, at zero cost instead of per-minute fees.',
            'Bolo Aur Likho uses OpenAI Whisper, the world\'s leading open-source automatic speech recognition model, to give you accurate transcription for any audio in 99+ languages. Upload, transcribe, done.'],
    uses: ['Automatic meeting minutes from recorded calls', 'Automatic podcast episode transcription', 'Automatic lecture notes for students', 'Automatic interview transcription for journalists', 'Automatic voice memo to text'],
    steps: [['Upload your audio', 'Drag and drop any audio file onto the Bolo Aur Likho upload area.'],
            ['Let the AI work', 'Whisper AI automatically detects the language and transcribes the speech.'],
            ['Get your text', 'Accurate automatic transcript in seconds. No human review delay.']],
    features: ['Fully automatic — no human transcription delay', 'Automatic language detection for 99+ languages', 'Automatic AI summary generation', 'Automatic timestamp insertion', 'Free, automatically, forever'],
    faq: [['How does automatic transcription work?', 'AI models trained on millions of hours of speech convert audio waveforms to text. OpenAI Whisper is the leading model for this task.'],
          ['Is automatic transcription as accurate as human transcription?', 'For clear audio, AI accuracy matches human accuracy (95–99%). For difficult audio (heavy accents, noise, multiple speakers), human transcription is still more accurate.'],
          ['How fast is automatic transcription?', 'A 60-minute recording typically transcribes in 60–90 seconds.']]
  },
  // ── GENERAL PAGES ─────────────────────────────────────────────────────────
  {
    slug: 'voice-to-text', title: 'Free Voice to Text Online — AI Accurate | Bolo Aur Likho',
    desc: 'Free voice to text converter online. Record or upload audio and get accurate text in seconds. 99+ languages. No signup required.',
    h1: 'Free Voice to Text Online', sub: 'Record your voice or upload audio — get accurate text in seconds. 99+ languages.',
    badge: 'Voice to Text',
    intro: ['Bolo Aur Likho\'s free voice to text converter works two ways: record directly in your browser using your microphone, or upload a pre-recorded audio file. Either way, you\'ll have accurate text in seconds.',
            'Powered by OpenAI Whisper, the leading AI speech recognition model, Bolo Aur Likho supports 99+ languages with no account, no limit, and no cost.'],
    uses: ['Voice memo to text for quick notes', 'Dictation for documents and emails', 'Meeting recording to text', 'Interview recording transcription', 'Language learning pronunciation practice'],
    steps: [['Record or upload', 'Click Record to use your microphone, or Upload to select a file.'],
            ['Choose language', 'Select your language or use Auto-detect.'],
            ['Get your text', 'Accurate voice to text in seconds.']],
    features: ['Live microphone recording', 'File upload for pre-recorded audio', '99+ languages', 'AI summary', 'Timestamps', 'Free, no account'],
    faq: [['Can I use voice to text on my phone?', 'Yes. Bolo Aur Likho works on Android and iPhone browsers with microphone access.'],
          ['Does it work in real-time?', 'The tool transcribes after the recording is complete or the file is uploaded, not word-by-word in real time.'],
          ['Is voice to text free?', 'Yes, completely free. No monthly subscription, no per-minute charge.']]
  },
  {
    slug: 'speech-to-text', title: 'Free Speech to Text Online — AI Accurate | Bolo Aur Likho',
    desc: 'Free speech to text converter online. Upload audio or record speech and get accurate text in seconds. 99+ languages. No signup required.',
    h1: 'Free Speech to Text Online', sub: 'Convert speech to text accurately in seconds. 99+ languages. No account needed.',
    badge: 'Speech to Text',
    intro: ['Bolo Aur Likho converts speech to text using OpenAI Whisper — one of the most accurate AI speech recognition systems available. Unlike browser-based speech-to-text that only works in real time, Bolo Aur Likho transcribes uploaded recordings as well.',
            'Upload any audio file or record directly in your browser. Get accurate, punctuated text with optional timestamps and AI summary. Free, with no account required.'],
    uses: ['Dictation and note-taking by voice', 'Audio recording to written document', 'Speech to text for accessibility', 'Transcription for content creation', 'Language learning speech analysis'],
    steps: [['Upload audio or record', 'Select a file or use your browser microphone.'],
            ['Get text', 'Whisper AI converts your speech to accurate text.'],
            ['Copy and use', 'Copy to clipboard or download as a text file.']],
    features: ['AI speech to text in 99+ languages', 'Both file upload and live recording', 'Punctuation added automatically', 'AI summary for long speeches', 'Free, no account'],
    faq: [['What is the difference between speech to text and voice to text?', 'They mean the same thing — converting spoken audio into written text. Both terms refer to the same technology.'],
          ['Does it add punctuation automatically?', 'Yes. Whisper inserts punctuation and capitalization automatically based on speech patterns.'],
          ['Which languages are best supported?', 'English, Hindi, Spanish, French, Arabic, Portuguese, German, Chinese, Japanese, and 90+ more languages are all well-supported.']]
  },
  {
    slug: 'free-transcription', title: 'Free Audio Transcription Online — No Signup, No Limits | Bolo Aur Likho',
    desc: 'Truly free audio transcription online with no signup, no monthly limits, and no credit card. Powered by OpenAI Whisper. 99+ languages.',
    h1: 'Truly Free Audio Transcription Online', sub: 'No signup. No monthly limit. No credit card. Just accurate free transcription.',
    badge: '100% Free',
    intro: ['Most "free" transcription tools are actually free trials — 10 minutes, 300 minutes per month, or 3 files per day. Bolo Aur Likho is genuinely free with no hidden limits: upload as many files as you like, of any length, every day.',
            'No account creation. No credit card entry. No trial that expires. Free transcription powered by OpenAI Whisper, available to everyone, forever.'],
    uses: ['Unlimited daily transcription at no cost', 'One-off transcription without creating an account', 'High-volume transcription without subscription fees', 'Students and researchers with limited budgets', 'Non-profits and charities needing accessible tools'],
    steps: [['Upload your audio', 'No account needed. Drop your file and go.'],
            ['Transcribe', 'Click Transcribe Now. Accurate text in seconds.'],
            ['Use freely', 'No watermark, no limitations on what you do with your transcript.']],
    features: ['Genuinely free — no hidden limits', 'No signup, no email, no credit card', '99+ languages', 'AI summary included free', 'Unlimited files and no monthly cap'],
    faq: [['Is Bolo Aur Likho really free?', 'Yes. There are no hidden fees, no trial period, no monthly limits, and no signup required.'],
          ['How is it free if other services charge?', 'Bolo Aur Likho is supported by keeping infrastructure costs low and using efficient AI processing. The goal is to make accurate transcription accessible to everyone.'],
          ['Are there any limits at all?', 'The only limit is a 200MB file size per upload. There is no daily, monthly, or lifetime usage cap.']]
  },
  {
    slug: 'ai-transcription', title: 'Free AI Audio Transcription Online — OpenAI Whisper | Bolo Aur Likho',
    desc: 'Free AI audio transcription powered by OpenAI Whisper. 99+ languages, AI summary, timestamps. No signup required. Accurate and instant.',
    h1: 'Free AI Audio Transcription Online', sub: 'Powered by OpenAI Whisper — the world\'s most accurate AI transcription model. Free.',
    badge: 'AI Powered',
    intro: ['Bolo Aur Likho uses OpenAI Whisper — the leading open-source AI speech recognition model trained on 680,000 hours of multilingual audio. This is the same underlying model that powers commercial AI transcription services charging $10–$30/month.',
            'Access it for free, with no account, no monthly fee, and no file limits. AI transcription has never been this accessible.'],
    uses: ['Any audio to text with AI accuracy', 'AI-generated meeting summaries and action items', 'AI-powered podcast show notes', 'AI transcription for research and journalism', 'AI speech recognition in 99+ languages'],
    steps: [['Upload audio', 'Any format — MP3, WAV, M4A, OGG, FLAC, WEBM.'],
            ['AI processes your audio', 'OpenAI Whisper converts speech to text with 99%+ accuracy.'],
            ['Get transcript + AI summary', 'Your transcript and optional AI summary are ready in seconds.']],
    features: ['Powered by OpenAI Whisper (same model as paid services)', '99+ languages with automatic language detection', 'AI summary and key points', 'Timestamp insertion', 'Free, no account, no limits'],
    faq: [['What AI model powers Bolo Aur Likho?', 'OpenAI Whisper — the leading open-source automatic speech recognition model, trained on 680,000 hours of multilingual audio.'],
          ['How accurate is AI transcription?', 'For clear audio in major languages, Whisper achieves 95–99% word error rate accuracy — matching or exceeding human transcription for many use cases.'],
          ['What makes AI transcription different from older voice recognition?', 'Modern AI transcription models like Whisper understand context, handle accents, and add punctuation automatically. Older systems were rigid and error-prone by comparison.']]
  },
];

const CSS = `
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Inter',sans-serif;background:#f7f8fc;color:#1a1a2e}
    nav{display:flex;align-items:center;justify-content:space-between;padding:16px 48px;background:rgba(255,255,255,0.95);backdrop-filter:blur(12px);border-bottom:1px solid #e8eaf0;position:sticky;top:0;z-index:100}
    .logo{display:flex;align-items:center;text-decoration:none}
    .logo-plain{color:#1a1a2e;font-weight:700;font-size:19px;padding:0 2px}
    .logo-highlight{color:#fff;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:5px;padding:1px 6px;font-weight:800;font-size:19px;font-style:italic}
    .nav-links{display:flex;align-items:center;gap:20px}
    .nav-links a{font-size:13px;color:#475569;text-decoration:none;font-weight:500}
    .nav-cta{font-size:13px!important;font-weight:600!important;color:#fff!important;background:linear-gradient(135deg,#6366f1,#7c3aed);padding:8px 18px;border-radius:20px;text-decoration:none}
    .hero{padding:60px 24px 40px;text-align:center;max-width:760px;margin:0 auto}
    .post-tag{display:inline-flex;align-items:center;gap:7px;background:#eef2ff;color:#6366f1;font-size:12px;font-weight:600;padding:5px 12px;border-radius:20px;margin-bottom:16px;border:1px solid #c7d2fe;text-transform:uppercase;letter-spacing:0.5px}
    h1{font-size:clamp(28px,4vw,46px);font-weight:800;line-height:1.15;letter-spacing:-1px;color:#0f0f1a;margin-bottom:12px}
    .sub{font-size:18px;color:#64748b;max-width:560px;margin:0 auto 36px;line-height:1.65}
    .accent{background:linear-gradient(135deg,#6366f1,#a855f7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-cta{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;background:linear-gradient(135deg,#6366f1,#7c3aed);color:white;font-size:16px;font-weight:700;border-radius:12px;text-decoration:none;margin-bottom:56px}
    .container{max-width:720px;margin:0 auto;padding:0 24px 80px}
    .article p{font-size:16px;color:#334155;line-height:1.8;margin-bottom:20px}
    .article h2{font-size:24px;font-weight:800;color:#0f0f1a;margin:44px 0 14px;letter-spacing:-0.5px}
    .article h2 .a{background:linear-gradient(135deg,#6366f1,#a855f7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .article h3{font-size:18px;font-weight:700;color:#1e293b;margin:28px 0 10px}
    .article ul,.article ol{margin:0 0 20px 24px}
    .article li{font-size:16px;color:#334155;line-height:1.8;margin-bottom:8px}
    .article strong{color:#1e293b;font-weight:600}
    .article a{color:#6366f1;text-decoration:none;font-weight:500}
    .callout{background:linear-gradient(135deg,#eef2ff,#f5f3ff);border:1px solid #c7d2fe;border-radius:14px;padding:20px 24px;margin:28px 0}
    .callout p{margin:0;font-size:15px;color:#4338ca;font-weight:500}
    .step-block{background:white;border:1px solid #e2e8f0;border-radius:14px;padding:24px;margin:14px 0;display:flex;gap:18px;align-items:flex-start}
    .step-num{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#7c3aed);color:white;font-size:15px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0}
    .step-body h3{font-size:16px;font-weight:700;color:#1e293b;margin:0 0 5px}
    .step-body p{font-size:14px;color:#475569;line-height:1.65;margin:0}
    .features-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:20px 0}
    .feature-item{background:white;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px;font-size:14px;color:#334155;display:flex;align-items:center;gap:8px}
    .feature-item::before{content:'✓';color:#6366f1;font-weight:700;flex-shrink:0}
    .cta-inline{background:linear-gradient(135deg,#6366f1,#7c3aed);border-radius:16px;padding:28px 32px;text-align:center;color:white;margin:40px 0}
    .cta-inline h3{font-size:20px;font-weight:800;margin-bottom:8px}
    .cta-inline p{color:rgba(255,255,255,0.85);font-size:14px;margin-bottom:18px}
    .cta-inline a{display:inline-flex;align-items:center;gap:7px;padding:11px 24px;background:white;color:#6366f1;font-size:14px;font-weight:700;border-radius:10px;text-decoration:none}
    .faq-item{border-bottom:1px solid #e2e8f0;padding:18px 0}
    .faq-item:last-child{border-bottom:none}
    .faq-q{font-size:16px;font-weight:700;color:#1e293b;margin-bottom:8px}
    .faq-a{font-size:15px;color:#475569;line-height:1.7}
    @media(max-width:600px){nav{padding:12px 16px}.hero{padding:40px 16px 28px}.features-grid{grid-template-columns:1fr}.step-block{flex-direction:column;gap:10px}}
`;

function html(p) {
  const schemaFaq = JSON.stringify({
    "@context":"https://schema.org","@type":"FAQPage",
    "mainEntity": p.faq.map(([q,a]) => ({
      "@type":"Question","name":q,
      "acceptedAnswer":{"@type":"Answer","text":a}
    }))
  });
  const schemaSW = JSON.stringify({
    "@context":"https://schema.org","@type":"SoftwareApplication",
    "name":"Bolo Aur Likho","url":SITE,
    "applicationCategory":"UtilitiesApplication","operatingSystem":"Web",
    "offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},
    "description": p.desc
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${p.title}</title>
  <meta name="description" content="${p.desc}">
  <link rel="canonical" href="${SITE}/${p.slug}">
  <meta property="og:title" content="${p.title}">
  <meta property="og:description" content="${p.desc}">
  <meta property="og:url" content="${SITE}/${p.slug}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="${SITE}/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="icon" type="image/svg+xml" href="${ICON}">
  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA}"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA}');</script>
  <script type="application/ld+json">${schemaSW}</script>
  <script type="application/ld+json">${schemaFaq}</script>
  <style>${CSS}</style>
</head>
<body>
<nav>
  <a class="logo" href="/"><span class="logo-plain">Bolo Aur</span><span class="logo-highlight">Likho</span></a>
  <div class="nav-links">
    <a href="/blog">Blog</a>
    <a href="/" class="nav-cta">Transcribe Free →</a>
  </div>
</nav>

<div class="hero">
  <div class="post-tag">${p.badge}</div>
  <h1>${p.h1}</h1>
  <p class="sub">${p.sub}</p>
  <a class="hero-cta" href="/">⚡ Transcribe Now — It's Free</a>
</div>

<div class="container">
  <div class="article">

    <p>${p.intro[0]}</p>
    <p>${p.intro[1]}</p>

    <h2><span class="a">Common Uses</span></h2>
    <ul>${p.uses.map(u => `<li>${u}</li>`).join('')}</ul>

    <h2><span class="a">How to Use Bolo Aur Likho</span></h2>
    ${p.steps.map((s,i) => `
    <div class="step-block">
      <div class="step-num">${i+1}</div>
      <div class="step-body"><h3>${s[0]}</h3><p>${s[1]}</p></div>
    </div>`).join('')}

    <div class="cta-inline">
      <h3>${p.h1}</h3>
      <p>No signup. No limits. Powered by OpenAI Whisper. Completely free.</p>
      <a href="/">Start Now — Free →</a>
    </div>

    <h2><span class="a">Key Features</span></h2>
    <div class="features-grid">
      ${p.features.map(f => `<div class="feature-item">${f}</div>`).join('')}
    </div>

    <h2><span class="a">Frequently Asked Questions</span></h2>
    ${p.faq.map(([q,a]) => `
    <div class="faq-item">
      <div class="faq-q">${q}</div>
      <div class="faq-a">${a}</div>
    </div>`).join('')}

  </div>
</div>
</body>
</html>`;
}

// Write files
let count = 0;
for (const p of pages) {
  const out = path.join(__dirname, p.slug + '.html');
  fs.writeFileSync(out, html(p), 'utf8');
  count++;
  console.log(`✓ ${p.slug}.html`);
}
console.log(`\nDone — ${count} pages generated.`);
