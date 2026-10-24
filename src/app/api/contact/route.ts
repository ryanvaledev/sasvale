import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactFormSchema = z.object({
  name: z.string().min(1, "Please provide your name").max(150),
  email: z.string().email("Please provide a valid email address (e.g. alex@company.com)"),
  company: z.string().max(150).optional(),
  service: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(2, "Please write at least a few words describing your project or inquiry").max(5000),
  website_trap: z.string().optional(),
});

const DEFAULT_INBOX = "sasvaleltd@gmail.com";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const rawBody = await request.json().catch(() => ({}));
    
    // Trim string inputs to avoid accidental trailing space issues
    const body = {
      name: typeof rawBody.name === "string" ? rawBody.name.trim() : "",
      email: typeof rawBody.email === "string" ? rawBody.email.trim() : "",
      company: typeof rawBody.company === "string" ? rawBody.company.trim() : undefined,
      service: typeof rawBody.service === "string" ? rawBody.service.trim() : "",
      timeline: typeof rawBody.timeline === "string" ? rawBody.timeline.trim() : undefined,
      budget: typeof rawBody.budget === "string" ? rawBody.budget.trim() : undefined,
      message: typeof rawBody.message === "string" ? rawBody.message.trim() : "",
      website_trap: typeof rawBody.website_trap === "string" ? rawBody.website_trap.trim() : "",
    };

    // If honeypot is filled, silently discard spam
    if (body.website_trap && body.website_trap.length > 0) {
      return NextResponse.json(
        { success: true, message: "Thank you for reaching out." },
        { status: 200 }
      );
    }

    const parseResult = contactFormSchema.safeParse(body);

    if (!parseResult.success) {
      const fieldErrors = parseResult.error.flatten().fieldErrors;
      const firstErrorMessage =
        Object.values(fieldErrors).flat()[0] || "Please check the form fields and try again.";

      return NextResponse.json(
        {
          success: false,
          error: firstErrorMessage,
          details: fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, company, service, timeline, budget, message } = parseResult.data;
    const recipientEmail = process.env.CONTACT_INBOX_EMAIL || DEFAULT_INBOX;
    const resendApiKey = process.env.RESEND_API_KEY;

    console.info("[Contact Form Submission Received]", {
      name,
      email,
      company,
      service,
      timeline,
      budget,
      recipient: recipientEmail,
      timestamp: new Date().toISOString(),
    });

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #05070c; color: #f5f3ed; padding: 24px; margin: 0; }
              .container { max-width: 600px; margin: 0 auto; background: #0c0d10; border: 1px solid rgba(198,165,107,0.3); border-radius: 12px; padding: 32px; }
              .header { border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px; margin-bottom: 24px; }
              .badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; background: rgba(198,165,107,0.15); color: #C6A56B; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; }
              h1 { font-size: 24px; margin: 12px 0 4px 0; color: #ffffff; }
              .field { margin-bottom: 20px; }
              .label { font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 1px; color: #94A3B8; margin-bottom: 4px; }
              .value { font-size: 16px; color: #f5f3ed; font-weight: 500; }
              .message-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 16px; font-size: 15px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; }
              .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #64748B; font-family: monospace; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <span class="badge">Sasvale Lead Intake</span>
                <h1>New Project Inquiry</h1>
              </div>

              <div class="field">
                <div class="label">Client Name</div>
                <div class="value">${escapeHtml(name)}</div>
              </div>

              <div class="field">
                <div class="label">Email Address (Click reply to respond directly)</div>
                <div class="value"><a href="mailto:${escapeHtml(email)}" style="color: #C6A56B; text-decoration: none;">${escapeHtml(email)}</a></div>
              </div>

              ${company ? `
              <div class="field">
                <div class="label">Company / Organization</div>
                <div class="value">${escapeHtml(company)}</div>
              </div>
              ` : ""}

              <div class="field">
                <div class="label">Service Interest</div>
                <div class="value">${escapeHtml(service || "Not specified")}</div>
              </div>

              ${timeline ? `
              <div class="field">
                <div class="label">Target Timeline</div>
                <div class="value">${escapeHtml(timeline)}</div>
              </div>
              ` : ""}

              ${budget ? `
              <div class="field">
                <div class="label">Estimated Budget</div>
                <div class="value">${escapeHtml(budget)}</div>
              </div>
              ` : ""}

              <div class="field">
                <div class="label">Project Details</div>
                <div class="message-box">${escapeHtml(message)}</div>
              </div>

              <div class="footer">
                // Received: ${new Date().toUTCString()}<br/>
                // Forwarded to: ${escapeHtml(recipientEmail)}
              </div>
            </div>
          </body>
        </html>
      `;

      const { data: resendData, error: resendError } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "Sasvale Inquiries <onboarding@resend.dev>",
        to: recipientEmail,
        replyTo: email,
        subject: `[New Inquiry] ${name}${company ? ` (${company})` : ""} — ${service || "Project Scoping"}`,
        text: `New Inquiry from ${name} (${email})${company ? `\nCompany: ${company}` : ""}\nService: ${service || "Not specified"}${timeline ? `\nTimeline: ${timeline}` : ""}${budget ? `\nBudget: ${budget}` : ""}\n\nMessage:\n${message}`,
        html: htmlContent,
      });

      if (resendError) {
        console.error("[Resend Delivery Error]", resendError);
      } else {
        console.info("[Resend Email Sent Successfully]", resendData?.id);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received. Our team will get back to you within one business day.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
