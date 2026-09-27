import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, MoveUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { CTASection, Reveal, SectionHeading } from "@/components/site/primitives";
import { HeroScene } from "@/components/three/hero-scene";
import { benefits, process, projects, services, seo } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${seo.siteName} | Web Developer & Digital Solutions` },
      { name: "description", content: seo.description },
      { property: "og:title", content: `${seo.siteName} — Modern Digital Experiences` },
      { property: "og:description", content: seo.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: seo.image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${seo.siteName} — Modern Digital Experiences` },
      { name: "twitter:description", content: seo.description },
    ],
  }),
  component: HomePage,
});

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const formattedCount = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
    return () => controls.stop();
  }, [count, isInView, value]);

  return (
    <div className="stat" ref={ref}>
      <motion.strong>{formattedCount}</motion.strong>
      <span>{label}</span>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-grid" />
        <div className="shell relative z-10 grid min-h-[880px] items-center gap-8 pb-20 pt-28 lg:min-h-[760px] lg:grid-cols-[1.08fr_.92fr] lg:pt-24">
          <div className="pt-10 lg:pt-0">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="eyebrow"
            >
              Creative digital solutions <span className="status-dot" /> Available for select
              projects
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7 }}
              className="hero-title mt-7"
            >
              Digital experiences
              <br />
              built to <span>move</span>
              <br />
              business forward.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-7 max-w-xl text-base leading-8 text-muted-foreground lg:text-lg"
            >
              I combine exceptional interface design, robust technology, and business-focused
              thinking to create products people trust and enjoy using.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Button asChild variant="signal" size="xl">
                <Link to="/contact">
                  Start a project <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/services">View services</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.9 }}
            className="hero-canvas"
          >
            <HeroScene />
          </motion.div>
          <div className="scroll-cue">
            <ArrowDown /> Scroll to explore
          </div>
        </div>
      </section>
      <section className="stats-band">
        <div className="shell grid sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: 3, suffix: "+", label: "Years experience" },
            { value: 2, suffix: "", label: "Projects delivered" },
            { value: 5, suffix: "+", label: "Technologies" },
            { value: 95, suffix: "%", label: "Client focus" },
          ].map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <Reveal>
            <SectionHeading
              label="Capabilities / 01"
              title="What I can build for you"
              copy="From first principles to final release, each engagement connects clear thinking with meticulous execution."
            />
          </Reveal>
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <Reveal key={service.title} className="service-card">
                <div className="flex items-start justify-between">
                  <span className="service-number">{service.number}</span>
                  <service.icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tag-row">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <Link to="/services" className="text-link mt-9">
            Explore all services <ArrowRight />
          </Link>
        </div>
      </section>
      <section className="section border-y border-border bg-surface">
        <div className="shell">
          <Reveal>
            <SectionHeading
              label=""
              title="Proof, not promises"
              copy="Representative product directions ready to be replaced with your real case studies."
            />
          </Reveal>
          <div className="mt-14 grid grid gap-6 lg:grid-cols-12">
            {projects.map((project, i) => (
              <Reveal
                key={project.name}
                className={`project ${i === 0 ? "lg:col-span-7" : "lg:col-span-5"}`}
              >
                <div className={`project-visual project-visual--${project.tone}`}>
                  <div className="project-window">
                    {/* <span />
                    <span />
                    <span />
                    <div className="project-ui" /> */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name} website (opens in a new tab)`}
                    >
                      <img
                        src={project.logo}
                        alt={project.name}
                        className="h-full w-auto object-contain"
                      />
                    </a>
                  </div>
                  <span className="project-index">{project.index}</span>
                </div>
                <div className="pt-6">
                  <p className="eyebrow">{project.category}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{project.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="tag-row mt-5">
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <Reveal>
            <SectionHeading label="" title="How I work" />
          </Reveal>
          <div className="process-line mt-14">
            {process.map((step) => (
              <Reveal key={step.number} className="process-step">
                <span>{step.number}</span>
                <step.icon />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section border-t border-border">
        <div className="shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              label=""
              title="Built with intent. Delivered with care."
              copy="Good digital work is not decoration. It clarifies, earns confidence, and moves the business."
            />
          </Reveal>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {benefits.map(([title, text, Icon]) => (
              <Reveal key={title} className="benefit">
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
                <Check />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
