"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Cpu, Database, Layers, Terminal, Sparkles, FileText, ArrowRight } from "lucide-react";

interface ProcessStageData {
  step: string;
  name: string;
  headline: string;
  description: string;
  activities: string[];
  deliverable: string;
  scopeNote?: string;
  visualType: "understand" | "decide" | "build" | "automate" | "scale";
}

const STAGES: ProcessStageData[] = [
  {
    step: "01",
    name: "UNDERSTAND",
    headline: "First, we understand the problem.",
    description:
      "We explore your business, goals, users, existing systems, and current challenges before deciding what the solution should look like.",
    activities: [
      "Discovery discussions with project stakeholders",
      "Business requirements and operational mapping",
      "User journey and workflow analysis",
      "Existing systems, data, and tooling review",
      "Core project goals and priority definition",
    ],
    deliverable: "A clear discovery summary and agreed project objectives.",
    visualType: "understand",
  },
  {
    step: "02",
    name: "DECIDE",
    headline: "Make the right decisions before building.",
    description:
      "We turn what we've learned into a practical plan, defining priorities, product structure, technical direction, and the next steps.",
    activities: [
      "Agreed scope and boundary definition",
      "Product roadmap and milestone planning",
      "Information architecture and wireframe structure",
      "Appropriate technology and framework selection",
      "Delivery cadence and staging milestones",
    ],
    deliverable: "An agreed project scope and implementation roadmap.",
    visualType: "decide",
  },
  {
    step: "03",
    name: "BUILD",
    headline: "Turn a clear plan into a working product.",
    description:
      "Design and engineering come together through iterative implementation, review, and refinement.",
    activities: [
      "Bespoke UI/UX design and interaction ergonomics",
      "Modern frontend and backend development",
      "Data structures, schemas, and API integration",
      "Regular milestone progress demonstrations",
      "Cross-browser, functional, and performance testing",
    ],
    deliverable: "A reviewable working product with validated functionality.",
    visualType: "build",
  },
  {
    step: "04",
    name: "AUTOMATE",
    headline: "Make the system work smarter.",
    description:
      "Where it creates value, we connect tools, simplify workflows, and automate repetitive tasks so teams can spend less time on manual operations.",
    activities: [
      "Operational workflow automation",
      "Third-party API and platform integrations",
      "Continuous data synchronization",
      "Automated notifications and scheduled jobs",
      "End-to-end integration and error validation",
    ],
    deliverable: "Connected workflows and tested automation where included in scope.",
    scopeNote:
      "Note: Automation is applied where it genuinely adds business value and is included in project scope. Not every project requires complex background pipelines.",
    visualType: "automate",
  },
  {
    step: "05",
    name: "SCALE",
    headline: "Build for today. Prepare for tomorrow.",
    description:
      "We focus on reliability, performance, maintainability, and a clear path for future improvements as business needs evolve.",
    activities: [
      "Comprehensive performance audit and optimization",
      "Security best practices and permissions review",
      "Production deployment preparation",
      "Clean source-code documentation and handover",
      "Post-launch refinements where agreed in scope",
    ],
    deliverable: "A launched or deployment-ready system with appropriate handover materials.",
    scopeNote:
      "Note: We build for maintainability and clear ownership. Specific ongoing maintenance, SLAs, or retainers are defined by mutual agreement.",
    visualType: "scale",
  },
];

