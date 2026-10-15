import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/shared/JsonLd";
import ApproachInteractiveView from "@/components/approach/ApproachInteractiveView";

export const metadata: Metadata = constructMetadata({
  title: "Our Approach | Strategy, Design & Engineering | SASVALE",
  description:
    "Explore how SASVALE plans, designs, builds and improves digital products, software platforms and business systems through a collaborative development process.",
  pathname: "/approach",
});

export default function ApproachPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Approach", item: "/approach" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <ApproachInteractiveView />
    </>
  );
}
