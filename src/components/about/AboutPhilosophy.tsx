"use client";

import React, { useState } from "react";
import { Target, Cpu, TrendingUp, Layers, Check } from "lucide-react";

export function AboutPhilosophy() {
  const [activePanel, setActivePanel] = useState<number | null>(null);

  return (
    <section className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#05070c] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Subtle Linear Glow */}
      <div
        className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
              02 / WHAT DRIVES US
            </span>
          </div>
          <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
            Strategy. Automation. <span className="text-[#C6A56B] font-medium">Scale.</span>
          </h2>
          <p className="mt-4 text-[#A8A49B] text-base sm:text-lg max-w-2xl">
            Our governing methodology. We do not jump straight to implementation without clarity, and we do not stop at launch without resilience.
          </p>
        </div>

        {/* 3 Individually Designed Editorial Panels (Alternating layouts, non-generic) */}
        <div className="space-y-12 sm:space-y-16 pt-12 sm:pt-16">
          
          {/* PANEL 01 — STRATEGY (Wide Left-Heavy Editorial Spread) */}
          <div
            onMouseEnter={() => setActivePanel(1)}
            onMouseLeave={() => setActivePanel(null)}
            className="group relative rounded-3xl border border-white/[0.12] bg-[#090b10] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#C6A56B]/40"
          >
            {/* Ambient Corner Radial */}
            <div className="pointer-events-none absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[#C6A56B]/15 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
              
              {/* Text & Framing (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <span className="text-[44px] sm:text-[60px] font-mono font-light text-[#C6A56B] leading-none">
                    01
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#C6A56B]/40 via-white/10 to-transparent" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A8A49B]">
                    PILLAR I // ALIGNMENT
                  </span>
                </div>

                <h3 className="font-sans text-[32px] sm:text-[44px] lg:text-[50px] font-medium tracking-tight text-[#F5F3ED] leading-tight mb-4">
                  STRATEGY
                </h3>

                <p className="text-[17px] sm:text-[19px] text-[#F5F3ED] font-light leading-relaxed mb-4">
                  Understand the business, identify the right opportunities, and decide what is worth building.
                </p>

                <p className="text-sm sm:text-base text-[#A8A49B] leading-relaxed mb-8 max-w-xl">
                  Too much software is created to solve problems that could have been handled with better process. Before writing code, we map your commercial levers, user bottlenecks, and technical constraints. We define the highest-ROI product scope and ensure technology serves your commercial survival.
                </p>

                {/* Practical Deliverables Pill Matrix */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {[
                    "Opportunity Diagnostic",
                    "Architectural Blueprint",
                    "ROI Feasibility",
                    "Stack Selection",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-mono text-[#F5F3ED]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bespoke Visual: Strategic Decision & Topology Diagram (5 Cols) */}
              <div className="lg:col-span-5 w-full">
                <div className="relative rounded-2xl border border-white/[0.1] bg-[#0c0f17] p-6 shadow-inner">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] text-[10px] font-mono text-[#A8A49B]">
                    <span>TOPOLOGY // OPPORTUNITY MAPPING</span>
                    <span className="text-[#C6A56B]">LEVERAGE RATIO</span>
                  </div>

                  {/* SVG Decision Topology */}
                  <svg
                    viewBox="0 0 320 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    aria-hidden="true"
                  >
                    {/* Grid Background */}
                    <path d="M 20 40 L 300 40 M 20 90 L 300 90 M 20 140 L 300 140" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3 3" />
                    <path d="M 80 10 L 80 170 M 160 10 L 160 170 M 240 10 L 240 170" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3 3" />

                    {/* Problem Input Node */}
                    <rect x="20" y="70" width="70" height="40" rx="6" fill="#111726" stroke="#C6A56B" strokeWidth="1.2" />
                    <text x="55" y="88" fill="#F5F3ED" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PROBLEM</text>
                    <text x="55" y="99" fill="#94a3b8" fontSize="7" fontFamily="monospace" textAnchor="middle">Commercial</text>

                    {/* Connecting Vector */}
                    <path d="M 90 90 L 130 90" stroke="#C6A56B" strokeWidth="1.5" strokeDasharray="3 3" />
                    <polygon points="128,87 134,90 128,93" fill="#C6A56B" />

                    {/* Strategic Filter Node */}
                    <rect x="135" y="60" width="80" height="60" rx="8" fill="#151a28" stroke="#C6A56B" strokeWidth="1.5" />
                    <text x="175" y="82" fill="#C6A56B" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">FILTER</text>
                    <text x="175" y="95" fill="#F5F3ED" fontSize="7.5" fontFamily="monospace" textAnchor="middle">High Leverage</text>
                    <text x="175" y="106" fill="#94a3b8" fontSize="7" fontFamily="monospace" textAnchor="middle">Low Bloat</text>

                    {/* Exit Vectors */}
                    <path d="M 215 80 L 250 50" stroke="#6E8FAF" strokeWidth="1.2" />
                    <polygon points="248,47 254,50 248,53" fill="#6E8FAF" />

                    <path d="M 215 100 L 250 130" stroke="#5F9F92" strokeWidth="1.2" />
                    <polygon points="248,127 254,130 248,133" fill="#5F9F92" />

                    {/* Output Endpoints */}
                    <rect x="250" y="35" width="60" height="30" rx="4" fill="#0b0f19" stroke="#6E8FAF" strokeWidth="1" />
                    <text x="280" y="52" fill="#6E8FAF" fontSize="8" fontFamily="monospace" textAnchor="middle">BUILD SPEC</text>

                    <rect x="250" y="115" width="60" height="30" rx="4" fill="#0b0f19" stroke="#5F9F92" strokeWidth="1" />
                    <text x="280" y="132" fill="#5F9F92" fontSize="8" fontFamily="monospace" textAnchor="middle">COMPOUND</text>
                  </svg>

                  <div className="mt-3 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[9px] font-mono text-[#A8A49B]">
                    <span>DECISION LATENCY: MINIMAL</span>
                    <span className="text-emerald-400">STATUS: REFINED</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* PANEL 02 — AUTOMATION (Inverted Layout with Tech Telemetry & Orchestration) */}
          <div
            onMouseEnter={() => setActivePanel(2)}
            onMouseLeave={() => setActivePanel(null)}
            className="group relative rounded-3xl border border-white/[0.12] bg-[#090b10] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#6E8FAF]/40"
          >
            {/* Ambient Corner Radial */}
            <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#6E8FAF]/15 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
              
              {/* Bespoke Visual: Automation Orchestration Flow (5 Cols, First on desktop) */}
              <div className="lg:col-span-5 w-full order-2 lg:order-1">
                <div className="relative rounded-2xl border border-white/[0.1] bg-[#0c0f17] p-6 shadow-inner">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] text-[10px] font-mono text-[#A8A49B]">
                    <span>PIPELINE // EVENT ORCHESTRATION</span>
                    <span className="text-[#6E8FAF]">SYNC: 100%</span>
                  </div>

                  {/* Operational Telemetry Stack */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg border border-white/[0.06] bg-black/40 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-[#F5F3ED] font-semibold">WEBHOOK INGESTION</span>
                      </div>
                      <span className="text-[10px] text-emerald-400">ACTIVE &bull; 0ms LAG</span>
                    </div>

                    <div className="flex justify-center -my-1 text-[#6E8FAF] text-xs">
                      ↓
                    </div>

                    <div className="p-3 rounded-lg border border-[#6E8FAF]/30 bg-[#6E8FAF]/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu size={14} className="text-[#6E8FAF]" />
                        <span className="text-[#6E8FAF] font-semibold">LOGIC &amp; NORMALIZATION</span>
                      </div>
                      <span className="text-[10px] text-[#A8A49B]">REDUNDANT CHECKS</span>
                    </div>

                    <div className="flex justify-center -my-1 text-[#6E8FAF] text-xs">
                      ↓
                    </div>

                    <div className="p-3 rounded-lg border border-white/[0.06] bg-black/40 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#C6A56B]" />
                        <span className="text-[#F5F3ED] font-semibold">ERP &bull; CRM &bull; COMMERCE</span>
                      </div>
                      <span className="text-[10px] text-[#C6A56B]">SYNC COMPLETE</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[9px] font-mono text-[#A8A49B]">
                    <span>HUMAN TOIL REMOVED: ~85%</span>
                    <span className="text-[#6E8FAF]">FAILOVER: RETRIED</span>
                  </div>
                </div>
              </div>

              {/* Text & Framing (7 Cols, Second on desktop) */}
              <div className="lg:col-span-7 flex flex-col justify-between order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <span className="text-[44px] sm:text-[60px] font-mono font-light text-[#6E8FAF] leading-none">
                    02
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#6E8FAF]/40 via-white/10 to-transparent" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A8A49B]">
                    PILLAR II // EFFICIENCY
                  </span>
                </div>

                <h3 className="font-sans text-[32px] sm:text-[44px] lg:text-[50px] font-medium tracking-tight text-[#F5F3ED] leading-tight mb-4">
                  AUTOMATION
                </h3>

                <p className="text-[17px] sm:text-[19px] text-[#F5F3ED] font-light leading-relaxed mb-4">
                  Simplify operations, connect systems, and remove repetitive work through practical technology.
                </p>

                <p className="text-sm sm:text-base text-[#A8A49B] leading-relaxed mb-8 max-w-xl">
                  Manual data re-entry, disconnected billing tools, and clunky spreadsheet reconciliations choke operational momentum. We design resilient background automations, unified APIs, and self-healing pipelines that allow your team to focus on high-value business development.
                </p>

                {/* Practical Deliverables Pill Matrix */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {[
                    "Workflow Orchestration",
                    "Custom Integrations & APIs",
                    "Continuous CI/CD",
                    "Data Synchronization",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-mono text-[#F5F3ED]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6E8FAF]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* PANEL 03 — SCALE (Architectural High-Throughput Topology) */}
          <div
            onMouseEnter={() => setActivePanel(3)}
            onMouseLeave={() => setActivePanel(null)}
            className="group relative rounded-3xl border border-white/[0.12] bg-[#090b10] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#5F9F92]/40"
          >
            {/* Ambient Corner Radial */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#5F9F92]/15 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
              
              {/* Text & Framing (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <span className="text-[44px] sm:text-[60px] font-mono font-light text-[#5F9F92] leading-none">
                    03
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#5F9F92]/40 via-white/10 to-transparent" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A8A49B]">
                    PILLAR III // RESILIENCE
                  </span>
                </div>

                <h3 className="font-sans text-[32px] sm:text-[44px] lg:text-[50px] font-medium tracking-tight text-[#F5F3ED] leading-tight mb-4">
                  SCALE
                </h3>

                <p className="text-[17px] sm:text-[19px] text-[#F5F3ED] font-light leading-relaxed mb-4">
                  Engineer platforms that perform reliably, remain maintainable, and support future growth.
                </p>

                <p className="text-sm sm:text-base text-[#A8A49B] leading-relaxed mb-8 max-w-xl">
                  True scale is not just about handling million-user traffic spikes; it is about maintainability. We build with strict typing, modular architectures, and clean database boundaries so that future feature releases are quick, safe, and free from compounding technical debt.
                </p>

                {/* Practical Deliverables Pill Matrix */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {[
                    "Zero-Downtime Releases",
                    "Modular Architecture",
                    "Strict Typing & Linting",
                    "High-Throughput Caching",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-mono text-[#F5F3ED]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5F9F92]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bespoke Visual: Resilient Tiered Infrastructure Topology (5 Cols) */}
              <div className="lg:col-span-5 w-full">
                <div className="relative rounded-2xl border border-white/[0.1] bg-[#0c0f17] p-6 shadow-inner space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-[10px] font-mono text-[#A8A49B]">
                    <span>ARCHITECTURE // MODULAR TIERS</span>
                    <span className="text-[#5F9F92]">UPTIME &gt; 99.9%</span>
                  </div>

                  {/* Tier 1: Edge CDN */}
                  <div className="p-3 rounded-lg border border-white/[0.06] bg-black/50 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-[#5F9F92] font-bold">L1</span>
                      <span className="text-[#F5F3ED]">EDGE &bull; GLOBAL CDN</span>
                    </div>
                    <span className="text-[10px] text-[#A8A49B]">&lt; 30ms LATENCY</span>
                  </div>

                  {/* Tier 2: Application Core */}
                  <div className="p-3 rounded-lg border border-[#5F9F92]/30 bg-[#5F9F92]/5 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-[#5F9F92] font-bold">L2</span>
                      <span className="text-[#F5F3ED]">NEXT.JS CORE &bull; SERVERLESS</span>
                    </div>
                    <span className="text-[10px] text-[#5F9F92]">SSR &bull; ZERO DECAY</span>
                  </div>

                  {/* Tier 3: Isolated Data Boundary */}
                  <div className="p-3 rounded-lg border border-white/[0.06] bg-black/50 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-[#5F9F92] font-bold">L3</span>
                      <span className="text-[#F5F3ED]">DATABASE &bull; EVENT QUEUE</span>
                    </div>
                    <span className="text-[10px] text-[#A8A49B]">REPLICATED &bull; SAFE</span>
                  </div>

                  <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[9px] font-mono text-[#A8A49B]">
                    <span>FUTURE HORIZON: 5+ YEARS</span>
                    <span className="text-emerald-400">REWRITE RISK: ZERO</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
