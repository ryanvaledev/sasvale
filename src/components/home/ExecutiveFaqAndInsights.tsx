"use client";

import React from "react";
import Link from "next/link";

interface InsightNote {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
}

const NOTES: InsightNote[] = [
  {
    id: "website-real-problem",
    tag: "PRODUCT",
    tagColor: "text-sky-400 bg-sky-500/10 border-sky-500/25",
    title: "The website isn't always the real problem.",
    excerpt:
      "A better digital experience starts by understanding what the business and its customers actually need from the product.",
  },
  {
    id: "ecommerce-before-checkout",
    tag: "E-COMMERCE",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
    title: "Good e-commerce starts before checkout.",
    excerpt:
      "Product discovery, navigation, information, and trust all shape the buying journey long before a customer reaches the payment screen.",
  },
  {
    id: "automate-repetitive-work",
    tag: "AUTOMATION",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/25",
    title: "Automate the work that shouldn't need a person.",
    excerpt:
      "The best automation isn't about adding more technology. It's about removing repetitive steps from a process that already makes sense.",
  },
];

export default function ExecutiveFaqAndInsights() {
  return (
    <div className="w-full bg-[#0B0B0B]">
      
      {/* EDITORIAL INSIGHTS MAGAZINE GRID */}
      <section
        id="insights"
        className="relative w-full pt-12 sm:pt-14 lg:pt-18 pb-10 sm:pb-12 lg:pb-14 border-t border-white/[0.08] overflow-hidden bg-[#0B0B0B] select-none"
        aria-label="Thinking about the work"
      >
        {/* Background Ambient Atmosphere & Technical Datum Lines */}
        <div 
          className="pointer-events-none absolute top-12 left-1/4 w-[650px] h-[360px] rounded-full blur-[160px] opacity-20 bg-radial from-[#C6A56B]/[0.4] to-transparent" 
          aria-hidden="true" 
        />
        <div 
          className="pointer-events-none absolute bottom-12 right-1/4 w-[680px] h-[380px] rounded-full blur-[170px] opacity-15 bg-radial from-[#38bdf8]/[0.25] via-[#22D3EE]/[0.1] to-transparent" 
          aria-hidden="true" 
        />
        {/* Subtle technical datum lines */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute top-[32%] left-0 right-0 h-px border-b border-white/[0.035]" />
          <div className="absolute bottom-[22%] left-0 right-0 h-px border-b border-white/[0.035]" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 xl:pr-16 2xl:pr-12 relative z-10">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 lg:mb-10 gap-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B] block mb-2 sm:mb-3">
                INSIGHTS
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] 2xl:text-[54px] font-bold text-[#F3F0E8] tracking-tight leading-[1.1] mb-2 sm:mb-3">
                Thinking about <br className="hidden sm:inline" />
                <span className="text-[#C6A56B]">the work.</span>
              </h2>
              <p className="text-sm sm:text-base font-sans text-[#A8A49B] max-w-xl leading-relaxed">
                Practical notes on digital products, e-commerce, automation, and the systems behind modern businesses.
              </p>
            </div>

            <Link
              href="/insights"
              className="bg-[#F3F0E8] text-[#0B0B0B] font-sans font-bold text-sm sm:text-base px-8 py-3.5 rounded-full hover:bg-white transition-all shadow-lg shadow-black/30 inline-flex items-center gap-2 group self-start lg:self-end cursor-pointer"
            >
              <span>Explore our thinking</span>
              <span className="group-hover:translate-x-1 transition-transform text-[#0B0B0B]">→</span>
            </Link>
          </div>

          {/* 3 Editorial Notes Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {NOTES.map((article, index) => (
              <Link
                key={article.id}
                href="/insights"
                className="rounded-3xl bg-[#090D14] border border-white/[0.1] hover:border-[#C6A56B]/40 p-6 sm:p-8 xl:p-7 2xl:p-10 flex flex-col justify-between transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-10px_rgba(198,165,107,0.15)] group block"
              >
                <div>
                  {/* Article Eyebrow Metadata Row */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${article.tagColor}`}
                    >
                      {article.tag}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#A8A49B]">
                      NOTE {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#F3F0E8] mb-4 leading-snug group-hover:text-white transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[#A8A49B] text-sm leading-relaxed mb-8">
                    {article.excerpt}
                  </p>
                </div>

                {/* Bottom Read Action */}
                <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs sm:text-sm font-sans font-bold text-[#A8A49B] group-hover:text-[#F3F0E8] transition-colors">
                  <span>Read note</span>
                  <span className="group-hover:translate-x-1.5 transition-transform text-[#C6A56B]">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
