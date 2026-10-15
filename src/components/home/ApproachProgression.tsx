"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface ApproachStage {
  id: string;
  step: string;
  phaseCode: string;
  title: string;
  desc: string;
  deliverable: string;
  latencyBadge: string;
}

const APPROACH_STAGES: ApproachStage[] = [
  {
    id: "understand",
    step: "01",
    phaseCode: "AUDIT & DISCOVERY",
    title: "UNDERSTAND",
    desc: "Map commercial levers, operational friction, and user constraints before writing code.",
    deliverable: "Discovery Blueprint & Entity Map",
    latencyBadge: "STAGE 01",
  },
  {
    id: "decide",
    step: "02",
    phaseCode: "SYSTEMS SPECIFICATION",
    title: "DECIDE",
    desc: "Isolate high-leverage architectural requirements and eliminate low-impact bloat.",
    deliverable: "Tech Contract & Stack Blueprint",
    latencyBadge: "STAGE 02",
  },
  {
    id: "build",
    step: "03",
    phaseCode: "SPRINT EXECUTION",
    title: "BUILD",
    desc: "Ship production-ready systems through direct senior engineering and rapid validation cycles.",
    deliverable: "Validated Staging & CI/CD Suite",
    latencyBadge: "STAGE 03",
  },
  {
    id: "automate",
    step: "04",
    phaseCode: "PIPELINE ORCHESTRATION",
    title: "AUTOMATE",
    desc: "Replace repetitive operational workflows with resilient, event-driven pipelines.",
    deliverable: "Autonomous Webhooks & Workflows",
    latencyBadge: "STAGE 04",
  },
  {
    id: "scale",
    step: "05",
    phaseCode: "ENTERPRISE HARDENING",
    title: "SCALE",
    desc: "Harden infrastructure and data topology for sustained compound growth.",
    deliverable: "Zero-Downtime Global Edge Setup",
    latencyBadge: "STAGE 05",
  },
];

const STAGE_INTERVAL_MS = 3800;

