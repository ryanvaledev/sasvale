import { NextResponse } from "next/server";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please provide a valid email address"),
  service: z.string().min(1, "Please select a service area").optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  budget: z.string().optional(),
  // Honeypot field: must remain empty for genuine submissions
  website_trap: z.string().max(0, "Automated submission detected").optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parseResult = contactFormSchema.safeParse(body);

    if (!parseResult.success) {
      // Check if honeypot was triggered
      const isHoneypotTriggered = parseResult.error.issues.some(
        (issue) => issue.path.includes("website_trap")
      );

      if (isHoneypotTriggered) {
        // Silently discard spam or return generic response
        return NextResponse.json(
          { success: true, message: "Thank you for reaching out." },
          { status: 200 }
        );
      }

      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, service, message, budget } = parseResult.data;

    // Contact API Scaffolding: In production, integrate email provider (Resend, Postmark)
    // or internal webhook without exposing credentials to client.
    console.info("[Contact Form Submission Received]", {
      name,
      email,
      service,
      budget,
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received. Our team will get back to you within one business day.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
