"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface CaseStudyItem {
  id: string;
  number: string;
  client: string;
  category: string;
  subCategory: string;
  heroStat: string;
  statLabel: string;
  description: string;
  chips: string[];
  accentColor: string;
  link: string;
  previewWidget: "dealroom" | "logistics" | "ecommerce" | "pos" | "booking";
}

const CASES: CaseStudyItem[] = [
  {
    id: "crowdinvest",
    number: "01",
    client: "crowdinvest",
    category: "FINTECH",
    subCategory: "ALTERNATIVE INVESTMENTS",
    heroStat: "2,000+",
    statLabel: "INVESTOR COMMUNITY",
    description:
      "Compliance-first onboarding, deal discovery + data room, secure investing + admin controls across global syndicated portfolios.",
    chips: ["5+ countries", "99.9% uptime", "Zero compliance leaks"],
    accentColor: "#38bdf8",
    link: "/work/crowdinvest",
    previewWidget: "dealroom",
  },
  {
    id: "transworld",
    number: "02",
    client: "Transworld Logistics",
    category: "LOGISTICS",
    subCategory: "AI DOCUMENT WORKFLOWS",
    heroStat: "10,000+",
    statLabel: "DOCUMENTS / DAY",
    description:
      "Automated terminal intelligence, multi-carrier dispatch routing, and customs clearance parsing for cross-border shipping fleets.",
    chips: ["99.4% OCR precision", "< 200ms processing", "Global freight sync"],
    accentColor: "#fbbf24",
    link: "/work/transworld",
    previewWidget: "logistics",
  },
  {
    id: "ethletia",
    number: "03",
    client: "Ethletia",
    category: "ECOMMERCE",
    subCategory: "HEADLESS STOREFRONT",
    heroStat: "3.4x",
    statLabel: "CHECKOUT CONVERSION",
    description:
      "Sub-second headless commerce architecture, real-time inventory locking, and interactive 3D apparel sizing that eliminated cart drop-off.",
    chips: ["45ms TTFB", "0 downtime on Black Friday", "Global Edge CDN"],
    accentColor: "#34d399",
    link: "/work/ethletia",
    previewWidget: "ecommerce",
  },
  {
    id: "rassani-pos",
    number: "04",
    client: "Rassani POS",
    category: "RETAIL TECH",
    subCategory: "REAL-TIME ENGINE",
    heroStat: "$42M+",
    statLabel: "ANNUAL GMV PROCESSED",
    description:
      "Offline-first point of sale, multi-location inventory ledger, and biometric contactless payments for multi-store franchise operations.",
    chips: ["99.99% reliability", "Sub-second sync", "Multi-terminal ops"],
    accentColor: "#c084fc",
    link: "/work/rassani-pos",
    previewWidget: "pos",
  },
  {
    id: "tbs-salon",
    number: "05",
    client: "TBS Salon",
    category: "SERVICE ENTERPRISE",
    subCategory: "BOOKING AUTOMATION",
    heroStat: "85%",
    statLabel: "AUTOMATED BOOKINGS",
    description:
      "Conversational booking engine, dynamic stylist schedule optimization, and integrated POS loyalty rails that eliminated receptionist overhead.",
    chips: ["+42% repeat bookings", "Zero no-shows", "Sub-minute checkout"],
    accentColor: "#fb7185",
    link: "/work/tbs-salon",
    previewWidget: "booking",
  },
];

