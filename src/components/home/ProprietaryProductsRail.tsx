"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";

// Theme synchronization helpers for dual Dark / Light mode fidelity
function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => { };
  window.addEventListener("storage", callback);
  window.addEventListener("theme-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("theme-change", callback);
  };
}

function getThemeSnapshot(): boolean {
  if (typeof document === "undefined") return true;
  return !(
    document.documentElement.getAttribute("data-theme") === "light" ||
    document.documentElement.classList.contains("theme-light")
  );
}

function getServerThemeSnapshot(): boolean {
  return true;
}

interface CapabilityItem {
  id: string;
  number: string;
  navTitle: string;
  navSubtitle: string;
  eyebrow: string;
  headline: string;
  description: string;
  disciplines: string[];
  visualType: "image" | "workflow";
  project?: {
    name: string;
    type: string;
    image: string;
    alt: string;
    slug?: string;
    isInProgress?: boolean;
  };
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "digital-products",
    number: "01",
    navTitle: "Digital Products",
    navSubtitle: "Websites & Web Applications",
    eyebrow: "CAPABILITY 01 // DIGITAL PRODUCTS",
    headline: "Websites & Digital Products",
    description:
      "Digital products built around real business goals, user needs, and the way the product actually needs to work.",
    disciplines: [
      "Product Strategy",
      "User Experience (UX)",
      "Full-Stack Web Engineering",
      "Responsive Performance",
    ],
    visualType: "image",
    project: {
      name: "Ethletia",
      type: "Headless Activewear Platform & Catalog",
      image: "/assets/projects/ethletia.png",
      alt: "Ethletia digital platform interface and responsive product showcase",
      slug: "ethletia",
    },
  },
  {
    id: "ecommerce-systems",
    number: "02",
    navTitle: "E-commerce",
    navSubtitle: "Stores & Buying Journeys",
    eyebrow: "CAPABILITY 02 // COMMERCE SYSTEMS",
    headline: "E-commerce Systems",
    description:
      "Online stores designed around clear navigation, product discovery, usability, and the buying journey.",
    disciplines: [
      "Product Discovery",
      "Frictionless Checkout",
      "Inventory Synchronization",
      "Order Intake Pipelines",
    ],
    visualType: "image",
    project: {
      name: "Wind Deflectors",
      type: "Automotive Direct-to-Consumer Platform",
      image: "/assets/projects/wind.png",
      alt: "Wind Deflectors automotive e-commerce storefront and vehicle filter catalog",
      slug: "wind-deflectors",
    },
  },
  {
    id: "custom-software",
    number: "03",
    navTitle: "Custom Software",
    navSubtitle: "Internal Systems & Operations",
    eyebrow: "CAPABILITY 03 // INTERNAL SYSTEMS",
    headline: "Custom Software & Internal Systems",
    description:
      "Business software designed around operational workflows, data, permissions, and the systems behind day-to-day work.",
    disciplines: [
      "Operational Workflows",
      "Role-Based Access Control",
      "Data Architecture",
      "Internal API Services",
    ],
    visualType: "image",
    project: {
      name: "TBS Salon Platform",
      type: "Luxury Multi-Location Reservation Engine & Client Management",
      image: "/assets/projects/tbssalon.png",
      alt: "TBS Salon reservation system and client scheduling interface",
      slug: "tbs-salon",
      isInProgress: true,
    },
  },
  {
    id: "automation-ai",
    number: "04",
    navTitle: "Automation & AI",
    navSubtitle: "Pipelines & Repetitive Workflows",
    eyebrow: "CAPABILITY 04 // WORKFLOW AUTOMATION",
    headline: "Intelligent Automation & AI Workflows",
    description:
      "Automate repetitive operational work, connect systems, and reduce manual steps with practical workflow automation.",
    disciplines: [
      "System Integrations",
      "Event-Driven Pipelines",
      "Data Validation & Routing",
      "Automated Operational Tasks",
    ],
    // visualType: "workflow",
    visualType: "image",
    project: {
      name: "Face of Fitness",
      type: "Online Fitness Platform",
      image: "/assets/projects/gym_portal.png",
      alt: "Face of Fitness platform",
      slug: "fof",
    },
  },
  {
    id: "business-systems",
    number: "05",
    navTitle: "Business Systems",
    navSubtitle: "Management & Portals",
    eyebrow: "CAPABILITY 05 // BUSINESS MANAGEMENT",
    headline: "Business Management Systems",
    description:
      "Purpose-built systems for workflows such as education administration, attendance, fees, operations, and internal management.",
    disciplines: [
      "Administrative Portals",
      "Fee Scheduling & Billing",
      "Attendance Records",
      "Multi-Role Dashboards",
    ],
    visualType: "image",
    project: {
      name: "Education System (EDS)",
      type: "Institutional Management & Student Academic Administration Platform",
      image: "/assets/projects/edschol.png",
      alt: "Engineers & Doctors School administrative management system and fee portal",
      slug: "education-system",
    },
  },
];

