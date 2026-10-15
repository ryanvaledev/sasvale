import Link from "next/link";

interface ArticleItem {
  id: string;
  category: string;
  title: string;
  summary: string;
}

const INSIGHTS: ArticleItem[] = [
  {
    id: "headless-nextjs",
    category: "Architecture",
    title: "Why headless Next.js platforms outperform monolithic CMS suites in commercial flexibility.",
    summary: "How modern decoupled frontend architectures enable sub-second browsing speeds and faster feature iterations.",
  },
  {
    id: "custom-software-vs-saas",
    category: "Operations",
    title: "Eliminating operational drag: Where custom software outperforms off-the-shelf SaaS stacks.",
    summary: "When relying on fragmented subscription tools creates hidden friction that tailored software easily solves.",
  },
  {
    id: "design-system-equity",
    category: "Product Design",
    title: "Engineering digital brand longevity: How structured design systems protect commercial equity.",
    summary: "Why tokenized interfaces and reusable component architectures compound development efficiency across multi-platform teams.",
  },
];

export default function InsightsPreview() {
  return (
    <section 
      id="insights"
      className="py-20 sm:py-28 lg:py-32 border-t border-white/8"
      aria-labelledby="insights-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" aria-hidden="true" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#d4af37]">
              Strategic Perspective
            </span>
          </div>
          <h2 
            id="insights-heading"
            className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium leading-[1.14] tracking-[-0.03em] text-[#f5f3ed]"
          >
            Editorial perspectives on digital systems.
          </h2>
        </div>

        {/* 3 Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((item) => (
            <Link
              key={item.id}
              href="/insights"
              className="p-8 rounded-lg border border-white/8 bg-[#09090c] flex flex-col justify-between h-[280px] group transition-all duration-200 hover:border-[#d4af37]/30"
            >
              <div>
                <span className="font-mono text-[11px] font-semibold tracking-widest text-[#d4af37] uppercase">
                  {item.category}
                </span>
                <h3 className="font-display text-xl font-medium text-[#f5f3ed] mt-4 leading-snug group-hover:text-[#d4af37] transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#d4af37] uppercase tracking-wider mt-6">
                <span>Read Perspective</span>
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
