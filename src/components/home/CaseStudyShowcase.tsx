import Link from "next/link";
import Image from "next/image";
import { caseStudyShowcaseData } from "@/config/v2-foundation";

export function CaseStudyShowcase() {
  const [featuredProject, ...supportingProjects] = caseStudyShowcaseData;

  return (
    <section 
      id="work"
      className="py-20 sm:py-28 lg:py-32 border-t border-white/[0.08] bg-[#050811] text-white"
      aria-labelledby="case-studies-heading"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
              <span>CASE STUDIES · LIVE IN PRODUCTION</span>
            </div>
            <h2 
              id="case-studies-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.12] tracking-[-0.03em] text-white"
            >
              Outcomes, <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 bg-clip-text text-transparent">Not Slide Decks.</span>
            </h2>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4 shrink-0"
          >
            <span>View All Client Engagements</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" />
            </svg>
          </Link>
        </div>

        {/* Hero Featured Case Study (Wide Magazine Spread) */}
        {featuredProject && (
          <div className="mb-16 rounded-2xl overflow-hidden border border-white/[0.1] bg-[#080d1a] shadow-[0_24px_60px_rgba(0,0,0,0.8)] group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Media Half */}
              <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#050811] overflow-hidden">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.clientName}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#080d1a]" />
              </div>

              {/* Narrative Half */}
              <div className="lg:col-span-5 p-8 sm:p-12 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                    {featuredProject.projectCategory}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono">
                    LIVE SYSTEM
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-[1.18]">
                  {featuredProject.clientName} — {featuredProject.headline}
                </h3>
                <p className="text-[15px] text-slate-300 leading-relaxed">
                  {featuredProject.summary}
                </p>
                <div className="pt-4">
                  <Link
                    href={featuredProject.href}
                    className="inline-flex items-center justify-center bg-white text-slate-950 hover:bg-slate-100 font-semibold rounded-full px-7 py-3 text-[12px] uppercase tracking-[0.08em] shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-200"
                  >
                    <span>Inspect Deliverable</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Supporting Verified Portfolio Cases (Asymmetric 2-Column Editorial Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {supportingProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#070b16] flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#050811]">
                <Image
                  src={project.image}
                  alt={project.clientName}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b16] via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                    {project.projectCategory}
                  </span>
                  <span className="text-[12px] font-mono text-slate-400">
                    Verified Deployment
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.clientName}
                </h3>

                <p className="text-[14px] text-slate-400 leading-relaxed line-clamp-2">
                  {project.summary}
                </p>

                <div className="pt-3 border-t border-white/[0.06]">
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-white group-hover:text-cyan-300 transition-colors"
                  >
                    <span>View Engagement Summary</span>
                    <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" />
                    </svg>
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

export default CaseStudyShowcase;
