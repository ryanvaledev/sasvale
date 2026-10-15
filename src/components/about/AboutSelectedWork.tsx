"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface SelectedProject {
  num: string;
  name: string;
  category: string;
  industry: string;
  description: string;
  image: string;
  href: string;
  status: "Live" | "In Progress";
  tags: string[];
}

const PROJECTS: SelectedProject[] = [
  {
    num: "01",
    name: "Ethletia",
    category: "Digital Commerce",
    industry: "Sportswear / Activewear",
    description:
      "A digital commerce experience designed around product discovery, brand presentation, and an intuitive purchasing journey for an activewear brand.",
    image: "/assets/projects/ethletia.png",
    href: "/work/ethletia",
    status: "Live",
    tags: ["Product Discovery", "E-Commerce", "Brand Experience"],
  },
  {
    num: "02",
    name: "Wind Deflectors",
    category: "E-Commerce",
    industry: "Automotive Parts",
    description:
      "Niche automotive e-commerce storefront engineered around vehicle compatibility fitment, technical cataloging, and structured order intake.",
    image: "/assets/projects/wind.png",
    href: "/work/wind-deflectors",
    status: "Live",
    tags: ["Vehicle Fitment", "Parts Catalog", "Direct Checkout"],
  },
  {
    num: "03",
    name: "Education System",
    category: "Business System",
    industry: "Education Administration",
    description:
      "Fee and daily attendance management platform centralizing administrative academic workflows into an integrated, dependable internal operating system.",
    image: "/assets/projects/edschol.png",
    href: "/work/education-system",
    status: "Live",
    tags: ["Fee Management", "Attendance Tracking", "Student Records"],
  },
  {
    num: "04",
    name: "TBS Salon",
    category: "Salon Booking",
    industry: "Beauty & Grooming",
    description:
      "Luxury salon booking web application focused on appointment reservations, stylist scheduling, and streamlined client service exploration.",
    image: "/assets/projects/tbssalon.png",
    href: "/work/tbs-salon",
    status: "In Progress",
    tags: ["Appointment Booking", "Service Selection", "Client Management"],
  },
];

export function AboutSelectedWork() {
  return (
    <section className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#05070c] border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Subtle Accent Glow */}
      <div
        className="pointer-events-none absolute bottom-1/4 right-0 w-[550px] h-[550px] rounded-full blur-[200px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
                04 / SELECTED WORK
              </span>
            </div>
            <h2 className="font-sans text-[34px] sm:text-[48px] lg:text-[60px] font-light sm:font-normal tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
              Ideas are easy. <br />
              <span className="text-[#C6A56B] font-medium">Execution is everything.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <span className="text-[11px] font-mono text-[#A8A49B] tracking-widest uppercase">
              PORTFOLIO PROOF // VERIFIED DELIVERABLES
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

        {/* Editorial Staggered Project Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-12 sm:pt-16">
          {PROJECTS.map((project, index) => (
            <Link
              key={project.name}
              href={project.href}
              className={`group relative flex flex-col rounded-3xl border border-white/[0.1] bg-[#090b10] overflow-hidden transition-all duration-500 hover:border-[#C6A56B]/50 hover:shadow-2xl hover:shadow-[#C6A56B]/10 ${
                index % 2 === 1 ? "lg:translate-y-8" : ""
              }`}
              aria-label={`View ${project.name} case study`}
            >
              {/* Image Frame with Refined Aspect & Clipping */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c0f17] border-b border-white/[0.08]">
                <Image
                  src={project.image}
                  alt={`${project.name} digital product by Sasvale`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-60" />

                {/* Top Status & Index Badge Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[#070707]/80 backdrop-blur-md border border-white/[0.12] text-[#F5F3ED]">
                    {`${project.num} // ${project.category}`}
                  </span>

                  {project.status === "In Progress" ? (
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30 backdrop-blur-md flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      IN DEVELOPMENT
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      LIVE PLATFORM
                    </span>
                  )}
                </div>
              </div>

              {/* Project Narrative Content */}
              <div className="p-7 sm:p-9 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="font-sans text-[24px] sm:text-[28px] font-medium tracking-tight text-[#F5F3ED] group-hover:text-[#C6A56B] transition-colors">
                      {project.name}
                    </h3>
                    <div className="w-8 h-8 rounded-full border border-white/[0.12] flex items-center justify-center text-[#F5F3ED] group-hover:border-[#C6A56B] group-hover:text-[#C6A56B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <p className="text-xs font-mono tracking-wider uppercase text-[#C6A56B] mb-3">
                    {project.industry}
                  </p>

                  <p className="text-sm text-[#A8A49B] leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tags Strip */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-[10px] font-mono text-[#A8A49B] bg-white/[0.02] border border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Portfolio Navigation Row */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm font-mono text-[#A8A49B]">
            EXPLORE COMPREHENSIVE CASE STUDIES &amp; TECHNICAL ARCHITECTURES
          </p>

          <Link
            href="/work"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/[0.04] text-[#F5F3ED] border border-white/[0.12] hover:border-[#C6A56B]/60 hover:bg-[#C6A56B]/10 transition-all duration-300"
          >
            <span>Explore All Projects</span>
            <ArrowRight size={15} className="text-[#C6A56B] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
