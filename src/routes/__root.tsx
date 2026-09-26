import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import appCss from "../styles.css?url";
import { SiteLayout } from "@/components/site/layout";
import { brand, seo } from "@/data/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error / 404</p>
        <h1 className="mt-5 text-7xl font-bold">Page not found</h1>
        <p className="mt-5 text-muted-foreground">This address does not point to an active page.</p>
        <Link
          to="/"
          className="mt-8 inline-flex h-12 items-center rounded-md bg-signal px-6 font-semibold text-signal-foreground"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
function ErrorComponent({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold">This page didn&apos;t load</h1>
        <p className="mt-4 text-muted-foreground">Please try again or return home.</p>
        <div className="mt-7 flex justify-center gap-3">
          <button
            onClick={() => reset()}
            className="rounded-md bg-primary px-5 py-3 text-primary-foreground"
          >
            Try again
          </button>
          <Link to="/" className="rounded-md border border-border px-5 py-3">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0c1012" },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: seo.siteName },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:image", content: seo.image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.description },
      { name: "twitter:image", content: seo.image },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: brand.favicon },
      { rel: "apple-touch-icon", href: brand.favicon },
      { rel: "canonical", href: seo.url },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout>
        <Outlet />
      </SiteLayout>
    </QueryClientProvider>
  );
}
