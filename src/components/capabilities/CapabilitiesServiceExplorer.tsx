"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Layers, Sparkles, Monitor, ShoppingBag, Terminal, LayoutDashboard, Cpu, Palette } from "lucide-react";

export interface ServiceDetail {
  id: string;
  step: string;
  navTitle: string;
  badge: string;
  headline: string;
  description: string;
  whatWeBuild: string[];
  whatMatters: string[];
  ctaText: string;
  ctaHref: string;
}

export const SERVICES_CATALOG: ServiceDetail[] = [
  {
    id: "websites-applications",
    step: "01",
    navTitle: "Websites & Web Apps",
    badge: "DIGITAL PRESENCE & PLATFORMS",
    headline: "Digital experiences built to make an impression.",
    description:
      "From corporate websites to custom web applications, we create responsive digital experiences designed around your audience, business goals, and everyday requirements.",
    whatWeBuild: [
      "Corporate websites",
      "Business websites",
      "Landing pages",
      "Custom web applications",
      "Customer-facing platforms",
      "Responsive digital experiences",
    ],
    whatMatters: [
      "Clear user experience",
      "Mobile responsiveness",
      "Search-engine-friendly foundations",
      "Performance & rapid loading",
      "Accessibility standards (WCAG)",
      "Maintainable implementation",
    ],
    ctaText: "Discuss a Website Project",
    ctaHref: "/contact",
  },
  {
    id: "ecommerce-development",
    step: "02",
    navTitle: "E-Commerce Development",
    badge: "COMMERCE & CONVERSION",
    headline: "Online stores designed for better buying experiences.",
    description:
      "We build e-commerce experiences around product discovery, shopping convenience, checkout clarity, and the systems needed to manage online selling.",
    whatWeBuild: [
      "E-commerce websites",
      "Product catalogs & variant matrices",
      "Category and filtering systems",
      "Shopping carts & drawer flows",
      "Checkout experiences",
      "Product management interfaces",
      "Payment and third-party integrations",
    ],
    whatMatters: [
      "Frictionless purchase journeys",
      "Automated order intake",
      "Secure payment processing",
      "Inventory synchronization",
      "Mobile checkout optimization",
      "Clear shipping & tax calculation",
    ],
    ctaText: "Discuss an E-Commerce Project",
    ctaHref: "/contact",
  },
  {
    id: "custom-software",
    step: "03",
    navTitle: "Custom Software",
    badge: "BESPOKE OPERATIONAL WORKFLOWS",
    headline: "Software shaped around how you work.",
    description:
      "Off-the-shelf tools do not always fit the way a business operates. We design and develop custom applications built around specific workflows, users, and operational requirements.",
    whatWeBuild: [
      "Custom web applications",
      "Business portals",
      "Client portals",
      "Supplier & partner portals",
      "Internal tooling & back-office software",
      "Role-based platforms",
      "Custom application integrations",
    ],
    whatMatters: [
      "Appropriate user permissions & RBAC",
      "Clear, non-confusing workflows",
      "Reliable data handling & backups",
      "Maintainable architecture",
      "Practical daily usability",
      "Zero vendor lock-in",
    ],
    ctaText: "Discuss Custom Software",
    ctaHref: "/contact",
  },
  {
    id: "business-systems",
    step: "04",
    navTitle: "Business Systems & Dashboards",
    badge: "MANAGEMENT & TELEMETRY",
    headline: "Bring your operations into one clearer system.",
    description:
      "We develop business management tools that make everyday operations easier to organize, monitor, and manage.",
    whatWeBuild: [
      "Inventory management systems",
      "CRM platforms & customer records",
      "Administrative dashboards",
      "Employee management portals",
      "Booking and scheduling systems",
      "Reporting interfaces",
      "Operational tracking systems",
    ],
    whatMatters: [
      "Real-time operational visibility",
      "Centralized record keeping",
      "Reduction of manual spreadsheets",
      "Custom audit logging",
      "Role-tailored dashboard views",
      "Exportable reports & summaries",
    ],
    ctaText: "Discuss a Business System",
    ctaHref: "/contact",
  },
  {
    id: "automation-ai",
    step: "05",
    navTitle: "Automation & AI Integration",
    badge: "CONNECTED PIPELINES",
    headline: "Less repetitive work. More room to move forward.",
    description:
      "We connect tools, simplify workflows, and explore practical automation and AI capabilities where they can improve the way businesses operate.",
    whatWeBuild: [
      "API integrations & data bridges",
      "Workflow automation & queue triggers",
      "Data synchronization across platforms",
      "Automated notifications & alerts",
      "AI-assisted workflows & classification",
      "Document processing & parsing",
      "Connected business applications",
    ],
    whatMatters: [
      "Reduction of human input error",
      "Immediate asynchronous event processing",
      "Deterministic fallback mechanisms",
      "Secure API token management",
      "Measurable operational time savings",
      "Practical utility over experimentation",
    ],
    ctaText: "Discuss Automation",
    ctaHref: "/contact",
  },
  {
    id: "ui-ux-design",
    step: "06",
    navTitle: "UI/UX & Product Design",
    badge: "EXPERIENCE ARCHITECTURE",
    headline: "Thoughtful design. Better digital experiences.",
    description:
      "We make complex digital products easier to understand and use through clear interface design, considered user journeys, and consistent visual systems.",
    whatWeBuild: [
      "User interfaces (Web & Application)",
      "User experience flows & journeys",
      "Wireframes & structural schematics",
      "Interactive prototypes & user test models",
      "Design systems & component tokens",
      "Responsive layout specifications",
      "Product interface improvements",
    ],
    whatMatters: [
      "Intuitive navigational hierarchies",
      "Consistent typography & spacing tokens",
      "High visual polish & contrast rigor",
      "Component modularity & code parity",
      "Reduced cognitive load for users",
      "Seamless mobile usability",
    ],
    ctaText: "Discuss a Design Project",
    ctaHref: "/contact",
  },
];