/**
 * Technical System-Flow Visualization for Automation & AI
 * Replaces generic AI marketing graphics with an authentic, architectural data pipeline.
 */
function AutomationWorkflowVisual({ isDark }: { isDark: boolean }) {
  const steps = [
    {
      step: "01",
      name: "Ingestion & Trigger",
      detail: "Webhook / Order Intake",
      badge: "TRIGGER",
      latency: "< 2ms",
    },
    {
      step: "02",
      name: "Schema Normalization",
      detail: "Data Validation Engine",
      badge: "VALIDATED",
      latency: "4ms",
    },
    {
      step: "03",
      name: "Pipeline Orchestration",
      detail: "Conditional API Routing",
      badge: "DISPATCH",
      latency: "12ms",
    },
    {
      step: "04",
      name: "System Synchronization",
      detail: "ERP, CRM & DB Updates",
      badge: "COMMITTED",
      latency: "24ms",
    },
  ];

  return (
    <div
      className={`w-full h-full p-4 sm:p-5 flex flex-col justify-between select-none ${isDark ? "bg-[#090d16] text-[#F3F0E8]" : "bg-[#F9F7F2] text-[#0B0B0B]"
        }`}
    >
      {/* Telemetry Header */}
      <div
        className={`flex items-center justify-between pb-3 border-b ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"
          }`}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C6A56B] animate-pulse" aria-hidden="true" />
          <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-[#C6A56B]">
            PIPELINE ORCHESTRATION ENGINE // ACTIVE
          </span>
        </div>
        <span
          className={`font-mono text-[10px] ${isDark ? "text-slate-400" : "text-slate-500"
            }`}
        >
          AVG_LATENCY: 42MS
        </span>
      </div>

      {/* Interconnected System Nodes */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 my-auto py-2">
        {steps.map((item, idx) => (
          <div
            key={item.step}
            className={`relative p-3 rounded-lg border transition-all duration-300 ${isDark
                ? "bg-[#0e1422] border-white/[0.08] hover:border-[#C6A56B]/40"
                : "bg-white border-black/[0.08] hover:border-[#C6A56B]/50 shadow-sm"
              }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono text-[10px] text-[#C6A56B] font-semibold tracking-wider">
                NODE_{item.step}
              </span>
              <span
                className={`font-mono text-[8px] px-1 py-0.5 rounded border ${idx === 2
                    ? "bg-[#C6A56B]/15 text-[#C6A56B] border-[#C6A56B]/30"
                    : isDark
                      ? "bg-white/[0.04] text-slate-400 border-white/[0.06]"
                      : "bg-black/[0.04] text-slate-500 border-black/[0.06]"
                  }`}
              >
                {item.badge}
              </span>
            </div>

            <h4
              className={`font-display text-xs font-semibold tracking-tight ${isDark ? "text-white" : "text-[#0B0B0B]"
                }`}
            >
              {item.name}
            </h4>
            <p
              className={`text-[10px] mt-0.5 line-clamp-1 ${isDark ? "text-slate-400" : "text-slate-500"
                }`}
            >
              {item.detail}
            </p>

            <div
              className={`mt-2 pt-1.5 flex items-center justify-between border-t font-mono text-[8px] ${isDark
                  ? "border-white/[0.05] text-slate-500"
                  : "border-black/[0.05] text-slate-400"
                }`}
            >
              <span>OK</span>
              <span>{item.latency}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Telemetry Status Footer */}
      <div
        className={`pt-2.5 border-t flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] ${isDark
            ? "border-white/[0.06] text-slate-400"
            : "border-black/[0.06] text-slate-500"
          }`}
      >
        <span className="flex items-center gap-1.5">
          <span className="text-[#C6A56B]">✓</span> ZERO MANUAL DATA ENTRY
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-[#C6A56B]">✓</span> DETERMINISTIC RULES
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-[#C6A56B]">✓</span> AUDIT TRAIL
        </span>
      </div>
    </div>
  );
}

export default function ProprietaryProductsRail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDark = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const activeCapability = CAPABILITIES[activeIndex];

  return (
    <section
      id="what-we-do"
      className="relative w-full py-12 sm:py-14 lg:py-16 xl:py-18 overflow-hidden transition-colors duration-300 border-t border-b border-white/[0.08] dark:border-white/[0.08] [data-theme=light]_&:border-black/[0.08]"
      style={{
        backgroundColor: isDark ? "#0B0B0B" : "#F3F0E8",
      }}
      aria-label="What We Do - Digital Products, Systems and Automation"
    >
      {/* Background Architectural Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 select-none opacity-30 dark:opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage: isDark
            ? `
              linear-gradient(to right, rgba(243, 240, 232, 0.02) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(243, 240, 232, 0.02) 1px, transparent 1px)
            `
            : `
              linear-gradient(to right, rgba(11, 11, 11, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(11, 11, 11, 0.04) 1px, transparent 1px)
            `,
          backgroundSize: "80px 80px",
          backgroundPosition: "center center",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 50%, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 50%, black 40%, transparent 90%)",
        }}
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* ================================================================ */}
        {/* SECTION HEADER: EYEBROW & EDITORIAL HEADLINE                     */}
        {/* ================================================================ */}
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12">
          {/* Eyebrow Pill */}
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-4 sm:mb-5 backdrop-blur-sm transition-colors duration-300 ${isDark
                ? "border-white/10 bg-white/[0.02]"
                : "border-black/10 bg-white/70 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              }`}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]"
              aria-hidden="true"
            />
            <span
              className={`text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase ${isDark ? "text-[#C6A56B]" : "text-[#9e7f45]"
                }`}
            >
              WHAT WE DO
            </span>
          </div>

          {/* Large Editorial Headline */}
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-semibold leading-[1.12] tracking-[-0.03em] mb-4 sm:mb-5 transition-colors duration-300 ${isDark ? "text-[#F3F0E8]" : "text-[#0B0B0B]"
              }`}
          >
            From digital products <br className="hidden sm:inline" />
            <span className={isDark ? "text-[#C6A56B]" : "text-[#9e7f45]"}>
              to the systems behind them.
            </span>
          </h2>

          {/* Supporting Idea */}
          <p
            className={`text-base sm:text-lg leading-relaxed max-w-2xl font-normal font-body transition-colors duration-300 ${isDark ? "text-[#A8A49B]" : "text-[#5F5B54]"
              }`}
          >
            SASVALE designs and builds digital products, e-commerce platforms, custom software, business systems, and AI-powered workflows around real operational needs.
          </p>
        </div>

        {/* ================================================================ */}
        {/* DESKTOP LAYOUT (lg+): VERTICAL CAPABILITY INDEX + VISUAL PANEL    */}
        {/* ================================================================ */}
        <div className="hidden lg:grid lg:grid-cols-[36%_1fr] gap-6 xl:gap-8 items-start">
          {/* Left Column: Capability Index List (Selectable Modules) */}
          <div
            className="flex flex-col gap-3.5"
            role="tablist"
            aria-label="Capabilities Navigation"
          >
            {CAPABILITIES.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={item.id}
                  id={`tab-${item.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${item.id}`}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative w-full text-left h-[105px] min-h-[105px] px-5 py-4 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${isActive
                      ? isDark
                        ? "bg-[#14120e] border-[#C6A56B] shadow-[0_4px_24px_rgba(198,165,107,0.14)]"
                        : "bg-[#FAF7F0] border-[#C6A56B] shadow-[0_4px_20px_rgba(198,165,107,0.16)]"
                      : isDark
                        ? "bg-transparent border-white/[0.06] hover:bg-white/[0.02] hover:border-white/12"
                        : "bg-transparent border-black/[0.06] hover:bg-black/[0.02] hover:border-black/12"
                    }`}
                >
                  {/* Active Indicator Bar on Left Edge */}
                  {isActive && (
                    <span
                      className="absolute left-0 top-3.5 bottom-3.5 w-[3px] rounded-r bg-[#C6A56B]"
                      aria-hidden="true"
                    />
                  )}

                  {/* Top Row: Monospace Number + Arrow Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-mono text-xs font-semibold tracking-wider transition-colors ${isActive
                            ? "text-[#C6A56B]"
                            : isDark
                              ? "text-slate-500 group-hover:text-slate-400"
                              : "text-slate-400 group-hover:text-slate-600"
                          }`}
                      >
                        {item.number}
                      </span>
                      {isActive && (
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#C6A56B]/80 font-medium">
                          {"// ACTIVE"}
                        </span>
                      )}
                    </div>

                    {/* Clear Arrow Indicator */}
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                          ? "bg-[#C6A56B] text-black shadow-sm"
                          : isDark
                            ? "bg-white/[0.04] text-slate-500 group-hover:text-white group-hover:bg-white/[0.08] group-hover:translate-x-0.5"
                            : "bg-black/[0.04] text-slate-400 group-hover:text-black group-hover:bg-black/[0.08] group-hover:translate-x-0.5"
                        }`}
                      aria-hidden="true"
                    >
                      <svg
                        className="w-3 h-3 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>

                  {/* Bottom Row: Title & Subtitle */}
                  <div>
                    <h3
                      className={`font-display text-[15px] sm:text-base font-semibold tracking-tight transition-colors ${isActive
                          ? isDark
                            ? "text-white"
                            : "text-[#0B0B0B]"
                          : isDark
                            ? "text-slate-300 group-hover:text-white"
                            : "text-slate-700 group-hover:text-[#0B0B0B]"
                        }`}
                    >
                      {item.navTitle}
                    </h3>
                    <p
                      className={`text-xs mt-0.5 transition-colors truncate ${isActive
                          ? isDark
                            ? "text-[#C6A56B]/90"
                            : "text-[#9e7f45]"
                          : isDark
                            ? "text-slate-500 group-hover:text-slate-400"
                            : "text-slate-400 group-hover:text-slate-600"
                        }`}
                    >
                      {item.navSubtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Showcase Panel */}
          <div
            id={`panel-${activeCapability.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCapability.id}`}
            className={`rounded-2xl border p-5 sm:p-6 lg:p-6 xl:p-7 transition-all duration-300 flex flex-col justify-between ${isDark
                ? "bg-[#101217] border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                : "bg-white border-black/[0.08] shadow-[0_20px_50px_rgba(11,11,11,0.06)]"
              }`}
          >
            {/* Panel Header */}
            <div className="mb-4 sm:mb-5">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C6A56B] block mb-1.5">
                {activeCapability.eyebrow}
              </span>
              <h3
                className={`font-display text-2xl sm:text-[26px] font-semibold tracking-tight mb-2 transition-colors ${isDark ? "text-white" : "text-[#0B0B0B]"
                  }`}
              >
                {activeCapability.headline}
              </h3>
              <p
                className={`text-xs sm:text-[13px] leading-relaxed max-w-2xl transition-colors ${isDark ? "text-[#A8A49B]" : "text-[#5F5B54]"
                  }`}
              >
                {activeCapability.description}
              </p>

              {/* Technical Disciplines Badges */}
              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/[0.06] dark:border-white/[0.06] [data-theme=light]_&:border-black/[0.06]">
                {activeCapability.disciplines.map((d) => (
                  <span
                    key={d}
                    className={`font-mono text-[10px] px-2 py-0.5 rounded border tracking-wide uppercase transition-colors ${isDark
                        ? "bg-white/[0.02] text-slate-300 border-white/[0.08]"
                        : "bg-black/[0.02] text-slate-700 border-black/[0.08]"
                      }`}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Frame: Browser Device or System Flow */}
            <div
              className={`rounded-xl border overflow-hidden transition-all duration-300 ${isDark
                  ? "bg-[#07090e] border-white/[0.08] shadow-2xl"
                  : "bg-[#F3F0E8] border-black/[0.08] shadow-md"
                }`}
            >
              {/* Browser Header Bar */}
              <div
                className={`px-3.5 py-2 flex items-center justify-between border-b ${isDark
                    ? "bg-[#090d16] border-white/[0.06]"
                    : "bg-[#E9E5DC] border-black/[0.06]"
                  }`}
              >
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>

                {/* Technical Address Bar */}
                <div
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono flex items-center gap-1.5 max-w-[260px] sm:max-w-[320px] truncate ${isDark
                      ? "bg-white/[0.04] text-slate-400 border border-white/[0.05]"
                      : "bg-white text-slate-600 border border-black/[0.05]"
                    }`}
                >
                  <span className="text-[#C6A56B]">🔒</span>
                  <span className="truncate">
                    sasvale.systems/capabilities/{activeCapability.id}
                  </span>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${activeCapability.project?.isInProgress
                        ? "bg-amber-400 animate-pulse"
                        : "bg-emerald-400"
                      }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`font-mono text-[9px] uppercase tracking-wider hidden sm:inline ${activeCapability.project?.isInProgress
                        ? "text-amber-400"
                        : isDark
                          ? "text-slate-400"
                          : "text-slate-600"
                      }`}
                  >
                    {activeCapability.project?.isInProgress ? "IN PROGRESS" : "LIVE"}
                  </span>
                </div>
              </div>

              {/* Visual Body: Real Project Showcase or System Flow Diagram */}
              {activeCapability.visualType === "image" && activeCapability.project ? (
                <div>
                  <div className="relative h-[250px] xl:h-[265px] w-full overflow-hidden bg-[#07090e]">
                    <Image
                      src={activeCapability.project.image}
                      alt={activeCapability.project.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 850px"
                      className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.02]"
                    />
                  </div>

                  {/* Bottom Project Metadata Bar */}
                  <div
                    className={`px-4 py-2.5 flex items-center justify-between gap-3 border-t ${isDark
                        ? "bg-[#090d16] border-white/[0.06]"
                        : "bg-white border-black/[0.06]"
                      }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#C6A56B]">
                          PROJECT
                        </span>
                        <span
                          className={`font-display text-xs sm:text-sm font-semibold truncate ${isDark ? "text-white" : "text-[#0B0B0B]"
                            }`}
                        >
                          {activeCapability.project.name}
                        </span>
                        {activeCapability.project.isInProgress && (
                          <span className="font-mono text-[8px] px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/25 shrink-0">
                            ● IN PROGRESS
                          </span>
                        )}
                      </div>
                      <p
                        className={`text-[11px] truncate mt-0.5 ${isDark ? "text-slate-400" : "text-slate-500"
                          }`}
                      >
                        {activeCapability.project.type}
                      </p>
                    </div>

                    {activeCapability.project.slug && (
                      <Link
                        href={`/work/${activeCapability.project.slug}`}
                        aria-label={`View ${activeCapability.project.name} case study`}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[-0.01em] transition-all duration-200 cursor-pointer shrink-0 ${isDark
                            ? "bg-white/[0.05] hover:bg-[#C6A56B] text-slate-200 hover:text-black border border-white/10 hover:border-[#C6A56B]"
                            : "bg-black/[0.04] hover:bg-[#C6A56B] text-slate-800 hover:text-black border border-black/10 hover:border-[#C6A56B]"
                          }`}
                      >
                        <span>Case Study</span>
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              ) : (
                <div className="h-[295px] xl:h-[310px]">
                  <AutomationWorkflowVisual isDark={isDark} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* MOBILE LAYOUT (< lg): RESPONSIVE VERTICAL ACCORDION SEQUENCE     */}
        {/* ================================================================ */}
        <div className="lg:hidden flex flex-col gap-4">
          {CAPABILITIES.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${isOpen
                    ? isDark
                      ? "bg-[#101217] border-[#C6A56B]/50 shadow-xl"
                      : "bg-white border-[#C6A56B]/60 shadow-lg"
                    : isDark
                      ? "bg-white/[0.02] border-white/[0.08]"
                      : "bg-white/60 border-black/[0.08]"
                  }`}
              >
                {/* Accordion Header Toggle */}
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`mobile-panel-${item.id}`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-mono text-xs font-semibold tracking-wider ${isOpen ? "text-[#C6A56B]" : isDark ? "text-slate-500" : "text-slate-400"
                        }`}
                    >
                      {item.number}
                    </span>
                    <div>
                      <h3
                        className={`font-display text-base font-semibold tracking-tight ${isOpen
                            ? isDark
                              ? "text-white"
                              : "text-[#0B0B0B]"
                            : isDark
                              ? "text-slate-200"
                              : "text-slate-800"
                          }`}
                      >
                        {item.navTitle}
                      </h3>
                      <p
                        className={`text-xs mt-0.5 ${isOpen
                            ? isDark
                              ? "text-slate-400"
                              : "text-slate-600"
                            : isDark
                              ? "text-slate-500"
                              : "text-slate-500"
                          }`}
                      >
                        {item.navSubtitle}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen
                        ? "rotate-180 bg-[#C6A56B]/20 text-[#C6A56B]"
                        : isDark
                          ? "bg-white/[0.04] text-slate-400"
                          : "bg-black/[0.04] text-slate-600"
                      }`}
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Accordion Expandable Content */}
                {isOpen && (
                  <div
                    id={`mobile-panel-${item.id}`}
                    className={`px-4 sm:px-5 pb-5 pt-2 border-t transition-colors ${isDark ? "border-white/[0.06]" : "border-black/[0.06]"
                      }`}
                  >
                    <p
                      className={`text-sm leading-relaxed mb-4 ${isDark ? "text-[#A8A49B]" : "text-[#5F5B54]"
                        }`}
                    >
                      {item.description}
                    </p>

                    {/* Disciplines Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.disciplines.map((d) => (
                        <span
                          key={d}
                          className={`font-mono text-[9px] px-2 py-0.5 rounded border uppercase ${isDark
                              ? "bg-white/[0.02] text-slate-300 border-white/[0.08]"
                              : "bg-black/[0.02] text-slate-700 border-black/[0.08]"
                            }`}
                        >
                          {d}
                        </span>
                      ))}
                    </div>

                    {/* Mobile Visual Showcase */}
                    <div
                      className={`rounded-xl border overflow-hidden ${isDark
                          ? "bg-[#07090e] border-white/[0.08]"
                          : "bg-[#F3F0E8] border-black/[0.08]"
                        }`}
                    >
                      {item.visualType === "image" && item.project ? (
                        <div>
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#07090e]">
                            <Image
                              src={item.project.image}
                              alt={item.project.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, 600px"
                              className="object-cover object-top"
                            />
                          </div>

                          <div
                            className={`p-3.5 flex flex-col gap-2 border-t ${isDark
                                ? "bg-[#090d16] border-white/[0.06]"
                                : "bg-white border-black/[0.06]"
                              }`}
                          >
                            <div className="flex items-center justify-between">
                              <h4
                                className={`font-display text-sm font-medium ${isDark ? "text-white" : "text-[#0B0B0B]"
                                  }`}
                              >
                                {item.project.name}
                              </h4>
                              {item.project.isInProgress && (
                                <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/25">
                                  ● IN PROGRESS
                                </span>
                              )}
                            </div>

                            <p
                              className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"
                                }`}
                            >
                              {item.project.type}
                            </p>

                            {item.project.slug && (
                              <Link
                                href={`/work/${item.project.slug}`}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C6A56B] hover:underline mt-1"
                              >
                                <span>View Case Study</span>
                                <svg
                                  className="w-3.5 h-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                  />
                                </svg>
                              </Link>
                            )}
                          </div>
                        </div>
                      ) : (
                        <AutomationWorkflowVisual isDark={isDark} />
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
