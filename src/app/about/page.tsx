import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/shared/JsonLd";
import AboutInteractiveView from "@/components/about/AboutInteractiveView";

export const metadata: Metadata = constructMetadata({
  title: "About — Independent Digital Studio | SASVALE",
  description:
    "Sasvale is an independent digital studio combining strategy, design, engineering, and automation to build digital products that solve real business problems.",
  pathname: "/about",
});

export default function AboutPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "About", item: "/about" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <AboutInteractiveView />
    </>
  );
}
