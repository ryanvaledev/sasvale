/**
 * Sasvale V2 Enterprise Digital Agency Foundation Configuration
 *
 * Strongly-typed data structures and placeholder datasets for V2 components.
 * Adheres strictly to anti-SaaS rules:
 * - No artificial codes or fake metrics
 * - Business outcomes over technical tags for services
 * - Challenge / Approach / Outcome structure for case showcases
 * - Clean category typography for industries
 * - Grounded technology ecosystem
 */

export interface NavSubItem {
  title: string;
  href: string;
  description: string;
}

export interface MegaMenuColumn {
  categoryTitle: string;
  items: NavSubItem[];
}

export interface NavItem {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
  megaMenuColumns?: MegaMenuColumn[];
  featuredCallout?: {
    title: string;
    description: string;
    href: string;
    ctaLabel: string;
  };
}

export interface HeaderConfig {
  navLinks: NavItem[];
  primaryCta: {
    label: string;
    href: string;
  };
  contactEmail: string;
}

export interface HeroProjectShowcase {
  id: string;
  client: string;
  title: string;
  deliverable: string;
  image: string;
  alt: string;
  href: string;
}

export interface ServiceExplorerItem {
  index: string;
  title: string;
  tagline: string;
  businessOutcome: string;
  capabilities: string[];
  deliverablesSummary: string;
  href: string;
}

export interface ServiceShowcaseItem {
  id: string;
  serviceTitle: string;
  headline: string;
  challenge: string;
  approach: string;
  outcome: string;
  image: string;
  alt: string;
  href: string;
}

export interface CaseStudyItem {
  id: string;
  clientName: string;
  projectCategory: string;
  headline: string;
  summary: string;
  image: string;
  href: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  headline: string;
  businessTransformation: string;
  coreCapabilities: string[];
  href: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  objective: string;
  keyDeliverables: string[];
}

export interface ValuePillar {
  number: string;
  title: string;
  summary: string;
  description: string;
  commercialImpact: string;
}

export interface TechEcosystemPillar {
  category: string;
  title: string;
  description: string;
  disciplines: {
    name: string;
    purpose: string;
  }[];
}

