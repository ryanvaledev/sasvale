"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, ShieldCheck, Terminal } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative z-10 w-full min-h-[92vh] flex flex-col justify-between pt-8 sm:pt-14 lg:pt-20 pb-12 sm:pb-16 overflow-hidden bg-[#070707] border-b border-white/[0.08]">
      {/* Background Architectural Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(198,165,107,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(198,165,107,0.02)_1px,transparent_1px)] bg-[size:48px_48px] select-none"
        aria-hidden="true"
      />

      {/* Atmospheric Specular Glow */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[720px] h-[480px] rounded-full blur-[160px] opacity-15 bg-[#C6A56B]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[350px] rounded-full blur-[140px] opacity-10 bg-[#6E8FAF]"
        aria-hidden="true"
      />

      {/* Top Subtle Coordinates Telemetry */}
      <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-6 sm:mb-10">
        <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.24em] text-[#A8A49B]/60 uppercase border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C6A56B] animate-pulse" />
            <span>STUDIO PROFILE // REF. 00-ABOUT</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>LOC // 29.7604° N, 95.3698° W</span>
            <span className="text-[#C6A56B]/70">EST. INDEPENDENT</span>
          </div>
        </div>
      </div>

      {/* Main Content Viewport */}
      <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Stance (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.03] mb-6 sm:mb-8 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.22em] uppercase text-[#C6A56B]">
                ABOUT SASVALE — INDEPENDENT DIGITAL STUDIO
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans text-[38px] sm:text-[54px] md:text-[64px] lg:text-[72px] xl:text-[80px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.04] mb-6 sm:mb-8">
              Independent minds. <br />
              <span className="font-medium text-[#F5F3ED]">Serious engineering.</span> <br />
              <span className="text-[#C6A56B] font-medium italic sm:not-italic underline decoration-[#C6A56B]/40 decoration-1 underline-offset-8">
                Built for what matters.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#A8A49B] font-normal leading-[1.65] max-w-2xl mb-8 sm:mb-10">
              Sasvale is an independent digital studio combining strategy, design, engineering, and automation to build digital products that solve real business problems.
            </p>

            {/* CTAs with Asymmetric Styling */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <Link
                href="/work"
                className="group relative inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#070707] hover:bg-[#d8b87e] shadow-lg shadow-[#C6A56B]/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#C6A56B] focus-visible:outline-offset-4"
                aria-label="Explore Our Work"
              >
                <span>Explore Our Work</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F5F3ED] border border-white/[0.14] bg-white/[0.02] hover:border-[#C6A56B]/50 hover:bg-white/[0.06] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#C6A56B] focus-visible:outline-offset-4"
                aria-label="Let's Talk"
              >
                <span>Let&apos;s Talk</span>
                <span className="text-[#C6A56B] transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

          </div>

          {/* Right Column: Visually Compelling Architectural Composition (5 Cols) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[460px] relative">
              
              {/* Outer Architectural Framing */}
              <div className="relative rounded-2xl border border-white/[0.12] bg-[#0c0f17]/85 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden group">
                
                {/* Hairline Technical Corner Accents */}
                <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-[#C6A56B]/60" aria-hidden="true" />
                <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-[#C6A56B]/60" aria-hidden="true" />
                <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-[#C6A56B]/60" aria-hidden="true" />
                <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-[#C6A56B]/60" aria-hidden="true" />

                {/* Sub-header Meta Bar */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C6A56B]" />
                    <span className="text-[10px] font-mono tracking-widest text-[#F5F3ED] uppercase">
                      STUDIO SCHEMATIC
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A8A49B]/70 tracking-wider">
                    SPEC // V2.0
                  </span>
                </div>

                {/* Bespoke Concentric Architecture & Studio Monogram */}
                <div className="relative aspect-square flex items-center justify-center my-2 select-none">
                  
                  {/* Concentric Golden Ratio Technical Rings */}
                  <div className="absolute inset-4 rounded-full border border-dashed border-[#C6A56B]/20 animate-[spin_60s_linear_infinite]" aria-hidden="true" />
                  <div className="absolute inset-12 rounded-full border border-white/[0.08]" aria-hidden="true" />
                  <div className="absolute inset-20 rounded-full border border-[#C6A56B]/30" aria-hidden="true" />

                  {/* Cardinal Axis Crosshairs */}
                  <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-[#C6A56B]/25 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-y-2 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[#C6A56B]/25 to-transparent" aria-hidden="true" />

                  {/* Central Authentic Monogram Floating In Specular Light */}
                  <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center p-3 rounded-2xl border border-white/[0.12] bg-[#070707]/90 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                    <div className="relative w-full h-full">
                      <Image
                        src="/assets/brand/Icon.png"
                        alt="Sasvale Studio Monogram"
                        fill
                        priority
                        sizes="(max-width: 640px) 112px, 128px"
                        className="object-contain mix-blend-screen drop-shadow-[0_0_20px_rgba(198,165,107,0.35)]"
                      />
                    </div>
                  </div>

                  {/* Corner Coordinate Badges */}
                  <div className="absolute top-4 left-4 text-[9px] font-mono text-[#A8A49B]/60 tracking-wider">
                    SYS // 01
                  </div>
                  <div className="absolute top-4 right-4 text-[9px] font-mono text-[#C6A56B]/80 tracking-wider">
                    RIGOR
                  </div>
                  <div className="absolute bottom-4 left-4 text-[9px] font-mono text-[#C6A56B]/80 tracking-wider">
                    SCALE
                  </div>
                  <div className="absolute bottom-4 right-4 text-[9px] font-mono text-[#A8A49B]/60 tracking-wider">
                    2026+
                  </div>
                </div>

                {/* Studio Philosophy Triad Strip */}
                <div className="mt-6 pt-4 border-t border-white/[0.08] grid grid-cols-3 gap-2 text-center">
                  <div className="px-1 py-1.5 rounded bg-white/[0.02] border border-white/[0.04]">
                    <span className="block text-[9px] font-mono tracking-widest text-[#C6A56B] uppercase">01</span>
                    <span className="block text-[10px] sm:text-[11px] font-medium text-[#F5F3ED] mt-0.5">Strategy</span>
                  </div>
                  <div className="px-1 py-1.5 rounded bg-white/[0.02] border border-white/[0.04]">
                    <span className="block text-[9px] font-mono tracking-widest text-[#6E8FAF] uppercase">02</span>
                    <span className="block text-[10px] sm:text-[11px] font-medium text-[#F5F3ED] mt-0.5">Automation</span>
                  </div>
                  <div className="px-1 py-1.5 rounded bg-white/[0.02] border border-white/[0.04]">
                    <span className="block text-[9px] font-mono tracking-widest text-[#C6A56B] uppercase">03</span>
                    <span className="block text-[10px] sm:text-[11px] font-medium text-[#F5F3ED] mt-0.5">Scale</span>
                  </div>
                </div>

              </div>

              {/* Decorative Floating Status Tag */}
              <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-4 -left-4 px-3.5 py-2 rounded-lg border border-white/[0.12] bg-[#070707] text-[10px] font-mono text-[#A8A49B] shadow-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>ACCEPTING SELECT ENGAGEMENTS</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator & Section Progress */}
      <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-8 sm:pt-10">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#A8A49B]/70 tracking-widest uppercase border-t border-white/[0.06] pt-4">
          <a
            href="#who-we-are"
            className="group inline-flex items-center gap-2.5 text-[#A8A49B] hover:text-[#C6A56B] transition-colors focus-visible:outline-none focus-visible:text-[#C6A56B]"
            aria-label="Scroll to Section 01: The Studio"
          >
            <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[9px] group-hover:translate-y-0.5 transition-transform">
              ↓
            </span>
            <span>SCROLL TO EXPLORE</span>
          </a>
          <div className="flex items-center gap-3">
            <span className="text-[#C6A56B] font-semibold">01</span>
            <span className="w-8 h-px bg-white/20" />
            <span>09 SECTIONS</span>
          </div>
        </div>
      </div>

    </section>
  );
}
