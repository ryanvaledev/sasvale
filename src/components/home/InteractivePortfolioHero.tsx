"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";

interface ShowcaseProject {
  id: string;
  name: string;
  category: string;
  image: string;
  alt: string;
  deliverable: string;
}

const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "edschool",
    name: "Engineers & Doctors School",
    category: "Digital Commerce",
    image: "/assets/projects/edschol.png",
    alt: "edschol eduction platform and digital storefront for online learning",
    deliverable: "Headless E-Commerce Platform",
  },
  {
    id: "ethletia",
    name: "Ethletia",
    category: "Custom Software",
    image: "/assets/projects/ethletia.png",
    alt: "Ethletia custom software solution for apparel catalog and checkout workflows",
    deliverable: "Real-Time Transaction Engine",
  },
  {
    id: "tbssalon",
    name: "TBS Salon",
    category: "Brand & Booking",
    image: "/assets/projects/tbssalon.png",
    alt: "TBS Salon luxury brand and appointment scheduling platform",
    deliverable: "Digital Brand & Appointment Flow",
  },
  {
    id: "roger-edwards-motors",
    name: "Roger Edwards Motors",
    category: "E-Commerce Architecture",
    image: "/assets/projects/roger.png",
    alt: "Roger Edwards Motors automotive e-commerce platform",
    deliverable: "High-Conversion Mobile Storefront",
  },
  {
    id: "edcoaching4",
    name: "Engineers & Doctors School Coaching",
    category: "Operational Systems",
    image: "/assets/projects/edcoaching4.png",
    alt: "Engineers & Doctors School coaching platform",
    deliverable: "Multi-Terminal Sync Architecture",
  },
  {
    id: "rassanitech",
    name: "Rassani Tech",
    category: "Brand Platform",
    image: "/assets/projects/rassanitech.png",
    alt: "Rassani Tech brand and customer reservation system",
    deliverable: "Contemporary Visual Identity",
  },
  {
    id: "wind-deflectors",
    name: "Wind Deflectors",
    category: "Brand Platform",
    image: "/assets/projects/wind.png",
    alt: "TBS Salon studio showcase and customer reservation system",
    deliverable: "Contemporary Visual Identity",
  },
  {
    id: "zenfia",
    name: "Zenfia",
    category: "Brand Platform",
    image: "/assets/projects/zenfia.png",
    alt: "TBS Salon studio showcase and customer reservation system",
    deliverable: "Contemporary Visual Identity",
  },
  // {
  //   id: "onlinegoodies",
  //   name: "Online Goodies",
  //   category: "Brand Platform",
  //   image: "/assets/projects/onlinegoodies.png",
  //   alt: "TBS Salon studio showcase and customer reservation system",
  //   deliverable: "Contemporary Visual Identity",
  // },
];

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("theme-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("theme-change", callback);
  };
}

function getThemeSnapshot(): boolean {
  if (typeof document === "undefined") return true;
  return !(
    document.documentElement.getAttribute("data-theme") === "light" ||
    document.documentElement.classList.contains("theme-light")
  );
}

function getServerThemeSnapshot(): boolean {
  return true;
}

