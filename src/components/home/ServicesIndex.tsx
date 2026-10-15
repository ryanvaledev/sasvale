import Link from "next/link";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  problemSolved: string;
  anchor: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Digital Experiences",
    problemSolved: "Slow, fragile, or generic websites that fail to convert traffic into measurable business.",
    description: "High-performance web applications, headless commerce storefronts, and responsive digital products engineered for sub-second page loads and seamless UX.",
    anchor: "/services#digital-experiences",
  },
  {
    number: "02",
    title: "Custom Software",
    problemSolved: "Off-the-shelf software that doesn't fit your unique operational workflows or scale requirements.",
    description: "Tailored management applications, point-of-sale platforms, and operational systems built to eliminate manual friction and scale with your operations.",
    anchor: "/services#custom-software",
  },
  {
    number: "03",
    title: "Automation Systems",
    problemSolved: "Costly administrative drag, repetitive data entry, and fragmented third-party tools.",
    description: "Reliable workflow orchestrations, automated business processes, and secure system integrations that keep your teams focused on high-leverage work.",
    anchor: "/services#automation-systems",
  },
  {
    number: "04",
    title: "Growth & Optimization",
    problemSolved: "Invisible search rankings, poor Core Web Vitals, and declining user retention.",
    description: "Technical search optimization, site performance engineering, conversion pathway refinement, and architectural audits to maximize organic reach.",
    anchor: "/services#growth-optimization",
  },
  {
    number: "05",
    title: "Brand & Product Design",
    problemSolved: "Disjointed visual presentation across platforms and inconsistent user interfaces.",
    description: "Distinct visual identities, design token architectures, and accessible component libraries that establish lasting brand equity and design consistency.",
    anchor: "/services#brand-product-design",
  },
];

export default function ServicesIndex() {
  return (
    <section 
      id="services"
      className="py-20 sm:py-28 lg:py-32 border-t border-white/8"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#d4af37]">
                Capabilities
              </span>
            </div>
            <h2 
              id="services-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium leading-[1.14] tracking-[-0.03em] text-[#f5f3ed]"
            >
              Bespoke digital architecture tailored to operational reality.
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-base text-[#8e8b82] leading-relaxed">
              We eliminate the bloat of traditional full-service agencies. We focus on five core disciplines where software engineering and thoughtful design directly resolve business constraints.
            </p>
          </div>
        </div>

        {/* Open Editorial Service Rows */}
        <div className="border-t border-white/8 divide-y divide-white/8">
          {SERVICES.map((srv) => (
            <div 
              key={srv.number}
              className="py-8 sm:py-10 group transition-colors duration-200 hover:bg-white/[0.015]"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
                
                {/* Index Number */}
                <div className="md:col-span-1">
                  <span className="font-mono text-sm font-semibold text-[#d4af37]">
                    {srv.number}
                  </span>
                </div>

                {/* Service Name */}
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl font-medium text-[#f5f3ed] group-hover:text-[#d4af37] transition-colors duration-200">
                    {srv.title}
                  </h3>
                  <div className="mt-1 text-xs text-[#8e8b82]/80 font-normal">
                    {srv.problemSolved}
                  </div>
                </div>

                {/* Service Description */}
                <div className="md:col-span-5">
                  <p className="text-sm sm:text-base text-[#8e8b82] leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Action Link */}
                <div className="md:col-span-2 md:text-right mt-2 md:mt-0">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] uppercase tracking-wider transition-all duration-200 hover:text-[#e5be42] group-hover:translate-x-1"
                  >
                    <span>Inquire</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
