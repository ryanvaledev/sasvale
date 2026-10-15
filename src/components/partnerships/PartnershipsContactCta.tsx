"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Mail } from "lucide-react";

export function PartnershipsContactCta() {
  return (
    <section className="relative z-10 w-full py-28 sm:py-36 lg:py-44 bg-[#070707] text-[#F5F3ED] overflow-hidden border-t border-white/[0.08]">
      
      {/* Background Atmospheric Radial Glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full blur-[180px] opacity-15 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.03] mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B] animate-pulse" aria-hidden="true" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.24em] uppercase text-[#C6A56B]">
              LET&apos;S WORK TOGETHER
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-sans text-[36px] sm:text-[54px] md:text-[66px] lg:text-[76px] font-light tracking-[-0.035em] text-[#F5F3ED] leading-[1.04] mb-6 sm:mb-8">
            The right partnership <br />
            <span className="text-[#C6A56B] font-medium">changes what&apos;s possible.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-[16px] sm:text-[19px] lg:text-[21px] text-[#A8A49B] font-light leading-relaxed max-w-2xl mb-10 sm:mb-12">
            Have a product to launch, a system to improve, or a business challenge worth solving? Tell us what you&apos;re working on.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mb-14">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-9 py-4.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#070707] hover:bg-[#d8b87e] shadow-2xl shadow-[#C6A56B]/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#C6A56B] focus-visible:outline-offset-4"
              aria-label="Start a Conversation with Sasvale"
            >
              <span>Start a Conversation</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/approach"
              className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F5F3ED] border border-white/[0.14] bg-white/[0.02] hover:border-[#C6A56B]/60 hover:bg-white/[0.06] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#C6A56B] focus-visible:outline-offset-4"
              aria-label="Explore Our Approach"
            >
              <span>Explore Our Approach</span>
              <span className="text-[#C6A56B] transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          {/* Telemetry Commitment Strip */}
          <div className="pt-10 border-t border-white/[0.08] w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-[#A8A49B]">
            <div className="flex items-center justify-center gap-2">
              <Clock size={14} className="text-[#C6A56B]" />
              <span>DIRECT RESPONSE WITHIN 24 HOURS</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail size={14} className="text-[#C6A56B]" />
              <span className="text-[#F5F3ED]">HELLO@SASVALE.COM</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
