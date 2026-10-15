"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, AlertCircle, Sparkles, Layers } from "lucide-react";

interface PracticalSolution {
  num: string;
  title: string;
  forWhom: string;
  challenge: string;
  solution: string;
  relatedCapabilities: string[];
  ctaLabel: string;
  ctaHref: string;
}

const SOLUTIONS_DATA: PracticalSolution[] = [
  {
    num: "01",
    title: "Launch an Online Business",
    forWhom: "For businesses needing a website, online store, or new customer-facing platform.",
    challenge:
      "Establishing a credible, distinctive online presence that turns initial visitors into paying customers without relying on generic, cookie-cutter templates that fail to stand out.",
    solution:
      "A bespoke corporate website or modern e-commerce storefront tailored to your catalog and brand positioning—engineered for high speed, intuitive navigation, mobile shopping, and frictionless conversion.",
    relatedCapabilities: [
      "Websites & Web Applications",
      "E-Commerce Development",
      "UI/UX & Product Design",
    ],
    ctaLabel: "Launch Your Business",
    ctaHref: "/contact",
  },
  {
    num: "02",
    title: "Organize Business Operations",
    forWhom: "For companies managing daily tasks through spreadsheets, disconnected tools, or repetitive manual processes.",
    challenge:
      "Critical operating knowledge trapped in error-prone spreadsheets, siloed messaging channels, and manual copy-paste routines that slow operations down and introduce human error.",
    solution:
      "A centralized custom business system or admin dashboard providing unified role-based data entry, scheduling, inventory tracking, and operational visibility across teams.",
    relatedCapabilities: [
      "Business Systems & Dashboards",
      "Custom Software Development",
      "Automation & AI Integration",
    ],
    ctaLabel: "Organize Your Operations",
    ctaHref: "/contact",
  },
  {
    num: "03",
    title: "Develop a New Digital Product",
    forWhom: "For founders and organizations turning a product concept into a usable application.",
    challenge:
      "Transforming an early-stage product vision into a robust, deployable MVP without wasting budget on unnecessary scope or fragile architecture that cannot scale.",
    solution:
      "End-to-end product engineering from user journey mapping and technical architecture through rapid, iterative MVP development and launch-ready production deployment.",
    relatedCapabilities: [
      "Custom Software Development",
      "UI/UX & Product Design",
      "Web Applications",
    ],
    ctaLabel: "Develop Your Product",
    ctaHref: "/contact",
  },
  {
    num: "04",
    title: "Improve an Existing System",
    forWhom: "For businesses needing enhancements, integrations, modernization, or improvements to existing digital tools.",
    challenge:
      "Legacy codebases, slow response times, checkout drop-offs, or outdated digital tools creating friction for staff and customers alike as the business expands.",
    solution:
      "Pragmatic architectural reviews, feature refactoring, third-party API integrations, and UX modernization to unlock speed, stability, and scale without rebuilding from scratch.",
    relatedCapabilities: [
      "Automation & AI Integration",
      "Custom Software Development",
      "Web Applications",
    ],
    ctaLabel: "Upgrade Your System",
    ctaHref: "/contact",
  },
];

export function CapabilitiesSolutions() {
  return (
    <section id="solutions" className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Subtle Ambience */}
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[220px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                03 / PRACTICAL APPLICATIONS
              </span>
            </div>
            <h2 className="font-sans text-[36px] sm:text-[48px] lg:text-[60px] font-light tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              Built for the challenges <br />
              <span className="text-[#C6A56B] font-medium">businesses face every day.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-[#A8A49B] leading-relaxed max-w-[500px]">
              Technology is most effective when it directly resolves an operational bottleneck or unlocks commercial growth. Here is how our work translates to practical business scenarios.
            </p>
          </div>
        </div>

        {/* 4 Alternating Editorial Solution Areas */}
        <div className="divide-y divide-white/[0.08]">
          {SOLUTIONS_DATA.map((item, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={item.num}
                className={`py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start ${
                  isEven ? "bg-white/[0.015]" : ""
                }`}
              >
                {/* Left Side: Number, Title, Target Audience */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl sm:text-3xl font-mono font-light text-[#C6A56B]">
                      {item.num}
                    </span>
                    <div className="h-4 w-px bg-white/20" />
                    <span className="text-xs font-mono font-bold tracking-widest text-[#A8A49B] uppercase">
                      APPLICATION DOMAIN
                    </span>
                  </div>

                  <h3 className="font-sans text-[26px] sm:text-[34px] font-normal text-[#F5F3ED] leading-tight mb-4">
                    {item.title}
                  </h3>

                  <p className="text-sm font-sans text-[#C6A56B]/90 font-medium mb-6">
                    {item.forWhom}
                  </p>

                  {/* Related Capability Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.relatedCapabilities.map((cap, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[11px] font-mono text-[#A8A49B] px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.07]"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Business Challenge vs Solution & CTA */}
                <div className="lg:col-span-7 rounded-2xl bg-[#0b0d13] border border-white/[0.08] p-6 sm:p-8 lg:p-10 shadow-xl">
                  
                  {/* Challenge */}
                  <div className="mb-6 pb-6 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2 mb-2 text-xs font-mono text-amber-300/80 uppercase tracking-wider">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>THE BUSINESS CHALLENGE</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#A8A49B] leading-relaxed">
                      {item.challenge}
                    </p>
                  </div>

                  {/* Typical Solution */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#C6A56B] uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>HOW SASVALE SOLVES IT</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#F5F3ED] leading-relaxed">
                      {item.solution}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#A8A49B]/70">
                      Scope & implementation tailored to budget
                    </span>
                    <Link
                      href={item.ctaHref}
                      className="group inline-flex items-center gap-2 text-xs font-mono font-bold text-[#C6A56B] tracking-wider uppercase transition-colors hover:text-white"
                    >
                      <span>{item.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
