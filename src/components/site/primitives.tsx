import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export function SectionHeading({ label, title, copy, align = "left" }: { label: string; title: string; copy?: string; align?: "left" | "center" }) {
  return <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}><p className="eyebrow">{label}</p><h2 className="section-title mt-5">{title}</h2>{copy && <p className="section-copy mt-5">{copy}</p>}</div>;
}
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
export function PageHero({ label, title, copy, index }: { label: string; title: string; copy: string; index: string }) {
  return <section className="page-hero"><div className="shell relative z-10 grid items-end gap-10 pb-16 pt-40 lg:grid-cols-[1fr_26rem] lg:pb-24 lg:pt-52"><div><p className="eyebrow">{label}</p><h1 className="page-title mt-5">{title}</h1></div><div><p className="section-copy">{copy}</p><p className="mt-8 font-mono text-xs text-muted-foreground">INDEX / {index}</p></div></div></section>;
}
export function CTASection() { return <section className="bg-surface-deep text-deep-foreground"><div className="shell py-20 lg:py-32"><Reveal><p className="eyebrow text-signal">Ready when you are</p><div className="mt-6 grid items-end gap-8 lg:grid-cols-[1fr_auto]"><h2 className="cta-title">Have an idea?<br/>Let&apos;s build it.</h2><Button asChild variant="signal" size="xl"><Link to="/contact">Start a conversation <ArrowRight /></Link></Button></div></Reveal></div></section> }
