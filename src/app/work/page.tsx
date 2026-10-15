import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/shared/JsonLd";
import WorkInteractiveView from "@/components/work/WorkInteractiveView";

export const metadata: Metadata = constructMetadata({
  title: "Work — SASVALE",
  description:
    "Delivered platforms & custom systems. A selection of websites, digital products, e-commerce platforms, and business systems built around real operational needs.",
  pathname: "/work",
});

export default function WorkPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Work", item: "/work" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <WorkInteractiveView />
    </>
  );
}
