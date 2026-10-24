import { siteConfig, absoluteUrl } from "@/config/site";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo.svg"),
      width: 180,
      height: 60,
    },
    image: absoluteUrl("/og-image.png"),
    description: siteConfig.description,
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contact.email,
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Worldwide",
    },
    knowsAbout: [
      "Custom Software Development",
      "Enterprise Web Engineering",
      "AI Workflow Automation",
      "Technical SEO & Growth Strategy",
      "Headless E-Commerce Architecture",
      "Brand Identity & Digital Design",
      "White-Label Software Development",
      "Dedicated Engineering & Staff Augmentation",
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function generateProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service-business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl("/logo.svg"),
    image: absoluteUrl("/og-image.png"),
    description: siteConfig.description,
    telephone: "+1-800-SASVALE",
    email: siteConfig.contact.email,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Engineering & Consulting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software & Management Systems",
            url: absoluteUrl("/services/custom-software"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website & CMS Development",
            url: absoluteUrl("/services/web-development"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Integration & Workflow Automation",
            url: absoluteUrl("/services/ai-integration"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO, Search Positioning & Strategy",
            url: absoluteUrl("/services/seo-marketing"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brand Architecture & Identity Design",
            url: absoluteUrl("/services/branding"),
          },
        },
      ],
    },
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  category?: string;
}

export function generateServiceSchema(service: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(service.url)}#service`,
    name: service.name,
    description: service.description,
    url: absoluteUrl(service.url),
    serviceType: service.serviceType,
    category: service.category || "Information Technology",
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    termsOfService: absoluteUrl("/terms-conditions"),
  };
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: absoluteUrl(breadcrumb.item),
    })),
  };
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
  category?: string;
}

export function generateArticleSchema(article: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(article.url),
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    articleSection: article.category || "Technology",
    author: {
      "@type": "Person",
      name: article.authorName || siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    image: article.image ? absoluteUrl(article.image) : absoluteUrl("/og-image.png"),
  };
}

export interface CreativeWorkSchemaInput {
  title: string;
  description: string;
  url: string;
  client: string;
  category: string;
  image?: string;
}

export function generateCreativeWorkSchema(work: CreativeWorkSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(work.url)}#project`,
    name: work.title,
    headline: work.title,
    description: work.description,
    url: absoluteUrl(work.url),
    genre: work.category,
    about: {
      "@type": "Organization",
      name: work.client,
    },
    creator: {
      "@id": `${siteConfig.url}/#organization`,
    },
    image: work.image ? absoluteUrl(work.image) : absoluteUrl("/og-image.png"),
  };
}
