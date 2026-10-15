"use client";

import React, { useState } from "react";
import { ContactForm } from "@/components/contact/ContactForm";

const STATUS_STRIP = [
  {
    num: "01",
    label: "PROJECT FIT",
    detail: "Technical product & systems work",
  },
  {
    num: "02",
    label: "FIRST STEP",
    detail: "Direct technical review",
  },
  {
    num: "03",
    label: "ENGAGEMENT",
    detail: "Project or partnership",
  },
  {
    num: "04",
    label: "COMMUNICATION",
    detail: "Direct access",
  },
];

const TECHNICAL_REVIEW_STAGES = [
  {
    step: "01",
    title: "UNDERSTAND THE PROBLEM",
    desc: "We examine the technical and operational context behind what you are building to identify core requirements and friction points.",
  },
  {
    step: "02",
    title: "ASSESS THE SYSTEM",
    desc: "We analyze architecture dependencies, integration surfaces, and data models to determine the optimal engineering approach.",
  },
  {
    step: "03",
    title: "DEFINE THE NEXT STEP",
    desc: "We outline practical next steps—whether an architectural audit, dedicated pod deployment, or scoped product delivery.",
  },
];

const DELIVERY_PRINCIPLES = [
  {
    title: "DIRECT OWNERSHIP",
    desc: "Full IP & repository rights transferred.",
  },
  {
    title: "TECHNICAL CONTEXT",
    desc: "Senior engineering from day one.",
  },
  {
    title: "CLEAR SCOPE",
    desc: "Explicit milestones without ambiguity.",
  },
  {
    title: "LONG-TERM THINKING",
    desc: "Built for durability and compounding scale.",
  },
];

const FAQS = [
  {
    question: "When is the right time to reach out?",
    answer:
      "Whether you are designing a new platform from scratch or diagnosing bottlenecks in an existing production codebase, early technical clarity prevents expensive rewrites.",
  },
  {
    question: "Who reviews project inquiries?",
    answer:
      "Every inquiry is evaluated directly by senior technical leadership. We do not pass submissions through junior sales development funnels.",
  },
  {
    question: "What engagement models do you offer?",
    answer:
      "We work through dedicated technical pods, end-to-end product builds, and ongoing systems partnerships depending on your timeline and internal capabilities.",
  },
  {
    question: "Can we sign an NDA before sharing sensitive details?",
    answer:
      "Yes. We routinely execute mutual non-disclosure agreements before reviewing proprietary architectures, data schemas, or sensitive business processes.",
  },
];

