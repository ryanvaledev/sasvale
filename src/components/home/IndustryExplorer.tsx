"use client";

import { useState } from "react";
import Link from "next/link";
import { industryExplorerData } from "@/config/v2-foundation";

export function IndustryExplorer() {
  const [activeId, setActiveId] = useState<string>(industryExplorerData[0].id);

  const activeIndustry = industryExplorerData.find((ind) => ind.id === activeId) || industryExplorerData[0];

  return (
    <section 
      id="industries"
      className="py-20 sm:py-28 lg:py-32 border-t border-white/[0.08] bg-[#050811] text-white"
      aria-labelledby="industries-heading"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
            <span>INDUSTRIES WE TRANSFORM</span>
          </div>
          <h2 
            id="industries-heading"
            className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.12] tracking-[-0.03em] text-white"
          >
            Domain Architecture <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 bg-clip-text text-transparent">Engineered for Industry Realities.</span>
          </h2>
          <p className="text-base text-slate-400 leading-relaxed mt-4">
            Every sector operates under distinct compliance, latency, and operational constraints. We engineer custom platforms that solve domain bottlenecks at scale.
          </p>
        </div>

        {/* Large Typography Interactive Industry Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): Large Typography Category Selector */}
          <div className="lg:col-span-5 flex flex-col space-y-2 border-l border-white/[0.08]">
            {industryExplorerData.map((ind) => {
              const isSelected = ind.id === activeId;
              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setActiveId(ind.id)}
                  className={`text-left px-6 py-4 transition-all duration-200 border-l-2 -ml-[2px] ${
                    isSelected
                      ? "border-cyan-400 text-white bg-cyan-500/10 font-bold"
                      : "border-transparent text-slate-400 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <span className="font-display text-xl sm:text-2xl block">
                    {ind.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column (7 cols): Active Sector Transformation Display */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-2xl bg-[#080d1a] border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Domain Transformation
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-[1.2] tracking-[-0.02em] mt-3 mb-6">
              {activeIndustry.headline}
            </h3>

            <p className="text-[15px] sm:text-[16px] text-slate-300 leading-relaxed mb-8">
              {activeIndustry.businessTransformation}
            </p>

            <div className="space-y-4 pt-6 border-t border-white/[0.08]">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white block">
                Target Architectural Deliverables
              </span>
              <ul className="space-y-3">
                {activeIndustry.coreCapabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-[14px] text-slate-300">
                    <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 7.5l3 3 6-6" />
                    </svg>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href={activeIndustry.href}
                className="inline-flex items-center justify-center bg-white text-slate-950 hover:bg-slate-100 font-semibold rounded-full px-7 py-3 text-[12px] uppercase tracking-[0.08em] shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-200"
              >
                <span>Explore {activeIndustry.name} Solutions</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default IndustryExplorer;
