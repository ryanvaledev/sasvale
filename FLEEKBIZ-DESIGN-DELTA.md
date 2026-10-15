# FLEEKBIZ DESIGN DELTA: SECTION-BY-SECTION REDESIGN MATRIX

**Benchmark Reference**: [https://fleekbiz.com/](https://fleekbiz.com/)  
**Brand Destination**: [https://www.sasvale.com/](https://www.sasvale.com/)  
**Document Purpose**: Evaluate each existing FleekBiz-derived section to determine whether to **KEEP**, **REFINE**, **RECOMPOSE**, or **REPLACE**, ensuring Sasvale establishes an unmistakable visual identity while preserving commercial polish, information density, and conversion discipline.

---

## 1. Classification Criteria & Strict Boundaries

- **KEEP**: Strong information architecture and layout structure that already works well; requires only brand token application.
- **REFINE**: Strong strategic concept, but requires Sasvale typography, color tokens, button treatments, and subtle interaction improvements.
- **RECOMPOSE**: Valuable business content, but the visual composition looks too much like FleekBiz (e.g., dispersion glass bubbles, stacked generic cards) and requires a fresh, Sasvale-specific layout.
- **REPLACE**: Elements that are generic, weak, AI-template-like, unverified, or inappropriate for Sasvale's premium brand direction.

### Non-Negotiable Content & Proof Boundaries
1. **FleekBiz Business Proof is NOT Sasvale Business Proof**:
   - FleekBiz client logos, testimonials, client reviews, and metrics are **completely excluded** from Sasvale's production identity.
2. **Unverified Clients Removed**:
   - **Magoos**, **Cottread**, **Bomeco**, **Bake Me Happi**, **Artior**, and **Bloom Beauty** are strictly excluded from trust strips and partner sections unless explicitly verified.
3. **Unverified Testimonials Removed**:
   - Reviews attributed to **James Berkley**, **D.A. Rowe**, **Sydney Cummings**, and **Wen Qian** are removed from public copy. The testimonial section is redesigned as an architectural container ready for genuine verified reviews or case study highlights.
4. **Unverified Metrics Removed**:
   - Claims such as `50+ projects`, `100% founder-led`, `200 clients`, or `EST–PST availability` are removed from public display numbers and replaced with genuine portfolio proof and verified operational facts.
5. **No AI Gimmicks**:
   - No glowing 3D spheres, no celestial orbital engines, no floating chips, no mouse-following glow halos, no generic bento boxes.

---

## 2. Section-by-Section Delta Analysis

### Section 0: Global Header & Navigation
- **Classification**: **REFINE**
- **Current Structure**: Fixed header on dark blur backdrop; left SVG logo glyph; center pill navigation ("Services" dropdown, "Work", "About", "Contact"); right "Let's Connect" pill button.
- **What Works**:
  - Sticky glass header with low visual footprint.
  - Dropdown menu structure for core services.
  - Immediate, friction-free CTA access.
- **What Looks Too FleekBiz-Like**:
  - Purple `#7684FF` logo and pill hover states.
  - Generic downward polygon caret on Services.
  - 64px rounded toy pill button.
- **What Should Remain**:
  - Desktop-to-mobile navigation depth.
  - Full-service catalog access from dropdown.
  - Keyboard accessibility and screen-reader skip link.
- **What Should Change & Proposed Sasvale Treatment**:
  - Replace the temporary glyph with the official **SASVALE geometric wordmark** (`public/assets/brand/sasvale-logo.png`).
  - Update typography to `DM Sans` (13px, weight 500, letter-spacing `0.08em`).
  - Active/hover states use Champagne Gold (`#D4AF37`) with subtle underline indicators.
  - Replace 64px pill button with the 8px architectural gold button (`.btn-gold`).

---

### Section 1: Homepage Hero (`main_banner`)
- **Classification**: **RECOMPOSE**
- **Current Structure**: Centered text layout inside 1300px container; centered H1 with purple span; centered body text; centered "Book a free strategy call" button; floating dispersion glass bubble image behind text.
- **What Works**:
  - Clear value proposition: Custom web engineering and digital systems.
  - Strong conversion callout ("Schedule Strategy Call").
- **What Looks Too FleekBiz-Like**:
  - Centered text directly overlapping an abstract 3D soap bubble (`dispersion-glass-5-1-1.png`).
  - Purple highlighted span text (`.c-p`).
  - Generic agency hero composition.
- **Visual Differentiation Test**:
  - *If we replaced Sasvale's logo with FleekBiz's logo, would this still look like FleekBiz?* **YES.** It currently looks 100% like FleekBiz.
- **What Should Change & Proposed Sasvale Treatment**:
  - **Recompose into an Asymmetric 55/45 Architectural Editorial Layout**:
    - **Left Column (Typographic Authority)**:
      - Eyebrow: `STRATEGY • AUTOMATION • SCALE` in Champagne Gold (`10px DM Sans`, letter-spacing `0.2em`).
      - H1 (`Manrope`, 68px–80px desktop, weight 500, tight tracking `-0.04em`):
        *"Engineering Digital Systems That Compound at Scale."*
      - Concise narrative sub-copy (`DM Sans`, 17px, color `--primitive-stone-muted` `#96938A`):
        *"Sasvale designs and engineers custom web platforms, automated workflows, and digital products for ambitious businesses. Senior engineering leadership, transparent architecture, and measurable longevity."*
      - Dual Action Buttons: Primary 8px solid gold `.btn-gold` ("Schedule Strategy Call") + Secondary architectural outline `.btn-secondary` ("View Selected Work").
    - **Right Column (Curated Real Project Composition — RECOMMENDED)**:
      - Multi-layered authentic viewport composition featuring real observable assets from confirmed work (Ethletia, Rassani POS, Engineers & Doctors School).
      - Framed with subtle 1px architectural hairline rules (`rgba(255, 255, 255, 0.08)`).
      - Clean, static, and dignified — looks exceptional even with motion disabled.
      - **NO 3D spheres, NO rotating orbital rings, NO floating glass chips, NO mouse backlight glows.**

---

### Section 2: Trust & Selected Work Introduction (Replacing FleekBiz Logo Bar)
- **Classification**: **REPLACE**
- **Current Structure**: Two-column trust banner ("50+ projects delivered...") followed by flex row of FleekBiz partner client logos (Magoos, Cottread, Bomeco, Bake Me Happi, Artior, Bloom Beauty).
- **Why It Must Be Replaced**:
  - Magoos, Cottread, Bomeco, Bake Me Happi, Artior, and Bloom Beauty are **unverified FleekBiz clients**, NOT confirmed Sasvale clients.
  - Publishing unverified client logos or claims violates brand truth.
- **Proposed Sasvale Treatment**:
  - Replace the generic trust strip with a **Selected Work & Focus Introduction**:
    - An architectural band introducing Sasvale's confirmed delivery footprint across enterprise platforms, specialized e-commerce, and custom software.
    - Verified focus areas: Custom Web Architecture, Workflow Automation, Systems Integration, and Digital Commerce.
    - Clean typography in `Manrope` and `DM Sans` with hairline divider rules.
    - Optional: If client approvals are secured for confirmed portfolio brands (e.g. Ethletia, Rassani, TBS Salon), display verified monochrome wordmarks. Otherwise, lead directly with the work.

---

### Section 3: Core Disciplines / Capabilities
- **Classification**: **RECOMPOSE**
- **Current Structure**: "200 clients trusted us..." headline; 3 glass cards (`Design & Creative`, `Digital Marketing`, `Website & CMS Development`) with purple hover borders; dispersion glass background.
- **What Works**:
  - The underlying philosophy: Digital presence, software architecture, and growth operations are interconnected systems.
- **What Looks Too FleekBiz-Like**:
  - 3 identical floating cards with purple hover borders.
  - Dispersion glass background (`dispersion-glass-20-1-1-2-1.png`).
  - Unverified claim ("200 clients trusted us").
- **Visual Differentiation Test**:
  - *If we replaced Sasvale's logo with FleekBiz's logo, would this still look like FleekBiz?* **YES.**
- **What Should Change & Proposed Sasvale Treatment**:
  - **Recompose into an Architectural Capabilities Index**:
    - Avoid cards as the default layout primitive.
    - Present capabilities as an indexed, structured typographic layout with thin architectural rules:
      1. **01 / Web & Platform Engineering**: Next.js App Router, React Server Components, headless architectures, high-performance web systems.
      2. **02 / Workflow & Systems Automation**: Data pipeline orchestration, custom API integrations, internal operational tooling, automated CRM workflows.
      3. **03 / Brand Identity & Digital Experience**: Design systems, typographic hierarchy, responsive interface architecture, conversion-focused UX.
    - Clean numbered rows with expandable technical deliverables and direct links to confirmed case studies.

---

### Section 4: Three Stages of Business (Client Fit Framework)
- **Classification**: **REFINE**
- **Current Structure**: 60/40 layout: Left column features 3 stages ("Founders building something real", "Brands that have grown...", "Enterprise teams..."); right column features `home-page-banner.webp` screenshot.
- **What Works**:
  - Outstanding commercial qualification: directly clarifies who Sasvale works best with.
  - Demonstrates strategic maturity and empathy for different growth inflection points.
- **What Looks Too FleekBiz-Like**:
  - The right-hand image (`home-page-banner.webp`) is an Elementor screenshot showing a generic phone and laptop mockup.
- **What Should Remain**:
  - The core qualification narrative and logic of the three business stages.
- **What Should Change & Proposed Sasvale Treatment**:
  - Format the 3 stages as an **Architectural Editorial Sequence**:
    - `01` Early-Stage Builders: Engineering the platform right the first time with senior technical architecture.
    - `02` Growing Brands: Modernizing legacy digital presence to reflect true commercial maturity.
    - `03` Scaling Organizations: Dedicated senior engineering capacity to accelerate technical roadmaps.
  - Replace the generic laptop mockup with authentic visual representations of Sasvale's architectural deliverables (design token schemas, responsive UI viewports, system diagrams).

---

### Section 5: Commercial Differentiators (Why Choose Sasvale)
- **Classification**: **RECOMPOSE**
- **Current Structure**: "Why businesses choose us over everyone else." headline with 5 stacked glass cards.
- **What Works**:
  - Decisive commercial value proposition: senior engineers, no junior handoffs, transparent technical explanations, architectural longevity.
- **What Looks Too FleekBiz-Like**:
  - 5 identical rounded boxes stacked vertically with purple/pink dispersion background.
- **What Should Change & Proposed Sasvale Treatment**:
  - **Recompose into an Asymmetric Differentiator Grid**:
    - Break free from stacked uniform cards.
    - Use editorial columns with hairline architectural borders:
      - Primary Anchor: **Direct Senior Engineering** — The engineers who design your technical roadmap are the ones who write the code.
      - Pillar 2: **Transparent Architecture** — Complete documentation, clean codebases, and zero proprietary lock-in.
      - Pillar 3: **Built for Long-Term Scale** — Resilient technology stacks engineered for performance, security, and low maintenance.
      - Pillar 4: **Commercial Focus** — Every line of code and interface decision serves a measurable business objective.

---

### Section 6: Real Numbers / Statistical Metrics
- **Classification**: **RECOMPOSE**
- **Current Structure**: 4-column metric strip: `50+` (projects delivered), `100%` (founder-led), `EST – PST` (hours alignment), `Modern Stack`.
- **Why It Must Be Recomposed**:
  - The user explicitly commanded: **REMOVE UNVERIFIED BUSINESS CLAIMS**.
  - Generic numbers like `50+` or `200 clients` are unverified FleekBiz imports and weaken credibility.
- **Proposed Sasvale Treatment**:
  - Replace generic counters with **Verified Technical & Delivery Standards**:
    - Column 1: **Next.js & React Server Components** — Zero unnecessary client runtime, sub-second TTFB.
    - Column 2: **WCAG 2.2 AA Accessibility** — Inclusive digital systems engineered to rigorous international standards.
    - Column 3: **Direct Principal Engineering** — Direct access to senior architects on every active engagement.
    - Column 4: **100% Code Ownership** — Complete transfer of source code, deployment assets, and architectural documentation.

---

### Section 7: Client Reviews & Social Proof
- **Classification**: **RECOMPOSE**
- **Current Structure**: "What our clients actually say." headline with 4 testimonial cards (James Berkley, D.A. Rowe, Sydney Cummings, Wen Qian) with green/purple star badges.
- **Why It Must Be Recomposed**:
  - The user explicitly commanded: **REMOVE UNVERIFIED TESTIMONIALS**.
  - James Berkley, D.A. Rowe, Sydney Cummings, and Wen Qian are unverified FleekBiz reviews and must NOT be published as Sasvale reviews.
- **Proposed Sasvale Treatment**:
  - **Design an Editorial Client Proof Container**:
    - If genuine verified testimonials are provided by the client, present them in an editorial pull-quote format with verified attribution.
    - If testimonials remain unverified at launch, replace this section with a **Featured Project Deep-Dive / Observable Outcome Highlight** focusing on real delivered systems (e.g. Rassani POS or Ethletia) with observable technical challenges, implemented solutions, and visual deliverables.
    - Zero fabricated reviews, zero stock quotes.

---

### Section 8: Frequently Asked Questions (`faqs`)
- **Classification**: **REFINE**
- **Current Structure**: Centered headline with 5 interactive accordion items covering client profile, engagement model, service selection, timeline, and day-to-day collaboration.
- **What Works**:
  - Addresses critical pre-sales questions and procurement requirements.
  - Fully accessible, keyboard-navigable accordion implementation.
- **What Should Change & Proposed Sasvale Treatment**:
  - Retain the 1-column accessible accordion layout.
  - Style dividers with hairline rules (`--color-border`) and subtle gold active highlights.
  - Number each FAQ item (`01`, `02`, `03`...) in `Manrope` for clear editorial rhythm.
  - Accessible `+` / `−` icon indicators using SVG hairline strokes.

---

### Section 9: Global Footer & Contact Intake Form
- **Classification**: **REFINE**
- **Current Structure**: Split layout: Left callout ("Have an idea? Let's Build it Together!") + Right form submitting to `/api/contact` + Bottom navigation pills, direct email, and legal copyright bar.
- **What Works**:
  - Outstanding conversion architecture: on-page intake form prevents bounce to an external contact URL.
  - Direct founder contact pill (`hello@sasvale.com`).
  - Three-tier legal footer (Privacy Policy, Refund Policy, Terms & Conditions).
- **What Looks Too FleekBiz-Like**:
  - Background image slice hacks on form fields (`sort-trigger-3-1.png`).
  - Giant background glow orb (`new-project-1.png`).
- **What Should Change & Proposed Sasvale Treatment**:
  - Style form inputs with modern pure CSS dark surfaces and Champagne Gold focus rings (`border-color: var(--color-border-brand)`).
  - Add official **Sasvale** branding and tagline: `"Strategy. Automation. Scale."`.
  - Add official verified social channels: X/Twitter (`@sasvaleltd`), LinkedIn (`@sasvaleltd`), Instagram (`@sasvaleltd`), GitHub (`@sasvaleltd`).
  - Update copyright to: `© 2026 Sasvale. Strategy. Automation. Scale. All rights reserved.`

---

## 3. Summary Delta Matrix

| # | Section | Legacy FleekBiz Heritage | Action | Revised Sasvale Redesign Direction (Architectural Editorial) |
|---|:---|:---|:---:|:---|
| **0** | Header | Generic F mark, purple pill links, 64px button | **REFINE** | Official SASVALE wordmark, Manrope/DM Sans, gold active states, 8px button |
| **1** | Hero | Centered text, dispersion bubble, purple text | **RECOMPOSE** | Asymmetric 55/45 split, Manrope typography, curated real project composition (NO 3D orbs) |
| **2** | Trust Bar | Unverified FleekBiz client logos & claims | **REPLACE** | Selected Work & Capabilities Introduction; unverified FleekBiz clients removed |
| **3** | Disciplines | 3 floating generic cards, purple borders | **RECOMPOSE** | Architectural Capabilities Index with numbered editorial rows and deliverables |
| **4** | 3 Stages | Stacked text blocks + Elementor laptop image | **REFINE** | 01-02-03 Architectural Progression Framework + authentic Sasvale system visuals |
| **5** | Why Us | 5 identical stacked card blocks | **RECOMPOSE** | Asymmetric Differentiator Grid (Direct Senior Engineering, Transparent Architecture) |
| **6** | Numbers | Unverified claims (50+, 200 clients) | **RECOMPOSE** | Verified Technical & Delivery Standards (Next.js RSC, WCAG 2.2 AA, Code Ownership) |
| **7** | Reviews | Unverified FleekBiz testimonials | **RECOMPOSE** | Editorial proof architecture; unverified reviews removed; case highlight fallback |
| **8** | FAQs | 5-item collapsible accordion | **REFINE** | Accessible numbered editorial accordion with hairline borders and gold indicators |
| **9** | Footer | Intake form with legacy sliced image borders | **REFINE** | Pure CSS dark glass inputs, official Sasvale branding, verified @sasvaleltd socials |
