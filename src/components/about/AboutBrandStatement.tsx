"use client";

import React from "react";

export function AboutBrandStatement() {
  return (
    <section className="relative z-10 w-full py-28 sm:py-36 lg:py-48 bg-[#070707] light:bg-[#F5F3ED] text-[#F5F3ED] light:text-[#070707] border-b border-white/[0.08] light:border-[#070707]/10 transition-colors duration-300 overflow-hidden select-none">
      
      {/* Background Architectural Watermark Lines */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(198,165,107,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(198,165,107,0.025)_1px,transparent_1px)] light:bg-[linear-gradient(to_right,rgba(7,7,7,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(7,7,7,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"
        aria-hidden="true"
      />

      {/* Atmospheric Specular Glow (Dark Mode) */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[160px] opacity-10 light:opacity-0 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        
        {/* Subtle Editorial Eyebrow */}
        <div className="flex items-center justify-between pb-8 sm:pb-12 border-b border-white/[0.08] light:border-[#070707]/10 mb-10 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C6A56B]" />
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#F5F3ED]/70 light:text-[#070707]/70 uppercase">
              SASVALE CORE AXIOM // 08
            </span>
          </div>
          <span className="text-[11px] font-mono tracking-widest text-[#A8A49B]/70 light:text-[#070707]/50 uppercase hidden sm:inline">
            INTENTIONAL ENGINEERING
          </span>
        </div>

        {/* Oversized Signature Typographic Statement */}
        <div className="max-w-5xl">
          <h2 className="font-sans text-[36px] sm:text-[56px] md:text-[68px] lg:text-[80px] xl:text-[88px] font-light leading-[1.04] tracking-[-0.04em] text-[#F5F3ED] light:text-[#070707]">
            We don&apos;t build for the sake of building. <br />
            <span className="font-semibold relative inline-block text-[#F5F3ED] light:text-[#070707]">
              We build to make things better.
              {/* Refined Champagne Gold Underline Accent */}
              <span
                className="absolute left-0 bottom-1 sm:bottom-2 w-full h-[3px] sm:h-[4px] bg-[#C6A56B] rounded-full"
                aria-hidden="true"
              />
            </span>
          </h2>

          {/* Supporting Micro-Narrative */}
          <div className="mt-10 sm:mt-14 max-w-2xl">
            <p className="text-[17px] sm:text-[20px] font-light text-[#A8A49B] light:text-[#070707]/70 leading-relaxed">
              Every system architecture, user interface flow, and automated pipeline is evaluated against a simple commercial standard: does this make the business faster, clearer, and more resilient?
            </p>
          </div>
        </div>

        {/* Bottom Editorial Coordinates Stamp */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-white/[0.08] light:border-[#070707]/10 flex items-center justify-between text-[10px] font-mono text-[#A8A49B]/70 light:text-[#070707]/50 tracking-widest uppercase">
          <span>THE SASVALE STANDARD</span>
          <span className="text-[#C6A56B] font-bold">ZERO UNNECESSARY CODE</span>
        </div>

      </div>
    </section>
  );
}
