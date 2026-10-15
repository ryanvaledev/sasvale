"use client";

import React, { useState } from "react";

// ============================================================================
// AREAS WE EXPLORE - PRACTICAL TECHNOLOGY INNOVATION
// Grounded in utility, workflows, and reliable system engineering.
// ============================================================================

interface ExploreArea {
  id: string;
  name: string;
  status: "EXPLORING" | "BUILDING";
  statusColor: string;
  statusBg: string;
  statusBorder: string;
  description: string;
  bullets: string[];
  bottomMetadata: string;
  accentColor: string;
}

const EXPLORE_AREAS: ExploreArea[] = [
  {
    id: "ai-assisted-workflows",
    name: "AI-Assisted Workflows",
    status: "EXPLORING",
    statusColor: "#38bdf8", // Cyan / blue
    statusBg: "rgba(56, 189, 248, 0.08)",
    statusBorder: "rgba(56, 189, 248, 0.25)",
    description:
      "Practical ways to use AI inside business workflows where it can reduce repetitive work, improve access to information, or support better decisions.",
    bullets: [
      "Workflow Assistance",
      "Information Retrieval",
      "Process Support",
    ],
    bottomMetadata: "PRACTICAL AI",
    accentColor: "#38bdf8",
  },
  {
    id: "business-automation",
    name: "Business Automation",
    status: "BUILDING",
    statusColor: "#34d399", // Emerald
    statusBg: "rgba(52, 211, 153, 0.08)",
    statusBorder: "rgba(52, 211, 153, 0.25)",
    description:
      "Turning repetitive business processes into clearer, more reliable digital workflows.",
    bullets: [
      "Workflow Automation",
      "Process Design",
      "System Integrations",
    ],
    bottomMetadata: "AUTOMATION",
    accentColor: "#34d399",
  },
  {
    id: "connected-systems",
    name: "Connected Systems",
    status: "EXPLORING",
    statusColor: "#fbbf24", // Amber
    statusBg: "rgba(251, 191, 36, 0.08)",
    statusBorder: "rgba(251, 191, 36, 0.25)",
    description:
      "Connecting the applications, data, and workflows businesses rely on so information can move between systems more effectively.",
    bullets: [
      "APIs & Integrations",
      "Data Flow",
      "Connected Workflows",
    ],
    bottomMetadata: "SYSTEMS",
    accentColor: "#fbbf24",
  },
  {
    id: "product-engineering",
    name: "Product Engineering",
    status: "BUILDING",
    statusColor: "#c084fc", // Violet
    statusBg: "rgba(192, 132, 252, 0.08)",
    statusBorder: "rgba(192, 132, 252, 0.25)",
    description:
      "Turning product ideas into reliable digital experiences with thoughtful design and practical engineering.",
    bullets: [
      "Product Development",
      "Interface Engineering",
      "Technical Foundations",
    ],
    bottomMetadata: "ENGINEERING",
    accentColor: "#c084fc",
  },
];

