interface ClientSegment {
  number: string;
  category: string;
  title: string;
  description: string;
  deliverables: string[];
}

const SEGMENTS: ClientSegment[] = [
  {
    number: "01",
    category: "Startups",
    title: "Launching Flagship Products",
    description: "Validating market traction and launching high-performance platforms with scalable architectures designed for long-term compounding.",
    deliverables: ["MVP Architecture", "Go-To-Market Storefronts", "Product Design Systems"],
  },
  {
    number: "02",
    category: "Growing Businesses",
    title: "Scaling Commercial Operations",
    description: "Overcoming growing pains by streamlining customer acquisition channels, upgrading e-commerce experiences, and optimizing conversion rates.",
    deliverables: ["E-Commerce Upgrades", "Conversion Optimization", "Automated Workflows"],
  },
  {
    number: "03",
    category: "Established Companies",
    title: "Modernizing Legacy Workflows",
    description: "Transitioning cumbersome legacy platforms into fast, secure, modern web architectures with zero disruption to daily customer operations.",
    deliverables: ["Cloud Modernization", "System Refactoring", "Performance Engineering"],
  },
  {
    number: "04",
    category: "Teams Needing Systems",
    title: "Bespoke Internal Software",
    description: "Eliminating manual spreadsheets and disjointed SaaS subscriptions with custom tools tailored precisely to operational realities.",
    deliverables: ["Operational Dashboards", "Inventory Engines", "Point-of-Sale Systems"],
  },
];

export default function WhoWeHelp() {
  return (
    <section 
      id="who-we-help"
      className="py-20 sm:py-28 lg:py-32 border-t border-white/8 bg-[#08080b]/50"
      aria-labelledby="who-we-help-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" aria-hidden="true" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#d4af37]">
              Client Fit
            </span>
          </div>
          <h2 
            id="who-we-help-heading"
            className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium leading-[1.14] tracking-[-0.03em] text-[#f5f3ed]"
          >
            Engineered for ambitious businesses at pivotal stages.
          </h2>
          <p className="mt-4 text-base text-[#8e8b82] leading-relaxed">
            Whether launching a new commercial platform or replacing legacy operational friction, we collaborate with organizations where software quality determines business velocity.
          </p>
        </div>

        {/* 4 Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SEGMENTS.map((seg) => (
            <div 
              key={seg.number}
              className="p-8 rounded-lg border border-white/8 bg-white/[0.015] flex flex-col justify-between transition-all duration-300 hover:border-white/20"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-semibold text-[#d4af37]">
                    {seg.number}
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#f5f3ed]/60">
                    {seg.category}
                  </span>
                </div>

                <h3 className="font-display text-xl font-medium text-[#f5f3ed] mb-3">
                  {seg.title}
                </h3>

                <p className="text-sm text-[#8e8b82] leading-relaxed mb-6">
                  {seg.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/6 flex flex-wrap gap-1.5">
                {seg.deliverables.map((item) => (
                  <span 
                    key={item}
                    className="text-[11px] px-2.5 py-1 rounded bg-white/[0.03] text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
