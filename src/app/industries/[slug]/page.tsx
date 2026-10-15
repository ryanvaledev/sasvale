import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/shared/JsonLd";

const industriesData: Record<string, { title: string; overview: string; solutions: string[] }> = {
  fintech: {
    title: "FinTech & Financial Services",
    overview: "Engineering mission-critical financial web systems, secure customer portals, and regulatory-compliant digital products.",
    solutions: ["PCI/SOC2-aligned web architecture", "Real-time market data integration", "Frictionless verification onboarding flows"],
  },
  healthcare: {
    title: "Healthcare & Life Sciences",
    overview: "Accessible, patient-centered digital health portals, appointment systems, and HIPAA-conscious web platforms.",
    solutions: ["Strict WCAG 2.2 AA accessibility adherence", "Telehealth scheduling integration", "Secure patient inquiry handling"],
  },
  logistics: {
    title: "Logistics & Supply Chain",
    overview: "Connecting complex supply networks with real-time operational tracking, automated intake, and custom fleet management dashboards.",
    solutions: ["Warehouse management portals", "Automated freight quote estimators", "Route dispatch web interfaces"],
  },
  ecommerce: {
    title: "E-Commerce & Digital Retail",
    overview: "Architecting high-converting headless digital storefronts, custom checkout experiences, and sub-second catalog navigation.",
    solutions: ["Zero-latency product search", "Cart conversion rate optimization", "Multi-currency commerce backends"],
  },
  "real-estate": {
    title: "Real Estate & Property Development",
    overview: "High-impact visual property portfolios, interactive floor plans, and automated buyer lead capture pipelines.",
    solutions: ["Interactive map listings", "High-intent buyer qualification forms", "Visual asset optimization for luxury listings"],
  },
  manufacturing: {
    title: "Industrial & Manufacturing",
    overview: "Streamlining B2B industrial sales with technical product configurators, digital spec sheets, and distributor portals.",
    solutions: ["Complex product matrix filters", "RFP and custom quotation builders", "Distributor locator applications"],
  },
  energy: {
    title: "Energy & Utilities",
    overview: "Clean, authoritative digital interfaces for energy providers, renewable operators, and regulatory compliance disclosures.",
    solutions: ["Interactive consumption calculators", "Investor & sustainability reporting hubs", "Field technician data portals"],
  },
  hospitality: {
    title: "Hospitality & Travel",
    overview: "Immersive digital booking portals, direct reservation engines, and visual storytelling that drives direct guest revenue.",
    solutions: ["Direct booking engine integration", "High-speed visual gallery streaming", "Multilingual localized content architecture"],
  },
  agriculture: {
    title: "Agriculture & AgTech",
    overview: "Modern web tools for agricultural enterprises, equipment distributors, and farm operations management.",
    solutions: ["Supply inventory trackers", "Equipment specification catalogs", "Regional distributor directory systems"],
  },
  entertainment: {
    title: "Media & Entertainment",
    overview: "High-traffic digital portals built for instant streaming, episodic content discovery, and passionate fan communities.",
    solutions: ["Dynamic video streaming embedding", "High-concurrency traffic handling", "Interactive media release timelines"],
  },
  "oil-and-gas": {
    title: "Oil & Gas Industry",
    overview: "Enterprise-grade digital reporting, safety compliance documentation systems, and institutional stakeholder portals.",
    solutions: ["Field safety audit forms", "Regulatory disclosure libraries", "Industrial supply procurement portals"],
  },
};

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData[slug];
  if (!industry) return {};

  return constructMetadata({
    title: `${industry.title} Solutions`,
    description: industry.overview,
    pathname: `/industries/${slug}`,
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Industries", item: "/industries" },
    { name: industry.title, item: `/industries/${slug}` },
  ]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <JsonLd data={breadcrumbs} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-white">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/industries" className="hover:text-white">Industries</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-slate-200">{industry.title}</li>
        </ol>
      </nav>

      <header className="mb-12 border-b border-slate-800 pb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          {industry.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
          {industry.overview}
        </p>
      </header>

      <section aria-labelledby="solutions-heading" className="mb-12">
        <h2 id="solutions-heading" className="text-2xl font-bold text-white mb-6">
          Tailored Engineering Solutions
        </h2>
        <ul className="space-y-3">
          {industry.solutions.map((sol) => (
            <li
              key={sol}
              className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-300 flex items-center"
            >
              <span className="text-blue-400 mr-3 font-bold" aria-hidden="true">✓</span>
              <span>{sol}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
        <Link
          href="/industries"
          className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
        >
          ← Back to All Industries
        </Link>
        <Link
          href="/contact"
          className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
        >
          Consult an Industry Specialist
        </Link>
      </div>
    </div>
  );
}
