"use client";

import { useState } from "react";
import Link from "next/link";
import { servicesExplorerData } from "@/config/v2-foundation";

export function ServicesExplorer() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleRow = (idx: number) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section 
      id="services"
      className="py-20 sm:py-28 lg:py-32 border-t border-white/[0.08] bg-[#050811] text-white"
      aria-labelledby="services-explorer-heading"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
              <span>WHAT WE DO · SERVICES</span>
            </div>
            <h2 
              id="services-explorer-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.12] tracking-[-0.03em] text-white"
            >
              Services Engineered <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 bg-clip-text text-transparent">For AI-Native Scale.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-base text-slate-400 leading-relaxed">
              We architect high-concurrency digital platforms, proprietary software tools, and resilient automation pipelines that resolve specific operational constraints.
            </p>
          </div>
        </div>

        {/* Full-Width Interactive Expandable Service Rows */}
        <div className="border-t border-white/[0.08] divide-y divide-white/[0.08]">
          {servicesExplorerData.map((service, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div 
                key={service.index}
                className={`transition-colors duration-200 ${
                  isExpanded ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                }`}
              >
                {/* Clickable Header Row */}
                <button
                  type="button"
                  onClick={() => toggleRow(idx)}
                  aria-expanded={isExpanded}
                  className="w-full text-left py-7 sm:py-9 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="font-mono text-sm sm:text-base font-semibold text-cyan-400">
                      {service.index}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl lg:text-[28px] font-medium text-white hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden md:inline-block text-[13px] text-slate-400 max-w-md truncate text-right">
                      {service.tagline}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center shrink-0">
                      <svg 
                        className={`w-3.5 h-3.5 text-cyan-400 transition-transform duration-300 ${
                          isExpanded ? "rotate-45" : ""
                        }`}
                        fill="none" 
                        viewBox="0 0 14 14" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 2v10M2 7h10" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Expandable Body Panel */}
                <div 
                  className={`grid transition-all duration-300 ease-out ${
                    isExpanded ? "grid-rows-[1fr] pb-8 sm:pb-10 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-white/[0.06]">
                      
                      {/* Business Outcome Narrative */}
                      <div className="lg:col-span-7 space-y-4">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                          Business Outcome
                        </span>
                        <p className="text-[15px] sm:text-[16px] text-slate-200 leading-relaxed">
                          {service.businessOutcome}
                        </p>

                        <div className="pt-4">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 block mb-3">
                            Core Capabilities Delivered
                          </span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {service.capabilities.map((cap) => (
                              <li key={cap} className="flex items-center gap-2 text-[13px] text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                                <span>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Deliverable Callout & Action */}
                      <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                            Engineering Scope
                          </span>
                          <p className="font-display text-[15px] font-medium text-white mt-2 leading-snug">
                            {service.deliverablesSummary}
                          </p>
                        </div>

                        <div className="pt-6">
                          <Link
                            href={service.href}
                            className="inline-flex items-center gap-2 text-[13px] font-semibold text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4"
                          >
                            <span>Explore Technical Architecture</span>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" />
                            </svg>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ServicesExplorer;
