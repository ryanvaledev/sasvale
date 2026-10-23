import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = constructMetadata({
  title: "Services & Capabilities",
  description:
    "Explore Sasvale's disciplines: Website & CMS Development, Custom Software, Branding & Identity, SEO & Digital Strategy, and AI Integration.",
  pathname: "/services",
});

/**
 * Flexible service data structure.
 * Note: These disciplines are provisional placeholders and subject to final positioning review.
 */
export interface ServiceDiscipline {
  id: string;
  title: string;
  slug: string;
  summary: string;
  capabilities: string[];
}

const serviceDisciplines: ServiceDiscipline[] = [
  {
    id: "01",
    title: "Website & CMS Development",
    slug: "web-development",
    summary:
      "Custom web applications, modern CMS implementations, and responsive digital platforms engineered for high performance, maintainability, and clean architecture.",
    capabilities: [
      "Custom Web Applications",
      "CMS Architecture & Headless Systems",
      "Performance & Core Web Vitals",
      "Responsive Digital Experiences",
    ],
  },
  {
    id: "02",
    title: "Custom Software & Management Systems",
    slug: "custom-software",
    summary:
      "Tailored internal tools, web applications, and backend systems designed to streamline operational workflows, eliminate manual friction, and support business scale.",
    capabilities: [
      "Internal Portals & Operational Tools",
      "Web Application Engineering",
      "Data Integration & API Architecture",
      "Scalable Cloud Backends",
    ],
  },
  {
    id: "03",
    title: "Branding & Identity",
    slug: "branding",
    summary:
      "Visual identity frameworks, design systems, and digital product design that give businesses a coherent, professional presentation across all touchpoints.",
    capabilities: [
      "Brand Identity & Visual Guidelines",
      "UI/UX Experience Design",
      "Design Systems & Token Architecture",
      "Digital Marketing Collateral",
    ],
  },
  {
    id: "04",
    title: "SEO & Digital Strategy",
    slug: "seo-marketing",
    summary:
      "Technical search engine optimization, structured data architecture, and organic discovery strategies that build long-term digital authority and qualified acquisition.",
    capabilities: [
      "Technical SEO & Crawl Architecture",
      "Structured Data & Schema Markup",
      "Organic Growth & Information Hierarchy",
      "Conversion Flow Optimization",
    ],
  },
  {
    id: "05",
    title: "AI Integration & Automation",
    slug: "ai-integration",
    summary:
      "Intelligent system workflows, API orchestration, and process automations designed to connect data silos, reduce manual overhead, and accelerate execution.",
    capabilities: [
      "Workflow & Systems Automation",
      "API Orchestration & Data Pipelines",
      "Contextual Model Integrations",
      "Operational Process Efficiency",
    ],
  },
];

export default function ServicesPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
  ]);

  return (
    <div className="w-full">
      <JsonLd data={breadcrumbs} />
      {/* Shared Page Hero Pattern */}
      <PageHero
        eyebrow="Disciplines & Capabilities"
        title="Engineering Disciplines Built for Scale."
        description="We build websites, custom software, and automated systems that solve operational bottlenecks, strengthen digital brand authority, and compound commercial outcomes."
        action={
          <Link href="/contact" className="btn-gold">
            Start a Conversation
          </Link>
        }
      />

      {/* Editorial Service Index Rows (Open Layout, Zero Card Boxes) */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {serviceDisciplines.map((discipline) => (
              <article
                key={discipline.slug}
                className="py-10 sm:py-14 lg:py-16 transition-colors duration-200 hover:bg-white/[0.01]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  {/* Col 1 (5 cols): Index & Title */}
                  <div className="lg:col-span-5 flex items-start gap-5 sm:gap-6">
                    <span className="text-[14px] sm:text-[16px] font-semibold tracking-[0.1em] text-sky-400 font-mono pt-1">
                      {discipline.id}
                    </span>
                    <div>
                      <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-medium tracking-[-0.03em] leading-[1.2] text-[#f5f3ed] font-display mb-4">
                        {discipline.title}
                      </h2>
                      <Link
                        href={`/services/${discipline.slug}`}
                        className="inline-flex items-center gap-2 text-[13px] font-medium text-sky-400 hover:text-sky-300 transition-colors group"
                      >
                        <span>Explore Discipline</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Col 2 (7 cols): Summary & Capabilities List */}
                  <div className="lg:col-span-7 flex flex-col items-start">
                    <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#96938a] font-normal font-body mb-6 max-w-2xl">
                      {discipline.summary}
                    </p>

                    {/* Compact Plain Text / Subtle Tag List */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {discipline.capabilities.map((cap, i) => (
                        <span
                          key={i}
                          className="inline-block px-3 py-1.5 rounded text-[12px] font-normal text-[#f5f3ed]/80 bg-white/[0.02] border border-white/10"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
