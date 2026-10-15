"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ComparisonRow {
  label: string;
  projectBased: string;
  dedicated: string;
  venture: string;
  ongoing: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Best suited for",
    projectBased: "Companies with defined product goals or new website builds",
    dedicated: "Teams needing specialist developers to accelerate backlogs",
    venture: "Early-stage founders validating new digital product concepts",
    ongoing: "Businesses maintaining production websites and software",
  },
  {
    label: "Primary objective",
    projectBased: "Deliver a complete, validated digital solution from start to finish",
    dedicated: "Extend technical capacity without long hiring cycles",
    venture: "Build and launch a lean MVP to test commercial demand",
    ongoing: "Ensure reliability, security, speed, and continuous improvements",
  },
  {
    label: "Typical type of work",
    projectBased: "New website, custom business portal, or e-commerce storefront",
    dedicated: "Sprint feature work, API integration, and architectural scaling",
    venture: "0-to-1 prototype, user onboarding flow, and core web platform",
    ongoing: "Bug fixes, performance optimization, and regular feature updates",
  },
  {
    label: "Scope structure",
    projectBased: "Fixed scope defined around agreed deliverables & milestones",
    dedicated: "Flexible capacity aligned with sprint priorities & backlogs",
    venture: "Milestone-based focused on essential MVP features",
    ongoing: "Defined monthly allocation for proactive maintenance & upgrades",
  },
  {
    label: "Collaboration style",
    projectBased: "Milestone demos with weekly progress reviews and direct checks",
    dedicated: "Direct integration into your existing Git repositories & chats",
    venture: "Close consultative partnership from idea shaping to launch",
    ongoing: "Scheduled reviews, priority ticketing, and continuous monitoring",
  },
  {
    label: "Delivery arrangement",
    projectBased: "Complete source-code handover & documentation at release",
    dedicated: "Continuous code merges into your internal repositories",
    venture: "Production deployment with full IP ownership and handover",
    ongoing: "Ongoing release deployments and monthly health updates",
  },
];

export function PartnershipsComparison() {
  return (
    <section className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#05070c] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Accent Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[180px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                03 / CHOOSE YOUR DIRECTION
              </span>
            </div>
            <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              Not sure where to start? <br />
              <span className="text-[#C6A56B] font-medium">Find the right fit.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#A8A49B] max-w-md leading-relaxed font-light">
            Compare engagement structures to determine which collaboration model aligns best with your team&apos;s timeline and technical needs.
          </p>
        </div>

        {/* Desktop Comparison Matrix Table */}
        <div className="hidden lg:block pt-12 overflow-x-auto">
          <div className="min-w-[960px] rounded-2xl border border-white/[0.08] bg-[#080a0f] overflow-hidden shadow-2xl">
            
            {/* Table Header Row */}
            <div className="grid grid-cols-5 p-6 border-b border-white/[0.08] bg-[#0c0f16]">
              <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#A8A49B] flex items-center">
                PARAMETERS
              </div>
              <div className="text-sm font-sans font-bold text-[#F5F3ED] border-l border-white/[0.06] pl-6">
                Project-Based
                <span className="block text-[10px] font-mono text-[#C6A56B] mt-0.5 font-normal uppercase">
                  DEFINED SCOPE
                </span>
              </div>
              <div className="text-sm font-sans font-bold text-[#F5F3ED] border-l border-white/[0.06] pl-6">
                Dedicated Engineering
                <span className="block text-[10px] font-mono text-[#6E8FAF] mt-0.5 font-normal uppercase">
                  EMBEDDED CAPACITY
                </span>
              </div>
              <div className="text-sm font-sans font-bold text-[#F5F3ED] border-l border-white/[0.06] pl-6">
                MVP &amp; Venture
                <span className="block text-[10px] font-mono text-[#C6A56B] mt-0.5 font-normal uppercase">
                  0-TO-1 LAUNCH
                </span>
              </div>
              <div className="text-sm font-sans font-bold text-[#F5F3ED] border-l border-white/[0.06] pl-6">
                Ongoing Support
                <span className="block text-[10px] font-mono text-[#5F9F92] mt-0.5 font-normal uppercase">
                  CONTINUOUS CARE
                </span>
              </div>
            </div>

            {/* Table Body Rows */}
            <div className="divide-y divide-white/[0.04]">
              {COMPARISON_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-5 p-6 items-baseline transition-colors hover:bg-white/[0.01]"
                >
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C6A56B]">
                    {row.label}
                  </div>
                  <div className="text-xs sm:text-[13px] text-[#A8A49B] leading-relaxed border-l border-white/[0.06] pl-6 font-light">
                    {row.projectBased}
                  </div>
                  <div className="text-xs sm:text-[13px] text-[#A8A49B] leading-relaxed border-l border-white/[0.06] pl-6 font-light">
                    {row.dedicated}
                  </div>
                  <div className="text-xs sm:text-[13px] text-[#A8A49B] leading-relaxed border-l border-white/[0.06] pl-6 font-light">
                    {row.venture}
                  </div>
                  <div className="text-xs sm:text-[13px] text-[#A8A49B] leading-relaxed border-l border-white/[0.06] pl-6 font-light">
                    {row.ongoing}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Mobile & Tablet Stacked Comparison Cards */}
        <div className="lg:hidden space-y-8 pt-10">
          {[
            {
              title: "Project-Based Development",
              badge: "DEFINED SCOPE",
              color: "#C6A56B",
              rows: COMPARISON_ROWS.map((r) => ({ label: r.label, val: r.projectBased })),
            },
            {
              title: "Dedicated Engineering",
              badge: "EMBEDDED CAPACITY",
              color: "#6E8FAF",
              rows: COMPARISON_ROWS.map((r) => ({ label: r.label, val: r.dedicated })),
            },
            {
              title: "MVP & Venture Development",
              badge: "0-TO-1 LAUNCH",
              color: "#C6A56B",
              rows: COMPARISON_ROWS.map((r) => ({ label: r.label, val: r.venture })),
            },
            {
              title: "Ongoing Technology Support",
              badge: "CONTINUOUS CARE",
              color: "#5F9F92",
              rows: COMPARISON_ROWS.map((r) => ({ label: r.label, val: r.ongoing })),
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/[0.08] bg-[#090b10] p-6 shadow-xl"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <h3 className="font-sans text-lg font-semibold text-[#F5F3ED]">
                  {card.title}
                </h3>
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded uppercase"
                  style={{ color: card.color, backgroundColor: `${card.color}15` }}
                >
                  {card.badge}
                </span>
              </div>

              <div className="space-y-4">
                {card.rows.map((row) => (
                  <div key={row.label} className="text-xs">
                    <span className="block font-mono uppercase tracking-wider text-[#C6A56B] mb-0.5">
                      {row.label}
                    </span>
                    <span className="text-[#A8A49B] font-light leading-relaxed block">
                      {row.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Small Bottom CTA */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#A8A49B]">
            NEED HELP DETERMINING SCOPE OR ARCHITECTURAL COMPLEXITY?
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[#C6A56B] hover:text-[#d8b87e] transition-colors"
          >
            <span>Not sure which option fits? Let&apos;s talk</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
