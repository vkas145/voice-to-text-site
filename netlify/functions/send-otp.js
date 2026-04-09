const crypto = require('crypto');

const BLOCKED_DOMAINS = [
  'gmail.com','yahoo.com','yahoo.co.in','hotmail.com','outlook.com',
  'live.com','aol.com','icloud.com','mail.com','protonmail.com',
  'ymail.com','rediffmail.com','zoho.com','gmx.com','msn.com',
  'outlook.in','googlemail.com','fastmail.com','tutanota.com',
];

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
};

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: CORS, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: CORS, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const body = JSON.parse(event.body);
    const email = (body.email || '').trim().toLowerCase();

    // ---- Validate email ----
    if (!email || !email.includes('@')) {
      return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: 'Please enter a valid email address.' }) };
    }
    const domain = email.split('@')[1];
    if (BLOCKED_DOMAINS.includes(domain)) {
      return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: 'Please use your corporate email address. Personal email domains are not accepted.' }) };
    }

    // ---- Generate OTP ----
    const emailOtp = crypto.randomInt(100000, 999999).toString();
    const expiry = Date.now() + 10 * 60 * 1000; // 10 minutes

    const secret = process.env.OTP_HMAC_SECRET;
    if (!secret) {
      console.error('OTP_HMAC_SECRET not set');
      return { statusCode: 500, headers: CORS, body: JSON.stringify({ error: 'Server configuration error.' }) };
    }

    const emailSig = crypto.createHmac('sha256', secret)
      .update(`email:${email}:${emailOtp}:${expiry}`)
      .digest('hex');

    // ---- Send email via Resend ----
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const fromEmail = process.env.OTP_FROM_EMAIL || 'Bolo Aur Likho <noreply@boloaurlikho.com>';
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: fromEmail,
            to: [email],
            subject: 'Your verification code for Bolo Aur Likho',
            html: `
              <div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:32px;">
                <h2 style="color:#1a1a2e;margin-bottom:8px;">Verification Code</h2>
                <p style="color:#64748b;font-size:15px;margin-bottom:24px;">
                  Use the code below to verify your email address and access the Bulk Quality Audit tool.
                </p>
                <div style="background:#f8fafc;border:2px solid #6366f1;border-radius:12px;padding:24px;text-align:center;margin-bottom:24px;">
                  <div style="font-size:36px;font-weight:800;letter-spacing:8px;color:#6366f1;">${emailOtp}</div>
                </div>
                <p style="color:#94a3b8;font-size:13px;">This code expires in 10 minutes. If you did not request this, please ignore this email.</p>
              </div>`,
          }),
        });
        if (!res.ok) {
          const errBody = await res.text();
          console.error('Resend error:', res.status, errBody);
          return { statusCode: 502, headers: CORS, body: JSON.stringify({ error: 'Failed to send verification email. Please try again.' }) };
        }
      } catch (e) {
        console.error('Resend fetch error:', e.message);
        return { statusCode: 502, headers: CORS, body: JSON.stringify({ error: 'Failed to send verification email. Please try again.' }) };
      }
    } else {
      console.warn('RESEND_API_KEY not set, skipping email OTP');
    }

    // ---- Return signature to client ----
    return {
      statusCode: 200,
      headers: CORS,
      body: JSON.stringify({
        ok: true,
        emailSig,
        expiry,
        email,
      }),
    };

  } catch (e) {
    console.error('send-otp error:', e);
    return { statusCode: 500, headers: CORS, body: JSON.stringify({ error: 'Server error. Please try again.' }) };
  }
};
