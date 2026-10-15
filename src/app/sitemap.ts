import type { MetadataRoute } from "next";
import { siteConfig, absoluteUrl } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Core canonical endpoints
  const routes = [
    "",
    "/services",
    "/services/web-development",
    "/services/custom-software",
    "/services/branding",
    "/services/seo-marketing",
    "/services/ai-integration",
    "/work",
    "/industries",
    "/insights",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-conditions",
    "/refund-policy",
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.8,
  }));
}
