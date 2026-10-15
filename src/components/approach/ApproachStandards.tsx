"use client";

import React, { useState } from "react";
import { ShieldCheck, Zap, Lock, KeyRound } from "lucide-react";

interface QualityStandard {
  num: string;
  tag: string;
  title: string;
  desc: string;
  practicalApplication: string;
}

const STANDARDS: QualityStandard[] = [
  {
    num: "01",
    tag: "PREDICTABILITY",
    title: "Reliable by Design",
    desc: "Systems are developed with testing, maintainability, and predictable behavior in mind.",
    practicalApplication:
      "We avoid brittle shortcuts. Every system component has clear boundaries, strict typing, and structured error handling to ensure consistent behavior across different user workflows.",
  },
  {
    num: "02",
    tag: "USER SPEED",
    title: "Performance That Matters",
    desc: "We prioritize responsiveness and efficiency appropriate to the product and its users.",
    practicalApplication:
      "Fast page loads and responsive user feedback keep users engaged and improve conversion. We optimize bundle size, database queries, and server rendering for real-world devices.",
  },
  {
    num: "03",
    tag: "DEFENSE",
    title: "Security-Conscious Development",
    desc: "We consider permissions, data handling, dependencies, and deployment risks throughout development.",
    practicalApplication:
      "Security is not an afterthought added at release. We design role-based permissions, sanitize data inputs, manage dependencies carefully, and configure hardened deployment environments.",
  },
  {
    num: "04",
    tag: "CLIENT IP",
    title: "Built for Ownership",
    desc: "We clarify source-code access, documentation, handover, and ownership arrangements as part of project delivery.",
    practicalApplication:
      "You own your product. We deliver clean, self-documenting codebases, necessary infrastructure configurations, and clear technical handover notes so you are never locked into a proprietary trap.",
  },
];

export function ApproachStandards() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#05070c] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Subtle Accent Glow */}
      <div
        className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] rounded-full blur-[180px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                05 / OUR STANDARDS
              </span>
            </div>
            <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              Good engineering should be felt, <br />
              <span className="text-[#C6A56B] font-medium">not explained away.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#A8A49B] max-w-md leading-relaxed font-light">
            We hold our work to clear, practical standards that protect your investment and make systems easier to run over time.
          </p>
        </div>

        {/* Large Editorial Rows with Horizontal Separators */}
        <div className="divide-y divide-white/[0.08] pt-6">
          {STANDARDS.map((std, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={std.num}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group py-10 sm:py-14 transition-colors duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
                  
                  {/* Column 1: Step Number & Tag (3 Cols) */}
                  <div className="lg:col-span-3 flex items-center gap-4">
                    <span className="text-3xl sm:text-4xl font-mono font-light text-[#C6A56B]">
                      {std.num}
                    </span>
                    <div className="h-4 w-px bg-white/20" />
                    <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#A8A49B] group-hover:text-[#F5F3ED] transition-colors uppercase">
                      {std.tag}
                    </span>
                  </div>

                  {/* Column 2: Principle Title (4 Cols) */}
                  <div className="lg:col-span-4">
                    <h3 className="font-sans text-[24px] sm:text-[30px] font-medium text-[#F5F3ED] tracking-tight group-hover:text-[#C6A56B] transition-colors">
                      {std.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-[#A8A49B] mt-2 leading-relaxed font-light">
                      {std.desc}
                    </p>
                  </div>

                  {/* Column 3: Practical Application (5 Cols) */}
                  <div className="lg:col-span-5 pt-2 lg:pt-0">
                    <div className="p-5 rounded-xl border border-white/[0.06] bg-[#080a0f] group-hover:border-white/[0.14] transition-all duration-300">
                      <span className="block text-[9px] font-mono tracking-widest uppercase text-[#C6A56B] mb-1.5 font-bold">
                        PRACTICAL REALITY
                      </span>
                      <p className="text-xs sm:text-sm text-[#A8A49B] group-hover:text-[#F5F3ED] transition-colors leading-relaxed font-light">
                        {std.practicalApplication}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Integrity Stamp */}
        <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#A8A49B]">
          <span>PRAGMATIC QUALITY STANDARDS</span>
          <span className="text-[#C6A56B]">NO BUZZWORDS &bull; FULL TRANSPARENCY</span>
        </div>

      </div>
    </section>
  );
}
