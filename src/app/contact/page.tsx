import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/shared/JsonLd";
import ContactInteractiveView from "@/components/contact/ContactInteractiveView";

export const metadata: Metadata = constructMetadata({
  title: "Contact — SASVALE",
  description:
    "Start a conversation with SASVALE about your digital products, custom software systems, automation, or technical architecture.",
  pathname: "/contact",
});

export default function ContactPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Contact", item: "/contact" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <ContactInteractiveView />
    </>
  );
}
