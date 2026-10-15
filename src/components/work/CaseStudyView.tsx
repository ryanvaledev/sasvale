"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface CaseStudyProjectData {
  slug: string;
  client: string;
  title: string;
  category: string;
  industry: string;
  status: "Live" | "In Progress" | "Completed";
  website?: string;
  websiteUrl?: string;
  summary: string;
  heroImage: string;
  heroImageAlt: string;
  overview: {
    headline: string;
    lead: string;
    description: string;
  };
  challenge: {
    statements: string[];
    description: string;
  };
  approach: {
    num: string;
    title: string;
    desc: string;
  }[];
  whatWasBuilt: {
    title: string;
    desc: string;
  }[];
  details: {
    discipline: string;
    sector: string;
    focusAreas: string[];
  };
  principle?: {
    quote: string;
    subquote: string;
  };
  gallery?: {
    src: string;
    caption: string;
    alt: string;
  }[];
  techStack?: string[]; // ONLY if verified
}

export interface NextProjectData {
  slug: string;
  client: string;
  category: string;
}

interface CaseStudyViewProps {
  project: CaseStudyProjectData;
  nextProject?: NextProjectData;
}

export function CaseStudyView({ project, nextProject }: CaseStudyViewProps) {
  return (
    <article className="relative w-full sasvale-atmosphere min-h-screen text-[#F3F0E8] overflow-hidden">
      {/* Subtle Technical Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 sasvale-tech-grid opacity-75 z-0"
        aria-hidden="true"
      />

      {/* Top Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[450px] rounded-full blur-[170px] opacity-15 bg-[#C6A56B]"
        aria-hidden="true"
      />

      {/* ================================================================== */}
      {/* 1. CASE STUDY HERO                                                 */}
      {/* ================================================================== */}
      <section className="relative z-10 w-full pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Eyebrow Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8 text-xs font-mono">
            <Link
              href="/work"
              className="text-[#A8A49B] hover:text-[#F3F0E8] tracking-[0.2em] uppercase transition-colors"
            >
              WORK
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-[#C6A56B] tracking-[0.2em] uppercase font-semibold">
              SELECTED PROJECT
            </span>
          </div>

          {/* Project Title & Category */}
          <div className="max-w-4xl">
            <h1 className="text-[42px] sm:text-[60px] lg:text-[76px] font-medium tracking-[-0.035em] leading-[1.02] text-[#F3F0E8] font-display uppercase">
              {project.client}
            </h1>
            <p className="mt-3 text-lg sm:text-2xl font-display font-medium text-[#C6A56B] tracking-tight">
              {project.category}
            </p>

            {/* Concise Verified Project Summary */}
            <p className="mt-5 sm:mt-6 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.65] text-[#A8A49B] font-normal font-body max-w-3xl">
              {project.summary}
            </p>
          </div>

          {/* ================================================================ */}
          {/* 2. HERO IMAGE — THE VISUAL CENTERPIECE (75-80% VIEWPORT WIDTH)    */}
          {/* ================================================================ */}
          <div className="mt-12 sm:mt-16 lg:mt-20 w-full">
            <div className="rounded-2xl border border-white/[0.1] bg-[#0c0d10] shadow-[0_24px_64px_rgba(0,0,0,0.7)] overflow-hidden">
              
              {/* Refined Browser Chrome Header */}
              <div className="h-10 sm:h-11 px-4 sm:px-5 border-b border-white/[0.08] bg-[#101217] flex items-center justify-between select-none">
                {/* Window Control Dots */}
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>

                {/* Central Verified Domain Bar */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-black/40 border border-white/[0.06] text-[11px] font-mono text-[#A8A49B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                  <span>{project.website || `${project.slug}.com`}</span>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A8A49B]">
                    {project.status === "In Progress" ? "DEV" : "PROD"}
                  </span>
                </div>
              </div>

              {/* Real Project Visual Presentation */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#080909] overflow-hidden">
                <Image
                  src={project.heroImage}
                  alt={project.heroImageAlt}
                  fill
                  priority
                  sizes="(max-width: 1240px) 100vw, 1240px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* ================================================================ */}
          {/* 3. PROJECT METADATA STRIP                                        */}
          {/* ================================================================ */}
          <div className="mt-8 sm:mt-10 border-y border-white/[0.08] py-5 px-2 sm:px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
              
              {/* Project */}
              <div className="sm:pr-4">
                <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C6A56B] mb-1">
                  PROJECT
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#F3F0E8]">
                  {project.client}
                </div>
              </div>

              {/* Category */}
              <div className="pt-4 sm:pt-0 sm:px-4">
                <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C6A56B] mb-1">
                  CATEGORY
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#F3F0E8]">
                  {project.category}
                </div>
              </div>

              {/* Industry */}
              <div className="pt-4 sm:pt-0 sm:px-4">
                <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C6A56B] mb-1">
                  INDUSTRY
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#F3F0E8]">
                  {project.industry}
                </div>
              </div>

              {/* Status */}
              <div className="pt-4 sm:pt-0 sm:px-4">
                <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C6A56B] mb-1">
                  STATUS
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#F3F0E8]">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      project.status === "In Progress" ? "bg-[#38BDF8]" : "bg-[#34D399]"
                    }`}
                  />
                  <span>{project.status}</span>
                </div>
              </div>

              {/* Project URL */}
              <div className="pt-4 sm:pt-0 sm:pl-4 col-span-2 sm:col-span-1">
                <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C6A56B] mb-1">
                  PROJECT URL
                </div>
                {project.websiteUrl ? (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-mono text-[#F3F0E8] hover:text-[#C6A56B] transition-colors"
                  >
                    <span>{project.website || "Visit"}</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                ) : (
                  <span className="text-xs sm:text-sm font-mono text-[#A8A49B]">
                    {project.website || "Direct Access"}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. PROJECT OVERVIEW                                                */}
      {/* ================================================================== */}
      <section className="relative z-10 py-14 sm:py-20 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B] block">
              THE PROJECT
            </span>
          </div>

          <p className="text-sm sm:text-base font-body text-[#A8A49B] mb-10 max-w-2xl leading-relaxed">
            {project.overview.lead}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-6 border-t border-white/[0.06]">
            {/* Left: Large Editorial Statement */}
            <div className="lg:col-span-6">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-[#F3F0E8] leading-tight tracking-tight">
                {project.overview.headline}
              </h2>
            </div>

            {/* Right: Short Factual Context */}
            <div className="lg:col-span-6">
              <p className="text-base sm:text-lg text-[#A8A49B] leading-relaxed font-body">
                {project.overview.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. THE CHALLENGE                                                   */}
      {/* ================================================================== */}
      <section className="relative z-10 py-14 sm:py-20 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B] block">
              THE CHALLENGE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left: Large Editorial Requirements Statement */}
            <div className="lg:col-span-7">
              <div className="font-display text-2xl sm:text-3xl lg:text-[38px] font-medium text-[#F3F0E8] leading-[1.25] tracking-tight space-y-1 sm:space-y-2">
                {project.challenge.statements.map((stmt, idx) => (
                  <div
                    key={idx}
                    className={idx === 1 ? "text-[#C6A56B]" : "text-[#F3F0E8]"}
                  >
                    {stmt}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Supporting Context */}
            <div className="lg:col-span-5">
              <p className="text-base sm:text-lg text-[#A8A49B] leading-relaxed font-body">
                {project.challenge.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 6. DESIGN / SYSTEM APPROACH                                        */}
      {/* ================================================================== */}
      <section className="relative z-10 py-14 sm:py-20 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-10 sm:mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B] block mb-2.5">
              THE APPROACH
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-[#F3F0E8] tracking-tight">
              Design &amp; systems architecture.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {project.approach.map((item) => (
              <div
                key={item.num}
                className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#0c0d10]/70 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#C6A56B] mb-4">
                    {item.num}
                  </div>
                  <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#F3F0E8] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8A49B] leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 7. VISUAL BREAK — LARGE FULL-WIDTH PROJECT SPREAD                  */}
      {/* ================================================================== */}
      <section className="relative z-10 py-14 sm:py-20 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="rounded-2xl border border-white/[0.08] bg-[#0c0d10] overflow-hidden shadow-2xl">
            <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] bg-[#080909]">
              <Image
                src={project.heroImage}
                alt={`${project.client} visual spread`}
                fill
                sizes="(max-width: 1240px) 100vw, 1240px"
                className="object-cover object-center"
              />
            </div>
            <div className="p-4 sm:p-5 border-t border-white/[0.06] bg-[#101217] flex items-center justify-between">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A8A49B]">
                {project.client.toUpperCase()} {"//"} {project.category.toUpperCase()}
              </span>
              <span className="text-[11px] font-mono text-[#C6A56B]">
                STOREFRONT ARCHITECTURE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 8. PROJECT DETAILS SPECIFICATION                                   */}
      {/* ================================================================== */}
      <section className="relative z-10 py-14 sm:py-20 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B] block mb-2">
              PROJECT SPECIFICATION
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#F3F0E8] tracking-tight">
              Scope &amp; engagement parameters.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/[0.08]">
            {/* Left: Classification */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C6A56B] block mb-1.5">
                  CORE DISCIPLINE
                </span>
                <span className="text-base sm:text-lg font-mono font-medium text-[#F3F0E8]">
                  {project.details.discipline}
                </span>
              </div>
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C6A56B] block mb-1.5">
                  INDUSTRY SECTOR
                </span>
                <span className="text-base sm:text-lg font-mono font-medium text-[#F3F0E8]">
                  {project.details.sector}
                </span>
              </div>
            </div>

            {/* Right: Deliverables List */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C6A56B] block mb-3">
                SYSTEM FOCUS AREAS
              </span>
              <div className="space-y-3">
                {project.details.focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" />
                    <span className="text-xs sm:text-sm font-mono text-[#F3F0E8]">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 9 & 10. MOBILE & RESPONSIVE EXPERIENCE                            */}
      {/* ================================================================== */}
      <section className="relative z-10 py-14 sm:py-20 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B] block mb-2">
              RESPONSIVE EXPERIENCE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#F3F0E8] tracking-tight mb-2">
              Designed to remain clear across screen sizes.
            </h2>
            <p className="text-sm font-body text-[#A8A49B] max-w-xl">
              From desktop viewport discovery down to mobile customer checkouts, layout density adjusts intentionally without visual compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Desktop frame preview (8 cols) */}
            <div className="lg:col-span-8 rounded-2xl border border-white/[0.08] bg-[#0c0d10] overflow-hidden shadow-xl">
              <div className="h-8 px-4 border-b border-white/[0.06] bg-[#101217] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/10" />
                <span className="w-2 h-2 rounded-full bg-white/10" />
                <span className="ml-3 text-[10px] font-mono text-[#A8A49B]">Desktop Viewport</span>
              </div>
              <div className="relative w-full aspect-[16/10] bg-[#080909]">
                <Image
                  src={project.heroImage}
                  alt={`${project.client} desktop viewport`}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Mobile / Responsive detail card (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c0d10] space-y-4">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C6A56B]">
                  TOUCH &amp; VIEWPORT INTEGRITY
                </div>
                <h3 className="font-display text-lg font-medium text-[#F3F0E8]">
                  Immediate product accessibility.
                </h3>
                <p className="text-xs sm:text-sm text-[#A8A49B] leading-relaxed">
                  Navigation and product card hierarchies maintain immediate tap targets and smooth vertical rhythm on compact screens.
                </p>
                <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-[#A8A49B]/70">
                  Verified responsive viewport testing across major screen widths.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 11. TECHNOLOGY (ONLY IF EXPLICITLY VERIFIED)                       */}
      {/* ================================================================== */}
      {project.techStack && project.techStack.length > 0 && (
        <section className="relative z-10 py-12 border-b border-white/[0.08]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C6A56B] block mb-4">
              TECHNOLOGY
            </span>
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] text-xs font-mono text-[#F3F0E8]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================================================================== */}
      {/* 12. "WHAT WAS BUILT" SECTION (ACCURATE DELIVERED WORK)             */}
      {/* ================================================================== */}
      <section className="relative z-10 py-14 sm:py-20 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-10 sm:mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B] block mb-2">
              DELIVERED WORK
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-[#F3F0E8] tracking-tight">
              What was built.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.whatWasBuilt.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#0c0d10] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-[#C6A56B]">✓</span>
                    <h3 className="font-mono text-xs uppercase tracking-wider font-semibold text-[#F3F0E8]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A8A49B] leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 13. ENGINEERING / DESIGN PRINCIPLE NOTE                            */}
      {/* ================================================================== */}
      {project.principle && (
        <section className="relative z-10 py-16 sm:py-20 border-b border-white/[0.08] bg-black/30">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B] block mb-4">
                THE PRINCIPLE
              </span>
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-[34px] font-medium text-[#F3F0E8] leading-[1.25] tracking-tight mb-3">
                &ldquo;{project.principle.quote}&rdquo;
              </blockquote>
              <p className="text-base sm:text-lg text-[#A8A49B] font-body">
                {project.principle.subquote}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ================================================================== */}
      {/* 14. PROJECT NAVIGATION & CONNECTED PORTFOLIO                        */}
      {/* ================================================================== */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pb-12 border-b border-white/[0.08]">
            {/* Back to All Work */}
            <div>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#A8A49B] hover:text-[#C6A56B] transition-colors"
              >
                <span className="transition-transform group-hover:-translate-x-1">←</span>
                <span>ALL WORK</span>
              </Link>
            </div>

            {/* Next Project Card */}
            {nextProject && (
              <div className="text-left sm:text-right">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C6A56B] block mb-1">
                  NEXT PROJECT
                </span>
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="group inline-flex flex-col sm:items-end"
                >
                  <div className="font-display text-xl sm:text-2xl font-medium text-[#F3F0E8] group-hover:text-[#C6A56B] transition-colors">
                    {nextProject.client}
                  </div>
                  <div className="text-xs font-mono text-[#A8A49B] mt-0.5 group-hover:text-[#F3F0E8] transition-colors">
                    {nextProject.category} · View project →
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Start Conversation CTA */}
          <div className="pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#A8A49B]">
              Ready to build digital products or systems for your organization?
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C6A56B] hover:underline"
            >
              <span>Start a conversation</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Natural Transition into Dark Footer */}
      <div
        className="w-full h-12 bg-gradient-to-b from-transparent to-[#0B0B0B] pointer-events-none"
        aria-hidden="true"
      />
    </article>
  );
}
