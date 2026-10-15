"use client";

import { useState } from "react";
import { technologyEcosystem } from "@/config/v2-foundation";

export function TechnologyFoundation() {
  const [activeCategory, setActiveCategory] = useState(technologyEcosystem[0].category);

  const activePillar = technologyEcosystem.find((p) => p.category === activeCategory) || technologyEcosystem[0];

  return (
    <section 
      id="technology"
      className="py-20 sm:py-28 lg:py-32 border-t border-white/[0.08] bg-[#050811] text-white"
      aria-labelledby="tech-heading"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
            <span>TECHNOLOGY FOUNDATION</span>
          </div>
          <h2 
            id="tech-heading"
            className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.12] tracking-[-0.03em] text-white"
          >
            A Stack Built on the <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 bg-clip-text text-transparent">Best of Modern AI & Cloud.</span>
          </h2>
          <p className="text-base text-slate-400 leading-relaxed mt-4">
            We are platform-agnostic and performance-first. We architect using battle-tested open standards with proven throughput, sub-second latency, and 99.99% uptime guarantees.
          </p>
        </div>

        {/* Category Tabs (5 Pillars: Frontend, Backend, Cloud, Automation, AI) */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-white/[0.08] pb-4">
          {technologyEcosystem.map((pillar) => {
            const isSelected = pillar.category === activeCategory;
            return (
              <button
                key={pillar.category}
                type="button"
                onClick={() => setActiveCategory(pillar.category)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.02]"
                }`}
              >
                {pillar.category}
              </button>
            );
          })}
        </div>

        {/* Active Category Ecosystem Blueprint Card */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#080d1a] border border-white/[0.1] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Category Overview */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                Architectural Domain
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {activePillar.title}
              </h3>
              <p className="text-[15px] text-slate-300 leading-relaxed">
                {activePillar.description}
              </p>
            </div>

            {/* Disciplines & Engineering Rationale Matrix */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activePillar.disciplines.map((item) => (
                <div 
                  key={item.name}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-colors space-y-1.5"
                >
                  <h4 className="font-display text-base font-bold text-white">
                    {item.name}
                  </h4>
                  <p className="text-[13px] text-slate-400 leading-relaxed">
                    {item.purpose}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default TechnologyFoundation;
