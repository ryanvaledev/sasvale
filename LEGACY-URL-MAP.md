# Legacy URL Inventory & Redirect Map (`LEGACY-URL-MAP.md`)

**Date:** 2026-09-12  
**Source Codebase:** Static WordPress / Elementor HTML Export  
**Target Architecture:** Next.js 16 App Router  
**Protocol:** HTTP 308 Permanent Redirect via Next.js (`permanent: true`)  

---

## 1. Migration Policy & Rules

1. **Permanent Server-Side Redirects**: All legacy URLs emit **HTTP 308 Permanent Redirect** via Next.js native routing.
2. **Zero Redirect Chains**: Direct 1:1 resolution from Legacy URL → Modern Canonical Route. No intermediate hops (A → B → C).
3. **Zero Redirect Loops**: Target canonical routes must never redirect back to legacy endpoints.
4. **Targeted Intent Preservation**: Specific service and industry pages redirect to corresponding specific V2 hubs or detail routes; no mass-dumping of unrelated content to the homepage (`/`).
5. **Clean Canonical Separation**: The `_legacy-reference/` folder contains physical archival files and is never served publicly by the production runtime.

---

## 2. Root Page Inventory & Redirects

| Legacy Source URL | Target Canonical V2 URL | HTTP Status Code | Classification | Intent / Notes |
| :--- | :--- | :--- | :--- | :--- |
| `/index.html` | `/` | **308** | Root Canonical | Core homepage |
| `/about.html` | `/about` | **308** | Agency Profile | Founder & agency background |
| `/contact.html` | `/contact` | **308** | Lead Intake | Contact & inquiry flow |
| `/services.html` | `/services` | **308** | Service Hub | All offerings overview |
| `/work.html` | `/work` | **308** | Portfolio Hub | Client projects & case studies |
| `/web-development.html` | `/services/web-development` | **308** | Core Service | Web engineering |
| `/custom-software.html` | `/services/custom-software` | **308** | Core Service | Custom software & systems |
| `/branding.html` | `/services/branding` | **308** | Core Service | Brand identity & design |
| `/seo-marketing.html` | `/services/seo-marketing` | **308** | Core Service | Search & performance marketing |
| `/ai-integration.html` | `/services/ai-integration` | **308** | Core Service | AI workflows & automation |
| `/privacy-policy.html` | `/privacy-policy` | **308** | Legal Compliance | Privacy notice |
| `/terms-conditions.html` | `/terms-conditions` | **308** | Legal Compliance | Terms of service |
| `/refund-policy.html` | `/refund-policy` | **308** | Legal Compliance | Refund policy |

---

## 3. Sub-Pages Inventory & Redirects (`/pages/*`)

### General & Redundant Sub-Pages
| Legacy Source URL | Target Canonical V2 URL | HTTP Status Code | Classification |
| :--- | :--- | :--- | :--- |
| `/pages/about.html` | `/about` | **308** | Canonical Alignment |
| `/pages/contact.html` | `/contact` | **308** | Canonical Alignment |
| `/pages/services.html` | `/services` | **308** | Canonical Alignment |
| `/pages/projects.html` | `/work` | **308** | Portfolio Alignment |
| `/pages/privacy-policy.html` | `/privacy-policy` | **308** | Legal Alignment |
| `/pages/terms-conditions.html` | `/terms-conditions` | **308** | Legal Alignment |
| `/pages/refund-policy.html` | `/refund-policy` | **308** | Legal Alignment |

---

