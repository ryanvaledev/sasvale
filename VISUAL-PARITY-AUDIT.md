# VISUAL PARITY AUDIT: SASVALE LIVE REFERENCE VS. CURRENT NEXT.JS

**Audit Date**: September 12, 2026  
**Live Reference URL**: [https://sasvale.vercel.app/](https://sasvale.vercel.app/)  
**Local Comparison Target**: Next.js 16 App Router (`http://localhost:3000/`)  
**Audited Breakpoints**: 375px, 430px, 768px, 1024px, 1440px, 1920px  
**Captured Screenshot Artifacts**:
- `audit-screenshots/live/live-375.png`, `audit-screenshots/local/local-375.png`
- `audit-screenshots/live/live-430.png`, `audit-screenshots/local/local-430.png`
- `audit-screenshots/live/live-768.png`, `audit-screenshots/local/local-768.png`
- `audit-screenshots/live/live-1024.png`, `audit-screenshots/local/local-1024.png`
- `audit-screenshots/live/live-1440.png`, `audit-screenshots/local/local-1440.png`
- `audit-screenshots/live/live-1920.png`, `audit-screenshots/local/local-1920.png`

---

## 1. Executive Summary

The underlying Next.js 16 technical foundation (TypeScript strict mode, React Server Components, metadata infrastructure, canonical URL generators, JSON-LD schemas, sitemaps, robots, and 122 permanent HTTP 308 redirects) is intact and validated.

However, the current frontend presentation deviates significantly from the approved live Sasvale production design. The current Next.js implementation displays a generic blue/slate SaaS starter theme with standard cards, whereas the live Sasvale site features a custom dark brand aesthetic with glassmorphism overlays, specific typography (`Bricolage Grotesque` and `DM Sans`), pill buttons with dual gradient borders, floating dispersion glass background art, a client logo carousel, an interactive intake form, and distinct multi-stage and testimonial layouts.

This audit documents every visual mismatch between the live reference and the current local Next.js build, accompanied by the exact required corrections.

---

## 2. Core Visual & Token Discrepancies

| Element / Property | Live Reference (`https://sasvale.vercel.app/`) | Current Next.js Output (`localhost:3000`) | Required Correction |
| :--- | :--- | :--- | :--- |
| **Primary Brand Color** | `#7684FF` (Iris Blue / Purple) | `#2563EB` / `#3B82F6` (Tailwind blue-600) | Update `--color-primary` / `--e-global-color-primary` to `#7684FF`. |
| **Accent Text Color** | `#F0F1F1` (Soft white/light gray) | `#F1F5F9` / `#CBD5E1` (Tailwind slate-100/300) | Update `--color-accent` / text tokens to `#F0F1F1`. |
| **Background Color** | `#000000` (Pure black `#000`) | `#090D16` / `#070A11` (Deep navy slate) | Reset `body` and page root background to `#000000`. |
| **Trust Badge Green** | `#00B67A` with shadow `#005128` | None | Recreate trust rating SVG badges with exact `#00B67A` and `#005128`. |
| **Heading Font** | `Bricolage Grotesque` (Weights 200, 300, 400, 600, 700) | System sans-serif (`font-sans`) | Configure local `Bricolage Grotesque` font family via `@font-face` / Next.js font. |
| **Body / UI Font** | `DM Sans` (Weights 300, 400, 500, 700) | System sans-serif (`font-sans`) | Configure local `DM Sans` font family via `@font-face` / Next.js font. |
| **Heading Scale (H1)** | 80px desktop, 70px (1366px), 50px (1024px), 25px (767px); line-height 114.3%; letter-spacing -6px | 60px desktop, 48px mobile; standard tracking | Recreate `.prmry-head` typography token matching exact responsive font sizes and letter spacing. |
| **Heading Scale (H2)** | 55px desktop, 45px (1366px), 40px (1024px), 22px (767px); letter-spacing -1px | 30px / 36px desktop | Recreate `.second-head` typography class. |
| **Subhead Scale (H3)** | 38px desktop, 30px (1366px), 28px (1024px), 20px (767px); weight 400 | 20px / 24px desktop | Recreate `.third-head` typography class. |
| **Card / Subhead (H4)**| 26px desktop, 25px (1366px), 22px (1024px), 18px (767px); line-height 140% | 18px / 20px desktop | Recreate `.fourth-head` typography class. |
| **Container Width** | `max-width: 1300px` (desktop), `1680px` (1800px+), `1260px` (1367px), `1024px` (tablet), `767px` (mobile) | `max-w-7xl` (`1280px`) | Set standard `.containers` class to `max-width: 1300px` with responsive padding. |
| **Button Style (Light)**| Glass pill (`border-radius: 64px`), gradient background, 1.6px dual-gradient border, slide-up hover fill `#7684FF` | Rectangular button (`rounded-lg`), solid blue-600 background | Recreate `.main-light-button` with gradient border and hover transition. |
| **Button Style (Dark)** | Black pill (`border-radius: 64px`), 1.6px dual-gradient border, slide-up hover fill `#7684FF` | Slate outline button (`bg-slate-800/80 border-slate-700`) | Recreate `.dark-button` with gradient border. |

---

## 3. Section-by-Section Parity Analysis

### Section 1: Global Header & Navigation
- **Live Reference**:
  - Floating/absolute header on dark backdrop with subtle glass blur (`backdrop-filter: blur(17px)`).
  - Left: Custom SVG logo glyph (`#7684FF`, 41px x 51px, viewBox `0 0 41 51`).
  - Center: Horizontal navigation links ("Services", "Work", "About", "Contact") with pill hover effect (slide-up fill) and custom downward chevron indicator for "Services" dropdown.
  - Dropdown: Glassmorphic panel (`background: #000000d1; backdrop-filter: blur(17px);`) containing: Web Development, Custom Software & Management Systems, Branding & Identity, SEO & Digital Marketing, AI Integration & Automation.
  - Right: "Let’s Connect" pill button with glass gradient and border.
  - Tablet/Mobile (<1024px): Hamburger toggle icon (3 horizontal lines) triggering slide-out offcanvas drawer.
- **Current Next.js Output**:
  - Fixed standard navbar with text gradient "Sasvale", generic links, solid blue button "Start a Project", no Services dropdown, no mobile drawer.
- **Required Correction**:
  - Implement `<SiteHeader />` with exact SVG logo glyph, desktop navigation with Services dropdown menu, "Let's Connect" button linking to `/contact`, and responsive mobile drawer toggle.

---

### Section 2: Homepage Hero (`main_banner`)
- **Live Reference**:
  - Centered hero layout inside 1300px container.
  - H1: `Web development and software built for <span class="c-p">growing businesses.</span>` (80px, weight 200, letter-spacing -6px, with "growing businesses." highlighted in `#7684FF`).
  - Subhead: `Custom websites, software, and digital growth for growing businesses. Real engineering, direct founder access, delivered remotely. No account managers, no outsourced middlemen — just senior engineers who build what you need.` (18px, weight 300, color `#F0F1F1`).
  - CTA Button: `Book a free strategy call` (`.main-light-button`).
  - Background Art: Absolute floating dispersion glass art (`assets/images/dispersion-glass-5-1-1.png`).
  - Trust Bar (`trusted-logos`):
    - Left (48% width): `50+ projects delivered. 15+ modern technologies. 100% remote-first engineering serving US businesses.` (19px, weight 300).
    - Right (48% width, right-aligned): `See our work` link with horizontal SVG arrow pointing right.
  - Client Logos Row (`rpt-loop`):
    - Continuous flex row of partner client SVG brand logos: Magoos, Cottread, SAS Vale, Bloom Beauty, Digitac, Asset-1.
- **Current Next.js Output**:
  - Left-aligned SaaS hero with "Sasvale Technical Foundation" pill badge, solid blue CTA button, no dispersion background, no trust bar, no client logos.
- **Required Correction**:
  - Reconstruct `<HeroSection />` with exact centered typography, highlighted span, `.main-light-button` CTA, `dispersion-glass-5-1-1.png` background, trust metrics strip with SVG arrow, and client logo flex track.

---

### Section 3: Social Proof & Areas of Expertise
- **Live Reference**:
  - Background: `assets/images/dispersion-glass-20-1-1-2-1.png`.
  - Top Sub-section:
    - Heading: `200 clients trusted us with their idea. Every single one of them is glad they did.` (`.second-head`, 55px, weight 300, letter-spacing -1px).
    - CTA: `Join our list of clients` (`.main-light-button`).
  - Discipline Introduction:
    - Left Column (48% width):
      - H2: `Three things most businesses need. All done properly.` (`.third-head`, 38px, weight 400).
      - Body: `We work across three core areas. Not because we do a little of everything but because these three disciplines are deeply connected. What you look like, what you build, and how people find you are not separate problems. They are one problem we solve together.`
  - Label: `Areas of Expertise` (`.base-head`, 19px).
  - 3 Core Cards (`service-slick-slider` / `.srv-item`):
    - Card 1: `Design & Creative` — Brand identity, web design, UX, social media design, content design, print and packaging.
    - Card 2: `Digital Marketing` — SEO, PPC, social media marketing, email automation, local SEO, online reputation management, AI search optimisation.
    - Card 3: `Website & CMS Development` — Custom web development, WordPress, Shopify, Webflow, CMS builds and migrations, conversion rate optimisation.
    - Card Styling: Subtle glass cards with gradient background, rounded corners, padding.
  - Bottom CTA: Centered `Book a free strategy call` button.
- **Current Next.js Output**:
  - Generic 5-card grid with blue borders, completely omitting the "200 clients trusted us" banner, the 3 core disciplines philosophy text, and the centered CTA button.
- **Required Correction**:
  - Implement `<SocialProofServicesSection />` matching the exact sequence: 200 clients headline + CTA -> Three things most businesses need text -> 3 Areas of Expertise cards -> Book a free strategy call button.

---

### Section 4: Three Stages of Business Section
- **Live Reference**:
  - 2-Column asymmetric layout (`cl-sxty` 60% / `cl-fourty` 40%).
  - Left Column (60%):
    - H2: `We work with businesses at three stages. Each one needs something different from us.` (`.third-head`, 38px).
    - Stage 1: `Founders building something real` + explanation copy.
    - Stage 2: `Brands that have grown but need to look like it` + explanation copy.
    - Stage 3: `Enterprise teams that need a partner, not just a vendor` + explanation copy.
    - CTA Button: `Let's talk about your website` (`.dark-button`, black background with gradient border).
  - Right Column (40%):
    - High-resolution web image: `assets/images/home-page-banner.webp` (`.full_col_image`).
- **Current Next.js Output**:
  - Completely missing.
- **Required Correction**:
  - Implement `<ThreeStagesSection />` with the 3 stages copy, dark CTA button, and `home-page-banner.webp` image.

---

### Section 5: Why Businesses Choose Us
- **Live Reference**:
  - Background: `assets/images/dispersion-glass-20-2-2-1-1.png`.
  - Header: `Why businesses choose us over everyone else.` (`.second-head`, 55px).
  - 5 Value Differentiator Cards (`enhance-strategy-repeater`):
    1. `One team across design, development, and marketing`
    2. `We explain what we are doing and why`
    3. `Built for US businesses with zero offshore handoffs` (Direct founder access, EST - PST timezone alignment).
    4. `We move fast without cutting corners`
    5. `The same senior team from brief to delivery`
- **Current Next.js Output**:
  - Completely missing.
- **Required Correction**:
  - Implement `<WhyChooseUsSection />` with all 5 value cards and exact typography hierarchy.

---

### Section 6: Real Numbers Section
- **Live Reference**:
  - Header: `The numbers that tell you something real.` (`.second-head`, 55px).
  - 4 Column Grid (`enhance-strategy-repeater four-columns` - 25% width each):
    1. `50+` — Modern web builds, custom software, and digital systems shipped for growing businesses.
    2. `100%` — Founder-led delivery. No junior handoffs, no outsourced dev shops. The people you plan with are the people who code.
    3. `EST – PST` — Real-time availability aligned with US business hours. Fast responses and seamless collaboration.
    4. `Modern Stack` — Built with Next.js, React, modern APIs, and battle-tested databases engineered for speed, conversion, and longevity.
- **Current Next.js Output**:
  - Completely missing.
- **Required Correction**:
  - Implement `<RealNumbersSection />` with 4-column responsive layout (stacking on mobile, 4-col on desktop).

---

### Section 7: Client Reviews Section (`gmb-review`)
- **Live Reference**:
  - Background: `assets/images/dispersion-glass-12-1-1.png`.
  - Header: `What our clients actually say.` (`.third-head`, 38px).
  - Testimonial Cards (`inner-rvw`):
    1. `James Berkley` (Business Owner, USA) — Working with SAS Vale has been instrumental to my online business coming to life...
    2. `D.A. Rowe` (Founder, USA) — SAS Vale did a fantastic job on our creative package. The website design was sleek and innovative...
    3. `Sydney Cummings` (Client, USA) — SAS Vale is my go-to web developer and has been helpful over the past two years across multiple sites...
    4. `Wen Qian` (Founder) — I cannot recommend SAS Vale highly enough. They have been instrumental in bringing my vision to life...
  - Review Graphic: Authentic star rating badge with `#00B67A` star and `#7684FF` accent stars.
- **Current Next.js Output**:
  - Completely missing.
- **Required Correction**:
  - Implement `<ClientReviewsSection />` with all 4 reviews, client names, roles, and review star SVGs.

---

### Section 8: Frequently Asked Questions (`faqs`)
- **Live Reference**:
  - Background: `assets/images/dispersion-glass-25-1-1.png`.
  - Header: `Frequently asked questions` (`.third-head`, 38px).
  - Accordion Items (5 items):
    1. `What kind of businesses do you work with?`
    2. `Do you work with international clients?`
    3. `How do I know which services I actually need?`
    4. `How long does a typical project take?`
    5. `What does working with SAS Vale actually look like day to day?`
  - Toggle icon: `+` that rotates/toggles content visibility on click.
- **Current Next.js Output**:
  - Completely missing.
- **Required Correction**:
  - Implement an accessible `<FaqAccordionSection />` client component with keyboard support and aria attributes.

---

### Section 9: Global Footer & Contact Intake Form (`footers`)
- **Live Reference**:
  - Background Art: `assets/images/dispersion-glass-1-1-1.png` and pseudo-element `new-project-1.png`.
  - Left Callout:
    - Heading 1: `Have an idea?`
    - Heading 2: `Let’s Build it Together!`
    - Copy: `Tell us what you are working on. We will tell you honestly whether we can help, how we would approach it, and what it would take to get there. No hard sell. Just a real conversation.`
  - Intake Form (`footer_zoho_form`):
    - Service Dropdown (`How can we help you?` with 13 options: CRO, SEO, Web Design, WordPress Development, Webflow, Shopify, Custom Website Development, AI Search Optimization (AEO/GEO), Digital Marketing, Email Marketing, PPC, Social Media Design, Social Media Marketing, User Journey).
    - Full Name input (pill/custom border).
    - Email input (half width).
    - Phone Number input (half width).
    - Checkbox: `Check here to subscribe for updates.*`.
    - Submit Button: `Submit` with arrow SVG, turning `#7684FF` on hover.
  - Footer Bottom Navigation:
    - Direct Contact: `hello@sasvale.com` pill.
    - Availability: `EST – PST Hours` pill, `Start a Project` pill.
    - Quick Links: Services, Work, About, Contact Us.
    - Follow Us: Facebook, Instagram, LinkedIn.
    - Legal bar: `© 2026 SAS Vale. All Rights Reserved. Remote-First Engineering` + Privacy Policy, Refund Policy, Terms & Conditions.
- **Current Next.js Output**:
  - Simple 4-column text footer with no intake form, missing background art, generic links, and incorrect layout.
- **Required Correction**:
  - Implement `<SiteFooter />` containing the full intake form connected to `/api/contact`, availability pills, quick links, social links, and legal copyright bar.

---

## 4. Responsive Viewport Parity Audit

### Viewport 375px & 430px (Mobile)
- **Live Reference**:
  - Header collapses to Logo + Hamburger icon.
  - H1 font size scales down to 25px (`line-height: 114.3%`, `letter-spacing: -1px`).
  - Section paddings reduce to `40px 16px`.
  - Two-column layouts (`cl-sxty` + `cl-fourty`, `cl-hlf`) stack into 100% full-width blocks.
  - Form fields stack into single-column inputs with 100% width.
  - Footer navigation stacks vertically into accessible sections.
- **Current Next.js Output**:
  - Generic desktop layout squeezed with missing hamburger menu and incorrect font measures.
- **Required Correction**:
  - Implement fluid mobile typography classes matching legacy breakpoints (`max-width: 767px` rules) and mobile slide-out navigation.

### Viewport 768px & 1024px (Tablet & Laptop)
- **Live Reference**:
  - H1 scales to 50px (at 1024px) and H2 to 40px.
  - Container max width: 1024px with 20px padding.
  - Number cards transition into 2x2 grid.
  - Why Choose Us repeater cards flow cleanly.
- **Current Next.js Output**:
  - Misaligned cards without brand styling or responsive container constraints.
- **Required Correction**:
  - Apply `@media(max-width: 1024px)` token scales and 2-column tablet grid definitions.

### Viewport 1440px & 1920px (Desktop & Ultra-wide)
- **Live Reference**:
  - Container centered at 1300px (1440px) and expands up to 1680px (1920px).
  - H1 reaches 80px (1440px) and 105px (1920px) with tight letter spacing (-6px).
  - Dispersion glass backgrounds anchor gracefully on the right and center without tiling.
- **Current Next.js Output**:
  - Max-w-7xl (1280px) box with plain dark navy background and standard fonts.
- **Required Correction**:
  - Implement 1300px/1680px container bounds with authentic background image positioning.

---

## 5. Summary of Required Actions

1. **Copy Visual Assets**: Transfer fonts (`Bricolage Grotesque`, `DM Sans`), background dispersion images (`dispersion-glass-*`, `home-page-banner.webp`, `new-project-1.png`), and client logo SVGs from `_legacy-reference/assets/` to `public/assets/`.
2. **Setup Global Styling & Tokens**: Update `src/styles/globals.css` with the exact color tokens (`#7684FF`, `#000000`, `#F0F1F1`, `#00B67A`), typography classes (`prmry-head`, `second-head`, `third-head`, `fourth-head`, `base-head`, `body-txt`), and button styles (`main-light-button`, `dark-button`).
3. **Rebuild Navigation Shell**: Build `<SiteHeader />` with brand logo SVG, mega dropdown, mobile drawer, and "Let's Connect" button.
4. **Rebuild Homepage Sections in Exact Sequence**:
   - Hero (`main_banner`) with headline, copy, CTA, glass background, trust bar, and logo strip.
   - Social proof + 3 Areas of Expertise cards + CTA.
   - Three stages section with `home-page-banner.webp`.
   - Why businesses choose us (5 strategy repeater cards).
   - Real numbers (4 stat cards: 50+, 100%, EST-PST, Modern Stack).
   - Client reviews (4 cards with star SVGs).
   - Frequently asked questions (5 collapsible accordion items).
5. **Rebuild Footer & Contact Form**: Recreate `<SiteFooter />` with "Have an idea? Let's Build it Together!", Zoho-style intake form posting to `/api/contact`, contact pills, quick links, and legal bar.
6. **Inner Pages**: Update Services hub, Work, About, Contact, and service detail pages to share the identical design tokens and shell.
7. **Verification**: Run `npm run typecheck`, `npm run lint`, `npm run build`, and capture parity screenshots to ensure complete fidelity.
