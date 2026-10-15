"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface GlanceCapability {
  num: string;
  id: string;
  title: string;
  description: string;
  tag: string;
}

const CAPABILITIES_LIST: GlanceCapability[] = [
  {
    num: "01",
    id: "websites-applications",
    title: "Websites & Web Applications",
    description: "High-performance websites, digital platforms, and web apps built for speed, responsiveness, and clear brand positioning.",
    tag: "Customer-Facing",
  },
  {
    num: "02",
    id: "ecommerce-development",
    title: "E-Commerce Development",
    description: "Modern online storefronts with organized product discovery, frictionless shopping carts, and reliable checkout flows.",
    tag: "Digital Commerce",
  },
  {
    num: "03",
    id: "custom-software",
    title: "Custom Software Development",
    description: "Tailored web applications engineered around specific business workflows, user permissions, and operational requirements.",
    tag: "Bespoke Logic",
  },
  {
    num: "04",
    id: "business-systems",
    title: "Business Systems & Dashboards",
    description: "Integrated administrative portals, inventory tools, scheduling platforms, and reporting hubs to organize everyday work.",
    tag: "Operations & Tools",
  },
  {
    num: "05",
    id: "automation-ai",
    title: "Automation & AI Integration",
    description: "Connected API pipelines, webhook triggers, and practical machine intelligence to remove repetitive manual tasks.",
    tag: "Connected Workflows",
  },
  {
    num: "06",
    id: "ui-ux-design",
    title: "UI/UX & Product Design",
    description: "Thoughtful interface design, wireframes, prototypes, and design systems that make complex digital systems clear and enjoyable.",
    tag: "Experience Architecture",
  },
];

interface CapabilitiesAtAGlanceProps {
  onSelectService?: (id: string) => void;
}

export function CapabilitiesAtAGlance({ onSelectService }: CapabilitiesAtAGlanceProps) {
  const handleClick = (id: string) => {
    if (onSelectService) {
      onSelectService(id);
    }
    const target = document.getElementById("service-explorer");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="capabilities-overview" className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Subtle Ambience */}
      <div
        className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[220px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-14 sm:pb-20 border-b border-white/[0.08]">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                01 / WHAT WE DO
              </span>
            </div>
            <h2 className="font-sans text-[36px] sm:text-[48px] lg:text-[58px] font-light tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              Everything digital. <br />
              <span className="text-[#C6A56B] font-medium">Built around your business.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-[#A8A49B] leading-relaxed max-w-[560px]">
              From customer-facing experiences to the systems that power everyday operations, we help businesses turn digital requirements into practical solutions.
            </p>
          </div>
        </div>

        {/* Oversized Numbered Editorial Grid (2 columns on desktop, clean rows with fine separators) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] border-b border-white/[0.08]">
          
          {/* Column 1 (Services 01, 02, 03) */}
          <div className="divide-y divide-white/[0.08]">
            {CAPABILITIES_LIST.slice(0, 3).map((item) => (
              <button
                key={item.num}
                type="button"
                onClick={() => handleClick(item.id)}
                className="group w-full text-left p-6 sm:p-10 lg:p-12 transition-all duration-300 hover:bg-white/[0.02] flex flex-col justify-between focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A56B]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-mono font-light text-[#C6A56B]/70 group-hover:text-[#C6A56B] transition-colors">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#A8A49B]/70 uppercase px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] group-hover:border-[#C6A56B]/30 group-hover:text-[#C6A56B] transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-sans text-2xl sm:text-3xl font-normal text-[#F5F3ED] group-hover:text-white mb-3 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A8A49B] leading-relaxed max-w-[480px]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs font-mono text-[#C6A56B]/70 group-hover:text-[#C6A56B] transition-colors">
                  <span>EXPLORE SERVICE SPECIFICATIONS</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </button>
            ))}
          </div>

          {/* Column 2 (Services 04, 05, 06) */}
          <div className="divide-y divide-white/[0.08]">
            {CAPABILITIES_LIST.slice(3, 6).map((item) => (
              <button
                key={item.num}
                type="button"
                onClick={() => handleClick(item.id)}
                className="group w-full text-left p-6 sm:p-10 lg:p-12 transition-all duration-300 hover:bg-white/[0.02] flex flex-col justify-between focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A56B]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-mono font-light text-[#C6A56B]/70 group-hover:text-[#C6A56B] transition-colors">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#A8A49B]/70 uppercase px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] group-hover:border-[#C6A56B]/30 group-hover:text-[#C6A56B] transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-sans text-2xl sm:text-3xl font-normal text-[#F5F3ED] group-hover:text-white mb-3 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A8A49B] leading-relaxed max-w-[480px]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs font-mono text-[#C6A56B]/70 group-hover:text-[#C6A56B] transition-colors">
                  <span>EXPLORE SERVICE SPECIFICATIONS</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