// Abstract Vector Diagrams for the 4 Exploration Areas
// 100% abstract, technical, elegant — no fake dashboards or fake metrics
function CardVisual({ id, accentColor }: { id: string; accentColor: string }) {
  if (id === "ai-assisted-workflows") {
    // information → AI assistance → workflow
    return (
      <svg
        viewBox="0 0 280 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-14 select-none opacity-85 group-hover:opacity-100 transition-opacity"
        aria-hidden="true"
      >
        {/* Step 1: Information */}
        <g>
          <rect x="14" y="16" width="34" height="5" rx="2.5" fill={accentColor} fillOpacity="0.3" />
          <rect x="14" y="25" width="44" height="5" rx="2.5" fill={accentColor} fillOpacity="0.6" />
          <rect x="14" y="34" width="28" height="5" rx="2.5" fill={accentColor} fillOpacity="0.3" />
          <text x="32" y="52" textAnchor="middle" fill="#A8A49B" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">
            INFO
          </text>
        </g>

        {/* Connector 1 */}
        <path d="M 68 28 L 112 28" stroke={accentColor} strokeWidth="1.2" strokeDasharray="3 3" />
        <polygon points="110,25 116,28 110,31" fill={accentColor} />

        {/* Step 2: AI Assistance */}
        <g>
          <polygon
            points="140,14 154,28 140,42 126,28"
            stroke={accentColor}
            strokeWidth="1.5"
            fill={accentColor}
            fillOpacity="0.15"
          />
          <circle cx="140" cy="28" r="3.5" fill={accentColor} />
          <text x="140" y="52" textAnchor="middle" fill={accentColor} fontSize="8" fontFamily="monospace" letterSpacing="0.1em">
            AI ASSIST
          </text>
        </g>

        {/* Connector 2 */}
        <path d="M 164 28 L 208 28" stroke={accentColor} strokeWidth="1.2" strokeDasharray="3 3" />
        <polygon points="206,25 212,28 206,31" fill={accentColor} />

        {/* Step 3: Workflow */}
        <g>
          <rect x="220" y="14" width="46" height="26" rx="5" stroke={accentColor} strokeWidth="1.4" fill={accentColor} fillOpacity="0.1" />
          <path d="M 228 28 L 233 33 L 243 23" stroke={accentColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="248" y1="24" x2="258" y2="24" stroke={accentColor} strokeWidth="1.2" strokeOpacity="0.7" />
          <line x1="248" y1="31" x2="254" y2="31" stroke={accentColor} strokeWidth="1.2" strokeOpacity="0.5" />
          <text x="243" y="52" textAnchor="middle" fill="#A8A49B" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">
            WORKFLOW
          </text>
        </g>
      </svg>
    );
  }

  if (id === "business-automation") {
    // process nodes → automated workflow → output
    return (
      <svg
        viewBox="0 0 280 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-14 select-none opacity-85 group-hover:opacity-100 transition-opacity"
        aria-hidden="true"
      >
        {/* Step 1: Process Nodes */}
        <g>
          <circle cx="26" cy="18" r="6" stroke={accentColor} strokeWidth="1.5" fill={accentColor} fillOpacity="0.2" />
          <circle cx="26" cy="38" r="6" stroke={accentColor} strokeWidth="1.5" fill={accentColor} fillOpacity="0.2" />
          <text x="26" y="52" textAnchor="middle" fill="#A8A49B" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">
            NODES
          </text>
        </g>

        {/* Converging Paths */}
        <path d="M 36 18 C 65 18, 80 28, 110 28" stroke={accentColor} strokeWidth="1.2" />
        <path d="M 36 38 C 65 38, 80 28, 110 28" stroke={accentColor} strokeWidth="1.2" />

        {/* Step 2: Automated Workflow Engine */}
        <g>
          <rect x="114" y="15" width="52" height="26" rx="5" stroke={accentColor} strokeWidth="1.4" fill={accentColor} fillOpacity="0.15" />
          <circle cx="140" cy="28" r="6.5" stroke={accentColor} strokeWidth="1.2" strokeDasharray="2.5 2" />
          <circle cx="140" cy="28" r="2.5" fill={accentColor} />
          <text x="140" y="52" textAnchor="middle" fill={accentColor} fontSize="8" fontFamily="monospace" letterSpacing="0.1em">
            PIPELINE
          </text>
        </g>

        {/* Connector */}
        <path d="M 172 28 L 218 28" stroke={accentColor} strokeWidth="1.2" />
        <polygon points="216,25 222,28 216,31" fill={accentColor} />

        {/* Step 3: Structured Output */}
        <g>
          <rect x="226" y="15" width="38" height="26" rx="5" stroke={accentColor} strokeWidth="1.4" fill={accentColor} fillOpacity="0.2" />
          <circle cx="245" cy="28" r="4.5" fill={accentColor} />
          <text x="245" y="52" textAnchor="middle" fill="#A8A49B" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">
            OUTPUT
          </text>
        </g>
      </svg>
    );
  }

  if (id === "connected-systems") {
    // multiple systems / applications connected through a central flow
    return (
      <svg
        viewBox="0 0 280 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-14 select-none opacity-85 group-hover:opacity-100 transition-opacity"
        aria-hidden="true"
      >
        {/* Disparate Sources */}
        <g>
          <rect x="14" y="11" width="40" height="15" rx="3.5" stroke={accentColor} strokeWidth="1.2" fill={accentColor} fillOpacity="0.15" />
          <text x="34" y="22" textAnchor="middle" fill={accentColor} fontSize="7.5" fontFamily="monospace">APP A</text>
          
          <rect x="14" y="32" width="40" height="15" rx="3.5" stroke={accentColor} strokeWidth="1.2" fill={accentColor} fillOpacity="0.15" />
          <text x="34" y="43" textAnchor="middle" fill={accentColor} fontSize="7.5" fontFamily="monospace">APP B</text>
        </g>

        {/* Convergence to Flow Bus */}
        <path d="M 58 18 C 85 18, 98 28, 120 28" stroke={accentColor} strokeWidth="1.2" />
        <path d="M 58 39 C 85 39, 98 28, 120 28" stroke={accentColor} strokeWidth="1.2" />

        {/* Central Flow Hub */}
        <g>
          <circle cx="140" cy="28" r="13" stroke={accentColor} strokeWidth="1.2" strokeDasharray="3 2" fill={accentColor} fillOpacity="0.1" />
          <circle cx="140" cy="28" r="5" fill={accentColor} />
          <text x="140" y="52" textAnchor="middle" fill={accentColor} fontSize="8" fontFamily="monospace" letterSpacing="0.1em">
            CENTRAL FLOW
          </text>
        </g>

        {/* Outgoing Connected Branches */}
        <path d="M 160 28 C 182 28, 195 18, 222 18" stroke={accentColor} strokeWidth="1.2" />
        <path d="M 160 28 C 182 28, 195 39, 222 39" stroke={accentColor} strokeWidth="1.2" />

        {/* Target Systems */}
        <g>
          <rect x="226" y="11" width="40" height="15" rx="3.5" stroke={accentColor} strokeWidth="1.2" fill={accentColor} fillOpacity="0.15" />
          <text x="246" y="22" textAnchor="middle" fill={accentColor} fontSize="7.5" fontFamily="monospace">API</text>

          <rect x="226" y="32" width="40" height="15" rx="3.5" stroke={accentColor} strokeWidth="1.2" fill={accentColor} fillOpacity="0.15" />
          <text x="246" y="43" textAnchor="middle" fill={accentColor} fontSize="7.5" fontFamily="monospace">DATA</text>
        </g>
      </svg>
    );
  }

  // default: product-engineering (interface → system structure → product)
  return (
    <svg
      viewBox="0 0 280 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-14 select-none opacity-85 group-hover:opacity-100 transition-opacity"
      aria-hidden="true"
    >
      {/* Step 1: Interface Wireframe */}
      <g>
        <rect x="14" y="14" width="40" height="27" rx="4" stroke={accentColor} strokeWidth="1.4" fill={accentColor} fillOpacity="0.1" />
        <line x1="18" y1="20" x2="34" y2="20" stroke={accentColor} strokeWidth="1.2" strokeOpacity="0.7" />
        <rect x="18" y="24" width="12" height="12" rx="2" fill={accentColor} fillOpacity="0.35" />
        <rect x="34" y="24" width="16" height="5" rx="1" fill={accentColor} fillOpacity="0.25" />
        <rect x="34" y="31" width="12" height="5" rx="1" fill={accentColor} fillOpacity="0.25" />
        <text x="34" y="52" textAnchor="middle" fill="#A8A49B" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">
          INTERFACE
        </text>
      </g>

      {/* Connector 1 */}
      <path d="M 60 28 L 108 28" stroke={accentColor} strokeWidth="1.2" strokeDasharray="3 3" />
      <polygon points="106,25 112,28 106,31" fill={accentColor} />

      {/* Step 2: System Structure (Layered planes) */}
      <g>
        <path d="M 125 35 L 140 27 L 155 35 L 140 43 Z" stroke={accentColor} strokeWidth="1.2" fill={accentColor} fillOpacity="0.15" />
        <path d="M 125 28 L 140 20 L 155 28 L 140 36 Z" stroke={accentColor} strokeWidth="1.2" fill={accentColor} fillOpacity="0.25" />
        <path d="M 125 21 L 140 13 L 155 21 L 140 29 Z" stroke={accentColor} strokeWidth="1.2" fill={accentColor} fillOpacity="0.4" />
        <text x="140" y="52" textAnchor="middle" fill={accentColor} fontSize="8" fontFamily="monospace" letterSpacing="0.1em">
          STRUCTURE
        </text>
      </g>

      {/* Connector 2 */}
      <path d="M 166 28 L 214 28" stroke={accentColor} strokeWidth="1.2" strokeDasharray="3 3" />
      <polygon points="212,25 218,28 212,31" fill={accentColor} />

      {/* Step 3: Finished Product (Isometric Cube) */}
      <g>
        <polygon points="240,14 252,21 240,28 228,21" stroke={accentColor} strokeWidth="1.2" fill={accentColor} fillOpacity="0.4" />
        <polygon points="228,21 240,28 240,41 228,34" stroke={accentColor} strokeWidth="1.2" fill={accentColor} fillOpacity="0.25" />
        <polygon points="240,28 252,21 252,34 240,41" stroke={accentColor} strokeWidth="1.2" fill={accentColor} fillOpacity="0.35" />
        <circle cx="240" cy="28" r="2" fill="#FFFFFF" />
        <text x="240" y="52" textAnchor="middle" fill="#A8A49B" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">
          PRODUCT
        </text>
      </g>
    </svg>
  );
}

interface TechCategory {
  id: string;
  layer: string;
  title: string;
  accentColor: string;
  glowColor: string;
  items: { name: string; tag: string }[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "web-app",
    layer: "LAYER 01",
    title: "WEB & APPLICATION ENGINEERING",
    accentColor: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.12)",
    items: [
      { name: "Next.js", tag: "Modern web applications" },
      { name: "React", tag: "Interactive product experiences" },
      { name: "TypeScript", tag: "Reliable application development" },
      { name: "Node.js", tag: "Backend services & APIs" },
      { name: "Python", tag: "Automation & application logic" },
    ],
  },
  {
    id: "data-infra",
    layer: "LAYER 02",
    title: "DATA & INFRASTRUCTURE",
    accentColor: "#34d399",
    glowColor: "rgba(52, 211, 153, 0.12)",
    items: [
      { name: "PostgreSQL", tag: "Relational data systems" },
      { name: "Redis", tag: "Caching & application performance" },
      { name: "Cloud Infrastructure", tag: "Deployment & scalable workloads" },
      { name: "Object Storage", tag: "Files & application assets" },
      { name: "CI/CD", tag: "Automated delivery workflows" },
    ],
  },
  {
    id: "integrations",
    layer: "LAYER 03",
    title: "INTEGRATIONS & AUTOMATION",
    accentColor: "#fbbf24",
    glowColor: "rgba(251, 191, 36, 0.12)",
    items: [
      { name: "REST APIs", tag: "Application integrations" },
      { name: "Webhooks", tag: "Event-driven workflows" },
      { name: "Third-Party APIs", tag: "Connected services" },
      { name: "Workflow Automation", tag: "Repeatable business processes" },
      { name: "Data Synchronization", tag: "Connected business systems" },
    ],
  },
  {
    id: "ai-systems",
    layer: "LAYER 04",
    title: "AI & INTELLIGENT SYSTEMS",
    accentColor: "#c084fc",
    glowColor: "rgba(192, 132, 252, 0.12)",
    items: [
      { name: "AI APIs", tag: "AI-assisted applications" },
      { name: "LLM Integrations", tag: "Language-model workflows" },
      { name: "Document Processing", tag: "Structured information extraction" },
      { name: "AI Automation", tag: "AI-assisted business workflows" },
      { name: "Intelligent Search", tag: "Information discovery" },
    ],
  },
];

