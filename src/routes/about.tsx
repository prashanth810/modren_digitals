import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Gem, Gauge, Sprout } from "lucide-react";
import { CTASection, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { seo } from "@/data/site";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${seo.siteName} | Web Developer & Digital Solutions` },
      { name: "description", content: "A focused digital practice connecting design strategy, modern engineering, and commercial thinking." },
      { property: "og:title", content: `About ${seo.siteName}` },
      { property: "og:description", content: "Technology, design, and business working together." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: seo.image },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});
const values = [
  ["01", "Quality", "Attention to detail from the first sketch to the final release.", Gem],
  [
    "02",
    "Simplicity",
    "Complex systems made clear, useful, and comfortable to navigate.",
    BarChart3,
  ],
  ["03", "Performance", "Fast, stable experiences engineered for the real world.", Gauge],
  ["04", "Growth", "Technology designed to evolve with the business around it.", Sprout],
] as const;
function AboutPage() {
  return (
    <>
      <PageHero
        label="The practice"
        index="2024—NOW"
        title="Technology, design & business — working together."
        copy="Northstar is an independent digital practice focused on modern products that perform beautifully and make commercial sense."
      />
      <section className="section pt-0">
        <div className="shell grid gap-14 border-t border-border pt-16 lg:grid-cols-2">
          <Reveal>
            <div className="portrait-art">
              <div className="portrait-grid" />
              <span className="portrait-mark">N/S</span>
              <p>
                Independent practice
                <br />
                India / Worldwide
              </p>
            </div>
          </Reveal>
          <Reveal>
            <p className="eyebrow">An integrated approach</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight lg:text-5xl">
              Clear design is only powerful when the engineering and business logic support it.
            </h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-muted-foreground">
              <p>
                I create digital products by treating interface, technology, and strategy as one
                connected system—not separate deliverables.
              </p>
              <p>
                The result is work that feels distinctive without becoming distracting, performs
                under real constraints, and gives teams a solid foundation for what comes next.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section border-y border-border bg-surface">
        <div className="shell">
          <SectionHeading label="Trajectory" title="Always moving forward" />
          <div className="timeline mt-14">
            {[
              ["2024", "Started building professional web experiences."],
              ["2025", "Expanded into full-stack systems and business applications."],
              [
                "2026",
                "Building scalable products and stronger digital foundations for ambitious businesses.",
              ],
            ].map(([year, text]) => (
              <Reveal className="timeline-item" key={year}>
                <strong>{year}</strong>
                <span />
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <SectionHeading label="Principles" title="Standards that shape every project" />
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
            {values.map(([n, title, text, Icon]) => (
              <Reveal className="value-card" key={title}>
                <div>
                  <span>{n}</span>
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
