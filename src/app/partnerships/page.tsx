import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/shared/JsonLd";
import PartnershipsInteractiveView from "@/components/partnerships/PartnershipsInteractiveView";

export const metadata: Metadata = constructMetadata({
  title: "Technology Partnerships & Development Services | SASVALE",
  description:
    "Partner with SASVALE for websites, custom software, digital product development, dedicated engineering and ongoing technology improvements.",
  pathname: "/partnerships",
});

export default function PartnershipsPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Partnerships", item: "/partnerships" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PartnershipsInteractiveView />
    </>
  );
}