export default function ApproachProgression() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasEntered(true); },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEntered || isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % APPROACH_STAGES.length);
    }, STAGE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [hasEntered, isPaused]);

  const handleSelectStage = useCallback((idx: number) => {
    setActiveIndex(idx);
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 4500);
  }, []);

  const handleMouseEnter = (idx: number) => handleSelectStage(idx);

  const handleMouseLeave = () => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 1800);
  };

  return (
    <div
      ref={sectionRef}
      onMouseLeave={handleMouseLeave}
      className="relative w-full py-4 sm:py-6 font-sans"
      aria-label="How We Approach the Work - Auto Sequential Progression"
    >
      {/* Ambient Atmosphere & Technical Datum Grid */}
      <div
        className="pointer-events-none absolute -top-20 w-[650px] h-[360px] rounded-full blur-[150px] bg-[#C6A56B]/[0.07] transition-all duration-700 ease-out"
        style={{
          left: `${15 + activeIndex * 18}%`,
          transform: "translateX(-50%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-16 w-[480px] h-[360px] rounded-full blur-[170px] bg-[#3B82F6]/[0.035]"
        aria-hidden="true"
      />
      {/* Subtle technical datum line */}
      <div className="pointer-events-none absolute left-0 right-0 top-[52%] h-px border-b border-dashed border-white/[0.035]" aria-hidden="true" />

      {/* ── Section Header ─────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 pb-4 border-b border-white/[0.06] relative z-10">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8A49B]/70">
              ENGINEERING PROTOCOL
            </span>
            <span className="w-1 h-1 rounded-full bg-[#C6A56B]" />
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.07]">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isPaused ? "bg-amber-400" : "bg-emerald-400 animate-pulse"
                }`}
              />
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                {isPaused ? "PAUSED // INSPECTING" : "AUTO // PROGRESSING"}
              </span>
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F3F0E8] font-display">
            How We Approach the Work
          </h3>
        </div>

        <div className="flex items-center gap-4 mt-4 lg:mt-0">
          <p className="text-xs sm:text-sm text-[#A8A49B]/70 max-w-sm leading-relaxed">
            A continuous, five-stage delivery sequence that transforms strategic
            requirements into high-concurrency production systems.
          </p>
          <button
            onClick={() => setIsPaused((p) => !p)}
            aria-label={isPaused ? "Resume" : "Pause"}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.09] bg-white/[0.02] hover:border-[#C6A56B]/40 transition-colors text-[10px] font-semibold tracking-wider text-[#A8A49B] cursor-pointer flex-shrink-0"
          >
            {isPaused ? (
              <>
                <svg className="w-3 h-3 text-[#C6A56B]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                RESUME
              </>
            ) : (
              <>
                <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
                PAUSE
              </>
            )}
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* DESKTOP — Accordion Expansion (≥ 1024px)                  */}
      {/* Active card expands, inactive collapse to show step+title  */}
      {/* ══════════════════════════════════════════════════════════ */}
      <div className="hidden lg:flex gap-2 h-[380px] relative z-10">
        {APPROACH_STAGES.map((stage, idx) => {
          const isActive = idx === activeIndex;
          const isPast = idx < activeIndex;

          return (
            <div
              key={stage.id}
              onClick={() => handleSelectStage(idx)}
              onMouseEnter={() => handleMouseEnter(idx)}
              onFocus={() => handleSelectStage(idx)}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
              aria-label={`Stage ${stage.step}: ${stage.title}`}
              className={`relative rounded-2xl cursor-pointer overflow-hidden border group focus:outline-none
                transition-[flex,border-color,background-color,box-shadow,opacity]
                duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                ${hasEntered ? "opacity-100" : "opacity-0"}
                ${
                  isActive
                    ? "border-[#C6A56B]/40 bg-[#0B0F1D] shadow-[0_0_0_1px_rgba(198,165,107,0.14),0_20px_60px_-16px_rgba(0,0,0,0.9),0_0_45px_rgba(198,165,107,0.08)]"
                    : "border-white/[0.06] bg-[#060810] hover:border-white/[0.12] hover:bg-[#080B15]"
                }`}
              style={{
                flex: isActive ? "4.2" : "1",
                transitionDelay: hasEntered ? `${idx * 60}ms` : "0ms",
              }}
            >
              {/* ── Left accent bar ── */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px] transition-opacity duration-500"
                style={{
                  background: isActive
                    ? "linear-gradient(to bottom, transparent 0%, #C6A56B 25%, #e8d4a2 55%, #C6A56B 80%, transparent 100%)"
                    : isPast
                    ? "rgba(198,165,107,0.35)"
                    : "rgba(255,255,255,0.08)",
                  opacity: isActive ? 1 : isPast ? 0.6 : 0.4,
                }}
              />

              {/* ── Top progress bar ── */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-white/[0.04] overflow-hidden">
                {isActive && (
                  <div
                    key={`pb-${activeIndex}-${isPaused}`}
                    className={`h-full bg-gradient-to-r from-[#C6A56B] via-[#e8d4a2] to-[#C6A56B] ${
                      isPaused ? "w-full opacity-40" : "animate-approach-progress"
                    }`}
                  />
                )}
              </div>

              {/* ── Dot-grid texture (active only) ── */}
              {isActive && (
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.035]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #C6A56B 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
              )}

              {/* ── COLLAPSED VIEW (inactive) ── */}
              <div
                className={`absolute inset-0 flex flex-col justify-between p-5 transition-opacity duration-300 ${
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                {/* Big stage number */}
                <span
                  className={`font-black tabular-nums leading-none select-none text-[44px] transition-colors duration-300 ${
                    isPast
                      ? "text-[#C6A56B]/40 group-hover:text-[#C6A56B]/60"
                      : "text-white/[0.10] group-hover:text-white/[0.20]"
                  }`}
                >
                  {stage.step}
                </span>

                {/* Vertical title */}
                <div
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  className="flex flex-col gap-2"
                >
                  <span
                    className={`text-[11px] font-bold tracking-[0.22em] uppercase transition-colors duration-300 ${
                      isPast
                        ? "text-[#C6A56B]/55 group-hover:text-[#C6A56B]/80"
                        : "text-white/30 group-hover:text-white/55"
                    }`}
                  >
                    {stage.title}
                  </span>
                  <span className="text-[9px] font-medium tracking-wider uppercase text-white/15 group-hover:text-white/25 transition-colors">
                    {stage.latencyBadge}
                  </span>
                </div>
              </div>

              {/* ── EXPANDED VIEW (active) ── */}
              <div
                className={`absolute inset-0 flex flex-col justify-between p-7 transition-opacity duration-200 ${
                  isActive
                    ? "opacity-100 delay-[180ms]"
                    : "opacity-0 pointer-events-none delay-0"
                }`}
              >
                {/* Top section */}
                <div>
                  {/* Phase code + active badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#A8A49B]/55">
                      {stage.phaseCode}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase text-[#C6A56B] bg-[#C6A56B]/[0.08] border border-[#C6A56B]/25">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B] animate-ping" />
                      ACTIVE
                    </span>
                  </div>

                  {/* Step number + title as design composition */}
                  <div className="flex items-end gap-3 mb-5">
                    <span className="text-[72px] leading-none font-black tabular-nums text-[#C6A56B]/[0.18] select-none flex-shrink-0">
                      {stage.step}
                    </span>
                    <h4 className="text-[22px] font-extrabold tracking-[0.10em] uppercase text-[#F3F0E8] leading-tight mb-1.5">
                      {stage.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-[13.5px] text-[#A8A49B] leading-[1.75] font-normal max-w-[380px]">
                    {stage.desc}
                  </p>
                </div>

                {/* Bottom deliverable shelf */}
                <div className="border-t border-[#C6A56B]/[0.10] pt-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#C6A56B]/50" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#A8A49B]/35 flex-shrink-0">
                    OUTPUT
                  </span>
                  <span className="h-[1px] w-3 bg-white/[0.08] flex-shrink-0" />
                  <span className="text-[12px] text-[#C6A56B] font-semibold tracking-tight truncate">
                    {stage.deliverable}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* MOBILE — Vertical Accordion (< 1024px)                    */}
      {/* ══════════════════════════════════════════════════════════ */}
      <div className="lg:hidden relative z-10 space-y-2">
        {APPROACH_STAGES.map((stage, idx) => {
          const isActive = idx === activeIndex;
          const isPast = idx < activeIndex;

          return (
            <div
              key={stage.id}
              onClick={() => handleSelectStage(idx)}
              onFocus={() => handleSelectStage(idx)}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
              aria-label={`Stage ${stage.step}: ${stage.title}`}
              className={`relative rounded-xl cursor-pointer overflow-hidden border focus:outline-none
                transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                ${
                  isActive
                    ? "border-[#C6A56B]/40 bg-[#0B0F1D] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.8),0_0_24px_rgba(198,165,107,0.08)]"
                    : "border-white/[0.07] bg-[#060810]"
                }`}
              style={{ transitionDelay: hasEntered ? `${idx * 70}ms` : "0ms" }}
            >
              {/* Left accent */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px]"
                style={{
                  background: isActive
                    ? "linear-gradient(to bottom, transparent, #C6A56B 30%, #e8d4a2 60%, #C6A56B 85%, transparent)"
                    : isPast
                    ? "rgba(198,165,107,0.3)"
                    : "rgba(255,255,255,0.07)",
                }}
              />

              {/* Progress bar */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-white/[0.04] overflow-hidden">
                {isActive && (
                  <div
                    key={`pbm-${activeIndex}-${isPaused}`}
                    className={`h-full bg-gradient-to-r from-[#C6A56B] via-[#e8d4a2] to-[#C6A56B] ${
                      isPaused ? "w-full opacity-40" : "animate-approach-progress"
                    }`}
                  />
                )}
              </div>

              {/* Collapsed header — always visible */}
              <div className="flex items-center gap-4 px-5 py-4">
                {/* Step chip */}
                <span
                  className={`flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg text-[11px] font-black tabular-nums border transition-colors duration-300 ${
                    isActive
                      ? "bg-[#C6A56B]/12 border-[#C6A56B]/35 text-[#C6A56B]"
                      : isPast
                      ? "bg-[#C6A56B]/08 border-[#C6A56B]/20 text-[#C6A56B]/60"
                      : "bg-white/[0.04] border-white/[0.09] text-white/30"
                  }`}
                >
                  {stage.step}
                </span>

                <div className="flex-1 min-w-0">
                  <span className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-[#A8A49B]/40 mb-0.5">
                    {stage.phaseCode}
                  </span>
                  <h4
                    className={`text-[13px] font-bold tracking-[0.14em] uppercase transition-colors duration-300 ${
                      isActive ? "text-[#F3F0E8]" : "text-white/50"
                    }`}
                  >
                    {stage.title}
                  </h4>
                </div>

                {/* Chevron / active indicator */}
                <div className="flex-shrink-0">
                  {isActive ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider text-[#C6A56B] bg-[#C6A56B]/08 border border-[#C6A56B]/25">
                      <span className="w-1 h-1 rounded-full bg-[#C6A56B] animate-ping" />
                      ON
                    </span>
                  ) : (
                    <svg
                      className="w-4 h-4 text-white/20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Expanded content — only on active */}
              <div
                className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
                  isActive ? "max-h-[240px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5">
                  <div className="border-t border-white/[0.06] pt-4">
                    <p className="text-[13px] text-[#A8A49B] leading-[1.72] mb-4">
                      {stage.desc}
                    </p>
                    <div className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-[#C6A56B]/50 flex-shrink-0" />
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A8A49B]/30 flex-shrink-0">
                        OUTPUT
                      </span>
                      <span className="h-px w-3 bg-white/[0.08]" />
                      <span className="text-[11px] text-[#C6A56B] font-semibold truncate">
                        {stage.deliverable}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
