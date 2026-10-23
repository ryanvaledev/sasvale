import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/shared/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Insights, Strategy & Technical Analysis",
  description:
    "Engineering perspectives, digital strategy, brand positioning, and UX analysis from the Sasvale technical team.",
  pathname: "/insights",
});

const articles = [
  { slug: "brand-strategy-scroll-addicted-world", title: "Brand Strategy for a Scroll-Addicted World", category: "Brand Strategy", date: "2025-01-15" },
  { slug: "ai-product-marketing", title: "AI is Changing Product Marketing Forever: Are You Ready?", category: "AI & Growth", date: "2025-01-20" },
  { slug: "ai-powered-ux", title: "AI-Powered UX with Personalization and the Future of Design", category: "UX & Product", date: "2025-01-28" },
  { slug: "googles-logo-design-analysis", title: "An Analysis of Google's Logo Design Evolution", category: "Design Analysis", date: "2025-02-04" },
  { slug: "netflix-ui-ux-design", title: "How Netflix's UI/UX Design Encourages Binge-Watching", category: "UX Analysis", date: "2025-02-11" },
  { slug: "marketing-intelligence-ceo-weapon", title: "Marketing Intelligence is the CEO's Secret Weapon", category: "Strategy", date: "2025-02-18" },
  { slug: "brand-experience-future", title: "Stop Thinking a Logo is Enough: Brand Experience is the Future", category: "Branding", date: "2025-02-25" },
  { slug: "digital-strategy-shift", title: "The Digital Strategy Shift You're Not Paying Attention To", category: "Strategy", date: "2025-03-04" },
  { slug: "emotion-driven-ux", title: "The Rise of Emotion-Driven UX in Modern Product Design", category: "UX Design", date: "2025-03-11" },
  { slug: "luxury-brands-unforgettable-usps", title: "A to Z Exploration of Luxury Brands and Their Unforgettable USPs", category: "Brand Strategy", date: "2025-03-18" },
  { slug: "snapchat-addictive-ui-ux-design", title: "The Psychological Factors Behind Snapchat's Addictive UI/UX Design", category: "UX Psychology", date: "2025-03-25" },
];

export default function InsightsPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Insights", item: "/insights" },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <JsonLd data={breadcrumbs} />
      <header className="max-w-3xl mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Insights & Strategic Analysis
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-400">
          In-depth technical guides, brand strategy frameworks, and user experience analyses curated by our team.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((art) => (
          <article
            key={art.slug}
            className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                {art.category}
              </span>
              <h2 className="text-xl font-bold text-white mt-2 mb-3 leading-snug">{art.title}</h2>
              <time dateTime={art.date} className="text-xs text-slate-500 mb-6 block">
                {art.date}
              </time>
            </div>
            <Link
              href={`/insights/${art.slug}`}
              className="text-sm font-medium text-blue-400 hover:text-blue-300 inline-flex items-center"
            >
              Read Article <span aria-hidden="true" className="ml-1">→</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
