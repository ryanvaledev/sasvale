"use client";

import React from "react";
import Image from "next/image";
import { Users, Globe2, ShieldCheck, Code2 } from "lucide-react";

export function AboutPeople() {
  return (
    <section className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Architectural Mark */}
      <div
        className="pointer-events-none absolute -top-24 left-1/3 w-[600px] h-[400px] rounded-full blur-[180px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                05 / THE PEOPLE
              </span>
            </div>
            <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              Good work starts <br />
              <span className="text-[#C6A56B] font-medium">with the right people.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#A8A49B] max-w-md leading-relaxed font-light">
            A real studio of craftspeople. No junior bait-and-switch, no disconnected subcontractors.
          </p>
        </div>

        {/* Editorial Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-12 sm:pt-16 items-center">
          
          {/* Authentic Studio Team Photography Composition (6 Cols) */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-3xl border border-white/[0.12] bg-[#0c0f17] overflow-hidden group shadow-2xl">
              
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/assets/images/the-people-behind-the-work.webp"
                  alt="The authentic craft and collaborative team behind Sasvale"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center grayscale contrast-115 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                
                {/* Refined Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-80" />
                
                {/* In-Frame Status Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#070707]/85 backdrop-blur-md border border-white/[0.1] text-[10px] font-mono text-[#C6A56B] tracking-wider uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>DISTRIBUTED ENGINEERING GUILD</span>
                </div>
              </div>

              {/* Geographic Footprint Telemetry */}
              <div className="p-6 sm:p-8 border-t border-white/[0.08] bg-[#080a0f]">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06] text-xs font-mono text-[#A8A49B]">
                  <span>CORE HUBS</span>
                  <span className="text-[#C6A56B]">CROSS-TIMEZONE RIGOR</span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                    <span className="block text-[11px] font-mono font-bold text-[#F5F3ED]">HOUSTON</span>
                    <span className="block text-[9px] font-mono text-[#A8A49B] mt-0.5">US CENTRAL</span>
                  </div>
                  <div className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                    <span className="block text-[11px] font-mono font-bold text-[#F5F3ED]">KARACHI</span>
                    <span className="block text-[9px] font-mono text-[#A8A49B] mt-0.5">PKT // GMT+5</span>
                  </div>
                  <div className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                    <span className="block text-[11px] font-mono font-bold text-[#F5F3ED]">LAHORE</span>
                    <span className="block text-[9px] font-mono text-[#A8A49B] mt-0.5">PKT // GMT+5</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Narrative on Craft & Culture (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-[#A8A49B] text-base leading-[1.75]">
            <h3 className="font-sans text-[24px] sm:text-[30px] font-medium text-[#F5F3ED] tracking-tight leading-snug">
              Specialists chosen for the specific problem, not whoever happens to be on the bench.
            </h3>

            <p>
              We are a team of software engineers, interface designers, systems architects, and product strategists spread across Houston, Karachi, and Lahore. Different backgrounds, different disciplines, complementary perspectives — united by a single uncompromising standard for digital craft.
            </p>

            <p>
              We hire people who are genuinely skilled at what they do and who care about the commercial outcomes they create. We do not offshore work to reduce cost and then present it as senior output. What you see is what you get: the people who collaborate with you on technical planning are the people who build and test your platform.
            </p>

            {/* 3 Core Studio Tenets */}
            <div className="pt-4 space-y-4">
              <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[#C6A56B]/10 text-[#C6A56B] shrink-0 mt-0.5">
                  <Code2 size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-[#F5F3ED]">
                    Senior Hands-On Execution
                  </h4>
                  <p className="text-xs text-[#A8A49B] mt-1 leading-relaxed">
                    Senior engineers write your core logic and handle complex integrations, preventing architectural shortcuts.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[#6E8FAF]/10 text-[#6E8FAF] shrink-0 mt-0.5">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-[#F5F3ED]">
                    Direct Accountability
                  </h4>
                  <p className="text-xs text-[#A8A49B] mt-1 leading-relaxed">
                    No layers of middlemen diluting feedback. Every sprint is directly reviewed with project owners.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
