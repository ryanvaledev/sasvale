"use client";

import React, { useState, useEffect, useRef } from "react";

interface IndustrySector {
  id: string;
  step: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  metric: string;
  accentColor: string;
  vectorType: "ecommerce" | "education" | "healthcare" | "fitness" | "automotive" | "operations" | "digital-products";
}

const SECTORS: IndustrySector[] = [
  {
    id: "ecommerce",
    step: "01",
    category: "E-COMMERCE · RETAIL",
    categoryColor: "text-[#C6A56B]",
    title: "E-commerce & Retail",
    description:
      "Digital commerce experiences built around product discovery, clear navigation, customer journeys, and online purchasing.",
    metric: "COMMERCE SYSTEMS",
    accentColor: "#C6A56B",
    vectorType: "ecommerce",
  },
  {
    id: "education",
    step: "02",
    category: "EDUCATION · TRAINING",
    categoryColor: "text-[#C6A56B]",
    title: "Education & LMS",
    description:
      "Learning platforms and education systems that bring courses, students, attendance, fees, and day-to-day workflows into one connected experience.",
    metric: "LEARNING SYSTEMS",
    accentColor: "#C6A56B",
    vectorType: "education",
  },
  {
    id: "healthcare",
    step: "03",
    category: "HEALTHCARE · DENTAL",
    categoryColor: "text-[#C6A56B]",
    title: "Healthcare & Dental",
    description:
      "Digital systems for clinics and healthcare businesses, including patient workflows, appointments, records, and operational management.",
    metric: "CLINIC SYSTEMS",
    accentColor: "#C6A56B",
    vectorType: "healthcare",
  },
  {
    id: "fitness",
    step: "04",
    category: "FITNESS · WELLNESS",
    categoryColor: "text-[#C6A56B]",
    title: "Gyms & Fitness",
    description:
      "Management systems for gyms and fitness businesses, helping organize memberships, attendance, schedules, payments, and day-to-day operations.",
    metric: "MANAGEMENT SYSTEMS",
    accentColor: "#C6A56B",
    vectorType: "fitness",
  },
  {
    id: "automotive",
    step: "05",
    category: "AUTOMOTIVE · E-COMMERCE",
    categoryColor: "text-[#C6A56B]",
    title: "Automotive",
    description:
      "Digital commerce experiences for automotive businesses, designed around product discovery, customer decisions, and online sales.",
    metric: "AUTOMOTIVE COMMERCE",
    accentColor: "#C6A56B",
    vectorType: "automotive",
  },
  {
    id: "operations",
    step: "06",
    category: "BUSINESS · OPERATIONS",
    categoryColor: "text-[#C6A56B]",
    title: "Business Operations",
    description:
      "Custom software and connected workflows that help businesses manage important processes, information, and operations in one place.",
    metric: "BUSINESS SYSTEMS",
    accentColor: "#C6A56B",
    vectorType: "operations",
  },
  {
    id: "digital-products",
    step: "07",
    category: "DIGITAL PRODUCTS · SERVICES",
    categoryColor: "text-[#C6A56B]",
    title: "Digital Products & Services",
    description:
      "Websites, platforms, booking experiences, and custom software built around the way a business actually works.",
    metric: "PRODUCT ENGINEERING",
    accentColor: "#C6A56B",
    vectorType: "digital-products",
  },
];

