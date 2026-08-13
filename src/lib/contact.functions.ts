import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(10, "Message is too short").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const resendKey = process.env.RESEND_API_KEY;
    const toAddress = process.env.CONTACT_TO_EMAIL ?? "devsharma.pcm.2003@gmail.com";
    const fromAddress = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

    const html = `
      <div style="font-family: system-ui, sans-serif; line-height: 1.6; color: #111;">
        <h2 style="margin:0 0 12px">New portfolio contact</h2>
        <p><strong>From:</strong> ${escapeHtml(data.name)} &lt;${escapeHtml(data.email)}&gt;</p>
        <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
        <hr />
        <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
      </div>
    `;

    // If Resend is connected via Lovable connector gateway, actually send.
    if (lovableKey && resendKey) {
      const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${lovableKey}`,
          "X-Connection-Api-Key": resendKey,
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [toAddress],
          reply_to: data.email,
          subject: `[Portfolio] ${data.subject}`,
          html,
        }),
      });
      if (!res.ok) {
        const body = await res.text();
        console.error(`Resend gateway failed [${res.status}]: ${body}`);
        throw new Error("Failed to send message. Please try again later.");
      }
      return { ok: true as const, delivered: true as const };
    }

    // No email provider configured yet — log the message so it isn't lost
    // and return success so the UX still works while you wire up Resend.
    console.log("[contact] message received (no email provider configured):", {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    });
    return { ok: true as const, delivered: false as const };
  });
