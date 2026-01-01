import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const FROM_EMAIL = "hellomedgate@gmail.com"

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP configuration is missing. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.")
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true" || Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })
}

function buildEmailContent(type: string, email: string, name?: string) {
  if (type === "welcome-student") {
    return {
      subject: "Welcome to MedGate - Your Journey Begins Here",
      body: `
Dear ${name || "Student"},

Welcome to MedGate! 🎉

Thank you for joining our platform as an early access member. We're excited to have you as part of the MedGate community.

As a pilot phase member, you'll be among the first to:
• Access clinical observership and elective opportunities in the UAE
• Receive priority notifications when new programs are listed
• Connect with leading healthcare institutions
• Get updates on platform features and improvements

What's Next?
1. Complete your student profile when program listings go live
2. Browse available opportunities across UAE medical facilities
3. Submit applications directly through our platform
4. Track your application status in real-time

We're currently in the pilot phase, actively working with hospitals to bring you quality clinical training opportunities. You'll receive an email notification as soon as programs become available for application.

If you have any questions or need assistance, feel free to reach out to us at ${FROM_EMAIL}.

Best regards,
The MedGate Team

---
This is an automated message from MedGate. Please do not reply to this email.
      `,
    }
  }

  return {
    subject: "MedGate Hospital Onboarding Pack",
    body: `
Dear Hospital Team,

Thank you for your interest in MedGate. Here are the onboarding steps:

1) Confirm program contacts: primary coordinator and approver
2) Share eligibility rules: applicant criteria and required documents
3) Intake settings: monthly/quarterly capacity and application windows
4) Review workflow: reviewers, approvers, and expected timelines
5) Safety & compliance: required vaccinations, screenings, and attestations
6) Communication: notification emails and escalation contacts

Reply to this email with your details and we will provision your hospital workspace.

Best regards,
The MedGate Team
    `,
  }
}

export async function POST(req: Request) {
  const { email, type = "onboarding", name } = await req.json()

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 })
  }

  const mail = buildEmailContent(type, email, name)

  try {
    const transporter = getTransporter()

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: email,
      subject: mail.subject,
      text: mail.body,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Email send failed", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
