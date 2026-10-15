"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { headerConfig, type NavItem } from "@/config/v2-foundation";

export function PremiumHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Scroll detection with requestAnimationFrame throttling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 24);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus during render when route changes
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ESC key accessibility
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setActiveMegaMenu(null);
      setMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const toggleMegaMenu = (label: string) => {
    setActiveMegaMenu((prev) => (prev === label ? null : label));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 pointer-events-none ${
        isScrolled ? "pt-2 sm:pt-3" : "pt-4 sm:pt-6"
      }`}
      aria-label="Site Navigation"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        <div
          ref={dropdownRef}
          className={`pointer-events-auto w-full flex items-center justify-between rounded-full transition-all duration-300 px-5 sm:px-8 border ${
            isScrolled
              ? "h-14 sm:h-16 bg-[#05070c]/92 backdrop-blur-xl border-white/[0.12] shadow-2xl"
              : "h-18 sm:h-20 bg-[#05070c]/60 backdrop-blur-md border-white/[0.08]"
          }`}
        >
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 py-1 focus-visible:outline-2 focus-visible:outline-sky-400 rounded"
            aria-label="Sasvale Home"
          >
            <div className="relative h-6 sm:h-7 w-28 sm:w-36 flex items-center">
              <Image
                src="/assets/brand/sasvale-logo.png"
                alt="Sasvale"
                fill
                priority
                sizes="(max-width: 640px) 112px, 144px"
                className="object-contain object-left mix-blend-screen"
              />
            </div>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center space-x-1"
          >
            {headerConfig.navLinks.map((item) => {
              const isActive = pathname === item.href;
              const isMegaOpen = activeMegaMenu === item.label;

              if (item.hasMegaMenu) {
                return (
                  <div key={item.label} className="relative">
                    <button
                      type="button"
                      onClick={() => toggleMegaMenu(item.label)}
                      aria-expanded={isMegaOpen}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-colors ${
                        isMegaOpen
                          ? "text-[#f5f3ed] bg-white/[0.06]"
                          : "text-[#96938a] hover:text-[#f5f3ed] hover:bg-white/[0.03]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isMegaOpen ? "rotate-180 text-cyan-400" : "text-[#96938a]"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Mega Dropdown Panel */}
                    {isMegaOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] max-w-[90vw] p-6 rounded-2xl bg-[#070b14] border border-white/[0.1] shadow-[0_24px_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl transition-all duration-200 z-50"
                        role="region"
                        aria-label={`${item.label} Submenu`}
                      >
                        <div className="grid grid-cols-12 gap-6">
                          {/* Columns */}
                          <div className="col-span-8 grid grid-cols-2 gap-6">
                            {item.megaMenuColumns?.map((col) => (
                              <div key={col.categoryTitle} className="space-y-3">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                                  {col.categoryTitle}
                                </p>
                                <ul className="space-y-2">
                                  {col.items.map((subItem) => (
                                    <li key={subItem.title}>
                                      <Link
                                        href={subItem.href}
                                        onClick={() => setActiveMegaMenu(null)}
                                        className="group block p-2 rounded-lg hover:bg-white/[0.03] transition-colors"
                                      >
                                        <div className="text-[13px] font-medium text-[#f5f3ed] group-hover:text-cyan-300 transition-colors">
                                          {subItem.title}
                                        </div>
                                        <p className="text-[11px] text-[#8e8b82] line-clamp-1 mt-0.5">
                                          {subItem.description}
                                        </p>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {/* Featured Callout Card */}
                          {item.featuredCallout && (
                            <div className="col-span-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                              <div>
                                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#96938a]">
                                  Direct Engagement
                                </span>
                                <h4 className="font-display text-[14px] font-medium text-[#f5f3ed] mt-2">
                                  {item.featuredCallout.title}
                                </h4>
                                <p className="text-[12px] text-[#8e8b82] leading-relaxed mt-1.5">
                                  {item.featuredCallout.description}
                                </p>
                              </div>
                              <Link
                                href={item.featuredCallout.href}
                                onClick={() => setActiveMegaMenu(null)}
                                className="inline-flex items-center text-[12px] font-semibold text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4 mt-4"
                              >
                                {item.featuredCallout.ctaLabel}
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-colors ${
                    isActive
                      ? "text-white bg-white/[0.08]"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href={headerConfig.primaryCta.href}
              className="hidden sm:inline-flex items-center justify-center bg-white text-slate-950 hover:bg-slate-100 font-semibold rounded-full px-5 py-2 text-[12px] uppercase tracking-[0.08em] shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-200"
            >
              <span>{headerConfig.primaryCta.label}</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-[#f5f3ed] hover:text-cyan-400 focus:outline-none transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-[76px] bottom-0 bg-[#05070c]/98 backdrop-blur-2xl border-t border-white/[0.1] px-6 py-8 overflow-y-auto pointer-events-auto z-50 flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-6">
            <nav className="space-y-3">
              {headerConfig.navLinks.map((item) => (
                <div key={item.label} className="border-b border-white/[0.06] pb-3">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-display text-[18px] font-medium text-[#f5f3ed] hover:text-sky-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.megaMenuColumns && (
                    <div className="mt-2 pl-3 space-y-1.5 border-l border-white/[0.08]">
                      {item.megaMenuColumns.flatMap((col) =>
                        col.items.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-[13px] text-[#8e8b82] hover:text-[#f5f3ed] py-1"
                          >
                            {sub.title}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/[0.08] space-y-4">
            <Link
              href={headerConfig.primaryCta.href}
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold w-full text-center text-[13px] font-semibold uppercase tracking-[0.08em] py-3.5"
            >
              <span>{headerConfig.primaryCta.label}</span>
            </Link>
            <p className="text-center text-[12px] text-[#8e8b82]">
              Direct Inquiries:{" "}
              <a href={`mailto:${headerConfig.contactEmail}`} className="text-sky-400 hover:underline">
                {headerConfig.contactEmail}
              </a>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
export default PremiumHeader;