function TechIcon({ name, accentColor }: { name: string; accentColor: string }) {
  switch (name) {
    case "Next.js":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke={accentColor} strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M8 16V8L16.5 18" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 8V12.5" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "React":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke={accentColor} strokeWidth="1.2" strokeOpacity="0.75" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" stroke={accentColor} strokeWidth="1.2" strokeOpacity="0.75" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" stroke={accentColor} strokeWidth="1.2" strokeOpacity="0.75" />
          <circle cx="12" cy="12" r="1.8" fill={accentColor} />
        </svg>
      );
    case "TypeScript":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="4" stroke={accentColor} strokeWidth="1.4" strokeOpacity="0.5" />
          <path d="M7 8H13M10 8V16" stroke={accentColor} strokeWidth="1.4" strokeLinecap="round" />
          <path d="M14 15.5C14.5 16 15.3 16.5 16.3 16.5C17.5 16.5 18.2 15.8 18.2 14.8C18.2 13.4 16.5 12.8 16.5 11.9C16.5 11.3 17 10.7 17.7 10.7C18.4 10.7 19 11 19.4 11.4" stroke={accentColor} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <path d="M12 2L20.5 7V17L12 22L3.5 17V7L12 2Z" stroke={accentColor} strokeWidth="1.4" strokeOpacity="0.7" />
          <path d="M12 6L17 9V15L12 18L7 15V9L12 6Z" fill={accentColor} fillOpacity="0.15" stroke={accentColor} strokeWidth="1" />
          <circle cx="12" cy="12" r="2" fill={accentColor} />
        </svg>
      );
    case "Python":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <path d="M11.5 3C7.5 3 7.5 4.5 7.5 4.5V6.5H12V8H5C3 8 3 11 3 11V14C3 15.5 4.5 15.5 4.5 15.5H6.5V13.5C6.5 12 7.5 12 7.5 12H12C13.5 12 14.5 11 14.5 9.5V4.5C14.5 3 11.5 3 11.5 3Z" stroke={accentColor} strokeWidth="1.2" fill={accentColor} fillOpacity="0.15" />
          <path d="M12.5 21C16.5 21 16.5 19.5 16.5 19.5V17.5H12V16H19C21 16 21 13 21 13V10C21 8.5 19.5 8.5 19.5 8.5H17.5V10.5C17.5 12 16.5 12 16.5 12H12C10.5 12 9.5 13 9.5 14.5V19.5C9.5 21 12.5 21 12.5 21Z" stroke={accentColor} strokeWidth="1.2" fill={accentColor} fillOpacity="0.25" />
          <circle cx="9.5" cy="5.5" r="1" fill="#FFFFFF" />
          <circle cx="14.5" cy="18.5" r="1" fill="#FFFFFF" />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <ellipse cx="12" cy="6" rx="8" ry="3" stroke={accentColor} strokeWidth="1.4" fill={accentColor} fillOpacity="0.2" />
          <path d="M4 6V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V6" stroke={accentColor} strokeWidth="1.4" />
          <path d="M4 12V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V12" stroke={accentColor} strokeWidth="1.4" />
        </svg>
      );
    case "Redis":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <path d="M12 3L21 7.5L12 12L3 7.5L12 3Z" stroke={accentColor} strokeWidth="1.3" fill={accentColor} fillOpacity="0.2" />
          <path d="M3 12L12 16.5L21 12" stroke={accentColor} strokeWidth="1.3" />
          <path d="M3 16.5L12 21L21 16.5" stroke={accentColor} strokeWidth="1.3" />
          <path d="M13 7L10.5 11.5H13.5L11 16" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Cloud Infrastructure":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <path d="M6.5 18C4 18 2 16 2 13.5C2 11.2 3.6 9.3 5.8 9C6.4 6.2 8.9 4 12 4C15.6 4 18.5 6.7 18.9 10.2C20.7 10.7 22 12.3 22 14.3C22 16.8 19.9 18.8 17.4 18.8H6.5" stroke={accentColor} strokeWidth="1.4" strokeLinecap="round" fill={accentColor} fillOpacity="0.15" />
          <circle cx="9" cy="14" r="1.5" fill={accentColor} />
          <circle cx="15" cy="14" r="1.5" fill={accentColor} />
          <path d="M10.5 14H13.5" stroke={accentColor} strokeWidth="1.2" strokeDasharray="1.5 1.5" />
        </svg>
      );
    case "Object Storage":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <rect x="4" y="4" width="16" height="6" rx="2" stroke={accentColor} strokeWidth="1.4" fill={accentColor} fillOpacity="0.2" />
          <rect x="4" y="14" width="16" height="6" rx="2" stroke={accentColor} strokeWidth="1.4" fill={accentColor} fillOpacity="0.2" />
          <circle cx="8" cy="7" r="1" fill="#FFFFFF" />
          <circle cx="8" cy="17" r="1" fill="#FFFFFF" />
          <path d="M14 7H17M14 17H17" stroke={accentColor} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "CI/CD":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <path d="M6 12C6 9.8 7.8 8 10 8C11.5 8 12.8 8.8 13.5 10L14.5 11.5" stroke={accentColor} strokeWidth="1.4" strokeLinecap="round" />
          <path d="M18 12C18 14.2 16.2 16 14 16C12.5 16 11.2 15.2 10.5 14L9.5 12.5" stroke={accentColor} strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="6" cy="12" r="3" stroke={accentColor} strokeWidth="1.3" />
          <circle cx="18" cy="12" r="3" stroke={accentColor} strokeWidth="1.3" />
          <polygon points="15,10 17,11 15,12.5" fill={accentColor} />
        </svg>
      );
    case "REST APIs":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <rect x="3" y="6" width="7" height="12" rx="2" stroke={accentColor} strokeWidth="1.3" fill={accentColor} fillOpacity="0.15" />
          <rect x="14" y="6" width="7" height="12" rx="2" stroke={accentColor} strokeWidth="1.3" fill={accentColor} fillOpacity="0.15" />
          <path d="M10 9H14M12.5 7.5L14 9L12.5 10.5" stroke={accentColor} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 15H10M11.5 13.5L10 15L11.5 16.5" stroke={accentColor} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Webhooks":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <circle cx="12" cy="12" r="3" stroke={accentColor} strokeWidth="1.5" fill={accentColor} fillOpacity="0.3" />
          <path d="M12 5V2M12 22V19M5 12H2M22 12H19" stroke={accentColor} strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="12" cy="12" r="7" stroke={accentColor} strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.6" />
        </svg>
      );
    case "Third-Party APIs":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <circle cx="6" cy="12" r="3" stroke={accentColor} strokeWidth="1.3" />
          <circle cx="18" cy="7" r="3" stroke={accentColor} strokeWidth="1.3" />
          <circle cx="18" cy="17" r="3" stroke={accentColor} strokeWidth="1.3" />
          <path d="M9 12L15 8M9 12L15 16" stroke={accentColor} strokeWidth="1.3" strokeDasharray="2 2" />
        </svg>
      );
    case "Workflow Automation":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <circle cx="9" cy="9" r="4" stroke={accentColor} strokeWidth="1.3" fill={accentColor} fillOpacity="0.15" />
          <circle cx="15" cy="15" r="4" stroke={accentColor} strokeWidth="1.3" fill={accentColor} fillOpacity="0.25" />
          <path d="M12 5V3M12 21V19M9 1v2M15 21v2M3 9H1M23 15h-2" stroke={accentColor} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "Data Synchronization":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <path d="M21 12A9 9 0 0 0 6 5.3L3 8" stroke={accentColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="3 3 3 8 8 8" stroke={accentColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" stroke={accentColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="21 21 21 16 16 16" stroke={accentColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "AI APIs":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <circle cx="12" cy="12" r="3" fill={accentColor} />
          <circle cx="5" cy="7" r="2" stroke={accentColor} strokeWidth="1.3" />
          <circle cx="19" cy="7" r="2" stroke={accentColor} strokeWidth="1.3" />
          <circle cx="6" cy="17" r="2" stroke={accentColor} strokeWidth="1.3" />
          <circle cx="18" cy="17" r="2" stroke={accentColor} strokeWidth="1.3" />
          <path d="M7 8L10 10.5M17 8L14 10.5M7.5 15.5L10.5 13.5M16.5 15.5L13.5 13.5" stroke={accentColor} strokeWidth="1.2" strokeOpacity="0.7" />
        </svg>
      );
    case "LLM Integrations":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <path d="M12 2L14.5 8.5L21 11L14.5 13.5L12 20L9.5 13.5L3 11L9.5 8.5L12 2Z" stroke={accentColor} strokeWidth="1.4" fill={accentColor} fillOpacity="0.2" strokeLinejoin="round" />
          <path d="M18 16L19 19L22 20L19 21L18 24L17 21L14 20L17 19L18 16Z" fill={accentColor} />
        </svg>
      );
    case "Document Processing":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <path d="M6 2H14L19 7V20C19 21.1 18.1 22 17 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2Z" stroke={accentColor} strokeWidth="1.3" fill={accentColor} fillOpacity="0.1" />
          <path d="M14 2V7H19" stroke={accentColor} strokeWidth="1.3" />
          <line x1="8" y1="12" x2="15" y2="12" stroke={accentColor} strokeWidth="1.3" strokeLinecap="round" />
          <line x1="8" y1="16" x2="13" y2="16" stroke={accentColor} strokeWidth="1.3" strokeLinecap="round" />
          <line x1="4" y1="14" x2="19" y2="14" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.7" />
        </svg>
      );
    case "AI Automation":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <rect x="5" y="6" width="14" height="12" rx="3" stroke={accentColor} strokeWidth="1.4" fill={accentColor} fillOpacity="0.15" />
          <circle cx="9" cy="11" r="1.5" fill={accentColor} />
          <circle cx="15" cy="11" r="1.5" fill={accentColor} />
          <path d="M9 15H15" stroke={accentColor} strokeWidth="1.3" strokeLinecap="round" />
          <path d="M12 2V6M8 3L9 6M16 3L15 6" stroke={accentColor} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "Intelligent Search":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
          <circle cx="10" cy="10" r="6" stroke={accentColor} strokeWidth="1.4" fill={accentColor} fillOpacity="0.15" />
          <path d="M14.5 14.5L20 20" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 10H12M10 8V12" stroke={accentColor} strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="17" cy="6" r="1.5" fill={accentColor} />
        </svg>
      );
    default:
      return (
        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: accentColor }} />
      );
  }
}

