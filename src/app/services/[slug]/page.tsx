import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/shared/JsonLd";

const servicesData: Record<string, { title: string; tagline: string; description: string; serviceType: string; capabilities: string[] }> = {
  "web-development": {
    title: "Web Development & Digital Engineering",
    tagline: "High-performance, accessible web architectures engineered for speed and indexability.",
    description: "Sasvale designs and engineers custom web applications using modern server-rendered frameworks, strictly structured design systems, and resilient cloud backends.",
    serviceType: "Web Development",
    capabilities: [
      "Modern React / Next.js Server Components architecture",
      "Core Web Vitals optimization (sub-second LCP & zero CLS)",
      "Accessible, responsive user interface systems (WCAG 2.2 AA)",
      "Headless CMS and structured data integration",
    ],
  },
  "custom-software": {
    title: "Custom Software Engineering",
    tagline: "Bespoke digital software systems, robust internal platforms, and cloud backends.",
    description: "Tailored software engineering addressing unique operational challenges with scalable architectures, strict type safety, and clean maintainability.",
    serviceType: "Software Engineering",
    capabilities: [
      "Full-stack web application development",
      "API design, route handlers, and microservice integration",
      "Database design and structured data modeling",
      "Scalable cloud deployment architectures",
    ],
  },
  "branding": {
    title: "Brand Strategy & Visual Systems",
    tagline: "Distinctive positioning and coherent design languages for digital-first companies.",
    description: "Comprehensive corporate identity, digital-first design tokens, and memorable visual assets that stand out in crowded markets.",
    serviceType: "Brand Identity",
    capabilities: [
      "Brand identity development and positioning frameworks",
      "Design systems and CSS custom property token scales",
      "Digital experience design and user journey mapping",
      "Marketing and creative asset guidelines",
    ],
  },
  "seo-marketing": {
    title: "Technical SEO & Search Optimization",
    tagline: "Deterministic search equity preservation, crawlability audits, and authoritative ranking.",
    description: "Rigorous technical SEO that ensures crawl bots and users receive pristine, server-rendered content with zero redirect friction.",
    serviceType: "Search Engine Optimization",
    capabilities: [
      "Deterministic technical SEO audits and code health fixes",
      "Zero-chain HTTP 308 permanent redirect migration architecture",
      "Programmatic Schema.org structured data graph implementation",
      "Organic authority building and search intent mapping",
    ],
  },
  "ai-integration": {
    title: "AI Systems Integration & Automation",
    tagline: "Intelligent agent workflows, LLM orchestration, and process automation.",
    description: "Connecting operational workflows with reliable AI tooling, automated routing, and custom conversational interfaces.",
    serviceType: "Artificial Intelligence Integration",
    capabilities: [
      "AI workflow orchestration and task automation",
      "Retrieval-Augmented Generation (RAG) and document intelligence",
      "Custom LLM API scaffolding and security controls",
      "Internal productivity agent design",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};

  return constructMetadata({
    title: service.title,
    description: service.description,
    pathname: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.description,
    url: `/services/${slug}`,
    serviceType: service.serviceType,
  });

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: service.title, item: `/services/${slug}` },
  ]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <JsonLd data={[serviceSchema, breadcrumbs]} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--color-text-muted)]">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          <li aria-hidden="true" className="text-[var(--color-border)]">/</li>
          <li>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          </li>
          <li aria-hidden="true" className="text-[var(--color-border)]">/</li>
          <li aria-current="page" className="text-[var(--color-text)]">{service.serviceType}</li>
        </ol>
      </nav>

      <header className="mb-12 border-b border-[var(--color-border)] pb-8">
        <h1 className="second-head text-white tracking-tight">
          {service.title}
        </h1>
        <p className="mt-4 text-xl text-[var(--color-primary)] font-medium">
          {service.tagline}
        </p>
        <p className="mt-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
          {service.description}
        </p>
      </header>

      <section aria-labelledby="capabilities-heading" className="mb-12">
        <h2 id="capabilities-heading" className="third-head text-white mb-6">
          Core Capabilities &amp; Approach
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.capabilities.map((capability) => (
            <li
              key={capability}
              className="p-5 card-glass text-sm text-[var(--color-text)] flex items-start"
            >
              <span className="text-[var(--color-primary)] mr-3 font-bold text-base" aria-hidden="true">✓</span>
              <span>{capability}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="p-8 card-glass flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="fourth-head text-white">Ready to discuss your project?</h3>
          <p className="text-sm text-[var(--color-text-muted)] mt-1">Schedule a conversation with our engineering team.</p>
        </div>
        <Link
          href="/contact"
          className="main-light-button inline-flex items-center justify-center whitespace-nowrap"
        >
          <span>Start Inquiry</span>
        </Link>
      </div>
    </div>
  );
}
