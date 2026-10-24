"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Layers, Cpu, Sparkles, RefreshCw } from "lucide-react";

interface EngagementModelData {
  id: string;
  step: string;
  name: string;
  headline: string;
  idealFor: string[];
  deliverables: string[];
  ctaLabel: string;
  accentColor: string;
  badge: string;
}

const MODELS: EngagementModelData[] = [
  {
    id: "project-based",
    step: "01",
    name: "Project-Based Development",
    headline: "Have a project in mind? We'll help bring it to life.",
    idealFor: [
      "Business websites & digital storefronts",
      "High-conversion e-commerce platforms",
      "Custom software & internal systems",
      "White-label agency delivery & design partner builds",
      "New web applications & client portals",
    ],
    deliverables: [
      "Project discovery and requirements audit",
      "Defined scope, milestones, and deliverables",
      "Bespoke UI/UX design & interaction ergonomics",
      "Full-stack engineering & rigorous testing",
      "Production deployment preparation",
      "Comprehensive documentation & IP handover",
    ],
    ctaLabel: "Discuss Your Project",
    accentColor: "#C6A56B",
    badge: "FIXED MILESTONE SCOPE",
  },
  {
    id: "dedicated-engineering",
    step: "02",
    name: "Dedicated Engineering",
    headline: "Extend your capabilities without building a team from scratch.",
    idealFor: [
      "Companies with ongoing engineering needs",
      "IT staff augmentation & dedicated engineering pods",
      "Existing product teams needing senior specialists",
      "Businesses delivering complex software platforms",
      "Scale-ups requiring continuous sprint velocity",
    ],
    deliverables: [
      "Dedicated senior engineering capacity",
      "Seamless integration into your existing Git & sprint workflow",
      "Direct code reviews, testing, and pull-request collaboration",
      "Continuous CI/CD pipeline and architectural alignment",
      "Ongoing feature velocity and codebase health",
    ],
    ctaLabel: "Discuss Engineering Support",
    accentColor: "#6E8FAF",
    badge: "EMBEDDED SPRINT CAPACITY",
  },
  {
    id: "mvp-venture",
    step: "03",
    name: "MVP & Venture Development",
    headline: "From early-stage idea to a real working product.",
    idealFor: [
      "Startup founders validating new digital products",
      "Businesses testing new revenue opportunities",
      "Companies launching independent digital platforms",
      "Founders requiring senior technical architecture",
    ],
    deliverables: [
      "Product roadmap and commercial prioritization",
      "Tight MVP scope definition to reach market fast",
      "Intuitive user experience & interface design",
      "Resilient, modular technical architecture",
      "Application engineering & database modeling",
      "Launch preparation and initial user analytics",
    ],
    ctaLabel: "Discuss Your Product Idea",
    accentColor: "#C6A56B",
    badge: "ZERO-TO-ONE LAUNCH",
  },
  {
    id: "ongoing-support",
    step: "04",
    name: "Ongoing Technology Support",
    headline: "Keep improving long after launch.",
    idealFor: [
      "Existing business websites and e-commerce stores",
      "Production web applications and client portals",
      "Companies seeking dependable technical stewardship",
      "Growing business systems requiring regular updates",
    ],
    deliverables: [
      "Proactive maintenance and security updates",
      "Continuous performance optimization & Core Web Vitals",
      "Incremental feature development and enhancements",
      "Bug fixes and emergency technical troubleshooting",
      "Third-party API and integration monitoring",
    ],
    ctaLabel: "Discuss Ongoing Support",
    accentColor: "#5F9F92",
    badge: "CONTINUOUS IMPROVEMENT",
  },
];