export default function IndustriesHorizonExperience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const total = SECTORS.length;
  const current = SECTORS[activeIdx];

  const goToSlide = (idx: number) => {
    setActiveIdx(idx);
  };

  const handleNext = () => {
    goToSlide((activeIdx + 1) % total);
  };

  const handlePrev = () => {
    goToSlide((activeIdx - 1 + total) % total);
  };

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative w-full py-14 sm:py-16 lg:py-20 bg-[#05070c] border-t border-white/[0.08] overflow-hidden"
      aria-label="Industries We Transform Horizon Experience"
    >
      {/* Blueprint Grid Canvas (SASVALE Technical Grid) */}
        <div 
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(198,165,107,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(198,165,107,0.035)_1px,transparent_1px)] bg-[size:44px_44px]"
          aria-hidden="true"
        />
        
        {/* Subtle Horizontal & Vertical Measurement Lines */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute top-[22%] left-0 right-0 h-px border-b border-white/[0.035]" />
          <div className="absolute bottom-[16%] left-0 right-0 h-px border-b border-white/[0.035]" />
          <div className="absolute top-0 bottom-0 left-[50%] w-px border-r border-white/[0.02] hidden lg:block" />
          {/* Micro Coordinate Markers */}
          <span className="absolute top-8 left-8 text-[9px] font-mono tracking-widest text-[#C6A56B]/30 uppercase select-none">GRID // 44.0.0</span>
          <span className="absolute top-8 right-8 text-[9px] font-mono tracking-widest text-[#C6A56B]/30 uppercase select-none">+ LAT // 01.SECT</span>
        </div>

        {/* Dual Radial Ambient Backglows */}
        <div
          className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-25 transition-all duration-700 bg-radial from-[#C6A56B]/[0.18] via-[#C6A56B]/[0.04] to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-10 left-12 w-[420px] h-[420px] rounded-full blur-[160px] opacity-20 bg-[#3B82F6]/[0.06]"
          aria-hidden="true"
        />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 xl:pr-16 2xl:pr-12 w-full relative z-10 flex-1 flex flex-col justify-between">
          
          {/* Top Header Row: Eyebrow + Progress Line + Step Counter */}
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/[0.08] mb-3 sm:mb-4 xl:mb-4 2xl:mb-8">
            <div className="flex items-center gap-6 sm:gap-10">
              <span className="text-[11px] sm:text-[12px] font-sans font-bold uppercase tracking-[0.24em] text-slate-300">
                INDUSTRIES WE TRANSFORM
              </span>

              {/* Step Selector Pills */}
              <div className="hidden md:flex items-center gap-2">
                {SECTORS.map((sec, i) => (
                  <button
                    key={sec.id}
                    onClick={() => goToSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === activeIdx
                        ? "w-10 bg-[#C6A56B] shadow-sm shadow-[#C6A56B]/30"
                        : "w-3 bg-white/20 hover:bg-white/50"
                    }`}
                    aria-label={`Go to ${sec.title}`}
                  />
                ))}
              </div>
            </div>

            {/* Step Counter & Arrow Controls */}
            <div className="flex items-center gap-4">
              <div className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-slate-400 flex items-center gap-2">
                <span className="text-white font-bold">{current.step}</span>
                <span>/</span>
                <span>07</span>
              </div>

              <div className="flex items-center gap-1.5 ml-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous industry"
                  className="w-8 h-8 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center text-white transition-all hover:border-[#C6A56B] hover:bg-white/10 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next industry"
                  className="w-8 h-8 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center text-white transition-all hover:border-[#C6A56B] hover:bg-white/10 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 2-Column Split Stage: Left Narrative vs. Right Blueprint HUD Art with Smooth Natural Transition */}
          <div key={current.id} className="animate-card-enter grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center flex-1 my-auto">
            
            {/* Left Column: Sector Narrative & Real Solutions */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Sector Eyebrow Badge */}
              <div className="mb-2 sm:mb-3">
                <span
                  className={`text-xs font-sans font-bold uppercase tracking-[0.24em] ${current.categoryColor}`}
                >
                  {current.category}
                </span>
              </div>

              {/* Massive Display Title (Responsive Typography) */}
              <h3 className="font-display text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] 2xl:text-[76px] font-bold text-white tracking-tight leading-[1.06] mb-3 sm:mb-4">
                {current.title}
              </h3>

              {/* Narrative Body Copy */}
              <p className="text-sm sm:text-base xl:text-lg text-slate-300 leading-relaxed max-w-xl mb-4 sm:mb-6 font-normal line-clamp-3 sm:line-clamp-4">
                {current.description}
              </p>

              {/* Category Descriptor Capsule */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/12 self-start shadow-sm">
                <span
                  className="w-2 h-2 rounded-full animate-ping bg-[#C6A56B]"
                />
                <span className="text-xs sm:text-sm font-sans font-medium text-slate-200 tracking-tight">
                  {current.metric}
                </span>
              </div>
            </div>

            {/* Right Column: Technical Blueprint Vector HUD Line Art */}
            <div className="lg:col-span-6 flex items-center justify-center relative min-h-[220px] sm:min-h-[260px] xl:min-h-[280px] 2xl:min-h-[460px]">
              {/* Warm interface illumination backglow */}
              <div 
                className="pointer-events-none absolute w-[360px] h-[360px] rounded-full bg-radial from-[#C6A56B]/[0.12] via-[#C6A56B]/[0.02] to-transparent blur-2xl" 
                aria-hidden="true" 
              />
              
              {/* 1. E-COMMERCE & RETAIL: Product Discovery & Checkout Flow */}
              {current.vectorType === "ecommerce" && (
                <div className="relative w-full max-w-[280px] sm:max-w-[340px] xl:max-w-[380px] 2xl:max-w-[440px] aspect-square flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    {/* Reticle Brackets */}
                    <path d="M 80 120 H 60 V 90 H 90" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 320 120 H 340 V 90 H 310" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 80 280 H 60 V 310 H 90" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 320 280 H 340 V 310 H 310" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />

                    {/* Top Right Tag */}
                    <g transform="translate(260, 75)">
                      <rect width="80" height="24" rx="6" fill="#121824" stroke="#C6A56B" strokeWidth="1" />
                      <text x="40" y="16" fill="#F3F0E8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">CHECKOUT</text>
                    </g>

                    {/* Product Card Wireframe */}
                    <rect x="110" y="120" width="150" height="175" rx="10" fill="#0b0b0b" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                    
                    {/* Product Image Area */}
                    <rect x="122" y="132" width="126" height="85" rx="6" fill="#121824" stroke="#C6A56B" strokeWidth="1" strokeOpacity="0.4" />
                    <path d="M 165 174 L 185 154 L 205 174" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="165" cy="155" r="4" fill="#C6A56B" />

                    {/* Product Details Lines */}
                    <rect x="122" y="228" width="80" height="8" rx="2" fill="#F3F0E8" fillOpacity="0.7" />
                    <rect x="122" y="242" width="45" height="18" rx="4" fill="#C6A56B" fillOpacity="0.15" stroke="#C6A56B" strokeWidth="1" />
                    <text x="144" y="255" fill="#C6A56B" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">BUY</text>

                    {/* Add to Cart Action */}
                    <circle cx="230" cy="251" r="11" fill="#C6A56B" />
                    <path d="M 230 246 V 256 M 225 251 H 235" stroke="#0b0b0b" strokeWidth="2" strokeLinecap="round" />

                    {/* Connected Shopping Bag Icon */}
                    <g transform="translate(285, 195)">
                      <rect width="36" height="42" rx="4" fill="#121824" stroke="#C6A56B" strokeWidth="1.5" />
                      <path d="M 10 12 C 10 4, 26 4, 26 12" stroke="#C6A56B" strokeWidth="1.5" fill="none" />
                      <circle cx="18" cy="26" r="3" fill="#C6A56B" />
                    </g>
                    <path d="M 260 251 C 280 251, 280 220, 285 220" stroke="#C6A56B" strokeWidth="1.5" strokeDasharray="3 3" />
                  </svg>
                </div>
              )}

              {/* 2. EDUCATION & LMS: Course Structure & Learning Flow */}
              {current.vectorType === "education" && (
                <div className="relative w-full max-w-[280px] sm:max-w-[340px] xl:max-w-[380px] 2xl:max-w-[440px] aspect-square flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    {/* Reticle Brackets */}
                    <path d="M 80 120 H 60 V 90 H 90" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 320 120 H 340 V 90 H 310" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 80 280 H 60 V 310 H 90" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 320 280 H 340 V 310 H 310" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />

                    {/* Top Right Tag */}
                    <g transform="translate(250, 75)">
                      <rect width="90" height="24" rx="6" fill="#121824" stroke="#C6A56B" strokeWidth="1" />
                      <text x="45" y="16" fill="#F3F0E8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">LMS PORTAL</text>
                    </g>

                    {/* Learner Avatar Node */}
                    <g transform="translate(75, 140)">
                      <circle cx="20" cy="14" r="10" stroke="#C6A56B" strokeWidth="1.5" fill="#121824" />
                      <path d="M 6 36 C 6 26, 12 24, 20 24 C 28 24, 34 26, 34 36" stroke="#C6A56B" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="20" cy="20" r="28" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />
                    </g>

                    {/* Module 1 (Active Lesson) */}
                    <g transform="translate(145, 125)">
                      <rect width="180" height="42" rx="8" fill="#121824" stroke="#C6A56B" strokeWidth="1.5" />
                      <polygon points="18,21 12,16 12,26" fill="#C6A56B" />
                      <rect x="30" y="14" width="70" height="6" rx="2" fill="#F3F0E8" />
                      <rect x="30" y="24" width="135" height="4" rx="2" fill="rgba(255,255,255,0.15)" />
                      <rect x="30" y="24" width="90" height="4" rx="2" fill="#C6A56B" />
                    </g>

                    {/* Module 2 (Completed) */}
                    <g transform="translate(145, 180)">
                      <rect width="180" height="40" rx="8" fill="#0b0b0b" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                      <circle cx="16" cy="20" r="7" stroke="#C6A56B" strokeWidth="1.5" />
                      <path d="M 13 20 L 15 22 L 19 18" stroke="#C6A56B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="30" y="17" width="90" height="6" rx="2" fill="#A8A49B" />
                    </g>

                    {/* Module 3 (Fees & Attendance) */}
                    <g transform="translate(145, 232)">
                      <rect width="180" height="40" rx="8" fill="#0b0b0b" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                      <rect x="10" y="14" width="12" height="12" rx="2" stroke="#C6A56B" strokeWidth="1.5" />
                      <rect x="30" y="17" width="110" height="6" rx="2" fill="#A8A49B" />
                    </g>

                    {/* Connecting Vertical Progress Spine */}
                    <line x1="135" y1="145" x2="135" y2="252" stroke="#C6A56B" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="135" cy="145" r="3.5" fill="#C6A56B" />
                  </svg>
                </div>
              )}

              {/* 3. HEALTHCARE & DENTAL: Clinic Workflow & Scheduling */}
              {current.vectorType === "healthcare" && (
                <div className="relative w-full max-w-[280px] sm:max-w-[340px] xl:max-w-[380px] 2xl:max-w-[440px] aspect-square flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    {/* Reticle Brackets */}
                    <path d="M 80 120 H 60 V 90 H 90" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 320 120 H 340 V 90 H 310" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 80 280 H 60 V 310 H 90" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 320 280 H 340 V 310 H 310" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />

                    {/* Medical Cross Symbol at Top Right */}
                    <g transform="translate(305, 75)">
                      <rect x="10" y="0" width="8" height="26" rx="2" fill="#C6A56B" />
                      <rect x="1" y="9" width="26" height="8" rx="2" fill="#C6A56B" />
                    </g>

                    {/* Clinic Schedule Board */}
                    <rect x="80" y="120" width="240" height="175" rx="10" fill="#0b0b0b" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                    <line x1="80" y1="160" x2="320" y2="160" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    
                    <text x="100" y="146" fill="#A8A49B" fontSize="10" fontWeight="bold" fontFamily="sans-serif">PATIENT APPOINTMENTS</text>
                    <circle cx="300" cy="142" r="3.5" fill="#C6A56B" />

                    {/* Appointment 1 (Active) */}
                    <g transform="translate(95, 172)">
                      <rect width="210" height="34" rx="6" fill="#121824" stroke="#C6A56B" strokeWidth="1.2" />
                      <circle cx="16" cy="17" r="4" fill="#C6A56B" />
                      <text x="28" y="16" fill="#F3F0E8" fontSize="9" fontWeight="bold" fontFamily="sans-serif">09:30 · PATIENT INTAKE</text>
                      <text x="28" y="27" fill="#A8A49B" fontSize="8" fontFamily="sans-serif">CLINICAL RECORDS LINKED</text>
                      <rect x="160" y="10" width="40" height="14" rx="3" fill="#C6A56B" fillOpacity="0.2" stroke="#C6A56B" strokeWidth="0.8" />
                      <text x="180" y="20" fill="#C6A56B" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ACTIVE</text>
                    </g>

                    {/* Appointment 2 */}
                    <g transform="translate(95, 216)">
                      <rect width="210" height="34" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      <circle cx="16" cy="17" r="4" stroke="#A8A49B" strokeWidth="1" />
                      <text x="28" y="16" fill="#F3F0E8" fontSize="9" fontWeight="bold" fontFamily="sans-serif">11:00 · DENTAL CONSULT</text>
                      <text x="28" y="27" fill="#A8A49B" fontSize="8" fontFamily="sans-serif">DR. CHEN · ROOM 04</text>
                      <rect x="148" y="10" width="52" height="14" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
                      <text x="174" y="20" fill="#A8A49B" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">CONFIRMED</text>
                    </g>

                    {/* Schedule Indicator Bar */}
                    <line x1="95" y1="265" x2="305" y2="265" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    <text x="95" y="280" fill="#C6A56B" fontSize="8" fontWeight="600" fontFamily="sans-serif">WORKFLOW INTEGRATED · SECURE RECORDS</text>
                  </svg>
                </div>
              )}

              {/* 4. GYMS & FITNESS: Membership & Class Management */}
              {current.vectorType === "fitness" && (
                <div className="relative w-full max-w-[280px] sm:max-w-[340px] xl:max-w-[380px] 2xl:max-w-[440px] aspect-square flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    {/* Reticle Brackets */}
                    <path d="M 80 120 H 60 V 90 H 90" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 320 120 H 340 V 90 H 310" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 80 280 H 60 V 310 H 90" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 320 280 H 340 V 310 H 310" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />

                    {/* Top Right Tag */}
                    <g transform="translate(250, 75)">
                      <rect width="90" height="24" rx="6" fill="#121824" stroke="#C6A56B" strokeWidth="1" />
                      <text x="45" y="16" fill="#F3F0E8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">GYM SYSTEM</text>
                    </g>

                    {/* Digital Membership Pass (Left) */}
                    <g transform="translate(80, 125)">
                      <rect width="120" height="165" rx="10" fill="#121824" stroke="#C6A56B" strokeWidth="1.5" />
                      <rect x="12" y="14" width="96" height="55" rx="6" fill="#0b0b0b" stroke="rgba(255,255,255,0.1)" />
                      {/* Barcode Lines */}
                      <g fill="#C6A56B">
                        <rect x="22" y="24" width="3" height="35" />
                        <rect x="28" y="24" width="6" height="35" />
                        <rect x="37" y="24" width="2" height="35" />
                        <rect x="42" y="24" width="5" height="35" />
                        <rect x="50" y="24" width="3" height="35" />
                        <rect x="56" y="24" width="7" height="35" />
                        <rect x="66" y="24" width="2" height="35" />
                        <rect x="71" y="24" width="4" height="35" />
                        <rect x="78" y="24" width="6" height="35" />
                        <rect x="87" y="24" width="3" height="35" />
                      </g>
                      <text x="14" y="92" fill="#F3F0E8" fontSize="9" fontWeight="bold" fontFamily="sans-serif">MEMBER PASS</text>
                      <text x="14" y="106" fill="#C6A56B" fontSize="8" fontWeight="600" fontFamily="sans-serif">UNLIMITED ACCESS</text>
                      <line x1="12" y1="120" x2="108" y2="120" stroke="rgba(255,255,255,0.1)" />
                      <text x="14" y="136" fill="#A8A49B" fontSize="8" fontFamily="sans-serif">ATTENDANCE VERIFIED</text>
                      <text x="14" y="150" fill="#F3F0E8" fontSize="8" fontWeight="bold" fontFamily="sans-serif">AUTO-CHECKIN ON</text>
                    </g>

                    {/* Class Schedule List (Right) */}
                    <g transform="translate(215, 125)">
                      {/* Class 1 */}
                      <rect width="105" height="46" rx="6" fill="#0b0b0b" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                      <text x="10" y="18" fill="#F3F0E8" fontSize="9" fontWeight="bold" fontFamily="sans-serif">HIIT STUDIO</text>
                      <text x="10" y="32" fill="#C6A56B" fontSize="8" fontFamily="sans-serif">07:00 · 24/24 FULL</text>
                      <circle cx="92" cy="18" r="3" fill="#C6A56B" />

                      {/* Class 2 */}
                      <g transform="translate(0, 56)">
                        <rect width="105" height="46" rx="6" fill="#121824" stroke="#C6A56B" strokeWidth="1.2" />
                        <text x="10" y="18" fill="#F3F0E8" fontSize="9" fontWeight="bold" fontFamily="sans-serif">YOGA FLOW</text>
                        <text x="10" y="32" fill="#F3F0E8" fontSize="8" fontFamily="sans-serif">18:30 · BOOKED</text>
                        <circle cx="92" cy="18" r="3" fill="#C6A56B" className="animate-ping" />
                      </g>

                      {/* Class 3 */}
                      <g transform="translate(0, 112)">
                        <rect width="105" height="46" rx="6" fill="#0b0b0b" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                        <text x="10" y="18" fill="#A8A49B" fontSize="9" fontWeight="bold" fontFamily="sans-serif">STRENGTH</text>
                        <text x="10" y="32" fill="#A8A49B" fontSize="8" fontFamily="sans-serif">20:00 · OPEN</text>
                      </g>
                    </g>
                  </svg>
                </div>
              )}

              {/* 5. AUTOMOTIVE: Vehicles & Parts Commerce Blueprint */}
              {current.vectorType === "automotive" && (
                <div className="relative w-full max-w-[280px] sm:max-w-[340px] xl:max-w-[380px] 2xl:max-w-[440px] aspect-square flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    {/* Reticle Brackets */}
                    <path d="M 80 120 H 60 V 90 H 90" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 320 120 H 340 V 90 H 310" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 80 280 H 60 V 310 H 90" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 320 280 H 340 V 310 H 310" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />

                    {/* Top Right Tag */}
                    <g transform="translate(250, 75)">
                      <rect width="90" height="24" rx="6" fill="#121824" stroke="#C6A56B" strokeWidth="1" />
                      <text x="45" y="16" fill="#F3F0E8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">FITMENT SYNC</text>
                    </g>

                    {/* Floating Product Fitment Tag */}
                    <g transform="translate(85, 115)">
                      <rect width="135" height="42" rx="6" fill="#121824" stroke="#C6A56B" strokeWidth="1.2" />
                      <text x="10" y="18" fill="#F3F0E8" fontSize="9" fontWeight="bold" fontFamily="sans-serif">WIND DEFLECTOR SET</text>
                      <text x="10" y="32" fill="#C6A56B" fontSize="8" fontWeight="600" fontFamily="sans-serif">VEHICLE VERIFIED · IN STOCK</text>
                    </g>

                    {/* Connector Line from Part to Vehicle Window */}
                    <path d="M 220 136 H 240 V 195" stroke="#C6A56B" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="240" cy="195" r="3.5" fill="#C6A56B" />

                    {/* Sleek Vehicle Wireframe Silhouette */}
                    <path
                      d="M 80 250 H 115 M 165 250 H 265 M 315 250 H 335"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    
                    {/* Vehicle Body Curves */}
                    <path
                      d="M 85 245 C 95 240, 110 235, 130 220 C 160 200, 195 180, 240 180 C 275 180, 305 200, 320 225 C 330 238, 335 245, 335 245"
                      stroke="#C6A56B"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    {/* Cabin Window Outline */}
                    <path
                      d="M 165 215 L 195 188 H 255 L 285 215 Z"
                      stroke="rgba(255,255,255,0.25)"
                      strokeWidth="1.5"
                      fill="#121824"
                      fillOpacity="0.5"
                    />

                    {/* Front & Rear Alloy Wheel Cutouts */}
                    <circle cx="140" cy="250" r="22" stroke="#C6A56B" strokeWidth="2" fill="#0b0b0b" />
                    <circle cx="140" cy="250" r="14" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                    <circle cx="140" cy="250" r="5" fill="#C6A56B" />

                    <circle cx="290" cy="250" r="22" stroke="#C6A56B" strokeWidth="2" fill="#0b0b0b" />
                    <circle cx="290" cy="250" r="14" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                    <circle cx="290" cy="250" r="5" fill="#C6A56B" />

                    {/* Bottom Blueprint Spec */}
                    <text x="85" y="295" fill="#A8A49B" fontSize="9" fontFamily="sans-serif">CATALOG · YEAR/MAKE/MODEL FITMENT ENGINE</text>
                  </svg>
                </div>
              )}

              {/* 6. BUSINESS OPERATIONS: Connected Workflows & Operations */}
              {current.vectorType === "operations" && (
                <div className="relative w-full max-w-[280px] sm:max-w-[340px] xl:max-w-[380px] 2xl:max-w-[440px] aspect-square flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    {/* Reticle Brackets */}
                    <path d="M 80 120 H 60 V 90 H 90" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 320 120 H 340 V 90 H 310" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 80 280 H 60 V 310 H 90" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 320 280 H 340 V 310 H 310" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />

                    {/* Top Right Tag */}
                    <g transform="translate(250, 75)">
                      <rect width="90" height="24" rx="6" fill="#121824" stroke="#C6A56B" strokeWidth="1" />
                      <text x="45" y="16" fill="#F3F0E8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ERP / OPS HUB</text>
                    </g>

                    {/* Center Central Hub */}
                    <g transform="translate(145, 160)">
                      <rect width="110" height="60" rx="10" fill="#121824" stroke="#C6A56B" strokeWidth="2" />
                      <circle cx="20" cy="24" r="4" fill="#C6A56B" />
                      <text x="32" y="27" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">OPERATIONS</text>
                      <text x="20" y="44" fill="#C6A56B" fontSize="8" fontWeight="600" fontFamily="sans-serif">SINGLE SOURCE</text>
                    </g>

                    {/* Top Satellite: INVENTORY */}
                    <g transform="translate(150, 95)">
                      <rect width="100" height="32" rx="6" fill="#0b0b0b" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                      <text x="50" y="20" fill="#F3F0E8" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">INVENTORY</text>
                    </g>
                    <line x1="200" y1="127" x2="200" y2="160" stroke="#C6A56B" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="200" cy="144" r="3" fill="#C6A56B" />

                    {/* Bottom Satellite: FINANCE */}
                    <g transform="translate(150, 252)">
                      <rect width="100" height="32" rx="6" fill="#0b0b0b" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                      <text x="50" y="20" fill="#F3F0E8" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">FINANCE &amp; BILLING</text>
                    </g>
                    <line x1="200" y1="220" x2="200" y2="252" stroke="#C6A56B" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="200" cy="236" r="3" fill="#C6A56B" />

                    {/* Left Satellite: CRM */}
                    <g transform="translate(45, 174)">
                      <rect width="75" height="32" rx="6" fill="#0b0b0b" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                      <text x="37" y="20" fill="#F3F0E8" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">CRM</text>
                    </g>
                    <line x1="120" y1="190" x2="145" y2="190" stroke="#C6A56B" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="132" cy="190" r="3" fill="#C6A56B" />

                    {/* Right Satellite: ORDERS */}
                    <g transform="translate(280, 174)">
                      <rect width="80" height="32" rx="6" fill="#0b0b0b" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                      <text x="40" y="20" fill="#F3F0E8" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ORDERS</text>
                    </g>
                    <line x1="255" y1="190" x2="280" y2="190" stroke="#C6A56B" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="268" cy="190" r="3" fill="#C6A56B" />
                  </svg>
                </div>
              )}

              {/* 7. DIGITAL PRODUCTS & SERVICES: Systems Architecture & Components */}
              {current.vectorType === "digital-products" && (
                <div className="relative w-full max-w-[280px] sm:max-w-[340px] xl:max-w-[380px] 2xl:max-w-[440px] aspect-square flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    {/* Reticle Brackets */}
                    <path d="M 80 120 H 60 V 90 H 90" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 320 120 H 340 V 90 H 310" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 80 280 H 60 V 310 H 90" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 320 280 H 340 V 310 H 310" stroke="#C6A56B" strokeWidth="2" strokeLinecap="round" />

                    {/* Top Right Tag */}
                    <g transform="translate(240, 75)">
                      <rect width="100" height="24" rx="6" fill="#121824" stroke="#C6A56B" strokeWidth="1" />
                      <text x="50" y="16" fill="#F3F0E8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">FULL-STACK</text>
                    </g>

                    {/* Stacked Architecture Layers */}
                    {/* Tier 3: UI & Digital Product */}
                    <g transform="translate(90, 120)">
                      <rect width="220" height="42" rx="8" fill="#121824" stroke="#C6A56B" strokeWidth="1.5" />
                      <circle cx="16" cy="16" r="3" fill="#C6A56B" />
                      <text x="28" y="19" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">TIER 03 · DIGITAL EXPERIENCES</text>
                      <text x="28" y="32" fill="#C6A56B" fontSize="8" fontWeight="600" fontFamily="sans-serif">WEB · APPS · BOOKING PLATFORMS</text>
                    </g>

                    {/* Tier 2: Business Logic & APIs */}
                    <g transform="translate(90, 175)">
                      <rect width="220" height="42" rx="8" fill="#0b0b0b" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                      <circle cx="16" cy="16" r="3" fill="#A8A49B" />
                      <text x="28" y="19" fill="#F3F0E8" fontSize="9" fontWeight="bold" fontFamily="sans-serif">TIER 02 · BUSINESS LOGIC &amp; APIS</text>
                      <text x="28" y="32" fill="#A8A49B" fontSize="8" fontFamily="sans-serif">WORKFLOW ENGINES · CUSTOM SOFTWARE</text>
                    </g>

                    {/* Tier 1: Core Database & Infrastructure */}
                    <g transform="translate(90, 230)">
                      <rect width="220" height="42" rx="8" fill="#0b0b0b" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                      <circle cx="16" cy="16" r="3" fill="#A8A49B" />
                      <text x="28" y="19" fill="#F3F0E8" fontSize="9" fontWeight="bold" fontFamily="sans-serif">TIER 01 · PERSISTENT DATA &amp; CLOUD</text>
                      <text x="28" y="32" fill="#A8A49B" fontSize="8" fontFamily="sans-serif">RELIABLE · SECURE · SCALABLE</text>
                    </g>

                    {/* Vertical Connecting Bus */}
                    <line x1="75" y1="141" x2="75" y2="251" stroke="#C6A56B" strokeWidth="1.5" />
                    <circle cx="75" cy="141" r="3" fill="#C6A56B" />
                    <circle cx="75" cy="196" r="3" fill="#C6A56B" />
                    <circle cx="75" cy="251" r="3" fill="#C6A56B" />
                  </svg>
                </div>
              )}

            </div>
          </div>

          {/* Bottom Cue */}
          <div className="flex items-center justify-center pt-6 mt-6 border-t border-white/[0.06]">
            <div className="flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-[0.2em] text-slate-400/80">
              <span>EXPLORE SECTORS 01–07</span>
            </div>
          </div>

        </div>
      </section>
    );
  }
