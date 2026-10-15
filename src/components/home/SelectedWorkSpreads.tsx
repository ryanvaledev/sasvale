import Link from "next/link";
import Image from "next/image";

interface CaseStudy {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "ethletia",
    number: "01",
    name: "Ethletia",
    category: "Digital Commerce & Brand Experience",
    description: "Custom digital commerce storefront and brand platform engineered for responsive mobile performance, fast product filtering, and high-conversion checkout workflows.",
    tags: ["Headless Storefront", "Mobile Checkout", "Catalog Architecture"],
    image: "/assets/projects/ethletia.jpg",
    alt: "Ethletia modern athletic apparel online storefront",
  },
  {
    id: "rassani-pos",
    number: "02",
    name: "Rassani POS",
    category: "Custom Software & Systems",
    description: "Point-of-sale and retail software management application engineered to handle live transactions, inventory workflows, and multi-user terminal operations.",
    tags: ["Transaction Engine", "Inventory Workflows", "Terminal Interface"],
    image: "/assets/projects/rassani-pos.jpg",
    alt: "Rassani POS retail point-of-sale transaction interface",
  },
  {
    id: "tbs-salon",
    number: "03",
    name: "TBS Salon",
    category: "Brand Identity & Appointment Platform",
    description: "Modern visual identity and online appointment platform engineered for contemporary beauty studios, streamlining client reservations and brand presentation.",
    tags: ["Brand Identity", "Appointment Flow", "Studio Showcase"],
    image: "/assets/projects/tbs-salon.jpg",
    alt: "TBS Salon luxury brand and appointment scheduling platform",
  },
];

export default function SelectedWorkSpreads() {
  return (
    <section 
      id="work"
      className="py-20 sm:py-28 lg:py-32 border-t border-white/8 bg-[#08080b]/50"
      aria-labelledby="work-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" aria-hidden="true" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#d4af37]">
              Selected Engagements
            </span>
          </div>
          <h2 
            id="work-heading"
            className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium leading-[1.14] tracking-[-0.03em] text-[#f5f3ed]"
          >
            Delivered platforms. Observable commercial impact.
          </h2>
        </div>

        {/* Alternating Case Study Spreads */}
        <div className="space-y-24 sm:space-y-32">
          {CASE_STUDIES.map((cs, idx) => {
            const isReverse = idx % 2 === 1;
            return (
              <article 
                key={cs.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Visual Media Showcase */}
                <div 
                  className={`lg:col-span-7 ${isReverse ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0c0c10] shadow-2xl aspect-[16/10] group">
                    <Image
                      src={cs.image}
                      alt={cs.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                    />
                  </div>
                </div>

                {/* Case Study Metadata & Narrative */}
                <div 
                  className={`lg:col-span-5 ${isReverse ? "lg:order-1" : "lg:order-2"} flex flex-col justify-center`}
                >
                  <span className="font-mono text-xs font-semibold text-[#d4af37] tracking-wider uppercase mb-3">
                    {cs.number} / {cs.category}
                  </span>
                  
                  <h3 className="font-display text-3xl sm:text-4xl font-medium text-[#f5f3ed] tracking-tight mb-4">
                    {cs.name}
                  </h3>

                  <p className="text-base text-[#8e8b82] leading-relaxed mb-6">
                    {cs.description}
                  </p>

                  {/* Deliverable Tags */}
                  <div className="flex flex-wrap gap-2 mb-8" aria-label="Project Deliverables">
                    {cs.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs rounded bg-white/[0.03] border border-white/8 text-[#f5f3ed]/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div>
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d4af37] hover:text-[#e5be42] transition-colors"
                    >
                      <span>Inquire About Similar Architecture</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
