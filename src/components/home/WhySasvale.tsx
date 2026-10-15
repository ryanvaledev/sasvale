interface ValueProp {
  number: string;
  title: string;
  description: string;
}

const VALUES: ValueProp[] = [
  {
    number: "01",
    title: "Direct Collaboration",
    description: "You work directly with the engineers and designers building your platform. No account manager layers, no junior handoffs, and no communication telephone games.",
  },
  {
    number: "02",
    title: "Full Commercial Ownership",
    description: "We build digital systems to be owned and maintained by your business. Clean, modular code, comprehensive documentation, and zero proprietary lock-in from day one.",
  },
  {
    number: "03",
    title: "Factual Scoping & Transparency",
    description: "Milestones committed on engineering realities rather than speculative sales pitching. You receive honest technical counsel and predictable delivery cycles.",
  },
];

export default function WhySasvale() {
  return (
    <section 
      id="why-sasvale"
      className="py-20 sm:py-28 lg:py-32 border-t border-white/8 bg-[#08080b]/50"
      aria-labelledby="why-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" aria-hidden="true" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#d4af37]">
              The Difference
            </span>
          </div>
          <h2 
            id="why-heading"
            className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium leading-[1.14] tracking-[-0.03em] text-[#f5f3ed]"
          >
            Clear communication. Predictable outcomes.
          </h2>
        </div>

        {/* 3 Value Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((item) => (
            <div 
              key={item.number}
              className="p-8 sm:p-10 rounded-lg border border-white/8 bg-white/[0.015]"
            >
              <span className="font-mono text-xs font-semibold text-[#d4af37]">
                {item.number}
              </span>
              <h3 className="font-display text-2xl font-medium text-[#f5f3ed] mt-4 mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-[#8e8b82] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