export default function AiResearchLabAndStack() {
  const [activeAreaId, setActiveAreaId] = useState<string>("ai-assisted-workflows");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const displayedCategories =
    selectedCategory === "all"
      ? TECH_CATEGORIES
      : TECH_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="areas-we-explore"
      className="relative w-full py-14 sm:py-16 lg:py-20 bg-[#0B0B0B] border-t border-white/[0.08] overflow-hidden select-none"
      aria-label="Areas We Explore & Technology Ecosystem"
    >
      {/* Background Ambient Glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full blur-[180px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 xl:pr-16 2xl:pr-12 relative z-10">
        
        {/* PART 1: AREAS WE EXPLORE */}
        <div className="mb-12 lg:mb-16">
          
          {/* Header */}
          <div className="mb-6 lg:mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B] block mb-2 sm:mb-3">
              AREAS WE EXPLORE
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] 2xl:text-[54px] font-bold text-[#F3F0E8] tracking-tight leading-[1.1] mb-2 sm:mb-3">
              Technology should solve a problem. <br className="hidden sm:inline" />
              <span className="text-[#C6A56B]">Not just prove it can.</span>
            </h2>
            <p className="text-sm sm:text-base font-sans text-[#A8A49B] max-w-2xl leading-relaxed">
              We explore practical applications of software, automation, AI, and connected systems where they can make a real difference.
            </p>
          </div>

          {/* 4 Exploration Cards Grid (Multi-color system) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6">
            {EXPLORE_AREAS.map((item) => {
              const isActive = item.id === activeAreaId;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveAreaId(item.id)}
                  onMouseEnter={() => setActiveAreaId(item.id)}
                  className={`rounded-3xl bg-[#090D14] border p-5 sm:p-6 xl:p-7 flex flex-col justify-between transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) hover:-translate-y-1.5 relative overflow-hidden group cursor-pointer shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_16px_36px_rgba(0,0,0,0.75)] ${
                    isActive
                      ? "border-opacity-60 shadow-xl"
                      : "border-white/[0.12] hover:border-opacity-40"
                  }`}
                  style={{
                    borderColor: isActive ? `${item.accentColor}99` : undefined,
                    boxShadow: isActive ? `0 20px 40px -15px ${item.accentColor}33` : undefined,
                  }}
                >
                  {/* Top-Left Ambient Subtle Glow (Controlled System State) */}
                  <div
                    className="pointer-events-none absolute -top-8 -left-8 w-32 h-32 rounded-full blur-2xl opacity-12 transition-opacity group-hover:opacity-24"
                    style={{ backgroundColor: item.accentColor }}
                    aria-hidden="true"
                  />

                  {/* Bottom-Right Ambient Atmosphere Glow */}
                  <div
                    className="pointer-events-none absolute -bottom-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-15 transition-opacity group-hover:opacity-28"
                    style={{ backgroundColor: item.accentColor }}
                    aria-hidden="true"
                  />

                  {/* Bottom Glowing Border Line */}
                  <div
                    className="pointer-events-none absolute bottom-0 left-4 right-1/4 h-[2px] rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${item.accentColor} 0%, ${item.accentColor} 70%, transparent 100%)`,
                      boxShadow: `0 0 12px 2px ${item.accentColor}33`,
                    }}
                    aria-hidden="true"
                  />

                  <div>
                    {/* Status Pill Badge */}
                    <div className="flex items-center justify-between mb-5 relative z-10">
                      <span
                        className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border inline-flex items-center gap-1.5"
                        style={{
                          color: item.statusColor,
                          borderColor: item.statusBorder,
                          backgroundColor: item.statusBg,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: item.statusColor }}
                        />
                        {item.status}
                      </span>
                    </div>

                    {/* Category / Card Title */}
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#F3F0E8] mb-3 group-hover:text-white transition-colors relative z-10">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[#A8A49B] text-xs sm:text-sm font-sans leading-relaxed mb-5 relative z-10">
                      {item.description}
                    </p>

                    {/* Abstract Technical Schematic Vector */}
                    <div className="relative z-10 mb-5 p-2 rounded-2xl bg-black/40 border border-white/[0.06] group-hover:border-white/[0.12] transition-colors">
                      <CardVisual id={item.id} accentColor={item.accentColor} />
                    </div>

                    {/* Bullet Points */}
                    <div className="space-y-2 relative z-10 mb-6">
                      {item.bullets.map((bullet, bi) => (
                        <div
                          key={bi}
                          className="text-[12px] font-sans font-medium text-[#D1CEBE] flex items-center gap-2"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: item.accentColor }}
                          />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Metadata Chip */}
                  <div className="pt-4 border-t border-white/[0.08] relative z-10 flex items-center justify-between">
                    <span
                      className="text-[11px] font-mono font-bold uppercase tracking-[0.2em]"
                      style={{ color: item.accentColor }}
                    >
                      {item.bottomMetadata}
                    </span>
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: item.accentColor }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 2: TECHNOLOGY WE WORK WITH */}
        <div className="relative pt-10 sm:pt-12 border-t border-white/[0.08]">
          {/* Subtle Shared Atmospheric Glow Behind Bento Grid */}
          <div 
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[520px] rounded-full blur-[170px] opacity-[0.06] bg-radial from-[#C6A56B] via-[#38bdf8] to-transparent" 
            aria-hidden="true" 
          />
          
          {/* Header & Architecture HUD */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 lg:mb-8">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B] block mb-2 sm:mb-3">
                TECHNOLOGY WE WORK WITH
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] 2xl:text-[54px] font-bold text-[#F3F0E8] tracking-tight leading-[1.1] mb-2 sm:mb-3">
                The tools behind <br className="hidden sm:inline" />
                <span className="text-[#C6A56B]">the work.</span>
              </h2>
              <p className="text-sm sm:text-base font-sans text-[#A8A49B] max-w-2xl leading-relaxed">
                We choose technologies based on the product, the problem, and the systems around it — not simply because they are popular.
              </p>
            </div>

            {/* Architecture Telemetry Indicator */}
            <div className="flex items-center gap-3 self-start lg:self-end px-4 py-2.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34d399] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34d399]" />
              </span>
              <div className="flex items-center gap-2 text-[11px] font-mono font-medium tracking-[0.16em]">
                <span className="text-[#A8A49B]">PROJECT-LED</span>
                <span className="text-white/20">/</span>
                <span className="text-[#C6A56B]">TECHNOLOGY CHOICE</span>
              </div>
            </div>
          </div>

          {/* Interactive Discipline Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar scroll-smooth">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer flex-shrink-0 ${
                selectedCategory === "all"
                  ? "bg-white/[0.1] light:bg-black/[0.08] text-white light:text-[#0B0B0B] border border-white/30 light:border-black/20 shadow-[0_0_20px_rgba(255,255,255,0.08)] light:shadow-sm"
                  : "bg-white/[0.02] light:bg-black/[0.02] text-[#A8A49B] light:text-[#5F5B54] border border-white/[0.06] light:border-black/[0.08] hover:border-white/20 light:hover:border-black/20 hover:text-white light:hover:text-black"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" />
              <span>ALL DISCIPLINES</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/10 light:bg-black/10 text-[#D1CEBE] light:text-[#5F5B54]">20</span>
            </button>

            {TECH_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(isSelected ? "all" : cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer flex-shrink-0 ${
                    isSelected
                      ? "text-white light:text-[#0B0B0B] border shadow-lg"
                      : "bg-white/[0.02] light:bg-black/[0.02] text-[#A8A49B] light:text-[#5F5B54] border border-white/[0.06] light:border-black/[0.08] hover:border-white/20 light:hover:border-black/20 hover:text-white light:hover:text-black"
                  }`}
                  style={{
                    backgroundColor: isSelected ? `${cat.accentColor}18` : undefined,
                    borderColor: isSelected ? `${cat.accentColor}66` : undefined,
                    boxShadow: isSelected ? `0 0 25px -5px ${cat.accentColor}33` : undefined,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: cat.accentColor }}
                  />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Modern Layout: Bento Architecture Matrix */}
          <div
            className={`grid gap-6 sm:gap-7 transition-all duration-500 ${
              selectedCategory === "all"
                ? "grid-cols-1 lg:grid-cols-2"
                : "grid-cols-1 max-w-4xl mx-auto"
            }`}
          >
            {displayedCategories.map((cat) => (
              <div
                key={cat.id}
                className="rounded-3xl bg-[#090D14] light:bg-[#FFFFFF] border border-white/[0.08] light:border-black/[0.08] hover:border-white/[0.22] light:hover:border-black/[0.18] transition-all duration-500 p-5 sm:p-7 relative overflow-hidden group shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_18px_40px_rgba(0,0,0,0.6)] light:shadow-[0_12px_32px_rgba(0,0,0,0.04)]"
              >
                {/* Background Dynamic Ambient Radial Glow */}
                <div
                  className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-15 light:opacity-10 transition-opacity duration-700 group-hover:opacity-30 light:group-hover:opacity-20"
                  style={{ backgroundColor: cat.accentColor }}
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 rounded-full blur-3xl opacity-10 light:opacity-5 transition-opacity duration-700 group-hover:opacity-20 light:group-hover:opacity-15"
                  style={{ backgroundColor: cat.accentColor }}
                  aria-hidden="true"
                />

                {/* Category Top Architectural Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08] light:border-black/[0.08] relative z-10">
                  <div className="flex items-center gap-3">
                    <span
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-widest border"
                      style={{
                        color: cat.accentColor,
                        borderColor: `${cat.accentColor}40`,
                        backgroundColor: `${cat.accentColor}12`,
                      }}
                    >
                      {cat.layer}
                    </span>
                    <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#F3F0E8] light:text-[#0B0B0B] group-hover:text-white light:group-hover:text-black transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* Asymmetric Modular Tech Matrix Layout */}
                <div className="space-y-3 relative z-10">
                  {/* Primary Featured Anchor (First Tech Item) */}
                  {cat.items.slice(0, 1).map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-4.5 rounded-2xl border transition-all duration-300 relative overflow-hidden group/item flex items-center justify-between gap-4"
                      style={{
                        backgroundColor: `${cat.accentColor}0e`,
                        borderColor: `${cat.accentColor}38`,
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center border flex-shrink-0 transition-transform duration-300 group-hover/item:scale-105"
                          style={{
                            backgroundColor: `${cat.accentColor}18`,
                            borderColor: `${cat.accentColor}40`,
                          }}
                        >
                          <TechIcon name={item.name} accentColor={cat.accentColor} />
                        </div>
                        <div>
                          <div className="font-sans text-base font-bold text-[#F3F0E8] light:text-[#0B0B0B] group-hover/item:text-white light:group-hover/item:text-black transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs font-sans text-[#A8A49B] light:text-[#5F5B54] mt-0.5">
                            {item.tag}
                          </div>
                        </div>
                      </div>

                      <span
                        className="hidden sm:inline-flex text-[9px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 rounded border flex-shrink-0"
                        style={{
                          color: cat.accentColor,
                          borderColor: `${cat.accentColor}30`,
                        }}
                      >
                        CORE
                      </span>
                    </div>
                  ))}

                  {/* 2x2 Sub-Grid for the Remaining 4 Technologies */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {cat.items.slice(1).map((item, ii) => (
                      <div
                        key={ii}
                        className="p-3.5 rounded-2xl bg-white/[0.02] light:bg-black/[0.02] border border-white/[0.05] light:border-black/[0.06] hover:border-white/20 light:hover:border-black/20 hover:bg-white/[0.04] light:hover:bg-black/[0.04] transition-all duration-300 group/sub flex items-center gap-3.5"
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center border flex-shrink-0 transition-colors"
                          style={{
                            backgroundColor: `${cat.accentColor}12`,
                            borderColor: `${cat.accentColor}30`,
                          }}
                        >
                          <TechIcon name={item.name} accentColor={cat.accentColor} />
                        </div>
                        <div className="min-w-0">
                          <div className="font-sans text-sm font-bold text-[#F3F0E8] light:text-[#0B0B0B] group-hover/sub:text-[#C6A56B] transition-colors truncate">
                            {item.name}
                          </div>
                          <div className="text-[11px] font-sans text-[#A8A49B] light:text-[#5F5B54] mt-0.5 truncate">
                            {item.tag}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Footer: Telemetry Trace */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] light:border-black/[0.06] flex items-center justify-between text-[11px] font-mono text-[#A8A49B] light:text-[#5F5B54] font-medium relative z-10">
                  <span>PROJECT-LED</span>
                  <div className="flex-1 mx-4 h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] light:via-black/[0.1] to-transparent relative">
                    <span
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: `${cat.accentColor}88` }}
                    />
                  </div>
                  <span style={{ color: cat.accentColor }}>TECHNOLOGY CHOICE</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Return in focused mode */}
          {selectedCategory !== "all" && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setSelectedCategory("all")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] light:bg-black/[0.04] hover:bg-white/[0.08] light:hover:bg-black/[0.08] border border-white/[0.1] light:border-black/[0.1] text-xs font-mono text-[#F3F0E8] light:text-[#0B0B0B] hover:text-[#C6A56B] transition-all cursor-pointer shadow-sm"
              >
                <span>←</span>
                <span>VIEW ALL DISCIPLINES</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

