"use client";

import React, { useState } from "react";
import { AlertCircle, CheckCircle2, ArrowRight, RefreshCw, Layers } from "lucide-react";

export function ApproachComplexityToClarity() {
  const [activeView, setActiveView] = useState<"both" | "before" | "after">("both");

  return (
    <section className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div
        className="pointer-events-none absolute bottom-1/4 left-1/4 w-[600px] h-[350px] rounded-full blur-[190px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                04 / PROBLEM SOLVING
              </span>
            </div>
            <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              Complex problems. <br />
              <span className="text-[#C6A56B] font-medium">Clearer solutions.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-3">
            <span className="text-[10px] font-mono text-[#A8A49B] tracking-widest uppercase">
              ILLUSTRATIVE ARCHITECTURAL TRANSFORMATION
            </span>
            {/* View Mode Switcher */}
            <div className="inline-flex items-center p-1 rounded-full border border-white/[0.1] bg-white/[0.02] text-xs font-mono">
              <button
                onClick={() => setActiveView("both")}
                className={`px-3 py-1 rounded-full transition-colors ${
                  activeView === "both"
                    ? "bg-[#C6A56B] text-[#070707] font-semibold"
                    : "text-[#A8A49B] hover:text-[#F5F3ED]"
                }`}
              >
                COMPARE
              </button>
              <button
                onClick={() => setActiveView("before")}
                className={`px-3 py-1 rounded-full transition-colors ${
                  activeView === "before"
                    ? "bg-rose-500/20 text-rose-300 font-semibold"
                    : "text-[#A8A49B] hover:text-[#F5F3ED]"
                }`}
              >
                BEFORE
              </button>
              <button
                onClick={() => setActiveView("after")}
                className={`px-3 py-1 rounded-full transition-colors ${
                  activeView === "after"
                    ? "bg-[#C6A56B] text-[#070707] font-semibold"
                    : "text-[#A8A49B] hover:text-[#F5F3ED]"
                }`}
              >
                AFTER
              </button>
            </div>
          </div>
        </div>

        {/* Contrasting Workflow Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-14 items-stretch">
          
          {/* BEFORE: The Fragmented State (6 Cols) */}
          {(activeView === "both" || activeView === "before") && (
            <div
              className={`rounded-3xl border border-rose-500/20 bg-[#0e090a]/80 p-6 sm:p-10 shadow-xl flex flex-col justify-between transition-all duration-300 ${
                activeView === "before" ? "lg:col-span-12" : "lg:col-span-6"
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-rose-500/10">
                  <div className="flex items-center gap-2.5">
                    <AlertCircle size={16} className="text-rose-400" />
                    <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-rose-300 uppercase">
                      BEFORE // OPERATIONAL FRICTION
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-rose-400/80 px-2 py-0.5 rounded bg-rose-500/10">
                    FRAGMENTED
                  </span>
                </div>

                <p className="text-sm text-[#A8A49B] mb-6 font-light">
                  When systems evolve without a unifying architecture, operations slow down and teams waste energy on manual reconciliation.
                </p>

                {/* 4 Pain Points */}
                <div className="space-y-3.5 mb-8">
                  {[
                    { title: "Disconnected information", desc: "Data trapped in isolated tools, spreadsheets, and inbox threads." },
                    { title: "Repetitive manual tasks", desc: "Hours lost to duplicate data entry and administrative copy-pasting." },
                    { title: "Slow access to important data", desc: "Lack of central visibility delaying commercial decision-making." },
                    { title: "Unclear workflows", desc: "Bottlenecks and inconsistent human handoffs leading to human errors." },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="p-3.5 rounded-xl border border-rose-500/10 bg-rose-950/10 flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-rose-200">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#A8A49B] mt-0.5 font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schematic: Chaotic Knot */}
              <div className="p-4 rounded-xl border border-white/[0.04] bg-black/40 text-[10px] font-mono text-[#A8A49B]">
                <div className="flex items-center justify-between">
                  <span>SYSTEM LATENCY: HIGH</span>
                  <span className="text-rose-400">ERROR RISK: ELEVATED</span>
                </div>
              </div>
            </div>
          )}

          {/* AFTER: The Structured Sasvale System (6 Cols) */}
          {(activeView === "both" || activeView === "after") && (
            <div
              className={`rounded-3xl border border-[#C6A56B]/40 bg-[#0c0f16]/90 p-6 sm:p-10 shadow-xl flex flex-col justify-between transition-all duration-300 ${
                activeView === "after" ? "lg:col-span-12" : "lg:col-span-6"
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#C6A56B]/20">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C6A56B]" />
                    <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#C6A56B] uppercase">
                      AFTER // THE SASVALE STANDARD
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#C6A56B] px-2 py-0.5 rounded bg-[#C6A56B]/15 border border-[#C6A56B]/30">
                    STRUCTURED
                  </span>
                </div>

                <p className="text-sm text-[#A8A49B] mb-6 font-light">
                  A purposeful digital foundation connects user ergonomics with streamlined data flow, giving teams clarity and velocity.
                </p>

                {/* 4 Solutions */}
                <div className="space-y-3.5 mb-8">
                  {[
                    { title: "Better-connected systems", desc: "Unified APIs and central data models replace ad-hoc file transfers." },
                    { title: "Reduced repetitive work", desc: "Automated pipelines eliminate manual toil and duplicate reconciliation." },
                    { title: "Clearer information access", desc: "Immediate, structured visibility into operational status and key levers." },
                    { title: "More consistent processes", desc: "Repeatable, reliable customer and admin experiences that compound over time." },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="p-3.5 rounded-xl border border-[#C6A56B]/20 bg-[#C6A56B]/5 flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B] mt-2 shrink-0" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-[#F5F3ED]">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#A8A49B] mt-0.5 font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schematic: Clean Orchestration */}
              <div className="p-4 rounded-xl border border-[#C6A56B]/20 bg-black/40 text-[10px] font-mono text-[#A8A49B]">
                <div className="flex items-center justify-between">
                  <span>DATA FLOW: UNIFIED</span>
                  <span className="text-emerald-400">STATUS: ACCELERATED</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Section Disclaimer */}
        <div className="mt-8 pt-4 border-t border-white/[0.04] text-center text-xs font-mono text-[#A8A49B]/60">
          Illustrative comparative model representing system streamlining methodology.
        </div>

      </div>
    </section>
  );
}
