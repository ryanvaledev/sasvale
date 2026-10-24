# SASVALE — Strategy. Automation. Scale. 

[![Next.js](https://img.shields.io/badge/Next.js-16.3.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?logo=react)](https://react.dev/) 
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3.3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-Private-red)](#) 

> **Sasvale** is an independent digital studio and engineering consultancy. We design, engineer, and scale high-performance digital platforms, bespoke software management systems, and AI-powered workflow automations for ambitious businesses.

---

## Architecture & Engineering Highlights

- **Next.js 16 (App Router + Turbopack)**: Server-rendered architecture, streaming HTML delivery, and optimized static page generation (SSG) for sub-second Core Web Vitals.
- **Modern Typography & Brand Palette**: Built with Google's **Manrope** and **DM Sans** typography, paired with Sasvale's signature obsidian palette (`#05070c`) and tailored warm gold accent accents (`#C6A56B`).
- **Momentum Scrolling**: Powered by [Lenis](https://lenis.darkroom.engineering/) for natural inertia scrolling with zero layout shift.
- **Enterprise SEO & Structured Data**: Complete Schema.org JSON-LD coverage (`Organization`, `WebSite`, `ProfessionalService`, `FAQPage`, `Service`, `CreativeWork`, `BlogPosting`, `BreadcrumbList`).
- **AI Model & Agent Indexing**: Native `/llms.txt` and `/llms-full.txt` implementation following the standard AI discovery specification for ChatGPT, Claude, Perplexity, and Google Gemini.
- **Social Graph Engine**: Edge-generated dynamic Open Graph images via Next.js `ImageResponse` paired with high-resolution static fallback previews (`1200x630`).
- **Automated Content Syndication**: Dynamic RSS 2.0 XML endpoint (`/feed.xml`) for instant indexation of strategic thought leadership articles.
- **Enterprise Lead Intake**: Secure `/api/contact` API with Resend integration forwarding client inquiries instantly to `sasvaleltd@gmail.com` with anti-spam honeypot defense.
- **Analytics & Tag Management**: Native Google Tag Manager (`GTM-WCKP4NVG`) and Google Analytics 4 (`G-ZN76MNJCBQ`) container integration.
- **Legacy URL Protection**: 122 strict HTTP 308 permanent redirect rules preserving 100% of historical backlinks and domain search equity.
- **Hardened HTTP Security**: Automated HSTS (`max-age=63072000; preload`), `nosniff`, `SAMEORIGIN`, `strict-origin-when-cross-origin`, and year-long immutable asset caching.
- **Accessibility Adherence**: Fully compliant with WCAG 2.2 AA standards (visible focus indicators, screen reader landmarks, skip-to-content links).

---

## Project Structure

```text
sasvale/
├── public/                     # Static assets & public manifests
│   ├── .well-known/
│   │   └── security.txt        # RFC 9116 enterprise security policy
│   ├── assets/                 # Active client logos, fonts, project spreads
│   ├── favicon.svg             # Modern vector favicon
│   ├── favicon.ico             # Classic browser favicon
│   ├── llms.txt                # High-level AI context manifest
│   ├── llms-full.txt           # Comprehensive RAG documentation
│   ├── og-image.png            # 1200x630 branded OpenGraph preview card
│   └── site.webmanifest        # Progressive Web App manifest
├── scripts/
│   └── verify-redirects.mjs    # Automated validation of 122 HTTP 308 redirects
├── src/
│   ├── app/                    # Next.js App Router (61 routes)
│   │   ├── about/              # Studio philosophy & governance
│   │   ├── api/
│   │   │   └── contact/        # Serverless lead intake API (Resend email dispatch)
│   │   ├── approach/           # 4-Phase software development lifecycle
│   │   ├── capabilities/       # Technical & architectural capabilities
│   │   ├── contact/            # Project intake & consultation
│   │   ├── feed.xml/           # Dynamic RSS 2.0 publication feed
│   │   ├── industries/         # 11 dynamic sector solution verticals
│   │   ├── insights/           # 11 strategic thought leadership articles
│   │   ├── opengraph-image.tsx # Edge dynamic social image renderer
│   │   ├── partnerships/       # Engagement & dedicated squad models
│   │   ├── privacy-policy/     # Privacy disclosures & data protections
│   │   ├── refund-policy/      # Milestone acceptance policy
│   │   ├── robots.ts           # Dynamic robots policy allowing AI bots
│   │   ├── services/           # 5 core engineering disciplines
│   │   ├── sitemap.ts          # Dynamic sitemap with all 54 canonical URLs
│   │   ├── terms-conditions/   # Terms of service & IP protections
│   │   ├── work/               # 14 delivered client case studies
│   │   ├── layout.tsx          # Root layout, structured data & analytics hooks
│   │   └── page.tsx            # Parity-verified homepage experience
│   ├── components/             # Production UI components
│   │   ├── about/              # About page interactive views
│   │   ├── approach/           # Approach interactive views
│   │   ├── capabilities/       # Capabilities interactive views
│   │   ├── contact/            # Contact forms & interactive views
│   │   ├── home/               # Homepage hero, rails, carousels & matrices
│   │   ├── layout/             # SiteHeader, SiteFooter, Navigation
│   │   ├── partnerships/       # Partnership engagement models
│   │   ├── shared/             # JsonLd, SmoothScrollProvider
│   │   ├── ui/                 # Reusable buttons, badges, page heroes
│   │   └── work/               # CaseStudyView & project spreads
│   ├── config/
│   │   ├── site.ts             # Canonical URLs, brand metadata, nav items
│   │   └── v2-foundation.ts    # Brand tokens, color definitions, design system
│   ├── lib/
│   │   ├── seo/
│   │   │   ├── jsonld.ts       # Structured Schema.org generators
│   │   │   └── metadata.ts     # Centralized constructMetadata helper
│   │   └── theme/              # Dark/light theme script & utilities
│   ├── styles/
│   │   ├── fonts.css           # Local typography font-face definitions
│   │   └── globals.css         # Tailwind directives & CSS design tokens
│   └── types/                  # Shared TypeScript interfaces & models
├── next.config.ts              # Redirects, security headers & asset caching
├── package.json
└── tsconfig.json
```

---

## Information Architecture & Routes

### Core Pages
- `/` — Homepage: Interactive Portfolio Hero, Enterprise Credibility Matrix, Built AI-First 3:4 Feature Carousel, Proprietary Products Rail, Industries Horizon Experience, A Decade of Delivery Carousel, AI Research Lab, and Executive Insights.
- `/services` — Overview of Sasvale's 5 engineering disciplines.
- `/work` — Index of 14 delivered client platforms and management systems.
- `/capabilities` — Deep dive into technical infrastructure and software capabilities.
- `/approach` — Detailed walkthrough of the four-phase SDLC.
- `/about` — Studio background, founding principles, and engineering philosophy.
- `/partnerships` — Engagement models, dedicated engineering squads, and advisory frameworks.
- `/industries` — Overview of 11 industry verticals transformed by Sasvale.
- `/insights` — Collection of 11 strategic and technical thought leadership articles.
- `/contact` — Consultation request and project scoping intake.
- `/privacy-policy` | `/terms-conditions` | `/refund-policy` — Institutional governance and legal disclosures.

### Dynamic Route Segments
- **Services (5)**:
  - `/services/web-development`
  - `/services/custom-software`
  - `/services/branding`
  - `/services/seo-marketing`
  - `/services/ai-integration`
- **Delivered Case Studies (14)**:
  - `/work/ethletia`
  - `/work/wind-deflectors`
  - `/work/education-system`
  - `/work/crowdinvest`
  - `/work/bloom-beauty`
  - `/work/artior`
  - `/work/bomeco`
  - `/work/tbs-salon`
  - `/work/21st-century`
  - `/work/cottread`
  - `/work/zenfia`
  - `/work/rassani-pos`
  - `/work/roger-edwards-motors`
  - `/work/transworld`
- **Industry Verticals (11)**:
  - `/industries/fintech`
  - `/industries/healthcare`
  - `/industries/logistics`
  - `/industries/ecommerce`
  - `/industries/real-estate`
  - `/industries/manufacturing`
  - `/industries/energy`
  - `/industries/hospitality`
  - `/industries/agriculture`
  - `/industries/entertainment`
  - `/industries/oil-and-gas`
- **Insights & Articles (11)**:
  - `/insights/brand-strategy-scroll-addicted-world`
  - `/insights/ai-product-marketing`
  - `/insights/ai-powered-ux`
  - `/insights/googles-logo-design-analysis`
  - `/insights/netflix-ui-ux-design`
  - `/insights/marketing-intelligence-ceo-weapon`
  - `/insights/brand-experience-future`
  - `/insights/digital-strategy-shift`
  - `/insights/emotion-driven-ux`
  - `/insights/luxury-brands-unforgettable-usps`
  - `/insights/snapchat-addictive-ui-ux-design`

---

## Getting Started

### Prerequisites
- **Node.js**: v20.0.0 or higher (Node v22+ recommended)
- **Package Manager**: `npm` (v10+) or `pnpm`

### Installation

```bash
# Clone the repository
git clone https://github.com/sasvale/sasvale.git
cd sasvale

# Install dependencies
npm install
```

### Environment Configuration

Create a `.env.local` file in the project root:

```env
# Canonical Site URL (defaults to https://sasvale.com in production)
NEXT_PUBLIC_SITE_URL=https://sasvale.com

# Contact Form Email Delivery (Resend)
CONTACT_INBOX_EMAIL=sasvaleltd@gmail.com
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=Sasvale Inquiries <onboarding@resend.dev>

# Google Analytics & Tag Manager (Container: GTM-WCKP4NVG, Measurement: G-ZN76MNJCBQ)
NEXT_PUBLIC_GA_ID=G-ZN76MNJCBQ
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-verification-token
NEXT_PUBLIC_BING_SITE_VERIFICATION=your-bing-verification-token
NEXT_PUBLIC_YANDEX_VERIFICATION=your-yandex-verification-token
```

---

## Inquiry Intake & Contact Architecture

The project includes an enterprise-grade lead intake workflow designed for maximum reliability and simplicity:

- **Target Inbox**: Inquiries are delivered directly to `sasvaleltd@gmail.com`.
- **Email Delivery Service**: Powered by [Resend](https://resend.com) via the official Node.js SDK. Free tier works immediately with `onboarding@resend.dev` sender.
- **One-Click Reply**: Inbound notification emails set the sender's actual email as the `replyTo` address, allowing direct replies from Gmail or any email client.
- **Honeypot Anti-Spam Defense**: Includes a hidden `website_trap` input field. Automated bots filling this field are silently dropped with an HTTP 200 response, avoiding spam in the inbox without degrading human UX with intrusive CAPTCHAs.
- **Resilient Fallback**: In the event `RESEND_API_KEY` is not configured, the endpoint logs the inquiry parameters securely to the server runtime and returns success so prospects never see a broken experience.

### Running Locally

```bash
# Start Turbopack development server on http://localhost:3000
npm run dev
```

---

## Available Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Launches the Next.js local development server with Turbopack. |
| `npm run build` | Compiles an optimized production build and generates all 61 static & dynamic routes. |
| `npm run start` | Boots the production server locally for staging tests. |
| `npm run typecheck` | Runs strict TypeScript verification across all files (`tsc --noEmit`). |
| `npm run lint` | Runs ESLint across `src/` to ensure code standards and formatting. |
| `npm run test:redirects` | Validates all 122 HTTP 308 legacy URL redirects for loop/chain prevention. |

---

## Deployment

### Vercel (Recommended)
1. Import the repository into the Vercel dashboard.
2. Vercel automatically detects Next.js with zero configuration.
3. Configure `NEXT_PUBLIC_SITE_URL=https://sasvale.com` in project environment variables.
4. Deploy.

### Custom Server / Docker
1. Run `npm run build`.
2. Start the production server using `npm run start` or target the standalone output.
3. Place behind a reverse proxy (Nginx, Cloudflare, or AWS CloudFront) with SSL termination.

---

## Brand & Licensing

Copyright © 2026 **Sasvale LLC**. All rights reserved.  
Unauthorized distribution, reproduction, or commercial extraction of brand assets and source code is strictly prohibited.