### Service Categories & Child Services
| Legacy Source URL | Target Canonical V2 URL | HTTP Status Code | Classification |
| :--- | :--- | :--- | :--- |
| `/pages/services-design-and-creative.html` | `/services/branding` | **308** | Category Consolidation |
| `/pages/services-design-and-creative-brand-identity-development.html` | `/services/branding` | **308** | Sub-service Consolidation |
| `/pages/services-design-and-creative-content-design.html` | `/services/branding` | **308** | Sub-service Consolidation |
| `/pages/services-design-and-creative-social-media-design.html` | `/services/branding` | **308** | Sub-service Consolidation |
| `/pages/services-design-and-creative-user-journey-experience-design.html` | `/services/branding` | **308** | Sub-service Consolidation |
| `/pages/services-design-and-creative-web-design.html` | `/services/web-development` | **308** | Cross-pillar Realignment |
| `/pages/services-website-and-cms.html` | `/services/web-development` | **308** | Category Consolidation |
| `/pages/services-website-and-cms-custom-web-development.html` | `/services/web-development` | **308** | Sub-service Consolidation |
| `/pages/services-website-and-cms-wordpress-development.html` | `/services/web-development` | **308** | Sub-service Consolidation |
| `/pages/services-website-and-cms-shopify-ecommerce-development.html` | `/services/web-development` | **308** | Sub-service Consolidation |
| `/pages/services-website-and-cms-webflow-development.html` | `/services/web-development` | **308** | Sub-service Consolidation |
| `/pages/services-website-and-cms-cms-development-migration.html` | `/services/web-development` | **308** | Sub-service Consolidation |
| `/pages/services-website-and-cms-conversion-rate-optimization.html` | `/services/web-development` | **308** | Sub-service Consolidation |
| `/pages/services-digital-marketing.html` | `/services/seo-marketing` | **308** | Category Consolidation |
| `/pages/services-digital-marketing-seo-and-content-marketing.html` | `/services/seo-marketing` | **308** | Sub-service Consolidation |
| `/pages/services-digital-marketing-local-seo-google-business.html` | `/services/seo-marketing` | **308** | Sub-service Consolidation |
| `/pages/services-digital-marketing-ppc-and-paid-advertising.html` | `/services/seo-marketing` | **308** | Sub-service Consolidation |
| `/pages/services-digital-marketing-social-media-marketing.html` | `/services/seo-marketing` | **308** | Sub-service Consolidation |
| `/pages/services-digital-marketing-online-reputation-management.html` | `/services/seo-marketing` | **308** | Sub-service Consolidation |
| `/pages/services-digital-marketing-email-and-automation-marketing.html` | `/services/ai-integration` | **308** | Automation Alignment |
| `/pages/services-digital-marketing-ai-search-optimization.html` | `/services/ai-integration` | **308** | Automation Alignment |

---

### Project & Portfolio Case Studies
| Legacy Source URL | Target Canonical V2 URL | HTTP Status Code | Classification |
| :--- | :--- | :--- | :--- |
| `/pages/projects-21st-century.html` | `/work/21st-century` | **308** | Portfolio Case Study |
| `/pages/projects-artior.html` | `/work/artior` | **308** | Portfolio Case Study |
| `/pages/projects-bake-me-happi.html` | `/work/bake-me-happi` | **308** | Portfolio Case Study |
| `/pages/projects-bloom-beauty.html` | `/work/bloom-beauty` | **308** | Portfolio Case Study |
| `/pages/projects-bomeco.html` | `/work/bomeco` | **308** | Portfolio Case Study |
| `/pages/projects-cottread.html` | `/work/cottread` | **308** | Portfolio Case Study |
| `/pages/projects-magoos.html` | `/work/magoos` | **308** | Portfolio Case Study |

---