export function ApproachProcess() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const currentStage = STAGES[activeStageIndex];

  return (
    <section id="the-process" className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
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
              02 / THE PROCESS
            </span>
          </div>
          <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
            One clear process. <br />
            <span className="text-[#C6A56B] font-medium">Better decisions at every stage.</span>
          </h2>
          <p className="mt-4 text-[#A8A49B] text-base sm:text-lg max-w-2xl font-light">
            We structure every digital engagement through five transparent stages so you always understand what is being built, why it matters, and what comes next.
          </p>
        </div>

        {/* Desktop Interactive Split Layout (Sticky Left Nav + Dynamic Right Content) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 pt-14 items-start">
          
          {/* Left Column: Sticky Process Nav (4 Cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#A8A49B] pb-3 mb-2 border-b border-white/[0.08]">
              PROCESS STAGES (01 — 05)
            </div>

            {STAGES.map((s, idx) => {
              const isActive = activeStageIndex === idx;

              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group focus-visible:outline-2 focus-visible:outline-[#C6A56B] ${
                    isActive
                      ? "border-[#C6A56B]/60 bg-[#0e121b] shadow-lg shadow-[#C6A56B]/5"
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
                      {s.step}
                    </span>
                    <span
                      className={`text-sm font-semibold tracking-wider font-sans transition-colors ${
                        isActive ? "text-[#F5F3ED]" : "text-[#A8A49B] group-hover:text-[#F5F3ED]"
                      }`}
                    >
                      {s.name}
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

            {/* Stage Direct Commitment Note */}
            <div className="mt-8 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs font-mono text-[#A8A49B] leading-relaxed">
              <span className="text-[#C6A56B] font-bold block mb-1">STAGE PROGRESSION</span>
              Clear milestones and direct senior communication at every phase.
            </div>
          </div>

          {/* Right Column: Dynamic Stage Content & Bespoke Visual (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-white/[0.12] bg-[#090b10] p-8 sm:p-12 shadow-2xl transition-all duration-500">
              
              {/* Header Badge & Stage Title */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-mono font-light text-[#C6A56B]">
                    {currentStage.step}
                  </span>
                  <div className="h-6 w-px bg-white/20" />
                  <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C6A56B] uppercase">
                    {`STAGE ${currentStage.step} // ${currentStage.name}`}
                  </span>
                </div>

                <span className="text-xs font-mono text-[#A8A49B]/70 tracking-widest uppercase">
                  VERIFIED DELIVERABLE
                </span>
              </div>

              {/* Stage Headline */}
              <h3 className="font-sans text-[28px] sm:text-[36px] font-medium tracking-tight text-[#F5F3ED] mb-4 leading-tight">
                {currentStage.headline}
              </h3>

              {/* Stage Description */}
              <p className="text-[17px] text-[#A8A49B] font-normal leading-relaxed mb-8">
                {currentStage.description}
              </p>

              {/* Bespoke Interactive Visual for Current Stage */}
              <div className="mb-10 rounded-2xl border border-white/[0.08] bg-[#0c0f17] p-6 shadow-inner">
                {currentStage.visualType === "understand" && <UnderstandVisual />}
                {currentStage.visualType === "decide" && <DecideVisual />}
                {currentStage.visualType === "build" && <BuildVisual />}
                {currentStage.visualType === "automate" && <AutomateVisual />}
                {currentStage.visualType === "scale" && <ScaleVisual />}
              </div>

              {/* Activities Checklist */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#C6A56B]">
                  KEY STAGE ACTIVITIES
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentStage.activities.map((act) => (
                    <div
                      key={act}
                      className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-[#C6A56B] mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-[13px] text-[#F5F3ED] leading-snug">
                        {act}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverable Box */}
              <div className="p-4 rounded-xl border border-[#C6A56B]/30 bg-[#C6A56B]/5 flex items-start gap-3.5">
                <FileText size={18} className="text-[#C6A56B] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-[10px] font-mono tracking-widest uppercase text-[#C6A56B] font-bold">
                    TYPICAL DELIVERABLE
                  </span>
                  <p className="text-sm font-medium text-[#F5F3ED] mt-0.5">
                    {currentStage.deliverable}
                  </p>
                </div>
              </div>

              {/* Scope Note if present */}
              {currentStage.scopeNote && (
                <p className="mt-4 text-xs font-mono text-[#A8A49B]/80 leading-relaxed italic">
                  {currentStage.scopeNote}
                </p>
              )}

            </div>
          </div>

        </div>

        {/* Mobile & Tablet Full Vertical Layout (Non-Sticky, 100% Accessible) */}
        <div className="lg:hidden space-y-12 pt-10">
          {STAGES.map((stage) => (
            <div
              key={stage.step}
              className="rounded-2xl border border-white/[0.1] bg-[#090b10] p-6 sm:p-8 shadow-xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#C6A56B] text-[#070707]">
                    {stage.step}
                  </span>
                  <span className="text-xs font-mono font-bold tracking-wider text-[#C6A56B] uppercase">
                    {stage.name}
                  </span>
                </div>
              </div>

              <h3 className="font-sans text-2xl font-medium tracking-tight text-[#F5F3ED] mb-3">
                {stage.headline}
              </h3>

              <p className="text-sm text-[#A8A49B] leading-relaxed mb-6">
                {stage.description}
              </p>

              {/* Visual Component */}
              <div className="mb-6 rounded-xl border border-white/[0.08] bg-[#0c0f17] p-4">
                {stage.visualType === "understand" && <UnderstandVisual />}
                {stage.visualType === "decide" && <DecideVisual />}
                {stage.visualType === "build" && <BuildVisual />}
                {stage.visualType === "automate" && <AutomateVisual />}
                {stage.visualType === "scale" && <ScaleVisual />}
              </div>

              {/* Activities */}
              <div className="space-y-2.5 mb-6">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[#C6A56B] mb-1">
                  ACTIVITIES
                </span>
                {stage.activities.map((act) => (
                  <div key={act} className="flex items-start gap-2.5 text-xs text-[#F5F3ED]">
                    <CheckCircle2 size={14} className="text-[#C6A56B] mt-0.5 shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>

              {/* Deliverable */}
              <div className="p-3.5 rounded-lg border border-[#C6A56B]/30 bg-[#C6A56B]/5 text-xs text-[#F5F3ED]">
                <span className="block text-[9px] font-mono tracking-wider uppercase text-[#C6A56B] font-bold">
                  DELIVERABLE
                </span>
                <span className="mt-0.5 block">{stage.deliverable}</span>
              </div>

              {stage.scopeNote && (
                <p className="mt-3 text-[11px] font-mono text-[#A8A49B] leading-relaxed">
                  {stage.scopeNote}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ============================================================================
// STAGE VISUALS (SVG / CSS BESPOKE TOPOLOGIES)
// ============================================================================

function UnderstandVisual() {
  return (
    <div className="space-y-3 font-mono text-xs select-none">
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px] text-[#A8A49B]">
        <span>DIAGNOSTIC MAPPING</span>
        <span className="text-[#C6A56B]">INPUT PHASE</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center">
        <div className="p-3 rounded-lg border border-white/[0.08] bg-black/40">
          <span className="block text-[10px] text-[#C6A56B]">01. DISCOVER</span>
          <span className="block text-xs font-semibold text-[#F5F3ED] mt-1">Business Goals</span>
        </div>
        <div className="p-3 rounded-lg border border-white/[0.08] bg-black/40">
          <span className="block text-[10px] text-[#6E8FAF]">02. ANALYZE</span>
          <span className="block text-xs font-semibold text-[#F5F3ED] mt-1">User Bottlenecks</span>
        </div>
        <div className="p-3 rounded-lg border border-white/[0.08] bg-black/40">
          <span className="block text-[10px] text-[#5F9F92]">03. MAP</span>
          <span className="block text-xs font-semibold text-[#F5F3ED] mt-1">System Reality</span>
        </div>
      </div>

      <div className="p-2.5 rounded-lg border border-[#C6A56B]/20 bg-[#C6A56B]/5 text-center text-[11px] text-[#F5F3ED]">
        Output: Agreed Discovery Brief &amp; Objective Prioritization
      </div>
    </div>
  );
}

function DecideVisual() {
  return (
    <div className="space-y-3 font-mono text-xs select-none">
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px] text-[#A8A49B]">
        <span>ARCHITECTURE &amp; SCOPE SPECIFICATION</span>
        <span className="text-[#6E8FAF]">PLANNING</span>
      </div>

      <div className="p-3 rounded-lg border border-white/[0.08] bg-black/40 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#F5F3ED] font-semibold">Scope Boundaries</span>
          <span className="text-emerald-400">Strictly Defined</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#F5F3ED] font-semibold">Stack Selection</span>
          <span className="text-[#6E8FAF]">Next.js / Node / Tailwind</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#F5F3ED] font-semibold">Milestone Roadmap</span>
          <span className="text-[#C6A56B]">Sprint Cadence</span>
        </div>
      </div>

      <div className="p-2.5 rounded-lg border border-[#6E8FAF]/20 bg-[#6E8FAF]/5 text-center text-[11px] text-[#F5F3ED]">
        Output: Signed Project Specification &amp; Architecture Roadmap
      </div>
    </div>
  );
}

function BuildVisual() {
  return (
    <div className="space-y-3 font-mono text-xs select-none">
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px] text-[#A8A49B]">
        <span>ITERATIVE SPRINT RUNTIME</span>
        <span className="text-[#C6A56B]">EXECUTION</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
        {/* Real Product UI Thumbnail */}
        <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/[0.1] bg-black/50">
          <Image
            src="/assets/projects/ethletia.png"
            alt="Product Interface Preview"
            fill
            sizes="300px"
            className="object-cover object-top"
          />
          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[9px] font-mono text-[#C6A56B]">
            LIVE REVIEW STAGING
          </div>
        </div>

        {/* Sprint Status Panel */}
        <div className="space-y-2">
          <div className="p-2.5 rounded border border-white/[0.06] bg-black/40 flex items-center justify-between text-[11px]">
            <span className="text-[#A8A49B]">Frontend UI/UX</span>
            <span className="text-emerald-400">&bull; Validated</span>
          </div>
          <div className="p-2.5 rounded border border-white/[0.06] bg-black/40 flex items-center justify-between text-[11px]">
            <span className="text-[#A8A49B]">Backend Schemas</span>
            <span className="text-[#C6A56B]">&bull; Integrated</span>
          </div>
          <div className="p-2.5 rounded border border-white/[0.06] bg-black/40 flex items-center justify-between text-[11px]">
            <span className="text-[#A8A49B]">Functional Tests</span>
            <span className="text-emerald-400">&bull; Passing</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomateVisual() {
  return (
    <div className="space-y-3 font-mono text-xs select-none">
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px] text-[#A8A49B]">
        <span>WORKFLOW INTEGRATION PIPELINE</span>
        <span className="text-[#5F9F92]">APPLIED AS NEEDED</span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
        <div className="w-full sm:w-1/3 p-2.5 rounded-lg border border-white/[0.08] bg-black/40">
          <span className="text-[10px] text-[#5F9F92] block">EVENT TRIGGER</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">Webhooks / Forms</span>
        </div>
        <span className="text-[#5F9F92] text-xs">→</span>
        <div className="w-full sm:w-1/3 p-2.5 rounded-lg border border-[#5F9F92]/30 bg-[#5F9F92]/5">
          <span className="text-[10px] text-[#5F9F92] block">LOGIC &amp; SYNC</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">Automated Queue</span>
        </div>
        <span className="text-[#5F9F92] text-xs">→</span>
        <div className="w-full sm:w-1/3 p-2.5 rounded-lg border border-white/[0.08] bg-black/40">
          <span className="text-[10px] text-[#C6A56B] block">SYSTEM DESTINATION</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">CRM / Notifications</span>
        </div>
      </div>

      <div className="p-2.5 rounded-lg border border-white/[0.06] bg-black/30 text-center text-[10px] text-[#A8A49B]">
        Operational toil reduced without forcing unnecessary third-party overhead.
      </div>
    </div>
  );
}

function ScaleVisual() {
  return (
    <div className="space-y-3 font-mono text-xs select-none">
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px] text-[#A8A49B]">
        <span>DEPLOYMENT &amp; HANDOVER READINESS</span>
        <span className="text-[#C6A56B]">LAUNCH</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
        <div className="p-3 rounded-lg border border-white/[0.08] bg-black/40">
          <span className="text-[10px] text-[#C6A56B] block">PERFORMANCE</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">&gt; 90+ Core Vitals</span>
        </div>
        <div className="p-3 rounded-lg border border-white/[0.08] bg-black/40">
          <span className="text-[10px] text-emerald-400 block">SECURITY</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">Hardened Roles</span>
        </div>
        <div className="p-3 rounded-lg border border-white/[0.08] bg-black/40">
          <span className="text-[10px] text-[#6E8FAF] block">HANDOVER</span>
          <span className="text-xs font-semibold text-[#F5F3ED] mt-0.5 block">Documented Code</span>
        </div>
      </div>

      <div className="p-2.5 rounded-lg border border-[#C6A56B]/20 bg-[#C6A56B]/5 text-center text-[11px] text-[#F5F3ED]">
        Output: Production Deployment &amp; Complete Source Code Handover
      </div>
    </div>
  );
}
