"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface CarouselCard {
  id: string;
  category: string;
  title: string;
  badge: string;
  colorGlow: string;
  visualType: "orb" | "nodes" | "rocket" | "hud" | "cyborg" | "ugc" | "catalog";
}

const CAROUSEL_ITEMS: CarouselCard[] = [
  {
    id: "start-with-problem",
    category: "STRATEGY",
    title: "Start With the Problem",
    badge: "Understand first",
    colorGlow: "from-amber-500/20 via-yellow-500/10 to-transparent",
    visualType: "orb",
  },
  {
    id: "build-right-thing",
    category: "PRODUCT",
    title: "Build the Right Thing",
    badge: "Purpose before features",
    colorGlow: "from-amber-500/20 via-orange-500/10 to-transparent",
    visualType: "nodes",
  },
  {
    id: "design-around-people",
    category: "DESIGN",
    title: "Design Around People",
    badge: "Clarity over complexity",
    colorGlow: "from-stone-400/20 via-amber-500/10 to-transparent",
    visualType: "rocket",
  },
  {
    id: "connect-systems",
    category: "SYSTEMS",
    title: "Connect the Systems",
    badge: "Make information flow",
    colorGlow: "from-amber-500/20 via-yellow-500/10 to-transparent",
    visualType: "hud",
  },
  {
    id: "automate-repetitive",
    category: "AUTOMATION",
    title: "Automate the Repetitive",
    badge: "Less manual work",
    colorGlow: "from-yellow-500/20 via-amber-500/10 to-transparent",
    visualType: "cyborg",
  },
  {
    id: "engineer-for-scale",
    category: "ENGINEERING",
    title: "Engineer for Scale",
    badge: "Built for what comes next",
    colorGlow: "from-amber-500/20 via-orange-500/10 to-transparent",
    visualType: "ugc",
  },
  {
    id: "keep-improving",
    category: "EVOLUTION",
    title: "Keep Improving",
    badge: "Build. Learn. Refine.",
    colorGlow: "from-stone-400/20 via-amber-500/10 to-transparent",
    visualType: "catalog",
  },
];

