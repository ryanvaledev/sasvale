"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What happens after I contact SASVALE?",
    answer:
      "We respond within 24 hours to schedule an initial discovery call. During this conversation, we discuss your business goals, current bottlenecks, technical constraints, and desired timelines to evaluate whether we are the right studio partner for your project.",
  },
  {
    id: "faq-2",
    question: "Do I need a complete project specification before starting?",
    answer:
      "No. Many clients come to us with a clear business challenge rather than a formal technical spec. Our Stage 01 (Understand) and Stage 02 (Decide) phases are specifically designed to turn your commercial objectives into a structured architecture and defined scope.",
  },
  {
    id: "faq-3",
    question: "Can SASVALE improve an existing website or system?",
    answer:
      "Yes. In addition to zero-to-one product development, we frequently audit, refactor, and modernize existing codebases. We identify architectural bottlenecks, modernize tech stacks, improve performance, and integrate automated workflows where valuable.",
  },
  {
    id: "faq-4",
    question: "How involved will I be during development?",
    answer:
      "You will collaborate directly with our team. We run iterative sprints with regular working demos, meaning you test functional staging builds and provide feedback at key milestones rather than waiting for an unguided reveal at the end.",
  },
  {
    id: "faq-5",
    question: "How do project timelines and pricing work?",
    answer:
      "Project timelines and pricing depend on technical complexity, system integrations, and scope depth. After our initial discovery, we provide a transparent, fixed or milestone-based proposal with clear deliverables and agreed schedules before any code is written.",
  },
  {
    id: "faq-6",
    question: "What happens after the project is delivered?",
    answer:
      "Upon launch, you receive complete source-code ownership, deployment documentation, and administrative walkthroughs. Depending on your team's operational needs, we can also establish structured post-launch support or continuous improvement retainers by mutual agreement.",
  },
];

export function ApproachFaq() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Accent Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[190px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                08 / COMMON QUESTIONS
              </span>
            </div>
            <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              A few things <br />
              <span className="text-[#C6A56B] font-medium">worth knowing.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#A8A49B] max-w-md leading-relaxed font-light">
            Clear answers to common questions regarding how we start, collaborate, and deliver digital systems.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="max-w-4xl mx-auto pt-10 divide-y divide-white/[0.08]">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="py-6 sm:py-8 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-content`}
                  className="w-full flex items-start justify-between gap-6 text-left group focus-visible:outline-2 focus-visible:outline-[#C6A56B] focus-visible:outline-offset-4 rounded-lg"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="text-xs font-mono font-bold text-[#C6A56B] mt-1 shrink-0">
                      0{index + 1}
                    </span>
                    <h3 className="font-sans text-lg sm:text-[22px] font-medium text-[#F5F3ED] group-hover:text-[#C6A56B] transition-colors leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-white/[0.12] flex items-center justify-center text-[#F5F3ED] group-hover:border-[#C6A56B] group-hover:text-[#C6A56B] transition-all shrink-0 mt-0.5">
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div
                    id={`${faq.id}-content`}
                    role="region"
                    className="pt-4 pl-8 sm:pl-12 pr-4 text-sm sm:text-base text-[#A8A49B] font-light leading-relaxed animate-fadeIn"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
