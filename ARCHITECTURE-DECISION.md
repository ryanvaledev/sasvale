# Architecture Decision Record (ADR 001): Sasvale V2 Platform & Framework Selection

**Status:** Accepted  
**Date:** 2026-09-12  
**Deciders:** Sasvale Technical Team  
**Scope:** Sasvale V2 Platform Architecture, Tooling, and SEO Foundation  

---

## 1. Context and Problem Statement

Sasvale’s current public presence runs on an exported WordPress/Elementor static HTML codebase. While functional as an initial snapshot, this legacy foundation imposes severe technical limitations:
- Over 50 unminified Elementor stylesheets with deeply nested CSS selector chains.
- Over 30 unbundled JavaScript files depending on legacy jQuery 3.7.1 and jQuery UI.
- Markup duplication across 80+ static HTML files with disconnected header/footer navigation.
- Detached contact form endpoints risking dropped lead inquiries.
- Unstructured legacy URL hierarchy (`/pages/industries-*.html`, `/pages/projects-*.html`, `/pages/blog-*.html`) requiring careful search equity preservation.

The business requires a modern, maintainable, scalable web architecture that delivers top-tier technical SEO, indexable server-rendered HTML, robust Core Web Vitals, accessible UI (WCAG 2.2 AA), and an extensible foundation for future custom software and automation offerings.

---

## 2. Options Considered

### Option A: Next.js 16 App Router + TypeScript (Selected)
- **Pinned Version:** Next.js `16.3.3` (Active LTS release), React `19.2.8`, TypeScript `^5.0.0`.
- **Core Architecture:** React Server Components (RSC) by default, narrow Client Component boundaries, native App Router file-system routing, built-in Route Handlers (`src/app/api/*`), and native Metadata API.
- **Styling:** Tailwind CSS v4 as an implementation utility with Sasvale-owned design tokens managed via CSS Custom Properties.

### Option B: Astro
- **Core Architecture:** Islands architecture with zero client JavaScript by default for static content, multi-framework component support (React, Svelte, Vue).
- **Primary Use Case:** Editorial publications, static blogs, and low-interactivity marketing websites.

---

## 3. Comparative Evaluation

| Evaluation Criteria | Next.js 16 App Router | Astro |
| :--- | :--- | :--- |
| **Technical SEO & Indexability** | Full server-rendered & static pre-rendered HTML on initial load. Search engines receive complete semantic markup without client execution. | Full static HTML on initial load. Search engines receive complete semantic markup without client execution. |
| **Client JS Footprint** | Server Components avoid adding unnecessary component-specific client JavaScript. Minimal framework runtime included. | Zero client JavaScript by default for static pages (Islands model). |
| **Performance (Core Web Vitals)** | Excellent LCP/CLS when leveraging RSCs, font optimization, and zero unneeded client scripts. | Exceptional out-of-the-box performance for purely static brochures. |
| **Server & API Capabilities** | Native Route Handlers (`src/app/api/contact/route.ts`), Server Actions, dynamic request handling, and backend middleware within one runtime. | API endpoints available via SSR adapters, but requires additional integration for full-stack workflows. |
| **Agency Roadmap & Extensibility** | Native runway for client dashboards, authenticated portals, custom software demos, and AI automation tooling in React. | Excellent for content; requires hybrid setups or external microservices for complex interactive software products. |
| **Ecosystem & Community** | Vast enterprise React ecosystem, widespread hosting support, battle-tested edge runtimes. | Rapidly growing ecosystem; smaller pool of enterprise full-stack libraries. |

---

## 4. Decision & Rationale

**Selected Platform:** **Next.js 16 App Router + TypeScript (Active LTS release `16.3.3`)**.

### Rationale:
1. **Architectural & Business Fit (Not an Inherent SEO Ranking Advantage)**:
   - Neither Next.js nor Astro possesses an inherent search engine ranking advantage over the other; both can produce clean, crawlable, semantic HTML.
   - While Astro has an architectural advantage for purely content-heavy, low-interactivity brochure sites, Sasvale’s strategic trajectory includes interactive agency offerings, software demos, automation workflows, and prospective client portals.
   - Next.js provides the complete full-stack environment needed to support this evolution without requiring a future replatforming.
2. **React Server Components (RSC) Discipline**:
   - Server Components are utilized by default so static and content-heavy components do not introduce unnecessary component-specific client-side JavaScript.
   - Client Components are strictly confined to interactive boundaries where real browser interactivity is required (such as mobile navigation drawers and form enhancements).
3. **HTTP 308 Permanent Server-Side Redirects**:
   - In Next.js, permanent redirects configured via `next.config.ts` (`permanent: true`) emit **HTTP 308 Permanent Redirect**.
   - All legacy URLs from the WordPress/Elementor export are mapped directly to their clean V2 canonical routes to preserve accumulated backlink equity and search signals with zero redirect chains or loops.
4. **Sasvale-Owned Design System**:
   - Tailwind CSS v4 is employed solely as a compilation engine.
   - Sasvale maintains ownership over all design tokens (colors, fluid `clamp()` typography, spacing scales, containers, borders, radii, shadows, motion, and breakpoints) defined via CSS Custom Properties.
   - Target browser support: Modern evergreen browsers (Chrome 111+, Safari 16.4+, Firefox 115+, Edge 111+) supporting CSS Custom Properties, `@property`, and modern layout primitives.
5. **Centralized Canonical Site Configuration**:
   - The canonical site URL is driven by environment configuration (`process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"`, defaulting to `"https://sasvale.com"` for production builds).
   - Vercel preview URLs are strictly barred from becoming canonical or sitemap URLs.

---

## 5. Consequences

### Positive:
- Clean, maintainable TypeScript architecture with strict compile-time safety.
- Instant, crawlable semantic HTML delivered to search bots on initial HTTP response.
- Complete isolation and deprecation of legacy Elementor CSS and jQuery scripts.
- Scalable backend route handlers for validated form processing and spam prevention.

### Considerations & Controls:
- Client boundaries must be rigorously policed during code review to prevent accidental hydration bloat.
- CodeRabbit agent reviews (`coderabbit review --agent --dir src`), ESLint with Next.js Core Web Vitals, and TypeScript checks (`tsc --noEmit`) must pass before merging.
