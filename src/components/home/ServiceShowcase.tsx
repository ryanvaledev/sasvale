import Link from "next/link";
import Image from "next/image";
import { serviceShowcaseData } from "@/config/v2-foundation";

export function ServiceShowcase() {
  return (
    <section 
      className="py-20 sm:py-28 lg:py-32 border-t border-white/[0.08] bg-[#050811] text-white"
      aria-label="Engineering Deep Dives"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
            <span>CASE ARCHITECTURE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.12] tracking-[-0.03em] text-white">
            Real systems. <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 bg-clip-text text-transparent">Verified architecture.</span> Measurable impact.
          </h2>
        </div>

        {/* Alternating Editorial Storytelling Spreads */}
        <div className="space-y-24 sm:space-y-32">
          {serviceShowcaseData.map((item, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <div 
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Narrative Column */}
                <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                    {item.serviceTitle}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-[1.18] tracking-[-0.025em] mt-2 mb-6">
                    {item.headline}
                  </h3>

                  {/* Challenge / Approach / Outcome Structured Architecture */}
                  <div className="space-y-6 text-[14px] sm:text-[15px] leading-relaxed border-l border-white/[0.1] pl-6">
                    <div>
                      <strong className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-white mb-1">
                        The Challenge
                      </strong>
                      <p className="text-slate-400">
                        {item.challenge}
                      </p>
                    </div>

                    <div>
                      <strong className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-400 mb-1">
                        The Architectural Approach
                      </strong>
                      <p className="text-slate-400">
                        {item.approach}
                      </p>
                    </div>

                    <div>
                      <strong className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-400 mb-1">
                        The Commercial Outcome
                      </strong>
                      <p className="text-slate-400">
                        {item.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="pt-8">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] hover:border-cyan-400/50 text-white text-[13px] font-medium transition-all duration-200"
                    >
                      <span>Review Technical Capabilities</span>
                      <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* High-Fidelity Visual Viewport */}
                <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c101d] shadow-[0_24px_60px_rgba(0,0,0,0.8)] group">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050811]/90 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ServiceShowcase;
