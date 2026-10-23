import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "@/config/site";

interface ConstructMetadataProps {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  keywords?: string[];
}

const DEFAULT_KEYWORDS = [
  "custom software development",
  "enterprise web engineering",
  "AI automation studio",
  "scalable digital platforms",
  "technical SEO agency",
  "headless ecommerce development",
  "UI/UX product design",
  "workflow automation",
  "Next.js engineering",
  "brand architecture",
  "Sasvale",
];

export function constructMetadata({
  title,
  description = siteConfig.description,
  pathname = "/",
  image = "/og-image.png",
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  section,
  keywords = DEFAULT_KEYWORDS,
}: ConstructMetadataProps = {}): Metadata {
  const fullTitle = title
    ? (title.toLowerCase().includes(siteConfig.name.toLowerCase()) ? title : `${title} | ${siteConfig.name}`)
    : `${siteConfig.name} | ${siteConfig.tagline}`;
  const canonicalUrl = absoluteUrl(pathname);
  const imageUrl = absoluteUrl(image);

  return {
    title: fullTitle,
    description,
    keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    authors: authors ? authors.map((name) => ({ name })) : [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.legalName,
    category: "technology",
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/site.webmanifest",
    appleWebApp: {
      title: siteConfig.name,
      capable: true,
      statusBarStyle: "black-translucent",
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: type === "article" ? "article" : "website",
      ...(type === "article" && {
        publishedTime,
        modifiedTime: modifiedTime || publishedTime,
        authors: authors || [siteConfig.name],
        section: section || "Technology",
      }),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: "@sasvale",
      site: "@sasvale",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: false,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
      other: {
        ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
          ? { "msvalidate.01": [process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION] }
          : {}),
      },
    },
  };
}
