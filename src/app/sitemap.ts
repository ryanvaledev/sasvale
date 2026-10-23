import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // 1. Core Primary Static Pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl(""),
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: absoluteUrl("/services"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/work"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/capabilities"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/approach"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/industries"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/insights"),
      lastModified,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/partnerships"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/privacy-policy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/terms-conditions"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/refund-policy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 2. Core Service Disciplines (5)
  const serviceSlugs = [
    "web-development",
    "custom-software",
    "branding",
    "seo-marketing",
    "ai-integration",
  ];
  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: absoluteUrl(`/services/${slug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // 3. Delivered Work & Client Case Studies (14)
  const workSlugs = [
    "ethletia",
    "wind-deflectors",
    "education-system",
    "crowdinvest",
    "bloom-beauty",
    "artior",
    "bomeco",
    "tbs-salon",
    "21st-century",
    "cottread",
    "zenfia",
    "rassani-pos",
    "roger-edwards-motors",
    "transworld",
  ];
  const workPages: MetadataRoute.Sitemap = workSlugs.map((slug) => ({
    url: absoluteUrl(`/work/${slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 4. Industry Sector Solutions (11)
  const industrySlugs = [
    "fintech",
    "healthcare",
    "logistics",
    "ecommerce",
    "real-estate",
    "manufacturing",
    "energy",
    "hospitality",
    "agriculture",
    "entertainment",
    "oil-and-gas",
  ];
  const industryPages: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: absoluteUrl(`/industries/${slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // 5. Strategic & Technical Insights (11)
  const insightSlugs = [
    "brand-strategy-scroll-addicted-world",
    "ai-product-marketing",
    "ai-powered-ux",
    "googles-logo-design-analysis",
    "netflix-ui-ux-design",
    "marketing-intelligence-ceo-weapon",
    "brand-experience-future",
    "digital-strategy-shift",
    "emotion-driven-ux",
    "luxury-brands-unforgettable-usps",
    "snapchat-addictive-ui-ux-design",
  ];
  const insightPages: MetadataRoute.Sitemap = insightSlugs.map((slug) => ({
    url: absoluteUrl(`/insights/${slug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [
    ...corePages,
    ...servicePages,
    ...workPages,
    ...industryPages,
    ...insightPages,
  ];
}
