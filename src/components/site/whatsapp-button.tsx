import { brand } from "@/data/site";

/* Phone number from your site data → digits only (e.g. 918106124493) */
const WHATSAPP_NUMBER = brand.phone.replace(/\D/g, "");

/** Builds a WhatsApp link with a pre-filled message. */
export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** WhatsApp logo (lucide has no brand icons) */
export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.59 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.69 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.41-8.43ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77.99 1-3.67-.24-.38a9.88 9.88 0 0 1-1.52-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.89-9.89 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

/** Floating WhatsApp button – bottom-right corner on every page */
export function WhatsAppButton() {
  const href = buildWhatsAppLink(
    `Hi ${brand.name}! 👋 Can I know more info about your services and pricing?`,
  );
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
      <span className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,.45)] transition-transform duration-300 group-hover:scale-110">
        <span
          aria-hidden
          className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30"
        />
        <WhatsAppIcon className="relative size-7" />
      </span>
    </a>
  );
}
