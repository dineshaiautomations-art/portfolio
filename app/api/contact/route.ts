import { NextResponse } from "next/server";

// ──────────────────────────────────────────────────────────────────────────
// This route validates and accepts contact-form submissions.
//
// ⚠ TODO before launch: wire this up to an actual email/lead destination.
// The simplest options:
//   1. Resend (https://resend.com) — npm i resend, then call
//      resend.emails.send({ from, to: SITE.email, subject, html }) below.
//   2. Forward to a Google Sheet / Zoho CRM webhook via n8n — you already
//      run n8n, so this is the most "on brand" option: point this route's
//      fetch() at your n8n webhook URL and let your own automation handle
//      logging the lead + notifying you on WhatsApp/Telegram.
//   3. A form backend like Formspree, swapping this route out entirely.
//
// Until one of those is wired up, submissions are validated but not
// delivered anywhere — so don't rely on this in production as-is.
// ──────────────────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectDetails } = body as Record<string, string>;

    if (!name || !email || !projectDetails) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // TODO: replace with a real delivery integration (see notes above).
    // Example n8n webhook forward:
    // await fetch(process.env.N8N_CONTACT_WEBHOOK_URL!, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(body),
    // });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to process request." },
      { status: 500 }
    );
  }
}
