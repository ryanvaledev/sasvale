"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-01",
    question: "What types of websites can SASVALE develop?",
    answer:
      "We develop corporate business websites, editorial brand platforms, headless e-commerce storefronts, digital product showcases, and client-facing portals. Every build is custom-designed and engineered for rapid loading, search engine discoverability, clean typography, and seamless mobile responsiveness.",
  },
  {
    id: "faq-02",
    question: "Can you build a completely custom web application?",
    answer:
      "Yes. A substantial portion of our work involves building bespoke web applications shaped around specific operational workflows. This includes role-based access portals, customer dashboards, internal management systems, inventory tracking engines, and specialized booking platforms.",
  },
  {
    id: "faq-03",
    question: "Do you work on existing websites and software?",
    answer:
      "Yes. In addition to zero-to-one builds, we frequently modernize existing platforms—refactoring frontends to modern frameworks like Next.js, improving database performance, integrating third-party APIs, fixing UX bottlenecks, and enhancing overall system security.",
  },
  {
    id: "faq-04",
    question: "Can you develop e-commerce stores?",
    answer:
      "Yes. We engineer digital commerce solutions ranging from high-performance apparel storefronts (such as Ethletia) to specialized automotive catalog systems (such as Wind Deflectors), integrating secure payment gateways, cart flows, and real-time inventory management.",
  },
  {
    id: "faq-05",
    question: "Can you connect our existing tools and business systems?",
    answer:
      "Yes. We build custom API bridges, webhook handlers, and automated synchronization pipelines connecting third-party CRMs, payment processors, communication channels, and internal databases to eliminate repetitive manual data entry.",
  },
  {
    id: "faq-06",
    question: "How do you determine project cost and timeline?",
    answer:
      "Project costs and schedules depend entirely on scope, technical complexity, custom design requirements, and external integrations. Following an initial discovery conversation, we provide a clear, transparent proposal with fixed milestones before any implementation begins.",
  },
  {
    id: "faq-07",
    question: "Can SASVALE handle both design and development?",
    answer:
      "Yes. We operate as a unified design and software engineering studio. We handle discovery, user experience flows, high-fidelity UI systems, full-stack frontend and backend code, testing, and production deployment under one cohesive team.",
  },
  {
    id: "faq-08",
    question: "What happens after a project is delivered?",
    answer:
      "Upon completion, you receive full intellectual property ownership, source code access, and comprehensive handover documentation. We can also provide ongoing technology support, continuous performance monitoring, and iterative feature development under a tailored support arrangement.",
  },
];

export function CapabilitiesFaq() {
  const [openIds, setOpenIds] = useState<string[]>(["faq-01"]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Subtle Ambience */}
      <div
        className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[200px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                07 / COMMON QUESTIONS
              </span>
            </div>
            <h2 className="font-sans text-[36px] sm:text-[48px] lg:text-[60px] font-light tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              A few things <br />
              <span className="text-[#C6A56B] font-medium">you might want to know.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-[#A8A49B] leading-relaxed max-w-[500px]">
              Direct, transparent answers regarding our service capabilities, technical workflows, scope structuring, and project delivery.
            </p>
          </div>
        </div>

        {/* Accessible Accordion List */}
        <div className="mt-12 sm:mt-16 divide-y divide-white/[0.08] border-b border-white/[0.08]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div key={item.id} className="py-6 sm:py-8 transition-colors hover:bg-white/[0.01]">
                <button
                  type="button"
                  id={`btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`content-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-start justify-between gap-6 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A56B]"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="text-sm font-mono text-[#C6A56B]/70 shrink-0 mt-1">
                      {`0${index + 1}`}
                    </span>
                    <span className="font-sans text-lg sm:text-xl lg:text-2xl font-normal text-[#F5F3ED] group-hover:text-white transition-colors">
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border border-white/[0.1] bg-white/[0.03] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 border-[#C6A56B]/50 text-[#C6A56B]" : "text-[#A8A49B]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`content-${item.id}`}
                    role="region"
                    aria-labelledby={`btn-${item.id}`}
                    className="mt-4 sm:mt-6 pl-8 sm:pl-12 pr-4 sm:pr-12 text-sm sm:text-base text-[#A8A49B] leading-relaxed"
                  >
                    <p className="max-w-[850px]">{item.answer}</p>
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
