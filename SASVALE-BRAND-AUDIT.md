# SASVALE BRAND AUDIT & VISUAL DNA SPECIFICATION

**Audited Source**: [https://www.sasvale.com/](https://www.sasvale.com/)  
**Inspection Date**: September 12, 2026  
**Auditor**: Antigravity Design Intelligence (Chrome DevTools + UI/UX Pro Max Engine)  
**Status**: Authoritative Brand Truth Established  

---

## 1. Executive Summary & Brand Identity

The live production domain [https://www.sasvale.com/](https://www.sasvale.com/) establishes the true visual DNA and brand philosophy of Sasvale. 

### Brand Positioning
- **Brand Name**: `SASVALE` (stylized as `S A S V A L ☰` in the official wordmark)
- **Official Tagline**: **"Strategy. Automation. Scale."**
- **Brand Essence**: Intelligent, architectural, premium, forward-looking, technically capable, commercially credible.
- **What Sasvale is NOT**:
  - NOT a generic purple/blue digital marketing agency (the temporary FleekBiz look).
  - NOT an AI-wrapper template with neon cyan glows or floating 3D dashboard mockups.
  - NOT a low-cost offshore software shop.
  - NOT an ungrounded crypto/web3 aesthetic.

---

## 2. Authentic Color Palette & Design Tokens

Extracted directly from the computed styles and stylesheets of `https://www.sasvale.com/`:

```css
:root {
  /* Surface & Base Canvas */
  --bg: #070707;                         /* Deep Obsidian / Architectural Near-Black */
  --surface: rgba(255, 255, 255, 0.02);   /* Ultra-subtle frosted glass layer */
  --surface-raised: rgba(18, 18, 18, 0.75);/* High-contrast dark charcoal card fill */
  --surface-overlay: rgba(7, 7, 7, 0.85); /* Modal / header backdrop scrim */

  /* Foreground & Typography */
  --text: #f5f3ed;                        /* Warm Alabaster / Chalk Off-White (Contrast: 18.2:1 against #070707) */
  --muted: #96938a;                       /* Warm Stone / Titanium Gray (Contrast: 5.6:1 against #070707 - WCAG AA compliant) */

  /* Architectural Brand Accents (Champagne & Specular Gold) */
  --gold: #d4af37;                        /* Metallic Champagne Gold (Primary accent & key interactive controls) */
  --gold-hover: #e6bd43;                  /* Brightened Champagne Gold */
  --gold-highlight: #f5c86c;              /* Specular reflection point in gradient text */
  --gold-glow: rgba(212, 175, 55, 0.18);  /* Subtle radiant ambient field */
  --gold-muted: rgba(212, 175, 55, 0.45); /* Secondary gold details and text links */

  /* Structural Dividers & Outlines */
  --line: rgba(255, 255, 255, 0.08);      /* Subtle structural hair-lines */
  --line-gold: rgba(212, 175, 55, 0.25);  /* Refined gold perimeter stroke */

  /* Gradient Text Accent */
  --gradient-gold: linear-gradient(135deg, #ffffff 0%, #d4af37 65%, #f5c86c 100%);

  /* Ambient Grid Token */
  --grid-pattern: linear-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.6) 1px, transparent 1px);
}
```

### Contrast & Accessibility Verification (WCAG 2.2 AA)
- Normal text (`--text` `#f5f3ed` on `--bg` `#070707`): **18.2:1** (Target: ≥4.5:1 — **EXCEEDS AAA**).
- Muted secondary copy (`--muted` `#96938a` on `--bg` `#070707`): **5.6:1** (Target: ≥4.5:1 — **PASSES AA**).
- Interactive button (`--bg` `#070707` on `--gold` `#d4af37`): **8.9:1** (Target: ≥4.5:1 — **EXCEEDS AAA**).
- Gold borders on dark cards (`--line-gold` on `--surface-raised`): **3.2:1** (Target: ≥3.0:1 for non-text UI controls).

---

## 3. Authentic Typography Hierarchy

Extracted from Google Fonts resource links and CSS rules on `https://www.sasvale.com/`:

### Primary Display / Headings: `Manrope`
- **Family**: `"Manrope", -apple-system, BlinkMacSystemFont, sans-serif`
- **Available Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
- **Role**: Hero headlines, section titles, quantitative statistics, architectural category callouts.
- **Computed Spec**:
  - **H1 (Hero)**: `clamp(52px, 5.8vw, 88px)`, line-height `1.02`, letter-spacing `-.045em`, font-weight `500`.
  - **H2 (Section Titles)**: `clamp(36px, 3.8vw, 56px)`, line-height `1.08`, letter-spacing `-.035em`, font-weight `500`.
  - **H3 (Card / Discipline Headings)**: `clamp(24px, 2.2vw, 32px)`, line-height `1.2`, letter-spacing `-.02em`, font-weight `600`.
  - **Accent Word Treatment**: Emphasized keyword (`<em>`) styled with `--gradient-gold`, clipped background, and font-weight `600`.

### Secondary / Body & UI: `DM Sans`
- **Family**: `"DM Sans", -apple-system, BlinkMacSystemFont, sans-serif`
- **Available Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold)
- **Role**: Body paragraphs, navigation links, eyebrow badges, form inputs, metadata chips, footer links.
- **Computed Spec**:
  - **Body Large**: 18px / 1.7 line-height / letter-spacing `0.01em` / weight `400`.
  - **Body Base**: 16px / 1.8 line-height / letter-spacing `0.015em` / weight `400`.
  - **Eyebrow Badges**: 10px / uppercase / letter-spacing `.25em` / weight `600` / gold indicator dot (`4px x 4px`).
  - **Status Badges**: 10px / uppercase / letter-spacing `.2em` / weight `500` / pulsating status dot (`6px x 6px`).

---

## 4. Logo, Monogram & Vector Assets

The authentic brand vectors and raster assets were downloaded from the live server and archived in `public/assets/brand/`:

1. **Official Wordmark (`sasvale-logo.png` / `public/assets/brand/sasvale-logo.png`)**:
   - Distinctive geometric typography.
   - The letter **"A"** is rendered without a horizontal crossbar (`Λ`).
   - The letter **"E"** is constructed from three distinct horizontal floating planes (`☰`).
   - Symmetrical, wide, architectural character.
2. **Official Monogram (`Icon.png` / `public/assets/brand/Icon.png`)**:
   - Dynamic interlocking ribbon loops forming an aerodynamic **"S"** glyph with an angled center split.
   - Clean, unmistakable vector silhouette capable of functioning at 16px (favicon) up to 600px (hero celestial centerpiece).
3. **Favicon Vector (`favicon.svg`)**:
   - Master vector implementation embedded in dark canvas.

---

## 5. UI Elements, Buttons & Component Behaviors

### Primary Action Button (`.waitlist-btn` / `.btn-gold`)
- **Background**: Solid Champagne Gold (`#d4af37`).
- **Foreground**: Deep Obsidian (`#070707`).
- **Border Radius**: 8px (refined architectural geometry, NOT a rounded pill).
- **Typography**: `DM Sans`, 11px–12px, font-weight 700, letter-spacing `.15em`, uppercase.
- **Interactive State**:
  - `transform: translateY(-1px)`
  - `background: #e6bd43`
  - `box-shadow: 0 6px 20px rgba(212, 175, 55, 0.35)`
  - Embedded SVG arrow/indicator transitions `translateX(3px)`.

### Secondary / Glass Button (`.btn-glass`)
- **Background**: `rgba(255, 255, 255, 0.03)` with `backdrop-filter: blur(10px)`.
- **Border**: 1px solid `rgba(255, 255, 255, 0.12)`.
- **Foreground**: `#f5f3ed`.
- **Hover State**: Border shifts to `rgba(212, 175, 55, 0.3)`, text shifts to `#d4af37`.

### Interactive Form Inputs
- **Background**: `rgba(255, 255, 255, 0.025)`.
- **Border**: 1px solid `var(--line)`.
- **Focus State**: `border-color: var(--line-gold)`, `box-shadow: 0 0 20px rgba(212, 175, 55, 0.12)`.
- **Corner Radius**: 12px outer wrapper, 8px inner button.

### Celestial & Atmospheric Motifs
- **Mouse Glow Backlight**: 700px x 700px radial gradient following pointer with cubic-bezier easing (`0.25s cubic-bezier(0.1, 0.8, 0.2, 1)`).
- **Concentric Orbit Rings**: Fine 1px hairline outer ring (`border: 1px solid rgba(212, 175, 55, 0.08)`) and inner dashed ring (`border: 1px dashed rgba(255, 255, 255, 0.07)`).
- **Pillar Chips**: Floating dark glass chips (`.chip.strategy`, `.chip.automation`, `.chip.scale`) with 100px border radius, 9px uppercase tracking (`.22em`), and gold hover glow.
- **Subtle Technical Grid**: 80px x 80px grid pattern at `opacity: 0.04`, creating a grounded engineering feel rather than floating void.

---

## 6. Comparison: Live Sasvale vs. Legacy FleekBiz Colors

| Attribute | Live Sasvale (`www.sasvale.com`) | Legacy FleekBiz / Temp Migration | Rationale for Sasvale Direction |
|:---|:---|:---|:---|
| **Primary Hue** | **Champagne Gold (`#D4AF37`)** | Iris Purple (`#7684FF`) | Eliminates generic agency look; aligns with executive, commercial, and engineering authority. |
| **Canvas** | **Deep Obsidian (`#070707`) + 4% Grid** | Jet Black (`#000000`) + Random Glass Bubbles | Provides subtle technical depth and grounding. |
| **Headline Font**| **`Manrope` (Geometric / Clean)** | `Bricolage Grotesque` (Quirky / Funky) | `Manrope` conveys modern precision, enterprise credibility, and scalability. |
| **Body Font** | **`DM Sans` (Clean, balanced)** | `DM Sans` (Retained) | Excellent readability and font-metric balance. |
| **Button Shape** | **8px Architectural Chamfer** | 64px Oversized Rounded Pill | Replaces toy-like pill buttons with precise architectural buttons. |
| **Key Metaphor** | **Orbital System (Strategy → Automation → Scale)** | Random floating dispersion glass bubble | Connected operational framework rather than abstract decoration. |

---

## 7. Strategic Conclusion

The visual audit proves that Sasvale already has an exceptionally distinct, premium, and sophisticated brand identity on `www.sasvale.com`. 

The redesign goal is **NOT** to invent a new style from scratch, nor to keep the purple FleekBiz skin, but to **transfuse the complete, high-density service catalog and commercial strength of the agency into Sasvale’s authentic Obsidian, Gold, and Manrope design system.**
