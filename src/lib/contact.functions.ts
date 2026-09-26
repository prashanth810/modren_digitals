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
    const lovableApiKey = process.env["LOVABLE_API_KEY"];
    const resendApiKey = process.env["RESEND_API_KEY"];

    if (!lovableApiKey || !resendApiKey) {
      throw new Error("Email delivery is not configured.");
    }

    const safe = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, escapeHtml(value)]),
    ) as Record<keyof ContactFormData, string>;

    const response = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableApiKey}`,
        "X-Connection-Api-Key": resendApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Northstar Digital <onboarding@resend.dev>",
        to: ["supportweb329@gmail.com"],
        reply_to: data.email,
        subject: `New ${data.projectType} enquiry from ${data.name}`,
        html: `
          <h1>New project enquiry</h1>
          <p><strong>Name:</strong> ${safe.name}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <p><strong>Phone:</strong> ${safe.phone || "Not provided"}</p>
          <p><strong>Company:</strong> ${safe.company || "Not provided"}</p>
          <p><strong>Project type:</strong> ${safe.projectType}</p>
          <p><strong>Budget:</strong> ${safe.budget}</p>
          <p><strong>Message:</strong></p>
          <p>${safe.message.replace(/\n/g, "<br />")}</p>
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