export interface FooterColumn {
  heading: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface FooterConfig {
  columns: FooterColumn[];
  legalLinks: {
    label: string;
    href: string;
  }[];
  contactInfo: {
    email: string;
    londonPresence: string;
    globalAvailability: string;
  };
}

/* ==========================================================================
   Authoritative Foundation Datasets
   ========================================================================== */

export const headerConfig: HeaderConfig = {
  navLinks: [
    {
      label: "Services",
      href: "/services",
      hasMegaMenu: true,
      megaMenuColumns: [
        {
          categoryTitle: "Digital Experiences",
          items: [
            {
              title: "Custom Web Applications",
              href: "/services/web-development",
              description: "High-concurrency platforms engineered for sub-second responses.",
            },
            {
              title: "E-Commerce Architecture",
              href: "/services/web-development",
              description: "Headless commerce storefronts built for scale and retention.",
            },
            {
              title: "Digital Brand Experience",
              href: "/services/branding",
              description: "Distinct visual interfaces and interactive customer journeys.",
            },
          ],
        },
        {
          categoryTitle: "Custom Software",
          items: [
            {
              title: "Management & POS Platforms",
              href: "/services/custom-software",
              description: "Tailored transactional systems that eliminate operational bottlenecks.",
            },
            {
              title: "Internal Tooling & Portals",
              href: "/services/custom-software",
              description: "Secure data workflows and operations dashboards.",
            },
            {
              title: "Cloud Migration & Modernization",
              href: "/services/custom-software",
              description: "Refactoring legacy bottlenecks into scalable cloud microservices.",
            },
          ],
        },
        {
          categoryTitle: "Automation & Growth",
          items: [
            {
              title: "Workflow Automation",
              href: "/services/ai-integration",
              description: "API orchestration and resilient background task pipelines.",
            },
            {
              title: "Technical SEO Engineering",
              href: "/services/seo-marketing",
              description: "Semantic infrastructure and crawlable architectures.",
            },
            {
              title: "Data Systems Integration",
              href: "/services/ai-integration",
              description: "Synchronizing siloed databases into reliable unified pipelines.",
            },
          ],
        },
      ],
      featuredCallout: {
        title: "Engineering Consultation",
        description: "Review your system requirements directly with Sasvale technology principals.",
        href: "#contact",
        ctaLabel: "Schedule Technical Scoping →",
      },
    },
    {
      label: "Work",
      href: "/work",
    },
    {
      label: "Industries",
      href: "/industries",
      hasMegaMenu: true,
      megaMenuColumns: [
        {
          categoryTitle: "Commercial Sectors",
          items: [
            {
              title: "E-Commerce & Retail",
              href: "/industries",
              description: "Frictionless multi-channel commerce and inventory synchronization.",
            },
            {
              title: "Education & EdTech",
              href: "/industries",
              description: "Institutional portals and streamlined student intake systems.",
            },
            {
              title: "Healthcare & Wellness",
              href: "/industries",
              description: "Secure appointment orchestration and patient-facing platforms.",
            },
          ],
        },
        {
          categoryTitle: "Enterprise & Growth",
          items: [
            {
              title: "Real Estate & Property",
              href: "/industries",
              description: "Interactive property portals and digital inquiry management.",
            },
            {
              title: "Finance & FinTech",
              href: "/industries",
              description: "High-security transaction systems and reporting interfaces.",
            },
            {
              title: "High-Growth Startups",
              href: "/industries",
              description: "Accelerated MVP architecture built to handle institutional scale.",
            },
          ],
        },
      ],
      featuredCallout: {
        title: "Sector-Specific Architecture",
        description: "Explore how we solve operational bottlenecks in complex domain environments.",
        href: "/industries",
        ctaLabel: "View All Industries →",
      },
    },
    {
      label: "Process",
      href: "#process",
    },
    {
      label: "Why Sasvale",
      href: "#why-sasvale",
    },
    {
      label: "Insights",
      href: "/insights",
    },
  ],
  primaryCta: {
    label: "Talk to Experts",
    href: "#contact",
  },
  contactEmail: "hello@sasvale.com",
};

export const heroShowcaseProjects: HeroProjectShowcase[] = [
  {
    id: "ethletia",
    client: "Ethletia",
    title: "High-Performance Digital Commerce & Apparel Storefront",
    deliverable: "Headless E-Commerce Platform",
    image: "/assets/projects/ethletia.jpg",
    alt: "Ethletia digital storefront and apparel catalog interface",
    href: "/work",
  },
  {
    id: "rassani-pos",
    client: "Rassani POS",
    title: "Real-Time Point-of-Sale & Operations Transaction Engine",
    deliverable: "Custom Retail Operating System",
    image: "/assets/projects/rassani-pos.jpg",
    alt: "Rassani POS retail point of sale transaction interface",
    href: "/work",
  },
  {
    id: "tbs-salon",
    client: "TBS Salon",
    title: "Luxury Studio Brand Identity & Online Booking Funnel",
    deliverable: "Digital Brand & Scheduling System",
    image: "/assets/projects/tbs-salon.jpg",
    alt: "TBS Salon luxury brand and customer appointment platform",
    href: "/work",
  },
];

export const servicesExplorerData: ServiceExplorerItem[] = [
  {
    index: "01",
    title: "Digital Experiences",
    tagline: "High-conversion web platforms engineered for sub-second responsiveness.",
    businessOutcome:
      "Eliminates bounce rates and checkout drop-offs by delivering instant page loads, intuitive mobile interfaces, and seamless transaction journeys that turn visitors into long-term customers.",
    capabilities: [
      "Custom Web Applications & Portals",
      "Headless E-Commerce Storefronts",
      "Dynamic User Experience Architecture",
      "Cross-Platform Responsive Engineering",
    ],
    deliverablesSummary: "Bespoke web applications built for zero-downtime reliability.",
    href: "/services/web-development",
  },
  {
    index: "02",
    title: "Custom Software",
    tagline: "Tailored operational platforms built precisely around your business workflows.",
    businessOutcome:
      "Replaces rigid, expensive off-the-shelf software with proprietary systems that automate manual tasks, synchronize team workflows, and grant you complete intellectual property ownership.",
    capabilities: [
      "Point-of-Sale & Transaction Engines",
      "Internal Operations Dashboards",
      "Multi-Location Inventory Synchronization",
      "Role-Based Access & Data Governance",
    ],
    deliverablesSummary: "Proprietary software assets designed to scale your operations.",
    href: "/services/custom-software",
  },
  {
    index: "03",
    title: "Automation Systems",
    tagline: "Orchestrated backend pipelines that eliminate administrative overhead.",
    businessOutcome:
      "Reduces manual administrative labor by over 60% through automated data synchronization, instant CRM handoffs, and resilient webhooks that connect disjointed business tools.",
    capabilities: [
      "Cross-Platform API Orchestration",
      "Automated Order & Invoicing Workflows",
      "Database Synchronization & Validation",
      "Asynchronous Background Job Queues",
    ],
    deliverablesSummary: "Reliable integration pipelines that run silently 24/7.",
    href: "/services/ai-integration",
  },
  {
    index: "04",
    title: "Growth Optimization",
    tagline: "Technical search infrastructure engineered for compounding organic authority.",
    businessOutcome:
      "Secures sustainable commercial inbound traffic by optimizing Core Web Vitals, structuring crawlable semantic data, and systematically eliminating search indexing bottlenecks.",
    capabilities: [
      "Technical SEO & Schema Optimization",
      "Core Web Vitals & Latency Profiling",
      "Conversion Pathway Architecture",
      "Accessibility & Search Governance",
    ],
    deliverablesSummary: "Long-term organic search equity and performance durability.",
    href: "/services/seo-marketing",
  },
  {
    index: "05",
    title: "Brand & Product Design",
    tagline: "Authoritative visual systems that command market premium.",
    businessOutcome:
      "Elevates market perception and customer trust through cohesive design tokens, refined typography systems, and consistent digital touchpoints that position your firm as the category leader.",
    capabilities: [
      "Enterprise Design Token Systems",
      "Component Architecture & UI Kits",
      "Digital Brand Identity & Guidelines",
      "Accessible Interaction Standards",
    ],
    deliverablesSummary: "Unified visual systems that scale across all digital products.",
    href: "/services/branding",
  },
];

export const serviceShowcaseData: ServiceShowcaseItem[] = [
  {
    id: "showcase-commerce",
    serviceTitle: "Digital Commerce Engineering",
    headline: "Transforming Fragmented Storefronts into Sub-Second Transaction Engines",
    challenge:
      "Growing consumer brands frequently suffer from legacy monolithic platforms that slow down under peak traffic, drop mobile conversions, and resist new feature rollouts.",
    approach:
      "We decouple the frontend presentation from backend inventory systems using headless architecture, static page generation, and edge caching to achieve instant interactions.",
    outcome:
      "Sub-second page transitions across mobile devices, increased checkout completion rates, and an infrastructure capable of handling high traffic surges without degraded latency.",
    image: "/assets/projects/ethletia.jpg",
    alt: "High-performance digital commerce platform showcase",
    href: "/services/web-development",
  },
  {
    id: "showcase-software",
    serviceTitle: "Custom Operational Systems",
    headline: "Replacing Off-the-Shelf Compromises with Bespoke Software Ownership",
    challenge:
      "Businesses relying on generic third-party SaaS products frequently hit limits in workflow customizability, multi-terminal syncing, and escalating subscription costs.",
    approach:
      "We engineer custom management platforms and point-of-sale architectures tailored specifically to the client's physical operations and proprietary data workflows.",
    outcome:
      "Complete code and data ownership, zero recurring per-seat vendor fees, and seamless multi-location inventory and transaction synchronization.",
    image: "/assets/projects/rassani-pos.jpg",
    alt: "Custom retail point-of-sale operating system showcase",
    href: "/services/custom-software",
  },
];

export const caseStudyShowcaseData: CaseStudyItem[] = [
  {
    id: "ethletia",
    clientName: "Ethletia",
    projectCategory: "Digital Commerce",
    headline: "High-Conversion Activewear Digital Platform",
    summary:
      "Engineered a responsive, high-performance apparel storefront tailored for swift mobile catalog browsing and seamless purchasing workflows.",
    image: "/assets/projects/ethletia.jpg",
    href: "/work",
  },
  {
    id: "rassani-pos",
    clientName: "Rassani POS",
    projectCategory: "Custom Software",
    headline: "Retail Transaction & Point-of-Sale Engine",
    summary:
      "Developed a custom transactional system designed to streamline retail checkouts and maintain real-time store inventory accuracy.",
    image: "/assets/projects/rassani-pos.jpg",
    href: "/work",
  },
  {
    id: "tbs-salon",
    clientName: "TBS Salon",
    projectCategory: "Brand & Booking Platform",
    headline: "Luxury Salon Identity & Reservation Journey",
    summary:
      "Crafted an elegant brand presence integrated with a frictionless appointment scheduling workflow to elevate local market positioning.",
    image: "/assets/projects/tbs-salon.jpg",
    href: "/work",
  },
  {
    id: "engineers-doctors",
    clientName: "Engineers & Doctors",
    projectCategory: "Institutional Platform",
    headline: "Comprehensive Academic Portal & Intake Architecture",
    summary:
      "Structured an accessible institutional platform supporting academic program discovery, informational resources, and student intake inquiries.",
    image: "/assets/images/frame-427318874-1.jpg",
    href: "/work",
  },
  {
    id: "wind-deflectors",
    clientName: "Wind Deflectors",
    projectCategory: "Automotive Commerce",
    headline: "Specialized Vehicle Accessory Commerce Platform",
    summary:
      "Delivered a clean, structured product catalog and checkout flow tailored to automotive parts search and direct customer purchasing.",
    image: "/assets/images/frame-427318899-1.jpg",
    href: "/work",
  },
  {
    id: "zenfia",
    clientName: "Zenfia",
    projectCategory: "Digital Platform",
    headline: "Scalable Web Experience & Digital Presence",
    summary:
      "Architected a modern digital platform focused on high-readability typography, brand clarity, and responsive interface delivery.",
    image: "/assets/images/frame-427318902-1.jpg",
    href: "/work",
  },
];

export const industryExplorerData: IndustryItem[] = [
  {
    id: "ecommerce",
    name: "E-Commerce & Retail",
    headline: "High-Volume Transactional Storefronts Engineered for Conversion",
    businessTransformation:
      "We replace bloated legacy themes with ultra-fast headless architectures, reducing friction across product discovery and mobile checkouts.",
    coreCapabilities: [
      "Sub-second catalog browsing and filtering",
      "Real-time inventory and multi-channel synchronization",
      "Optimized cart and one-click checkout flows",
    ],
    href: "/industries",
  },
  {
    id: "education",
    name: "Education & EdTech",
    headline: "Accessible Institutional Platforms & Student Onboarding Systems",
    businessTransformation:
      "We digitize complex academic admissions, course schedules, and institutional communications into clear, intuitive digital portals.",
    coreCapabilities: [
      "Streamlined student inquiry and admissions pipelines",
      "WCAG 2.2 AA accessible documentation architecture",
      "Centralized curriculum and program directories",
    ],
    href: "/industries",
  },
  {
    id: "healthcare",
    name: "Healthcare & Wellness",
    headline: "Patient-First Appointment Scheduling & Clinical Discovery",
    businessTransformation:
      "We design calm, accessible digital platforms that make discovering treatments, booking practitioners, and accessing care intuitive and secure.",
    coreCapabilities: [
      "Frictionless online consultation booking",
      "Mobile-optimized treatment information pathways",
      "Strict data privacy and security governance",
    ],
    href: "/industries",
  },
  {
    id: "real-estate",
    name: "Real Estate & Property",
    headline: "High-Impact Property Showcases & Lead Qualification Portals",
    businessTransformation:
      "We engineer architectural digital galleries with comprehensive floor plans, location insights, and direct broker connection mechanisms.",
    coreCapabilities: [
      "High-resolution media presentation and interactive galleries",
      "Direct investor and buyer inquiry pipelines",
      "Fast map and listing search infrastructure",
    ],
    href: "/industries",
  },
  {
    id: "finance",
    name: "Finance & FinTech",
    headline: "Secure, High-Reliability Web Portals for Complex Financial Services",
    businessTransformation:
      "We build institutional-grade web applications that present sophisticated financial data with total clarity, speed, and airtight security.",
    coreCapabilities: [
      "Cryptographic security standards and clean audit trails",
      "Real-time financial metric presentation",
      "Intuitive client document portals",
    ],
    href: "/industries",
  },
  {
    id: "professional-services",
    name: "Professional Services",
    headline: "Authoritative Corporate Platforms for Consultancies & Legal Firms",
    businessTransformation:
      "We help elite service firms command premium fees by translating their expertise into deeply credible, editorial digital presences.",
    coreCapabilities: [
      "Executive thought leadership and publication publishing",
      "Direct principal consultation scheduling",
      "Case study and sector capability showcases",
    ],
    href: "/industries",
  },
  {
    id: "startups",
    name: "High-Growth Startups",
    headline: "Rapid MVP Engineering Built on Foundations That Scale to Millions",
    businessTransformation:
      "We take technical founders from concept to production-ready platforms in weeks, avoiding tech debt while impressing investors.",
    coreCapabilities: [
      "Modern Next.js & React 19 architecture",
      "Scalable database modeling and API contracts",
      "Edge deployment and continuous deployment pipelines",
    ],
    href: "/industries",
  },
];

export const processStagesData: ProcessStage[] = [
  {
    step: "01",
    title: "Discovery",
    subtitle: "Commercial & Technical Foundation",
    objective:
      "Audit existing bottlenecks, map stakeholder objectives, and establish unambiguous project scopes and technical architectural requirements.",
    keyDeliverables: [
      "Technical Architecture Specification",
      "User Journey & Information Architecture Maps",
      "Performance Benchmarks & Target SLAs",
    ],
  },
  {
    step: "02",
    title: "Strategy",
    subtitle: "System Architecture & Scoping",
    objective:
      "Design database schemas, evaluate third-party integrations, formulate API contracts, and establish modular milestones.",
    keyDeliverables: [
      "Data Model & Schema Definitions",
      "API Integration & Security Contracts",
      "Sprint Roadmap & Milestones",
    ],
  },
  {
    step: "03",
    title: "Design",
    subtitle: "Design Tokens & High-Fidelity UI",
    objective:
      "Build a bespoke design system with rigid token hierarchy, interactive prototypes, and accessible component libraries.",
    keyDeliverables: [
      "Token Architecture (Colors, Typography, Spacing)",
      "High-Fidelity Interactive Prototypes",
      "WCAG 2.2 AA Accessibility Audit",
    ],
  },
  {
    step: "04",
    title: "Development",
    subtitle: "Type-Safe Full-Stack Engineering",
    objective:
      "Translate designs into clean, modular Next.js components, edge APIs, and robust background workers with zero technical debt.",
    keyDeliverables: [
      "Strict TypeScript Codebase with Zero Build Errors",
      "Optimized Asset & Server-Side Rendering Pipelines",
      "Automated CI/CD Test Verification",
    ],
  },
  {
    step: "05",
    title: "Launch",
    subtitle: "Zero-Downtime Deployment & SEO Hardening",
    objective:
      "Execute pre-launch penetration checks, verify 301 redirect parity, deploy across edge CDNs, and submit structured XML sitemaps.",
    keyDeliverables: [
      "Zero-Downtime Production Deployment",
      "Technical SEO & Schema.org Verification",
      "Complete Codebase Handover & Documentation",
    ],
  },
  {
    step: "06",
    title: "Growth",
    subtitle: "Performance Governance & Scale",
    objective:
      "Continuously monitor real-world Core Web Vitals, organic search indexing performance, and infrastructure scalability.",
    keyDeliverables: [
      "Core Web Vitals Telemetry & Monitoring",
      "Search Engine Indexing Audits",
      "Feature Iteration & System Scaling",
    ],
  },
];

export const whySasvalePillars: ValuePillar[] = [
  {
    number: "01",
    title: "Strategy",
    summary: "Architecting for Commercial Durability",
    description:
      "We do not write a single line of code until we understand your unit economics, customer acquisition pathways, and operational bottlenecks. Every technical decision directly serves a business metric.",
    commercialImpact: "Eliminates wasteful development cycles and ensures software investments yield measurable ROI.",
  },
  {
    number: "02",
    title: "Automation",
    summary: "Eliminating Human Friction and Drag",
    description:
      "Repetitive data entry, manual reporting, and fragmented software tools bleed capital. We design resilient automated pipelines that connect your operations and let your teams focus on high-leverage work.",
    commercialImpact: "Reduces operational overhead and accelerates turnaround times by up to 60%.",
  },
  {
    number: "03",
    title: "Scale",
    summary: "Infrastructure Ready for Sudden Surge",
    description:
      "From edge caching and database indexing to modular component design, we build digital assets that effortlessly withstand 10x traffic spikes without degrading user response times.",
    commercialImpact: "Guarantees continuous uptime and protects your brand reputation during peak commercial events.",
  },
  {
    number: "04",
    title: "Full Code Ownership",
    summary: "No Proprietary Vendor Lock-in",
    description:
      "You retain 100% intellectual property ownership of your source code, design assets, and database architecture. No recurring agency license fees or hidden lock-ins.",
    commercialImpact: "Maximizes company enterprise value and gives your leadership team permanent independence.",
  },
];

export const technologyEcosystem: TechEcosystemPillar[] = [
  {
    category: "Frontend",
    title: "Interface Engineering",
    description: "Sub-second client rendering, fluid responsiveness, and strict accessibility standards.",
    disciplines: [
      { name: "Next.js 16 (Turbopack)", purpose: "Hybrid SSR/SSG rendering for maximal speed and crawlability." },
      { name: "React 19 & TypeScript", purpose: "Strict compile-time type safety preventing runtime failure." },
      { name: "Tailwind CSS Architecture", purpose: "Zero-runtime utility design tokens ensuring lean bundles." },
      { name: "WCAG 2.2 AA Accessibility", purpose: "Inclusive interfaces supporting all input and device modes." },
    ],
  },
  {
    category: "Backend",
    title: "Data & Application Logic",
    description: "Type-safe APIs, robust transaction handling, and resilient relational database design.",
    disciplines: [
      { name: "Node.js & Edge Runtimes", purpose: "Ultra-low latency request handling at geographic points of presence." },
      { name: "PostgreSQL & Prisma/Drizzle", purpose: "ACID-compliant relational data modeling with full migration safety." },
      { name: "REST & GraphQL APIs", purpose: "Well-documented, type-safe API contracts for web and mobile clients." },
      { name: "Secure Authentication", purpose: "State-of-the-art token security and role-based access management." },
    ],
  },
  {
    category: "Cloud",
    title: "Infrastructure & DevOps",
    description: "Zero-downtime deployments, global CDN distribution, and automated CI/CD testing pipelines.",
    disciplines: [
      { name: "Vercel Edge Network", purpose: "Global edge CDN distribution with instantaneous regional failover." },
      { name: "AWS Cloud Infrastructure", purpose: "Elastic compute, persistent object storage, and managed databases." },
      { name: "GitHub Actions CI/CD", purpose: "Automated linting, type-checking, and regression testing on commit." },
      { name: "Docker Containerization", purpose: "Consistent local-to-production execution environments." },
    ],
  },
  {
    category: "Automation",
    title: "Systems Integration",
    description: "Eliminating manual data transcription across fragmented commercial SaaS applications.",
    disciplines: [
      { name: "Webhook Orchestration", purpose: "Event-driven real-time notifications between commercial platforms." },
      { name: "CRM & ERP Connectors", purpose: "Synchronizing leads, customer orders, and inventory automatically." },
      { name: "Scheduled Batch Workers", purpose: "Offloading heavy analytical computations from user request paths." },
      { name: "Payment Gateway APIs", purpose: "Resilient Stripe and merchant transaction workflows with retry logic." },
    ],
  },
  {
    category: "AI",
    title: "Intelligent Systems",
    description: "Practical machine intelligence embedded directly into operational workflows.",
    disciplines: [
      { name: "LLM & API Integrations", purpose: "Context-aware automated content extraction and summary generation." },
      { name: "Vector Search Systems", purpose: "Semantic retrieval and intelligent documentation query engines." },
      { name: "Automated Data Structuring", purpose: "Transforming unstructured business inputs into clean JSON records." },
      { name: "Safety & Governance Bounds", purpose: "Strict guardrails ensuring deterministic and audited AI behavior." },
    ],
  },
];

export const footerConfig: FooterConfig = {
  columns: [
    {
      heading: "Services",
      links: [
        { label: "Digital Experiences", href: "/services/web-development" },
        { label: "Custom Software", href: "/services/custom-software" },
        { label: "Automation Systems", href: "/services/ai-integration" },
        { label: "Growth & Technical SEO", href: "/services/seo-marketing" },
        { label: "Brand & Product Design", href: "/services/branding" },
      ],
    },
    {
      heading: "Industries",
      links: [
        { label: "E-Commerce & Retail", href: "/industries" },
        { label: "Education & EdTech", href: "/industries" },
        { label: "Healthcare & Wellness", href: "/industries" },
        { label: "Real Estate & Property", href: "/industries" },
        { label: "Finance & FinTech", href: "/industries" },
        { label: "High-Growth Startups", href: "/industries" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "Our Work", href: "/work" },
        { label: "Methodology", href: "#why-sasvale" },
        { label: "Process Framework", href: "#process" },
        { label: "Insights & Articles", href: "/insights" },
        { label: "About Sasvale", href: "/about" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Technical Capabilities", href: "/services" },
        { label: "Case Study Index", href: "/work" },
        { label: "Engineering Insights", href: "/insights" },
        { label: "Client Privacy Protocol", href: "/privacy-policy" },
      ],
    },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Engagement", href: "/terms-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
  contactInfo: {
    email: "hello@sasvale.com",
    londonPresence: "London, United Kingdom",
    globalAvailability: "Global Engineering Availability (Mon - Fri)",
  },
};
