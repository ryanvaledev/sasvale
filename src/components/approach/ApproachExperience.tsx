"use client";

import React from "react";
import { Compass, Eye, MessageSquareCode, CheckSquare } from "lucide-react";

interface DeliveryExperienceBlock {
  num: string;
  title: string;
  summary: string;
  narrative: string;
}

const EXPERIENCE_BLOCKS: DeliveryExperienceBlock[] = [
  {
    num: "01",
    title: "Clear Direction",
    summary: "Defined scope, priorities, and agreed next steps.",
    narrative:
      "You always know where the project stands. From the initial discovery brief to the sprint backlog, we establish clear objectives and technical boundaries before diving into code.",
  },
  {
    num: "02",
    title: "Visible Progress",
    summary: "Working previews and progress updates at appropriate project milestones.",
    narrative:
      "We avoid hiding behind months of silence. As components and interfaces come together, you interact with functional staging builds to see real progress unfold.",
  },
  {
    num: "03",
    title: "Constructive Feedback",
    summary: "Opportunities to review and refine the product before final delivery.",
    narrative:
      "Review milestones provide structured opportunities to test interactions, examine edge cases, and refine details with the engineers who built them.",
  },
  {
    num: "04",
    title: "Confident Handover",
    summary: "Deployment preparation, agreed documentation, and clear next steps.",
    narrative:
      "At release, we prepare deployment configurations, run security and performance checks, and supply clean documentation so your team can confidently take ownership.",
  },
];

export function ApproachExperience() {
  return (
    <section className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Accent Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-0 w-[550px] h-[550px] rounded-full blur-[200px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                06 / THE EXPERIENCE
              </span>
            </div>
            <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              Clarity throughout the project. <br />
              <span className="text-[#C6A56B] font-medium">Not just at the end.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#A8A49B] max-w-md leading-relaxed font-light">
            Working with a digital studio should feel structured and reassuring. We organize delivery to eliminate surprises and maintain continuous alignment.
          </p>
        </div>

        {/* Creative Staggered 4-Block Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-14">
          {EXPERIENCE_BLOCKS.map((block, idx) => (
            <div
              key={block.num}
              className={`group relative rounded-3xl border border-white/[0.08] bg-[#090b10] p-8 sm:p-10 shadow-xl flex flex-col justify-between transition-all duration-300 hover:border-white/[0.18] hover:bg-[#0c0f16] ${
                idx % 2 === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <div>
                {/* Header Node */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-mono font-bold text-[#C6A56B]">
                      {block.num}
                    </span>
                    <span className="h-4 w-px bg-white/20" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A8A49B]">
                      MILESTONE INTEGRITY
                    </span>
                  </div>

                  <span className="text-xs font-mono text-[#C6A56B] opacity-0 group-hover:opacity-100 transition-opacity">
                    RELIABLE DELIVERY →
                  </span>
                </div>

                <h3 className="font-sans text-[22px] sm:text-[26px] font-semibold text-[#F5F3ED] mb-2 group-hover:text-[#C6A56B] transition-colors">
                  {block.title}
                </h3>

                <p className="text-sm font-medium text-[#C6A56B] mb-4">
                  {block.summary}
                </p>

                <p className="text-sm text-[#A8A49B] leading-relaxed font-light">
                  {block.narrative}
                </p>
              </div>

              {/* Bottom Meta */}
              <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-[#A8A49B]/60">
                <span>STAGE CADENCE // ACTIVE</span>
                <span>VERIFIED TRANSPARENCY</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
