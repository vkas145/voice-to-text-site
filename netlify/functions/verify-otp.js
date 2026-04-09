const crypto = require('crypto');

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
    const { email, emailOtp, emailSig, expiry } = body;

    if (!email || !emailOtp || !emailSig || !expiry) {
      return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: 'Missing required fields.' }) };
    }

    // ---- Check expiry ----
    if (Date.now() > expiry) {
      return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: 'Code expired. Please request a new one.' }) };
    }

    const secret = process.env.OTP_HMAC_SECRET;
    if (!secret) {
      console.error('OTP_HMAC_SECRET not set');
      return { statusCode: 500, headers: CORS, body: JSON.stringify({ error: 'Server configuration error.' }) };
    }

    // ---- Verify email OTP via HMAC ----
    const expectedEmailSig = crypto.createHmac('sha256', secret)
      .update(`email:${email}:${emailOtp}:${expiry}`)
      .digest('hex');

    let emailMatch = false;
    try {
      emailMatch = crypto.timingSafeEqual(
        Buffer.from(emailSig, 'hex'),
        Buffer.from(expectedEmailSig, 'hex')
      );
    } catch { emailMatch = false; }

    if (!emailMatch) {
      return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: 'Invalid code. Please check and try again.' }) };
    }

    // ---- Generate session token (24 hours) ----
    const sessionExpiry = Date.now() + 24 * 60 * 60 * 1000;
    const sessionToken = crypto.createHmac('sha256', secret)
      .update(`session:${email}:${sessionExpiry}`)
      .digest('hex');

    return {
      statusCode: 200,
      headers: CORS,
      body: JSON.stringify({
        ok: true,
        session: {
          email,
          expiry: sessionExpiry,
          token: sessionToken,
        },
      }),
    };

  } catch (e) {
    console.error('verify-otp error:', e);
    return { statusCode: 500, headers: CORS, body: JSON.stringify({ error: 'Server error. Please try again.' }) };
  }
};
