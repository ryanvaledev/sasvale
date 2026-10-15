"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface MindsetStage {
  step: string;
  name: string;
  explanation: string;
  deliverable: string;
}

const STAGES: MindsetStage[] = [
  {
    step: "01",
    name: "DISCOVER",
    explanation:
      "Understand the operational reality, user friction, and commercial constraints before proposing solutions.",
    deliverable: "Commercial Mapping & Audit",
  },
  {
    step: "02",
    name: "DEFINE",
    explanation:
      "Select minimal, resilient architecture and design clear interface ergonomics without unnecessary technical bloat.",
    deliverable: "Architecture & Ergonomics Spec",
  },
  {
    step: "03",
    name: "BUILD",
    explanation:
      "Senior engineers execute rapid iterative sprints with live test environments, clean typing, and continuous validation.",
    deliverable: "Working Production Code",
  },
  {
    step: "04",
    name: "EVOLVE",
    explanation:
      "Deploy with zero downtime, automate repetitive maintenance, and support your platform as the business scales.",
    deliverable: "Telemetry & Long-Term Stewardship",
  },
];

export function AboutMindset() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#05070c] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[160px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                06 / THE MINDSET
              </span>
            </div>
            <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              Thoughtful decisions. <br />
              <span className="text-[#C6A56B] font-medium">Precise execution.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <span className="text-[11px] font-mono text-[#A8A49B] tracking-widest uppercase">
              METHODOLOGY SUMMARY
            </span>
            <Link
              href="/approach"
              className="group inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[#C6A56B] hover:text-[#d8b87e] transition-colors"
            >
              <span>Explore Full Approach</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 4 Connected Stages: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative pt-12 sm:pt-16">
          
          {/* Desktop Connecting Hairline Axis */}
          <div
            className="hidden lg:block absolute top-[92px] left-12 right-12 h-px bg-gradient-to-r from-[#C6A56B]/30 via-white/10 to-[#C6A56B]/30 z-0 select-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {STAGES.map((stage, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={stage.name}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group relative flex flex-col justify-between p-7 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-[#C6A56B]/60 bg-[#0c0f17] shadow-xl shadow-[#C6A56B]/5"
                      : "border-white/[0.08] bg-[#080a0f]/80 hover:border-white/[0.18]"
                  }`}
                >
                  {/* Step Marker & Stage Title */}
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                            isActive
                              ? "bg-[#C6A56B] text-[#070707]"
                              : "bg-white/[0.06] text-[#A8A49B] group-hover:text-[#F5F3ED]"
                          }`}
                        >
                          {stage.step}
                        </span>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-[#A8A49B]">
                          STAGE {stage.step}
                        </span>
                      </div>

                      <span
                        className={`text-[10px] font-mono tracking-wider transition-colors ${
                          isActive ? "text-[#C6A56B]" : "text-white/20"
                        }`}
                      >
                        {idx < STAGES.length - 1 ? "→" : "●"}
                      </span>
                    </div>

                    <h3 className="font-sans text-[22px] sm:text-[24px] font-semibold tracking-tight text-[#F5F3ED] mb-3 group-hover:text-[#C6A56B] transition-colors">
                      {stage.name}
                    </h3>

                    <p className="text-sm text-[#A8A49B] leading-relaxed font-light mb-6">
                      {stage.explanation}
                    </p>
                  </div>

                  {/* Output Milestone Stamp */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="block text-[9px] font-mono uppercase tracking-widest text-[#C6A56B]/70 mb-1">
                      DELIVERABLE
                    </span>
                    <span className="block text-xs font-mono font-medium text-[#F5F3ED]">
                      {stage.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Link Out to Detailed Approach Page */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#A8A49B]">
            NEED OUR FULL SPRINT &amp; SCRUM TIMELINES?
          </p>

          <Link
            href="/approach"
            className="group inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[#F5F3ED] hover:text-[#C6A56B] transition-colors"
          >
            <span>Read the detailed engineering methodology</span>
            <ArrowRight size={14} className="text-[#C6A56B] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
