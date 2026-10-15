"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

export function CapabilitiesHero() {
  return (
    <section className="relative z-10 w-full min-h-[90vh] flex flex-col justify-center pt-24 sm:pt-32 lg:pt-36 pb-20 sm:pb-28 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Architectural Mesh & Subtle Gold Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(198,165,107,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(198,165,107,0.02)_1px,transparent_1px)] bg-[size:48px_48px] select-none"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[700px] h-[700px] rounded-full blur-[200px] opacity-15 bg-[#C6A56B]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full blur-[180px] opacity-10 bg-[#171717]"
        aria-hidden="true"
      />

      {/* Subtle Coordinate Markers */}
      <span className="pointer-events-none absolute top-28 left-8 sm:left-14 text-[10px] font-mono text-[#C6A56B]/30 select-none z-0">
        SYS.CAP_01 // 31.5204° N, 74.3587° E
      </span>
      <span className="pointer-events-none absolute bottom-16 right-8 sm:right-14 text-[10px] font-mono text-white/20 select-none z-0">
        FULL-SPECTRUM ENGINEERING
      </span>

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6 sm:mb-8 backdrop-blur-sm">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C6A56B] animate-pulse" />
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                OUR CAPABILITIES / WHAT WE BUILD
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans text-[40px] sm:text-[56px] md:text-[68px] xl:text-[76px] font-light tracking-[-0.035em] text-[#F5F3ED] leading-[1.04] mb-6 sm:mb-8">
              From ambitious ideas <br />
              <span className="text-[#C6A56B] font-medium">to digital products</span> <br />
              that work.
            </h1>

            {/* Supporting Description */}
            <p className="max-w-[580px] text-base sm:text-lg md:text-xl font-normal text-[#A8A49B] leading-relaxed mb-8 sm:mb-10">
              We design and develop websites, e-commerce experiences, custom software, and connected business systems that solve real problems and create room for growth.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#service-explorer"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#C6A56B] text-[#070707] font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-[#d8b87e] hover:shadow-[0_0_30px_rgba(198,165,107,0.3)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Our Capabilities</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#F5F3ED] border border-white/[0.12] hover:border-white/[0.24] font-sans font-medium text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-[#C6A56B] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust Markers Bar */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-white/[0.08] w-full grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl sm:text-3xl font-sans font-light text-[#F5F3ED]">6+</p>
                <p className="text-xs font-mono text-[#A8A49B] tracking-wider uppercase mt-1">Core Disciplines</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-sans font-light text-[#C6A56B]">100%</p>
                <p className="text-xs font-mono text-[#A8A49B] tracking-wider uppercase mt-1">Bespoke Code</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-sans font-light text-[#F5F3ED]">End-to-End</p>
                <p className="text-xs font-mono text-[#A8A49B] tracking-wider uppercase mt-1">Design & Build</p>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Animated Digital Systems Topology Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-white/[0.12] bg-[#0c0d12]/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C6A56B]" />
                  <span className="text-xs font-mono text-[#C6A56B] uppercase tracking-widest font-semibold">
                    SYSTEMS ARCHITECTURE
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#A8A49B] px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                  CONNECTED ECOSYSTEM
                </span>
              </div>

              {/* Connected Interface Frames Visual (SVG + Clean Nodes) */}
              <div className="relative w-full aspect-[4/3] rounded-xl bg-[#08090c] border border-white/[0.06] p-4 flex flex-col justify-between overflow-hidden">
                
                {/* SVG Interconnecting Vector Lines */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Subtle Grid Lines */}
                  <line x1="0" y1="75" x2="400" y2="75" stroke="#ffffff" strokeOpacity="0.04" strokeDasharray="4 4" />
                  <line x1="0" y1="150" x2="400" y2="150" stroke="#ffffff" strokeOpacity="0.04" strokeDasharray="4 4" />
                  <line x1="0" y1="225" x2="400" y2="225" stroke="#ffffff" strokeOpacity="0.04" strokeDasharray="4 4" />
                  <line x1="200" y1="0" x2="200" y2="300" stroke="#ffffff" strokeOpacity="0.04" strokeDasharray="4 4" />

                  {/* Active Gold Data Highways connecting the 5 domains */}
                  <path
                    d="M 80 60 C 140 60, 160 150, 200 150"
                    stroke="#C6A56B"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                    strokeDasharray="4 3"
                  />
                  <path
                    d="M 320 60 C 260 60, 240 150, 200 150"
                    stroke="#C6A56B"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                    strokeDasharray="4 3"
                  />
                  <path
                    d="M 80 240 C 140 240, 160 150, 200 150"
                    stroke="#C6A56B"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                    strokeDasharray="4 3"
                  />
                  <path
                    d="M 320 240 C 260 240, 240 150, 200 150"
                    stroke="#C6A56B"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                    strokeDasharray="4 3"
                  />

                  {/* Central Node Pulse Ring */}
                  <circle cx="200" cy="150" r="32" stroke="#C6A56B" strokeWidth="1" strokeOpacity="0.3" />
                  <circle cx="200" cy="150" r="22" fill="#C6A56B" fillOpacity="0.12" />
                  <circle cx="200" cy="150" r="6" fill="#C6A56B" />
                </svg>

                {/* 5 Interface Frame Cards */}
                {/* 1. Websites & Apps (Top Left) */}
                <div className="relative z-10 self-start w-36 sm:w-40 rounded-lg border border-white/[0.1] bg-[#10121a]/95 p-2.5 shadow-lg backdrop-blur-sm transition-all hover:border-[#C6A56B]/50">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-mono font-semibold tracking-wider text-[#C6A56B] uppercase">01 // WEB</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="h-2 w-3/4 bg-white/20 rounded mb-1" />
                  <div className="h-1.5 w-1/2 bg-white/10 rounded" />
                </div>

                {/* 2. E-Commerce (Top Right) */}
                <div className="relative z-10 self-end w-36 sm:w-40 rounded-lg border border-white/[0.1] bg-[#10121a]/95 p-2.5 shadow-lg backdrop-blur-sm transition-all hover:border-[#C6A56B]/50">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-mono font-semibold tracking-wider text-[#C6A56B] uppercase">02 // COMMERCE</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded bg-white/10" />
                    <div className="h-2 flex-1 bg-white/20 rounded" />
                  </div>
                </div>

                {/* Central Hub Label */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-20">
                  <span className="block text-[8px] font-mono text-[#C6A56B] font-bold tracking-[0.2em] uppercase mt-9">
                    CORE SYSTEM
                  </span>
                </div>

                {/* 3. Business Systems (Bottom Left) */}
                <div className="relative z-10 self-start w-36 sm:w-40 rounded-lg border border-white/[0.1] bg-[#10121a]/95 p-2.5 shadow-lg backdrop-blur-sm transition-all hover:border-[#C6A56B]/50">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-mono font-semibold tracking-wider text-[#C6A56B] uppercase">03 // SYSTEMS</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  </div>
                  <div className="flex gap-1">
                    <div className="h-3 w-1.5 bg-white/20 rounded-sm" />
                    <div className="h-3 w-1.5 bg-[#C6A56B] rounded-sm" />
                    <div className="h-3 w-1.5 bg-white/10 rounded-sm" />
                    <div className="h-3 flex-1 bg-white/10 rounded-sm" />
                  </div>
                </div>

                {/* 4. Automation & AI (Bottom Right) */}
                <div className="relative z-10 self-end w-36 sm:w-40 rounded-lg border border-white/[0.1] bg-[#10121a]/95 p-2.5 shadow-lg backdrop-blur-sm transition-all hover:border-[#C6A56B]/50">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-mono font-semibold tracking-wider text-[#C6A56B] uppercase">04 // AUTOMATION</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  </div>
                  <div className="flex items-center justify-between text-[9px] font-mono text-white/40">
                    <span>API SYNC</span>
                    <span className="text-[#C6A56B]">99.9%</span>
                  </div>
                </div>

              </div>

              {/* Status Footer */}
              <div className="mt-5 flex items-center justify-between text-xs font-mono text-[#A8A49B]">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Production Ready
                </span>
                <span>SASVALE STUDIO SPEC</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
