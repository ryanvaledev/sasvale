"use client";

import React from "react";
import { ArrowLeftRight, Check } from "lucide-react";

const YOUR_SIDE = [
  {
    num: "01",
    title: "Share the business challenge",
    desc: "Explain the problem you want to solve, your commercial model, and what success looks like.",
  },
  {
    num: "02",
    title: "Define priorities",
    desc: "Help us understand what features matter most for immediate impact versus future phases.",
  },
  {
    num: "03",
    title: "Provide relevant business information",
    desc: "Share necessary brand guidelines, existing systems access, data, or domain knowledge.",
  },
  {
    num: "04",
    title: "Review key decisions and deliverables",
    desc: "Engage in milestone demos and evaluate progress against agreed requirements.",
  },
  {
    num: "05",
    title: "Give feedback throughout the process",
    desc: "Provide candid, timely input during sprint cycles so adjustments happen early.",
  },
];

const OUR_SIDE = [
  {
    num: "01",
    title: "Translate requirements into a practical plan",
    desc: "Turn your business goals into concrete architecture, scope boundaries, and technical specs.",
  },
  {
    num: "02",
    title: "Recommend appropriate solutions",
    desc: "Advise on tech stack, design choices, and sensible trade-offs without pushing unnecessary tools.",
  },
  {
    num: "03",
    title: "Design and engineer the product",
    desc: "Craft refined interface ergonomics and write clean, resilient, strictly typed production code.",
  },
  {
    num: "04",
    title: "Communicate progress and risks",
    desc: "Maintain transparent communication, demonstrate working software, and flag challenges proactively.",
  },
  {
    num: "05",
    title: "Test, prepare, and deliver agreed work",
    desc: "Conduct thorough validation, prepare deployments, and provide comprehensive source documentation.",
  },
];

export function ApproachCollaboration() {
  return (
    <section className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#05070c] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Accent Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[180px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                03 / COLLABORATION
              </span>
            </div>
            <h2 className="font-sans text-[32px] sm:text-[46px] lg:text-[56px] font-light sm:font-normal tracking-[-0.03em] text-[#F5F3ED] leading-[1.08] max-w-3xl">
              Your knowledge. <br />
              Our expertise. <br />
              <span className="font-medium text-[#C6A56B]">One shared direction.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#A8A49B] max-w-md leading-relaxed font-light">
            Great software requires active partnership. You understand your market; we know how to design and engineer resilient systems. Here is how both sides contribute.
          </p>
        </div>

        {/* Sophisticated Two-Column Editorial Comparison with Central Connection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-14 relative items-start">
          
          {/* YOUR SIDE (5 Cols) */}
          <div className="lg:col-span-6 rounded-2xl border border-white/[0.08] bg-[#080a0f] p-6 sm:p-10 shadow-xl relative overflow-hidden group">
            {/* Top Indicator */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#6E8FAF]" />
                <h3 className="text-xs font-mono font-bold tracking-[0.22em] text-[#F5F3ED] uppercase">
                  YOUR SIDE // CLIENT OWNERSHIP
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[#A8A49B]/70 tracking-widest uppercase">
                DOMAIN EXPERTISE
              </span>
            </div>

            <div className="space-y-6">
              {YOUR_SIDE.map((item) => (
                <div key={item.num} className="group/item flex items-start gap-4">
                  <span className="text-xs font-mono font-bold text-[#6E8FAF] px-2 py-0.5 rounded bg-[#6E8FAF]/10 mt-0.5 shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#F5F3ED] mb-1 group-hover/item:text-[#6E8FAF] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#A8A49B] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#A8A49B]">
              <span>COMMUNICATION // DIRECT</span>
              <span className="text-[#6E8FAF]">ZERO GUESSWORK</span>
            </div>
          </div>

          {/* OUR SIDE (6 Cols) */}
          <div className="lg:col-span-6 rounded-2xl border border-white/[0.08] bg-[#080a0f] p-6 sm:p-10 shadow-xl relative overflow-hidden group">
            {/* Top Indicator */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#C6A56B]" />
                <h3 className="text-xs font-mono font-bold tracking-[0.22em] text-[#C6A56B] uppercase">
                  OUR SIDE // SASVALE STEWARDSHIP
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[#A8A49B]/70 tracking-widest uppercase">
                TECHNICAL EXECUTION
              </span>
            </div>

            <div className="space-y-6">
              {OUR_SIDE.map((item) => (
                <div key={item.num} className="group/item flex items-start gap-4">
                  <span className="text-xs font-mono font-bold text-[#C6A56B] px-2 py-0.5 rounded bg-[#C6A56B]/10 mt-0.5 shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#F5F3ED] mb-1 group-hover/item:text-[#C6A56B] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#A8A49B] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#A8A49B]">
              <span>DELIVERY // PRODUCTION QUALITY</span>
              <span className="text-[#C6A56B]">SENIOR HANDS-ON</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
