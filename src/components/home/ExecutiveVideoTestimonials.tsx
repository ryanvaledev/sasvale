"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

interface BuildingNote {
  id: string;
  number: string;
  category: string;
  title: string;
  body: string;
  label: string;
  visualType: "discovery" | "workflow" | "automation" | "product" | "engineering";
}

const NOTES: BuildingNote[] = [
  {
    id: "ecommerce-discovery",
    number: "01",
    category: "E-COMMERCE",
    title: "The problem isn't always the checkout.",
    body: "Sometimes customers struggle long before they reach it. Product discovery, navigation, and information architecture can matter just as much.",
    label: "PRODUCT DISCOVERY",
    visualType: "discovery",
  },
  {
    id: "business-systems-workflow",
    number: "02",
    category: "BUSINESS SYSTEMS",
    title: "The right system starts with the workflow.",
    body: "Before choosing a technology, understand how information actually moves through the business.",
    label: "SYSTEMS THINKING",
    visualType: "workflow",
  },
  {
    id: "automation-process",
    number: "03",
    category: "AUTOMATION",
    title: "Don't automate a broken process.",
    body: "First simplify the workflow. Then automate the parts that genuinely need to happen repeatedly.",
    label: "AUTOMATION",
    visualType: "automation",
  },
  {
    id: "digital-products-features",
    number: "04",
    category: "DIGITAL PRODUCTS",
    title: "More features don't always make a better product.",
    body: "Good product decisions often come from deciding what doesn't need to be built.",
    label: "PRODUCT THINKING",
    visualType: "product",
  },
  {
    id: "engineering-foundations",
    number: "05",
    category: "ENGINEERING",
    title: "Build for what comes next.",
    body: "A system should solve today's problem without making tomorrow's changes unnecessarily difficult.",
    label: "ENGINEERING",
    visualType: "engineering",
  },
];

