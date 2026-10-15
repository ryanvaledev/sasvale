"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function CapabilitiesContactCta() {
  return (
    <section className="relative z-10 w-full py-24 sm:py-32 lg:py-40 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Architectural Mesh & Subtle Gold Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(198,165,107,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(198,165,107,0.02)_1px,transparent_1px)] bg-[size:48px_48px] select-none"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[220px] opacity-15 bg-[#C6A56B]"
        aria-hidden="true"
      />

      {/* Decorative Technical Grid Markers */}
      <span className="pointer-events-none absolute top-12 left-8 sm:left-16 text-[9px] font-mono text-[#C6A56B]/25 select-none" aria-hidden="true">+</span>
      <span className="pointer-events-none absolute top-12 right-8 sm:right-16 text-[9px] font-mono text-white/20 select-none" aria-hidden="true">+</span>
      <span className="pointer-events-none absolute bottom-12 left-8 sm:left-16 text-[9px] font-mono text-white/20 select-none" aria-hidden="true">+</span>
      <span className="pointer-events-none absolute bottom-12 right-8 sm:right-16 text-[9px] font-mono text-[#C6A56B]/25 select-none" aria-hidden="true">+</span>

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8 backdrop-blur-sm">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C6A56B] animate-pulse" />
          <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
            LET&apos;S CREATE SOMETHING MEANINGFUL
          </span>
        </div>

        {/* Expressive Editorial Headline */}
        <h2 className="font-sans text-[42px] sm:text-[60px] md:text-[72px] lg:text-[84px] font-light tracking-[-0.035em] text-[#F5F3ED] leading-[1.04] mb-8">
          Have an idea? <br />
          <span className="text-[#C6A56B] font-medium">Let&apos;s make it work.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="max-w-[640px] mx-auto text-base sm:text-lg md:text-xl font-normal text-[#A8A49B] leading-relaxed mb-12">
          Whether you need a website, online store, custom application, or a better way to manage your business, we&apos;d like to hear what you&apos;re working on.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-[480px] mx-auto">
          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#C6A56B] text-[#070707] font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-[#d8b87e] hover:shadow-[0_0_30px_rgba(198,165,107,0.3)] hover:-translate-y-0.5"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/work"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#F5F3ED] border border-white/[0.12] hover:border-white/[0.24] font-sans font-medium text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Explore Our Work</span>
            <ArrowUpRight className="w-4 h-4 text-[#C6A56B] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Studio Direct Contact Note */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-[#A8A49B]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Accepting New Engagements
          </span>
          <span>direct contact: inquiries@sasvale.com</span>
          <span className="text-[#C6A56B]">100% IP OWNERSHIP HANDOVER</span>
        </div>

      </div>
    </section>
  );
}