### Industry Verticals & Niches
| Legacy Source URL | Target Canonical V2 URL | HTTP Status Code | Classification |
| :--- | :--- | :--- | :--- |
| `/pages/industries.html` | `/industries` | **308** | Industry Hub |
| `/pages/industries-agriculture.html` | `/industries/agriculture` | **308** | Vertical Landing Page |
| `/pages/industries-agriculture-agriculture-advertising-agency.html` | `/industries/agriculture` | **308** | Thin Page Consolidation |
| `/pages/industries-agriculture-agriculture-organic-growth.html` | `/industries/agriculture` | **308** | Thin Page Consolidation |
| `/pages/industries-agriculture-farm-website-design.html` | `/industries/agriculture` | **308** | Thin Page Consolidation |
| `/pages/industries-ecommerce.html` | `/industries/ecommerce` | **308** | Vertical Landing Page |
| `/pages/industries-ecommerce-ecommerce-advertising-agency.html` | `/industries/ecommerce` | **308** | Thin Page Consolidation |
| `/pages/industries-ecommerce-ecommerce-seo-services.html` | `/industries/ecommerce` | **308** | Thin Page Consolidation |
| `/pages/industries-ecommerce-ecommerce-website-design.html` | `/industries/ecommerce` | **308** | Thin Page Consolidation |
| `/pages/industries-energy.html` | `/industries/energy` | **308** | Vertical Landing Page |
| `/pages/industries-energy-energy-advertising-lead-generation.html` | `/industries/energy` | **308** | Thin Page Consolidation |
| `/pages/industries-energy-energy-seo-content-authority.html` | `/industries/energy` | **308** | Thin Page Consolidation |
| `/pages/industries-energy-energy-website-design.html` | `/industries/energy` | **308** | Thin Page Consolidation |
| `/pages/industries-entertainment.html` | `/industries/entertainment` | **308** | Vertical Landing Page |
| `/pages/industries-entertainment-entertainment-advertising-agency.html` | `/industries/entertainment` | **308** | Thin Page Consolidation |
| `/pages/industries-entertainment-entertainment-seo-discovery.html` | `/industries/entertainment` | **308** | Thin Page Consolidation |
| `/pages/industries-entertainment-entertainment-website-design.html` | `/industries/entertainment` | **308** | Thin Page Consolidation |
| `/pages/industries-fintech.html` | `/industries/fintech` | **308** | Vertical Landing Page |
| `/pages/industries-fintech-fintech-ppc-agency.html` | `/industries/fintech` | **308** | Thin Page Consolidation |
| `/pages/industries-fintech-fintech-seo-agency.html` | `/industries/fintech` | **308** | Thin Page Consolidation |
| `/pages/industries-fintech-fintech-website-design.html` | `/industries/fintech` | **308** | Thin Page Consolidation |
| `/pages/industries-healthcare.html` | `/industries/healthcare` | **308** | Vertical Landing Page |
| `/pages/industries-healthcare-healthcare-ppc-advertising.html` | `/industries/healthcare` | **308** | Thin Page Consolidation |
| `/pages/industries-healthcare-healthcare-seo-services.html` | `/industries/healthcare` | **308** | Thin Page Consolidation |
| `/pages/industries-healthcare-healthcare-website-design.html` | `/industries/healthcare` | **308** | Thin Page Consolidation |
| `/pages/industries-hospitality.html` | `/industries/hospitality` | **308** | Vertical Landing Page |
| `/pages/industries-hospitality-hotel-advertising-agency.html` | `/industries/hospitality` | **308** | Thin Page Consolidation |
| `/pages/industries-hospitality-hotel-seo-services.html` | `/industries/hospitality` | **308** | Thin Page Consolidation |
| `/pages/industries-hospitality-hotel-website-design.html` | `/industries/hospitality` | **308** | Thin Page Consolidation |
| `/pages/industries-logistics.html` | `/industries/logistics` | **308** | Vertical Landing Page |
| `/pages/industries-logistics-logistics-advertising-agency.html` | `/industries/logistics` | **308** | Thin Page Consolidation |
| `/pages/industries-logistics-logistics-seo-services.html` | `/industries/logistics` | **308** | Thin Page Consolidation |
| `/pages/industries-logistics-logistics-website-design.html` | `/industries/logistics` | **308** | Thin Page Consolidation |
| `/pages/industries-manufacturing.html` | `/industries/manufacturing` | **308** | Vertical Landing Page |
| `/pages/industries-manufacturing-manufacturing-ppc-agency.html` | `/industries/manufacturing` | **308** | Thin Page Consolidation |
| `/pages/industries-manufacturing-manufacturing-seo-services.html` | `/industries/manufacturing` | **308** | Thin Page Consolidation |
| `/pages/industries-manufacturing-manufacturing-website-design.html` | `/industries/manufacturing` | **308** | Thin Page Consolidation |
| `/pages/industries-oil-and-gas.html` | `/industries/oil-and-gas` | **308** | Vertical Landing Page |
| `/pages/industries-oil-and-gas-oil-and-gas-advertising-agency.html` | `/industries/oil-and-gas` | **308** | Thin Page Consolidation |
| `/pages/industries-oil-and-gas-oil-and-gas-seo-agency.html` | `/industries/oil-and-gas` | **308** | Thin Page Consolidation |
| `/pages/industries-oil-and-gas-oil-and-gas-website-design.html` | `/industries/oil-and-gas` | **308** | Thin Page Consolidation |
| `/pages/industries-real-estate.html` | `/industries/real-estate` | **308** | Vertical Landing Page |
| `/pages/industries-real-estate-real-estate-ppc-agency.html` | `/industries/real-estate` | **308** | Thin Page Consolidation |
| `/pages/industries-real-estate-real-estate-seo-services.html` | `/industries/real-estate` | **308** | Thin Page Consolidation |
| `/pages/industries-real-estate-real-estate-website-design.html` | `/industries/real-estate` | **308** | Thin Page Consolidation |

---

