import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { brand, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-deep text-deep-foreground">
      <div className="shell py-14 lg:py-20">
        <div className="grid gap-12 border-b border-deep-border pb-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="brand-mark brand-mark--footer">
              <div className="brand-mark brand-mark--footer">
                <img src={brand.logo} alt={brand.name} className="h-16 w-auto object-contain" />
              </div>
              <b>{brand.name}</b>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-deep-muted">
              Building modern digital experiences for ambitious businesses.
            </p>
          </div>
          <div>
            <p className="eyebrow text-deep-muted">Navigate</p>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} className="footer-link">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow text-deep-muted">Connect</p>
            <div className="mt-5 grid gap-3">
              <a href={brand.linkedin} className="footer-link" target="_blank">
                LinkedIn <ArrowUpRight />
              </a>
              <a href="https://github.com/prashanth810" className="footer-link" target="_blank">
                GitHub <ArrowUpRight />
              </a>
              <a
                href="https://www.instagram.com/_prashanth_u/?hl=en"
                className="footer-link"
                target="_blank"
              >
                Instagram <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
        <div className="border-b border-deep-border pb-12">
          <div className="flex flex-col gap-3 pt-7 text-xs text-deep-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {brand.name}. All rights reserved.</p>
            <p>Independent digital practice · India / Worldwide</p>
          </div>
        </div>

        <div className="footer-wordmark" aria-label={`${brand.shortName} ${brand.name}`}>
          <strong className="footer-wordmark__name">{brand.name}</strong>
        </div>
      </div>
    </footer>
  );
}
