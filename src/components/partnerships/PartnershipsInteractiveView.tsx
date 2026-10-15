"use client";

import React from "react";
import { PartnershipsHero } from "./PartnershipsHero";
import { PartnershipsCollaboration } from "./PartnershipsCollaboration";
import { PartnershipsModels } from "./PartnershipsModels";
import { PartnershipsComparison } from "./PartnershipsComparison";
import { PartnershipsExperience } from "./PartnershipsExperience";
import { PartnershipsGettingStarted } from "./PartnershipsGettingStarted";
import { PartnershipsSelectedWork } from "./PartnershipsSelectedWork";
import { PartnershipsFaq } from "./PartnershipsFaq";
import { PartnershipsContactCta } from "./PartnershipsContactCta";

/**
 * SASVALE Studio Partnerships — Complete Page Architecture
 * 
 * 09-Section Redesigned Experience:
 * 01. Hero — Your ambition. Our expertise. One shared direction.
 * 02. Built Around Your Business — More than a service provider. A team invested in the work.
 * 03. Ways to Work Together — Different needs. Different ways to build together. (4 Models)
 * 04. Find Your Fit — Not sure where to start? Find the right fit. (Comparison Table & Cards)
 * 05. The Partnership Experience — Clarity from day one. Collaboration throughout.
 * 06. Getting Started — From the first conversation to a clear next step. (4 Onboarding Stages)
 * 07. The Work Behind the Words — Built through collaboration. Made for real-world use.
 * 08. Partnership FAQ — The important questions, answered clearly. (8 Questions)
 * 09. Final CTA — The right partnership changes what's possible.
 */
export default function PartnershipsInteractiveView() {
  return (
    <article className="relative w-full min-h-screen bg-[#070707] text-[#F5F3ED] overflow-hidden font-sans selection:bg-[#C6A56B] selection:text-[#070707]">
      {/* SECTION 01: Hero */}
      <PartnershipsHero />

      {/* SECTION 02: Built Around Your Business (Collaboration Ethos) */}
      <PartnershipsCollaboration />

      {/* SECTION 03: Ways to Work Together (4 Engagement Models) */}
      <PartnershipsModels />

      {/* SECTION 04: Find Your Fit (Comparison Matrix) */}
      <PartnershipsComparison />

      {/* SECTION 05: The Partnership Experience (4 Editorial Blocks) */}
      <PartnershipsExperience />

      {/* SECTION 06: Getting Started (Onboarding Timeline) */}
      <PartnershipsGettingStarted />

      {/* SECTION 07: The Work Behind the Words (Ethletia, Wind Deflectors, EdSchol) */}
      <PartnershipsSelectedWork />

      {/* SECTION 08: Partnership FAQ (8 Accessible Accordion Items) */}
      <PartnershipsFaq />

      {/* SECTION 09: Final CTA */}
      <PartnershipsContactCta />
    </article>
  );
}
