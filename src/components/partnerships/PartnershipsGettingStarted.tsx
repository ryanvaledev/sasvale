"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface OnboardingStage {
  step: string;
  title: string;
  summary: string;
  deliverable: string;
}

const ONBOARDING_STAGES: OnboardingStage[] = [
  {
    step: "01",
    title: "Start a Conversation",
    summary: "Tell us what you're building, improving, or trying to solve via our intake form or a brief introductory message.",
    deliverable: "Initial Discovery Call Scheduled",
  },
  {
    step: "02",
    title: "Understand the Requirements",
    summary: "We discuss your goals, business context, relevant technical constraints, and the kind of support required.",
    deliverable: "Needs & Technical Audit",
  },
  {
    step: "03",
    title: "Define the Engagement",
    summary: "We determine a suitable scope, collaboration model, responsibilities, transparent pricing, and delivery schedule.",
    deliverable: "Agreed Proposal & Scope",
  },
  {
    step: "04",
    title: "Begin the Work",
    summary: "Once the terms are agreed, we establish direct communication channels, repository access, and the initial sprint priorities.",
    deliverable: "Sprint 01 Kickoff",
  },
];

export function PartnershipsGettingStarted() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#05070c] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Accent Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[180px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                05 / STARTING A PARTNERSHIP
              </span>
            </div>
            <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              From the first conversation <br />
              <span className="text-[#C6A56B] font-medium">to a clear next step.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#A8A49B] max-w-md leading-relaxed font-light">
            Onboarding with Sasvale is straightforward. We move from initial inquiry to agreed delivery quickly without unnecessary delays.
          </p>
        </div>

        {/* Desktop Horizontal Timeline Sequence */}
        <div className="hidden lg:block relative pt-14 pb-4">
          
          {/* Thin Connecting Axis Line Across 4 Stages */}
          <div
            className="absolute top-[82px] left-12 right-12 h-px bg-gradient-to-r from-[#C6A56B]/30 via-white/10 to-[#C6A56B]/30 z-0 select-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {ONBOARDING_STAGES.map((stage, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={stage.step}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group relative flex flex-col justify-between p-7 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-[#C6A56B]/60 bg-[#0c0f17] shadow-xl shadow-[#C6A56B]/5 -translate-y-1"
                      : "border-white/[0.08] bg-[#080a0f]/80 hover:border-white/[0.18]"
                  }`}
                >
                  <div>
                    {/* Top Marker */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${
                          isActive
                            ? "bg-[#C6A56B] text-[#070707] shadow-[0_0_12px_rgba(198,165,107,0.4)]"
                            : "bg-white/[0.06] text-[#A8A49B] group-hover:text-[#F5F3ED]"
                        }`}
                      >
                        {stage.step}
                      </span>

                      <span
                        className={`text-[10px] font-mono tracking-wider uppercase transition-colors ${
                          isActive ? "text-[#C6A56B]" : "text-white/20"
                        }`}
                      >
                        {idx < ONBOARDING_STAGES.length - 1 ? "NEXT →" : "READY"}
                      </span>
                    </div>

                    <h3 className="font-sans text-lg font-semibold tracking-tight text-[#F5F3ED] mb-2 group-hover:text-[#C6A56B] transition-colors">
                      {stage.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#A8A49B] leading-relaxed font-light mb-4">
                      {stage.summary}
                    </p>
                  </div>

                  {/* Deliverable Stamp */}
                  <div className="pt-3 border-t border-white/[0.04]">
                    <span className="block text-[9px] font-mono uppercase tracking-widest text-[#C6A56B] mb-0.5 font-bold">
                      OUTPUT
                    </span>
                    <span className="block text-xs font-mono text-[#F5F3ED]">
                      {stage.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden relative pt-8 pl-8 space-y-6">
          {/* Vertical Connecting Axis */}
          <div
            className="absolute left-3.5 top-8 bottom-8 w-px bg-gradient-to-b from-[#C6A56B]/40 via-white/10 to-[#C6A56B]/40"
            aria-hidden="true"
          />

          {ONBOARDING_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="relative p-5 rounded-xl border border-white/[0.08] bg-[#090b10]"
            >
              <div className="absolute -left-[30px] top-4 w-6 h-6 rounded-full bg-[#070707] border border-[#C6A56B] flex items-center justify-center text-[10px] font-mono font-bold text-[#C6A56B]">
                {stage.step}
              </div>

              <h3 className="font-sans text-base font-semibold text-[#F5F3ED] mb-1">
                {stage.title}
              </h3>

              <p className="text-xs text-[#A8A49B] leading-relaxed mb-3">
                {stage.summary}
              </p>

              <div className="pt-2 border-t border-white/[0.04] text-[11px] font-mono text-[#C6A56B]">
                {stage.deliverable}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#A8A49B]">
            READY TO TAKE STAGE 01?
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[#C6A56B] hover:text-[#d8b87e] transition-colors"
          >
            <span>Start a project inquiry</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
