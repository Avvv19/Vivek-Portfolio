import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, message, token } = await req.json()

  if (!name || !email || !message || !token) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // reCAPTCHA verification
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
  const recaptchaRes = await fetch(verifyUrl, { method: 'POST' })
  const recaptchaData = await recaptchaRes.json()

  if (!recaptchaData.success || recaptchaData.score < 0.5) {
    return NextResponse.json({ error: 'reCAPTCHA failed. Are you a bot?' }, { status: 400 })
  }

  // Continue sending email via nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_PASSWORD,
    },
  })

  const mailOptions = {
    from: email,
    to: 'a.v.vivekvarma@gmail.com',
    subject: `Portfolio Contact - From ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true, message: 'Message sent!' })
  } catch (error) {
    console.error('Mail error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
