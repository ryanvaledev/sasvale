import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/shared/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Industry Solutions & Sector Expertise",
  description:
    "Tailored digital engineering, custom software, and search performance solutions tailored to specific industry verticals.",
  pathname: "/industries",
});

const industries = [
  { slug: "fintech", title: "FinTech & Financial Services", desc: "Secure, compliant web applications, transaction portals, and high-trust financial interfaces." },
  { slug: "healthcare", title: "Healthcare & Life Sciences", desc: "Accessible, patient-centric portals and HIPAA-conscious software architecture." },
  { slug: "logistics", title: "Logistics & Supply Chain", desc: "Operational dashboards, fleet tracking interfaces, and dispatch workflow automation." },
  { slug: "ecommerce", title: "E-Commerce & Retail", desc: "High-conversion commerce architectures, catalog optimization, and lightning-fast checkout." },
  { slug: "real-estate", title: "Real Estate & PropTech", desc: "Property showcase platforms, interactive map discovery, and high-intent lead routing." },
  { slug: "manufacturing", title: "Industrial & Manufacturing", desc: "B2B procurement catalogs, supply chain interfaces, and technical product configurators." },
  { slug: "energy", title: "Energy & Utilities", desc: "Infrastructure monitoring interfaces and authoritative regulatory content platforms." },
  { slug: "hospitality", title: "Hospitality & Travel", desc: "Direct booking engines, high-resolution visual storytelling, and guest reservation flows." },
  { slug: "agriculture", title: "Agriculture & AgTech", desc: "Operational farm management interfaces and agricultural supply chain portals." },
  { slug: "entertainment", title: "Media & Entertainment", desc: "High-engagement streaming platforms, media archives, and dynamic content discovery." },
  { slug: "oil-and-gas", title: "Oil & Gas", desc: "Safety compliance reporting systems and industrial resource management tooling." },
];

export default function IndustriesPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Industries", item: "/industries" },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <JsonLd data={breadcrumbs} />
      <header className="max-w-3xl mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Industry Solutions
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-400">
          We tailor software architecture, technical SEO, and user experience design to meet the distinct regulatory and operational requirements of key industries.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind) => (
          <article
            key={ind.slug}
            className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-white mb-2">{ind.title}</h2>
              <p className="text-sm text-slate-400 mb-6">{ind.desc}</p>
            </div>
            <Link
              href={`/industries/${ind.slug}`}
              className="text-sm font-medium text-blue-400 hover:text-blue-300 inline-flex items-center"
            >
              Explore Industry Solutions <span aria-hidden="true" className="ml-1">→</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
