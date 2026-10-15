"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

// ============================================================================
// VERIFIED LAUNCH PORTFOLIO
// Strictly verified studio projects only. Zero fabricated claims or metrics.
// ============================================================================

type CategoryFilter = "all" | "digital-products" | "e-commerce" | "business-systems" | "in-progress";

interface ProjectItem {
  id: string; // "01", "02", "03", "04"
  name: string;
  category: string;
  categoryFilter: ("digital-products" | "e-commerce" | "business-systems" | "in-progress")[];
  status: "LIVE" | "IN PROGRESS";
  metadataSubtitle: string;
  description: string;
  website: string;
  href: string;
  image: string;
  imageAlt: string;
  haloGlow: string;
  isFeatured?: boolean;
}

const VERIFIED_PROJECTS: ProjectItem[] = [
  {
    id: "01",
    name: "Ethletia",
    category: "DIGITAL PRODUCT",
    categoryFilter: ["digital-products", "e-commerce"],
    status: "LIVE",
    metadataSubtitle: "LIVE · Digital Product",
    description:
      "Sportswear and activewear digital experience built around product discovery, brand presentation, and a streamlined e-commerce experience.",
    website: "ethletia.com",
    href: "/work/ethletia",
    image: "/assets/projects/ethletia.png",
    imageAlt: "Ethletia sportswear and activewear digital product platform",
    haloGlow: "from-[#C6A56B]/15 via-[#C6A56B]/04 to-transparent",
    isFeatured: true,
  },
  {
    id: "02",
    name: "Wind Deflectors",
    category: "E-COMMERCE",
    categoryFilter: ["e-commerce", "digital-products"],
    status: "LIVE",
    metadataSubtitle: "LIVE · E-Commerce Platform",
    description:
      "Niche automotive e-commerce store designed around structured vehicle matching, product catalog filtering, and a straightforward checkout flow.",
    website: "wind-deflectors.com",
    href: "/work/wind-deflectors",
    image: "/assets/projects/wind.png",
    imageAlt: "Wind Deflectors automotive e-commerce storefront and vehicle filter catalog",
    haloGlow: "from-[#3B82F6]/12 via-[#C6A56B]/03 to-transparent",
  },
  {
    id: "03",
    name: "Education System",
    category: "BUSINESS SYSTEM",
    categoryFilter: ["business-systems"],
    status: "LIVE",
    metadataSubtitle: "LIVE · Business System",
    description:
      "Fee and attendance management platform built to centralize daily school administration and student record keeping into a reliable digital workflow.",
    website: "sasvale.com",
    href: "/work/education-system",
    image: "/assets/projects/edschol.png",
    imageAlt: "Education fee and attendance administration management platform",
    haloGlow: "from-[#34D399]/10 via-transparent to-transparent",
  },
  {
    id: "04",
    name: "TBS Salon",
    category: "SALON BOOKING",
    categoryFilter: ["in-progress", "digital-products"],
    status: "IN PROGRESS",
    metadataSubtitle: "IN PROGRESS · Salon Booking",
    description:
      "Salon booking application currently in development, focused on seamless appointment scheduling, service selection, and client management.",
    website: "tbssalon.vercel.app",
    href: "/work/tbs-salon",
    image: "/assets/projects/tbssalon.png",
    imageAlt: "TBS Salon digital booking application interface under active development",
    haloGlow: "from-[#C6A56B]/12 via-transparent to-transparent",
  },
];

const FILTER_TABS: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "ALL" },
  { id: "digital-products", label: "DIGITAL PRODUCTS" },
  { id: "e-commerce", label: "E-COMMERCE" },
  { id: "business-systems", label: "BUSINESS SYSTEMS" },
  { id: "in-progress", label: "IN PROGRESS" },
];

