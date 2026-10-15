import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: "Refund Policy",
  description: "Refund and milestone acceptance policy for Sasvale LLC.",
  pathname: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10 border-b border-slate-800 pb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Refund Policy
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Last updated: September 12, 2026
        </p>
      </header>

      <div className="prose prose-invert max-w-none text-slate-300 text-base leading-relaxed space-y-6">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Milestone-Based Engagements</h2>
          <p>
            {siteConfig.legalName} delivers professional services under milestone-based Statements of Work. Each milestone includes defined user acceptance testing (UAT) criteria.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Acceptance & Invoicing</h2>
          <p>
            Once a milestone is demonstrated and formally approved by the client, associated fees become non-refundable. Deposits paid for upcoming milestones may be credited or refunded if work has not yet commenced, as specified in your individual contract.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Dispute Resolution</h2>
          <p>
            If deliverables do not conform to agreed specifications, we provide a structured remediation window to resolve defects prior to final milestone acceptance.
          </p>
        </section>
      </div>
    </div>
  );
}
