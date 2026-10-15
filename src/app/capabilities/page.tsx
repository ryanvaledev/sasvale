import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/shared/JsonLd";
import CapabilitiesInteractiveView from "@/components/capabilities/CapabilitiesInteractiveView";

export const metadata: Metadata = constructMetadata({
  title: "Web Development, E-Commerce & Custom Software Services | SASVALE",
  description:
    "Explore SASVALE's web development, e-commerce, custom software, business systems, automation and UI/UX design services. Built around real business needs.",
  pathname: "/capabilities",
});

export default function CapabilitiesPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Capabilities", item: "/capabilities" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <CapabilitiesInteractiveView />
    </>
  );
}