export default function InteractiveStackingCaseStudies() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const total = CASES.length;
  const current = CASES[activeIdx];

  // Jump to specific slide and sync window scroll position within pinned section
  const goToSlide = (idx: number) => {
    setActiveIdx(idx);
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const totalScrollable = rect.height - window.innerHeight;
    if (totalScrollable > 0) {
      const targetY = window.scrollY + rect.top + (idx / (total - 1)) * totalScrollable;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    goToSlide((activeIdx + 1) % total);
  };

  const handlePrev = () => {
    goToSlide((activeIdx - 1 + total) % total);
  };

  // Sticky Scroll Pinning Listener:
  // As user scrolls naturally down the page, the inner viewport stays pinned at top: 0,
  // and activeIdx updates based on the exact scroll progress through the section.
  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      // When section is pinned at top: 0 (rect.top <= 0 and rect.bottom >= window.innerHeight)
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
        const newIdx = Math.min(total - 1, Math.floor(progress * total));
        setActiveIdx(newIdx);
      } else if (rect.top > 0) {
        setActiveIdx(0);
      } else if (rect.bottom < window.innerHeight) {
        setActiveIdx(total - 1);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [total]);

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="relative w-full h-[260vh] bg-[#05070c] border-t border-white/[0.08]"
      aria-label="Interactive Stacking Case Studies"
    >
      {/* Sticky Inner Viewport: Pins locked to screen while user scrolls through cards */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Background Ambient Glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[170px] opacity-15 transition-colors duration-700"
          style={{ backgroundColor: current.accentColor }}
          aria-hidden="true"
        />

        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          {/* Section Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 lg:mb-12 gap-6">
            <div>
              <span className="text-xs font-sans font-semibold uppercase tracking-[0.24em] text-slate-400 block mb-3">
                CASE STUDIES
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.1] mb-2">
                Outcomes, <span className="text-sky-400">Not Slide Decks.</span>
              </h2>
              <p className="text-sm sm:text-base font-sans text-slate-300 max-w-xl leading-relaxed">
                Five production systems operating at global scale. Real architectures, verified metrics, zero hypotheticals.
              </p>
            </div>

          </div>

          {/* Right Header: 01 / 05 Counter & Deal Controls */}
          <div className="flex items-center gap-6 self-start lg:self-end">
            <div className="flex items-center gap-3">
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-slate-400">
                5 CASES · DEAL TO REVEAL
              </span>
              <div className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-slate-400 flex items-center gap-2">
                <span className="text-white font-bold">{current.number}</span>
                <span>/</span>
                <span>05</span>
              </div>
            </div>

            {/* Circular Deal Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Deal previous card"
                className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center text-white transition-all hover:border-sky-400 hover:bg-white/10 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Deal next card"
                className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center text-white transition-all hover:border-sky-400 hover:bg-white/10 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 3D Stacking Card Deck Container */}
        <div className="relative w-full max-w-[1240px] mx-auto min-h-[540px] sm:min-h-[580px] lg:min-h-[600px] flex items-center justify-center">
          {CASES.map((item, i) => {
            // Calculate relative offset from active card
            const offset = (i - activeIdx + total) % total;
            const isActive = offset === 0;
            const isNext1 = offset === 1;
            const isNext2 = offset === 2;
            const isNext3 = offset === 3;
            const isBehind = offset > 3;

            // Compute stack transform
            let transformClass = "translate-x-0 translate-y-0 scale-100 rotate-0 opacity-100 z-30 shadow-2xl";
            if (isNext1) {
              transformClass = "translate-x-4 sm:translate-x-6 translate-y-3 sm:translate-y-4 scale-[0.97] rotate-1 opacity-75 z-20 shadow-xl cursor-pointer";
            } else if (isNext2) {
              transformClass = "translate-x-8 sm:translate-x-12 translate-y-6 sm:translate-y-8 scale-[0.94] rotate-2 opacity-50 z-10 shadow-lg cursor-pointer";
            } else if (isNext3) {
              transformClass = "translate-x-12 sm:translate-x-16 translate-y-9 sm:translate-y-12 scale-[0.91] rotate-3 opacity-25 z-0 cursor-pointer";
            } else if (isBehind) {
              transformClass = "translate-x-0 translate-y-12 scale-[0.85] opacity-0 z-0 pointer-events-none";
            }

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (!isActive) setActiveIdx(i);
                  }}
                  className={`absolute inset-x-0 top-0 mx-auto w-full rounded-3xl bg-[#080c15] border border-white/[0.12] p-8 sm:p-12 lg:p-16 transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_20px_40px_rgba(0,0,0,0.7)] ${transformClass}`}
                  style={{
                    minHeight: "540px",
                  }}
                >
                  {/* Top-Left Ambient Subtle Glow */}
                  <div
                    className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full blur-[100px] opacity-25"
                    style={{ backgroundColor: item.accentColor }}
                    aria-hidden="true"
                  />

                  {/* Bottom-Right Ambient Atmosphere Glow */}
                  <div
                    className="pointer-events-none absolute -bottom-16 -right-16 w-72 h-72 rounded-full blur-[120px] opacity-35"
                    style={{ backgroundColor: item.accentColor }}
                    aria-hidden="true"
                  />

                  {/* Bottom Glowing Border Line */}
                  <div
                    className="pointer-events-none absolute bottom-0 left-8 right-1/3 h-[2.5px] rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${item.accentColor} 0%, ${item.accentColor} 70%, transparent 100%)`,
                      boxShadow: `0 0 16px 3px ${item.accentColor}`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Card Top Row: Sector Pill + Step Counter */}
                  <div className="flex items-center justify-between relative z-10 mb-8 sm:mb-12 border-b border-white/[0.08] pb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-[0.24em] text-slate-300">
                      {item.category}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-slate-400">
                      {item.subCategory}
                    </span>
                  </div>

                  <span className="text-xs font-sans font-semibold tracking-widest text-slate-400">
                    {item.number} / 05 CASE STUDY
                  </span>
                </div>

                {/* Card Main Stage: Left Hero Stats & Story vs Right UI Blueprint Widget */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 flex-1 my-auto">
                  
                  {/* Left Column: Big Stat + Description */}
                  <div className="lg:col-span-7">
                    <div className="mb-2">
                      <span className="font-display text-5xl sm:text-7xl lg:text-[84px] font-bold text-white tracking-tight leading-none">
                        {item.heroStat}
                      </span>
                    </div>
                    <div className="mb-6">
                      <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.24em] text-slate-400">
                        {item.statLabel}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                      {item.client}
                    </h3>

                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                      {item.description}
                    </p>

                    {/* Verified Chips */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      {item.chips.map((chip, ci) => (
                        <span
                          key={ci}
                          className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium bg-white/[0.04] border border-white/10 text-slate-200"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Live Interactive Blueprint Visual Mockup */}
                  <div className="lg:col-span-5 flex items-center justify-center">
                    <div className="w-full max-w-[380px] rounded-2xl bg-black/60 border border-white/10 p-6 relative overflow-hidden backdrop-blur-sm shadow-xl">
                      
                      {/* Widget Header */}
                      <div className="flex items-center justify-between mb-5 border-b border-white/[0.08] pb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: item.accentColor }}
                          />
                          <span className="text-xs font-sans font-bold text-white uppercase tracking-wider">
                            {item.client} Hub
                          </span>
                        </div>
                        <span className="text-[10px] font-sans font-medium uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          LIVE IN PRODUCTION
                        </span>
                      </div>

                      {/* 1. Dealroom Widget (CrowdInvest) */}
                      {item.previewWidget === "dealroom" && (
                        <div className="space-y-3">
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-sans">Syndicate Vault</span>
                            <span className="text-xs font-bold text-white font-sans">$14,820,000</span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-sans">Accredited LPs</span>
                            <span className="text-xs font-bold text-sky-400 font-sans">2,140 Active</span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-sans">Compliance Gate</span>
                            <span className="text-xs font-bold text-emerald-400 font-sans">100% Passed</span>
                          </div>
                        </div>
                      )}

                      {/* 2. Logistics Widget (Transworld) */}
                      {item.previewWidget === "logistics" && (
                        <div className="space-y-3">
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-sans">Waybills Ingested</span>
                            <span className="text-xs font-bold text-amber-400 font-sans">10,480 / day</span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-sans">OCR Field Accuracy</span>
                            <span className="text-xs font-bold text-white font-sans">99.4% Verified</span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-sans">Customs Latency</span>
                            <span className="text-xs font-bold text-emerald-400 font-sans">184ms Avg</span>
                          </div>
                        </div>
                      )}

                      {/* 3. eCommerce Widget (Ethletia) */}
                      {item.previewWidget === "ecommerce" && (
                        <div className="space-y-3">
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-sans">Edge Response</span>
                            <span className="text-xs font-bold text-emerald-400 font-sans">45ms TTFB</span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-sans">Cart Conversion</span>
                            <span className="text-xs font-bold text-white font-sans">+240% Lift</span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-sans">Peak Traffic SLA</span>
                            <span className="text-xs font-bold text-sky-400 font-sans">100% Uptime</span>
                          </div>
                        </div>
                      )}

                      {/* 4. POS Widget (Rassani POS) */}
                      {item.previewWidget === "pos" && (
                        <div className="space-y-3">
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-sans">Processed GMV</span>
                            <span className="text-xs font-bold text-purple-400 font-sans">$42.6M</span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-sans">Store Terminals</span>
                            <span className="text-xs font-bold text-white font-sans">148 Locations</span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-sans">Offline Mesh</span>
                            <span className="text-xs font-bold text-emerald-400 font-sans">Active Sync</span>
                          </div>
                        </div>
                      )}

                      {/* 5. Booking Widget (TBS Salon) */}
                      {item.previewWidget === "booking" && (
                        <div className="space-y-3">
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-sans">Autonomous Booking</span>
                            <span className="text-xs font-bold text-rose-400 font-sans">85.4% Rate</span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-sans">Client Retention</span>
                            <span className="text-xs font-bold text-white font-sans">+42% Growth</span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-sans">No-Show Reduction</span>
                            <span className="text-xs font-bold text-emerald-400 font-sans">-96% Drop</span>
                          </div>
                        </div>
                      )}

                      <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-between">
                        <span className="text-[11px] font-sans text-slate-400">
                          Production Cluster 01
                        </span>
                        <span className="text-xs text-sky-400 font-sans font-bold flex items-center gap-1">
                          Live Telemetry ↗
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Card Bottom Row: Deal CTA Trigger */}
                <div className="relative z-10 pt-6 mt-8 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs font-sans font-medium text-slate-400">
                    Click deck or use controls to deal next case study
                  </span>

                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-bold text-white hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    <span>Deal Next ({CASES[(activeIdx + 1) % total].client})</span>
                    <span>→</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