export function PartnershipsModels() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeModel = MODELS[activeIndex];

  return (
    <section id="ways-to-work" className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Accent Glow */}
      <div
        className="pointer-events-none absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full blur-[200px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
              02 / ENGAGEMENT MODELS
            </span>
          </div>
          <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
            Different needs. <br />
            <span className="text-[#C6A56B] font-medium">Different ways to build together.</span>
          </h2>
          <p className="mt-4 text-[#A8A49B] text-base sm:text-lg max-w-2xl font-light">
            Whether you need a complete product, additional engineering capacity, or ongoing improvements, the right engagement starts with understanding your goals.
          </p>
        </div>

        {/* Desktop Large-Format Interactive Selection Interface */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 pt-14 items-start">
          
          {/* Left Column: Numbered Navigation Tabs (4 Cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#A8A49B] pb-3 mb-2 border-b border-white/[0.08]">
              ENGAGEMENT MODELS (01 — 04)
            </div>

            {MODELS.map((model, idx) => {
              const isActive = activeIndex === idx;

              return (
                <button
                  key={model.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group focus-visible:outline-2 focus-visible:outline-[#C6A56B] cursor-pointer ${
                    isActive
                      ? "border-[#C6A56B]/60 bg-[#0e121b] shadow-xl shadow-[#C6A56B]/5"
                      : "border-white/[0.06] bg-[#080a0f]/60 hover:border-white/[0.14] hover:bg-[#0c0f16]"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded transition-colors ${
                        isActive
                          ? "bg-[#C6A56B] text-[#070707]"
                          : "bg-white/[0.05] text-[#A8A49B] group-hover:text-[#F5F3ED]"
                      }`}
                    >
                      {model.step}
                    </span>
                    <span
                      className={`text-sm font-semibold tracking-wider font-sans transition-colors ${
                        isActive ? "text-[#F5F3ED]" : "text-[#A8A49B] group-hover:text-[#F5F3ED]"
                      }`}
                    >
                      {model.name}
                    </span>
                  </div>

                  <span
                    className={`text-xs font-mono transition-transform duration-300 ${
                      isActive
                        ? "text-[#C6A56B] translate-x-1"
                        : "text-white/20 group-hover:text-white/60"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}

            {/* Contract Structure Note */}
            <div className="mt-8 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs font-mono text-[#A8A49B] leading-relaxed">
              <span className="text-[#C6A56B] font-bold block mb-1">TRANSPARENT TERMS</span>
              Defined scopes, clear deliverables, and 100% intellectual property ownership upon release.
            </div>
          </div>

          {/* Right Column: Active Model Presentation (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-white/[0.12] bg-[#090b10] p-8 sm:p-12 shadow-2xl transition-all duration-500">
              
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-mono font-light text-[#C6A56B]">
                    {activeModel.step}
                  </span>
                  <div className="h-6 w-px bg-white/20" />
                  <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C6A56B] uppercase">
                    {`MODEL ${activeModel.step} // ${activeModel.name}`}
                  </span>
                </div>

                <span className="text-xs font-mono text-[#A8A49B]/80 tracking-widest uppercase px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06]">
                  {activeModel.badge}
                </span>
              </div>

              {/* Headline */}
              <h3 className="font-sans text-[28px] sm:text-[34px] font-medium tracking-tight text-[#F5F3ED] mb-6 leading-tight">
                {activeModel.headline}
              </h3>

              {/* Model SVG Topology Visual */}
              <div className="mb-8 rounded-2xl border border-white/[0.08] bg-[#0c0f17] p-6 shadow-inner">
                {activeModel.id === "project-based" && <ProjectBasedVisual />}
                {activeModel.id === "dedicated-engineering" && <DedicatedVisual />}
                {activeModel.id === "mvp-venture" && <VentureVisual />}
                {activeModel.id === "ongoing-support" && <SupportVisual />}
              </div>

              {/* 2-Column Details: Ideal For & Deliverables */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                
                {/* Ideal For */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#C6A56B] mb-4">
                    IDEAL FOR
                  </h4>
                  <ul className="space-y-2.5">
                    {activeModel.idealFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#A8A49B] font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What the Engagement May Include */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#C6A56B] mb-4">
                    WHAT IS INCLUDED
                  </h4>
                  <ul className="space-y-2.5">
                    {activeModel.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#F5F3ED]">
                        <CheckCircle2 size={15} className="text-[#C6A56B] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action CTA */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#070707] hover:bg-[#d8b87e] shadow-lg shadow-[#C6A56B]/20 transition-all duration-300"
                >
                  <span>{activeModel.ctaLabel}</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <span className="text-xs font-mono text-[#A8A49B]">
                  CUSTOM PROPOSAL IN 24H
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Mobile & Tablet Expandable Panels (No Horizontal Overflow) */}
        <div className="lg:hidden space-y-8 pt-10">
          {MODELS.map((model) => (
            <div
              key={model.id}
              className="rounded-2xl border border-white/[0.1] bg-[#090b10] p-6 sm:p-8 shadow-xl"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#C6A56B] text-[#070707]">
                    {model.step}
                  </span>
                  <span className="text-xs font-mono font-bold tracking-wider text-[#C6A56B] uppercase">
                    {model.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#A8A49B]">{model.badge}</span>
              </div>

              <h3 className="font-sans text-xl sm:text-2xl font-medium tracking-tight text-[#F5F3ED] mb-4">
                {model.headline}
              </h3>

              {/* Visual */}
              <div className="mb-6 rounded-xl border border-white/[0.08] bg-[#0c0f17] p-4">
                {model.id === "project-based" && <ProjectBasedVisual />}
                {model.id === "dedicated-engineering" && <DedicatedVisual />}
                {model.id === "mvp-venture" && <VentureVisual />}
                {model.id === "ongoing-support" && <SupportVisual />}
              </div>

              {/* Ideal for list */}
              <div className="mb-4">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[#C6A56B] mb-2">
                  IDEAL FOR
                </span>
                <ul className="space-y-1.5">
                  {model.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#A8A49B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Included */}
              <div className="mb-6">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[#C6A56B] mb-2">
                  WHAT IS INCLUDED
                </span>
                <ul className="space-y-2">
                  {model.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#F5F3ED]">
                      <CheckCircle2 size={14} className="text-[#C6A56B] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#070707] hover:bg-[#d8b87e] transition-colors"
              >
                <span>{model.ctaLabel}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ============================================================================
// MODEL-SPECIFIC TOPOLOGY VISUALIZATIONS
// ============================================================================

function ProjectBasedVisual() {
  return (
    <div className="space-y-2.5 font-mono text-xs select-none">
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px] text-[#A8A49B]">
        <span>PROJECT LIFECYCLE RUNTIME</span>
        <span className="text-[#C6A56B]">END-TO-END</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center">
        <div className="p-2.5 rounded bg-black/40 border border-white/[0.06]">
          <span className="text-[10px] text-[#C6A56B] block">01. DISCOVERY</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">Audit &amp; Spec</span>
        </div>
        <div className="p-2.5 rounded bg-black/40 border border-white/[0.06]">
          <span className="text-[10px] text-[#C6A56B] block">02. DESIGN</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">UI/UX Flow</span>
        </div>
        <div className="p-2.5 rounded bg-[#C6A56B]/10 border border-[#C6A56B]/30">
          <span className="text-[10px] text-[#C6A56B] block">03. BUILD</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">Sprint Code</span>
        </div>
        <div className="p-2.5 rounded bg-black/40 border border-white/[0.06]">
          <span className="text-[10px] text-[#5F9F92] block">04. RELEASE</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">Handover</span>
        </div>
      </div>
    </div>
  );
}

function DedicatedVisual() {
  return (
    <div className="space-y-2.5 font-mono text-xs select-none">
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px] text-[#A8A49B]">
        <span>ENGINEERING POD INTEGRATION</span>
        <span className="text-[#6E8FAF]">SYNCHRONIZED SPRINT</span>
      </div>
      <div className="flex items-center justify-between gap-3 text-center">
        <div className="w-1/2 p-3 rounded bg-black/40 border border-white/[0.06]">
          <span className="text-[10px] text-[#6E8FAF] block">YOUR TEAM REPO</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">Product Backlog</span>
        </div>
        <span className="text-[#6E8FAF] text-xs">⟷</span>
        <div className="w-1/2 p-3 rounded bg-[#6E8FAF]/10 border border-[#6E8FAF]/30">
          <span className="text-[10px] text-[#6E8FAF] block">SASVALE SENIOR POD</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">Direct PRs &amp; Testing</span>
        </div>
      </div>
    </div>
  );
}

function VentureVisual() {
  return (
    <div className="space-y-2.5 font-mono text-xs select-none">
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px] text-[#A8A49B]">
        <span>TECHNICAL VENTURE INCUBATION</span>
        <span className="text-[#C6A56B]">FAST VALIDATION</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
        <div className="p-2.5 rounded bg-black/40 border border-white/[0.06]">
          <span className="text-[10px] text-[#C6A56B] block">IDEA AUDIT</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">Core Feasibility</span>
        </div>
        <div className="p-2.5 rounded bg-[#C6A56B]/10 border border-[#C6A56B]/30">
          <span className="text-[10px] text-[#C6A56B] block">FOCUSED MVP</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">Lean Architecture</span>
        </div>
        <div className="p-2.5 rounded bg-black/40 border border-white/[0.06]">
          <span className="text-[10px] text-emerald-400 block">MARKET TEST</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">Live Customer Data</span>
        </div>
      </div>
    </div>
  );
}

function SupportVisual() {
  return (
    <div className="space-y-2.5 font-mono text-xs select-none">
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px] text-[#A8A49B]">
        <span>LONG-TERM SYSTEM STEWARDSHIP</span>
        <span className="text-[#5F9F92]">HIGH AVAILABILITY</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
        <div className="p-2.5 rounded bg-black/40 border border-white/[0.06]">
          <span className="text-[10px] text-[#5F9F92] block">HEALTH &amp; VITALS</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">99.9% Uptime Checks</span>
        </div>
        <div className="p-2.5 rounded bg-[#5F9F92]/10 border border-[#5F9F92]/30">
          <span className="text-[10px] text-[#5F9F92] block">FEATURE ITERATION</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">Monthly Enhancements</span>
        </div>
        <div className="p-2.5 rounded bg-black/40 border border-white/[0.06]">
          <span className="text-[10px] text-[#5F9F92] block">SECURITY AUDIT</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">Zero Decay Protocol</span>
        </div>
      </div>
    </div>
  );
}
