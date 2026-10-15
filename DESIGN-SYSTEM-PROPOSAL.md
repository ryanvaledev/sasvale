# SASVALE DESIGN SYSTEM PROPOSAL: ARCHITECTURAL EDITORIAL

**Version**: 2.1 (Refined Consultancy Baseline)  
**Foundation Stack**: Next.js 16 App Router, React 19, Tailwind CSS v4 Semantic Custom Properties  
**Brand Foundation**: [https://www.sasvale.com/](https://www.sasvale.com/)  
**Design Intelligence**: UI/UX Pro Max + Agentic SEO + WCAG 2.2 AA Engine  

---

## 1. Design System Philosophy & Principles

The Sasvale design system is built on the principles of **Architectural Editorial**:
- **Typography First**: Hierarchical authority established through `Manrope` (headings) and `DM Sans` (body), not decorative shapes.
- **Layout Flexibility**: Cards are **NOT** the default layout primitive. Sections employ diverse structures: asymmetric splits, editorial columns, numbered lists, full-width bands, and data tables.
- **Dignified Whitespace**: Intentional negative space creates breathing room, prestige, and focus.
- **Architectural Framing**: Crisp 1px hairline rules (`rgba(255, 255, 255, 0.08)`) and subtle gold indicators (`rgba(212, 175, 55, 0.25)`) replace heavy borders and glowing halos.
- **Zero AI Clichés**: No floating 3D spheres, no celestial orbs, no mouse-following blur fields, no fake terminal windows, no repetitive gradient text.

---

## 2. Token Architecture & Semantic CSS Variables

```css
:root {
  /* ==========================================================================
     Tier 1: Primitives (Immutable Values)
     ========================================================================== */
  --primitive-obsidian: #070707;          /* Canvas: Deep Obsidian / Architectural Near-Black */
  --primitive-charcoal-1: #0f0f11;        /* Raised surface level 1 */
  --primitive-charcoal-2: #161619;        /* Raised surface level 2 */
  --primitive-alabaster: #f5f3ed;         /* Primary text: Warm Alabaster (18.2:1 contrast) */
  --primitive-stone-muted: #96938a;       /* Secondary text: Stone Titanium (5.6:1 contrast) */
  --primitive-gold: #d4af37;              /* Brand Accent: Metallic Champagne Gold */
  --primitive-gold-hover: #e6bd43;        /* Interactive Gold Hover */
  --primitive-gold-specular: #f5c86c;     /* Specular Highlight */
  --primitive-line-subtle: rgba(255, 255, 255, 0.08); /* Structural 1px rule */
  --primitive-line-gold: rgba(212, 175, 55, 0.25);   /* Active / focused indicator */

  /* ==========================================================================
     Tier 2: Semantic Surface & Background Tokens
     ========================================================================== */
  --color-bg-primary: var(--primitive-obsidian);
  --color-bg-secondary: var(--primitive-charcoal-1);
  --color-surface: rgba(255, 255, 255, 0.02);
  --color-surface-raised: var(--primitive-charcoal-1);
  --color-surface-hover: var(--primitive-charcoal-2);

  /* ==========================================================================
     Tier 2: Semantic Text Tokens
     ========================================================================== */
  --color-text-primary: var(--primitive-alabaster);
  --color-text-secondary: var(--primitive-stone-muted);
  --color-text-inverse: var(--primitive-obsidian);
  --color-text-gold: var(--primitive-gold);

  /* ==========================================================================
     Tier 2: Semantic Brand & Border Tokens
     ========================================================================== */
  --color-brand: var(--primitive-gold);
  --color-brand-hover: var(--primitive-gold-hover);
  --color-border: var(--primitive-line-subtle);
  --color-border-brand: var(--primitive-line-gold);

  /* ==========================================================================
     Tier 2: Structural Container Measures
     ========================================================================== */
  --container-max-width: 1380px;
  --header-height: 88px;
  --header-height-mobile: 74px;
}
```

---

## 3. Typography Scale & Hierarchical Specifications

### Font Pairing
- **Display / Heading Family**: `"Manrope", -apple-system, BlinkMacSystemFont, sans-serif`
  - Purpose: Bold, architectural, authoritative titles.
  - Tracking: Strict negative tracking (`-0.03em` to `-0.045em`) to ensure editorial cohesion at large sizes.
- **Body / Interface Family**: `"DM Sans", -apple-system, BlinkMacSystemFont, sans-serif`
  - Purpose: Humanist warmth, open counters, optimal readability for long-form case studies and technical narrative.

### Typography Scale

| Token Class | Font Family | Desktop (≥1280px) | Tablet (768px–1279px) | Mobile (<768px) | Line Height | Letter Spacing | Font Weight |
|:---|:---|:---|:---|:---|:---|:---|:---|
| **`.hero-display`** | `Manrope` | 72px–80px | 52px–56px | 40px–44px | 1.05 | `-0.04em` | 500 / 600 |
| **`.section-h1`** | `Manrope` | 48px–52px | 38px–42px | 30px–34px | 1.10 | `-0.035em` | 500 / 600 |
| **`.section-h2`** | `Manrope` | 32px–36px | 26px–28px | 22px–24px | 1.20 | `-0.025em` | 500 / 600 |
| **`.subheading`** | `Manrope` | 22px–24px | 20px–22px | 18px–20px | 1.30 | `-0.015em` | 500 |
| **`.body-lead`** | `DM Sans` | 17px–18px | 16px–17px | 15px–16px | 1.75 | `0.01em` | 400 |
| **`.body-base`** | `DM Sans` | 16px | 15px | 15px | 1.80 | `0.015em` | 400 |
| **`.body-small`** | `DM Sans` | 14px | 14px | 13px | 1.60 | `0.02em` | 400 |
| **`.eyebrow`** | `DM Sans` | 11px | 11px | 10px | 1.20 | `0.2em` (uppercase) | 600 |
| **`.numeral-index`**| `Manrope` | 14px–16px | 14px | 12px | 1.00 | `0.1em` | 600 |

---

## 4. Spacing Rhythm & Layout Rules

Built on an **8px geometric baseline**:
- `--space-1`: `4px` (hairline offsets, badge micro-insets)
- `--space-2`: `8px` (button vertical padding, gap micro-units)
- `--space-3`: `12px` (badge padding, input vertical insets)
- `--space-4`: `16px` (standard mobile padding, button horizontal insets)
- `--space-6`: `24px` (grid element separation)
- `--space-8`: `32px` (desktop module padding, medium gutters)
- `--space-12`: `48px` (section sub-block intervals)
- `--space-16`: `64px` (tablet section intervals)
- `--space-24`: `96px` (desktop section intervals)
- `--space-32`: `128px` (hero and major narrative milestone separation)

### Container Architecture
- **Desktop Container**: `width: min(1380px, calc(100% - 80px)); margin: 0 auto;`
- **Mobile Container**: `width: calc(100% - 40px); margin: 0 auto;`

---

## 5. Component Specifications & Layout Diversity

### 5.1 Global Header (`<SiteHeader />`)
- **Structure**: Sticky bar, `height: 88px`, subtle 12px blur on Deep Obsidian canvas, 1px bottom border (`--color-border`).
- **Left**: Official `SASVALE` geometric wordmark (`public/assets/brand/sasvale-logo.png`).
- **Center**: Clean navigation items in `DM Sans` (13px, weight 500, letter-spacing `0.06em`) with subtle gold underline hover transitions.
- **Right**:
  - Direct inquiry channel indicator.
  - Primary CTA: 8px solid Champagne Gold button (`.btn-gold`: "Schedule Strategy Call").

### 5.2 Button Hierarchy
1. **Primary Action Button (`.btn-gold`)**:
   - Background: `var(--color-brand)` (`#d4af37`).
   - Text: `var(--color-bg-primary)` (`#070707`), font-weight 700, uppercase, 11px, letter-spacing `0.14em`.
   - Radius: **8px architectural corner** (strictly NOT a 64px pill).
   - Padding: `12px 24px`.
   - Hover: `background: var(--color-brand-hover); transform: translateY(-1px);`.
2. **Secondary Architectural Button (`.btn-secondary`)**:
   - Background: `transparent`.
   - Border: `1px solid var(--color-border)`.
   - Text: `var(--color-text-primary)` (`#f5f3ed`), 13px, font-weight 500.
   - Radius: 8px.
   - Hover: `border-color: var(--color-border-brand); color: var(--color-brand);`.
3. **Editorial Text Link (`.btn-link`)**:
   - Text: `var(--color-brand)`, inline-flex with horizontal SVG arrow (`gap: 8px`).
   - Hover: Arrow moves `translateX(4px)` with smooth cubic-bezier transition.

### 5.3 Avoiding "Cards Everywhere" (Layout Diversity)
- **Numbered Editorial Rows**: For capabilities and processes (`01`, `02`, `03` with horizontal hairline dividers).
- **Asymmetric Split Viewports**: For the Hero and Client Maturity sections.
- **Editorial Portfolio Rows**: Full-width alternating rows with sticky metadata on one side and large media crops on the other.
- **Structured Data Columns**: For technical deliverables and engagement frameworks.

### 5.4 Form Intake Controls
- **Styling**: Pure CSS dark inputs with no image-slice hacks.
- **Border**: `1px solid var(--color-border)`.
- **Corner Radius**: `8px`.
- **Focus State**: `border-color: var(--color-border-brand); outline: none; box-shadow: 0 0 0 1px var(--color-border-brand);`.
- **Placeholder**: `color: rgba(245, 243, 237, 0.4); font-family: var(--font-body);`.

---

## 6. Anti-AI Design Rules & Aesthetic Controls

The following constraints are strictly enforced to preserve genuine consultancy authority:
- ❌ **NO Floating 3D Spheres or Celestial Orbs**: No rotating rings or sci-fi planetary animations in the hero.
- ❌ **NO Mouse-Following Glow Halos**: No cursor-tracking radial blur fields across cards.
- ❌ **NO Generic Bento Grids**: No 3x3 grids of unequal rounded boxes filled with floating icons.
- ❌ **NO Toy-Like Pill Buttons**: 64px rounded pills from FleekBiz are strictly banned; all action buttons use 8px architectural geometry.
- ❌ **NO Gratuitous Gold Gradients**: Gold gradients are forbidden from body text and recurring headings. Text is clean Warm Alabaster (`#F5F3ED`); gold is an accent color, not a wallpaper.
- ❌ **NO Fake Marquees**: No runaway auto-scrolling logo bars.
- ❌ **NO Unverified Testimonials**: Reviews from FleekBiz (James Berkley, D.A. Rowe, Sydney Cummings, Wen Qian) are removed. Testimonial areas must only publish verified quotes or fall back to case study highlights.
- ❌ **NO Invented Metrics**: No "50+ projects", "200 clients", or fabricated conversion percentages.

---

## 7. WCAG 2.2 AA Accessibility Specification

- **Text Contrast**: 
  - Primary text (`#F5F3ED` on `#070707`): **18.2:1** (exceeds AAA requirement).
  - Secondary text (`#96938A` on `#070707`): **5.6:1** (exceeds AA 4.5:1 requirement).
  - Gold buttons (`#070707` on `#D4AF37`): **11.4:1** (exceeds AAA requirement).
- **Focus Indicators**: 2px solid `var(--color-brand)` with `2px outline-offset` on all interactive links, inputs, and buttons.
- **Keyboard Navigation**: Complete tab traversal for all interactive elements, mobile drawer toggles, and form controls.
- **Reduced Motion**: Full support for `@media (prefers-reduced-motion: reduce)` disabling all hover translations and scroll transitions.
- **Screen Reader Semantics**: Complete ARIA attributes (`aria-expanded`, `aria-label`, `<nav>`, `<main>`, `<header>`, `<footer>`).
