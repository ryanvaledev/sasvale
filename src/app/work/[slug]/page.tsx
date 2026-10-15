import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/shared/JsonLd";
import { absoluteUrl } from "@/config/site";
import {
  CaseStudyView,
  type CaseStudyProjectData,
  type NextProjectData,
} from "@/components/work/CaseStudyView";

export const projectsData: Record<string, CaseStudyProjectData> = {
  ethletia: {
    slug: "ethletia",
    client: "Ethletia",
    title: "Ethletia — Digital Commerce",
    category: "Digital Commerce",
    industry: "Sportswear / Activewear",
    status: "Live",
    website: "ethletia.com",
    websiteUrl: "https://ethletia.com",
    summary:
      "A sportswear / activewear digital experience built around product discovery, brand presentation, and a streamlined e-commerce experience.",
    heroImage: "/assets/projects/ethletia.png",
    heroImageAlt: "Ethletia sportswear and activewear digital commerce platform",
    overview: {
      headline: "Product discovery comes first.",
      lead: "A digital commerce experience designed around how customers discover, understand, and purchase sportswear.",
      description:
        "The experience brings product presentation, catalog browsing, and purchasing into a clearer digital journey for an activewear brand.",
    },
    challenge: {
      statements: [
        "Make the product easy to discover.",
        "Make the brand easy to understand.",
        "Make the purchase path clear.",
      ],
      description:
        "The experience needed to balance brand presentation with practical product discovery and e-commerce usability.",
    },
    approach: [
      {
        num: "01",
        title: "PRODUCT DISCOVERY",
        desc: "Clear product presentation and browsing structure.",
      },
      {
        num: "02",
        title: "BRAND PRESENTATION",
        desc: "A digital experience that gives the activewear brand space to communicate visually.",
      },
      {
        num: "03",
        title: "PURCHASING FLOW",
        desc: "A straightforward path from product discovery toward purchase.",
      },
    ],
    whatWasBuilt: [
      {
        title: "DIGITAL STOREFRONT",
        desc: "A digital commerce experience for an activewear brand.",
      },
      {
        title: "PRODUCT DISCOVERY",
        desc: "Structured browsing and product presentation.",
      },
      {
        title: "COMMERCE EXPERIENCE",
        desc: "A clearer path from product discovery toward purchase.",
      },
    ],
    details: {
      discipline: "DIGITAL COMMERCE",
      sector: "SPORTSWEAR / ACTIVEWEAR",
      focusAreas: [
        "PRODUCT DISCOVERY",
        "BRAND PRESENTATION",
        "E-COMMERCE EXPERIENCE",
      ],
    },
    principle: {
      quote: "Good commerce experiences do not start with the checkout.",
      subquote: "They start with helping people find the right product.",
    },
    gallery: [
      {
        src: "/assets/projects/ethletia.png",
        caption: "Homepage & Brand Showcase",
        alt: "Ethletia homepage visual spread",
      },
    ],
  },

  "wind-deflectors": {
    slug: "wind-deflectors",
    client: "Wind Deflectors",
    title: "Wind Deflectors — E-Commerce",
    category: "E-Commerce",
    industry: "Automotive Parts",
    status: "Live",
    website: "wind-deflectors.com",
    websiteUrl: "https://wind-deflectors.com",
    summary:
      "Niche automotive e-commerce store designed around product discovery, structured product information, and a clear purchasing experience.",
    heroImage: "/assets/projects/wind.png",
    heroImageAlt: "Wind Deflectors automotive parts catalog and e-commerce store",
    overview: {
      headline: "Structured vehicle cataloging drives purchase clarity.",
      lead: "A precision e-commerce platform built around vehicle compatibility, technical specifications, and structured ordering.",
      description:
        "The storefront organizes automotive components by make, model, and year to eliminate fitment guesswork for online buyers.",
    },
    challenge: {
      statements: [
        "Organize complex vehicle fitment.",
        "Deliver accurate part specifications.",
        "Streamline the order intake flow.",
      ],
      description:
        "Automotive components require high confidence in compatibility. The interface needed to make part matching instantaneous.",
    },
    approach: [
      {
        num: "01",
        title: "VEHICLE FILTERING",
        desc: "Structured matching by vehicle model and specifications.",
      },
      {
        num: "02",
        title: "SPECIFICATION CLARITY",
        desc: "Clear product details and installation compatibility information.",
      },
      {
        num: "03",
        title: "ORDER INTAKE",
        desc: "Frictionless cart and checkout flow built for high order accuracy.",
      },
    ],
    whatWasBuilt: [
      {
        title: "AUTOMOTIVE PARTS CATALOG",
        desc: "Structured automotive vehicle compatibility catalog.",
      },
      {
        title: "DIRECT PRODUCT NAVIGATION",
        desc: "Direct vehicle product navigation and part selection.",
      },
      {
        title: "FOCUSED ORDER INTAKE",
        desc: "Clear, focused customer purchasing and order intake flow.",
      },
    ],
    details: {
      discipline: "E-COMMERCE STOREFRONT",
      sector: "AUTOMOTIVE AFTERMARKET",
      focusAreas: [
        "VEHICLE FITMENT MATCHING",
        "TECHNICAL CATALOGING",
        "ORDER PROCESSING",
      ],
    },
    principle: {
      quote: "Precision in technical cataloging reduces purchase hesitation.",
      subquote: "Every specification should directly reassure the customer before checkout.",
    },
  },

  "education-system": {
    slug: "education-system",
    client: "Education System",
    title: "Education System — Business System",
    category: "Business System",
    industry: "Education Administration",
    status: "Live",
    website: "sasvale.com",
    summary:
      "Fee and attendance management system built to bring core education administration into a more connected digital workflow.",
    heroImage: "/assets/projects/edschol.png",
    heroImageAlt: "Education management fee and attendance administration platform",
    overview: {
      headline: "Centralizing daily school administrative workflows.",
      lead: "A custom internal operating system designed for academic institutions, staff administrators, and records management.",
      description:
        "The system replaces disconnected paper spreadsheets with centralized student logs, automated fee schedules, and daily attendance.",
    },
    challenge: {
      statements: [
        "Centralize student attendance records.",
        "Track fee scheduling and payment status.",
        "Give staff clear administrative visibility.",
      ],
      description:
        "Educational institutions require operational dependability. The system needed to simplify daily tracking while preserving data integrity.",
    },
    approach: [
      {
        num: "01",
        title: "FEE SCHEDULING",
        desc: "Automated billing schedules and tuition tracking.",
      },
      {
        num: "02",
        title: "DAILY ATTENDANCE",
        desc: "Fast administrative logging for teachers and staff.",
      },
      {
        num: "03",
        title: "RECORD RETENTION",
        desc: "Secure central repository for academic profiles and history.",
      },
    ],
    whatWasBuilt: [
      {
        title: "FEE SCHEDULING & TRACKING",
        desc: "Centralized record keeping and payment status visibility.",
      },
      {
        title: "ATTENDANCE WORKFLOW",
        desc: "Connected student and staff daily logging.",
      },
      {
        title: "ADMINISTRATIVE DASHBOARD",
        desc: "Administrative visibility and record organization.",
      },
    ],
    details: {
      discipline: "CUSTOM BUSINESS SYSTEM",
      sector: "EDUCATION ADMINISTRATION",
      focusAreas: [
        "FEE MANAGEMENT",
        "ATTENDANCE WORKFLOWS",
        "STUDENT RECORDS",
      ],
    },
    principle: {
      quote: "Operational software succeeds when daily admin workflows disappear into the background.",
      subquote: "Reliability and clarity matter more than unnecessary administrative complexity.",
    },
  },

  "tbs-salon": {
    slug: "tbs-salon",
    client: "TBS Salon",
    title: "TBS Salon — Salon Booking",
    category: "Salon Booking (In Progress)",
    industry: "Beauty & Wellness",
    status: "In Progress",
    website: "tbssalon.vercel.app",
    websiteUrl: "https://tbssalon.vercel.app",
    summary:
      "Salon booking website currently being developed, with the project focused on creating a clear digital booking experience.",
    heroImage: "/assets/projects/tbssalon.png",
    heroImageAlt: "TBS Salon digital booking application interface",
    overview: {
      headline: "An effortless appointment scheduling experience.",
      lead: "A luxury studio booking web application designed for seamless customer reservations and treatment exploration.",
      description:
        "Currently in active development, the platform pairs an elegant editorial brand aesthetic with clear stylist booking workflows.",
    },
    challenge: {
      statements: [
        "Present specialized salon services clearly.",
        "Enable immediate appointment selection.",
        "Establish an elevated visual identity.",
      ],
      description:
        "The studio needed a digital identity that reflects in-person hospitality while simplifying online booking steps.",
    },
    approach: [
      {
        num: "01",
        title: "SERVICE DISCOVERY",
        desc: "Clear treatment breakdown with duration and pricing.",
      },
      {
        num: "02",
        title: "BOOKING CALENDAR",
        desc: "Real-time calendar selection with stylist availability.",
      },
      {
        num: "03",
        title: "STUDIO BRANDING",
        desc: "Refined typography and visual language reflecting the physical studio.",
      },
    ],
    whatWasBuilt: [
      {
        title: "ONLINE APPOINTMENT INTERFACE",
        desc: "Interactive appointment scheduling interface (In Progress).",
      },
      {
        title: "SERVICE MENU ARCHITECTURE",
        desc: "Stylist service menu and booking workflow.",
      },
      {
        title: "RESPONSIVE STUDIO PRESENCE",
        desc: "Responsive visual identity and studio brand presence.",
      },
    ],
    details: {
      discipline: "WEB APPLICATION & BRANDING",
      sector: "BEAUTY & WELLNESS",
      focusAreas: [
        "APPOINTMENT SCHEDULING",
        "SERVICE TAXONOMY",
        "MOBILE RESERVATION FLOW",
      ],
    },
    principle: {
      quote: "A booking experience should feel as intentional as walking into the salon.",
      subquote: "Eliminating friction between service discovery and calendar confirmation.",
    },
  },

  crowdinvest: {
    slug: "crowdinvest",
    client: "CrowdInvest",
    title: "CrowdInvest — Capital Allocation Platform",
    category: "Fintech Platform",
    industry: "Financial Services",
    status: "Live",
    website: "sasvale.com",
    summary:
      "Investment management and capital allocation platform with real-time portfolio tracking.",
    heroImage: "/assets/projects/ethletia.png",
    heroImageAlt: "CrowdInvest capital allocation platform interface",
    overview: {
      headline: "Clarity and transparency in digital capital allocation.",
      lead: "A financial technology platform designed to streamline portfolio tracking and investor visibility.",
      description:
        "The system structures investment offerings and live performance telemetry into a secure investor dashboard.",
    },
    challenge: {
      statements: [
        "Present complex financial metrics clearly.",
        "Ensure enterprise-grade security protocols.",
        "Deliver intuitive portfolio monitoring.",
      ],
      description:
        "Institutional capital allocation demands uncompromised reliability and intuitive data visualization.",
    },
    approach: [
      {
        num: "01",
        title: "PORTFOLIO METRICS",
        desc: "Clear visual hierarchy for real-time asset telemetry.",
      },
      {
        num: "02",
        title: "SECURITY ARCHITECTURE",
        desc: "Rigorous authentication and access controls.",
      },
      {
        num: "03",
        title: "INVESTOR WORKFLOWS",
        desc: "Frictionless allocation workflows and document verification.",
      },
    ],
    whatWasBuilt: [
      {
        title: "PORTFOLIO DASHBOARD",
        desc: "Real-time capital tracking and allocation metrics.",
      },
      {
        title: "AUTHENTICATION ENGINE",
        desc: "Secure multi-factor authentication architecture.",
      },
      {
        title: "REPORTING INTERFACE",
        desc: "Compliance reporting and investor audit logs.",
      },
    ],
    details: {
      discipline: "FINTECH WEB APPLICATION",
      sector: "INVESTMENT MANAGEMENT",
      focusAreas: [
        "DATA VISUALIZATION",
        "PORTFOLIO MONITORING",
        "FINANCIAL REPORTING",
      ],
    },
  },

  transworld: {
    slug: "transworld",
    client: "Transworld Logistics",
    title: "Transworld Logistics — Logistics Infrastructure",
    category: "Logistics",
    industry: "Supply Chain",
    status: "Live",
    website: "sasvale.com",
    summary:
      "Logistics document management and fleet intelligence platform.",
    heroImage: "/assets/projects/ethletia.png",
    heroImageAlt: "Transworld Logistics fleet intelligence interface",
    overview: {
      headline: "Connecting fleet telemetry and supply chain dispatch.",
      lead: "Enterprise logistics infrastructure built for route optimization and document automation.",
      description:
        "The platform coordinates multi-tier shipping documentation and driver routing across regional distribution hubs.",
    },
    challenge: {
      statements: [
        "Automate high-volume freight documentation.",
        "Provide real-time dispatch routing.",
        "Maintain cross-border compliance.",
      ],
      description:
        "Logistics operators require immediate visibility to minimize transit delays and compliance friction.",
    },
    approach: [
      {
        num: "01",
        title: "DOCUMENT PIPELINE",
        desc: "Automated ingestion and classification of manifests.",
      },
      {
        num: "02",
        title: "FLEET VISIBILITY",
        desc: "Live routing telemetry and driver coordination.",
      },
      {
        num: "03",
        title: "COMPLIANCE LOGGING",
        desc: "Automated regulatory reporting across jurisdictions.",
      },
    ],
    whatWasBuilt: [
      {
        title: "DOCUMENT PROCESSING",
        desc: "Automated freight document processing pipeline.",
      },
      {
        title: "ROUTING DASHBOARD",
        desc: "Live dispatch routing visibility interface.",
      },
      {
        title: "COMPLIANCE MODULE",
        desc: "Cross-border regulatory validation checks.",
      },
    ],
    details: {
      discipline: "ENTERPRISE SYSTEMS",
      sector: "SUPPLY CHAIN & FREIGHT",
      focusAreas: [
        "MANIFEST AUTOMATION",
        "FLEET COORDINATION",
        "REGULATORY COMPLIANCE",
      ],
    },
  },

  "rassani-pos": {
    slug: "rassani-pos",
    client: "Rassani POS",
    title: "Rassani POS — Retail Point of Sale",
    category: "Retail Systems",
    industry: "Retail Technology",
    status: "Live",
    website: "sasvale.com",
    summary:
      "Point-of-sale and transaction handling system for retail operations.",
    heroImage: "/assets/projects/rassanitech.png",
    heroImageAlt: "Rassani POS point of sale terminal interface",
    overview: {
      headline: "High-throughput transaction architecture for modern retail.",
      lead: "A resilient point-of-sale system engineered for rapid barcode checkout and real-time stock sync.",
      description:
        "The software runs on dedicated retail hardware, coordinating cashier terminals with inventory databases.",
    },
    challenge: {
      statements: [
        "Ensure sub-second item scanning.",
        "Synchronize stock levels in real time.",
        "Operate reliably under continuous peak traffic.",
      ],
      description:
        "Retail cashiers need instant feedback and zero latency when ringing up high-volume transactions.",
    },
    approach: [
      {
        num: "01",
        title: "TERMINAL SPEED",
        desc: "Optimized input handling for fast checkout loops.",
      },
      {
        num: "02",
        title: "INVENTORY SYNC",
        desc: "Immediate deduction and multi-store inventory updates.",
      },
      {
        num: "03",
        title: "OFFLINE CAPABILITY",
        desc: "Local transaction caching during network outages.",
      },
    ],
    whatWasBuilt: [
      {
        title: "CHECKOUT TERMINAL",
        desc: "Transaction processing architecture and cash register UI.",
      },
      {
        title: "INVENTORY WORKFLOW",
        desc: "Real-time stock level synchronization system.",
      },
      {
        title: "MULTI-STORE SUPPORT",
        desc: "Multi-terminal operational support and manager reporting.",
      },
    ],
    details: {
      discipline: "RETAIL POINT OF SALE",
      sector: "COMMERCIAL RETAIL",
      focusAreas: [
        "CHECKOUT ARCHITECTURE",
        "INVENTORY TRACKING",
        "TERMINAL HARDWARE INTEGRATION",
      ],
    },
  },

  "21st-century": {
    slug: "21st-century",
    client: "21st Century",
    title: "21st Century — Digital Modernization",
    category: "Web Engineering & Platform Architecture",
    industry: "Digital Media",
    status: "Live",
    website: "sasvale.com",
    summary:
      "Re-architecting digital presence with modern component infrastructure, streamlined user flows, and sub-second page performance.",
    heroImage: "/assets/projects/ethletia.png",
    heroImageAlt: "21st Century digital modernization platform",
    overview: {
      headline: "Performance engineering for high-traffic media.",
      lead: "A comprehensive digital upgrade restructuring legacy code into high-speed modern web infrastructure.",
      description:
        "The platform delivers instant article delivery, responsive typography scales, and seamless user navigation.",
    },
    challenge: {
      statements: [
        "Eliminate legacy page load bottlenecks.",
        "Guarantee zero layout shift on mobile devices.",
        "Ensure full accessibility compliance.",
      ],
      description:
        "Modern audiences abandon slow media sites. The upgrade focused on sub-second rendering and fluid typography.",
    },
    approach: [
      {
        num: "01",
        title: "ASSET PIPELINE",
        desc: "Modern image optimization and asset minification.",
      },
      {
        num: "02",
        title: "CORE WEB VITALS",
        desc: "Strict optimization for LCP, CLS, and INP metrics.",
      },
      {
        num: "03",
        title: "ACCESSIBILITY",
        desc: "Complete WCAG 2.2 AA compliant markup and contrast.",
      },
    ],
    whatWasBuilt: [
      {
        title: "PERFORMANCE STACK",
        desc: "Modern component architecture reducing load times.",
      },
      {
        title: "FLUID TYPOGRAPHY",
        desc: "Zero layout shift responsive editorial typography.",
      },
      {
        title: "ACCESSIBILITY STANDARDS",
        desc: "Structured semantic HTML and keyboard navigation.",
      },
    ],
    details: {
      discipline: "PLATFORM ARCHITECTURE",
      sector: "EDITORIAL MEDIA",
      focusAreas: [
        "PERFORMANCE OPTIMIZATION",
        "CORE WEB VITALS",
        "RESPONSIVE LAYOUTS",
      ],
    },
  },

  artior: {
    slug: "artior",
    client: "Artior",
    title: "Artior — Brand Architecture & Platform",
    category: "Custom Software & Brand Identity",
    industry: "Luxury Lifestyle",
    status: "Live",
    website: "sasvale.com",
    summary:
      "Engineering a bespoke digital showcase with tailored design tokens, fluid typography, and interactive presentation components.",
    heroImage: "/assets/projects/zenfia.png",
    heroImageAlt: "Artior brand architecture and digital platform",
    overview: {
      headline: "Editorial distinction meets bespoke engineering.",
      lead: "A luxury lifestyle brand showcase designed with bespoke design tokens and tailored presentation layouts.",
      description:
        "The experience communicates craftsmanship and exclusivity through restrained typography and fluid interactions.",
    },
    challenge: {
      statements: [
        "Craft bespoke visual design tokens.",
        "Engineer fluid interactive showcases.",
        "Maintain understated elegance.",
      ],
      description:
        "High-end brands require distinctive visual identity without relying on standard commercial templates.",
    },
    approach: [
      {
        num: "01",
        title: "DESIGN SYSTEM",
        desc: "Custom design token architecture and typographic scale.",
      },
      {
        num: "02",
        title: "FLUID PRESENTATION",
        desc: "Interactive product gallery and showcase components.",
      },
      {
        num: "03",
        title: "INTAKE WORKFLOW",
        desc: "Clean client inquiry and concierge communication flow.",
      },
    ],
    whatWasBuilt: [
      {
        title: "DESIGN TOKEN SYSTEM",
        desc: "Bespoke color, typography, and spacing tokens.",
      },
      {
        title: "SHOWCASE ARCHITECTURE",
        desc: "Modular presentation components and interactive spreads.",
      },
      {
        title: "INQUIRY INTAKE",
        desc: "Clean concierge inquiry routing system.",
      },
    ],
    details: {
      discipline: "BRAND IDENTITY & WEB PLATFORM",
      sector: "LUXURY & LIFESTYLE",
      focusAreas: [
        "BESPOKE DESIGN TOKENS",
        "SHOWCASE ENGINEERING",
        "CLIENT INTAKE",
      ],
    },
  },

  "bake-me-happi": {
    slug: "bake-me-happi",
    client: "Bake Me Happi",
    title: "Bake Me Happi — Experience & Commerce",
    category: "E-Commerce & Digital Experience",
    industry: "Artisan Bakery",
    status: "Live",
    website: "sasvale.com",
    summary:
      "Digital storefront optimization with enhanced checkout experiences and responsive product presentations.",
    heroImage: "/assets/projects/onlinegoodies.png",
    heroImageAlt: "Bake Me Happi digital storefront",
    overview: {
      headline: "Artisan bakery ordering made immediate.",
      lead: "A vibrant digital storefront engineered for local bakery pre-orders and catering inquiries.",
      description:
        "The interface highlights daily baked goods with clear allergen labels, scheduled pick-up slots, and mobile ordering.",
    },
    challenge: {
      statements: [
        "Showcase perishable daily menu items.",
        "Facilitate scheduled pick-up ordering.",
        "Streamline the mobile purchasing flow.",
      ],
      description:
        "Artisan food ordering demands clear time-slot management and appetite-inducing product presentation.",
    },
    approach: [
      {
        num: "01",
        title: "CATALOG SCHEDULING",
        desc: "Dynamic daily menu availability and ordering windows.",
      },
      {
        num: "02",
        title: "MOBILE CHECKOUT",
        desc: "Frictionless mobile checkout for local repeat customers.",
      },
      {
        num: "03",
        title: "LOCAL VISIBILITY",
        desc: "Structured schema data for search discovery.",
      },
    ],
    whatWasBuilt: [
      {
        title: "MOBILE ORDERING FUNNEL",
        desc: "Streamlined mobile ordering and pick-up scheduling.",
      },
      {
        title: "PRODUCT SCHEMA",
        desc: "Structured product data and allergen labeling.",
      },
      {
        title: "MENU ARCHITECTURE",
        desc: "Responsive daily inventory and pastry showcase.",
      },
    ],
    details: {
      discipline: "DIGITAL STOREFRONT",
      sector: "FOOD & HOSPITALITY",
      focusAreas: [
        "SCHEDULED ORDERING",
        "MOBILE OPTIMIZATION",
        "LOCAL COMMERCE",
      ],
    },
  },

  "bloom-beauty": {
    slug: "bloom-beauty",
    client: "Bloom Beauty",
    title: "Bloom Beauty — Digital Identity",
    category: "Brand Identity & Web Design",
    industry: "Cosmetics & Skincare",
    status: "Live",
    website: "sasvale.com",
    summary:
      "Elegant, responsive digital brand identity crafted for maximum visual distinction and brand resonance.",
    heroImage: "/assets/projects/zenfia.png",
    heroImageAlt: "Bloom Beauty brand identity showcase",
    overview: {
      headline: "Subtle elegance in cosmetic digital presentation.",
      lead: "A contemporary skincare brand showcase built with warm aesthetics and structured formula breakdowns.",
      description:
        "The website guides shoppers through ingredient transparency and personalized skin regimen recommendations.",
    },
    challenge: {
      statements: [
        "Communicate ingredient efficacy clearly.",
        "Deliver a calming, tactile aesthetic.",
        "Ensure seamless cross-device performance.",
      ],
      description:
        "Beauty customers value ingredient transparency. The design balances clinical honesty with luxury presentation.",
    },
    approach: [
      {
        num: "01",
        title: "FORMULA BREAKDOWN",
        desc: "Interactive ingredient cards with dermatological context.",
      },
      {
        num: "02",
        title: "COLOR & TYPE",
        desc: "Warm earth-tone color system and editorial typography.",
      },
      {
        num: "03",
        title: "PERFORMANCE",
        desc: "Optimized image delivery for high-resolution product photography.",
      },
    ],
    whatWasBuilt: [
      {
        title: "BRAND SYSTEM",
        desc: "Bespoke typographic scale and cosmetic color palette.",
      },
      {
        title: "INGREDIENT SHOWCASE",
        desc: "Structured formula transparency cards.",
      },
      {
        title: "RESPONSIVE STOREFRONT",
        desc: "Flawless cross-device responsive layout.",
      },
    ],
    details: {
      discipline: "BRAND IDENTITY & WEB DESIGN",
      sector: "COSMETICS & BEAUTY",
      focusAreas: [
        "BRAND ARCHITECTURE",
        "INGREDIENT TRANSPARENCY",
        "RESPONSIVE DESIGN",
      ],
    },
  },

  bomeco: {
    slug: "bomeco",
    client: "Bomeco",
    title: "Bomeco — Enterprise Web Platform",
    category: "Corporate Web Architecture",
    industry: "Industrial Manufacturing",
    status: "Live",
    website: "sasvale.com",
    summary:
      "Corporate web infrastructure engineered for enterprise trust signals, lead qualification, and structured content discovery.",
    heroImage: "/assets/projects/ethletia.png",
    heroImageAlt: "Bomeco corporate enterprise web platform",
    overview: {
      headline: "Industrial capability structured for procurement trust.",
      lead: "A B2B enterprise platform presenting manufacturing certifications, capability matrices, and RFP routing.",
      description:
        "The site allows corporate procurement officers to quickly evaluate manufacturing capacity and specifications.",
    },
    challenge: {
      statements: [
        "Structure complex industrial capabilities.",
        "Qualify B2B enterprise leads automatically.",
        "Communicate manufacturing compliance.",
      ],
      description:
        "B2B procurement cycles involve rigorous evaluation. The platform structures technical data for rapid buyer validation.",
    },
    approach: [
      {
        num: "01",
        title: "CAPABILITY MATRIX",
        desc: "Structured filtering of production processes and tolerances.",
      },
      {
        num: "02",
        title: "LEAD QUALIFICATION",
        desc: "Automated routing based on project volume and sector.",
      },
      {
        num: "03",
        title: "COMPLIANCE DATA",
        desc: "Direct access to ISO certifications and spec sheets.",
      },
    ],
    whatWasBuilt: [
      {
        title: "CAPABILITY SYSTEM",
        desc: "Structured manufacturing directory and filter matrix.",
      },
      {
        title: "RFP ROUTING",
        desc: "Automated commercial inquiry qualification pipeline.",
      },
      {
        title: "ENTERPRISE TRUST SIGNALS",
        desc: "Semantic certification schema and specification docs.",
      },
    ],
    details: {
      discipline: "CORPORATE WEB ARCHITECTURE",
      sector: "INDUSTRIAL MANUFACTURING",
      focusAreas: [
        "B2B LEAD INTAKE",
        "CAPABILITY DIRECTORY",
        "TECHNICAL DOCUMENTATION",
      ],
    },
  },

  cottread: {
    slug: "cottread",
    client: "Cottread",
    title: "Cottread — Performance Engineering",
    category: "High-Performance Web Platform",
    industry: "Consulting & Services",
    status: "Live",
    website: "sasvale.com",
    summary:
      "Modern web architecture migration focused on clean code splitting, asset optimization, and technical SEO compliance.",
    heroImage: "/assets/projects/ethletia.png",
    heroImageAlt: "Cottread performance engineering showcase",
    overview: {
      headline: "Zero-latency web architecture migration.",
      lead: "A technical overhaul replacing bloated monolithic code with high-efficiency modern server components.",
      description:
        "The project achieved sub-second global responses, pristine search crawlability, and zero redirect chaining.",
    },
    challenge: {
      statements: [
        "Eliminate HTTP redirect chains.",
        "Consolidate legacy CSS frameworks.",
        "Achieve top-tier technical SEO ratings.",
      ],
      description:
        "Legacy platforms accumulate technical debt that penalizes search ranking and visitor conversion.",
    },
    approach: [
      {
        num: "01",
        title: "CODE CONSOLIDATION",
        desc: "Elimination of redundant legacy libraries and scripts.",
      },
      {
        num: "02",
        title: "ROUTING HYGIENE",
        desc: "Clean canonicalization and instant server rendering.",
      },
      {
        num: "03",
        title: "ASSET DELIVERY",
        desc: "High-efficiency static asset caching.",
      },
    ],
    whatWasBuilt: [
      {
        title: "MODERN STYLESHEET",
        desc: "Consolidated, utility-first CSS architecture.",
      },
      {
        title: "ROUTING CLEANUP",
        desc: "Zero-chain 308 redirect migration and canonical URLs.",
      },
      {
        title: "TECHNICAL SEO AUDIT",
        desc: "Perfect Lighthouse technical SEO compliance.",
      },
    ],
    details: {
      discipline: "PERFORMANCE ENGINEERING",
      sector: "PROFESSIONAL SERVICES",
      focusAreas: [
        "INFRASTRUCTURE MIGRATION",
        "TECHNICAL SEO",
        "SPEED OPTIMIZATION",
      ],
    },
  },

  magoos: {
    slug: "magoos",
    client: "Magoos",
    title: "Magoos — Brand Transformation",
    category: "Brand Experience & Digital Presence",
    industry: "Hospitality & Dining",
    status: "Live",
    website: "sasvale.com",
    summary:
      "Engaging digital presence highlighting local brand recognition, customer engagement, and responsive interaction.",
    heroImage: "/assets/projects/onlinegoodies.png",
    heroImageAlt: "Magoos hospitality brand experience",
    overview: {
      headline: "Hospitality presence built for local community trust.",
      lead: "A digital experience celebrating local heritage with interactive menu navigation and location hours.",
      description:
        "The interface enables quick table bookings, catering inquiries, and mobile direction discovery.",
    },
    challenge: {
      statements: [
        "Elevate local community recognition.",
        "Deliver intuitive mobile navigation.",
        "Streamline table reservations.",
      ],
      description:
        "Hospitality websites are visited predominantly from mobile devices looking for immediate location and menu facts.",
    },
    approach: [
      {
        num: "01",
        title: "MOBILE-FIRST UI",
        desc: "One-tap directions, hours, and reservation access.",
      },
      {
        num: "02",
        title: "MENU TAXONOMY",
        desc: "Structured food & beverage menus with dietary filters.",
      },
      {
        num: "03",
        title: "LOCAL DISCOVERY",
        desc: "Optimized structured local business schema.",
      },
    ],
    whatWasBuilt: [
      {
        title: "MOBILE NAVIGATION",
        desc: "Intuitive mobile interface with one-tap actions.",
      },
      {
        title: "LOCAL OPTIMIZATION",
        desc: "Fast server-rendered content with local schema.",
      },
      {
        title: "RESERVATION INTAKE",
        desc: "Streamlined online inquiry and booking workflow.",
      },
    ],
    details: {
      discipline: "BRAND EXPERIENCE & WEB",
      sector: "HOSPITALITY",
      focusAreas: [
        "MOBILE ACCESSIBILITY",
        "LOCAL SEARCH",
        "EVENT INQUIRIES",
      ],
    },
  },

  "roger-edwards-motors": {
    slug: "roger-edwards-motors",
    client: "Roger Edwards Motors",
    title: "Roger Edwards Motors — E-Commerce Architecture",
    category: "E-Commerce Architecture",
    industry: "Automotive Specialists",
    status: "Live",
    website: "sasvale.com",
    summary:
      "Automotive digital platform engineered for structured inventory discovery, high-conversion inquiry workflows, and responsive catalog browsing.",
    heroImage: "/assets/projects/roger.png",
    heroImageAlt: "Roger Edwards Motors automotive inventory platform",
    overview: {
      headline: "Specialist automotive vehicle cataloging.",
      lead: "An automotive platform pairing collector vehicle showcases with structured parts inquiries.",
      description:
        "The digital showroom gives car collectors comprehensive vehicle specifications, history logs, and direct inquiries.",
    },
    challenge: {
      statements: [
        "Present specialist vehicles with high fidelity.",
        "Structure automotive specifications and provenance.",
        "Deliver high-conversion inquiry workflows.",
      ],
      description:
        "Classic and specialist vehicles require meticulous visual proof and verified provenance to inspire buyer confidence.",
    },
    approach: [
      {
        num: "01",
        title: "VEHICLE PROVENANCE",
        desc: "Detailed documentation logs and high-res imagery.",
      },
      {
        num: "02",
        title: "INQUIRY FUNNEL",
        desc: "Direct contact workflows tied to specific chassis numbers.",
      },
      {
        num: "03",
        title: "PERFORMANCE",
        desc: "Fast sub-second transitions between vehicle listings.",
      },
    ],
    whatWasBuilt: [
      {
        title: "VEHICLE CATALOG",
        desc: "Structured automotive inventory and specification system.",
      },
      {
        title: "INQUIRY WORKFLOW",
        desc: "High-conversion mobile and desktop inquiry routing.",
      },
      {
        title: "RESPONSIVE SHOWROOM",
        desc: "Sub-second page transitions and responsive layouts.",
      },
    ],
    details: {
      discipline: "AUTOMOTIVE PLATFORM",
      sector: "SPECIALIST AUTOMOTIVE",
      focusAreas: [
        "INVENTORY CATALOGING",
        "BUYER INQUIRIES",
        "HIGH-FIDELITY SHOWROOM",
      ],
    },
  },

  zenfia: {
    slug: "zenfia",
    client: "Zenfia",
    title: "Zenfia — Brand & Digital Experience",
    category: "Brand & Experience",
    industry: "Lifestyle & Wellness",
    status: "Live",
    website: "sasvale.com",
    summary:
      "Digital brand showcase and lifestyle product experience engineered with bespoke typography, fluid layouts, and contemporary aesthetics.",
    heroImage: "/assets/projects/zenfia.png",
    heroImageAlt: "Zenfia digital brand showcase and lifestyle experience",
    overview: {
      headline: "Calm aesthetics engineered with digital precision.",
      lead: "A contemporary lifestyle product platform designed around tactile typography, calm visuals, and intuitive browsing.",
      description:
        "The experience translates mindfulness and wellness into a tranquil, uncluttered online destination.",
    },
    challenge: {
      statements: [
        "Establish an understated, soothing brand tone.",
        "Ensure fluid responsive interactions.",
        "Maintain sub-second page performance.",
      ],
      description:
        "Wellness products require digital environments that feel spacious, calming, and deeply intentional.",
    },
    approach: [
      {
        num: "01",
        title: "CALM PALETTE",
        desc: "Muted, serene tones and generous whitespace.",
      },
      {
        num: "02",
        title: "FLUID MOTION",
        desc: "Subtle interactive transitions that never distract.",
      },
      {
        num: "03",
        title: "ACCESSIBILITY",
        desc: "High contrast readability and accessible type scales.",
      },
    ],
    whatWasBuilt: [
      {
        title: "BRAND IDENTITY",
        desc: "Bespoke typographic scale and brand identity tokens.",
      },
      {
        title: "SHOWCASE COMPONENTS",
        desc: "Fluid interactive showcase and lifestyle product spreads.",
      },
      {
        title: "CORE WEB VITALS",
        desc: "Optimized Core Web Vitals and accessible layout.",
      },
    ],
    details: {
      discipline: "BRAND IDENTITY & DIGITAL EXPERIENCE",
      sector: "WELLNESS & LIFESTYLE",
      focusAreas: [
        "BRAND TOKENS",
        "EDITORIAL TYPOGRAPHY",
        "FLUID INTERACTIONS",
      ],
    },
  },

  "online-goodies": {
    slug: "online-goodies",
    client: "Online Goodies",
    title: "Online Goodies — Digital Storefront",
    category: "Digital Storefront",
    industry: "Retail E-Commerce",
    status: "Live",
    website: "sasvale.com",
    summary:
      "Curated e-commerce storefront designed around intuitive catalog browsing, product discovery, and friction-free checkout.",
    heroImage: "/assets/projects/onlinegoodies.png",
    heroImageAlt: "Online Goodies e-commerce digital storefront",
    overview: {
      headline: "Frictionless retail browsing and discovery.",
      lead: "A modern consumer goods storefront focused on rapid search, categorized browsing, and immediate checkout.",
      description:
        "The store organizes thousands of curated products into clear discovery pathways with fast server-side filtering.",
    },
    challenge: {
      statements: [
        "Structure broad consumer product catalogs.",
        "Accelerate mobile checkout velocity.",
        "Ensure fast server-rendered catalog views.",
      ],
      description:
        "High-SKU consumer storefronts need immediate search suggestions and zero friction at checkout.",
    },
    approach: [
      {
        num: "01",
        title: "SEARCH & FILTERS",
        desc: "Fast multi-faceted product filtering by category and price.",
      },
      {
        num: "02",
        title: "MOBILE CART",
        desc: "Persistent cart summary with one-click payment options.",
      },
      {
        num: "03",
        title: "CATALOG CACHING",
        desc: "Edge-cached product catalog for instantaneous navigation.",
      },
    ],
    whatWasBuilt: [
      {
        title: "CATEGORY HIERARCHY",
        desc: "Clean product category hierarchy and faceted navigation.",
      },
      {
        title: "MOBILE PURCHASING",
        desc: "Optimized mobile browsing and purchasing flows.",
      },
      {
        title: "EDGE CATALOG VIEWS",
        desc: "Fast server-rendered product catalog views.",
      },
    ],
    details: {
      discipline: "DIGITAL STOREFRONT",
      sector: "CONSUMER GOODS",
      focusAreas: [
        "PRODUCT TAXONOMY",
        "CHECKOUT OPTIMIZATION",
        "CATALOG BROWSING",
      ],
    },
  },
};

const PROJECT_SLUGS = Object.keys(projectsData);

export async function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) return {};

  return constructMetadata({
    title: `${project.client} — ${project.category} | SASVALE Case Study`,
    description: project.summary,
    pathname: `/work/${slug}`,
    image: project.heroImage,
  });
}

function getNextProject(currentSlug: string): NextProjectData {
  const currentIndex = PROJECT_SLUGS.indexOf(currentSlug);
  const nextIndex = (currentIndex + 1) % PROJECT_SLUGS.length;
  const nextSlug = PROJECT_SLUGS[nextIndex];
  const nextProj = projectsData[nextSlug];

  return {
    slug: nextProj.slug,
    client: nextProj.client,
    category: nextProj.category,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Work", item: "/work" },
    { name: project.client, item: `/work/${slug}` },
  ]);

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: project.title,
    description: project.summary,
    image: absoluteUrl(project.heroImage),
    creator: {
      "@type": "Organization",
      name: "Sasvale",
      url: absoluteUrl("/"),
    },
    about: project.client,
  };

  return (
    <>
      <JsonLd data={[breadcrumbs, creativeWorkSchema]} />
      <CaseStudyView project={project} nextProject={nextProject} />
    </>
  );
}
