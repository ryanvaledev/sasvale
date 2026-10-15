"use client";

import React from "react";
import { MessageSquare, Target, Eye, ShieldCheck } from "lucide-react";

interface ExperienceItem {
  num: string;
  tag: string;
  title: string;
  statement: string;
  practicalDetail: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    num: "01",
    tag: "ACCESSIBILITY",
    title: "Direct Communication",
    statement: "Work closely with the people responsible for understanding, designing, and delivering your project.",
    practicalDetail:
      "No account manager telephone games or bureaucratic delays. You collaborate directly with senior engineers and interface designers who hold technical context and make rapid, informed decisions.",
  },
  {
    num: "02",
    tag: "TRANSPARENCY",
    title: "Clear Expectations",
    statement: "Define priorities, responsibilities, milestones, and deliverables before substantial implementation begins.",
    practicalDetail:
      "We avoid starting code before agreeing on scope boundaries and deliverables. You always know what is being built in the current sprint, what is scheduled next, and what is outside scope.",
  },
  {
    num: "03",
    tag: "VISIBILITY",
    title: "Visible Progress",
    statement: "Review meaningful progress and provide feedback at agreed stages throughout the engagement.",
    practicalDetail:
      "You do not wait months for an unguided big reveal. We share reviewable staging links and working previews at defined milestones so you can test features and offer feedback as they evolve.",
  },
  {
    num: "04",
    tag: "SOVEREIGNTY",
    title: "Long-Term Thinking",
    statement: "Make technology decisions with maintainability, ownership, and future improvements in mind.",
    practicalDetail:
      "We write clean, strictly typed, modular code designed for commercial longevity. All source code, deployment configs, and intellectual property belong 100% to your company upon release.",
  },
];

export function PartnershipsExperience() {
  return (
    <section className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Accent Glow */}
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-[550px] h-[350px] rounded-full blur-[190px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                04 / WHAT TO EXPECT
              </span>
            </div>
            <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              Clarity from day one. <br />
              <span className="text-[#C6A56B] font-medium">Collaboration throughout.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#A8A49B] max-w-md leading-relaxed font-light">
            We structure our working relationship to eliminate uncertainty and deliver predictable, high-craft digital execution.
          </p>
        </div>

        {/* 4 Large Alternating Editorial Sections with Strong Separators */}
        <div className="divide-y divide-white/[0.08] pt-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.num}
              className={`py-12 sm:py-16 transition-colors duration-300 ${
                idx % 2 === 1 ? "bg-white/[0.01] -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 rounded-2xl" : ""
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-baseline">
                
                {/* Step Marker & Tag (3 Cols) */}
                <div className="lg:col-span-3 flex items-center gap-4">
                  <span className="text-4xl sm:text-5xl font-mono font-light text-[#C6A56B]">
                    {exp.num}
                  </span>
                  <div className="h-5 w-px bg-white/20" />
                  <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#A8A49B] uppercase">
                    {exp.tag}
                  </span>
                </div>

                {/* Title & Core Statement (5 Cols) */}
                <div className="lg:col-span-5">
                  <h3 className="font-sans text-[24px] sm:text-[30px] font-medium text-[#F5F3ED] tracking-tight mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#F5F3ED] leading-relaxed font-light">
                    &ldquo;{exp.statement}&rdquo;
                  </p>
                </div>

                {/* Practical Working Detail (4 Cols) */}
                <div className="lg:col-span-4 pt-2 lg:pt-0">
                  <div className="p-5 rounded-xl border border-white/[0.06] bg-[#0c0f17]">
                    <span className="block text-[9px] font-mono tracking-widest uppercase text-[#C6A56B] mb-1.5 font-bold">
                      IN PRACTICE
                    </span>
                    <p className="text-xs sm:text-[13px] text-[#A8A49B] leading-relaxed font-light">
                      {exp.practicalDetail}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Integrity Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#A8A49B]">
          <span>COLLABORATIVE DISCIPLINE</span>
          <span className="text-[#C6A56B]">NO JUNIOR MIDDLEMEN</span>
        </div>

      </div>
    </section>
  );
}
