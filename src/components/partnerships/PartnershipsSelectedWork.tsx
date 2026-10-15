"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface PartnershipWorkItem {
  slug: string;
  name: string;
  category: string;
  industry: string;
  image: string;
  summary: string;
  href: string;
}

const PROJECTS: PartnershipWorkItem[] = [
  {
    slug: "ethletia",
    name: "Ethletia",
    category: "Digital Commerce",
    industry: "Activewear / Apparel",
    image: "/assets/projects/ethletia.png",
    summary:
      "A high-impact digital storefront designed around product discovery, brand presentation, and an intuitive purchasing journey.",
    href: "/work/ethletia",
  },
  {
    slug: "wind-deflectors",
    name: "Wind Deflectors",
    category: "E-Commerce",
    industry: "Automotive Parts",
    image: "/assets/projects/wind.png",
    summary:
      "A niche automotive parts catalog engineered around vehicle compatibility matching, technical specifications, and direct order intake.",
    href: "/work/wind-deflectors",
  },
  {
    slug: "education-system",
    name: "Engineers & Doctors School",
    category: "Business System",
    industry: "Education Administration",
    image: "/assets/projects/edschol.png",
    summary:
      "A centralized operational management platform handling daily attendance and fee scheduling across academic departments.",
    href: "/work/education-system",
  },
];

export function PartnershipsSelectedWork() {
  return (
    <section className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Accent Glow */}
      <div
        className="pointer-events-none absolute bottom-1/4 left-1/4 w-[550px] h-[550px] rounded-full blur-[200px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                06 / SELECTED WORK
              </span>
            </div>
            <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              Built through collaboration. <br />
              <span className="text-[#C6A56B] font-medium">Made for real-world use.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2">
            <span className="text-[11px] font-mono text-[#A8A49B] tracking-widest uppercase">
              DELIVERED PLATFORMS
            </span>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[#C6A56B] hover:text-[#d8b87e] transition-colors"
            >
              <span>Explore All Projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Staggered 3-Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-14">
          {PROJECTS.map((project, idx) => (
            <Link
              key={project.slug}
              href={project.href}
              className={`group relative flex flex-col rounded-3xl border border-white/[0.1] bg-[#090b10] overflow-hidden transition-all duration-500 hover:border-[#C6A56B]/50 hover:shadow-2xl hover:shadow-[#C6A56B]/10 ${
                idx === 1 ? "lg:translate-y-6" : ""
              }`}
              aria-label={`View ${project.name} case study`}
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c0f17] border-b border-white/[0.08]">
                <Image
                  src={project.image}
                  alt={`${project.name} product deliverable`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-60" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[#070707]/80 backdrop-blur-md border border-white/[0.12] text-[#F5F3ED]">
                    {project.category}
                  </span>

                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                    LIVE PLATFORM
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <h3 className="font-sans text-xl font-semibold text-[#F5F3ED] group-hover:text-[#C6A56B] transition-colors">
                      {project.name}
                    </h3>
                    <div className="w-7 h-7 rounded-full border border-white/[0.12] flex items-center justify-center text-[#F5F3ED] group-hover:border-[#C6A56B] group-hover:text-[#C6A56B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  <p className="text-[11px] font-mono tracking-wider uppercase text-[#C6A56B] mb-3">
                    {project.industry}
                  </p>

                  <p className="text-xs sm:text-sm text-[#A8A49B] leading-relaxed font-light mb-6">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#A8A49B]">
                  <span>VIEW CASE STUDY</span>
                  <span className="text-[#C6A56B] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#A8A49B]">
            DISCOVER HOW WE BUILD ACROSS ACTIVEWEAR, AUTOMOTIVE, AND CUSTOM BUSINESS OPERATING SYSTEMS
          </p>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#F5F3ED] border border-white/[0.12] bg-white/[0.02] hover:border-[#C6A56B]/60 hover:bg-white/[0.05] transition-all"
          >
            <span>Explore All Projects</span>
            <ArrowRight size={14} className="text-[#C6A56B] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