export default function WorkInteractiveView() {
  // CRITICAL: Default filter must ALWAYS be "all" to immediately display the full launch portfolio
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const displayedProjects = useMemo(() => {
    if (activeFilter === "all") return VERIFIED_PROJECTS;
    return VERIFIED_PROJECTS.filter((p) => p.categoryFilter.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="relative w-full min-h-screen bg-[#080909] light:bg-[#F3F0E8] text-[#F3F0E8] light:text-[#0B0B0B] transition-colors duration-300 overflow-hidden font-sans">
      
      {/* Low-contrast technical grid texture for tactile depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(198,165,107,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(198,165,107,0.018)_1px,transparent_1px)] light:bg-[linear-gradient(to_right,rgba(11,11,11,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,11,11,0.025)_1px,transparent_1px)] bg-[size:48px_48px] select-none"
        aria-hidden="true"
      />

      {/* Top Ambient Subtle Atmospheric Glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[480px] rounded-full blur-[180px] opacity-15 bg-[#C6A56B]"
        aria-hidden="true"
      />

      {/* ================================================================== */}
      {/* 1. WORK PAGE HERO                                                  */}
      {/* Preserved editorial, minimal hero with architectural watermark    */}
      {/* ================================================================== */}
      <section className="relative z-10 w-full pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 border-b border-white/[0.08] light:border-black/[0.08] overflow-hidden">
        
        {/* Subtle Ambient Radial Glow Behind Headline */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[320px] rounded-full blur-[140px] opacity-20 bg-radial from-[#C6A56B] to-transparent"
          aria-hidden="true"
        />

        {/* Deep Architectural SASVALE Watermark — extremely low contrast, deep in background */}
        <div
          className="pointer-events-none absolute right-[-6%] sm:right-[-2%] lg:right-[1%] top-1/2 -translate-y-1/2 select-none overflow-hidden z-0 opacity-[0.035] light:opacity-[0.02]"
          aria-hidden="true"
        >
          <span
            className="block font-sans font-black text-[130px] sm:text-[200px] lg:text-[280px] xl:text-[320px] tracking-[0.14em] leading-none text-transparent uppercase whitespace-nowrap"
            style={{
              WebkitTextStroke: "1.2px #C6A56B",
            }}
          >
            SASVALE
          </span>
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
          <div className="max-w-3xl">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.10] light:border-black/[0.10] bg-white/[0.02] light:bg-black/[0.02] mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.24em] uppercase text-[#C6A56B] light:text-[#9e7f45]">
                PORTFOLIO · SELECTED WORK
              </span>
            </div>

            {/* Semantic H1 Headline */}
            <h1 className="font-sans text-[36px] sm:text-[50px] lg:text-[64px] font-bold tracking-tight text-[#F3F0E8] light:text-[#0B0B0B] leading-[1.08] mb-5">
              Delivered platforms &amp; <br />
              <span className="text-[#C6A56B] light:text-[#9e7f45]">custom systems.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-[#A8A49B] light:text-[#5F5B54] font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
              A selection of websites, digital products, e-commerce platforms, and business systems built around real operational needs.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#080909] hover:bg-[#d8b87e] shadow-lg shadow-[#C6A56B]/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                aria-label="Start a conversation"
              >
                <span>START A CONVERSATION</span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="/capabilities"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F3F0E8] light:text-[#0B0B0B] border border-white/[0.12] light:border-black/[0.12] bg-white/[0.02] light:bg-black/[0.02] hover:border-[#C6A56B]/50 hover:bg-white/[0.05] transition-all duration-300"
                aria-label="View capabilities"
              >
                <span>VIEW CAPABILITIES</span>
                <span className="text-[#C6A56B] light:text-[#9e7f45]" aria-hidden="true">
                  ↓
                </span>
              </Link>
            </div>

            {/* Hero Metadata Line */}
            <div className="mt-10 pt-5 border-t border-white/[0.06] light:border-black/[0.06] flex items-center gap-3 text-[10px] font-mono tracking-widest text-[#A8A49B]/70 select-none">
              <span className="text-[#C6A56B]">+</span>
              <span className="uppercase">SYS // SELECTED PROJECTS // STUDIO ARCHIVE</span>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. MINIMAL CATEGORY FILTER NAVIGATION                              */}
      {/* Small editorial navigation system                                  */}
      {/* ================================================================== */}
      <section className="relative z-10 py-6 sm:py-8 border-b border-white/[0.06] light:border-black/[0.06]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-mono font-semibold tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2 flex-shrink-0 ${
                    isActive
                      ? "bg-[#C6A56B] text-[#080909] shadow-md shadow-[#C6A56B]/20 font-bold"
                      : "bg-white/[0.02] light:bg-black/[0.03] text-[#A8A49B] light:text-[#5F5B54] border border-white/[0.08] light:border-black/[0.08] hover:border-white/20 light:hover:border-black/20 hover:text-white light:hover:text-black"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? "bg-[#080909]" : "bg-[#C6A56B]/60"
                    }`}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. CONTINUOUS EDITORIAL PORTFOLIO (ALTERNATING LAYOUTS)            */}
      {/* Refined image prominence (+5-8%) and connected section transition   */}
      {/* ================================================================== */}
      <section className="relative z-10">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="divide-y divide-white/[0.08] light:divide-black/[0.08]">
            {displayedProjects.map((project, idx) => {
              // Alternating composition:
              // Project 01 (Ethletia): text left, large image right
              // Project 02 (Wind Deflectors): large image left, text right
              // Project 03 (Education System): text left, large image right
              // Project 04 (TBS Salon): large image left, text right
              const isEven = idx % 2 === 0;
              const isLast = idx === displayedProjects.length - 1;

              return (
                <article
                  key={project.id}
                  className={`group relative transition-colors duration-300 ${
                    isLast
                      ? "pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 lg:pb-14"
                      : "py-12 sm:py-16 lg:py-20"
                  }`}
                >
                  {/* ──────────────────────────────────────────────────────── */}
                  {/* MOBILE HEADER SEQUENCE (< lg)                           */}
                  {/* 1. number & category 2. title 3. status 4. description   */}
                  {/* ──────────────────────────────────────────────────────── */}
                  <div className="lg:hidden flex flex-col mb-6">
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="text-[12px] font-mono font-bold text-[#C6A56B] light:text-[#9e7f45] tracking-widest">
                        {project.id}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/20 light:bg-black/20" />
                      <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#A8A49B] light:text-[#5F5B54]">
                        {project.category}
                      </span>
                    </div>

                    <h2 className="font-sans font-bold text-[28px] sm:text-[34px] text-[#F3F0E8] light:text-[#0B0B0B] tracking-tight leading-[1.14] mb-2.5">
                      {project.name}
                    </h2>

                    <div className="flex items-center gap-2.5 mb-3.5">
                      {project.status === "IN PROGRESS" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase text-amber-300 bg-amber-500/10 border border-amber-500/25">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                          IN PROGRESS
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase text-[#C6A56B] bg-[#C6A56B]/10 border border-[#C6A56B]/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" />
                          LIVE
                        </span>
                      )}
                      <span className="text-xs font-mono text-[#A8A49B]/70 tracking-wide">
                        {project.metadataSubtitle.replace(/^(LIVE|IN PROGRESS)\s*·\s*/, "")}
                      </span>
                    </div>

                    <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#A8A49B] light:text-[#5F5B54]">
                      {project.description}
                    </p>
                  </div>

                  {/* ──────────────────────────────────────────────────────── */}
                  {/* DESKTOP TWO-COLUMN / MOBILE IMAGE & CTA GRID            */}
                  {/* Slightly tightened gap giving +5-8% more screenshot size */}
                  {/* ──────────────────────────────────────────────────────── */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
                    
                    {/* DESKTOP TEXT COLUMN (Hidden on mobile) */}
                    <div
                      className={`hidden lg:flex flex-col justify-center lg:col-span-5 ${
                        !isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      {/* Project Number & Category */}
                      <div className="flex items-center gap-3 mb-3 sm:mb-4">
                        <span className="text-[12px] sm:text-[13px] font-mono font-bold text-[#C6A56B] light:text-[#9e7f45] tracking-widest">
                          {project.id}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/20 light:bg-black/20" />
                        <span className="text-[11px] sm:text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-[#A8A49B] light:text-[#5F5B54]">
                          {project.category}
                        </span>
                      </div>

                      {/* Project Title (H2) */}
                      <h2
                        className={`font-sans font-bold text-[#F3F0E8] light:text-[#0B0B0B] tracking-tight leading-[1.12] mb-3 group-hover:text-[#C6A56B] light:group-hover:text-[#9e7f45] transition-colors duration-300 ${
                          project.isFeatured
                            ? "text-[32px] sm:text-[40px] lg:text-[46px]"
                            : "text-[28px] sm:text-[34px] lg:text-[38px]"
                        }`}
                      >
                        {project.name}
                      </h2>

                      {/* Status & Subtitle Metadata */}
                      <div className="flex items-center gap-3 mb-4">
                        {project.status === "IN PROGRESS" ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase text-amber-300 bg-amber-500/10 border border-amber-500/25">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            IN PROGRESS
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase text-[#C6A56B] bg-[#C6A56B]/10 border border-[#C6A56B]/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" />
                            LIVE
                          </span>
                        )}
                        <span className="text-xs font-mono text-[#A8A49B]/70 tracking-wide">
                          {project.metadataSubtitle.replace(/^(LIVE|IN PROGRESS)\s*·\s*/, "")}
                        </span>
                      </div>

                      {/* Project Description */}
                      <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.72] text-[#A8A49B] light:text-[#5F5B54] font-normal mb-6 max-w-xl">
                        {project.description}
                      </p>

                      {/* Action Links */}
                      <div className="flex items-center gap-4 pt-1">
                        <Link
                          href={project.href}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F3F0E8] light:text-[#0B0B0B] hover:text-[#C6A56B] light:hover:text-[#9e7f45] transition-colors duration-300 group/link"
                        >
                          <span>View project</span>
                          <span className="text-[#C6A56B] light:text-[#9e7f45] transition-transform duration-300 group-hover/link:translate-x-1.5">
                            →
                          </span>
                        </Link>

                        {project.website && (
                          <>
                            <span className="text-white/20 light:text-black/20 text-xs">/</span>
                            <span className="text-xs font-mono text-[#A8A49B]/60 tracking-wider">
                              {project.website}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* LARGE PROMINENT SCREENSHOT COLUMN (Rendered on both mobile & desktop) */}
                    {/* Natural aspect ratio & frame refined ~5-8% for clear visibility */}
                    <div
                      className={`relative flex items-center justify-center lg:col-span-7 ${
                        !isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      {/* Subtle Atmospheric Halo Glow */}
                      <div
                        className={`pointer-events-none absolute -inset-4 sm:-inset-6 rounded-3xl blur-3xl opacity-30 group-hover:opacity-55 transition-opacity duration-700 bg-gradient-to-tr ${project.haloGlow}`}
                        aria-hidden="true"
                      />

                      {/* Restrained Browser / Device Frame — not an enclosed card */}
                      <div className="relative w-full overflow-hidden rounded-2xl border border-white/[0.09] light:border-black/[0.1] bg-[#0c0d10] light:bg-[#FFFFFF] p-2.5 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.65)] light:shadow-[0_16px_36px_rgba(0,0,0,0.08)] group-hover:border-[#C6A56B]/40 transition-all duration-500">
                        
                        {/* Chrome Header with Window Dots */}
                        <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-white/[0.06] light:border-black/[0.06] px-1">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12] light:bg-black/[0.12]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12] light:bg-black/[0.12]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12] light:bg-black/[0.12]" />
                          </div>
                          <span className="text-[10px] font-mono text-[#A8A49B]/50 uppercase tracking-widest">
                            {project.website || "SASVALE // PRODUCTION"}
                          </span>
                          <span className="w-2.5" />
                        </div>

                        {/* High-Fidelity Image Preview with natural 16/10.6 aspect ratio */}
                        <Link
                          href={project.href}
                          className="relative block aspect-[16/10.6] w-full overflow-hidden rounded-xl bg-[#030508] light:bg-[#E9E5DC] cursor-pointer"
                        >
                          <Image
                            src={project.image}
                            alt={project.imageAlt}
                            fill
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 820px"
                            priority={project.isFeatured}
                          />

                          {/* Subtle Vignette Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#080909]/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

                          {/* Corner Capsule Tag */}
                          <div className="absolute bottom-3 left-3 flex items-center gap-2 pointer-events-none">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#F3F0E8] bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                              {project.category}
                            </span>
                            <span className="text-[10px] font-mono tracking-wider text-[#C6A56B] bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md border border-[#C6A56B]/30">
                              {project.name}
                            </span>
                          </div>
                        </Link>
                      </div>

                    </div>

                  </div>

                  {/* ──────────────────────────────────────────────────────── */}
                  {/* MOBILE CTA SEQUENCE (Rendered below image on mobile)     */}
                  {/* ──────────────────────────────────────────────────────── */}
                  <div className="lg:hidden flex items-center gap-4 mt-6 pt-2">
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#F3F0E8] light:text-[#0B0B0B] hover:text-[#C6A56B] transition-colors duration-300"
                    >
                      <span>View project</span>
                      <span className="text-[#C6A56B]" aria-hidden="true">
                        →
                      </span>
                    </Link>

                    {project.website && (
                      <>
                        <span className="text-white/20 light:text-black/20 text-xs">/</span>
                        <span className="text-xs font-mono text-[#A8A49B]/60 tracking-wider">
                          {project.website}
                        </span>
                      </>
                    )}
                  </div>

                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. EDITORIAL STATEMENT: ENGINEERING OUTCOMES                       */}
      {/* Centered editorial pause expressing SASVALE's point of view.       */}
      {/* Spacing tuned (~10-15% reduced gap from TBS Salon for flow).       */}
      {/* ================================================================== */}
      <section className="relative z-10 pt-12 sm:pt-16 lg:pt-18 pb-14 sm:pb-18 lg:pb-22 border-t border-b border-white/[0.08] light:border-black/[0.08]">
        {/* Subtle Central Warm Radial Glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[300px] rounded-full blur-[150px] opacity-15 bg-radial from-[#C6A56B] to-transparent"
          aria-hidden="true"
        />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B] light:text-[#9e7f45] block mb-4">
              ENGINEERING OUTCOMES
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F3F0E8] light:text-[#0B0B0B] leading-snug mb-5">
              Technology should solve a problem. <br />
              <span className="text-[#C6A56B] light:text-[#9e7f45]">Not just add another layer.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8A49B] light:text-[#5F5B54] font-normal leading-relaxed max-w-xl mx-auto">
              We focus on the systems behind the interface — from product discovery and e-commerce to business workflows and operational software.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. COMPACT TWO-COLUMN EDITORIAL CTA: NEXT STEPS                    */}
      {/* Left 60%: Headline & Narrative | Right 40%: Vertically Centered CTA */}
      {/* Subtle top border, compact height, unboxed composition             */}
      {/* ================================================================== */}
      <section className="relative z-10 py-16 sm:py-20 lg:py-24">
        {/* Subtle Warm Glow Behind CTA Area */}
        <div
          className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[300px] rounded-full blur-[160px] opacity-15 bg-radial from-[#C6A56B] to-transparent"
          aria-hidden="true"
        />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 60%: Headline & Supporting Narrative */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B] light:text-[#9e7f45] block mb-3">
                NEXT STEPS
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-[#F3F0E8] light:text-[#0B0B0B] leading-[1.12] mb-4">
                Have a product or system <br className="hidden sm:inline" />
                <span className="text-[#C6A56B] light:text-[#9e7f45]">you need to build?</span>
              </h3>
              <p className="text-sm sm:text-base text-[#A8A49B] light:text-[#5F5B54] max-w-xl leading-relaxed">
                Tell us what you&apos;re working on. We&apos;ll look at the problem first, then determine what needs to be built.
              </p>
            </div>

            {/* Right 40%: Vertically Centered Action CTA */}
            <div className="lg:col-span-5 flex flex-col lg:items-end justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#080909] hover:bg-[#d8b87e] shadow-lg shadow-[#C6A56B]/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                aria-label="Start a conversation"
              >
                <span>START A CONVERSATION</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Natural Transition into Dark Footer */}
      <div
        className="w-full h-12 sm:h-16 bg-gradient-to-b from-transparent to-[#080909] pointer-events-none"
        aria-hidden="true"
      />

    </div>
  );
}
