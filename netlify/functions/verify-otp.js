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
    const { email, mobile, emailOtp, smsOtp, emailSig, smsSig, expiry } = body;

    if (!email || !mobile || !emailOtp || !smsOtp || !emailSig || !smsSig || !expiry) {
      return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: 'Missing required fields.' }) };
    }

    // ---- Check expiry ----
    if (Date.now() > expiry) {
      return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: 'OTP expired. Please request a new code.' }) };
    }

    const secret = process.env.OTP_HMAC_SECRET;
    if (!secret) {
      console.error('OTP_HMAC_SECRET not set');
      return { statusCode: 500, headers: CORS, body: JSON.stringify({ error: 'Server configuration error.' }) };
    }

    // ---- Verify email OTP ----
    const expectedEmailSig = crypto.createHmac('sha256', secret)
      .update(`email:${email}:${emailOtp}:${expiry}`)
      .digest('hex');

    // ---- Verify SMS OTP ----
    const expectedSmsSig = crypto.createHmac('sha256', secret)
      .update(`sms:${mobile}:${smsOtp}:${expiry}`)
      .digest('hex');

    // Timing-safe comparison
    let emailMatch = false;
    let smsMatch = false;
    try {
      emailMatch = crypto.timingSafeEqual(
        Buffer.from(emailSig, 'hex'),
        Buffer.from(expectedEmailSig, 'hex')
      );
    } catch { emailMatch = false; }
    try {
      smsMatch = crypto.timingSafeEqual(
        Buffer.from(smsSig, 'hex'),
        Buffer.from(expectedSmsSig, 'hex')
      );
    } catch { smsMatch = false; }

    if (!emailMatch || !smsMatch) {
      return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: 'Invalid OTP. Please check both codes and try again.' }) };
    }

    // ---- Generate session token (24 hours) ----
    const sessionExpiry = Date.now() + 24 * 60 * 60 * 1000;
    const sessionToken = crypto.createHmac('sha256', secret)
      .update(`session:${email}:${mobile}:${sessionExpiry}`)
      .digest('hex');

    return {
      statusCode: 200,
      headers: CORS,
      body: JSON.stringify({
        ok: true,
        session: {
          email,
          mobile,
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
