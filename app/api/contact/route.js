import { NextResponse } from "next/server";
import { Resend } from "resend";

// Setup:
// 1. Run: npm install resend
// 2. Go to resend.com → sign up free → API Keys → Create API Key
// 3. Add to .env.local:
//    RESEND_API_KEY=re_xxxxxxxxxxxx
//    EMAIL_TO=nnaemeka.obiefuna@gmail.com

export async function POST(req) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:32px;background:#0a0a0a;color:#fafafa;border-radius:12px">
          <h2 style="color:#a78bfa;margin-bottom:8px">New message from your portfolio</h2>
          <hr style="border-color:#262626;margin-bottom:24px"/>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#a78bfa">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="background:#171717;padding:16px;border-radius:8px;border-left:3px solid #7c3aed;white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
