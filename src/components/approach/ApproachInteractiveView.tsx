"use client";

import React from "react";
import { ApproachHero } from "./ApproachHero";
import { ApproachBigPicture } from "./ApproachBigPicture";
import { ApproachProcess } from "./ApproachProcess";
import { ApproachCollaboration } from "./ApproachCollaboration";
import { ApproachComplexityToClarity } from "./ApproachComplexityToClarity";
import { ApproachStandards } from "./ApproachStandards";
import { ApproachExperience } from "./ApproachExperience";
import { ApproachRealWork } from "./ApproachRealWork";
import { ApproachFaq } from "./ApproachFaq";
import { ApproachContactCta } from "./ApproachContactCta";

/**
 * SASVALE Engineering Approach — Complete Page Architecture
 * 
 * 10-Section Redesigned Experience:
 * 01. Hero — Great digital products don't happen by accident.
 * 02. The Big Picture — From the first question to what comes next. (5-phase sequence)
 * 03. Signature Interactive Process — One clear process. Better decisions at every stage.
 * 04. Working Together — Your knowledge. Our expertise. One shared direction.
 * 05. From Complexity to Clarity — Complex problems. Clearer solutions.
 * 06. Quality Is Built In — Good engineering should be felt, not explained away.
 * 07. What Delivery Looks Like — Clarity throughout the project. Not just at the end.
 * 08. Real Work, Real Application — Different challenges. The same commitment to doing things properly.
 * 09. Frequently Asked Questions — A few things worth knowing.
 * 10. Final CTA — A better digital product starts with a better conversation.
 */
export default function ApproachInteractiveView() {
  return (
    <article className="relative w-full min-h-screen bg-[#070707] text-[#F5F3ED] overflow-hidden font-sans selection:bg-[#C6A56B] selection:text-[#070707]">
      {/* SECTION 01: Hero */}
      <ApproachHero />

      {/* SECTION 02: The Big Picture (5-Phase Sequence) */}
      <ApproachBigPicture />

      {/* SECTION 03: Signature Interactive Process (Sticky Desktop + Accessible Mobile) */}
      <ApproachProcess />

      {/* SECTION 04: Working Together (Your Side / Our Side) */}
      <ApproachCollaboration />

      {/* SECTION 05: From Complexity to Clarity (Before / After Workflow) */}
      <ApproachComplexityToClarity />

      {/* SECTION 06: Quality Is Built In (4 Pragmatic Principles) */}
      <ApproachStandards />

      {/* SECTION 07: What Delivery Looks Like (4 Staggered Experience Blocks) */}
      <ApproachExperience />

      {/* SECTION 08: Real Work, Real Application (Ethletia & Wind Deflectors) */}
      <ApproachRealWork />

      {/* SECTION 09: Frequently Asked Questions (Accessible Accordion) */}
      <ApproachFaq />

      {/* SECTION 10: Final CTA */}
      <ApproachContactCta />
    </article>
  );
}
