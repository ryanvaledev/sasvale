"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function AboutStudio() {
  return (
    <section id="who-we-are" className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Subtle Accent Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full blur-[180px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 sm:pb-14 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                01 / THE STUDIO
              </span>
            </div>
            <h2 className="font-sans text-[32px] sm:text-[46px] lg:text-[56px] font-light sm:font-normal tracking-[-0.03em] text-[#F5F3ED] leading-[1.08] max-w-3xl">
              Not just a development team. <br />
              <span className="font-medium text-[#C6A56B]">
                A partner in building what&apos;s next.
              </span>
            </h2>
          </div>
          
          <div className="text-[11px] font-mono text-[#A8A49B]/70 tracking-widest uppercase">
            ORIENTATION // MULTI-DISCIPLINARY
          </div>
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 sm:pt-16 items-start">
          
          {/* Left Column: Typographic Statement & Authentic Imagery (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-8 sm:gap-10">
            
            {/* Bold Typographic Stance */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#C6A56B]">
              <blockquote className="text-[22px] sm:text-[28px] lg:text-[32px] font-light leading-[1.25] text-[#F5F3ED] tracking-[-0.02em]">
                &ldquo;We don&apos;t build for the sake of checking tickets. We partner with teams that care about how their technology actually performs in the market.&rdquo;
              </blockquote>
              <cite className="block not-italic text-xs font-mono tracking-widest text-[#C6A56B] uppercase mt-4">
                — SASVALE STUDIO CONVICTION
              </cite>
            </div>

            {/* Authentic Studio Feature Image */}
            <div className="relative rounded-2xl border border-white/[0.12] bg-[#0c0f17] overflow-hidden group shadow-2xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/assets/images/what-we-believe.webp"
                  alt="Sasvale Studio Craft and Creative Foundation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center grayscale contrast-125 opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-80" />
                
                {/* Image Corner Framing */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#070707]/80 backdrop-blur-md border border-white/[0.1] text-[10px] font-mono text-[#C6A56B] tracking-wider uppercase">
                  FOUNDATION // 2026
                </div>
              </div>

              {/* Image Caption & Meta Strip */}
              <div className="p-5 sm:p-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#A8A49B]">
                <span>CORE DIRECTIVE // COMMERCIAL LONGEVITY</span>
                <span className="text-[#C6A56B]">ZERO BLOAT</span>
              </div>
            </div>

            {/* Quick Reality Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <CheckCircle2 size={16} className="text-[#C6A56B]" />
                  <span className="text-xs font-mono font-semibold tracking-wider text-[#F5F3ED] uppercase">
                    NO PROXY MANAGERS
                  </span>
                </div>
                <p className="text-xs text-[#A8A49B] leading-relaxed">
                  Collaborate directly with the engineers and designers executing your vision.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <CheckCircle2 size={16} className="text-[#C6A56B]" />
                  <span className="text-xs font-mono font-semibold tracking-wider text-[#F5F3ED] uppercase">
                    MEASURABLE IMPACT
                  </span>
                </div>
                <p className="text-xs text-[#A8A49B] leading-relaxed">
                  Every feature connects directly to customer conversion, speed, or system scale.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative Content & Pillar Deep-Dives (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-[#A8A49B] text-[16px] sm:text-[17px] leading-[1.75]">
            
            <div className="space-y-6">
              <p className="text-[#F5F3ED] font-medium text-[18px] sm:text-[20px] leading-[1.6]">
                Sasvale is an independent digital studio created to bridge the divide between strategic product thinking and uncompromising software engineering.
              </p>

              <p>
                Most businesses get stuck between two extremes: agency holding companies that create slick presentations without technical depth, and dev shops that write code without understanding the business model. We built Sasvale to eliminate that compromise.
              </p>

              <p>
                We collaborate with growth-stage founders, forward-looking enterprise operators, and marketing-led brands who require dependable digital infrastructure. Whether we are architecting an e-commerce platform for international scale, building a custom operational management system, or automating complex workflows, we begin with what matters: commercial reality.
              </p>

              <p>
                Strategy shapes what should be built. Design ensures ergonomics, trust, and frictionless interactions. Engineering constructs a modular foundation that will not collapse under traffic or require an expensive rewrite twelve months later.
              </p>
            </div>

            {/* Studio Operating Principles List */}
            <div className="pt-6 border-t border-white/[0.08] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#C6A56B]">
                HOW DIRECT COLLABORATION WORKS
              </h3>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B] mt-2 shrink-0" />
                  <p className="text-sm text-[#F5F3ED]">
                    <strong className="text-[#C6A56B] font-medium">Unfiltered Communication:</strong> Real-time alignment via dedicated channels with the senior specialists writing your code.
                  </p>
                </div>
                <div className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B] mt-2 shrink-0" />
                  <p className="text-sm text-[#F5F3ED]">
                    <strong className="text-[#C6A56B] font-medium">Weekly Working Demos:</strong> We do not hide behind slide decks. You interact with working software from sprint one.
                  </p>
                </div>
                <div className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B] mt-2 shrink-0" />
                  <p className="text-sm text-[#F5F3ED]">
                    <strong className="text-[#C6A56B] font-medium">Commercial Accountability:</strong> We question assumptions when simpler, lower-cost solutions deliver better results.
                  </p>
                </div>
              </div>
            </div>

            {/* In-text Link to Capabilities */}
            <div className="pt-4">
              <Link
                href="/capabilities"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#F5F3ED] hover:text-[#C6A56B] transition-colors"
              >
                <span>Explore all studio capabilities and services</span>
                <ArrowRight size={15} className="text-[#C6A56B] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
