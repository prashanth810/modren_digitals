import { createFileRoute } from "@tanstack/react-router";
import { Pricing } from "@/components/site/pricing";
import { CTASection } from "@/components/site/primitives";
import { seo } from "@/data/site";

export const Route = createFileRoute("/Pricing")({
  head: () => ({
    meta: [
      { title: `Pricing | ${seo.siteName}` },
      {
        name: "description",
        content:
          "Simple, transparent website pricing. Choose Basic, Medium or Best, plus answers to common questions about payments, taxes and project delivery.",
      },
      { property: "og:title", content: `Pricing | ${seo.siteName}` },
      {
        property: "og:description",
        content: "Transparent website packages for every stage of your business.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: seo.image },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <Pricing />
      <CTASection />
    </>
  );
}
