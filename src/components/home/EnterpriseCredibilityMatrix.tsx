"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ApproachProgression from "./ApproachProgression";

// Cloud & AI Platform Logos (10 Technologies SASVALE Works With)
const cloudAiPlatforms = [
  {
    name: "AWS",
    icon: (
      <Image
        src="/assets/software-logo/aws.png"
        alt="AWS"
        width={48}  
        height={48}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    name: "GOOGLE CLOUD",
    icon: (
       <Image
        src="/assets/software-logo/google-cloud.png"
        alt="Google Cloud"
        width={48}  
        height={48}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    name: "MICROSOFT AZURE",
    icon: (
       <Image
        src="/assets/software-logo/azure.png"
        alt="Microsoft Azure"
        width={48}  
        height={48}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    name: "NVIDIA",
    icon: (
      <Image
        src="/assets/software-logo/nvidia.png"
        alt="NVIDIA"
        width={48}  
        height={48}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    name: "OPENAI",
    icon: (
       <Image
        src="/assets/software-logo/chatgptai.png"
        alt="ChatGPT AI"
        width={48}  
        height={48}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    name: "ANTHROPIC",
    icon: (
       <Image
        src="/assets/software-logo/anthropic.png"
        alt="Anthropic"
        width={48}  
        height={48}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    name: "GEMINI",
    icon: (
      <Image
        src="/assets/software-logo/gemini-ai.png"
        alt="Gemini"
        width={48}  
        height={48}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    name: "GROK",
    icon: (
      <Image
        src="/assets/software-logo/grok.png"
        alt="GROK"
        width={48}  
        height={48}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    name: "PERPLEXITY",
    icon: (
      <Image
        src="/assets/software-logo/perplexity-ai.png"
        alt="PERPLEXITY"
        width={48}  
        height={48}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    name: "GOOGLE AI",
    icon: (
      <Image
        src="/assets/software-logo/google.png"
        alt="Google AI"
        width={48}  
        height={48}
        className="h-8 w-8 object-contain"
      />
    ),
  },
];

// Section 3: Recognized by Leading Industry Reviewers (4 Scorecards)
const reviewerScorecards = [
  {
    id: "clutch",
    logo: (
      <div className="flex items-center gap-1.5">
        <Image
          src="/assets/logo2/clutch.png"
          alt="Clutch"
          width={120}  
          height={50}
          className="object-contain"
        />
      </div>
    ),
    rating: "5.0",
    max: "/5",
    stars: 5,
    starColor: "text-[#FF8C00]",
  },
  {
    id: "goodfirms",
    logo: (
      <div className="flex items-center gap-2">
        <Image
          src="/assets/logo2/goofirms.png"
          alt="Goodfirms"
          width={140}  
          height={50}
          className="object-contain"
        />
      </div>
    ),
    rating: "5.0",
    max: "/5",
    stars: 5,
    starColor: "text-[#FFB800]",
  },
  {
    id: "selectedfirms",
    logo: (
      <div className="flex items-center gap-2">
        <Image
          src="/assets/logo2/selectedfirms.png"
          alt="SelectedFirms"
          width={140}
          height={50}
          className="filterimage object-contain"
        />
      </div>
    ),
    rating: "4.8",
    max: "/5",
    stars: 5,
    starColor: "text-[#FFB800]",
  },
  {
    id: "designrush",
    logo: (
      <div className="flex items-center gap-2">
        <Image
          src="/assets/logo2/designrush.png"
          alt="DesignRush"
          width={140}
          height={50}
          className="filterimage object-contain"
        />
      </div>
    ),
    rating: "4.9",
    max: "/5",
    stars: 5,
    starColor: "text-[#FF8C00]",
  },
];



export default function EnterpriseCredibilityMatrix() {
  return (
    <section 
      id="enterprise-credibility"
      className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#05070c] border-t border-white/[0.08] overflow-hidden"
      aria-label="Real Work, Technology Ecosystem, and Industry Reviewers"
    >
      {/* Background Ambience */}
      <div 
        className="pointer-events-none absolute inset-0 bg-radial-[at_50%_0%] from-[#C6A56B]/[0.04] via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* ==========================================================================
            TIER 1: Real Work. Real Systems.
           ========================================================================== */}
        <div className="text-center mb-12 xl:mb-14 2xl:mb-16">
          <p className="text-[11px] sm:text-[12px] font-sans font-semibold uppercase tracking-[0.24em] text-slate-400 mb-3 sm:mb-4">
            REAL WORK. REAL SYSTEMS.
          </p>

          <p className="text-base sm:text-lg text-slate-300 font-normal max-w-xl mx-auto mb-5 sm:mb-6">
            A selection of digital products and business systems we&apos;ve built.
          </p>

          <div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase text-[#C6A56B] hover:text-white transition-colors duration-300 group"
              aria-label="View our work"
            >
              <span>VIEW OUR WORK</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* ==========================================================================
            TIER 2: Technology We Work With
           ========================================================================== */}
        <div className="relative mb-12 xl:mb-14 2xl:mb-16">
          {/* Subtle Ambient Radial Illumination */}
          <div 
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[650px] h-[260px] bg-radial from-[#C6A56B]/[0.06] via-[#3B82F6]/[0.02] to-transparent blur-3xl" 
            aria-hidden="true" 
          />

          <div className="text-center mb-8 sm:mb-10 relative z-10">
            <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.24em] text-[#8e8b82]">
              TECHNOLOGY WE WORK WITH
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center max-w-6xl mx-auto relative z-10">
            {cloudAiPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="group flex flex-col items-center justify-center p-3 sm:p-4 w-full rounded-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="platform-icon mb-3.5 flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:bg-[#C6A56B]/[0.08] group-hover:border-[#C6A56B]/40 group-hover:shadow-[0_0_24px_rgba(198,165,107,0.18)] group-hover:scale-105">
                  {platform.icon}
                </div>
                <span className="font-sans text-[11px] sm:text-[12px] font-bold tracking-[0.15em] uppercase text-slate-300 group-hover:text-white transition-colors duration-300 text-center">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================================================
            TIER 3: Recognized by Leading Industry Reviewers (4 Exact SDLC Cards)
           ========================================================================== */}
        <div className="mb-16 xl:mb-20 2xl:mb-28" style={{ display: "none" }}>
          <div className="text-center mb-12">
            <p className="text-[11px] sm:text-[12px] font-sans font-semibold uppercase tracking-[0.24em] text-slate-400">
              RECOGNIZED BY LEADING INDUSTRY REVIEWERS
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviewerScorecards.map((card) => (
              <div
                key={card.id}
                className="group relative rounded-2xl bg-[#0c101b] border border-white/[0.08] p-7 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) hover:-translate-y-1.5 hover:border-[#C6A56B]/40 hover:shadow-[0_20px_50px_-10px_rgba(198,165,107,0.2)] flex flex-col justify-between min-h-[160px]"
              >
                {/* Top Logo */}
                <div className="flex items-center justify-start mb-6">
                  {card.logo}
                </div>

                {/* Subtle Divider */}
                <div className="w-full h-px bg-white/[0.06] mb-5 group-hover:bg-[#C6A56B]/20 transition-colors" />

                {/* Bottom Stars & Rating Score */}
                <div className="flex items-center justify-between">
                  {/* 5 Filled Stars */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: card.stars }).map((_, s) => (
                      <span key={s} className={`text-base sm:text-lg ${card.starColor}`}>
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Rating Number */}
                  <div className="flex items-baseline font-sans">
                    <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {card.rating}
                    </span>
                    <span className="text-sm font-medium text-slate-400">
                      {card.max}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================================================
            TIER 4: How We Approach the Work (Signature Sequential Progression)
           ========================================================================== */}
        <ApproachProgression />

      </div>
    </section>
  );
}
