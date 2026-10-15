"use client";

import { useState } from "react";
import { processStagesData } from "@/config/v2-foundation";

export function ProcessTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStage = processStagesData[activeStepIndex];

  return (
    <section 
      id="process"
      className="py-20 sm:py-28 lg:py-32 border-t border-white/[0.08] bg-[#050811] text-white"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
            <span>ENGINEERING METHODOLOGY</span>
          </div>
          <h2 
            id="process-heading"
            className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.12] tracking-[-0.03em] text-white"
          >
            A disciplined six-stage delivery framework <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 bg-clip-text text-transparent">engineered for predictability.</span>
          </h2>
          <p className="text-base text-slate-400 leading-relaxed mt-4">
            We operate with complete engineering transparency. Every milestone is governed by explicit architectural criteria, automated test verification gates, and continuous client visibility.
          </p>
        </div>

        {/* 6-Step Horizontal Progress Rail (Desktop) */}
        <div className="mb-12 border-b border-white/[0.08] overflow-x-auto pb-4 scrollbar-none">
          <div className="grid grid-cols-6 min-w-[720px] gap-4">
            {processStagesData.map((stage, idx) => {
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;

              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left pb-4 relative transition-colors focus:outline-none ${
                    isActive ? "text-white font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {/* Active Indicator Bar */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 h-[2px] transition-colors duration-200 ${
                      isActive ? "bg-cyan-400" : isPast ? "bg-cyan-900/50" : "bg-transparent"
                    }`}
                  />
                  <span className={`font-mono text-xs block mb-1 ${
                    isActive ? "text-cyan-400 font-bold" : "text-slate-400"
                  }`}>
                    {stage.step}
                  </span>
                  <span className="font-display text-base block truncate">
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep Dive Card */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#080d1a] border border-white/[0.1] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-semibold text-cyan-300 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30">
                  Stage {activeStage.step}
                </span>
                <span className="text-[12px] uppercase tracking-[0.14em] text-slate-400">
                  {activeStage.subtitle}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {activeStage.title} Phase Objectives
              </h3>

              <p className="text-[15px] sm:text-[16px] text-slate-300 leading-relaxed">
                {activeStage.objective}
              </p>
            </div>

            {/* Right Deliverables Checklist */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white block">
                Verification Deliverables
              </span>
              <ul className="space-y-3">
                {activeStage.keyDeliverables.map((deliv) => (
                  <li key={deliv} className="flex items-start gap-3 text-[13px] text-slate-300">
                    <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 7.5l3 3 6-6" />
                    </svg>
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ProcessTimeline;
