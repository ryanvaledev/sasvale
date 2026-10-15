"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export function PartnershipsCollaboration() {
  return (
    <section id="built-around-you" className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#05070c] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Subtle Accent Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[200px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                01 / A DIFFERENT KIND OF COLLABORATION
              </span>
            </div>
            <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              More than a service provider. <br />
              <span className="font-medium text-[#C6A56B]">A team invested in the work.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#A8A49B] max-w-md leading-relaxed font-light">
            We partner with operators who care about outcomes. No outsourced layers, no proxy communication.
          </p>
        </div>

        {/* Editorial Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-14 items-start">
          
          {/* Left Column: Large Typographic Conviction Statement (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#C6A56B]">
              <blockquote className="text-[24px] sm:text-[32px] lg:text-[38px] font-light leading-[1.2] text-[#F5F3ED] tracking-[-0.02em]">
                &ldquo;We don&apos;t treat software as a checklist of tickets. We treat it as an engine for <span className="text-[#C6A56B] font-medium">commercial longevity</span>.&rdquo;
              </blockquote>
              <cite className="block not-italic text-xs font-mono tracking-widest text-[#C6A56B] uppercase mt-4">
                — SASVALE PARTNERSHIP ETHOS
              </cite>
            </div>

            <div className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#080a0f] space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#C6A56B] block">
                SENIOR COLLABORATION PRINCIPLE
              </span>
              <p className="text-sm text-[#A8A49B] leading-relaxed font-light">
                Too many development agencies isolate their clients behind junior project managers and confusing jargon. At Sasvale, the specialists who plan your platform are the senior engineers and designers shipping the code.
              </p>
            </div>
          </div>

          {/* Right Column: Paragraph Content & 3 Simple Principles (6 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            <p className="text-[17px] sm:text-[19px] text-[#F5F3ED] leading-relaxed font-light">
              Technology projects work better when business context, design decisions, and technical execution stay connected. We aim to work closely with the people behind the product, keeping communication clear and the focus on what needs to be achieved.
            </p>

            {/* 3 Principles with Refined Typography and Fine Separators */}
            <div className="divide-y divide-white/[0.08] pt-4">
              
              {/* Principle 01 */}
              <div className="py-6 first:pt-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-[#C6A56B]">01</span>
                  <h3 className="font-sans text-lg sm:text-xl font-semibold text-[#F5F3ED]">
                    Understand the Business
                  </h3>
                </div>
                <p className="text-sm text-[#A8A49B] pl-7 leading-relaxed font-light">
                  Start with the real goals, user bottlenecks, and commercial constraints before choosing technologies or writing code.
                </p>
              </div>

              {/* Principle 02 */}
              <div className="py-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-[#6E8FAF]">02</span>
                  <h3 className="font-sans text-lg sm:text-xl font-semibold text-[#F5F3ED]">
                    Work Together
                  </h3>
                </div>
                <p className="text-sm text-[#A8A49B] pl-7 leading-relaxed font-light">
                  Keep decisions, feedback, and responsibilities transparent through continuous working demos and direct sprint visibility.
                </p>
              </div>

              {/* Principle 03 */}
              <div className="py-6 last:pb-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-[#5F9F92]">03</span>
                  <h3 className="font-sans text-lg sm:text-xl font-semibold text-[#F5F3ED]">
                    Build for the Future
                  </h3>
                </div>
                <p className="text-sm text-[#A8A49B] pl-7 leading-relaxed font-light">
                  Create clean, maintainable, strictly typed architectures that your team owns completely and can evolve as needs change.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
