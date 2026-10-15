"use client";

import React from "react";

interface DifferentiatorItem {
  num: string;
  title: string;
  thesis: string;
  description: string;
  accent: string;
  metric: string;
}

const DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    num: "01",
    title: "Direct Collaboration",
    thesis: "Clear communication with the people responsible for the actual work.",
    description:
      "No account manager telephone games or bureaucratic friction. You collaborate directly with the senior engineers and designers who write the code and shape your user interface, ensuring zero translation loss from planning to production.",
    accent: "#C6A56B",
    metric: "0 MIDDLEMEN",
  },
  {
    num: "02",
    title: "Business-First Thinking",
    thesis: "Technology choices guided by real needs rather than trends.",
    description:
      "We resist the urge to chase every fleeting library or overcomplicate architectures for ego. Every framework, database decision, and API design is evaluated against one metric: Does it improve commercial outcomes and operational reliability?",
    accent: "#6E8FAF",
    metric: "100% PURPOSE-DRIVEN",
  },
  {
    num: "03",
    title: "Design Meets Engineering",
    thesis: "Strong visual execution backed by dependable functionality.",
    description:
      "We reject the compromise between aesthetic refinement and engineering rigour. Our digital experiences pair editorial beauty and fluid micro-interactions with strict type safety, fast load times, and rock-solid state management.",
    accent: "#C6A56B",
    metric: "DUAL DISCIPLINE",
  },
  {
    num: "04",
    title: "Built for the Long Term",
    thesis: "Maintainable, practical solutions that can evolve.",
    description:
      "We write clean, modular, and self-documenting code built for your team to own and extend. Systems are designed to grow with your business over a multi-year horizon rather than requiring a complete rewrite after year one.",
    accent: "#5F9F92",
    metric: "5+ YEAR HORIZON",
  },
];

export function AboutDifferentiators() {
  return (
    <section className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Architectural Watermark */}
      <div className="pointer-events-none absolute right-4 top-1/4 select-none opacity-[0.02] text-[180px] lg:text-[240px] font-mono font-bold leading-none text-white" aria-hidden="true">
        DIFFERENCE
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                03 / WHY SASVALE
              </span>
            </div>
            <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              Less noise. <br />
              <span className="text-[#C6A56B] font-medium">More meaningful work.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#A8A49B] max-w-md leading-relaxed font-light">
            We intentionally structured Sasvale to operate differently from traditional holding companies and offshore dev shops.
          </p>
        </div>

        {/* 2-Column Alternating Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-12 sm:pt-16">
          {DIFFERENTIATORS.map((diff, index) => (
            <div
              key={diff.num}
              className="group relative flex flex-col justify-between p-7 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0c0d12]/60 hover:bg-[#0c0d12] hover:border-white/[0.18] transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Hairline Top Indicator Line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C6A56B]/0 to-transparent group-hover:via-[#C6A56B]/60 transition-all duration-500"
                aria-hidden="true"
              />

              <div>
                {/* Meta Row */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-bold tracking-wider text-[#C6A56B]">
                      {diff.num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A8A49B]">
                      SASVALE STANDARD
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#C6A56B] tracking-wider px-2 py-0.5 rounded bg-[#C6A56B]/10 border border-[#C6A56B]/20">
                    {diff.metric}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sans text-[22px] sm:text-[26px] font-medium tracking-tight text-[#F5F3ED] mb-3 group-hover:text-[#C6A56B] transition-colors">
                  {diff.title}
                </h3>

                {/* Thesis */}
                <p className="text-[15px] sm:text-[16px] text-[#F5F3ED] font-normal leading-relaxed mb-4">
                  {diff.thesis}
                </p>

                {/* Description */}
                <p className="text-sm text-[#A8A49B] leading-relaxed font-light">
                  {diff.description}
                </p>
              </div>

              {/* Bottom Subtle Corner Anchor */}
              <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-[#A8A49B]/50">
                <span>{`INDEX // 0${index + 1}`}</span>
                <span className="text-[#C6A56B]/60 group-hover:text-[#C6A56B] transition-colors">
                  VERIFIED DIRECTIVE →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
