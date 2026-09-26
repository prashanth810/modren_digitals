import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero, CTASection, Reveal } from "@/components/site/primitives";
import { services, technologies } from "@/data/site";
export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Web Development & Digital Solutions | Modren Digital" },
      {
        name: "description",
        content:
          "Web development, frontend engineering, full-stack systems, UI/UX and custom business platforms.",
      },
      { property: "og:title", content: "Services | Modren Digital" },
      {
        property: "og:description",
        content: "Design and engineering services that turn ideas into useful digital products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});
function ServicesPage() {
  return (
    <>
      <PageHero
        label="Capabilities"
        index="01—05"
        title="Services that turn ideas into digital products."
        copy="From focused landing pages to complete platforms, I help businesses build modern, scalable, high-performing experiences."
      />
      <section className="section pt-0">
        <div className="shell border-t border-border">
          {services.map((service) => (
            <Reveal key={service.number} className="service-detail">
              <div className="service-detail__lead">
                <span>{service.number}</span>
                <service.icon />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="service-detail__tools">
                <div className="tag-row">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <p className="service-detail__pricing">
                  {service.pricing.type === "tiers" ? (
                    <>
                      Starting at <strong>{service.pricing.plans[0]?.price}</strong>
                    </>
                  ) : (
                    service.pricing.note
                  )}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section overflow-hidden border-y border-border bg-surface">
        <div className="shell">
          <p className="eyebrow">Technology toolkit</p>
          <h2 className="section-title mt-5 max-w-3xl">
            The right technology, selected for the job.
          </h2>
        </div>
        <div className="tech-marquee mt-14">
          <div>
            {[...technologies, ...technologies].map((tech, i) => (
              <span key={`${tech}-${i}`}>
                {tech}
                <i>✦</i>
              </span>
            ))}
          </div>
        </div>
        <div className="shell mt-12">
          <Link to="/contact" className="text-link">
            Discuss your technology needs <ArrowRight />
          </Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
