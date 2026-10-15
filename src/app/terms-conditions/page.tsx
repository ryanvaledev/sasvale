import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: "Terms and Conditions",
  description: "Terms of service and engagement conditions for Sasvale LLC.",
  pathname: "/terms-conditions",
});

export default function TermsConditionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10 border-b border-slate-800 pb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Terms and Conditions
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Last updated: September 12, 2026
        </p>
      </header>

      <div className="prose prose-invert max-w-none text-slate-300 text-base leading-relaxed space-y-6">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Engagement Overview</h2>
          <p>
            By accessing this website or engaging {siteConfig.legalName} for digital design, custom software, or technical consulting services, you agree to comply with and be bound by the following terms and conditions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Intellectual Property</h2>
          <p>
            All custom code, deliverables, and designs produced under executed Statements of Work are transferred to the client upon full payment, subject to standard open-source licenses for utilized underlying frameworks and libraries.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Limitation of Liability</h2>
          <p>
            {siteConfig.legalName} shall not be held liable for indirect, incidental, or consequential damages resulting from third-party hosting failures, external API outages, or unapproved post-delivery modifications to delivered software.
          </p>
        </section>
      </div>
    </div>
  );
}
