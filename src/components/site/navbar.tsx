import { Link } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand, navItems } from "@/data/site";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-nav ${scrolled ? "site-nav--solid" : ""}`}>
      <div className="shell flex h-20 items-center justify-between">
        <Link to="/" className="brand-mark" aria-label="Northstar Digital home">
          <div className="brand-mark brand-mark--footer">
            <img src={brand.logo} alt={brand.name} className="h-16 w-auto object-contain" />
          </div>
          <b>{brand.name}</b>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="icon"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Button asChild variant="signal" className="hidden sm:inline-flex">
            <Link to="/contact">
              Let&apos;s talk <span aria-hidden>↗</span>
            </Link>
          </Button>
          <Button
            variant="icon"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu md:hidden">
          <nav className="shell flex flex-col py-8" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="mobile-link"
              >
                <span>0{index + 1}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
