import { useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { ThemeProvider } from "./theme-provider";
import type { ReactNode } from "react";

export function SiteLayout({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (state) => state.location.pathname });
  return <ThemeProvider><Navbar /><motion.main key={path} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35, ease: "easeOut" }}>{children}</motion.main><Footer /></ThemeProvider>;
}
