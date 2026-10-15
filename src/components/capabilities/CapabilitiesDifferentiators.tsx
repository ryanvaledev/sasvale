"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DifferentiatorItem {
  num: string;
  title: string;
  subtitle: string;
  description: string;
}

const DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    num: "01",
    title: "Business-First Thinking",
    subtitle: "Pragmatism over technical bloat",
    description:
      "Solutions should address real needs, not introduce unnecessary complexity. We prioritize what directly drives revenue, customer clarity, and operational efficiency over vanity features.",
  },
  {
    num: "02",
    title: "Design & Engineering Together",
    subtitle: "Unified craft from wireframe to code",
    description:
      "Interfaces and underlying functionality should work together as one product. Designers and engineers collaborate continuously to ensure beauty never compromises performance or stability.",
  },
  {
    num: "03",
    title: "Clear Collaboration",
    subtitle: "Direct access with no account managers",
    description:
      "Project decisions and progress should be understandable to the people involved. You communicate directly with the senior designers and engineers delivering your work, with transparent milestones.",
  },
  {
    num: "04",
    title: "Built With the Future in Mind",
    subtitle: "Clean foundations you actually own",
    description:
      "Maintainability, reliability, and room for improvement should inform technical decisions. We deliver clean, modular codebases with full documentation and zero proprietary vendor lock-in.",
  },
];

export function CapabilitiesDifferentiators() {
  return (
    <section id="differentiators" className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Accent Glow */}
      <div
        className="pointer-events-none absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[200px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                06 / OUR DIFFERENCE
              </span>
            </div>
            <h2 className="font-sans text-[36px] sm:text-[48px] lg:text-[60px] font-light tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              Good design matters. <br />
              <span className="text-[#C6A56B] font-medium">So does everything behind it.</span>
            </h2>
          </div>

          <Link
            href="/approach"
            className="group inline-flex items-center gap-2.5 text-xs font-mono font-semibold tracking-[0.16em] text-[#C6A56B] uppercase transition-colors hover:text-white"
          >
            <span>Explore Our Approach</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Oversized Numbered Editorial Rows */}
        <div className="divide-y divide-white/[0.08]">
          {DIFFERENTIATORS.map((diff) => (
            <div
              key={diff.num}
              className="group py-10 sm:py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline transition-colors hover:bg-white/[0.015]"
            >
              {/* Number (2 Cols) */}
              <div className="lg:col-span-2">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-mono font-light text-[#C6A56B]/70 group-hover:text-[#C6A56B] transition-colors">
                  {diff.num}
                </span>
              </div>

              {/* Title & Subtitle (5 Cols) */}
              <div className="lg:col-span-5">
                <h3 className="font-sans text-2xl sm:text-3xl font-normal text-[#F5F3ED] group-hover:text-white transition-colors mb-2">
                  {diff.title}
                </h3>
                <p className="text-xs font-mono text-[#C6A56B] tracking-wider uppercase">
                  {diff.subtitle}
                </p>
              </div>

              {/* Description (5 Cols) */}
              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-[#A8A49B] leading-relaxed max-w-[500px]">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
