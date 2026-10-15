import Link from "next/link";
import Image from "next/image";

export function EditorialHero() {
  return (
    <section className="relative overflow-hidden w-full pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-28">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Thesis & Core Positioning (58%) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left min-w-0">
            {/* Brand Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5 px-2.5 py-1 rounded border border-white/10 bg-white/[0.02]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#d4af37]">
                Strategy. Automation. Scale.
              </span>
            </div>

            {/* Authoritative Main Headline */}
            <h1 className="text-[30px] sm:text-[44px] lg:text-[58px] xl:text-[64px] font-medium tracking-[-0.04em] leading-[1.06] text-[#f5f3ed] font-display break-words">
              Engineering custom digital systems built to compound and scale.
            </h1>

            {/* Concise Supporting Narrative */}
            <p className="mt-5 sm:mt-8 text-[15px] sm:text-[17px] leading-[1.7] text-[#96938a] font-normal font-body max-w-2xl">
              Sasvale designs and engineers high-performance web platforms, bespoke software, and
              automated workflows. Direct senior engineering, transparent architecture, and
              commercial longevity.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link href="/contact" className="btn-gold text-center" aria-label="Start a Conversation with Sasvale">
                Start a Conversation
              </Link>
              <a href="#selected-work" className="btn-secondary text-center" aria-label="View Selected Work">
                <span>View Selected Work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Digital Systems Presentation (42%) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end min-w-0">
            <div
              className="w-full max-w-[480px] rounded-lg border border-white/10 overflow-hidden"
              style={{
                backgroundColor: "rgba(15, 15, 17, 0.75)",
                boxShadow: "0 24px 48px rgba(0, 0, 0, 0.6)",
              }}
            >
              {/* Architectural Window / System Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-mono tracking-wider text-[#96938a] select-none">
                  sasvale.systems
                </span>
                <span className="w-8" aria-hidden="true" />
              </div>

              {/* Central System Presentation */}
              <div className="p-6 sm:p-8 flex flex-col items-center justify-center text-center">
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 mb-4">
                  <Image
                    src="/assets/brand/Icon.png"
                    alt="Sasvale Monogram"
                    fill
                    priority
                    sizes="(max-width: 640px) 80px, 112px"
                    className="object-contain mix-blend-screen"
                  />
                </div>
                <div className="text-[18px] sm:text-[22px] font-medium tracking-[0.14em] uppercase text-[#f5f3ed] font-display">
                  Sasvale
                </div>
                <div className="text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-[#96938a] mt-1 font-body">
                  Digital Systems &amp; Software
                </div>
              </div>

              {/* Core System Deliverables */}
              <div className="px-6 pb-6 pt-2 border-t border-white/10">
                <div className="grid grid-cols-3 gap-2 text-center pt-3">
                  <div className="py-2">
                    <div className="text-[10px] uppercase tracking-wider text-[#96938a]">Focus 01</div>
                    <div className="text-[12px] font-medium text-[#f5f3ed] mt-0.5">Platforms</div>
                  </div>
                  <div className="py-2 border-x border-white/10">
                    <div className="text-[10px] uppercase tracking-wider text-[#96938a]">Focus 02</div>
                    <div className="text-[12px] font-medium text-[#f5f3ed] mt-0.5">Software</div>
                  </div>
                  <div className="py-2">
                    <div className="text-[10px] uppercase tracking-wider text-[#96938a]">Focus 03</div>
                    <div className="text-[12px] font-medium text-[#f5f3ed] mt-0.5">Automation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
