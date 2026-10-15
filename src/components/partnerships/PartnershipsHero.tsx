"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export function PartnershipsHero() {
  return (
    <section className="relative z-10 w-full min-h-[92vh] flex flex-col justify-between pt-8 sm:pt-14 lg:pt-20 pb-12 sm:pb-16 overflow-hidden bg-[#070707] border-b border-white/[0.08]">
      {/* Background Architectural Grid Lines */}
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
            <span>ENGAGEMENT SPEC // REF. 03-PARTNERSHIPS</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>MODEL // CO-ENGINEERED</span>
            <span className="text-[#C6A56B]/70">DIRECT SENIOR ACCESS</span>
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
                PARTNERSHIPS / WORK WITH SASVALE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans text-[38px] sm:text-[54px] md:text-[64px] lg:text-[72px] xl:text-[80px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.04] mb-6 sm:mb-8">
              Your ambition. <br />
              <span className="font-medium text-[#F5F3ED]">Our expertise.</span> <br />
              <span className="font-medium text-[#C6A56B] underline decoration-[#C6A56B]/40 decoration-1 underline-offset-8">
                One shared direction.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#A8A49B] font-normal leading-[1.65] max-w-2xl mb-8 sm:mb-10">
              From new digital products to complex business systems, we collaborate with ambitious teams to turn ideas, challenges, and opportunities into practical technology.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <a
                href="#ways-to-work"
                className="group relative inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#070707] hover:bg-[#d8b87e] shadow-lg shadow-[#C6A56B]/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#C6A56B] focus-visible:outline-offset-4"
                aria-label="Explore Ways to Work Together"
              >
                <span>Explore Ways to Work Together</span>
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F5F3ED] border border-white/[0.14] bg-white/[0.02] hover:border-[#C6A56B]/50 hover:bg-white/[0.06] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#C6A56B] focus-visible:outline-offset-4"
                aria-label="Start a Conversation"
              >
                <span>Start a Conversation</span>
                <ArrowRight
                  size={15}
                  className="text-[#C6A56B] transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

          </div>

          {/* Right Column: Custom Animated SVG Partnership Topology (5 Cols) */}
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
                      PARTNERSHIP ARCHITECTURE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A8A49B]/70 tracking-wider">
                    SHARED NETWORK
                  </span>
                </div>

                {/* Bespoke Interactive Partnership SVG Visual */}
                <div className="relative aspect-[4/3] w-full flex items-center justify-center p-2 select-none">
                  <svg
                    viewBox="0 0 320 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    aria-hidden="true"
                  >
                    {/* Background Subtle Radar Rings */}
                    <circle cx="160" cy="110" r="90" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
                    <circle cx="160" cy="110" r="55" stroke="rgba(198,165,107,0.1)" />

                    {/* Left Node: Client Ambition System */}
                    <rect x="25" y="80" width="85" height="60" rx="8" fill="#111726" stroke="#6E8FAF" strokeWidth="1.2" />
                    <circle cx="40" cy="98" r="4" fill="#6E8FAF" />
                    <text x="50" y="101" fill="#F5F3ED" fontSize="8" fontFamily="monospace" fontWeight="bold">YOUR SIDE</text>
                    <text x="35" y="117" fill="#A8A49B" fontSize="7" fontFamily="monospace">Domain Knowledge</text>
                    <text x="35" y="128" fill="#A8A49B" fontSize="7" fontFamily="monospace">Commercial Goals</text>

                    {/* Right Node: Sasvale Engineering System */}
                    <rect x="210" y="80" width="85" height="60" rx="8" fill="#151922" stroke="#C6A56B" strokeWidth="1.2" />
                    <circle cx="225" cy="98" r="4" fill="#C6A56B" />
                    <text x="235" y="101" fill="#F5F3ED" fontSize="8" fontFamily="monospace" fontWeight="bold">SASVALE</text>
                    <text x="220" y="117" fill="#A8A49B" fontSize="7" fontFamily="monospace">Senior Software</text>
                    <text x="220" y="128" fill="#A8A49B" fontSize="7" fontFamily="monospace">System Design</text>

                    {/* Connecting Converging Gold Paths */}
                    <path d="M 110 110 C 135 110, 135 110, 160 110" stroke="#C6A56B" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M 210 110 C 185 110, 185 110, 160 110" stroke="#C6A56B" strokeWidth="1.5" strokeDasharray="3 3" />

                    {/* Central Co-Engineered Product Core */}
                    <circle cx="160" cy="110" r="26" fill="#070707" stroke="#C6A56B" strokeWidth="1.5" />
                    <circle cx="160" cy="110" r="20" fill="#1a1813" />
                    <text x="160" y="108" fill="#C6A56B" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SHARED</text>
                    <text x="160" y="118" fill="#F5F3ED" fontSize="7" fontFamily="monospace" textAnchor="middle">OUTCOME</text>

                    {/* Top Telemetry Arrow */}
                    <path d="M 160 50 L 160 84" stroke="rgba(198,165,107,0.4)" strokeWidth="1" strokeDasharray="2 2" />
                    <polygon points="158,82 160,86 162,82" fill="#C6A56B" />
                    <text x="160" y="42" fill="#A8A49B" fontSize="7" fontFamily="monospace" textAnchor="middle">TRANSPARENT SPRINT RUNTIME</text>

                    {/* Bottom Status Node */}
                    <path d="M 160 136 L 160 170" stroke="rgba(198,165,107,0.4)" strokeWidth="1" strokeDasharray="2 2" />
                    <polygon points="158,168 160,172 162,168" fill="#C6A56B" />
                    <text x="160" y="184" fill="#5F9F92" fontSize="7" fontFamily="monospace" textAnchor="middle">100% CLIENT IP OWNERSHIP</text>
                  </svg>
                </div>

                {/* Footer Telemetry Stamp */}
                <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#A8A49B]">
                  <span>COLLABORATION MODEL</span>
                  <span className="text-emerald-400">DIRECT &bull; UNIFIED</span>
                </div>

              </div>

              {/* Decorative Floating Status Tag */}
              <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-4 -left-4 px-3.5 py-2 rounded-lg border border-white/[0.12] bg-[#070707] text-[10px] font-mono text-[#A8A49B] shadow-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>ACCEPTING SELECT PARTNERSHIPS</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator & Progress */}
      <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-8 sm:pt-10">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#A8A49B]/70 tracking-widest uppercase border-t border-white/[0.06] pt-4">
          <a
            href="#built-around-you"
            className="group inline-flex items-center gap-2.5 text-[#A8A49B] hover:text-[#C6A56B] transition-colors focus-visible:outline-none focus-visible:text-[#C6A56B]"
            aria-label="Scroll to Section 01: A Different Kind of Collaboration"
          >
            <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[9px] group-hover:translate-y-0.5 transition-transform">
              ↓
            </span>
            <span>SCROLL TO ENGAGEMENT</span>
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
