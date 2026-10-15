import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "@/config/site";

interface ConstructMetadataProps {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  pathname = "/",
  image = "/og-image.png",
  noIndex = false,
}: ConstructMetadataProps = {}): Metadata {
  const fullTitle = title
    ? (title.toLowerCase().includes(siteConfig.name.toLowerCase()) ? title : `${title} | ${siteConfig.name}`)
    : `${siteConfig.name} | ${siteConfig.tagline}`;
  const canonicalUrl = absoluteUrl(pathname);

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
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
      title: "SASVAL",
      capable: true,
      statusBarStyle: "default",
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
      creator: "@sasvale",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
