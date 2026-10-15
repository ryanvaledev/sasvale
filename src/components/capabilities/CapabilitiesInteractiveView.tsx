"use client";

import React, { useState } from "react";
import { CapabilitiesHero } from "./CapabilitiesHero";
import { CapabilitiesAtAGlance } from "./CapabilitiesAtAGlance";
import { CapabilitiesServiceExplorer } from "./CapabilitiesServiceExplorer";
import { CapabilitiesSolutions } from "./CapabilitiesSolutions";
import { CapabilitiesSelectedWork } from "./CapabilitiesSelectedWork";
import { CapabilitiesTechMatrix } from "./CapabilitiesTechMatrix";
import { CapabilitiesDifferentiators } from "./CapabilitiesDifferentiators";
import { CapabilitiesFaq } from "./CapabilitiesFaq";
import { CapabilitiesContactCta } from "./CapabilitiesContactCta";

export default function CapabilitiesInteractiveView() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("websites-applications");

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
  };

  return (
    <article className="relative w-full min-h-screen bg-[#070707] text-[#F5F3ED] overflow-x-hidden selection:bg-[#C6A56B] selection:text-[#070707]">
      {/* SECTION 01: Premium Capabilities Hero */}
      <CapabilitiesHero />

      {/* SECTION 02: Capabilities at a Glance */}
      <CapabilitiesAtAGlance onSelectService={handleSelectService} />

      {/* SECTION 03: Signature Interactive Service Explorer */}
      <CapabilitiesServiceExplorer
        selectedServiceId={selectedServiceId}
        onSelectService={handleSelectService}
      />

      {/* SECTION 04: Solutions for Real Businesses */}
      <CapabilitiesSolutions />

      {/* SECTION 05: Selected Work (Ethletia, Wind Deflectors, EDS, TBS Salon) */}
      <CapabilitiesSelectedWork />

      {/* SECTION 06: Technology & Expertise (4-Category Capability Matrix) */}
      <CapabilitiesTechMatrix />

      {/* SECTION 07: Why Businesses Work With Sasvale */}
      <CapabilitiesDifferentiators />

      {/* SECTION 08: Frequently Asked Questions (Accessible Accordion) */}
      <CapabilitiesFaq />

      {/* SECTION 09: Premium Final CTA */}
      <CapabilitiesContactCta />
    </article>
  );
}
