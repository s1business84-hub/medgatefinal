import { NextResponse } from "next/server"

const FROM_EMAIL = "hellomedgate@gmail.com"

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

  // Placeholder: integrate with real email service (e.g., Resend, SendGrid, SES)
  console.log("Sending email", {
    from: FROM_EMAIL,
    to: email,
    subject: mail.subject,
    body: mail.body,
    type,
  })

  return NextResponse.json({ ok: true })
}