/* -------------------------------------------------------------------------- */
/* Visual 01: Websites & Web Apps Responsive Showcase                         */
/* -------------------------------------------------------------------------- */
function WebsitesVisual() {
  return (
    <div className="relative w-full rounded-2xl bg-[#090b10] border border-white/[0.08] p-5 sm:p-7 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A56B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Browser Bar */}
      <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          <span className="ml-2 text-[10px] font-mono text-[#A8A49B]/70 tracking-wider">
            https://sasvale-client.com
          </span>
        </div>
        <span className="text-[9px] font-mono text-[#C6A56B] bg-[#C6A56B]/10 px-2 py-0.5 rounded border border-[#C6A56B]/20">
          RESPONSIVE WEB FRAMEWORK
        </span>
      </div>

      {/* Composition: Desktop Browser Frame + Floating Mobile Mockup */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
        
        {/* Desktop Viewport (8 Cols) */}
        <div className="md:col-span-8 rounded-xl bg-[#0d1017] border border-white/[0.08] p-4 shadow-lg">
          {/* Header Mock */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
            <div className="h-3 w-20 bg-[#C6A56B]/40 rounded" />
            <div className="flex gap-2">
              <div className="h-2 w-10 bg-white/20 rounded" />
              <div className="h-2 w-10 bg-white/20 rounded" />
              <div className="h-2 w-12 bg-[#C6A56B]/30 rounded" />
            </div>
          </div>
          {/* Hero Content Mock */}
          <div className="space-y-2 mb-5">
            <div className="h-5 w-3/4 bg-white/90 rounded" />
            <div className="h-3 w-full bg-white/20 rounded" />
            <div className="h-3 w-2/3 bg-white/20 rounded" />
          </div>
          {/* Grid Mock */}
          <div className="grid grid-cols-3 gap-2">
            <div className="h-14 rounded bg-white/[0.03] border border-white/[0.06] p-2 flex flex-col justify-between">
              <div className="w-4 h-4 rounded bg-[#C6A56B]/30" />
              <div className="h-2 w-full bg-white/20 rounded" />
            </div>
            <div className="h-14 rounded bg-white/[0.03] border border-white/[0.06] p-2 flex flex-col justify-between">
              <div className="w-4 h-4 rounded bg-white/20" />
              <div className="h-2 w-full bg-white/20 rounded" />
            </div>
            <div className="h-14 rounded bg-white/[0.03] border border-white/[0.06] p-2 flex flex-col justify-between">
              <div className="w-4 h-4 rounded bg-[#C6A56B]/30" />
              <div className="h-2 w-full bg-white/20 rounded" />
            </div>
          </div>
        </div>

        {/* Mobile Viewport Mock (4 Cols) */}
        <div className="md:col-span-4 rounded-xl bg-[#0d1017] border border-white/[0.12] p-3 shadow-xl">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/[0.06]">
            <span className="text-[8px] font-mono text-[#A8A49B]">MOBILE (390PX)</span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
          <div className="h-2.5 w-16 bg-[#C6A56B]/50 rounded mb-2" />
          <div className="h-3.5 w-full bg-white/80 rounded mb-2" />
          <div className="h-2 w-4/5 bg-white/20 rounded mb-3" />
          <div className="h-7 w-full rounded bg-[#C6A56B] flex items-center justify-center">
            <span className="text-[8px] font-mono text-[#070707] font-bold">PRIMARY CTA</span>
          </div>
        </div>

      </div>

      {/* Technical Spec Metrics */}
      <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#A8A49B]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Next.js App Router
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            100 Lighthouse Performance
          </span>
        </div>
        <span className="text-[#C6A56B]">SEO & WCAG AA VERIFIED</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Visual 02: E-Commerce Storefront Showcase                                  */
/* -------------------------------------------------------------------------- */
function EcommerceVisual() {
  return (
    <div className="relative w-full rounded-2xl bg-[#090b10] border border-white/[0.08] p-5 sm:p-7 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A56B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-[#C6A56B]" />
          <span className="text-xs font-mono text-[#F5F3ED] font-semibold tracking-wider">
            COMMERCE STOREFRONT // CATALOG & CHECKOUT
          </span>
        </div>
        <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          STRIPE & DIRECT INTAKE READY
        </span>
      </div>

      {/* Storefront Layout Mock */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-5">
        
        {/* Product Card 1 */}
        <div className="rounded-xl bg-[#0d1017] border border-white/[0.08] p-3.5 flex flex-col justify-between">
          <div>
            <div className="w-full aspect-[4/3] rounded-lg bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.06] flex items-center justify-center mb-3">
              <span className="text-[10px] font-mono text-[#C6A56B]">PRODUCT_01</span>
            </div>
            <div className="h-3 w-3/4 bg-white/80 rounded mb-1" />
            <div className="h-2 w-1/2 bg-white/20 rounded mb-3" />
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
            <span className="text-xs font-mono text-[#C6A56B]">$89.00</span>
            <span className="text-[9px] font-mono text-[#A8A49B] bg-white/[0.04] px-1.5 py-0.5 rounded">IN STOCK</span>
          </div>
        </div>

        {/* Product Card 2 (Active Selection) */}
        <div className="rounded-xl bg-[#0d1017] border border-[#C6A56B]/50 p-3.5 flex flex-col justify-between shadow-[0_0_20px_rgba(198,165,107,0.1)]">
          <div>
            <div className="w-full aspect-[4/3] rounded-lg bg-gradient-to-br from-[#C6A56B]/10 to-white/[0.02] border border-[#C6A56B]/30 flex items-center justify-center mb-3">
              <span className="text-[10px] font-mono text-[#C6A56B]">VARIANT MATRIX</span>
            </div>
            <div className="h-3 w-3/4 bg-white rounded mb-1" />
            <div className="h-2 w-1/2 bg-white/30 rounded mb-3" />
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
            <span className="text-xs font-mono text-[#C6A56B]">$124.00</span>
            <span className="text-[9px] font-mono text-[#070707] font-bold bg-[#C6A56B] px-1.5 py-0.5 rounded">SELECTED</span>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="rounded-xl bg-[#0d1017] border border-white/[0.08] p-3.5 flex flex-col justify-between">
          <div>
            <div className="w-full aspect-[4/3] rounded-lg bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.06] flex items-center justify-center mb-3">
              <span className="text-[10px] font-mono text-[#C6A56B]">PRODUCT_03</span>
            </div>
            <div className="h-3 w-3/4 bg-white/80 rounded mb-1" />
            <div className="h-2 w-1/2 bg-white/20 rounded mb-3" />
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
            <span className="text-xs font-mono text-[#C6A56B]">$65.00</span>
            <span className="text-[9px] font-mono text-[#A8A49B] bg-white/[0.04] px-1.5 py-0.5 rounded">IN STOCK</span>
          </div>
        </div>

      </div>

      {/* Cart & Checkout Sub-panel */}
      <div className="rounded-xl bg-[#0d1017] border border-white/[0.08] p-3.5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#C6A56B]/20 flex items-center justify-center">
            <span className="text-xs font-mono font-bold text-[#C6A56B]">2</span>
          </div>
          <div>
            <p className="text-xs font-medium text-[#F5F3ED]">Instant Cart & Frictionless Checkout</p>
            <p className="text-[10px] font-mono text-[#A8A49B]">Order intake synchronized to inventory database</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#C6A56B]">Subtotal: $213.00</span>
          <span className="text-[10px] font-mono text-[#070707] font-semibold bg-[#C6A56B] px-3 py-1.5 rounded-lg">
            ONE-CLICK PAY
          </span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Visual 03: Custom Software Application Portal                              */
/* -------------------------------------------------------------------------- */
function CustomSoftwareVisual() {
  return (
    <div className="relative w-full rounded-2xl bg-[#090b10] border border-white/[0.08] p-5 sm:p-7 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A56B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Portal Header */}
      <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#C6A56B]" />
          <span className="text-xs font-mono text-[#F5F3ED] font-semibold tracking-wider">
            PORTAL.SYSTEMS // WORKFLOW ENGINE
          </span>
        </div>
        <span className="text-[9px] font-mono text-[#C6A56B] bg-[#C6A56B]/10 px-2 py-0.5 rounded border border-[#C6A56B]/20">
          RBAC MULTI-TENANT ARCHITECTURE
        </span>
      </div>

      {/* Role Navigation & Data View */}
      <div className="rounded-xl bg-[#0d1017] border border-white/[0.08] p-4 mb-4">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-[#070707] font-bold bg-[#C6A56B] px-2 py-0.5 rounded">
              ROLE: LEAD_ARCHITECT
            </span>
            <span className="text-[10px] font-mono text-[#A8A49B] bg-white/[0.03] px-2 py-0.5 rounded">
              PERMISSIONS: FULL_READ_WRITE
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400">ACTIVE SESSION: 04h:12m</span>
        </div>

        {/* Data Records Rows */}
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/[0.04] text-[11px] font-mono">
            <span className="text-[#F5F3ED]">#REQ-8492 // Customer Provisioning Pipeline</span>
            <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">PROVISIONED</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/[0.04] text-[11px] font-mono">
            <span className="text-[#F5F3ED]">#REQ-8493 // Multi-Tier Approval Workflow</span>
            <span className="text-[#C6A56B] bg-[#C6A56B]/10 px-1.5 py-0.5 rounded">IN_REVIEW</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/[0.04] text-[11px] font-mono">
            <span className="text-[#F5F3ED]">#REQ-8494 // Supplier Data Bridge Dispatch</span>
            <span className="text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">SYNCING</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-[#A8A49B]">
        <span>Strict TypeScript & PostgreSQL Layer</span>
        <span className="text-[#C6A56B]">ZERO THIRD-PARTY LOCK-IN</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Visual 04: Business Systems & Dashboards                                   */
/* -------------------------------------------------------------------------- */
function BusinessSystemsVisual() {
  return (
    <div className="relative w-full rounded-2xl bg-[#090b10] border border-white/[0.08] p-5 sm:p-7 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A56B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <LayoutDashboard className="w-4 h-4 text-[#C6A56B]" />
          <span className="text-xs font-mono text-[#F5F3ED] font-semibold tracking-wider">
            OPERATIONAL DASHBOARD // RESOURCE MANAGEMENT
          </span>
        </div>
        <span className="text-[9px] font-mono text-[#C6A56B] bg-[#C6A56B]/10 px-2 py-0.5 rounded border border-[#C6A56B]/20">
          DAILY OPERATIONS TELEMETRY
        </span>
      </div>

      {/* Dashboard KPI Grid */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="rounded-xl bg-[#0d1017] border border-white/[0.08] p-3.5">
          <span className="text-[10px] font-mono text-[#A8A49B]">DAILY ACTIVE USERS</span>
          <p className="text-xl sm:text-2xl font-sans font-light text-[#F5F3ED] mt-1">1,248</p>
          <span className="text-[9px] font-mono text-emerald-400">NORMAL OPERATING LOAD</span>
        </div>
        <div className="rounded-xl bg-[#0d1017] border border-[#C6A56B]/40 p-3.5 shadow-[0_0_15px_rgba(198,165,107,0.1)]">
          <span className="text-[10px] font-mono text-[#C6A56B]">RECORDS PROCESSED</span>
          <p className="text-xl sm:text-2xl font-sans font-light text-[#C6A56B] mt-1">100%</p>
          <span className="text-[9px] font-mono text-[#C6A56B]">ALL TIMELINES CURRENT</span>
        </div>
        <div className="rounded-xl bg-[#0d1017] border border-white/[0.08] p-3.5">
          <span className="text-[10px] font-mono text-[#A8A49B]">SYSTEM LATENCY</span>
          <p className="text-xl sm:text-2xl font-sans font-light text-[#F5F3ED] mt-1">42ms</p>
          <span className="text-[9px] font-mono text-cyan-400">EDGE REPLICATED</span>
        </div>
      </div>

      {/* Operational Schedule & Attendance Matrix Mockup (e.g. EDS School inspiration) */}
      <div className="rounded-xl bg-[#0d1017] border border-white/[0.08] p-4">
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/[0.06]">
          <span className="text-xs font-mono text-[#F5F3ED]">DEPARTMENT SCHEDULE & STATUS</span>
          <span className="text-[10px] font-mono text-[#A8A49B]">REAL-TIME SYNC</span>
        </div>
        <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
          <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05]">
            <p className="text-[#A8A49B]">ADMIN</p>
            <p className="text-emerald-400 font-semibold mt-1">ONLINE</p>
          </div>
          <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05]">
            <p className="text-[#A8A49B]">FACULTY</p>
            <p className="text-emerald-400 font-semibold mt-1">LOGGED</p>
          </div>
          <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05]">
            <p className="text-[#A8A49B]">ACCOUNTS</p>
            <p className="text-[#C6A56B] font-semibold mt-1">BALANCED</p>
          </div>
          <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05]">
            <p className="text-[#A8A49B]">BACKUP</p>
            <p className="text-cyan-400 font-semibold mt-1">VERIFIED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Visual 05: Automation & AI Integration Workflow Diagram                    */
/* -------------------------------------------------------------------------- */
function AutomationVisual() {
  return (
    <div className="relative w-full rounded-2xl bg-[#090b10] border border-white/[0.08] p-5 sm:p-7 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A56B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 mb-6 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#C6A56B]" />
          <span className="text-xs font-mono text-[#F5F3ED] font-semibold tracking-wider">
            AUTOMATION PIPELINE // 4-STAGE PIPELINE
          </span>
        </div>
        <span className="text-[9px] font-mono text-[#C6A56B] bg-[#C6A56B]/10 px-2 py-0.5 rounded border border-[#C6A56B]/20">
          EVENT-DRIVEN ARCHITECTURE
        </span>
      </div>

      {/* Linear Process Architecture: INPUT -> PROCESS -> AUTOMATION -> RESULT */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6 relative">
        
        {/* Stage 1: Input */}
        <div className="rounded-xl bg-[#0d1017] border border-white/[0.08] p-3.5 text-center flex flex-col justify-between">
          <span className="text-[9px] font-mono text-[#C6A56B] tracking-wider uppercase font-bold">01 // INPUT</span>
          <div className="my-3">
            <p className="text-xs font-sans font-medium text-[#F5F3ED]">Webhooks & Inquiries</p>
            <p className="text-[10px] font-mono text-[#A8A49B] mt-1">HTTP POST / Form Event</p>
          </div>
          <div className="h-1 w-full bg-white/10 rounded" />
        </div>

        {/* Stage 2: Process */}
        <div className="rounded-xl bg-[#0d1017] border border-white/[0.08] p-3.5 text-center flex flex-col justify-between">
          <span className="text-[9px] font-mono text-[#C6A56B] tracking-wider uppercase font-bold">02 // PROCESS</span>
          <div className="my-3">
            <p className="text-xs font-sans font-medium text-[#F5F3ED]">Validation & Schema</p>
            <p className="text-[10px] font-mono text-[#A8A49B] mt-1">Data normalization</p>
          </div>
          <div className="h-1 w-full bg-[#C6A56B]/40 rounded" />
        </div>

        {/* Stage 3: Automation */}
        <div className="rounded-xl bg-[#0d1017] border border-[#C6A56B]/50 p-3.5 text-center flex flex-col justify-between shadow-[0_0_15px_rgba(198,165,107,0.15)]">
          <span className="text-[9px] font-mono text-[#C6A56B] tracking-wider uppercase font-bold">03 // AUTOMATION</span>
          <div className="my-3">
            <p className="text-xs font-sans font-medium text-[#F5F3ED]">AI & API Logic</p>
            <p className="text-[10px] font-mono text-[#C6A56B] mt-1">Dispatch & Tagging</p>
          </div>
          <div className="h-1 w-full bg-[#C6A56B] rounded" />
        </div>

        {/* Stage 4: Result */}
        <div className="rounded-xl bg-[#0d1017] border border-white/[0.08] p-3.5 text-center flex flex-col justify-between">
          <span className="text-[9px] font-mono text-emerald-400 tracking-wider uppercase font-bold">04 // RESULT</span>
          <div className="my-3">
            <p className="text-xs font-sans font-medium text-[#F5F3ED]">Action Delivered</p>
            <p className="text-[10px] font-mono text-[#A8A49B] mt-1">Database & Notifications</p>
          </div>
          <div className="h-1 w-full bg-emerald-400 rounded" />
        </div>

      </div>

      <div className="rounded-xl bg-[#0d1017] border border-white/[0.08] p-3 flex items-center justify-between text-[11px] font-mono text-[#A8A49B]">
        <span>Guaranteed At-Least-Once Delivery & Retry Queues</span>
        <span className="text-[#C6A56B]">PRACTICAL VALUE FOCUS</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Visual 06: UI/UX & Product Design Composition                              */
/* -------------------------------------------------------------------------- */
function DesignVisual() {
  return (
    <div className="relative w-full rounded-2xl bg-[#090b10] border border-white/[0.08] p-5 sm:p-7 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A56B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-[#C6A56B]" />
          <span className="text-xs font-mono text-[#F5F3ED] font-semibold tracking-wider">
            DESIGN TOKENS & SYSTEM HIERARCHY
          </span>
        </div>
        <span className="text-[9px] font-mono text-[#C6A56B] bg-[#C6A56B]/10 px-2 py-0.5 rounded border border-[#C6A56B]/20">
          FIGMA TO PRODUCTION PARITY
        </span>
      </div>

      {/* Design System Spec: Colors, Typography & Interactive Components */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mb-4">
        
        {/* Color Palette Tokens (4 Cols) */}
        <div className="sm:col-span-4 rounded-xl bg-[#0d1017] border border-white/[0.08] p-3.5">
          <span className="text-[10px] font-mono text-[#A8A49B] block mb-2.5">COLOR TOKENS</span>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-[#070707] border border-white/20" />
                #070707
              </span>
              <span className="text-[#A8A49B]">Obsidian</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-[#C6A56B]" />
                #C6A56B
              </span>
              <span className="text-[#C6A56B]">Champagne</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-[#F5F3ED]" />
                #F5F3ED
              </span>
              <span className="text-[#A8A49B]">Alabaster</span>
            </div>
          </div>
        </div>

        {/* UI Component State Mockups (8 Cols) */}
        <div className="sm:col-span-8 rounded-xl bg-[#0d1017] border border-white/[0.08] p-3.5 flex flex-col justify-between">
          <span className="text-[10px] font-mono text-[#A8A49B] block mb-2">INTERACTION STATES</span>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded bg-white/[0.04] border border-white/[0.08] text-center">
              <span className="text-[8px] font-mono text-[#A8A49B] block mb-1">DEFAULT</span>
              <div className="h-6 w-full rounded bg-white/[0.06] flex items-center justify-center text-[9px] font-mono text-white/60">
                Button
              </div>
            </div>
            <div className="p-2 rounded bg-[#C6A56B]/10 border border-[#C6A56B]/40 text-center">
              <span className="text-[8px] font-mono text-[#C6A56B] block mb-1">HOVER</span>
              <div className="h-6 w-full rounded bg-[#C6A56B] flex items-center justify-center text-[9px] font-mono text-[#070707] font-semibold">
                Button
              </div>
            </div>
            <div className="p-2 rounded bg-white/[0.04] border border-white/[0.08] text-center">
              <span className="text-[8px] font-mono text-[#A8A49B] block mb-1">ACTIVE</span>
              <div className="h-6 w-full rounded bg-white/20 flex items-center justify-center text-[9px] font-mono text-white">
                Pressed
              </div>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-[#A8A49B]">
            Font Hierarchy: Manrope (Headings) · DM Sans (Body) · JetBrains (Code)
          </div>
        </div>

      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-[#A8A49B]">
        <span>Strict WCAG 2.1 AA Contrast Ratio Adherence</span>
        <span className="text-[#C6A56B]">HUMAN-CENTERED UX</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Main Interactive Explorer Component                                        */
/* -------------------------------------------------------------------------- */
interface CapabilitiesServiceExplorerProps {
  selectedServiceId?: string;
  onSelectService?: (id: string) => void;
}

export function CapabilitiesServiceExplorer({
  selectedServiceId,
  onSelectService,
}: CapabilitiesServiceExplorerProps) {
  const [internalActiveId, setInternalActiveId] = useState<string>("websites-applications");

  // Sync controlled vs uncontrolled state
  const activeId = selectedServiceId || internalActiveId;
  const activeService =
    SERVICES_CATALOG.find((s) => s.id === activeId) || SERVICES_CATALOG[0];

  const handleSelect = (id: string) => {
    setInternalActiveId(id);
    if (onSelectService) {
      onSelectService(id);
    }
  };

  return (
    <section
      id="service-explorer"
      className="relative z-10 w-full py-20 sm:py-28 lg:py-36 bg-[#070707] border-b border-white/[0.08] overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/3 w-[650px] h-[650px] rounded-full blur-[240px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] font-mono font-semibold tracking-[0.24em] text-[#C6A56B] uppercase">
              02 / EXPLORE OUR EXPERTISE
            </span>
          </div>
          <h2 className="font-sans text-[36px] sm:text-[48px] lg:text-[60px] font-light tracking-[-0.035em] text-[#F5F3ED] leading-[1.06]">
            Different challenges. <br />
            <span className="text-[#C6A56B] font-medium">The right solutions.</span>
          </h2>
        </div>

        {/* Interactive Explorer Container */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Numbered Service Navigation (4 Cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-2">
            <div className="pb-3 border-b border-white/[0.08] mb-4 flex items-center justify-between">
              <span className="text-xs font-mono font-bold tracking-widest text-[#A8A49B] uppercase">
                SERVICES MATRIX ({SERVICES_CATALOG.length})
              </span>
              <span className="text-[11px] font-mono text-[#C6A56B]">SELECT SPEC</span>
            </div>

            <div className="space-y-2" role="tablist" aria-label="Capabilities Navigation">
              {SERVICES_CATALOG.map((service) => {
                const isSelected = service.id === activeId;
                return (
                  <button
                    key={service.id}
                    role="tab"
                    id={`tab-${service.id}`}
                    aria-selected={isSelected}
                    aria-controls={`panel-${service.id}`}
                    onClick={() => handleSelect(service.id)}
                    className={`group w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-center justify-between focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A56B] ${
                      isSelected
                        ? "bg-[#10131c] border-[#C6A56B]/60 shadow-[0_0_25px_rgba(198,165,107,0.12)]"
                        : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-sm sm:text-base font-mono transition-colors ${
                          isSelected
                            ? "text-[#C6A56B] font-semibold"
                            : "text-[#A8A49B] group-hover:text-white"
                        }`}
                      >
                        {service.step}
                      </span>
                      <div>
                        <p
                          className={`font-sans text-sm sm:text-base transition-colors ${
                            isSelected
                              ? "text-[#F5F3ED] font-medium"
                              : "text-[#A8A49B] group-hover:text-white"
                          }`}
                        >
                          {service.navTitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B] animate-pulse" />
                      )}
                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isSelected
                            ? "text-[#C6A56B] translate-x-0"
                            : "text-white/20 -translate-x-1 group-hover:translate-x-0 group-hover:text-white/60"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Service Detailed Presentation (8 Cols) */}
          <div
            className="lg:col-span-8"
            role="tabpanel"
            id={`panel-${activeService.id}`}
            aria-labelledby={`tab-${activeService.id}`}
          >
            <div className="rounded-3xl border border-white/[0.12] bg-[#090b10] p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-500">
              
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-mono font-light text-[#C6A56B]">
                    {activeService.step}
                  </span>
                  <div className="h-6 w-px bg-white/20" />
                  <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C6A56B] uppercase">
                    {`SERVICE ${activeService.step} // ${activeService.navTitle}`}
                  </span>
                </div>

                <span className="text-xs font-mono text-[#A8A49B]/80 tracking-widest uppercase px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06]">
                  {activeService.badge}
                </span>
              </div>

              {/* Service Headline */}
              <h3 className="font-sans text-[28px] sm:text-[36px] font-normal tracking-tight text-[#F5F3ED] mb-4 leading-tight">
                {activeService.headline}
              </h3>

              {/* Business-Focused Explanation */}
              <p className="text-base sm:text-lg text-[#A8A49B] leading-relaxed mb-8">
                {activeService.description}
              </p>

              {/* Dynamic Service Visual */}
              <div className="mb-10">
                {activeService.id === "websites-applications" && <WebsitesVisual />}
                {activeService.id === "ecommerce-development" && <EcommerceVisual />}
                {activeService.id === "custom-software" && <CustomSoftwareVisual />}
                {activeService.id === "business-systems" && <BusinessSystemsVisual />}
                {activeService.id === "automation-ai" && <AutomationVisual />}
                {activeService.id === "ui-ux-design" && <DesignVisual />}
              </div>

              {/* Deliverables & Client Benefits Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pt-8 border-t border-white/[0.08]">
                
                {/* Column 1: What We Build */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Layers className="w-4 h-4 text-[#C6A56B]" />
                    <h4 className="text-xs font-mono font-bold tracking-widest text-[#F5F3ED] uppercase">
                      COMMON SOLUTIONS & DELIVERABLES
                    </h4>
                  </div>
                  <ul className="space-y-2.5">
                    {activeService.whatWeBuild.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#A8A49B]">
                        <CheckCircle2 className="w-4 h-4 text-[#C6A56B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: What Matters / Why It Works */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-[#C6A56B]" />
                    <h4 className="text-xs font-mono font-bold tracking-widest text-[#F5F3ED] uppercase">
                      WHAT MATTERS / VALUE DELIVERED
                    </h4>
                  </div>
                  <ul className="space-y-2.5">
                    {activeService.whatMatters.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#A8A49B]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B] shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Conversion CTA Footer */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-xs font-mono text-[#A8A49B]">
                  <span>Ready to build or scale? We start with a zero-obligation discussion.</span>
                </div>
                <Link
                  href={activeService.ctaHref}
                  className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C6A56B] hover:bg-[#d8b87e] text-[#070707] font-sans font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(198,165,107,0.2)] hover:-translate-y-0.5"
                >
                  <span>{activeService.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
