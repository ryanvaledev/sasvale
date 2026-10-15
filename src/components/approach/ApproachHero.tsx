"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export function ApproachHero() {
  return (
    <section className="relative z-10 w-full min-h-[92vh] flex flex-col justify-between pt-8 sm:pt-14 lg:pt-20 pb-12 sm:pb-16 overflow-hidden bg-[#070707] border-b border-white/[0.08]">
      {/* Background Architectural Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(198,165,107,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(198,165,107,0.02)_1px,transparent_1px)] bg-[size:48px_48px] select-none"
        aria-hidden="true"
      />

      {/* Atmospheric Specular Radial Glow */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[750px] h-[480px] rounded-full blur-[170px] opacity-15 bg-[#C6A56B]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[360px] rounded-full blur-[150px] opacity-10 bg-[#6E8FAF]"
        aria-hidden="true"
      />

      {/* Top Subtle Coordinates Telemetry */}
      <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-6 sm:mb-10">
        <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.24em] text-[#A8A49B]/60 uppercase border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C6A56B] animate-pulse" />
            <span>METHODOLOGY SPEC // REF. 02-APPROACH</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>DISCIPLINE // PRODUCT &amp; SYSTEMS</span>
            <span className="text-[#C6A56B]/70">5-STAGE DELIVERY</span>
          </div>
        </div>
      </div>

      {/* Main Content Viewport */}
      <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Thesis (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.03] mb-6 sm:mb-8 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.22em] uppercase text-[#C6A56B]">
                OUR APPROACH / HOW WE WORK
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans text-[38px] sm:text-[54px] md:text-[64px] lg:text-[72px] xl:text-[80px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.04] mb-6 sm:mb-8">
              Great digital products <br />
              <span className="font-medium text-[#C6A56B] underline decoration-[#C6A56B]/40 decoration-1 underline-offset-8">
                don&apos;t happen by accident.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#A8A49B] font-normal leading-[1.65] max-w-2xl mb-8 sm:mb-10">
              From the first conversation to the final launch, we combine clear thinking, thoughtful design, and practical engineering to create digital products that work for the people and businesses behind them.
            </p>

            {/* CTAs with Asymmetric Styling */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <a
                href="#the-process"
                className="group relative inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#070707] hover:bg-[#d8b87e] shadow-lg shadow-[#C6A56B]/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#C6A56B] focus-visible:outline-offset-4"
                aria-label="Explore Our Process"
              >
                <span>Explore Our Process</span>
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F5F3ED] border border-white/[0.14] bg-white/[0.02] hover:border-[#C6A56B]/50 hover:bg-white/[0.06] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#C6A56B] focus-visible:outline-offset-4"
                aria-label="Start a Project"
              >
                <span>Start a Project</span>
                <ArrowRight
                  size={15}
                  className="text-[#C6A56B] transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

          </div>

          {/* Right Column: Original SVG Workflow Topology Diagram (5 Cols) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[460px] relative">
              
              {/* Outer Architectural Framing */}
              <div className="relative rounded-2xl border border-white/[0.12] bg-[#0c0f17]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden group">
                
                {/* Hairline Technical Corner Brackets */}
                <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-[#C6A56B]/60" aria-hidden="true" />
                <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-[#C6A56B]/60" aria-hidden="true" />
                <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-[#C6A56B]/60" aria-hidden="true" />
                <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-[#C6A56B]/60" aria-hidden="true" />

                {/* Sub-header Meta Bar */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C6A56B]" />
                    <span className="text-[10px] font-mono tracking-widest text-[#F5F3ED] uppercase">
                      DELIVERY FLOW ARCHITECTURE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A8A49B]/70 tracking-wider">
                    CONTINUOUS QA
                  </span>
                </div>

                {/* Original Interactive Workflow Visualization */}
                <div className="relative py-2 space-y-3 font-mono text-xs">
                  
                  {/* Stage 01: Understand */}
                  <div className="p-3.5 rounded-xl border border-white/[0.08] bg-black/40 flex items-center justify-between transition-all duration-300 hover:border-[#C6A56B]/50 hover:bg-black/60">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-[#C6A56B] px-1.5 py-0.5 rounded bg-[#C6A56B]/10">01</span>
                      <span className="font-semibold text-[#F5F3ED]">UNDERSTAND</span>
                    </div>
                    <span className="text-[11px] text-[#A8A49B]">Audit &bull; Requirements</span>
                  </div>

                  {/* Connecting Vector */}
                  <div className="flex justify-center -my-1 text-[#C6A56B]/60 select-none text-xs">
                    ↓
                  </div>

                  {/* Stage 02: Decide */}
                  <div className="p-3.5 rounded-xl border border-white/[0.08] bg-black/40 flex items-center justify-between transition-all duration-300 hover:border-[#6E8FAF]/50 hover:bg-black/60">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-[#6E8FAF] px-1.5 py-0.5 rounded bg-[#6E8FAF]/10">02</span>
                      <span className="font-semibold text-[#F5F3ED]">DECIDE</span>
                    </div>
                    <span className="text-[11px] text-[#A8A49B]">Scope &bull; Architecture</span>
                  </div>

                  {/* Connecting Vector */}
                  <div className="flex justify-center -my-1 text-[#6E8FAF]/60 select-none text-xs">
                    ↓
                  </div>

                  {/* Stage 03: Build */}
                  <div className="p-3.5 rounded-xl border border-[#C6A56B]/40 bg-[#C6A56B]/5 flex items-center justify-between shadow-lg shadow-[#C6A56B]/5">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-[#C6A56B] px-1.5 py-0.5 rounded bg-[#C6A56B]/20">03</span>
                      <span className="font-semibold text-[#F5F3ED]">BUILD</span>
                    </div>
                    <span className="text-[11px] text-[#C6A56B]">Sprint Execution &bull; Demos</span>
                  </div>

                  {/* Connecting Vector */}
                  <div className="flex justify-center -my-1 text-[#C6A56B]/60 select-none text-xs">
                    ↓
                  </div>

                  {/* Stage 04: Automate */}
                  <div className="p-3.5 rounded-xl border border-white/[0.08] bg-black/40 flex items-center justify-between transition-all duration-300 hover:border-[#5F9F92]/50 hover:bg-black/60">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-[#5F9F92] px-1.5 py-0.5 rounded bg-[#5F9F92]/10">04</span>
                      <span className="font-semibold text-[#F5F3ED]">AUTOMATE</span>
                    </div>
                    <span className="text-[11px] text-[#A8A49B]">Targeted Pipelines</span>
                  </div>

                  {/* Connecting Vector */}
                  <div className="flex justify-center -my-1 text-[#5F9F92]/60 select-none text-xs">
                    ↓
                  </div>

                  {/* Stage 05: Scale */}
                  <div className="p-3.5 rounded-xl border border-white/[0.08] bg-black/40 flex items-center justify-between transition-all duration-300 hover:border-[#C6A56B]/50 hover:bg-black/60">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-[#C6A56B] px-1.5 py-0.5 rounded bg-[#C6A56B]/10">05</span>
                      <span className="font-semibold text-[#F5F3ED]">SCALE</span>
                    </div>
                    <span className="text-[11px] text-[#A8A49B]">Launch &bull; Handover</span>
                  </div>

                </div>

                {/* Footer Telemetry Stamp */}
                <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#A8A49B]">
                  <span>DISCOVERY TO RELEASE</span>
                  <span className="text-emerald-400">100% COLLABORATIVE</span>
                </div>

              </div>

              {/* Decorative Floating Status Tag */}
              <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-4 -left-4 px-3.5 py-2 rounded-lg border border-white/[0.12] bg-[#070707] text-[10px] font-mono text-[#A8A49B] shadow-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>DIRECT SENIOR ENGAGEMENT</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator & Progress */}
      <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-8 sm:pt-10">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#A8A49B]/70 tracking-widest uppercase border-t border-white/[0.06] pt-4">
          <a
            href="#big-picture"
            className="group inline-flex items-center gap-2.5 text-[#A8A49B] hover:text-[#C6A56B] transition-colors focus-visible:outline-none focus-visible:text-[#C6A56B]"
            aria-label="Scroll to Section 01: The Big Picture"
          >
            <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[9px] group-hover:translate-y-0.5 transition-transform">
              ↓
            </span>
            <span>SCROLL TO METHODOLOGY</span>
          </a>
          <div className="flex items-center gap-3">
            <span className="text-[#C6A56B] font-semibold">01</span>
            <span className="w-8 h-px bg-white/20" />
            <span>10 SECTIONS</span>
          </div>
        </div>
      </div>

    </section>
  );
}
