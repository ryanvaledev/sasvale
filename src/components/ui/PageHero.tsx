import React from "react";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  action?: React.ReactNode;
}

export function PageHero({ eyebrow, title, description, action }: PageHeroProps) {
  return (
    <section className="relative w-full pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-[var(--border-subtle)]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-start text-left max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" aria-hidden="true" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-sky-400">
              {eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[32px] sm:text-[46px] lg:text-[56px] font-medium tracking-[-0.035em] leading-[1.1] text-[var(--text-primary)] font-display">
            {title}
          </h1>

          {/* Lead Description */}
          <p className="mt-5 sm:mt-6 text-[15px] sm:text-[17px] leading-[1.7] text-[var(--text-secondary)] font-normal font-body">
            {description}
          </p>

          {/* Optional Action / CTA */}
          {action && <div className="mt-8">{action}</div>}
        </div>
      </div>
    </section>
  );
}
