/**
 * Centralized Site Configuration
 *
 * Provides the authoritative canonical site URL and global brand metadata.
 * Strictly prevents Vercel preview URLs or ad-hoc domain strings from becoming
 * canonical or sitemap URLs.
 */

const getSiteUrl = (): string => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "");
  }

  // In production builds, default to confirmed production domain
  if (process.env.NODE_ENV === "production") {
    return "https://sasvale.com";
  }

  // Local development fallback
  return "http://localhost:3000";
};

export const siteConfig = {
  name: "Sasvale",
  legalName: "Sasvale LLC",
  tagline: "Engineering Scalable Digital Systems & High-Performance Experiences",
  description:
    "Sasvale is a modern digital agency specializing in custom software development, high-performance web engineering, technical SEO, and AI automation.",
  url: getSiteUrl(),
  links: {
    twitter: "https://twitter.com/sasvale",
    github: "https://github.com/sasvale",
    linkedin: "https://linkedin.com/company/sasvale",
  },
  contact: {
    email: "hello@sasvale.com",
  },
  nav: [
    { title: "Work", href: "/work" },
    { title: "Capabilities", href: "/capabilities" },
    { title: "Partnerships", href: "/partnerships" },
    { title: "Approach", href: "/approach" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/**
 * Helper to generate absolute canonical URLs from a pathname.
 * Ensures clean formatting and avoids preview host leakage.
 */
export function absoluteUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath === "/") {
    return siteConfig.url;
  }
  return `${siteConfig.url}${cleanPath}`;
}
