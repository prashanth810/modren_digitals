import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { PageHero, Reveal } from "@/components/site/primitives";
import { brand } from "@/data/site";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Modren Digital | Start Your Project" },
      {
        name: "description",
        content:
          "Discuss your website, web application, interface, or business platform with Modren Digital.",
      },
      { property: "og:title", content: "Start a Project | Modren Digital" },
      {
        property: "og:description",
        content:
          "Share your challenge and start a focused conversation about your next digital product.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});
function ContactPage() {
  return (
    <>
      <PageHero
        label="Start a project"
        index="OPEN / 2026"
        title="Let’s build something great together."
        copy="Have a project, idea, or business problem you’d like to discuss? Share the essentials and let’s start a focused conversation."
      />
      <section className="section pt-0">
        <div className="shell grid gap-12 border-t border-border pt-16 lg:grid-cols-[.72fr_1.28fr]">
          <Reveal>
            <p className="eyebrow">Direct contact</p>
            <div className="contact-list">
              <a href={`mailto:${brand.email}`}>
                <Mail />
                <span>Email</span>
                <strong>{brand.email}</strong>
              </a>
              <a href={`tel:${brand.phone}`}>
                <Phone />
                <span>Phone</span>
                <strong>{brand.phone}</strong>
              </a>
              <div>
                <MapPin />
                <span>Location</span>
                <strong>{brand.location}</strong>
              </div>
              <a href={brand.linkedin} target="_blank">
                <Linkedin />
                <span>LinkedIn</span>
                <strong>{brand.linkedin}</strong>
              </a>
            </div>
            <p className="mt-8 max-w-sm text-sm leading-7 text-muted-foreground">
              Your details stay private and are only used to discuss your enquiry.
            </p>
          </Reveal>
          <Reveal>
            <div className="form-panel">
              <p className="eyebrow">Project enquiry / 01</p>
              <h2 className="mt-4 text-3xl font-semibold">Tell me what you’re building.</h2>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