export default function BuiltAiFirstCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const totalSlides = CAROUSEL_ITEMS.length;

  const getCardStep = useCallback(() => {
    if (!scrollRef.current) return 384;
    const firstChild = scrollRef.current.firstElementChild as HTMLElement | null;
    return firstChild ? firstChild.offsetWidth + 24 : 384;
  }, []);

  const updateScrollState = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const step = getCardStep();
    const index = Math.round(scrollLeft / step);

    setActiveIndex(Math.min(Math.max(index, 0), totalSlides - 1));
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, [getCardStep, totalSlides]);

  // Scroll listener on the horizontal card track
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  // Global Mouse Drag Handlers for smooth sliding
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !scrollRef.current) return;
      const dx = e.clientX - dragStartXRef.current;
      if (Math.abs(dx) > 3) {
        hasDraggedRef.current = true;
      }
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      scrollRef.current.scrollLeft = Math.max(
        0,
        Math.min(maxScroll, dragStartScrollLeftRef.current - dx)
      );
    };

    const onMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDragging(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    dragStartScrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  // Smooth slide to index
  const scrollToIndex = (index: number) => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const step = getCardStep();
    const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;
    const targetScrollLeft = Math.max(0, Math.min(maxScroll, index * step));

    scrollEl.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
  };

  const handlePrev = () => {
    scrollToIndex(Math.max(0, activeIndex - 1));
  };

  const handleNext = () => {
    scrollToIndex(Math.min(totalSlides - 1, activeIndex + 1));
  };

  return (
    <section
      ref={sectionRef}
      id="core-philosophy"
      className="relative w-full py-14 sm:py-16 lg:py-20 bg-[#05070c] border-t border-white/[0.08] overflow-hidden"
      aria-label="Core Philosophy Feature Carousel"
    >
      {/* Ambient Atmospheric Backdrop */}
      <div 
        className="pointer-events-none absolute inset-0 overflow-hidden" 
        aria-hidden="true"
      >
        {/* Subtle gold glow tracking active cards area */}
        <div 
          className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[720px] h-[480px] bg-radial from-[#C6A56B]/[0.06] via-transparent to-transparent blur-3xl transition-transform duration-700 ease-out" 
          style={{ transform: `translate(${(activeIndex - 3) * 45}px, -50%)` }}
        />
        {/* Subtle cool blue/cyan glow on secondary edges */}
        <div className="absolute -bottom-12 -right-12 w-[600px] h-[420px] bg-radial from-[#3B82F6]/[0.035] via-[#22D3EE]/[0.015] to-transparent blur-3xl" />
        <div className="absolute -top-12 -left-12 w-[500px] h-[350px] bg-radial from-[#C6A56B]/[0.03] to-transparent blur-3xl" />
        {/* Hairline technical datum lines */}
        <div className="absolute top-[26%] left-0 right-0 h-px border-b border-white/[0.02]" />
        <div className="absolute bottom-[18%] left-0 right-0 h-px border-b border-white/[0.02]" />
      </div>

      <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 xl:pr-16 2xl:pr-12 relative z-10">
        {/* Top Header Row: Headline & Carousel Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
            <div>
              <span className="text-xs font-sans font-semibold uppercase tracking-[0.24em] text-slate-400 block mb-2 sm:mb-3">
                CORE PHILOSOPHY
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] 2xl:text-[54px] font-bold tracking-tight text-white leading-[1.1]">
                Build the right thing.
                <br />
                <span className="text-[#C6A56B]">Then make it work harder.</span>
              </h2>
            </div>

            {/* Controls: Slide Indicator, Progress Bar, & Arrow Buttons */}
            <div className="flex items-center gap-4 sm:gap-6 self-start md:self-end">
              {/* Slide Tracker (e.g. 01 / 07) */}
              <div className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-slate-400 flex items-center gap-2">
                <span className="text-white">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span>/</span>
                <span>{String(totalSlides).padStart(2, "0")}</span>
              </div>

              {/* Indicator Progress Line */}
              <div className="w-16 sm:w-24 2xl:w-28 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-[#C6A56B] transition-all duration-300 ease-out"
                  style={{
                    width: `${((activeIndex + 1) / totalSlides) * 100}%`,
                  }}
                />
              </div>

              {/* Circular Arrow Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={!canScrollLeft}
                  aria-label="Previous slide"
                  className="w-9 h-9 2xl:w-10 2xl:h-10 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center text-white transition-all duration-200 hover:border-[#C6A56B] hover:bg-white/[0.06] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  disabled={!canScrollRight}
                  aria-label="Next slide"
                  className="w-9 h-9 2xl:w-10 2xl:h-10 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center text-white transition-all duration-200 hover:border-[#C6A56B] hover:bg-white/[0.06] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Container (Horizontal Scroll with Natural Momentum) */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            className={`flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-3 -my-3 ${
              isDragging ? "cursor-grabbing select-none" : "cursor-grab"
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CAROUSEL_ITEMS.map((item) => (
              <div
                key={item.id}
                className="w-[280px] sm:w-[320px] lg:w-[330px] xl:w-[340px] 2xl:w-[360px] h-[375px] sm:h-[395px] xl:h-[395px] 2xl:h-[510px] shrink-0 group relative rounded-[22px] 2xl:rounded-[24px] bg-[#080c15] border border-white/[0.12] overflow-hidden flex flex-col justify-between transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) hover:-translate-y-2 hover:border-[#C6A56B]/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_16px_36px_rgba(0,0,0,0.65)] hover:shadow-[0_20px_50px_-10px_rgba(198,165,107,0.2)]"
              >
                {/* Top-Left Ambient Subtle Glow */}
                <div
                  className="pointer-events-none absolute -top-8 -left-8 w-32 h-32 rounded-full blur-2xl opacity-15 bg-[#C6A56B]"
                  aria-hidden="true"
                />

                {/* Bottom-Right Ambient Atmosphere Glow */}
                <div
                  className={`pointer-events-none absolute -bottom-10 -right-10 w-44 h-44 rounded-full blur-3xl opacity-20 bg-gradient-to-tl ${item.colorGlow}`}
                  aria-hidden="true"
                />

                {/* Bottom Glowing Border Line */}
                <div
                  className="pointer-events-none absolute bottom-0 left-4 right-1/4 h-[2px] rounded-full bg-gradient-to-r from-[#C6A56B] via-[#C6A56B]/70 to-transparent shadow-[0_0_12px_2px_rgba(198,165,107,0.35)]"
                  aria-hidden="true"
                />

                {/* Card Header */}
                <div className="p-5 sm:p-6 xl:p-6 2xl:p-7 relative z-10">
                  {/* Category Tag */}
                  <span className="text-[10px] 2xl:text-[11px] font-sans uppercase tracking-[0.22em] text-slate-400 font-bold block mb-2 sm:mb-3">
                    {item.category}
                  </span>

                  {/* Card Title */}
                  <h3 className="font-display text-xl sm:text-2xl 2xl:text-3xl font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-[#C6A56B] transition-colors">
                    {item.title}
                  </h3>

                  {/* Metric / Principle Capsule Chip */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] 2xl:text-[12px] font-sans font-medium text-slate-300 tracking-tight shadow-sm group-hover:border-[#C6A56B]/30 group-hover:text-white transition-all">
                    {item.badge}
                  </div>
                </div>

                {/* Card Visual Area */}
                <div className="relative w-full h-[160px] sm:h-[180px] xl:h-[180px] 2xl:h-[260px] overflow-hidden flex items-center justify-center p-3 sm:p-4 pointer-events-none">
                  
                  {/* 1. Strategy: Start With the Problem (Precision Aperture & Crosshairs) */}
                  {item.visualType === "orb" && (
                    <div className="relative w-44 h-44 flex items-center justify-center">
                      {/* Concentric Calibration Rings */}
                      <div className="absolute inset-0 rounded-full border border-white/[0.08]" />
                      <div className="absolute inset-4 rounded-full border border-dashed border-[#C6A56B]/30 animate-spin" style={{ animationDuration: "35s" }} />
                      <div className="absolute inset-9 rounded-full border border-white/[0.12] bg-[#0c101b]/60" />
                      <div className="absolute inset-14 rounded-full border border-[#C6A56B]/50 bg-[#C6A56B]/[0.08]" />

                      {/* Hairline Crosshairs */}
                      <div className="absolute inset-x-2 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      <div className="absolute inset-y-2 left-1/2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                      {/* Core Focal Center */}
                      <div className="relative z-10 w-3 h-3 rounded-full bg-[#C6A56B] shadow-[0_0_14px_rgba(198,165,107,0.8)]" />

                      {/* Micro Diagnostic Badges */}
                      <span className="absolute top-2 left-3 text-[9px] font-mono text-slate-500 tracking-widest uppercase">
                        LOCATE · 01
                      </span>
                      <span className="absolute bottom-2 right-3 text-[9px] font-mono text-[#C6A56B]/80 tracking-wider uppercase">
                        ROOT CAUSE
                      </span>
                    </div>
                  )}

                  {/* 2. Product: Build the Right Thing (Purposeful Architectural Graph) */}
                  {item.visualType === "nodes" && (
                    <div className="relative w-full h-full flex items-center justify-center px-2">
                      <svg className="w-full h-full" viewBox="0 0 320 200" fill="none">
                        {/* Connecting Structural Pathways */}
                        <path
                          d="M 60 50 C 110 50, 110 90, 160 90"
                          stroke="rgba(255,255,255,0.18)"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M 260 50 C 210 50, 210 90, 160 90"
                          stroke="rgba(255,255,255,0.18)"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M 160 90 C 160 140, 210 140, 260 145"
                          stroke="#C6A56B"
                          strokeWidth="1.75"
                          strokeDasharray="4 3"
                        />
                        <path
                          d="M 160 90 C 160 140, 110 140, 60 145"
                          stroke="rgba(255,255,255,0.18)"
                          strokeWidth="1.5"
                        />

                        {/* Top Left: NEED */}
                        <g transform="translate(25, 35)">
                          <rect width="68" height="28" rx="6" fill="#0d111a" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                          <circle cx="12" cy="14" r="2.5" fill="#94a3b8" />
                          <text x="40" y="18" fill="#e2e8f0" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">NEED</text>
                        </g>

                        {/* Top Right: SCOPE */}
                        <g transform="translate(225, 35)">
                          <rect width="68" height="28" rx="6" fill="#0d111a" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                          <circle cx="12" cy="14" r="2.5" fill="#94a3b8" />
                          <text x="40" y="18" fill="#e2e8f0" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">SCOPE</text>
                        </g>

                        {/* Center: CORE LOGIC */}
                        <g transform="translate(115, 74)">
                          <rect width="90" height="32" rx="8" fill="#121826" stroke="#C6A56B" strokeWidth="1.5" />
                          <circle cx="14" cy="16" r="3" fill="#C6A56B" />
                          <text x="52" y="20" fill="#ffffff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">CORE LOGIC</text>
                        </g>

                        {/* Bottom Left: VALIDATE */}
                        <g transform="translate(25, 130)">
                          <rect width="72" height="28" rx="6" fill="#0d111a" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                          <text x="36" y="18" fill="#94a3b8" fontSize="10" fontWeight="500" textAnchor="middle" fontFamily="sans-serif">VALIDATE</text>
                        </g>

                        {/* Bottom Right: VALUE */}
                        <g transform="translate(225, 130)">
                          <rect width="70" height="28" rx="6" fill="#15181f" stroke="#C6A56B" strokeWidth="1.2" />
                          <circle cx="58" cy="14" r="2.5" fill="#C6A56B" />
                          <text x="32" y="18" fill="#f8fafc" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">VALUE</text>
                        </g>
                      </svg>
                    </div>
                  )}

                  {/* 3. Design: Design Around People (Ergonomic Interaction Spline & UI Hierarchy) */}
                  {item.visualType === "rocket" && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative w-56 h-36 rounded-xl border border-white/[0.08] bg-[#080c15] p-3 flex flex-col justify-between">
                        {/* Wireframe UI Hierarchy Backplate */}
                        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                          <div className="w-12 h-1.5 rounded-full bg-white/20" />
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 my-auto">
                          <div className="h-9 rounded-md bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                            <div className="w-6 h-1 rounded bg-white/10" />
                          </div>
                          <div className="h-9 rounded-md bg-[#C6A56B]/[0.08] border border-[#C6A56B]/30 flex items-center justify-center">
                            <div className="w-6 h-1 rounded bg-[#C6A56B]/60" />
                          </div>
                          <div className="h-9 rounded-md bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                            <div className="w-6 h-1 rounded bg-white/10" />
                          </div>
                        </div>

                        {/* Ergonomic User Journey Arc */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 224 144" fill="none">
                          <path
                            d="M 24 105 C 70 105, 90 48, 130 48 C 170 48, 185 85, 205 85"
                            stroke="url(#designCurve)"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <defs>
                            <linearGradient id="designCurve" x1="0%" y1="100%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.4" />
                              <stop offset="60%" stopColor="#C6A56B" stopOpacity="0.9" />
                              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                            </linearGradient>
                          </defs>

                          {/* Focus Landmark */}
                          <circle cx="130" cy="48" r="6" stroke="#C6A56B" strokeWidth="1.5" fill="#05070c" />
                          <circle cx="130" cy="48" r="2.5" fill="#C6A56B" />
                        </svg>

                        {/* Footer Status */}
                        <div className="flex items-center justify-between text-[8px] font-mono text-slate-500 pt-1 border-t border-white/[0.05]">
                          <span>INTENT</span>
                          <span className="text-[#C6A56B]/80 font-semibold">HUMAN CENTRIC</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 4. Systems: Connect the Systems (Unified Data Bus Architecture) */}
                  {item.visualType === "hud" && (
                    <div className="relative w-full h-full flex items-center justify-center px-3">
                      <div className="relative w-60 h-36 rounded-xl border border-white/[0.08] bg-[#0a0e18] p-3 flex flex-col justify-between">
                        {/* Bus Header */}
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                            SYSTEM BUS
                          </span>
                          <span className="text-[8px] font-mono text-[#C6A56B] uppercase font-semibold">
                            IN SYNC · ACTIVE
                          </span>
                        </div>

                        {/* Multi-System Connected Nodes */}
                        <div className="relative py-2 flex items-center justify-between">
                          {/* Central Interconnect Line */}
                          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-[1.5px] bg-gradient-to-r from-white/10 via-[#C6A56B]/80 to-white/10" />

                          {/* Node 1: API */}
                          <div className="relative z-10 px-2.5 py-1.5 rounded-md bg-[#080c15] border border-white/15 text-[9px] font-mono font-semibold text-slate-300">
                            API
                          </div>

                          {/* Node 2: CORE SYNC */}
                          <div className="relative z-10 px-3 py-2 rounded-lg bg-[#121826] border border-[#C6A56B] shadow-[0_0_12px_rgba(198,165,107,0.25)] flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-[#C6A56B] animate-pulse" />
                            <span className="text-[9px] font-mono font-bold text-white">SYNC</span>
                          </div>

                          {/* Node 3: STORE */}
                          <div className="relative z-10 px-2.5 py-1.5 rounded-md bg-[#080c15] border border-white/15 text-[9px] font-mono font-semibold text-slate-300">
                            STORE
                          </div>
                        </div>

                        {/* Pipeline Telemetry Footer */}
                        <div className="flex items-center justify-between text-[8px] font-mono text-slate-500 pt-1 border-t border-white/[0.05]">
                          <span>PACKETS: UNIFIED</span>
                          <span className="text-slate-400">ZERO DATA SILOS</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 5. Automation: Automate the Repetitive (Orchestrated Pipeline Loop) */}
                  {item.visualType === "cyborg" && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative w-56 h-36 rounded-xl border border-white/[0.08] bg-[#080c15] p-3 flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5">
                          <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                            AUTOMATION ENGINE
                          </span>
                          <span className="text-[8px] font-mono text-[#C6A56B] font-semibold">
                            LOOP · 24/7
                          </span>
                        </div>

                        {/* Sequential 3-Step Pipeline */}
                        <div className="flex items-center justify-between gap-1.5 py-1">
                          <div className="flex-1 p-2 rounded-lg bg-[#0e1422] border border-white/[0.1] text-center">
                            <span className="text-[8px] font-mono text-slate-400 block mb-0.5">EVENT</span>
                            <span className="text-[10px] font-sans font-bold text-white">TRIGGER</span>
                          </div>

                          <span className="text-slate-500 text-xs font-mono">→</span>

                          <div className="flex-1 p-2 rounded-lg bg-[#141a29] border border-[#C6A56B]/60 text-center shadow-[0_0_10px_rgba(198,165,107,0.15)]">
                            <span className="text-[8px] font-mono text-[#C6A56B] block mb-0.5">RULES</span>
                            <span className="text-[10px] font-sans font-bold text-white">EXECUTE</span>
                          </div>

                          <span className="text-slate-500 text-xs font-mono">→</span>

                          <div className="flex-1 p-2 rounded-lg bg-[#0e1422] border border-white/[0.1] text-center">
                            <span className="text-[8px] font-mono text-slate-400 block mb-0.5">ACTION</span>
                            <span className="text-[10px] font-sans font-bold text-white">OUTPUT</span>
                          </div>
                        </div>

                        {/* Pipeline Metric */}
                        <div className="flex items-center justify-between text-[8px] font-mono text-slate-500 pt-1 border-t border-white/[0.05]">
                          <span>FRICTION: REMOVED</span>
                          <span className="text-[#C6A56B]/90 font-medium">RELIABLE REPETITION</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 6. Engineering: Engineer for Scale (Modular Stack Architecture) */}
                  {item.visualType === "ugc" && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative w-56 h-36 flex flex-col justify-center gap-2">
                        {/* Tier 3: Edge / Gateway */}
                        <div className="relative px-3 py-1.5 rounded-lg bg-[#121826] border border-[#C6A56B]/60 shadow-[0_0_14px_rgba(198,165,107,0.15)] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" />
                            <span className="text-[9px] font-mono font-bold text-white uppercase tracking-wider">
                              TIER 03 · RESILIENT EDGE
                            </span>
                          </div>
                          <span className="text-[8px] font-mono text-[#C6A56B]">GLOBAL</span>
                        </div>

                        {/* Tier 2: Services / Workflow */}
                        <div className="relative px-3 py-1.5 rounded-lg bg-[#0e1422] border border-white/[0.12] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                            <span className="text-[9px] font-mono font-semibold text-slate-200 uppercase tracking-wider">
                              TIER 02 · DISTRIBUTED LOGIC
                            </span>
                          </div>
                          <span className="text-[8px] font-mono text-slate-500">MODULAR</span>
                        </div>

                        {/* Tier 1: Core Foundation */}
                        <div className="relative px-3 py-1.5 rounded-lg bg-[#0a0e18] border border-white/[0.08] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                            <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                              TIER 01 · PERSISTENT DATA
                            </span>
                          </div>
                          <span className="text-[8px] font-mono text-slate-500">STABLE</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 7. Evolution: Keep Improving (Refine Loop & CTA) */}
                  {item.visualType === "catalog" && (
                    <div className="relative w-full h-full flex flex-col items-center justify-center pointer-events-auto">
                      {/* Orbital Refinement Dial */}
                      <div className="relative w-36 h-36 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-dashed border-[#C6A56B]/30 animate-spin" style={{ animationDuration: "25s" }} />
                        <div className="absolute inset-3 rounded-full border border-white/[0.08]" />

                        {/* Center Interactive Button */}
                        <Link
                          href="/approach"
                          aria-label="Explore SASVALE Approach"
                          className="relative z-10 w-16 h-16 rounded-full bg-[#0c101b] border border-[#C6A56B] flex items-center justify-center text-[#C6A56B] shadow-[0_0_24px_rgba(198,165,107,0.25)] group-hover:bg-[#C6A56B] group-hover:text-black group-hover:shadow-[0_0_36px_rgba(198,165,107,0.5)] transition-all duration-300 cursor-pointer"
                        >
                          <svg className="w-6 h-6 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </Link>
                      </div>

                      <span className="mt-2 text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                        EXPLORE OUR APPROACH →
                      </span>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
