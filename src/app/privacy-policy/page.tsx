import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/shared/JsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy",
  description: "Privacy policy and data protection disclosures for Sasvale LLC.",
  pathname: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Privacy Policy", item: "/privacy-policy" },
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <JsonLd data={breadcrumbs} />
      <header className="mb-10 border-b border-slate-800 pb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Last updated: September 12, 2026
        </p>
      </header>

      <div className="prose prose-invert max-w-none text-slate-300 text-base leading-relaxed space-y-6">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
          <p>
            {siteConfig.legalName} collects information you provide directly through our contact form, including your name, email address, company details, and inquiry specifics. We do not sell, rent, or trade your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Use of Information</h2>
          <p>
            Information collected is utilized exclusively to respond to client inquiries, provide requested software engineering services, evaluate project requirements, and maintain ongoing professional communication.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Data Security & Storage</h2>
          <p>
            We implement industry-standard administrative and technical security measures to protect your personal data against unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Contact & Inquiries</h2>
          <p>
            For questions regarding this privacy policy or your personal data, contact us directly at:{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-blue-400 hover:text-blue-300">
              {siteConfig.contact.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
