import { Link } from "@tanstack/react-router";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { pricingPlans } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/primitives";
import { buildWhatsAppLink, WhatsAppIcon } from "@/components/site/whatsapp-button";

type Plan = (typeof pricingPlans)[number];

/* Message that opens in WhatsApp when a plan's "Book" button is clicked */
const bookingMessage = (plan: Plan) =>
  [
    `Hi Modren Digital! 👋`,
    `I'd like to book the *${plan.name}* plan (starting at ${plan.price}).`,
    `Includes: ${plan.features.join(", ")}.`,
    `Could you please share the next steps?`,
  ].join("\n");

/* Premium booking button text for each plan */
const bookingLabel: Record<string, string> = {
  Basic: "Book Basic Now",
  Medium: "Book Medium Now",
  Best: "Book Premium Now",
};

/* ------------------------------------------------------------------ */
/*  FAQ content – edit the answers here to match your real policies    */
/* ------------------------------------------------------------------ */
const faqs = [
  {
    q: "What is the right plan for me?",
    a: (
      <>
        <p>
          <strong>Basic</strong> is ideal if you need a clean, single-page site (a landing page, a
          portfolio or a simple business card site) to get online fast.
        </p>
        <p>
          <strong>Medium</strong> suits growing businesses that need a multi-page website with
          on-page SEO and CMS-ready content.
        </p>
        <p>
          <strong>Best</strong> is for brands that want a premium look, with custom UI,
          micro-animations, advanced SEO and priority support. Not sure? Send me a message and
          I&apos;ll recommend the right fit for your goals and budget.
        </p>
      </>
    ),
  },
  {
    q: "What are my payment options?",
    a: (
      <p>
        I accept UPI, bank transfer (NEFT / IMPS) and major credit and debit cards. Projects start
        with an advance to book your slot, and the balance is due before final delivery. For custom
        projects or invoice-based billing,{" "}
        <Link to="/contact" className="text-link">
          contact me
        </Link>{" "}
        and we&apos;ll agree on a payment schedule.
      </p>
    ),
  },
  {
    q: "How does pricing work?",
    a: (
      <p>
        Web Design packages (Basic, Medium and Best) have a fixed starting price, so you know the
        cost up front. Frontend, Full-Stack and App development are quoted per project, based on
        features, pages, integrations and timeline. You always get a clear written estimate before
        any work begins.
      </p>
    ),
  },
  {
    q: "Are prices inclusive of taxes?",
    a: (
      <p>
        Listed prices are starting prices in Indian Rupees (₹). Applicable taxes such as GST are
        added on the final invoice where required. Domain, hosting and third-party service costs are
        not included, but I&apos;ll guide you to the most cost-effective options.
      </p>
    ),
  },
  {
    q: "How can I track my project and request changes?",
    a: (
      <p>
        I share progress at every milestone (design, build and launch) over email or WhatsApp, so
        you can review and give feedback along the way. Each plan includes revisions during
        development, and after launch I&apos;m available for support, updates and future
        improvements.
      </p>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export function Pricing() {
  return (
    <>
      {/* ───────────── 1st section: Pricing plans ───────────── */}
      <section className="relative overflow-hidden pb-16 pt-36 lg:pb-24 lg:pt-44">
        <div className="hero-grid" aria-hidden />
        <div className="shell relative z-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-signal">Pricing</p>
            <h1 className="section-title mt-5">
              Websites that scale,{" "}
              <span className="text-muted-foreground">from idea to launch.</span>
            </h1>
          </Reveal>

          <Reveal className="mt-14 lg:mt-20">
            <div className="grid overflow-hidden border border-border bg-card/70 backdrop-blur md:grid-cols-3 md:divide-x md:divide-border max-md:divide-y max-md:divide-border">
              {pricingPlans.map((plan) => (
                <article
                  key={plan.name}
                  className="group relative flex flex-col p-8 transition-colors duration-300 hover:bg-accent/40 lg:p-10"
                >
                  <h2 className="text-lg font-semibold text-signal">{plan.name}</h2>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <span className="text-5xl font-semibold tracking-tight">{plan.price}</span>
                    <span className="rounded-md bg-muted px-2 py-1 font-mono text-[.62rem] font-medium uppercase tracking-wider text-muted-foreground">
                      Starting at
                    </span>
                  </div>
                  <p className="mt-4 min-h-12 text-sm leading-6 text-muted-foreground">
                    {plan.tagline}
                  </p>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-[.95rem]">
                        <Check className="size-4 shrink-0 text-signal" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={plan.name === "Best" ? "signal" : "outline"}
                    size="lg"
                    className="mt-8 w-full rounded-full"
                  >
                    <a
                      href={buildWhatsAppLink(bookingMessage(plan))}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${bookingLabel[plan.name] ?? "Book Now"} on WhatsApp`}
                    >
                      <WhatsAppIcon className="size-4" />
                      {bookingLabel[plan.name] ?? "Book Now"}
                    </a>
                  </Button>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-14 flex justify-center">
            <div className="relative">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 scale-150 rounded-full bg-signal/40 blur-2xl"
              />
              <Button asChild variant="signal" size="lg" className="rounded-full px-9">
                <Link to="/contact">
                  Get Started <ArrowRight />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────── 2nd section: Questions & Answers ───────────── */}
      <section className="section border-t border-border bg-surface">
        <div className="shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title mt-5">Questions &amp; Answers</h2>
            <p className="section-copy mt-5 max-w-md">
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link to="/contact" className="text-link">
                Talk to me directly <ArrowRight />
              </Link>
            </p>
          </Reveal>

          <Reveal>
            {/* First item is open by default */}
            <AccordionPrimitive.Root
              type="single"
              collapsible
              defaultValue="faq-0"
              className="border-t border-border"
            >
              {faqs.map((item, i) => (
                <AccordionPrimitive.Item
                  key={item.q}
                  value={`faq-${i}`}
                  className="border-b border-border"
                >
                  <AccordionPrimitive.Header>
                    <AccordionPrimitive.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left text-lg font-semibold transition-colors hover:text-signal data-[state=open]:text-signal">
                      {item.q}
                      <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-signal" />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionPrimitive.Content className="faq-content overflow-hidden">
                    <div className="max-w-2xl space-y-3 pb-7 leading-7 text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground">
                      {item.a}
                    </div>
                  </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>
              ))}
            </AccordionPrimitive.Root>
          </Reveal>
        </div>
      </section>
    </>
  );
}
