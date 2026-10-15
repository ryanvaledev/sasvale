import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/shared/JsonLd";

const insightsData: Record<string, { title: string; excerpt: string; category: string; date: string; content: string }> = {
  "brand-strategy-scroll-addicted-world": {
    title: "Brand Strategy for a Scroll-Addicted World",
    excerpt: "Why modern brand strategy must emphasize distinctiveness, emotional resonance, and instant value delivery in seconds.",
    category: "Brand Strategy",
    date: "2025-01-15",
    content: "In an attention-scarce environment, traditional brand guidelines often fail to capture engagement. Modern digital brands must operate with dynamic design systems, immediate clarity of purpose, and cohesive cross-platform positioning.",
  },
  "ai-product-marketing": {
    title: "AI is Changing Product Marketing Forever: Are You Ready?",
    excerpt: "How generative systems, automated segmentation, and algorithmic customer journeys are reshaping modern marketing.",
    category: "AI & Growth",
    date: "2025-01-20",
    content: "Product marketing is shifting from static campaigns to adaptive, continuous optimization. Teams leveraging AI-driven data intelligence are discovering and acting on user intent with unprecedented velocity.",
  },
  "ai-powered-ux": {
    title: "AI-Powered UX with Personalization and the Future of Design",
    excerpt: "The intersection of algorithmic interfaces, user autonomy, and ethical personalization.",
    category: "UX & Product",
    date: "2025-01-28",
    content: "Modern user interfaces are transitioning from rigid templates to responsive surfaces that dynamically adapt to visitor context, intent, and historical behavior while preserving user trust.",
  },
  "googles-logo-design-analysis": {
    title: "An Analysis of Google's Logo Design Evolution",
    excerpt: "Deconstructing geometric simplification, primary color harmony, and visual accessibility in global brand design.",
    category: "Design Analysis",
    date: "2025-02-04",
    content: "Google's geometric sans-serif transformation set the benchmark for modern digital legibility. Analyzing the geometric precision and kerning reveals how subtle balance creates enduring brand recognition.",
  },
  "netflix-ui-ux-design": {
    title: "How Netflix's UI/UX Design Encourages Binge-Watching",
    excerpt: "An examination of reduced friction, autoplay mechanics, and predictive recommendation carousels.",
    category: "UX Analysis",
    date: "2025-02-11",
    content: "Netflix minimizes cognitive load by engineering seamless transitions between decision-making and content consumption. Every UI element is tuned to keep the user immersed.",
  },
  "marketing-intelligence-ceo-weapon": {
    title: "Marketing Intelligence is the CEO's Secret Weapon",
    excerpt: "Moving beyond superficial vanity metrics to measurable pipeline velocity and brand authority.",
    category: "Strategy",
    date: "2025-02-18",
    content: "True marketing intelligence connects top-of-funnel discovery directly with customer retention and lifetime value. Executive leadership requires deterministic insights rather than guesswork.",
  },
  "brand-experience-future": {
    title: "Stop Thinking a Logo is Enough: Brand Experience is the Future",
    excerpt: "A logo is merely an identifier; the complete end-to-end user experience is your true brand.",
    category: "Branding",
    date: "2025-02-25",
    content: "Every customer touchpoint—from page load performance to checkout friction and post-sale onboarding—constitutes brand experience. Visual polish cannot compensate for broken architecture.",
  },
  "digital-strategy-shift": {
    title: "The Digital Strategy Shift You're Not Paying Attention To",
    excerpt: "Why composable architectures and server-rendered applications are reclaiming the modern web.",
    category: "Strategy",
    date: "2025-03-04",
    content: "The era of monolithic, slow client-heavy websites is giving way to lightweight, server-rendered platforms prioritizing Core Web Vitals, accessibility, and direct conversion pathways.",
  },
  "emotion-driven-ux": {
    title: "The Rise of Emotion-Driven UX in Modern Product Design",
    excerpt: "Designing digital experiences that evoke delight, trust, and lasting loyalty.",
    category: "UX Design",
    date: "2025-03-11",
    content: "Functional usability is table stakes. The next generation of leading digital products connects with users through intentional motion, thoughtful copy, and empathetic interaction design.",
  },
  "luxury-brands-unforgettable-usps": {
    title: "A to Z Exploration of Luxury Brands and Their Unforgettable USPs",
    excerpt: "What high-end digital brands teach us about scarcity, craftsmanship, and positioning authority.",
    category: "Brand Strategy",
    date: "2025-03-18",
    content: "Luxury brands thrive on intentional restraint and unmistakable heritage. Digital platforms that adopt these principles build profound premium positioning and commanding pricing power.",
  },
  "snapchat-addictive-ui-ux-design": {
    title: "The Psychological Factors Behind Snapchat's Addictive UI/UX Design",
    excerpt: "Ephemeral content, streaks, and tactile gesture-based interfaces deconstructed.",
    category: "UX Psychology",
    date: "2025-03-25",
    content: "By tapping into psychological reciprocity and loss aversion through streaks and ephemeral messaging, Snapchat created one of the most habit-forming mobile experiences of the decade.",
  },
};

export async function generateStaticParams() {
  return Object.keys(insightsData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsData[slug];
  if (!article) return {};

  return constructMetadata({
    title: article.title,
    description: article.excerpt,
    pathname: `/insights/${slug}`,
  });
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = insightsData[slug];

  if (!article) {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.excerpt,
    url: `/insights/${slug}`,
    datePublished: article.date,
    authorName: "Sasvale Technical Team",
  });

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Insights", item: "/insights" },
    { name: article.title, item: `/insights/${slug}` },
  ]);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <JsonLd data={[articleSchema, breadcrumbs]} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-white">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/insights" className="hover:text-white">Insights</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-slate-200 truncate max-w-xs">{article.title}</li>
        </ol>
      </nav>

      <header className="mb-10 border-b border-slate-800 pb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          {article.category}
        </span>
        <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {article.title}
        </h1>
        <div className="mt-4 flex items-center space-x-4 text-sm text-slate-400">
          <time dateTime={article.date}>{article.date}</time>
          <span>•</span>
          <span>Sasvale Technical Team</span>
        </div>
      </header>

      <div className="prose prose-invert max-w-none text-slate-300 text-lg leading-relaxed space-y-6">
        <p className="text-xl font-medium text-slate-200 leading-relaxed">
          {article.excerpt}
        </p>
        <p>{article.content}</p>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between items-center">
        <Link
          href="/insights"
          className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
        >
          ← Back to All Insights
        </Link>
        <Link
          href="/contact"
          className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
        >
          Work With Us
        </Link>
      </div>
    </article>
  );
}
