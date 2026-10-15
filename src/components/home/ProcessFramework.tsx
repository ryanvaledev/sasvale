interface Step {
  stage: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    stage: "01",
    title: "Discovery & Architecture",
    description: "We audit technical prerequisites, map user journeys, lock project scope, and deliver a detailed system architecture specification before writing code.",
  },
  {
    stage: "02",
    title: "Iterative Engineering",
    description: "Direct collaboration with weekly demonstrable software builds. You test working features in real staging environments throughout delivery.",
  },
  {
    stage: "03",
    title: "Verification & Hardening",
    description: "Automated regression testing, Core Web Vitals performance tuning, semantic SEO validation, and cross-device accessibility audits.",
  },
  {
    stage: "04",
    title: "Deployment & Support",
    description: "Zero-downtime production cutover, clean codebase documentation handover, and ongoing technical advisory for post-launch scaling.",
  },
];

export default function ProcessFramework() {
  return (
    <section 
      id="process"
      className="py-20 sm:py-28 lg:py-32 border-t border-white/8"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" aria-hidden="true" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#d4af37]">
              Delivery Framework
            </span>
          </div>
          <h2 
            id="process-heading"
            className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium leading-[1.14] tracking-[-0.03em] text-[#f5f3ed]"
          >
            Disciplined execution from discovery to deployment.
          </h2>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/8">
          {STEPS.map((step) => (
            <div key={step.stage} className="flex flex-col">
              <span className="font-mono text-xs font-bold text-[#d4af37] tracking-widest mb-4">
                STAGE {step.stage}
              </span>
              <h3 className="font-display text-xl font-medium text-[#f5f3ed] mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-[#8e8b82] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
