"use client";

import React, { useState } from "react";

interface BigPicturePhase {
  step: string;
  name: string;
  shortDesc: string;
  focus: string;
}

const PHASES: BigPicturePhase[] = [
  {
    step: "01",
    name: "UNDERSTAND",
    shortDesc: "Diagnose problem & commercial constraints.",
    focus: "Discovery & Analysis",
  },
  {
    step: "02",
    name: "DECIDE",
    shortDesc: "Define product scope & architectural roadmap.",
    focus: "Strategy & Tech Contract",
  },
  {
    step: "03",
    name: "BUILD",
    shortDesc: "Iterative sprints with working demos.",
    focus: "Engineering & Design",
  },
  {
    step: "04",
    name: "AUTOMATE",
    shortDesc: "Connect tools & simplify operational friction.",
    focus: "Workflows & Integrations",
  },
  {
    step: "05",
    name: "SCALE",
    shortDesc: "Deploy reliably & prepare for future growth.",
    focus: "Launch & Stewardship",
  },
];

export function ApproachBigPicture() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="big-picture" className="relative z-10 w-full py-20 sm:py-28 lg:py-32 bg-[#05070c] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Accent Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[180px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                01 / THE BIG PICTURE
              </span>
            </div>
            <h2 className="font-sans text-[32px] sm:text-[46px] lg:text-[56px] font-light sm:font-normal tracking-[-0.03em] text-[#F5F3ED] leading-[1.08] max-w-3xl">
              From the first question <br />
              <span className="font-medium text-[#C6A56B]">to what comes next.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#A8A49B] max-w-md leading-relaxed font-light">
            Every project is different. Our approach gives us a clear direction while leaving room for the decisions, discoveries, and improvements that make the final product better.
          </p>
        </div>

        {/* Desktop Horizontal Five-Phase Sequence */}
        <div className="hidden lg:block relative pt-14 pb-4">
          
          {/* Thin Connecting Axis Line Across All 5 Phases */}
          <div
            className="absolute top-[82px] left-8 right-8 h-px bg-gradient-to-r from-[#C6A56B]/30 via-white/10 to-[#C6A56B]/30 z-0 select-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {PHASES.map((phase, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={phase.name}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-[#C6A56B]/60 bg-[#0c0f17] shadow-xl shadow-[#C6A56B]/5 -translate-y-1"
                      : "border-white/[0.08] bg-[#080a0f]/80 hover:border-white/[0.18]"
                  }`}
                >
                  {/* Step Marker & Header */}
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${
                          isActive
                            ? "bg-[#C6A56B] text-[#070707] shadow-[0_0_12px_rgba(198,165,107,0.4)]"
                            : "bg-white/[0.06] text-[#A8A49B] group-hover:text-[#F5F3ED]"
                        }`}
                      >
                        {phase.step}
                      </span>

                      <span
                        className={`text-[10px] font-mono tracking-wider uppercase transition-colors ${
                          isActive ? "text-[#C6A56B]" : "text-white/20"
                        }`}
                      >
                        {idx < PHASES.length - 1 ? "→" : "RELEASE"}
                      </span>
                    </div>

                    <h3 className="font-sans text-lg font-semibold tracking-tight text-[#F5F3ED] mb-2 group-hover:text-[#C6A56B] transition-colors">
                      {phase.name}
                    </h3>

                    <p className="text-xs text-[#A8A49B] leading-relaxed font-light mb-4">
                      {phase.shortDesc}
                    </p>
                  </div>

                  {/* Focus Badge */}
                  <div className="pt-3 border-t border-white/[0.04]">
                    <span className="block text-[9px] font-mono uppercase tracking-widest text-[#C6A56B]/80 mb-0.5">
                      FOCUS
                    </span>
                    <span className="block text-[11px] font-mono text-[#F5F3ED]">
                      {phase.focus}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Mobile & Tablet Vertical Progression */}
        <div className="lg:hidden relative pt-8 pl-8 space-y-6">
          {/* Vertical Connecting Hairline Axis */}
          <div
            className="absolute left-3.5 top-8 bottom-8 w-px bg-gradient-to-b from-[#C6A56B]/40 via-white/10 to-[#C6A56B]/40"
            aria-hidden="true"
          />

          {PHASES.map((phase) => (
            <div
              key={phase.name}
              className="relative p-5 rounded-xl border border-white/[0.08] bg-[#090b10]"
            >
              {/* Node on Vertical Line */}
              <div className="absolute -left-[30px] top-4 w-6 h-6 rounded-full bg-[#070707] border border-[#C6A56B] flex items-center justify-center text-[10px] font-mono font-bold text-[#C6A56B]">
                {phase.step}
              </div>

              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-sans text-base font-semibold text-[#F5F3ED]">
                  {phase.name}
                </h3>
                <span className="text-[10px] font-mono text-[#C6A56B] uppercase">
                  {phase.focus}
                </span>
              </div>

              <p className="text-xs text-[#A8A49B] leading-relaxed">
                {phase.shortDesc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