export default function ExecutiveVideoTestimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const total = NOTES.length;

  const getCardStep = useCallback(() => {
    if (!railRef.current) return 404;
    const firstChild = railRef.current.firstElementChild as HTMLElement | null;
    return firstChild ? firstChild.offsetWidth + 24 : 404;
  }, []);

  // Update active slide indicator
  const updateScrollState = useCallback(() => {
    if (!railRef.current) return;
    const { scrollLeft } = railRef.current;
    const step = getCardStep();
    const cur = Math.round(scrollLeft / step);
    if (cur >= 0 && cur < total) {
      setActiveIdx(cur);
    }
  }, [getCardStep, total]);

  // Window scroll listener:
  // While user scrolls vertically through this pinned section, translate vertical
  // progress into smooth horizontal sliding of the card rail.
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState, { passive: true });

    const onWindowScroll = () => {
      const sectionEl = sectionRef.current;
      const railEl = railRef.current;
      if (!sectionEl || !railEl || isDraggingRef.current) return;

      const rect = sectionEl.getBoundingClientRect();
      const totalScrollable = sectionEl.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const maxScrollLeft = railEl.scrollWidth - railEl.clientWidth;
      if (maxScrollLeft <= 0) return;

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
        railEl.scrollLeft = progress * maxScrollLeft;
      }
    };

    window.addEventListener("scroll", onWindowScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, [updateScrollState]);

  // Global Mouse Drag Handlers for smooth sliding
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !railRef.current) return;
      const dx = e.clientX - dragStartXRef.current;
      if (Math.abs(dx) > 3) {
        hasDraggedRef.current = true;
      }
      const maxScroll = railRef.current.scrollWidth - railRef.current.clientWidth;
      railRef.current.scrollLeft = Math.max(
        0,
        Math.min(maxScroll, dragStartScrollLeftRef.current - dx)
      );
    };

    const onMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDragging(false);

      // Sync window scroll position if section is pinned
      const sectionEl = sectionRef.current;
      const railEl = railRef.current;
      if (sectionEl && railEl) {
        const rect = sectionEl.getBoundingClientRect();
        const totalScrollable = sectionEl.offsetHeight - window.innerHeight;
        const maxScroll = railEl.scrollWidth - railEl.clientWidth;
        if (
          totalScrollable > 0 &&
          maxScroll > 0 &&
          rect.top <= 0 &&
          rect.bottom >= window.innerHeight
        ) {
          const progress = railEl.scrollLeft / maxScroll;
          const targetY = window.scrollY + rect.top + progress * totalScrollable;
          window.scrollTo({ top: targetY, behavior: "auto" });
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!railRef.current) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    dragStartScrollLeftRef.current = railRef.current.scrollLeft;
  };

  // Jump to specific slide and sync window scroll position seamlessly
  const scrollToSlide = (idx: number) => {
    const railEl = railRef.current;
    const sectionEl = sectionRef.current;
    if (!railEl) return;

    const step = getCardStep();
    const maxScroll = railEl.scrollWidth - railEl.clientWidth;
    const targetScrollLeft = Math.max(0, Math.min(maxScroll, idx * step));

    railEl.scrollTo({ left: targetScrollLeft, behavior: "smooth" });

    // If section is pinned, sync window.scrollY seamlessly
    if (sectionEl && maxScroll > 0) {
      const rect = sectionEl.getBoundingClientRect();
      const totalScrollable = sectionEl.offsetHeight - window.innerHeight;
      if (totalScrollable > 0 && rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const progress = targetScrollLeft / maxScroll;
        const targetY = window.scrollY + rect.top + progress * totalScrollable;
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    }
  };

  const handlePrev = () => {
    const prevIdx = (activeIdx - 1 + total) % total;
    scrollToSlide(prevIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeIdx + 1) % total;
    scrollToSlide(nextIdx);
  };

  return (
    <section
      ref={sectionRef}
      id="building-notes"
      className="relative w-full h-[230vh] bg-[#05070c] border-t border-white/[0.08]"
      aria-label="Building Notes - What the work teaches us"
    >
      {/* Sticky Viewport: Pins locked while cards slide horizontally on scroll */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden pt-28 sm:pt-32 pb-4">
        
        {/* Ambient Top Glow */}
        <div
          className="pointer-events-none absolute top-10 left-1/3 w-[650px] h-[400px] rounded-full blur-[160px] opacity-10 bg-[#C6A56B]"
          aria-hidden="true"
        />

        <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 xl:pr-16 2xl:pr-12 relative z-10">
          
          {/* Section Header Row with 01 / 05 Tracker */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-4 sm:mb-6 xl:mb-6 2xl:mb-10 gap-4 sm:gap-6">
            <div>
              <span className="text-xs font-sans font-semibold uppercase tracking-[0.24em] text-slate-400 block mb-2 sm:mb-3">
                BUILDING NOTES
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] 2xl:text-[54px] font-bold text-white tracking-tight leading-[1.1] mb-2">
                What the work <span className="text-[#C6A56B]">teaches us.</span>
              </h2>
              <p className="text-sm sm:text-base font-sans text-slate-300 max-w-xl leading-relaxed">
                Practical observations from building digital products, e-commerce experiences, and business systems.
              </p>
            </div>

            {/* Slide Indicator & Navigation Controls */}
            <div className="flex items-center gap-4 sm:gap-6 self-start lg:self-end">
              <div className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-slate-400 flex items-center gap-2">
                <span className="text-white font-bold">
                  {String(activeIdx + 1).padStart(2, "0")}
                </span>
                <span>/</span>
                <span>05</span>
              </div>

              {/* Progress Line */}
              <div className="w-16 sm:w-24 2xl:w-28 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-[#C6A56B] transition-all duration-300 ease-out"
                  style={{
                    width: `${((activeIdx + 1) / total) * 100}%`,
                  }}
                />
              </div>

              {/* Circular Arrow Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous note"
                  className="w-9 h-9 2xl:w-10 2xl:h-10 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center text-white transition-all hover:border-[#C6A56B] hover:bg-white/10 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next note"
                  className="w-9 h-9 2xl:w-10 2xl:h-10 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center text-white transition-all hover:border-[#C6A56B] hover:bg-white/10 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Building Notes Horizontal Carousel Rail */}
          <div
            ref={railRef}
            onMouseDown={handleMouseDown}
            className={`flex items-stretch gap-5 sm:gap-6 overflow-x-auto scrollbar-none no-scrollbar [&::-webkit-scrollbar]:hidden py-3 -my-3 ${
              isDragging ? "cursor-grabbing select-none" : "cursor-grab"
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {NOTES.map((note) => (
              <div
                key={note.id}
                className="min-w-[280px] sm:min-w-[320px] lg:min-w-[340px] xl:min-w-[350px] 2xl:min-w-[380px] h-[375px] sm:h-[395px] xl:h-[390px] 2xl:h-[560px] rounded-3xl bg-[#080b14] border border-white/[0.08] hover:border-[#C6A56B]/40 p-5 sm:p-6 xl:p-6 2xl:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) hover:-translate-y-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_16px_36px_rgba(0,0,0,0.65)] hover:shadow-[0_20px_50px_-10px_rgba(198,165,107,0.2)] group select-none"
              >
                {/* Background Ambient Radial Glow on Hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: `radial-gradient(circle at 50% 40%, #C6A56B, transparent 70%)`,
                  }}
                />

                {/* Bottom Glowing Border Line */}
                <div
                  className="pointer-events-none absolute bottom-0 left-6 right-1/4 h-[2px] rounded-full bg-gradient-to-r from-[#C6A56B] via-[#C6A56B]/70 to-transparent shadow-[0_0_12px_2px_rgba(198,165,107,0.35)]"
                  aria-hidden="true"
                />

                {/* Card Top Row: Category + Label Badge */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[10px] 2xl:text-[11px] font-sans font-bold uppercase tracking-[0.24em] text-slate-400">
                    {note.category}
                  </span>
                  <span className="text-[10px] 2xl:text-[11px] font-sans font-semibold text-[#C6A56B] px-2.5 py-1 rounded-full bg-[#C6A56B]/10 border border-[#C6A56B]/20">
                    {note.label}
                  </span>
                </div>

                {/* Card Center: Subtle Editorial Visual Treatment */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto py-2">
                  {/* Large Stylized Number Watermark in Background */}
                  <span
                    className="font-mono text-7xl sm:text-8xl font-black tracking-tighter text-white/[0.03] group-hover:text-[#C6A56B]/10 transition-colors duration-500 select-none absolute"
                    aria-hidden="true"
                  >
                    {note.number}
                  </span>

                  {/* 1. E-Commerce Discovery: Information Hierarchy & Funnel Arc */}
                  {note.visualType === "discovery" && (
                    <div className="relative w-36 h-24 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 160 100" fill="none">
                        <path d="M 20 25 H 140" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                        <path d="M 40 50 H 120" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                        <path d="M 65 75 H 95" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="80" cy="75" r="3.5" fill="#C6A56B" />
                        <line x1="80" y1="25" x2="80" y2="70" stroke="#C6A56B" strokeWidth="1" strokeDasharray="3 3" />
                      </svg>
                    </div>
                  )}

                  {/* 2. Business Systems: Sequential Information Flow Line */}
                  {note.visualType === "workflow" && (
                    <div className="relative w-36 h-24 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 160 100" fill="none">
                        <line x1="20" y1="50" x2="140" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                        <circle cx="35" cy="50" r="6" fill="#080b14" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                        <circle cx="80" cy="50" r="8" fill="#121824" stroke="#C6A56B" strokeWidth="2" />
                        <circle cx="80" cy="50" r="3" fill="#C6A56B" />
                        <circle cx="125" cy="50" r="6" fill="#080b14" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                        <path d="M 50 42 L 60 50 L 50 58" stroke="#C6A56B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M 98 42 L 108 50 L 98 58" stroke="#C6A56B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}

                  {/* 3. Automation: Refined Loop & Direct Bypass Pipeline */}
                  {note.visualType === "automation" && (
                    <div className="relative w-36 h-24 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 160 100" fill="none">
                        <rect x="25" y="32" width="110" height="36" rx="18" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                        <circle cx="43" cy="50" r="4" fill="#A8A49B" />
                        <circle cx="80" cy="50" r="6" fill="#121824" stroke="#C6A56B" strokeWidth="1.5" />
                        <circle cx="80" cy="50" r="2.5" fill="#C6A56B" />
                        <circle cx="117" cy="50" r="4" fill="#A8A49B" />
                        <path d="M 80 20 C 110 20, 130 35, 130 50" stroke="#C6A56B" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
                      </svg>
                    </div>
                  )}

                  {/* 4. Digital Products: Focus Boundary & Essential Core */}
                  {note.visualType === "product" && (
                    <div className="relative w-36 h-24 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 160 100" fill="none">
                        <circle cx="80" cy="50" r="32" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 3" />
                        <rect x="62" y="32" width="36" height="36" rx="8" fill="#121824" stroke="#C6A56B" strokeWidth="1.5" />
                        <circle cx="80" cy="50" r="3.5" fill="#C6A56B" />
                        <line x1="45" y1="50" x2="55" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                        <line x1="105" y1="50" x2="115" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                      </svg>
                    </div>
                  )}

                  {/* 5. Engineering: Modular Scalable Foundation */}
                  {note.visualType === "engineering" && (
                    <div className="relative w-36 h-24 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 160 100" fill="none">
                        <rect x="30" y="62" width="100" height="16" rx="4" fill="#080b14" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                        <rect x="45" y="42" width="70" height="16" rx="4" fill="#121824" stroke="#C6A56B" strokeWidth="1.5" />
                        <rect x="62" y="22" width="36" height="16" rx="4" fill="#080b14" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                        <circle cx="80" cy="50" r="2.5" fill="#C6A56B" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Card Bottom: Title & Body Observation */}
                <div className="relative z-10 pt-4 border-t border-white/[0.06]">
                  <h3 className="font-display text-base sm:text-lg 2xl:text-xl font-bold text-white group-hover:text-[#C6A56B] transition-colors leading-snug mb-2">
                    {note.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed font-normal">
                    {note.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
