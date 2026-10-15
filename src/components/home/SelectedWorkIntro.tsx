import Link from "next/link";

interface SelectedProject {
  id: string;
  name: string;
  category: string;
  href: string;
}

const confirmedProjects: SelectedProject[] = [
  {
    id: "01",
    name: "Ethletia",
    category: "Digital Commerce",
    href: "/work",
  },
  {
    id: "02",
    name: "Rassani POS",
    category: "Custom Software & Systems",
    href: "/work",
  },
  {
    id: "03",
    name: "Engineers & Doctors",
    category: "Institutional Web Platform",
    href: "/work",
  },
  {
    id: "04",
    name: "TBS Salon",
    category: "Brand Identity & Digital Presence",
    href: "/work",
  },
];

export function SelectedWorkIntro() {
  return (
    <section
      id="selected-work"
      className="relative border-t border-white/10 py-16 lg:py-24"
      style={{
        backgroundColor: "rgba(10, 10, 12, 0.5)",
      }}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" aria-hidden="true" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#d4af37]">
              Selected Work
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-medium tracking-[-0.035em] leading-[1.14] text-[#f5f3ed] font-display">
            Engineered for commercial precision. Selected engagements across digital commerce,
            custom systems, and educational platforms.
          </h2>
        </div>

        {/* Restrained Indexed Project Preview (4 Rows) */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {confirmedProjects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors duration-200 hover:bg-white/[0.015] px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-md"
            >
              <div className="flex items-baseline gap-6 sm:gap-8">
                <span className="text-[14px] font-semibold tracking-[0.1em] text-[#d4af37] font-mono">
                  {project.id}
                </span>
                <span className="text-[22px] sm:text-[28px] font-medium tracking-[-0.02em] text-[#f5f3ed] group-hover:text-[#d4af37] transition-colors font-display">
                  {project.name}
                </span>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8 pl-12 sm:pl-0">
                <span className="text-[13px] sm:text-[14px] text-[#96938a] font-normal tracking-[0.02em]">
                  {project.category}
                </span>
                <span className="text-[#96938a] group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Link to Full Portfolio */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-[12px] sm:text-[13px] text-[#96938a]">
            Verified client portfolio. Case studies detail observable project architecture.
          </p>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[#d4af37] hover:text-[#e6bd43] transition-colors group"
          >
            <span>Explore All Work &amp; Case Studies</span>
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
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