export default function ContactInteractiveView() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="relative w-full sasvale-atmosphere min-h-screen text-[#F3F0E8] transition-colors duration-300 overflow-hidden">
      {/* Subtle Technical Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 sasvale-tech-grid opacity-75 z-0"
        aria-hidden="true"
      />

      {/* Top Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[450px] rounded-full blur-[170px] opacity-15 bg-[#C6A56B]"
        aria-hidden="true"
      />

      {/* ================================================================== */}
      {/* 1. HERO SECTION                                                    */}
      {/* ================================================================== */}
      <section className="relative z-10 w-full pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20 border-b border-[rgba(243,240,232,0.10)]">
        {/* Subtle SASVALE Watermark (reduced opacity by ~20% to prevent content competition) */}
        <div
          className="pointer-events-none absolute -bottom-10 right-4 sm:right-10 select-none text-[90px] sm:text-[150px] lg:text-[210px] font-display font-bold tracking-tighter text-white/[0.012] leading-none"
          aria-hidden="true"
        >
          SASVALE
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col items-start text-left max-w-4xl">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(243,240,232,0.12)] bg-[rgba(243,240,232,0.02)] mb-6 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B] animate-pulse" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C6A56B]">
                INQUIRIES &amp; COLLABORATION // DIRECT TECHNICAL ACCESS
              </span>
            </div>

            {/* Semantic H1 Headline */}
            <h1 className="text-[34px] sm:text-[48px] lg:text-[62px] font-medium tracking-[-0.035em] leading-[1.08] text-[#F3F0E8] font-display">
              Tell us what <br className="hidden sm:inline" />
              <span className="text-[#C6A56B]">you&apos;re building.</span>
            </h1>

            {/* Lead Description */}
            <p className="mt-5 sm:mt-6 text-[16px] sm:text-[18px] leading-[1.7] text-[#A8A49B] font-normal font-body max-w-2xl">
              Share the system, product, or operational bottleneck you&apos;re working through.
            </p>

            {/* Factual Information & Status Strip */}
            <div className="mt-10 sm:mt-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl border border-white/[0.08] bg-[#0c0d10]/70 backdrop-blur-sm">
              {STATUS_STRIP.map((item) => (
                <div key={item.num} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono text-[#C6A56B] font-semibold tracking-wider">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-[#F3F0E8] tracking-widest font-medium">
                      {item.label}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#A8A49B] font-normal leading-relaxed">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. 60/40 PROJECT INTAKE MATRIX                                     */}
      {/* ================================================================== */}
      <section className="relative z-10 py-14 sm:py-18 lg:py-22 border-b border-[rgba(243,240,232,0.10)]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left 60% (7 cols): Project Intake Form */}
            <div className="lg:col-span-7">
              {/* Header & Flow Indicator with strengthened visual hierarchy & spacing */}
              <div className="mb-8 sm:mb-10">
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B] block mb-2.5">
                  PROJECT INTAKE
                </span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-medium text-[#F3F0E8] tracking-[-0.025em] leading-[1.18] mb-3.5">
                  Initiate technical scoping.
                </h2>
                
                {/* Architectural Intake Flow */}
                <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] text-[11px] font-mono text-[#A8A49B]">
                  <span className="text-[#C6A56B] font-medium">INQUIRY</span>
                  <span className="text-white/20">→</span>
                  <span>CONTEXT</span>
                  <span className="text-white/20">→</span>
                  <span>SYSTEM</span>
                  <span className="text-white/20">→</span>
                  <span>NEXT STEP</span>
                </div>
              </div>

              <ContactForm />
            </div>

            {/* Right 40% (5 cols): Direct Communication, Technical Review, Principles */}
            <div className="lg:col-span-5 space-y-6">
              {/* Panel 1: Direct Communication Channels (Interactive) */}
              <div className="sasvale-card p-7 sm:p-8 relative overflow-hidden border-white/[0.1] bg-[#0c0d10]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#C6A56B]">
                    DIRECT COMMUNICATION
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B] animate-pulse" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-medium text-[#F3F0E8] mb-2.5">
                  Direct communication channels.
                </h3>
                <p className="text-[#A8A49B] text-xs sm:text-sm leading-relaxed mb-6 font-body font-normal">
                  If you prefer sending requirements, specifications, or NDA requests directly via email:
                </p>

                <div className="space-y-3">
                  {/* Primary Channel */}
                  <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-[#C6A56B]/60 hover:translate-x-1 transition-all duration-200">
                    <div className="flex items-center gap-2.5 mb-2 sm:mb-0">
                      <span className="w-2 h-2 rounded-full bg-[#C6A56B]" aria-hidden="true" />
                      <a
                        href="mailto:inquiries@sasvale.com"
                        className="text-xs sm:text-sm font-mono text-[#F3F0E8] group-hover:text-[#C6A56B] transition-colors"
                      >
                        inquiries@sasvale.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-[#A8A49B] group-hover:text-[#F3F0E8] transition-colors">
                        Primary Intake
                      </span>
                      <span
                        className="text-xs text-[#C6A56B] group-hover:translate-x-0.5 transition-transform"
                        aria-hidden="true"
                      >
                        →
                      </span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("inquiries@sasvale.com")}
                        className="ml-1 px-2 py-1 rounded border border-white/[0.1] bg-white/[0.04] text-[10px] font-mono text-[#A8A49B] hover:text-[#C6A56B] hover:border-[#C6A56B]/40 transition-colors cursor-pointer"
                        title="Copy to clipboard"
                      >
                        {copiedEmail === "inquiries@sasvale.com" ? "Copied" : "Copy"}
                      </button>
                    </div>
                  </div>

                  {/* General Channel */}
                  <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:border-[#C6A56B]/40 hover:translate-x-1 transition-all duration-200">
                    <div className="flex items-center gap-2.5 mb-2 sm:mb-0">
                      <span className="w-2 h-2 rounded-full bg-[#A8A49B]/60" aria-hidden="true" />
                      <a
                        href="mailto:hello@sasvale.com"
                        className="text-xs sm:text-sm font-mono text-[#A8A49B] group-hover:text-[#F3F0E8] transition-colors"
                      >
                        hello@sasvale.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-[#A8A49B]/70 group-hover:text-[#A8A49B] transition-colors">
                        General Contact
                      </span>
                      <span
                        className="text-xs text-[#C6A56B] group-hover:translate-x-0.5 transition-transform"
                        aria-hidden="true"
                      >
                        →
                      </span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("hello@sasvale.com")}
                        className="ml-1 px-2 py-1 rounded border border-white/[0.08] bg-white/[0.03] text-[10px] font-mono text-[#A8A49B] hover:text-[#F3F0E8] hover:border-white/[0.2] transition-colors cursor-pointer"
                        title="Copy to clipboard"
                      >
                        {copiedEmail === "hello@sasvale.com" ? "Copied" : "Copy"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 2: Direct Technical Review (Informational) */}
              <div className="sasvale-card p-6 sm:p-7 relative overflow-hidden border-white/[0.07] bg-[#0c0d10]/60">
                <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#C6A56B] block mb-2.5">
                  DIRECT TECHNICAL REVIEW
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-medium text-[#F3F0E8] mb-2">
                  How inquiries are evaluated.
                </h3>
                <p className="text-[#A8A49B] text-xs sm:text-sm leading-relaxed mb-6 font-body font-normal">
                  Submissions are reviewed directly by senior engineering architects—never automated bots or sales qualifiers.
                </p>

                <div className="space-y-4">
                  {TECHNICAL_REVIEW_STAGES.map((stage) => (
                    <div
                      key={stage.step}
                      className="flex items-start gap-3.5 pt-3.5 first:pt-0 border-t first:border-t-0 border-[rgba(243,240,232,0.06)]"
                    >
                      <span className="text-xs font-mono font-bold text-[#C6A56B] shrink-0 mt-0.5">
                        {stage.step}
                      </span>
                      <div>
                        <div className="font-mono text-xs uppercase tracking-wider font-semibold text-[#F3F0E8]">
                          {stage.title}
                        </div>
                        <div className="text-xs text-[#A8A49B] leading-relaxed mt-1">
                          {stage.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 3: Delivery Principles (Compact) */}
              <div className="sasvale-card p-5 sm:p-6 relative overflow-hidden border-white/[0.05] bg-white/[0.015]">
                <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#C6A56B] block mb-2.5">
                  DELIVERY PRINCIPLES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {DELIVERY_PRINCIPLES.map((principle) => (
                    <div
                      key={principle.title}
                      className="p-2.5 rounded-lg border border-white/[0.05] bg-white/[0.02]"
                    >
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-[#C6A56B] text-xs">✓</span>
                        <span className="text-xs font-mono font-medium text-[#F3F0E8]">
                          {principle.title}
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-[#A8A49B] leading-relaxed">
                        {principle.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. EDITORIAL ACCORDION FAQ SECTION (HEIGHT REDUCED ~30%)            */}
      {/* ================================================================== */}
      <section className="relative z-10 py-10 sm:py-14 lg:py-16">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Header */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B] block mb-2 sm:mb-2.5">
                BEFORE WE START
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-[#F3F0E8] tracking-tight leading-[1.15] mb-3">
                A few practical <br className="hidden sm:inline" />
                <span className="text-[#C6A56B]">questions.</span>
              </h2>
              <p className="text-sm font-body text-[#A8A49B] leading-relaxed max-w-md">
                Straightforward answers on our engagement structure, scoping review, and confidentiality protocol.
              </p>
            </div>

            {/* Right Accordion List */}
            <div className="lg:col-span-7 space-y-2.5">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-[#C6A56B]/50 bg-[#0c0d10] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                        : "border-white/[0.08] bg-[#0c0d10]/60 hover:border-white/[0.18]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4.5 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-semibold text-[#C6A56B]">
                          0{idx + 1}
                        </span>
                        <span className="font-display text-base sm:text-lg font-medium text-[#F3F0E8]">
                          {faq.question}
                        </span>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border border-white/[0.1] text-xs transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#C6A56B] text-[#080909] border-[#C6A56B]"
                            : "text-[#A8A49B] bg-white/[0.04]"
                        }`}
                        aria-hidden="true"
                      >
                        ↓
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4.5 pb-4.5 sm:px-5 sm:pb-5 pt-0 border-t border-white/[0.04]">
                        <p className="text-sm sm:text-[15px] font-body text-[#A8A49B] leading-relaxed pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Natural Transition into Dark Footer (compacted) */}
      <div
        className="w-full h-8 sm:h-12 bg-gradient-to-b from-transparent to-[#0B0B0B] pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
