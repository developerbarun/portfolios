import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, projectType, budget, timeline, message } =
      body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Send email via Resend
    const result = await resend.emails.send({
      from: "noreply@barungupta.vercel.app",
      to: "barung2023@gmail.com",
      subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>

          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}

          <h3>Project Details</h3>
          ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ""}
          ${budget ? `<p><strong>Budget Range:</strong> ${budget}</p>` : ""}
          ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ""}

          <h3>Message</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>

          <hr style="border: none; border-top: 1px solid #ccc; margin-top: 20px;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
      reply_to: email,
    });

    if (result.error) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
