"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";

// Theme synchronization helpers for dual Dark / Light mode fidelity
function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};
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

/* =========================================================================
   DIAGRAM VISUAL COMPONENTS
   Restrained, authentic technical diagrams that replace generic AI artwork.
   ========================================================================= */

/**
 * Featured Workflow Automation Diagram
 * Follows exact sequence: INPUT -> RULES -> SYSTEM -> AUTOMATION -> OUTPUT
 * Thin lines, small nodes, champagne accents.
 */
function AutomationRestrainedFlowVisual({ isDark }: { isDark: boolean }) {
  const nodes = [
    { code: "01", name: "INPUT", sub: "Webhook / Intake", badge: "TRIGGER" },
    { code: "02", name: "RULES", sub: "Business Logic", badge: "VALIDATED" },
    { code: "03", name: "SYSTEM", sub: "Event Dispatch", badge: "ROUTED" },
    { code: "04", name: "AUTOMATION", sub: "Pipeline Exec", badge: "ACTIVE" },
    { code: "05", name: "OUTPUT", sub: "DB / ERP Sync", badge: "COMMITTED" },
  ];

  return (
    <div
      className={`w-full h-full p-4 sm:p-5 flex flex-col justify-between select-none ${
        isDark ? "bg-[#090d16] text-[#F3F0E8]" : "bg-[#F9F7F2] text-[#0B0B0B]"
      }`}
    >
      {/* Telemetry Header */}
      <div
        className={`flex items-center justify-between pb-2.5 border-b ${
          isDark ? "border-white/[0.08]" : "border-black/[0.08]"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C6A56B] animate-pulse" aria-hidden="true" />
          <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#C6A56B]">
            WORKFLOW ORCHESTRATION PIPELINE // ACTIVE
          </span>
        </div>
        <span
          className={`font-mono text-[10px] ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          LATENCY: 8MS
        </span>
      </div>

      {/* 5-Step Connected Nodes Sequence */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-auto py-2">
        {nodes.map((node, idx) => (
          <div
            key={node.code}
            className={`relative p-2.5 rounded-lg border transition-all duration-300 flex flex-col justify-between ${
              isDark
                ? "bg-[#0e1422] border-white/[0.08] hover:border-[#C6A56B]/40"
                : "bg-white border-black/[0.08] hover:border-[#C6A56B]/50 shadow-sm"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-[9px] text-[#C6A56B] font-semibold">
                NODE_{node.code}
              </span>
              <span
                className={`font-mono text-[7px] px-1 py-0.5 rounded border ${
                  idx === 3
                    ? "bg-[#C6A56B]/15 text-[#C6A56B] border-[#C6A56B]/30"
                    : isDark
                      ? "bg-white/[0.04] text-slate-400 border-white/[0.06]"
                      : "bg-black/[0.04] text-slate-500 border-black/[0.06]"
                }`}
              >
                {node.badge}
              </span>
            </div>

            <div>
              <h4
                className={`font-display text-[11px] sm:text-xs font-semibold tracking-tight ${
                  isDark ? "text-white" : "text-[#0B0B0B]"
                }`}
              >
                {node.name}
              </h4>
              <p
                className={`text-[9px] truncate mt-0.5 ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {node.sub}
              </p>
            </div>

            <div
              className={`mt-2 pt-1 flex items-center justify-between border-t font-mono text-[7px] ${
                isDark
                  ? "border-white/[0.05] text-slate-500"
                  : "border-black/[0.05] text-slate-400"
              }`}
            >
              <span>STATUS: OK</span>
              <span className="text-[#C6A56B]">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Telemetry Status Footer */}
      <div
        className={`pt-2 border-t flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] sm:text-[10px] ${
          isDark
            ? "border-white/[0.06] text-slate-400"
            : "border-black/[0.06] text-slate-500"
        }`}
      >
        <span className="flex items-center gap-1">
          <span className="text-[#C6A56B]">✓</span> ZERO MANUAL DATA ENTRY
        </span>
        <span className="flex items-center gap-1">
          <span className="text-[#C6A56B]">✓</span> DETERMINISTIC RULES
        </span>
        <span className="flex items-center gap-1">
          <span className="text-[#C6A56B]">✓</span> FULL AUDIT LOG
        </span>
      </div>
    </div>
  );
}

/**
 * Subtle Operations / Workflow Systems Diagram
 */
function OperationsWorkflowMiniDiagram({ isDark }: { isDark: boolean }) {
  const modules = [
    { label: "OPERATIONS HUB", code: "OPS-01", status: "SYNCED" },
    { label: "WORKFLOW ENGINE", code: "WKF-02", status: "ACTIVE" },
    { label: "ROLE PERMISSIONS", code: "SEC-03", status: "SECURED" },
    { label: "AUDIT LOGS", code: "AUD-04", status: "VERIFIED" },
  ];

  return (
    <div
      className={`w-full h-full p-3.5 flex flex-col justify-between select-none ${
        isDark ? "bg-[#090d16] text-[#F3F0E8]" : "bg-[#F9F7F2] text-[#0B0B0B]"
      }`}
    >
      <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.06] [data-theme=light]_&:border-black/[0.06]">
        <span className="font-mono text-[9px] text-[#C6A56B] uppercase tracking-wider font-semibold">
          SYSTEM WORKFLOW TOPOLOGY
        </span>
        <span className="font-mono text-[8px] text-slate-400">UNIFIED ENGINE</span>
      </div>

      <div className="grid grid-cols-2 gap-2 my-auto">
        {modules.map((m) => (
          <div
            key={m.code}
            className={`p-2 rounded border ${
              isDark
                ? "bg-[#0e1422] border-white/[0.08]"
                : "bg-white border-black/[0.08] shadow-sm"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[8px] text-[#C6A56B] font-semibold">{m.code}</span>
              <span className="font-mono text-[7px] text-slate-400">{m.status}</span>
            </div>
            <div className="text-[10px] font-sans font-medium mt-1 truncate">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="pt-1.5 border-t border-white/[0.06] [data-theme=light]_&:border-black/[0.06] flex items-center justify-between font-mono text-[8px] text-slate-400">
        <span>STRUCTURED DATA FLOWS</span>
        <span className="text-[#C6A56B]">SINGLE SOURCE OF TRUTH</span>
      </div>
    </div>
  );
}

/**
 * Technical Integrations & API Diagram
 */
function IntegrationsMiniDiagram({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={`w-full h-full p-3.5 flex flex-col justify-between select-none ${
        isDark ? "bg-[#090d16] text-[#F3F0E8]" : "bg-[#F9F7F2] text-[#0B0B0B]"
      }`}
    >
      <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.06] [data-theme=light]_&:border-black/[0.06]">
        <span className="font-mono text-[9px] text-[#C6A56B] uppercase tracking-wider font-semibold">
          API &amp; WEBHOOK INTEGRATION BUS
        </span>
        <span className="font-mono text-[8px] text-emerald-400">● REAL-TIME</span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-auto items-center text-center">
        <div
          className={`p-2 rounded border ${
            isDark ? "bg-[#0e1422] border-white/[0.08]" : "bg-white border-black/[0.08]"
          }`}
        >
          <span className="font-mono text-[7px] text-slate-500 block">SOURCE</span>
          <span className="font-sans text-[10px] font-semibold">WEBHOOK</span>
        </div>

        <div
          className={`p-2 rounded border border-[#C6A56B]/60 shadow-[0_0_10px_rgba(198,165,107,0.12)] ${
            isDark ? "bg-[#141a29]" : "bg-[#FAF7F0]"
          }`}
        >
          <span className="font-mono text-[7px] text-[#C6A56B] block">ROUTE</span>
          <span className="font-sans text-[10px] font-semibold text-[#C6A56B]">API BUS</span>
        </div>

        <div
          className={`p-2 rounded border ${
            isDark ? "bg-[#0e1422] border-white/[0.08]" : "bg-white border-black/[0.08]"
          }`}
        >
          <span className="font-mono text-[7px] text-slate-500 block">TARGET</span>
          <span className="font-sans text-[10px] font-semibold">ENDPOINT</span>
        </div>
      </div>

      <div className="pt-1.5 border-t border-white/[0.06] [data-theme=light]_&:border-black/[0.06] flex items-center justify-between font-mono text-[8px] text-slate-400">
        <span>HANDOFFS: AUTOMATED</span>
        <span className="text-[#C6A56B]">LATENCY: &lt; 4MS</span>
      </div>
    </div>
  );
}

/**
 * Data Pipeline & Background Sync Diagram
 */
function DataPipelineMiniDiagram({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={`w-full h-full p-3.5 flex flex-col justify-between select-none ${
        isDark ? "bg-[#090d16] text-[#F3F0E8]" : "bg-[#F9F7F2] text-[#0B0B0B]"
      }`}
    >
      <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.06] [data-theme=light]_&:border-black/[0.06]">
        <span className="font-mono text-[9px] text-[#C6A56B] uppercase tracking-wider font-semibold">
          EVENT ROUTING &amp; ERROR RESILIENCE
        </span>
        <span className="font-mono text-[8px] text-slate-400">AUDITED</span>
      </div>

      <div className="flex items-center justify-between gap-1.5 my-auto">
        <div
          className={`flex-1 p-2 rounded border text-center ${
            isDark ? "bg-[#0e1422] border-white/[0.08]" : "bg-white border-black/[0.08]"
          }`}
        >
          <span className="font-mono text-[7px] text-[#C6A56B] block">EVENT QUEUE</span>
          <span className="font-sans text-[9px] font-semibold">ZERO-DROP</span>
        </div>
        <span className="text-[#C6A56B] font-mono text-xs">→</span>
        <div
          className={`flex-1 p-2 rounded border text-center ${
            isDark ? "bg-[#0e1422] border-white/[0.08]" : "bg-white border-black/[0.08]"
          }`}
        >
          <span className="font-mono text-[7px] text-[#C6A56B] block">TRANSFORM</span>
          <span className="font-sans text-[9px] font-semibold">VALIDATED</span>
        </div>
        <span className="text-[#C6A56B] font-mono text-xs">→</span>
        <div
          className={`flex-1 p-2 rounded border text-center ${
            isDark ? "bg-[#0e1422] border-white/[0.08]" : "bg-white border-black/[0.08]"
          }`}
        >
          <span className="font-mono text-[7px] text-[#C6A56B] block">SYNC DB</span>
          <span className="font-sans text-[9px] font-semibold">COMMITTED</span>
        </div>
      </div>

      <div className="pt-1.5 border-t border-white/[0.06] [data-theme=light]_&:border-black/[0.06] flex items-center justify-between font-mono text-[8px] text-slate-400">
        <span>ZERO MANUAL RE-ENTRY</span>
        <span className="text-emerald-400">STATUS: 100% HEALTH</span>
      </div>
    </div>
  );
}

/**
 * Product Engineering Full-Stack Architecture Mini Diagram
 */
function ProductEngineeringMiniDiagram({ isDark }: { isDark: boolean }) {
  const stack = [
    { label: "FRONTEND", val: "Next.js App Router" },
    { label: "LANGUAGE", val: "TypeScript (Strict)" },
    { label: "RUNTIME", val: "Edge & Serverless" },
    { label: "DATABASE", val: "PostgreSQL & Prisma" },
  ];

  return (
    <div
      className={`w-full h-full p-3.5 flex flex-col justify-between select-none ${
        isDark ? "bg-[#090d16] text-[#F3F0E8]" : "bg-[#F9F7F2] text-[#0B0B0B]"
      }`}
    >
      <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.06] [data-theme=light]_&:border-black/[0.06]">
        <span className="font-mono text-[9px] text-[#C6A56B] uppercase tracking-wider font-semibold">
          MODERN APPLICATION ARCHITECTURE
        </span>
        <span className="font-mono text-[8px] text-slate-400">PRODUCTION</span>
      </div>

      <div className="grid grid-cols-2 gap-2 my-auto">
        {stack.map((s) => (
          <div
            key={s.label}
            className={`p-2 rounded border ${
              isDark ? "bg-[#0e1422] border-white/[0.08]" : "bg-white border-black/[0.08]"
            }`}
          >
            <span className="font-mono text-[8px] text-slate-500 block">{s.label}</span>
            <span className="font-sans text-[10px] font-semibold truncate block">{s.val}</span>
          </div>
        ))}
      </div>

      <div className="pt-1.5 border-t border-white/[0.06] [data-theme=light]_&:border-black/[0.06] flex items-center justify-between font-mono text-[8px] text-slate-400">
        <span>SUB-SECOND TTFB</span>
        <span className="text-[#C6A56B]">COMPOUND GROWTH</span>
      </div>
    </div>
  );
}

/**
 * Connected Commerce Architecture Mini Diagram
 */
function ConnectedCommerceMiniDiagram({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={`w-full h-full p-3.5 flex flex-col justify-between select-none ${
        isDark ? "bg-[#090d16] text-[#F3F0E8]" : "bg-[#F9F7F2] text-[#0B0B0B]"
      }`}
    >
      <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.06] [data-theme=light]_&:border-black/[0.06]">
        <span className="font-mono text-[9px] text-[#C6A56B] uppercase tracking-wider font-semibold">
          CONNECTED COMMERCE BACKBONE
        </span>
        <span className="font-mono text-[8px] text-slate-400">SYNCED</span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-auto text-center">
        <div
          className={`p-2 rounded border ${
            isDark ? "bg-[#0e1422] border-white/[0.08]" : "bg-white border-black/[0.08]"
          }`}
        >
          <span className="font-mono text-[7px] text-[#C6A56B] block">CATALOG</span>
          <span className="font-sans text-[9px] font-semibold">FILTER ENGINE</span>
        </div>
        <div
          className={`p-2 rounded border ${
            isDark ? "bg-[#0e1422] border-white/[0.08]" : "bg-white border-black/[0.08]"
          }`}
        >
          <span className="font-mono text-[7px] text-[#C6A56B] block">STOCK</span>
          <span className="font-sans text-[9px] font-semibold">REAL-TIME INVENTORY</span>
        </div>
        <div
          className={`p-2 rounded border ${
            isDark ? "bg-[#0e1422] border-white/[0.08]" : "bg-white border-black/[0.08]"
          }`}
        >
          <span className="font-mono text-[7px] text-[#C6A56B] block">ORDERS</span>
          <span className="font-sans text-[9px] font-semibold">ERP INTAKE</span>
        </div>
      </div>

      <div className="pt-1.5 border-t border-white/[0.06] [data-theme=light]_&:border-black/[0.06] flex items-center justify-between font-mono text-[8px] text-slate-400">
        <span>FRICTIONLESS JOURNEY</span>
        <span className="text-[#C6A56B]">PURCHASE READY</span>
      </div>
    </div>
  );
}

/**
 * Usable Interaction Design Wireframe Mini Diagram
 */
function InteractionDesignMiniDiagram({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={`w-full h-full p-3.5 flex flex-col justify-between select-none ${
        isDark ? "bg-[#090d16] text-[#F3F0E8]" : "bg-[#F9F7F2] text-[#0B0B0B]"
      }`}
    >
      <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.06] [data-theme=light]_&:border-black/[0.06]">
        <span className="font-mono text-[9px] text-[#C6A56B] uppercase tracking-wider font-semibold">
          INTERACTION HIERARCHY &amp; FLOW
        </span>
        <span className="font-mono text-[8px] text-slate-400">UX MAPPED</span>
      </div>

      <div className="space-y-1.5 my-auto">
        <div
          className={`p-1.5 rounded border flex items-center justify-between text-[9px] ${
            isDark ? "bg-[#0e1422] border-white/[0.08]" : "bg-white border-black/[0.08]"
          }`}
        >
          <span className="font-mono text-[#C6A56B]">01 INTENT</span>
          <span className="font-sans">Clear Navigation &amp; Value Proposition</span>
        </div>
        <div
          className={`p-1.5 rounded border flex items-center justify-between text-[9px] ${
            isDark ? "bg-[#0e1422] border-white/[0.08]" : "bg-white border-black/[0.08]"
          }`}
        >
          <span className="font-mono text-[#C6A56B]">02 INTERACT</span>
          <span className="font-sans">Effortless Search, Filter &amp; Action</span>
        </div>
        <div
          className={`p-1.5 rounded border flex items-center justify-between text-[9px] ${
            isDark ? "bg-[#0e1422] border-white/[0.08]" : "bg-white border-black/[0.08]"
          }`}
        >
          <span className="font-mono text-[#C6A56B]">03 COMPLETE</span>
          <span className="font-sans">Frictionless Path to Primary Conversion</span>
        </div>
      </div>

      <div className="pt-1.5 border-t border-white/[0.06] [data-theme=light]_&:border-black/[0.06] flex items-center justify-between font-mono text-[8px] text-slate-400">
        <span>COGNITIVE LOAD: MINIMAL</span>
        <span className="text-[#C6A56B]">INTUITIVE UX</span>
      </div>
    </div>
  );
}

/**
 * Design Tokens & Visual Systems Mini Diagram
 */
function DesignTokensMiniDiagram({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={`w-full h-full p-3.5 flex flex-col justify-between select-none ${
        isDark ? "bg-[#090d16] text-[#F3F0E8]" : "bg-[#F9F7F2] text-[#0B0B0B]"
      }`}
    >
      <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.06] [data-theme=light]_&:border-black/[0.06]">
        <span className="font-mono text-[9px] text-[#C6A56B] uppercase tracking-wider font-semibold">
          SYSTEMATIC DESIGN TOKENS
        </span>
        <span className="font-mono text-[8px] text-slate-400">COHESIVE</span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-auto">
        <div
          className={`p-2 rounded border ${
            isDark ? "bg-[#0e1422] border-white/[0.08]" : "bg-white border-black/[0.08]"
          }`}
        >
          <div className="w-full h-3 rounded bg-[#0B0B0B] border border-white/20 mb-1" />
          <span className="font-mono text-[8px] text-slate-400 block">BASE DARK</span>
          <span className="font-mono text-[7px] text-[#C6A56B]">#0B0B0B</span>
        </div>
        <div
          className={`p-2 rounded border ${
            isDark ? "bg-[#0e1422] border-white/[0.08]" : "bg-white border-black/[0.08]"
          }`}
        >
          <div className="w-full h-3 rounded bg-[#F3F0E8] border border-black/10 mb-1" />
          <span className="font-mono text-[8px] text-slate-400 block">LIGHT TEXT</span>
          <span className="font-mono text-[7px] text-[#C6A56B]">#F3F0E8</span>
        </div>
        <div
          className={`p-2 rounded border ${
            isDark ? "bg-[#0e1422] border-white/[0.08]" : "bg-white border-black/[0.08]"
          }`}
        >
          <div className="w-full h-3 rounded bg-[#C6A56B] mb-1" />
          <span className="font-mono text-[8px] text-slate-400 block">CHAMPAGNE</span>
          <span className="font-mono text-[7px] text-[#C6A56B]">#C6A56B</span>
        </div>
      </div>

      <div className="pt-1.5 border-t border-white/[0.06] [data-theme=light]_&:border-black/[0.06] flex items-center justify-between font-mono text-[8px] text-slate-400">
        <span>CONSISTENT ACROSS SCREENS</span>
        <span className="text-[#C6A56B]">REUSABLE TOKENS</span>
      </div>
    </div>
  );
}

/* =========================================================================
   PRACTICES & CAPABILITIES DATA STRUCTURE
   100% Real Projects & Real Work (Ethletia, Wind Deflectors, EDS, TBS Salon)
   ========================================================================= */

interface CapabilityItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  visualType:
    | "browser"
    | "automation-flow"
    | "operations-diagram"
    | "integrations-diagram"
    | "datapipeline-diagram"
    | "product-engineering"
    | "connected-commerce"
    | "design-wireframe"
    | "design-tokens";
  image?: string;
  url?: string;
  project?: string;
  isInProgress?: boolean;
  anchor: string;
  cta?: string;
}

interface Practice {
  id: string;
  name: string;
  tagline: string;
  items: CapabilityItem[];
}

const PRACTICES: Practice[] = [
  {
    id: "digital-products",
    name: "Digital Products",
    tagline:
      "Digital products built around real business goals, user needs, and the way the product actually needs to work.",
    items: [
      {
        id: "websites-digital-products",
        badge: "DIGITAL PRODUCTS",
        title: "Websites & Digital Products",
        description:
          "Digital products built around real business goals, user needs, and the way the product actually needs to work.",
        visualType: "browser",
        image: "/assets/projects/ethletia.png",
        url: "ethletia.com",
        project: "Ethletia — Headless Commerce Platform",
        anchor: "/work/ethletia",
        cta: "View case study",
      },
      {
        id: "web-platforms",
        badge: "PRODUCT EXPERIENCE",
        title: "Web Platforms",
        description:
          "Responsive websites and digital experiences designed around clear navigation, usability, and product discovery.",
        visualType: "browser",
        image: "/assets/projects/wind.png",
        url: "winddeflectors.co.uk",
        project: "Wind Deflectors — Automotive Direct-to-Consumer",
        anchor: "/work/wind-deflectors",
        cta: "View case study",
      },
      {
        id: "product-engineering",
        badge: "ENGINEERING",
        title: "Product Engineering",
        description:
          "Full-stack modern engineering on Next.js, TypeScript, and edge cloud architectures built for speed and long-term compound growth.",
        visualType: "product-engineering",
        anchor: "/capabilities#product-engineering",
        cta: "Explore capability",
      },
    ],
  },
  {
    id: "business-systems",
    name: "Business Systems",
    tagline:
      "Custom software that brings important business processes into one connected system.",
    items: [
      {
        id: "business-applications",
        badge: "CUSTOM SOFTWARE",
        title: "Business Applications",
        description:
          "Custom management software and business systems built around real operational workflows — including systems for education, administration, fees, attendance, and internal operations.",
        visualType: "browser",
        image: "/assets/projects/edschol.png",
        url: "edschol.edu.pk/portal",
        project: "Education System (EDS) — Academic & Administrative Engine",
        anchor: "/work/education-system",
        cta: "View case study",
      },
      {
        id: "workflow-systems",
        badge: "OPERATIONS",
        title: "Workflow Systems",
        description:
          "Connected software that brings important business processes into one structured system.",
        visualType: "operations-diagram",
        anchor: "/capabilities#workflow-systems",
        cta: "Explore capability",
      },
      {
        id: "operational-software",
        badge: "INTERNAL TOOLS",
        title: "Operational Software",
        description:
          "Internal portals and administrative tools designed around the workflows teams use every day.",
        visualType: "browser",
        image: "/assets/projects/tbssalon.png",
        url: "tbssalon.systems/admin",
        project: "TBS Salon — Reservation & Operations Hub",
        isInProgress: true,
        anchor: "/capabilities#operational-software",
        cta: "Explore capability",
      },
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    tagline:
      "Online stores designed around product discovery, clear navigation, usability, and the buying journey.",
    items: [
      {
        id: "ecommerce-systems",
        badge: "E-COMMERCE",
        title: "E-commerce Systems",
        description:
          "Online stores designed around product discovery, clear navigation, usability, and the buying journey.",
        visualType: "browser",
        image: "/assets/projects/wind.png",
        url: "winddeflectors.co.uk/store",
        project: "Wind Deflectors — Automotive Direct-to-Consumer",
        anchor: "/work/wind-deflectors",
        cta: "View case study",
      },
      {
        id: "product-discovery",
        badge: "PRODUCT DISCOVERY",
        title: "Commerce Experiences",
        description:
          "Structured product browsing, responsive layouts, and clearer paths from discovery to purchase.",
        visualType: "browser",
        image: "/assets/projects/ethletia.png",
        url: "ethletia.com/collection",
        project: "Ethletia — Catalog Navigation",
        anchor: "/work/ethletia",
        cta: "View case study",
      },
      {
        id: "connected-commerce",
        badge: "COMMERCE SYSTEMS",
        title: "Connected Commerce",
        description:
          "Synchronize catalogs, inventory management, ERP databases, and order fulfillment into one coherent operational backbone.",
        visualType: "connected-commerce",
        anchor: "/capabilities#connected-commerce",
        cta: "Explore capability",
      },
    ],
  },
  {
    id: "automation",
    name: "Automation",
    tagline:
      "Automate repetitive operational work, connect systems, and reduce unnecessary manual steps.",
    items: [
      {
        id: "workflow-automation",
        badge: "AUTOMATION",
        title: "Workflow Automation",
        description:
          "Automate repetitive operational work, connect systems, and reduce unnecessary manual steps.",
        visualType: "automation-flow",
        anchor: "/capabilities#workflow-automation",
        cta: "Explore capability",
      },
      {
        id: "connected-workflows",
        badge: "INTEGRATIONS",
        title: "Connected Workflows",
        description:
          "APIs, system connections, data flows, and automated handoffs between the tools a business already uses.",
        visualType: "integrations-diagram",
        anchor: "/capabilities#connected-workflows",
        cta: "Explore capability",
      },
      {
        id: "automated-operations",
        badge: "DATA PIPELINES",
        title: "Automated Operations",
        description:
          "Event-driven routing, background synchronization, and error-handling pipelines that eliminate repetitive manual data entry.",
        visualType: "datapipeline-diagram",
        anchor: "/capabilities#automated-operations",
        cta: "Explore capability",
      },
    ],
  },
  {
    id: "product-design",
    name: "Product Design",
    tagline:
      "Product structure, interaction design, and visual systems that make complex technology easier to use.",
    items: [
      {
        id: "interfaces-built-around-user",
        badge: "PRODUCT DESIGN",
        title: "Interfaces Built Around the User",
        description:
          "Product structure, interaction design, and visual systems that make complex technology easier to use.",
        visualType: "browser",
        image: "/assets/projects/ethletia.png",
        url: "sasvale.systems/design/interfaces",
        project: "Ethletia — Design System & Component Hierarchy",
        anchor: "/work/ethletia",
        cta: "View case study",
      },
      {
        id: "usable-interfaces",
        badge: "INTERACTION DESIGN",
        title: "Usable Interfaces",
        description:
          "Design clear interfaces and user journeys that make complex web products intuitive, readable, and effortless to navigate.",
        visualType: "design-wireframe",
        anchor: "/capabilities#usable-interfaces",
        cta: "Explore capability",
      },
      {
        id: "design-systems",
        badge: "DESIGN SYSTEMS",
        title: "Cohesive Visual Languages",
        description:
          "Systematic design tokens, typography rules, and reusable component libraries that ensure consistency across every screen.",
        visualType: "design-tokens",
        anchor: "/capabilities#design-systems",
        cta: "Explore capability",
      },
    ],
  },
];

export default function ServicesTabbedMatrix() {
  const [activeTab, setActiveTab] = useState<string>("digital-products");
  const isDark = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);

  // Structured Service & ItemList Schema for search crawlers
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sasvale Capabilities & Practices",
    description:
      "Core software engineering, digital product design, e-commerce, and business automation capabilities.",
    itemListElement: PRACTICES.flatMap((practice, pIdx) =>
      practice.items.map((item, cIdx) => ({
        "@type": "Service",
        position: pIdx * 3 + cIdx + 1,
        name: item.title,
        description: item.description,
        serviceType: item.badge,
        category: practice.name,
        url: `https://sasvale.com${item.anchor}`,
        provider: {
          "@type": "Organization",
          name: "Sasvale",
          url: "https://sasvale.com",
        },
      }))
    ),
  };

  /**
   * Helper to render either a real project browser frame or an authentic technical diagram.
   */
  const renderVisual = (item: CapabilityItem, isLead: boolean) => {
    if (item.visualType === "browser" && item.image) {
      return (
        <div
          className={`relative w-full overflow-hidden border-b transition-colors ${
            isLead ? "h-[250px] sm:h-[300px] lg:h-[320px]" : "h-[140px] sm:h-[160px]"
          } ${isDark ? "bg-[#07090e] border-white/[0.08]" : "bg-[#F3F0E8] border-black/[0.08]"}`}
        >
          {/* Refined Browser Window Header Bar */}
          <div
            className={`px-3 sm:px-4 py-2 flex items-center justify-between border-b ${
              isDark ? "bg-[#090d16] border-white/[0.06]" : "bg-[#EAE6DD] border-black/[0.06]"
            }`}
          >
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>

            {/* Address Bar */}
            <div
              className={`px-2.5 py-0.5 rounded-full font-mono text-[9px] sm:text-[10px] flex items-center gap-1.5 max-w-[200px] sm:max-w-[300px] truncate ${
                isDark
                  ? "bg-white/[0.04] text-slate-400 border border-white/[0.05]"
                  : "bg-white text-slate-600 border border-black/[0.05]"
              }`}
            >
              <span className="text-[#C6A56B]">🔒</span>
              <span className="truncate">{item.url || "sasvale.systems"}</span>
            </div>

            {/* Status indicator */}
            {item.isInProgress ? (
              <span className="font-mono text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/25">
                ● IN PROGRESS
              </span>
            ) : (
              <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-[#C6A56B] hidden sm:inline">
                VERIFIED
              </span>
            )}
          </div>

          {/* Real Project Screenshot */}
          <div className="relative w-full h-[calc(100%-33px)] overflow-hidden bg-[#07090e]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes={isLead ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 100vw, 40vw"}
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </div>
      );
    }

    if (item.visualType === "automation-flow") {
      return (
        <div
          className={`w-full overflow-hidden border-b ${
            isLead ? "h-[250px] sm:h-[300px] lg:h-[320px]" : "h-[140px] sm:h-[160px]"
          } ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
        >
          <AutomationRestrainedFlowVisual isDark={isDark} />
        </div>
      );
    }

    if (item.visualType === "operations-diagram") {
      return (
        <div
          className={`w-full h-[140px] sm:h-[160px] overflow-hidden border-b ${
            isDark ? "border-white/[0.08]" : "border-black/[0.08]"
          }`}
        >
          <OperationsWorkflowMiniDiagram isDark={isDark} />
        </div>
      );
    }

    if (item.visualType === "integrations-diagram") {
      return (
        <div
          className={`w-full h-[140px] sm:h-[160px] overflow-hidden border-b ${
            isDark ? "border-white/[0.08]" : "border-black/[0.08]"
          }`}
        >
          <IntegrationsMiniDiagram isDark={isDark} />
        </div>
      );
    }

    if (item.visualType === "datapipeline-diagram") {
      return (
        <div
          className={`w-full h-[140px] sm:h-[160px] overflow-hidden border-b ${
            isDark ? "border-white/[0.08]" : "border-black/[0.08]"
          }`}
        >
          <DataPipelineMiniDiagram isDark={isDark} />
        </div>
      );
    }

    if (item.visualType === "product-engineering") {
      return (
        <div
          className={`w-full h-[140px] sm:h-[160px] overflow-hidden border-b ${
            isDark ? "border-white/[0.08]" : "border-black/[0.08]"
          }`}
        >
          <ProductEngineeringMiniDiagram isDark={isDark} />
        </div>
      );
    }

    if (item.visualType === "connected-commerce") {
      return (
        <div
          className={`w-full h-[140px] sm:h-[160px] overflow-hidden border-b ${
            isDark ? "border-white/[0.08]" : "border-black/[0.08]"
          }`}
        >
          <ConnectedCommerceMiniDiagram isDark={isDark} />
        </div>
      );
    }

    if (item.visualType === "design-wireframe") {
      return (
        <div
          className={`w-full h-[140px] sm:h-[160px] overflow-hidden border-b ${
            isDark ? "border-white/[0.08]" : "border-black/[0.08]"
          }`}
        >
          <InteractionDesignMiniDiagram isDark={isDark} />
        </div>
      );
    }

    if (item.visualType === "design-tokens") {
      return (
        <div
          className={`w-full h-[140px] sm:h-[160px] overflow-hidden border-b ${
            isDark ? "border-white/[0.08]" : "border-black/[0.08]"
          }`}
        >
          <DesignTokensMiniDiagram isDark={isDark} />
        </div>
      );
    }

    return null;
  };

  return (
    <section
      id="capabilities"
      className="relative w-full py-20 lg:py-28 transition-colors duration-300 border-t border-b border-white/[0.08] [data-theme=light]_&:border-black/[0.08]"
      style={{
        backgroundColor: isDark ? "#0B0B0B" : "#F3F0E8",
      }}
      aria-label="Capabilities and Services"
    >
      {/* Service Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 font-sans">
        {/* ================================================================ */}
        {/* TOP EYEBROW + EDITORIAL HEADLINE                                */}
        {/* ================================================================ */}
        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-14">
          {/* Eyebrow Pill */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 backdrop-blur-sm transition-colors duration-300 ${
              isDark
                ? "border-white/10 bg-white/[0.02]"
                : "border-black/10 bg-white/70 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" aria-hidden="true" />
            <span
              className={`text-[11px] font-semibold tracking-[0.22em] uppercase ${
                isDark ? "text-[#C6A56B]" : "text-[#9e7f45]"
              }`}
            >
              WHAT WE DO
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] 2xl:text-[48px] font-bold tracking-tight leading-[1.12] mb-4 transition-colors ${
              isDark ? "text-[#F3F0E8]" : "text-[#0B0B0B]"
            }`}
          >
            Technology built around
            <br />
            the way your business works.
          </h2>

          <p
            className={`text-sm sm:text-base max-w-2xl leading-relaxed transition-colors ${
              isDark ? "text-[#A8A49B]" : "text-[#5F5B54]"
            }`}
          >
            From digital products and e-commerce to custom software and automation, we build the
            systems businesses actually need.
          </p>
        </div>

        {/* ================================================================ */}
        {/* HORIZONTAL CATEGORY SELECTOR                                     */}
        {/* ================================================================ */}
        <div className="w-full mb-8 lg:mb-10 border-b border-white/[0.10] [data-theme=light]_&:border-black/[0.10]">
          <div
            role="tablist"
            aria-label="Capabilities practices"
            className="flex items-center justify-start sm:justify-center gap-6 sm:gap-10 overflow-x-auto no-scrollbar"
          >
            {PRACTICES.map((p) => {
              const isActive = p.id === activeTab;
              return (
                <button
                  key={p.id}
                  id={`tab-${p.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${p.id}`}
                  onClick={() => setActiveTab(p.id)}
                  className={`relative pb-3 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "text-[#C6A56B]"
                      : isDark
                        ? "text-[#A8A49B] hover:text-[#F3F0E8]"
                        : "text-[#6E6A63] hover:text-[#0B0B0B]"
                  }`}
                >
                  {p.name}
                  {/* Thin gold active underline indicator */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A56B] shadow-[0_0_8px_rgba(198,165,107,0.4)]"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================ */}
        {/* TAB PANELS: ASYMMETRIC CARD GRID (Left Lead + Right Stacked)     */}
        {/* ================================================================ */}
        {PRACTICES.map((practice) => {
          const isVisible = practice.id === activeTab;
          const leadItem = practice.items[0];
          const secondaryItems = practice.items.slice(1);

          return (
            <div
              key={practice.id}
              id={`panel-${practice.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${practice.id}`}
              hidden={!isVisible}
              className={isVisible ? "block" : "hidden"}
            >
              {/* Practice Tagline / Context Statement */}
              <div className="mb-6 lg:mb-8">
                <p
                  className={`text-sm sm:text-base font-normal max-w-2xl transition-colors ${
                    isDark ? "text-[#A8A49B]" : "text-[#5F5B54]"
                  }`}
                >
                  {practice.tagline}
                </p>
              </div>

              {/* Asymmetric Image Grid: Lead card (~60% / Col 7) + Stacked secondary cards (~40% / Col 5) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 lg:mb-20 items-stretch">
                {/* 1. Lead Featured Card (~60% width) */}
                <div
                  className={`lg:col-span-7 rounded-xl border overflow-hidden flex flex-col justify-between group transition-all duration-300 ${
                    isDark
                      ? "bg-[#0c0f17] border-white/10 hover:border-[#C6A56B]/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_rgba(198,165,107,0.1)]"
                      : "bg-white border-black/10 hover:border-[#C6A56B]/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(198,165,107,0.12)]"
                  }`}
                >
                  {/* Card Visual Asset (Real Browser Device or Workflow Engine) */}
                  {renderVisual(leadItem, true)}

                  {/* Text Content Below Visual */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C6A56B]">
                          {leadItem.badge}
                        </span>
                        {leadItem.isInProgress && (
                          <span className="font-mono text-[8px] px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/25">
                            ● IN PROGRESS
                          </span>
                        )}
                      </div>

                      <h3
                        className={`font-display text-xl sm:text-2xl font-bold mb-2.5 transition-colors ${
                          isDark ? "text-[#F3F0E8] group-hover:text-white" : "text-[#0B0B0B]"
                        }`}
                      >
                        {leadItem.title}
                      </h3>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed mb-6 font-normal ${
                          isDark ? "text-[#A8A49B]" : "text-[#5F5B54]"
                        }`}
                      >
                        {leadItem.description}
                      </p>
                    </div>

                    <div>
                      <Link
                        href={leadItem.anchor}
                        aria-label={`Explore ${leadItem.title} capability`}
                        className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors group/link ${
                          isDark
                            ? "text-[#F3F0E8] hover:text-[#C6A56B]"
                            : "text-[#0B0B0B] hover:text-[#C6A56B]"
                        }`}
                      >
                        <span>{leadItem.cta || "Explore capability"}</span>
                        <span
                          className="transition-transform group-hover/link:translate-x-1"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 2. Secondary & Tertiary Cards (~40% width, stacked vertically) */}
                <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
                  {secondaryItems.map((item) => (
                    <div
                      key={item.id}
                      className={`rounded-xl border overflow-hidden flex flex-col justify-between flex-1 group transition-all duration-300 ${
                        isDark
                          ? "bg-[#0c0f17] border-white/10 hover:border-[#C6A56B]/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_24px_rgba(198,165,107,0.1)]"
                          : "bg-white border-black/10 hover:border-[#C6A56B]/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_24px_rgba(198,165,107,0.1)]"
                      }`}
                    >
                      {/* Secondary Visual Asset */}
                      {renderVisual(item, false)}

                      {/* Text Content Below Visual */}
                      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="font-mono text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C6A56B]">
                              {item.badge}
                            </span>
                            {item.isInProgress && (
                              <span className="font-mono text-[8px] px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/25">
                                ● IN PROGRESS
                              </span>
                            )}
                          </div>

                          <h3
                            className={`font-display text-base sm:text-lg font-bold mb-1.5 transition-colors ${
                              isDark ? "text-[#F3F0E8] group-hover:text-white" : "text-[#0B0B0B]"
                            }`}
                          >
                            {item.title}
                          </h3>

                          <p
                            className={`text-xs leading-relaxed mb-4 font-normal ${
                              isDark ? "text-[#A8A49B]" : "text-[#5F5B54]"
                            }`}
                          >
                            {item.description}
                          </p>
                        </div>

                        <div>
                          <Link
                            href={item.anchor}
                            aria-label={`Explore ${item.title} capability`}
                            className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-colors group/link ${
                              isDark
                                ? "text-[#F3F0E8] hover:text-[#C6A56B]"
                                : "text-[#0B0B0B] hover:text-[#C6A56B]"
                            }`}
                          >
                            <span>{item.cta || "Explore capability"}</span>
                            <span
                              className="transition-transform group-hover/link:translate-x-1"
                              aria-hidden="true"
                            >
                              →
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* ================================================================ */}
        {/* EDITORIAL CALLOUT SECTION                                        */}
        {/* ================================================================ */}
        <div className="pt-10 sm:pt-14 border-t border-white/[0.08] [data-theme=light]_&:border-black/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B] block mb-2">
                BUILD WITH SASVALE
              </span>
              <div
                className={`text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-[1.2] mb-2 font-display transition-colors ${
                  isDark ? "text-[#F3F0E8]" : "text-[#0B0B0B]"
                }`}
              >
                Have a product or system you need to build?
              </div>
              <p
                className={`text-xs sm:text-sm max-w-xl leading-relaxed transition-colors ${
                  isDark ? "text-[#A8A49B]" : "text-[#5F5B54]"
                }`}
              >
                Whether you are starting from scratch or connecting existing tools, we build
                technology around how your business actually works.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:items-start lg:items-end justify-center">
              <Link
                href="/contact"
                className="bg-[#C6A56B] text-black font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg hover:bg-[#d8b87e] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Start a conversation</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
