"use client";

import Link from "next/link";

export function ProjectCTA() {
  return (
    <section 
      id="contact"
      className="py-24 sm:py-32 lg:py-40 border-t border-white/[0.08] bg-[#050811] text-white relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, rgba(56, 189, 248, 0.08) 50%, transparent 70%)",
        }}
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Architectural Centered Invitation Box */}
        <div className="max-w-4xl mx-auto text-center p-10 sm:p-16 lg:p-20 rounded-3xl bg-[#080d1a]/90 border border-white/[0.1] shadow-[0_30px_80px_rgba(3,7,18,0.9)] backdrop-blur-xl">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
            <span>YOUR TECHNOLOGY PARTNER</span>
          </div>

          <h2 
            id="cta-heading"
            className="font-display text-3xl sm:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-[-0.035em] text-white mb-6"
          >
            Let&apos;s accelerate your <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 bg-clip-text text-transparent">digital transformation.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            Partner with an AI-first product engineering team that has shipped for Fortune 500s, scale-ups, and ambitious challengers across six continents.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 hover:shadow-[0_0_30px_rgba(56,189,248,0.35)] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Talk to Experts</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <a
              href="mailto:hello@sasvale.com"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.18] text-white text-sm font-medium backdrop-blur-md transition-all duration-300 w-full sm:w-auto"
            >
              <span>hello@sasvale.com</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[12px] text-slate-400 mt-10 pt-6 border-t border-white/[0.08]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Guaranteed 24-hour response
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Mutual NDA on request
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              Zero-pressure technical scoping
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProjectCTA;
