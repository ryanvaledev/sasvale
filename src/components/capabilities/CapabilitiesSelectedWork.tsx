"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface CapabilityWorkItem {
  slug: string;
  name: string;
  category: string;
  industry: string;
  image: string;
  summary: string;
  href: string;
  statusBadge?: string;
}

const PROJECTS_DATA: CapabilityWorkItem[] = [
  {
    slug: "ethletia",
    name: "Ethletia",
    category: "Digital Commerce & Brand Experience",
    industry: "Activewear / Apparel",
    image: "/assets/projects/ethletia.png",
    summary:
      "A high-impact digital storefront designed around product discovery, brand presentation, and an intuitive purchasing journey.",
    href: "/work/ethletia",
  },
  {
    slug: "wind-deflectors",
    name: "Wind Deflectors",
    category: "E-Commerce & Specialized Catalog",
    industry: "Automotive Parts",
    image: "/assets/projects/wind.png",
    summary:
      "A niche automotive parts catalog engineered around vehicle compatibility matching, technical specifications, and direct order intake.",
    href: "/work/wind-deflectors",
  },
  {
    slug: "education-system",
    name: "Engineers & Doctors School",
    category: "Business System & Admin Portal",
    industry: "Education Administration",
    image: "/assets/projects/edschol.png",
    summary:
      "A centralized operational management platform handling daily attendance and fee scheduling across academic departments.",
    href: "/work/education-system",
  },
  {
    slug: "tbs-salon",
    name: "TBS Salon",
    category: "Service Booking & Digital Storefront",
    industry: "Beauty & Wellness",
    image: "/assets/projects/tbssalon.png",
    summary:
      "A luxury studio booking web application designed for seamless customer reservations and treatment exploration.",
    href: "/work/tbs-salon",
    statusBadge: "IN PROGRESS",
  },
];

export function CapabilitiesSelectedWork() {
  return (
    <section id="work" className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#070707] border-b border-white/[0.08] overflow-hidden">
      
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
                04 / THE WORK SPEAKS
              </span>
            </div>
            <h2 className="font-sans text-[36px] sm:text-[48px] lg:text-[60px] font-light tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              Not just what we offer. <br />
              <span className="text-[#C6A56B] font-medium">What we&apos;ve actually built.</span>
            </h2>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2.5 text-xs font-mono font-semibold tracking-[0.16em] text-[#C6A56B] uppercase transition-colors hover:text-white"
          >
            <span>Explore All Our Work</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Asymmetrical Gallery of Real Projects */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS_DATA.map((project, index) => {
            return (
              <div
                key={project.slug}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#0c0d12] overflow-hidden transition-all duration-500 hover:border-[#C6A56B]/40 hover:shadow-[0_0_35px_rgba(198,165,107,0.1)] flex flex-col justify-between"
              >
                {/* Image Showcase */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#070707] border-b border-white/[0.06]">
                  <Image
                    src={project.image}
                    alt={`${project.name} digital product interface`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-transparent opacity-80" />

                  {/* Corner Status Badge */}
                  {project.statusBadge ? (
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/30 text-[10px] font-mono font-semibold tracking-wider text-amber-300 uppercase">
                        {project.statusBadge}
                      </span>
                    </div>
                  ) : (
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded bg-[#070707]/80 backdrop-blur-sm border border-white/10 text-[10px] font-mono tracking-wider text-[#A8A49B] uppercase">
                        {project.industry}
                      </span>
                    </div>
                  )}

                  {/* External Hover Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#070707]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[#F5F3ED] transition-transform duration-300 group-hover:bg-[#C6A56B] group-hover:text-[#070707] group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#C6A56B] tracking-wider uppercase mb-2">
                      <span>{project.category}</span>
                      <span>{`0${index + 1}`}</span>
                    </div>

                    <h3 className="font-sans text-2xl sm:text-3xl font-medium text-[#F5F3ED] group-hover:text-white transition-colors mb-3">
                      {project.name}
                    </h3>

                    <p className="text-sm sm:text-base text-[#A8A49B] leading-relaxed mb-6">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#C6A56B] group-hover:text-white transition-colors tracking-wider uppercase"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    <span className="text-[10px] font-mono text-white/30 uppercase">
                      STUDIO SPEC
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 sm:mt-20 pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#A8A49B] text-center sm:text-left">
            Every project is engineered with direct client feedback, clean documentation, and 100% intellectual property ownership.
          </p>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#F5F3ED] border border-white/[0.12] hover:border-[#C6A56B]/40 text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-300 shrink-0"
          >
            <span>Explore All Our Work</span>
            <ArrowRight className="w-4 h-4 text-[#C6A56B] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
