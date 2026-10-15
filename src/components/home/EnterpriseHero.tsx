"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { heroShowcaseProjects } from "@/config/v2-foundation";
import { InteractiveNodeCanvas } from "@/components/home/InteractiveNodeCanvas";

export function EnterpriseHero() {
  const [stageView, setStageView] = useState<"architecture" | "showcase">("architecture");
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [slideNum, setSlideNum] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = 5;

  // Auto-advance slide indicator every 5s unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setSlideNum((prev) => (prev % totalSlides) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const activeProject = heroShowcaseProjects[activeProjectIdx];

  return (
    <section
      className="relative pt-6 sm:pt-10 lg:pt-14 pb-16 sm:pb-24 lg:pb-28 overflow-hidden bg-[#050811] text-white"
      aria-label="Sasvale Enterprise Introduction"
    >
      {/* Background Ambient Radial Glow matching SDLC Corp */}
      <div 
        className="absolute top-0 right-0 w-[600px] sm:w-[900px] h-[500px] sm:h-[700px] pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 75% 20%, rgba(37, 99, 235, 0.28) 0%, rgba(56, 189, 248, 0.08) 45%, transparent 70%)",
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.15) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Top Slider Progress Track & Controls Bar (SDLC Corp Signature Pattern) */}
        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            {/* Prev / Play / Next Controls */}
            <button
              type="button"
              onClick={() => setSlideNum((prev) => (prev === 1 ? totalSlides : prev - 1))}
              className="w-8 h-8 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/10 hover:border-cyan-400/50 flex items-center justify-center text-slate-300 transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="w-8 h-8 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/10 hover:border-cyan-400/50 flex items-center justify-center text-slate-300 transition-colors"
              aria-label={isPaused ? "Play slider" : "Pause slider"}
            >
              {isPaused ? (
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={() => setSlideNum((prev) => (prev % totalSlides) + 1)}
              className="w-8 h-8 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/10 hover:border-cyan-400/50 flex items-center justify-center text-slate-300 transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Segmented Progress Rail */}
            <div className="hidden sm:flex items-center gap-1.5 ml-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <div
                  key={i}
                  onClick={() => setSlideNum(i + 1)}
                  className="h-1 rounded-full cursor-pointer transition-all duration-300"
                  style={{
                    width: slideNum === i + 1 ? "42px" : "18px",
                    backgroundColor: slideNum === i + 1 ? "#38bdf8" : "rgba(255, 255, 255, 0.15)",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <span className="text-cyan-400 font-semibold">0{slideNum}</span>
            <span>/</span>
            <span>0{totalSlides}</span>
          </div>
        </div>

        {/* Asymmetric 2-Column Enterprise Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (6 cols): Large-Scale Typography & Core Action */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Eyebrow Pill with Sparkle Icon (SDLC Corp Exact Treatment) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-[11px] font-medium tracking-wide mb-6 shadow-[0_0_20px_rgba(56,189,248,0.15)] backdrop-blur-md">
              <svg className="w-3.5 h-3.5 text-cyan-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" />
              </svg>
              <span>Introducing Sasvale Agentic AI & Enterprise Cloud</span>
            </div>

            {/* Dual-Tone Massive Title (SDLC Corp Signature: Gradient Top + Pure White Bottom) */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[58px] xl:text-[66px] font-bold leading-[1.06] tracking-[-0.035em] mb-6">
              <span className="block bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#93c5fd] bg-clip-text text-transparent">
                Transforming Industries
              </span>
              <span className="block text-white mt-1">
                with AI-First Innovation
              </span>
            </h1>

            {/* Authoritative Subheading from SDLC Reference */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mb-9 font-normal">
              From intelligent automation to agentic AI systems. We design, build, and scale the future for Fortune 500 enterprises and ambitious challengers alike.
            </p>

            {/* Action Buttons: Solid White Primary Pill + Frosted Glass Secondary */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 hover:shadow-[0_0_30px_rgba(56,189,248,0.35)] transition-all duration-300"
              >
                <span>Explore AI Solutions</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.18] text-white text-sm font-medium backdrop-blur-md transition-all duration-300"
              >
                <span>Talk to Experts</span>
              </Link>
            </div>

            {/* Horizontal Key Metrics Strip (SDLC Corp Signature Metric Format) */}
            <div className="w-full pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 mb-6">
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  300+
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 mt-1">
                  AI DEPLOYMENTS
                </div>
              </div>

              <div className="sm:border-l sm:border-white/[0.08] sm:pl-5">
                <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  100+
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 mt-1">
                  GLOBAL CLIENTS
                </div>
              </div>

              <div className="sm:border-l sm:border-white/[0.08] sm:pl-5">
                <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  10+
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 mt-1">
                  INDUSTRIES
                </div>
              </div>

              <div className="sm:border-l sm:border-white/[0.08] sm:pl-5">
                <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  24/7
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 mt-1">
                  AI OPERATIONS
                </div>
              </div>
            </div>

            {/* Regulatory & Rating Trust Chips */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-white/[0.04] border border-white/[0.1] text-slate-300">
                <span className="text-amber-400">★</span> Clutch 4.9 / 5
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-white/[0.04] border border-white/[0.1] text-slate-300">
                SOC 2 Type II Ready
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-white/[0.04] border border-white/[0.1] text-slate-300">
                HIPAA & GDPR Compliant
              </span>
            </div>

          </div>

          {/* Right Column (6 cols): Visual Stage Switcher (Interactive Node Canvas or Project Showcase) */}
          <div className="lg:col-span-6 w-full flex flex-col gap-4">
            
            {/* View Selector Switcher Pills */}
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-900/90 border border-white/[0.12] backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setStageView("architecture")}
                  className={`px-3.5 py-1 rounded-full text-[11px] font-medium transition-all ${
                    stageView === "architecture"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  AI Architecture Graph
                </button>
                <button
                  type="button"
                  onClick={() => setStageView("showcase")}
                  className={`px-3.5 py-1 rounded-full text-[11px] font-medium transition-all ${
                    stageView === "showcase"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Selected Work Showcase ({heroShowcaseProjects.length})
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>LIVE PRODUCTION</span>
              </div>
            </div>

            {/* Stage Body */}
            {stageView === "architecture" ? (
              <InteractiveNodeCanvas />
            ) : (
              <div 
                className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c101b] shadow-[0_30px_70px_rgba(0,0,0,0.8)]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Media Viewport */}
                <div className="relative aspect-[16/11] w-full bg-[#070a12]">
                  {heroShowcaseProjects.map((project, idx) => {
                    const isCurrent = idx === activeProjectIdx;
                    return (
                      <div
                        key={project.id}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          isCurrent ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={project.image}
                          alt={project.alt}
                          fill
                          priority={idx === 0}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-top"
                        />
                        {/* Gradient Vignette for Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/30 to-transparent" />
                        
                        {/* Caption Overlay */}
                        <div className="absolute bottom-6 left-6 right-6 z-20">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                            {project.client}
                          </p>
                          <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-1">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Project Selector Tabs */}
                <div className="grid grid-cols-3 border-t border-white/[0.08] bg-[#080d1a]">
                  {heroShowcaseProjects.map((project, idx) => {
                    const isCurrent = idx === activeProjectIdx;
                    return (
                      <button
                        key={project.id}
                        type="button"
                        onClick={() => setActiveProjectIdx(idx)}
                        className={`relative text-left p-3.5 sm:p-4 transition-colors ${
                          isCurrent ? "bg-cyan-500/10" : "hover:bg-white/[0.02]"
                        }`}
                      >
                        {isCurrent && (
                          <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400" />
                        )}
                        <span className={`block text-[11px] font-semibold uppercase tracking-[0.12em] ${
                          isCurrent ? "text-cyan-400" : "text-slate-400"
                        }`}>
                          0{idx + 1}
                        </span>
                        <span className={`block text-[13px] font-medium truncate mt-0.5 ${
                          isCurrent ? "text-white" : "text-slate-300"
                        }`}>
                          {project.client}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

export default EnterpriseHero;
