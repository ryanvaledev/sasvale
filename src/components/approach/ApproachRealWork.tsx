"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface RealWorkCase {
  slug: string;
  name: string;
  category: string;
  industry: string;
  image: string;
  problem: string;
  solution: string;
  href: string;
}

const CASES: RealWorkCase[] = [
  {
    slug: "ethletia",
    name: "Ethletia",
    category: "Digital Commerce",
    industry: "Sportswear / Activewear",
    image: "/assets/projects/ethletia.png",
    problem:
      "Activewear shoppers require immediate clarity on product fit and brand identity without wading through clunky navigation.",
    solution:
      "Engineered an intuitive storefront balancing high-impact visual branding with structured catalog filtering and direct checkout flow.",
    href: "/work/ethletia",
  },
  {
    slug: "wind-deflectors",
    name: "Wind Deflectors",
    category: "E-Commerce",
    industry: "Automotive Parts",
    image: "/assets/projects/wind.png",
    problem:
      "Automotive parts buyers need absolute confidence in vehicle compatibility and make/model fitment before ordering.",
    solution:
      "Developed a precision technical catalog organized by vehicle specifications and streamlined order intake to eliminate fitment guesswork.",
    href: "/work/wind-deflectors",
  },
];

export function ApproachRealWork() {
  return (
    <section className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#05070c] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Accent Glow */}
      <div
        className="pointer-events-none absolute bottom-1/4 right-0 w-[550px] h-[550px] rounded-full blur-[200px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                07 / PROCESS IN PRACTICE
              </span>
            </div>
            <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              Different challenges. <br />
              <span className="text-[#C6A56B] font-medium">The same commitment to doing things properly.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2">
            <span className="text-[11px] font-mono text-[#A8A49B] tracking-widest uppercase">
              ACTUAL SASVALE DELIVERABLES
            </span>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[#C6A56B] hover:text-[#d8b87e] transition-colors"
            >
              <span>Explore All Work</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 2 Large Project Compositions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-14">
          {CASES.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              className="group relative flex flex-col rounded-3xl border border-white/[0.1] bg-[#090b10] overflow-hidden transition-all duration-500 hover:border-[#C6A56B]/50 hover:shadow-2xl hover:shadow-[#C6A56B]/10"
              aria-label={`View ${item.name} case study`}
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c0f17] border-b border-white/[0.08]">
                <Image
                  src={item.image}
                  alt={`${item.name} product case study`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-60" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[#070707]/80 backdrop-blur-md border border-white/[0.12] text-[#F5F3ED]">
                    {item.category}
                  </span>

                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                    LIVE PLATFORM
                  </span>
                </div>
              </div>

              {/* Narrative Content */}
              <div className="p-7 sm:p-9 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-sans text-[24px] sm:text-[28px] font-medium tracking-tight text-[#F5F3ED] group-hover:text-[#C6A56B] transition-colors">
                      {item.name}
                    </h3>
                    <div className="w-8 h-8 rounded-full border border-white/[0.12] flex items-center justify-center text-[#F5F3ED] group-hover:border-[#C6A56B] group-hover:text-[#C6A56B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <p className="text-xs font-mono tracking-wider uppercase text-[#C6A56B] mb-5">
                    {item.industry}
                  </p>

                  {/* Problem & Solution */}
                  <div className="space-y-4 pt-2">
                    <div className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                      <span className="block text-[10px] font-mono uppercase tracking-widest text-[#A8A49B] mb-1 font-semibold">
                        THE CHALLENGE
                      </span>
                      <p className="text-xs sm:text-[13px] text-[#A8A49B] font-light leading-relaxed">
                        {item.problem}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-[#C6A56B]/20 bg-[#C6A56B]/5">
                      <span className="block text-[10px] font-mono uppercase tracking-widest text-[#C6A56B] mb-1 font-semibold">
                        THE APPROACH &amp; SOLUTION
                      </span>
                      <p className="text-xs sm:text-[13px] text-[#F5F3ED] font-light leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#A8A49B]">
                  <span>READ ARCHITECTURE CASE STUDY</span>
                  <span className="text-[#C6A56B] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#A8A49B]">
            SEE HOW OUR DISCIPLINED ENGINEERING APPLIES ACROSS COMMERCE &amp; SYSTEMS
          </p>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#F5F3ED] border border-white/[0.12] bg-white/[0.02] hover:border-[#C6A56B]/60 hover:bg-white/[0.05] transition-all"
          >
            <span>Explore All Work</span>
            <ArrowRight size={14} className="text-[#C6A56B] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
