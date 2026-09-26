import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const projectTypes = [
  "Website",
  "E-commerce",
  "Web Application",
  "UI/UX",
  "Full-Stack Application",
  "Business Platform",
  "Other",
] as const;

const budgetRanges = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  phone: z.string().trim().max(30).optional().default(""),
  company: z.string().trim().max(120).optional().default(""),
  projectType: z.enum(projectTypes, { message: "Please select a project type." }),
  budget: z.enum(budgetRanges, { message: "Please select a budget range." }),
  message: z.string().trim().min(10, "Please share a little more about your project.").max(3000),
});

export type ContactFormData = z.infer<typeof contactSchema>;

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character] ?? character;
  });

export const sendContactEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: ContactFormData) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const resendApiKey = process.env["RESEND_API_KEY"];

    if (!resendApiKey) {
      throw new Error("Email delivery is not configured.");
    }

    const safe = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, escapeHtml(value)]),
    ) as Record<keyof ContactFormData, string>;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Modren Digital <onboarding@resend.dev>",
        to: ["supportweb329@gmail.com"],
        reply_to: data.email,
        subject: `New ${data.projectType} enquiry from ${data.name}`,
        html: `
          <div style="background:#f4f4f5;padding:32px 16px;font-family:Helvetica,Arial,sans-serif;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e4e7;">
              <tr>
                <td style="background:#111113;padding:24px 28px;">
                  <p style="margin:0;color:#ffffff;font-size:13px;letter-spacing:.08em;text-transform:uppercase;">Modren Digital</p>
                  <h1 style="margin:6px 0 0;color:#ffffff;font-size:20px;font-weight:600;">New project enquiry</h1>
                </td>
              </tr>
              <tr>
                <td style="padding:24px 28px 8px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #f0f0f1;color:#71717a;font-size:13px;width:110px;">Name</td>
                      <td style="padding:10px 0;border-bottom:1px solid #f0f0f1;color:#111113;font-size:14px;font-weight:500;">${safe.name}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #f0f0f1;color:#71717a;font-size:13px;">Email</td>
                      <td style="padding:10px 0;border-bottom:1px solid #f0f0f1;color:#111113;font-size:14px;font-weight:500;"><a href="mailto:${safe.email}" style="color:#111113;text-decoration:none;">${safe.email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #f0f0f1;color:#71717a;font-size:13px;">Phone</td>
                      <td style="padding:10px 0;border-bottom:1px solid #f0f0f1;color:#111113;font-size:14px;font-weight:500;">${safe.phone || "Not provided"}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #f0f0f1;color:#71717a;font-size:13px;">Company</td>
                      <td style="padding:10px 0;border-bottom:1px solid #f0f0f1;color:#111113;font-size:14px;font-weight:500;">${safe.company || "Not provided"}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #f0f0f1;color:#71717a;font-size:13px;">Project type</td>
                      <td style="padding:10px 0;border-bottom:1px solid #f0f0f1;color:#111113;font-size:14px;font-weight:500;">${safe.projectType}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0;color:#71717a;font-size:13px;">Budget</td>
                      <td style="padding:10px 0;color:#111113;font-size:14px;font-weight:500;">${safe.budget}</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:4px 28px 28px;">
                  <p style="margin:16px 0 8px;color:#71717a;font-size:13px;">Message</p>
                  <div style="background:#f9f9fa;border:1px solid #f0f0f1;border-radius:8px;padding:14px 16px;color:#111113;font-size:14px;line-height:1.6;">
                    ${safe.message.replace(/\n/g, "<br />")}
                  </div>
                </td>
              </tr>
            </table>
            <p style="max-width:520px;margin:16px auto 0;color:#a1a1aa;font-size:12px;text-align:center;">Sent from the Modren Digital contact form.</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Resend request failed [${response.status}]: ${errorBody}`);
      throw new Error("Your enquiry could not be sent. Please try again.");
    }

    return { sent: true };
  });
