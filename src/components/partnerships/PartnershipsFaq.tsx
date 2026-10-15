"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface PartnershipFaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: PartnershipFaqItem[] = [
  {
    id: "faq-1",
    question: "What types of businesses does SASVALE work with?",
    answer:
      "We partner with growth-stage founders, established businesses, e-commerce brands, and operational teams looking for dependable digital systems. Our clients range from early-stage startups building their first MVP to operating companies modernizing internal workflows and customer-facing platforms.",
  },
  {
    id: "faq-2",
    question: "Can I hire SASVALE for a single website or project?",
    answer:
      "Yes. Our Project-Based Development model is specifically structured for discrete projects such as a new brand website, an e-commerce storefront, a custom web portal, or a specific internal management application with a clearly defined scope and delivery schedule.",
  },
  {
    id: "faq-3",
    question: "Can SASVALE work alongside my existing developers?",
    answer:
      "Yes. Under our Dedicated Engineering model, senior engineers integrate seamlessly into your existing Git workflows, communication channels, and sprint cycles, helping your internal team accelerate delivery without the friction of hiring or managing external subcontractors.",
  },
  {
    id: "faq-4",
    question: "How are project scope and pricing determined?",
    answer:
      "Pricing and scope depend on functional requirements, technical complexity, custom integrations, and the chosen engagement structure. After an initial discovery discussion, we provide a transparent, fixed or milestone-based proposal outlining exact deliverables and costs before any code is written.",
  },
  {
    id: "faq-5",
    question: "Can you improve an existing website or application?",
    answer:
      "Yes. We regularly audit, refactor, and modernize existing codebases. We diagnose architectural bottlenecks, optimize page load speed and Core Web Vitals, implement responsive redesigns, and build automated backend workflows into existing platforms.",
  },
  {
    id: "faq-6",
    question: "Who owns the source code and project assets?",
    answer:
      "You do. Intellectual property, licensing, repository access, and transfer terms are clearly defined in the project agreement. Upon final milestone delivery, all custom code, design files, and documentation belong unconditionally to your business.",
  },
  {
    id: "faq-7",
    question: "What happens after project delivery?",
    answer:
      "We provide deployment support, administrative walkthroughs, and documentation to ensure a seamless handover. For teams that require ongoing technical care, we offer continuous maintenance and feature retainer arrangements by mutual agreement.",
  },
  {
    id: "faq-8",
    question: "How do we start a partnership?",
    answer:
      "Getting started begins with an introductory conversation. Submit an inquiry through our contact form with a brief summary of what you want to build or improve, and we will follow up within 24 hours to schedule an initial discovery call.",
  },
];

export function PartnershipsFaq() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#05070c] border-b border-white/[0.08] overflow-hidden">
      
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
                07 / GOOD TO KNOW
              </span>
            </div>
            <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              The important questions, <br />
              <span className="text-[#C6A56B] font-medium">answered clearly.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#A8A49B] max-w-md leading-relaxed font-light">
            Everything you need to know about partnering with Sasvale, from scoping and pricing to IP ownership and post-launch support.
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
                  className="w-full flex items-start justify-between gap-6 text-left group focus-visible:outline-2 focus-visible:outline-[#C6A56B] focus-visible:outline-offset-4 rounded-lg cursor-pointer"
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
