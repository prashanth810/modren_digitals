import { useEffect, useRef, useState, type SVGProps } from "react";

/* ------------------------------------------------------------------ */
/*  Settings – change these to tune the intro                          */
/* ------------------------------------------------------------------ */
const BRAND_TEXT = "Moderns Digital's"; // text shown in the center
const BG_COLOR = "#041014"; // intro background
const DURATION_MS = 800; // how long 0% → 100% takes (set to 5 for ultra-fast mode)
const FADE_MS = 700; // fade-out time (keep in sync with `duration-700` below)
const FONT_WAIT_MS = 400; // max time to wait for the brand font before starting

type Phase = "loading" | "exit" | "gone";

const words = BRAND_TEXT.split(" ");
const mobileLines = [words[0], words.slice(1).join(" ")].filter(Boolean);

/** The brand name as SVG text: used for the mask cut-out and for the outline. */
function BrandText(props: SVGProps<SVGGElement>) {
  return (
    <g
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fontFamily: "var(--font-sans)", fontWeight: 800, letterSpacing: "-0.03em" }}
      {...props}
    >
      {/* Tablet / desktop: one line */}
      <text
        className="max-sm:hidden"
        x="50%"
        y="50%"
        style={{ fontSize: "clamp(2rem, 8.4vw, 9.5rem)" }}
      >
        {BRAND_TEXT}
      </text>
      {/* Mobile: two lines */}
      <g className="sm:hidden" style={{ fontSize: "15vw" }}>
        {mobileLines.map((line, i) => (
          <text key={line} x="50%" y={mobileLines.length === 1 ? "50%" : i === 0 ? "42%" : "58%"}>
            {line}
          </text>
        ))}
      </g>
    </g>
  );
}

/**
 * Full-screen intro. The dark overlay has the letters of the brand name cut out,
 * so the REAL website (rendered underneath) is only visible through the letters.
 * `onExit` is called when the overlay starts fading, so the page can settle into place.
 *
 * Performance notes:
 *  - the counter and progress line are updated directly on the DOM (no React
 *    re-render per frame), and the line uses transform (GPU) instead of width
 *  - scroll is locked with CSS that is part of the server HTML, so no scrollbars
 *    appear before the page hydrates
 */
export function Preloader({ onExit }: { onExit: () => void }) {
  const [phase, setPhase] = useState<Phase>("loading");
  const onExitRef = useRef(onExit);
  const percentRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onExitRef.current = onExit;
  }, [onExit]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;
    let raf = 0;
    let timer: number | undefined;

    const paint = (value: number) => {
      if (percentRef.current) percentRef.current.textContent = `${value}%`;
      if (barRef.current) barRef.current.style.transform = `scaleX(${value / 100})`;
      if (trackRef.current) trackRef.current.setAttribute("aria-valuenow", String(value));
    };

    const finish = () => {
      if (cancelled) return;
      paint(100);
      setPhase("exit");
      onExitRef.current();
      timer = window.setTimeout(() => setPhase("gone"), reduceMotion ? 150 : FADE_MS);
    };

    const run = () => {
      if (cancelled) return;
      if (reduceMotion) return finish();
      const start = performance.now();
      const tick = (now: number) => {
        if (cancelled) return;
        const t = Math.min((now - start) / DURATION_MS, 1);
        paint(Math.round((1 - Math.pow(1 - t, 3)) * 100));
        if (t < 1) raf = requestAnimationFrame(tick);
        else finish();
      };
      raf = requestAnimationFrame(tick);
    };

    // Wait briefly for the font (so letters don't change shape mid-intro),
    // then start on the next paint so the first frames are not dropped.
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    const fontTimeout = new Promise<void>((resolve) => window.setTimeout(resolve, FONT_WAIT_MS));
    Promise.race([fontsReady, fontTimeout]).then(() => {
      raf = requestAnimationFrame(() => {
        raf = requestAnimationFrame(run);
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <>
      {/* Lock scrolling while the intro is on screen (works before hydration) */}
      <style>{"html{overflow:hidden}"}</style>
      {/* If JavaScript is disabled, never block the page */}
      <noscript>
        <style>{".pl-root{display:none!important}html{overflow:auto!important}"}</style>
      </noscript>
      <div
        role="status"
        aria-live="polite"
        aria-label={`Loading ${BRAND_TEXT}`}
        className={`pl-root fixed inset-0 z-[100] overflow-hidden transition-opacity duration-700 ease-out will-change-[opacity] motion-reduce:duration-150 ${
          phase === "exit" ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <mask
              id="pl-text-mask"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="100%"
              height="100%"
            >
              <rect width="100%" height="100%" fill="white" />
              <BrandText fill="black" />
            </mask>
          </defs>
          {/* Solid background with the letters punched out → website shows through */}
          <rect width="100%" height="100%" fill={BG_COLOR} mask="url(#pl-text-mask)" />
          {/* Faint tint + hairline outline keep the letters readable on dark pages */}
          <BrandText
            fill="rgba(255,255,255,0.06)"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth={1.25}
          />
        </svg>

        {/* Bottom loading indicator */}
        <div className="absolute inset-x-0 bottom-12 flex flex-col items-center gap-3">
          <span
            ref={percentRef}
            className="font-mono text-xs tabular-nums tracking-[0.25em] text-white/60"
          >
            0%
          </span>
          <div
            ref={trackRef}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={0}
            className="h-px w-28 overflow-hidden bg-white/15"
          >
            <div
              ref={barRef}
              className="h-full w-full origin-left bg-white/70 will-change-transform"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