export default function InteractivePortfolioHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const isDark = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Throttled subtle cursor motion handler
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
        const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
        setMousePos({ x, y });
      });
    };

    // Scroll handler for gentle vertical parallax
    const handleScroll = () => {
      setScrollY(window.scrollY || 0);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      className="hero-section-container relative pt-6 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20 overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: isDark ? "#05070c" : "#F3F0E8",
      }}
      aria-label="Sasvale Introduction and Featured Projects"
    >
      {/* ================================================================== */}
      {/* LAYER 1: GIANT SASVALE WATERMARK (DEEP ARCHITECTURAL BACKGROUND)   */}
      {/* ================================================================== */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center select-none overflow-hidden"
        aria-hidden="true"
        style={{
          transform: prefersReducedMotion
            ? "none"
            : `translate3d(${mousePos.x * 12}px, ${mousePos.y * 8 - Math.min(scrollY * 0.08, 20)}px, 0)`,
          transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <svg
          viewBox="0 0 1600 360"
          className="w-[140vw] sm:w-[130vw] md:w-[120vw] xl:w-[110vw] min-w-[1000px] max-w-[2200px] h-auto overflow-visible select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Subtle Champagne Gold / Warm-White Watermark Fill */}
            <linearGradient id="sasvaleWatermarkFill" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C6A56B" stopOpacity={isDark ? "0.02" : "0.025"} />
              <stop offset="25%" stopColor={isDark ? "#F3F0E8" : "#0B0B0B"} stopOpacity={isDark ? "0.03" : "0.015"} />
              <stop offset="50%" stopColor="#C6A56B" stopOpacity={isDark ? "0.04" : "0.035"} />
              <stop offset="75%" stopColor={isDark ? "#F3F0E8" : "#0B0B0B"} stopOpacity={isDark ? "0.03" : "0.015"} />
              <stop offset="100%" stopColor="#C6A56B" stopOpacity={isDark ? "0.02" : "0.025"} />
            </linearGradient>

            {/* Subtle Warm-White / Champagne Architectural Outline */}
            <linearGradient id="sasvaleWatermarkStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={isDark ? "#F3F0E8" : "#0B0B0B"} stopOpacity={isDark ? "0.08" : "0.07"} />
              <stop offset="25%" stopColor="#C6A56B" stopOpacity={isDark ? "0.14" : "0.22"} />
              <stop offset="50%" stopColor={isDark ? "#F3F0E8" : "#0B0B0B"} stopOpacity={isDark ? "0.18" : "0.12"} />
              <stop offset="75%" stopColor="#C6A56B" stopOpacity={isDark ? "0.14" : "0.22"} />
              <stop offset="100%" stopColor={isDark ? "#F3F0E8" : "#0B0B0B"} stopOpacity={isDark ? "0.08" : "0.07"} />
            </linearGradient>
          </defs>

          {/* Architectural Oversized Wordmark */}
          <text
            x="50%"
            y="54%"
            textAnchor="middle"
            dominantBaseline="central"
            fill="url(#sasvaleWatermarkFill)"
            stroke="url(#sasvaleWatermarkStroke)"
            strokeWidth="1.2"
            letterSpacing="0.22em"
            className="font-display font-black uppercase select-none"
            style={{
              fontSize: "240px",
              fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
            }}
          >
            SASVALE
          </text>
        </svg>
      </div>

      {/* ================================================================== */}
      {/* LAYER 2: SUBTLE TECHNICAL GRID                                     */}
      {/* ================================================================== */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] select-none"
        aria-hidden="true"
        style={{
          backgroundImage: isDark
            ? `
              linear-gradient(to right, rgba(243, 240, 232, 0.018) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(243, 240, 232, 0.018) 1px, transparent 1px)
            `
            : `
              linear-gradient(to right, rgba(11, 11, 11, 0.045) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(11, 11, 11, 0.045) 1px, transparent 1px)
            `,
          backgroundSize: "96px 96px",
          backgroundPosition: "center center",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 36%, black 25%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 36%, black 25%, transparent 80%)",
        }}
      />

      {/* ================================================================== */}
      {/* LAYER 3: ARCHITECTURAL GEOMETRIC SYSTEM (ARCS, RINGS, DATUMS)      */}
      {/* ================================================================== */}
      <div
        className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center select-none overflow-hidden"
        aria-hidden="true"
        style={{
          transform: prefersReducedMotion
            ? "none"
            : `translate3d(${mousePos.x * -6}px, ${mousePos.y * -4}px, 0)`,
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <svg
          viewBox="0 0 1600 720"
          className="w-[140vw] sm:w-[130vw] md:w-[120vw] xl:w-[110vw] min-w-[1100px] max-w-[2200px] h-auto object-cover select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroDatumGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={isDark ? "#F3F0E8" : "#0B0B0B"} stopOpacity="0" />
              <stop offset="15%" stopColor={isDark ? "#F3F0E8" : "#0B0B0B"} stopOpacity={isDark ? "0.025" : "0.04"} />
              <stop offset="50%" stopColor="#C6A56B" stopOpacity={isDark ? "0.07" : "0.15"} />
              <stop offset="85%" stopColor={isDark ? "#F3F0E8" : "#0B0B0B"} stopOpacity={isDark ? "0.025" : "0.04"} />
              <stop offset="100%" stopColor={isDark ? "#F3F0E8" : "#0B0B0B"} stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Large Architectural Orbit Circle */}
          <circle
            cx="800"
            cy="270"
            r="540"
            stroke={isDark ? "rgba(198, 165, 107, 0.035)" : "rgba(198, 165, 107, 0.09)"}
            strokeWidth="1"
          />

          {/* Secondary Dashed Technical Concentric Circle */}
          <circle
            cx="800"
            cy="270"
            r="360"
            stroke={isDark ? "rgba(243, 240, 232, 0.028)" : "rgba(11, 11, 11, 0.05)"}
            strokeWidth="1"
            strokeDasharray="4 8"
          />

          {/* Inner Core Guide Circle */}
          <circle
            cx="800"
            cy="270"
            r="200"
            stroke={isDark ? "rgba(198, 165, 107, 0.04)" : "rgba(198, 165, 107, 0.10)"}
            strokeWidth="1"
          />

          {/* Upper Technical Compass Arc */}
          <path
            d="M 260 270 A 540 540 0 0 1 1340 270"
            stroke={isDark ? "rgba(243, 240, 232, 0.035)" : "rgba(11, 11, 11, 0.055)"}
            strokeWidth="1"
            strokeDasharray="2 6"
          />

          {/* Horizontal Datum Lines */}
          <line x1="0" y1="110" x2="1600" y2="110" stroke="url(#heroDatumGrad)" strokeWidth="1" />
          <line x1="0" y1="270" x2="1600" y2="270" stroke="url(#heroDatumGrad)" strokeWidth="1" />
          <line x1="0" y1="430" x2="1600" y2="430" stroke="url(#heroDatumGrad)" strokeWidth="1" />

          {/* Vertical Technical Plumb Lines */}
          <line x1="800" y1="10" x2="800" y2="600" stroke={isDark ? "rgba(243, 240, 232, 0.025)" : "rgba(11, 11, 11, 0.045)"} strokeWidth="1" strokeDasharray="6 6" />
          <line x1="260" y1="50" x2="260" y2="530" stroke={isDark ? "rgba(243, 240, 232, 0.02)" : "rgba(11, 11, 11, 0.04)"} strokeWidth="1" />
          <line x1="1340" y1="50" x2="1340" y2="530" stroke={isDark ? "rgba(243, 240, 232, 0.02)" : "rgba(11, 11, 11, 0.04)"} strokeWidth="1" />

          {/* Crosshair Intersections (+) in subtle champagne gold */}
          <path d="M 254 110 H 266 M 260 104 V 116" stroke="#C6A56B" strokeWidth="1.2" strokeOpacity={isDark ? 0.35 : 0.45} />
          <path d="M 1334 110 H 1346 M 1340 104 V 116" stroke="#C6A56B" strokeWidth="1.2" strokeOpacity={isDark ? 0.35 : 0.45} />
          <path d="M 794 110 H 806 M 800 104 V 116" stroke="#C6A56B" strokeWidth="1.2" strokeOpacity={isDark ? 0.4 : 0.5} />

          <path d="M 792 270 H 808 M 800 262 V 278" stroke="#C6A56B" strokeWidth="1.4" strokeOpacity={isDark ? 0.5 : 0.6} />
          <circle cx="800" cy="270" r="2.5" fill="#C6A56B" fillOpacity={isDark ? 0.6 : 0.7} />

          <path d="M 254 430 H 266 M 260 424 V 436" stroke="#C6A56B" strokeWidth="1.2" strokeOpacity={isDark ? 0.35 : 0.45} />
          <path d="M 1334 430 H 1346 M 1340 424 V 436" stroke="#C6A56B" strokeWidth="1.2" strokeOpacity={isDark ? 0.35 : 0.45} />

          {/* Architectural Annotations & Coordinates */}
          <text x="270" y="103" fill={isDark ? "#A8A49B" : "#5F5B54"} fillOpacity={isDark ? 0.4 : 0.65} fontSize="8.5" fontFamily="monospace" letterSpacing="0.18em">
            SYS.DATUM // 01
          </text>
          <text x="1330" y="103" textAnchor="end" fill={isDark ? "#A8A49B" : "#5F5B54"} fillOpacity={isDark ? 0.4 : 0.65} fontSize="8.5" fontFamily="monospace" letterSpacing="0.18em">
            REF // 40.71°N
          </text>
          <text x="270" y="445" fill={isDark ? "#A8A49B" : "#5F5B54"} fillOpacity={isDark ? 0.35 : 0.6} fontSize="8.5" fontFamily="monospace" letterSpacing="0.18em">
            GEOM // V2.8
          </text>
          <text x="1330" y="445" textAnchor="end" fill="#C6A56B" fillOpacity={isDark ? 0.45 : 0.65} fontSize="8.5" fontFamily="monospace" letterSpacing="0.18em">
            SCALE // 1.00
          </text>
        </svg>
      </div>

      {/* ================================================================== */}
      {/* LAYER 4: ATMOSPHERIC LIGHTING & READABILITY SHIELD                 */}
      {/* ================================================================== */}
      {/* Primary Warm Champagne / Gold Ambient Lighting */}
      <div
        className="pointer-events-none absolute inset-0 z-[4] select-none transition-all duration-700 ease-out"
        aria-hidden="true"
        style={{
          background: prefersReducedMotion
            ? `radial-gradient(circle at 50% 34%, ${isDark ? "rgba(198, 165, 107, 0.08)" : "rgba(198, 165, 107, 0.09)"} 0%, transparent 48%)`
            : `radial-gradient(circle at ${50 + mousePos.x * 4}% ${34 + mousePos.y * 4}%, ${isDark ? "rgba(198, 165, 107, 0.085)" : "rgba(198, 165, 107, 0.09)"} 0%, transparent 48%)`,
        }}
      />

      {/* Secondary Neutral / Subtle Cyan Cool Atmospheric Depth (Dark Mode Only) */}
      {isDark && (
        <div
          className="hero-dark-overlay pointer-events-none absolute inset-0 z-[4] select-none"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 10%, rgba(20, 80, 120, 0.06) 0%, transparent 55%)",
          }}
        />
      )}

      {/* Readability Shield Overlay: Ensures 100% Crisp Headline Contrast (Dark Mode Only) */}
      {isDark && (
        <div
          className="hero-dark-overlay pointer-events-none absolute inset-0 z-[4] select-none"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 36%, rgba(5, 7, 12, 0.35) 0%, rgba(5, 7, 12, 0.8) 100%)",
          }}
        />
      )}

      {/* ================================================================== */}
      {/* LAYER 5: REFINED HORIZONTAL RULE WITH TRAVELING GOLD LIGHT LINE    */}
      {/* ================================================================== */}
      <div
        className="pointer-events-none absolute top-[28%] sm:top-[30%] left-0 right-0 h-[1px] z-[5] overflow-hidden select-none"
        aria-hidden="true"
      >
        <div
          className="h-full w-full relative"
          style={{
            backgroundImage: isDark
              ? "linear-gradient(to right, transparent, rgba(243, 240, 232, 0.035), transparent)"
              : "linear-gradient(to right, transparent, rgba(11, 11, 11, 0.06), transparent)",
          }}
        >
          <div
            className="animate-hero-gleam absolute top-0 h-full w-48 sm:w-64 bg-gradient-to-r from-transparent via-[#C6A56B]/40 to-transparent"
          />
        </div>
      </div>

      {/* ================================================================== */}
      {/* LAYER 6: HERO EDITORIAL CONTENT & CTA LAYER (Z-10)                 */}
      {/* ================================================================== */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Main Centered Content with Subtle Entrance Animation */}
        <div className="max-w-4xl mx-auto text-center pt-4 sm:pt-6 lg:pt-8 animate-hero-enter">
          {/* Eyebrow Pill */}
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-5 sm:mb-6 backdrop-blur-sm transition-colors duration-300 ${
              isDark
                ? "border-white/10 bg-white/[0.02]"
                : "border-black/10 bg-white/70 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
            }`}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#C6A56B] animate-pulse"
              aria-hidden="true"
            />
            <span
              className={`text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase ${
                isDark ? "text-[#C6A56B]" : "text-[#9e7f45]"
              }`}
            >
              STRATEGY. AUTOMATION. SCALE.
            </span>
          </div>

          {/* High-Impact Centered Headline */}
          <h1
            className={`font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[66px] 2xl:text-[72px] font-semibold leading-[1.08] tracking-[-0.035em] mb-5 sm:mb-6 transition-colors duration-300 ${
              isDark ? "text-[#F3F0E8]" : "text-[#0B0B0B]"
            }`}
          >
            Websites. Software. Automation. <br className="hidden sm:inline" />
            <span className={isDark ? "text-[#C6A56B]" : "text-[#9e7f45]"}>
              Systems that work.
            </span>
          </h1>

          {/* Concise Supporting Narrative */}
          <p
            className={`text-base sm:text-lg lg:text-lg xl:text-xl leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 font-normal font-body transition-colors duration-300 ${
              isDark ? "text-[#A8A49B]" : "text-[#4A463F]"
            }`}
          >
            SASVALE designs and builds digital products, e-commerce platforms, custom software, business systems, and AI-powered workflows around real operational needs.
          </p>

          {/* Centered Modern Luxury CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-10 sm:mb-14">
            {/* Primary CTA: Start a conversation */}
            <Link
              href="/contact"
              aria-label="Start a conversation with Sasvale"
              className="group relative w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3.5 h-[52px] sm:h-[54px] px-7 rounded-full text-[14px] sm:text-[15px] font-semibold tracking-[-0.01em] text-slate-950 bg-white hover:bg-slate-100 transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_24px_-2px_rgba(198,165,107,0.35),0_2px_8px_rgba(0,0,0,0.4)] border border-white/20"
            >
              <span>Start a conversation</span>
              <span
                className="w-7 h-7 rounded-full bg-slate-950/10 flex items-center justify-center transition-all duration-300 group-hover:bg-slate-950 group-hover:scale-105 shrink-0"
                aria-hidden="true"
              >
                <svg
                  className="w-3.5 h-3.5 text-slate-950 group-hover:text-[#C6A56B] transition-all duration-300 transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 14 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" />
                </svg>
              </span>
            </Link>

            {/* Secondary CTA: View our work */}
            <Link
              href="/work"
              aria-label="View our work"
              className="group relative w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3.5 h-[52px] sm:h-[54px] px-6 sm:px-7 rounded-full text-[14px] sm:text-[15px] font-medium tracking-[-0.01em] text-slate-200 hover:text-white bg-white/[0.035] hover:bg-white/[0.07] backdrop-blur-md border border-white/14 hover:border-[#C6A56B]/50 transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_20px_rgba(198,165,107,0.2)]"
            >
              <span>View our work</span>
              <span
                className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C6A56B]/20 group-hover:border-[#C6A56B]/40 group-hover:scale-105 shrink-0"
                aria-hidden="true"
              >
                <svg
                  className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#C6A56B] transition-all duration-300 transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 14 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 2.5v9M3.5 8l3.5 3.5L10.5 8" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* VISUAL PROJECT STRIP / SLIDER AT HERO BOTTOM (CONTINUOUS MARQUEE)   */}
      {/* ================================================================== */}
      <div
        className="w-full overflow-hidden relative pt-4 pb-2 z-10"
        role="region"
        aria-label="Sasvale portfolio showcase carousel. Hover to pause."
        tabIndex={0}
      >
        {/* Soft Left & Right Fade Masks for Cinematic Edge Blending */}
        <div
          className="hero-fade-left pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 lg:w-48 z-10"
          style={{
            background: isDark
              ? "linear-gradient(to right, #05070c 0%, rgba(5, 7, 12, 0.7) 50%, transparent 100%)"
              : "linear-gradient(to right, #F3F0E8 0%, rgba(243, 240, 232, 0.8) 50%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="hero-fade-right pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 lg:w-48 z-10"
          style={{
            background: isDark
              ? "linear-gradient(to left, #05070c 0%, rgba(5, 7, 12, 0.7) 50%, transparent 100%)"
              : "linear-gradient(to left, #F3F0E8 0%, rgba(243, 240, 232, 0.8) 50%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Marquee Track (Duplicated for Seamless Infinite Loop) */}
        <div className="animate-hero-marquee flex gap-5 sm:gap-6 lg:gap-8 px-4">
          {/* First Loop */}
          {SHOWCASE_PROJECTS.map((item, index) => (
            <div
              key={`loop1-${item.id}-${index}`}
              className="w-[310px] sm:w-[420px] lg:w-[490px] shrink-0 group rounded-3xl p-2.5 sm:p-3 bg-[#0A0E17]/95 light:bg-white border border-white/[0.08] light:border-black/[0.08] relative overflow-hidden transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) hover:-translate-y-2 hover:border-[#C6A56B]/50 light:hover:border-[#C6A56B]/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_20px_44px_-12px_rgba(0,0,0,0.7)] light:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_54px_-10px_rgba(198,165,107,0.22)] select-none"
            >
              {/* Specular Top Hairline Gradient on Hover */}
              <div
                className="pointer-events-none absolute top-0 inset-x-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#C6A56B]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                aria-hidden="true"
              />

              {/* Visual Frame / Vitrine Bezel */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-[#07090e] border border-white/[0.06] light:border-black/[0.04]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 310px, (max-width: 1024px) 420px, 490px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Cinematic Vignette */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-40 transition-opacity duration-500"
                  aria-hidden="true"
                />

                {/* Floating Category Glass Pill */}
                <div className="absolute top-3 sm:top-3.5 right-3 sm:right-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-md bg-black/55 light:bg-white/85 border border-white/15 light:border-black/10 text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.16em] text-[#C6A56B] light:text-[#9e7f45] uppercase shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B] animate-pulse" />
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Editorial Information Deck */}
              <div className="pt-3.5 pb-1.5 px-2 sm:px-2.5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#F3F0E8] light:text-[#0B0B0B] group-hover:text-[#C6A56B] transition-colors duration-300 truncate">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5 text-xs sm:text-[13px] text-[#A8A49B] light:text-[#5F5B54]">
                    <span className="w-1 h-1 rounded-full bg-[#C6A56B]/70 shrink-0" />
                    <span className="truncate">{item.deliverable}</span>
                  </div>
                </div>

                {/* Interactive Action Indicator */}
                <div className="w-9 h-9 rounded-full border border-white/10 light:border-black/10 bg-white/[0.03] light:bg-black/[0.03] group-hover:border-[#C6A56B]/60 group-hover:bg-[#C6A56B] group-hover:text-black transition-all duration-300 flex items-center justify-center shrink-0 text-[#A8A49B] group-hover:shadow-[0_0_16px_rgba(198,165,107,0.4)]">
                  <svg
                    className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 16 16"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 11.5L11.5 4.5M11.5 4.5H6.5M11.5 4.5V9.5" />
                  </svg>
                </div>
              </div>
            </div>
          ))}

          {/* Second Loop (Exact Duplicate for Continuous Seam-Free Flow) */}
          {SHOWCASE_PROJECTS.map((item, index) => (
            <div
              key={`loop2-${item.id}-${index}`}
              className="w-[310px] sm:w-[420px] lg:w-[490px] shrink-0 group rounded-3xl p-2.5 sm:p-3 bg-[#0A0E17]/95 light:bg-white border border-white/[0.08] light:border-black/[0.08] relative overflow-hidden transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) hover:-translate-y-2 hover:border-[#C6A56B]/50 light:hover:border-[#C6A56B]/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_20px_44px_-12px_rgba(0,0,0,0.7)] light:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_54px_-10px_rgba(198,165,107,0.22)] select-none"
              aria-hidden="true"
            >
              {/* Specular Top Hairline Gradient on Hover */}
              <div
                className="pointer-events-none absolute top-0 inset-x-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#C6A56B]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                aria-hidden="true"
              />

              {/* Visual Frame / Vitrine Bezel */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-[#07090e] border border-white/[0.06] light:border-black/[0.04]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 310px, (max-width: 1024px) 420px, 490px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Cinematic Vignette */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-40 transition-opacity duration-500"
                  aria-hidden="true"
                />

                {/* Floating Category Glass Pill */}
                <div className="absolute top-3 sm:top-3.5 right-3 sm:right-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-md bg-black/55 light:bg-white/85 border border-white/15 light:border-black/10 text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.16em] text-[#C6A56B] light:text-[#9e7f45] uppercase shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B] animate-pulse" />
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Editorial Information Deck */}
              <div className="pt-3.5 pb-1.5 px-2 sm:px-2.5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#F3F0E8] light:text-[#0B0B0B] group-hover:text-[#C6A56B] transition-colors duration-300 truncate">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5 text-xs sm:text-[13px] text-[#A8A49B] light:text-[#5F5B54]">
                    <span className="w-1 h-1 rounded-full bg-[#C6A56B]/70 shrink-0" />
                    <span className="truncate">{item.deliverable}</span>
                  </div>
                </div>

                {/* Interactive Action Indicator */}
                <div className="w-9 h-9 rounded-full border border-white/10 light:border-black/10 bg-white/[0.03] light:bg-black/[0.03] group-hover:border-[#C6A56B]/60 group-hover:bg-[#C6A56B] group-hover:text-black transition-all duration-300 flex items-center justify-center shrink-0 text-[#A8A49B] group-hover:shadow-[0_0_16px_rgba(198,165,107,0.4)]">
                  <svg
                    className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 16 16"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 11.5L11.5 4.5M11.5 4.5H6.5M11.5 4.5V9.5" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
