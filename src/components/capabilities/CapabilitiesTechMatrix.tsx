"use client";

import React from "react";
import { Terminal, Code2, Database, Workflow } from "lucide-react";

interface TechCategory {
  num: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  technologies: {
    name: string;
    description: string;
  }[];
}

const TECH_MATRIX: TechCategory[] = [
  {
    num: "01",
    category: "FRONTEND ENGINEERING",
    icon: <Code2 className="w-4 h-4 text-[#C6A56B]" />,
    description: "Component-driven user interfaces built for lightning speed, search engine indexing, and seamless mobile interactions.",
    technologies: [
      { name: "Next.js", description: "App router, edge rendering & server components" },
      { name: "React", description: "Declarative component state & interface composition" },
      { name: "TypeScript", description: "End-to-end type safety & compile-time correctness" },
      { name: "Tailwind CSS", description: "Utility-first design tokens & responsive styling" },
      { name: "HTML5 / CSS3 / JS", description: "Semantic web foundations & web standards" },
    ],
  },
  {
    num: "02",
    category: "BACKEND ARCHITECTURE",
    icon: <Terminal className="w-4 h-4 text-[#C6A56B]" />,
    description: "Predictable API services, business logic engines, and server layers engineered for stability and throughput.",
    technologies: [
      { name: "Node.js", description: "Event-driven asynchronous services & micro-APIs" },
      { name: "PHP / Laravel", description: "Robust web applications & enterprise patterns" },
      { name: "REST APIs", description: "Standardized HTTP endpoints & contract schemas" },
      { name: "Serverless Functions", description: "On-demand execution with zero idle compute" },
    ],
  },
  {
    num: "03",
    category: "DATA & PERSISTENCE",
    icon: <Database className="w-4 h-4 text-[#C6A56B]" />,
    description: "Relational data structures, transactional integrity, and optimized query layers designed for long-term consistency.",
    technologies: [
      { name: "PostgreSQL", description: "ACID-compliant relational storage & complex queries" },
      { name: "MySQL", description: "Proven enterprise database for transactional systems" },
      { name: "Prisma & ORMs", description: "Type-safe database querying & migrations" },
      { name: "Redis / Edge Caching", description: "In-memory caching & session state management" },
    ],
  },
  {
    num: "04",
    category: "INTEGRATIONS & AUTOMATION",
    icon: <Workflow className="w-4 h-4 text-[#C6A56B]" />,
    description: "Data pipelines, webhook handlers, and practical machine intelligence that streamline everyday business operations.",
    technologies: [
      { name: "API Integrations", description: "Payment gateways, CRMs & logistics dispatch" },
      { name: "Webhooks & Queues", description: "Event-driven communication with retries" },
      { name: "Workflow Tools", description: "Automated batch processing & background tasks" },
      { name: "AI APIs", description: "Text classification, extraction & parsing where beneficial" },
    ],
  },
];

export function CapabilitiesTechMatrix() {
  return (
    <section id="technology" className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Accent Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/3 w-[650px] h-[650px] rounded-full blur-[240px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                05 / THE TOOLS BEHIND THE WORK
              </span>
            </div>
            <h2 className="font-sans text-[36px] sm:text-[48px] lg:text-[60px] font-light tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              The right technology <br />
              <span className="text-[#C6A56B] font-medium">for the right problem.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-[#A8A49B] leading-relaxed max-w-[500px]">
              Technology is a means to an outcome. We choose the tools, frameworks, and architectures that fit the product and its requirements—prioritizing maintainability over industry buzzwords.
            </p>
          </div>
        </div>

        {/* Clean Editorial Technical Capability Matrix (4 Categories) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TECH_MATRIX.map((cat) => (
            <div
              key={cat.num}
              className="rounded-2xl border border-white/[0.08] bg-[#0c0d12] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#C6A56B]/30 hover:bg-[#0f1118]"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                  <span className="text-xs font-mono font-bold text-[#C6A56B]">
                    {cat.num}
                  </span>
                  <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                    {cat.icon}
                  </div>
                </div>

                <h3 className="font-sans text-base font-semibold text-[#F5F3ED] tracking-wide mb-2 uppercase">
                  {cat.category}
                </h3>

                <p className="text-xs text-[#A8A49B] leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Tech Pills & Micro-specifications */}
                <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                  {cat.technologies.map((tech, tIdx) => (
                    <div key={tIdx} className="group/item">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-semibold text-[#F5F3ED] group-hover/item:text-[#C6A56B] transition-colors">
                          {tech.name}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[#C6A56B]/50" />
                      </div>
                      <p className="text-[11px] text-[#A8A49B]/70 leading-normal mt-0.5">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-white/[0.06] text-[10px] font-mono text-[#A8A49B]/60 uppercase tracking-widest">
                VERIFIED CAPABILITY
              </div>
            </div>
          ))}
        </div>

        {/* Technical Philosophy Note */}
        <div className="mt-12 rounded-xl bg-white/[0.02] border border-white/[0.06] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <p className="text-xs sm:text-sm text-[#A8A49B]">
              We build with standards-compliant architectures, clean separation of concerns, and full repository ownership for every client.
            </p>
          </div>
          <span className="text-[11px] font-mono text-[#C6A56B] tracking-wider uppercase shrink-0">
            ZERO VENDOR LOCK-IN
          </span>
        </div>

      </div>
    </section>
  );
}
