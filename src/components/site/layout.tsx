import { useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { Preloader } from "./preloader";
import { ThemeProvider } from "./theme-provider";
import { WhatsAppButton } from "./whatsapp-button";
import type { CSSProperties, ReactNode } from "react";

export function SiteLayout({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (state) => state.location.pathname });
  // `intro` is true only on first load / refresh. SiteLayout stays mounted while
  // navigating between pages, so the intro never replays during normal navigation.
  const [intro, setIntro] = useState(true);

  // While the intro runs, the page behind the letters is slightly zoomed in;
  // it settles to normal when the intro exits. (transform only = smooth, GPU-friendly)
  const stageStyle: CSSProperties = {
    transform: intro ? "scale(1.1)" : "none",
    transformOrigin: "50% 35%",
    transition: "transform 600ms cubic-bezier(.22,1,.36,1)",
    willChange: intro ? "transform" : undefined,
  };

  return (
    <ThemeProvider>
      <Navbar />
      {/* overflow-x: clip stops the zoomed page from creating a horizontal scrollbar */}
      <motion.main
        key={path}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{ overflowX: "clip" }}
      >
        <div style={stageStyle} className="motion-reduce:!transition-none">
          {children}
        </div>
      </motion.main>
      <Footer />
      <WhatsAppButton />
      <Preloader onExit={() => setIntro(false)} />
    </ThemeProvider>
  );
}
