interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Strategy",
    subtitle: "Architecture & Scoping",
    description: "Aligning technical choices with your commercial goals before writing code. Transparent scoping, scalable data models, and zero unneeded technical debt.",
  },
  {
    number: "02",
    title: "Automation",
    subtitle: "Custom Software & Workflows",
    description: "Eliminating manual bottlenecks through tailored operational software, dependable API orchestrations, and intelligent data synchronization pipelines.",
  },
  {
    number: "03",
    title: "Scale",
    subtitle: "Compounding Digital Value",
    description: "Platforms engineered to perform under traffic surges, maintain organic search visibility, and remain cleanly maintainable for years to come.",
  },
];

export default function MethodologyPillars() {
  return (
    <section 
      id="methodology"
      className="py-20 sm:py-28 lg:py-32 border-t border-white/8"
      aria-labelledby="methodology-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" aria-hidden="true" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#d4af37]">
              Core Methodology
            </span>
          </div>
          <h2 
            id="methodology-heading"
            className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium leading-[1.14] tracking-[-0.03em] text-[#f5f3ed]"
          >
            The system behind every delivery.
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <div 
              key={pillar.number}
              className="p-8 sm:p-10 rounded-lg border border-white/8 bg-white/[0.015] transition-all duration-300 hover:border-[#d4af37]/30 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#d4af37] tracking-widest uppercase">
                  {pillar.number} / {pillar.title}
                </span>
                <h3 className="font-display text-2xl font-medium text-[#f5f3ed] mt-4 mb-3">
                  {pillar.subtitle}
                </h3>
                <p className="text-sm sm:text-base text-[#8e8b82] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