### Editorial, Blog & News
| Legacy Source URL | Target Canonical V2 URL | HTTP Status Code | Classification |
| :--- | :--- | :--- | :--- |
| `/pages/blog.html` | `/insights` | **308** | Editorial Hub |
| `/pages/blog-indexab57.html` | `/insights` | **308** | Paginated Archive Consolidation |
| `/pages/blog-page-2.html` | `/insights` | **308** | Paginated Archive Consolidation |
| `/pages/blog-category-branding-and-digital-strategy.html` | `/insights` | **308** | Taxonomy Consolidation |
| `/pages/blog-category-market-insights.html` | `/insights` | **308** | Taxonomy Consolidation |
| `/pages/blog-category-ux-and-product-design.html` | `/insights` | **308** | Taxonomy Consolidation |
| `/pages/author-faizan-sadain.html` | `/about` | **308** | Legacy Author Consolidation |
| `/pages/author-zain-ali.html` | `/about` | **308** | Legacy Author Consolidation |
| `/pages/news.html` | `/insights` | **308** | News Hub Consolidation |
| `/pages/news-fleekbiz-reinvents-the-digital-experience-for-modern-brands.html` | `/insights` | **308** | Legacy Press Release |
| `/pages/blog-a-to-z-exploration-of-luxury-brands-and-their-unforgettable-usps.html` | `/insights/luxury-brands-unforgettable-usps` | **308** | Article Canonicalization |
| `/pages/blog-ai-is-changing-product-marketing-forever-are-you-ready.html` | `/insights/ai-product-marketing` | **308** | Article Canonicalization |
| `/pages/blog-ai-powered-ux-with-personalization-and-the-future-of-design.html` | `/insights/ai-powered-ux` | **308** | Article Canonicalization |
| `/pages/blog-an-analysis-of-googles-logo-design.html` | `/insights/googles-logo-design-analysis` | **308** | Article Canonicalization |
| `/pages/blog-brand-strategy-for-a-scroll-addicted-world-whats-working-in-2025.html` | `/insights/brand-strategy-scroll-addicted-world` | **308** | Article Canonicalization |
| `/pages/blog-brand-strategy-for-a-scroll-addicted-world-whats-working.html` | `/insights/brand-strategy-scroll-addicted-world` | **308** | Duplicate Consolidation |
| `/pages/blog-how-netflixs-ui-ux-design-encourages-binge-watching.html` | `/insights/netflix-ui-ux-design` | **308** | Article Canonicalization |
| `/pages/blog-marketing-intelligence-is-the-2025-ceos-secret-weapon.html` | `/insights/marketing-intelligence-ceo-weapon` | **308** | Article Canonicalization |
| `/pages/blog-stop-thinking-a-logo-is-enough-because-brand-experience-is-the-future.html` | `/insights/brand-experience-future` | **308** | Article Canonicalization |
| `/pages/blog-the-digital-strategy-shift-youre-not-paying-attention-to.html` | `/insights/digital-strategy-shift` | **308** | Article Canonicalization |
| `/pages/blog-the-rise-of-emotion-driven-ux-in-2025.html` | `/insights/emotion-driven-ux` | **308** | Article Canonicalization |
| `/pages/blog-why-ceos-in-2025-will-only-trust-data-driven-growth-moves-no-gut-instinct.html` | `/insights/data-driven-growth-moves` | **308** | Article Canonicalization |
| `/pages/blog-why-data-backed-strategy-will-win-in-2025.html` | `/insights/data-backed-strategy` | **308** | Article Canonicalization |
| `/pages/blog-why-data-driven-marketing-will-crush-guesswork-in-2025.html` | `/insights/data-driven-marketing` | **308** | Article Canonicalization |
| `/pages/blog-why-one-size-fits-all-marketing-is-dead-and-precision-strategy-is-the-future-in-2025.html` | `/insights/precision-strategy-future` | **308** | Article Canonicalization |
| `/pages/blog-why-winning-startups-bet-big-on-ux-and-product-design.html` | `/insights/startups-bet-on-ux-design` | **308** | Article Canonicalization |
| `/pages/blog-your-brand-is-not-boring-so-why-settle-for-boring-branding.html` | `/insights/why-settle-for-boring-branding` | **308** | Article Canonicalization |
| `/pages/blog-your-next-breakthrough-wont-be-human-led-the-tech-thats-reshaping-everything.html` | `/insights/tech-reshaping-everything` | **308** | Article Canonicalization |
| `/pages/the-psychological-factors-behind-snapchats-addictive-ui-ux-design-strategy.html` | `/insights/snapchat-addictive-ui-ux-design` | **308** | Article Canonicalization |

---

## 4. Implementation in Next.js

These redirects are registered in `next.config.ts` via the `redirects()` method with `permanent: true`, producing standard HTTP 308 responses with strict destination headers.
