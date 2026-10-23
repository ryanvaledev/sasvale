import { siteConfig, absoluteUrl } from "@/config/site";

interface FeedArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

const articles: FeedArticle[] = [
  {
    slug: "brand-strategy-scroll-addicted-world",
    title: "Brand Strategy for a Scroll-Addicted World",
    excerpt: "Why modern brand strategy must emphasize distinctiveness, emotional resonance, and instant value delivery in seconds.",
    category: "Brand Strategy",
    date: "2025-01-15T00:00:00Z",
  },
  {
    slug: "ai-product-marketing",
    title: "AI is Changing Product Marketing Forever: Are You Ready?",
    excerpt: "How generative systems, automated segmentation, and algorithmic customer journeys are reshaping modern marketing.",
    category: "AI & Growth",
    date: "2025-01-20T00:00:00Z",
  },
  {
    slug: "ai-powered-ux",
    title: "AI-Powered UX with Personalization and the Future of Design",
    excerpt: "The intersection of algorithmic interfaces, user autonomy, and ethical personalization.",
    category: "UX & Product",
    date: "2025-01-28T00:00:00Z",
  },
  {
    slug: "googles-logo-design-analysis",
    title: "An Analysis of Google's Logo Design Evolution",
    excerpt: "Deconstructing geometric simplification, primary color harmony, and visual accessibility in global brand design.",
    category: "Design Analysis",
    date: "2025-02-04T00:00:00Z",
  },
  {
    slug: "netflix-ui-ux-design",
    title: "How Netflix's UI/UX Design Encourages Binge-Watching",
    excerpt: "An examination of reduced friction, autoplay mechanics, and predictive recommendation carousels.",
    category: "UX Analysis",
    date: "2025-02-11T00:00:00Z",
  },
  {
    slug: "marketing-intelligence-ceo-weapon",
    title: "Marketing Intelligence is the CEO's Secret Weapon",
    excerpt: "Moving beyond superficial vanity metrics to measurable pipeline velocity and brand authority.",
    category: "Strategy",
    date: "2025-02-18T00:00:00Z",
  },
  {
    slug: "brand-experience-future",
    title: "Stop Thinking a Logo is Enough: Brand Experience is the Future",
    excerpt: "A logo is merely an identifier; the complete end-to-end user experience is your true brand.",
    category: "Branding",
    date: "2025-02-25T00:00:00Z",
  },
  {
    slug: "digital-strategy-shift",
    title: "The Digital Strategy Shift You're Not Paying Attention To",
    excerpt: "Why composable architectures and server-rendered applications are reclaiming the modern web.",
    category: "Strategy",
    date: "2025-03-04T00:00:00Z",
  },
  {
    slug: "emotion-driven-ux",
    title: "The Rise of Emotion-Driven UX in Modern Product Design",
    excerpt: "Designing digital experiences that evoke delight, trust, and lasting loyalty.",
    category: "UX Design",
    date: "2025-03-11T00:00:00Z",
  },
  {
    slug: "luxury-brands-unforgettable-usps",
    title: "A to Z Exploration of Luxury Brands and Their Unforgettable USPs",
    excerpt: "What high-end digital brands teach us about scarcity, craftsmanship, and positioning authority.",
    category: "Brand Strategy",
    date: "2025-03-18T00:00:00Z",
  },
  {
    slug: "snapchat-addictive-ui-ux-design",
    title: "The Psychological Factors Behind Snapchat's Addictive UI/UX Design",
    excerpt: "Ephemeral content, streaks, and tactile gesture-based interfaces deconstructed.",
    category: "UX Psychology",
    date: "2025-03-25T00:00:00Z",
  },
];

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const feedUrl = absoluteUrl("/feed.xml");
  const siteUrl = siteConfig.url;
  const buildDate = new Date().toUTCString();

  const itemsXml = articles
    .map((article) => {
      const articleUrl = absoluteUrl(`/insights/${article.slug}`);
      const pubDate = new Date(article.date).toUTCString();

      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <description>${escapeXml(article.excerpt)}</description>
      <category>${escapeXml(article.category)}</category>
      <pubDate>${pubDate}</pubDate>
      <dc:creator xmlns:dc="http://purl.org/dc/elements/1.1/">${escapeXml(siteConfig.name)}</dc:creator>
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(siteConfig.name)} — Strategic &amp; Technical Insights</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en-US</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <image>
      <url>${absoluteUrl("/logo.svg")}</url>
      <title>${escapeXml(siteConfig.name)}</title>
      <link>${siteUrl}</link>
    </image>
${itemsXml}
  </channel>
</rss>`;

  return new Response(rss, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=14400, stale-while-revalidate=86400",
    },
  });
}
