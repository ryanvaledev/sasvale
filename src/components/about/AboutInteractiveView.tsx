"use client";

import React from "react";
import { AboutHero } from "./AboutHero";
import { AboutStudio } from "./AboutStudio";
import { AboutPhilosophy } from "./AboutPhilosophy";
import { AboutDifferentiators } from "./AboutDifferentiators";
import { AboutSelectedWork } from "./AboutSelectedWork";
import { AboutPeople } from "./AboutPeople";
import { AboutMindset } from "./AboutMindset";
import { AboutBrandStatement } from "./AboutBrandStatement";
import { AboutContactCta } from "./AboutContactCta";

/**
 * SASVALE Studio Profile — About Page Experience
 * 
 * Completely redesigned architectural editorial experience.
 * Structure:
 * 01. Hero — Independent minds. Serious engineering. Built for what matters.
 * 02. The Studio — Not just a development team. A partner in building what's next.
 * 03. Philosophy — Strategy. Automation. Scale.
 * 04. Differentiators — Less noise. More meaningful work.
 * 05. Selected Work — Ideas are easy. Execution is everything.
 * 06. The People — Good work starts with the right people.
 * 07. Mindset — Thoughtful decisions. Precise execution. (DISCOVER -> DEFINE -> BUILD -> EVOLVE)
 * 08. Signature Brand Statement — We don't build for the sake of building. We build to make things better.
 * 09. Closing Contact CTA — Your next big idea deserves the right team.
 */
export default function AboutInteractiveView() {
  return (
    <article className="relative w-full min-h-screen bg-[#070707] light:bg-[#F3F0E8] text-[#F5F3ED] light:text-[#0B0B0B] transition-colors duration-300 overflow-hidden font-sans selection:bg-[#C6A56B] selection:text-[#070707]">
      {/* SECTION 01: Premium Editorial Hero */}
      <AboutHero />

      {/* SECTION 02: Who We Are (The Studio) */}
      <AboutStudio />

      {/* SECTION 03: The Sasvale Philosophy (Strategy, Automation, Scale) */}
      <AboutPhilosophy />

      {/* SECTION 04: What Makes Us Different */}
      <AboutDifferentiators />

      {/* SECTION 05: Our Work Is Our Proof */}
      <AboutSelectedWork />

      {/* SECTION 06: The People Behind the Work */}
      <AboutPeople />

      {/* SECTION 07: How We Think and Work */}
      <AboutMindset />

      {/* SECTION 08: Signature Brand Statement */}
      <AboutBrandStatement />

      {/* SECTION 09: Final Contact CTA */}
      <AboutContactCta />
    </article>
  );
}
