import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactSchema, sendContactEnquiry, type ContactFormData } from "@/lib/contact.functions";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const sendEnquiry = useServerFn(sendContactEnquiry);
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const result = contactSchema.safeParse(raw);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Please check your details and try again.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      await sendEnquiry({ data: result.data as ContactFormData });
      form.reset();
      setStatus("success");
    } catch {
      setError("Your enquiry could not be sent. Please try again in a moment.");
      setStatus("error");
    }
  };
  if (status === "success")
    return (
      <div className="form-success" role="status">
        <CheckCircle2 />
        <h2>Enquiry received.</h2>
        <p>Thanks for reaching out. Your message has been sent to Modren Digital.</p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another
        </Button>
      </div>
    );
  return (
    <form onSubmit={submit} className="contact-form">
      <div className="field-grid">
        <label>
          Name
          <input name="name" required placeholder="Your name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required placeholder="you@company.com" />
        </label>
      </div>
      <div className="field-grid">
        <label>
          Phone
          <input name="phone" type="tel" placeholder="Your phone number" />
        </label>
        <label>
          Company / Business
          <input name="company" placeholder="Company name" />
        </label>
      </div>
      <div className="field-grid">
        <label>
          Project type
          <select name="projectType" required defaultValue="">
            <option value="" disabled>
              Select a project
            </option>
            {[
              "Website",
              "E-commerce",
              "Web Application",
              "UI/UX",
              "Full-Stack Application",
              "Business Platform",
              "Other",
            ].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          Budget range
          <select name="budget" required defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {["Under ₹25,000", "₹25,000 – ₹50,000", "₹50,000 – ₹1,00,000", "₹1,00,000+"].map(
              (item) => (
                <option key={item}>{item}</option>
              ),
            )}
          </select>
        </label>
      </div>
      <label>
        Message
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={6}
          placeholder="Tell me about the challenge, timeline, and what success looks like."
        />
      </label>
      {status === "error" && (
        <p className="form-error" role="alert">
          <AlertCircle />
          {error}
        </p>
      )}
      <Button type="submit" variant="signal" size="xl" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <LoaderCircle className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send enquiry <Send />
          </>
        )}
      </Button>
    </form>
  );
}
