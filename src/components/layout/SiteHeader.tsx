"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Work", href: "/work" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Approach", href: "/approach" },
  { name: "About", href: "/about" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Close mobile menu on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Keyboard accessibility: ESC to close mobile menu
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    },
    []
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none transition-all duration-200"
    >
      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 h-16 sm:h-18 flex items-center justify-between rounded-full border border-white/10 bg-[#05070c]/90 backdrop-blur-xl shadow-2xl pointer-events-auto transition-all duration-200">
        {/* Left: Official Sasvale Wordmark */}
        <Link
          href="/"
          className="inline-flex items-center py-1 focus-visible:outline-2 focus-visible:outline-[#C6A56B] focus-visible:outline-offset-4 rounded"
          aria-label="SASVALE"
        >
          <div className="relative h-[30px] sm:h-10 w-36 sm:w-48 flex items-center">
            <Image
              src="/assets/brand/sasvale-logo.png"
              alt="SASVALE"
              fill
              priority
              sizes="(max-width: 640px) 144px, 192px"
              className="header-logo object-contain object-left mix-blend-screen transition-all duration-200"
            />
          </div>
        </Link>

        {/* Center: Primary Navigation (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 xl:gap-2"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-[13px] font-medium tracking-[0.06em] uppercase transition-colors duration-150 rounded ${
                  isActive
                    ? "text-[#C6A56B]"
                    : "text-slate-200 hover:text-[#C6A56B]"
                } focus-visible:outline-2 focus-visible:outline-[#C6A56B]`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Primary Conversion Action (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-semibold tracking-tight text-slate-950 bg-white hover:bg-[#C6A56B] hover:text-slate-950 transition-all duration-200 shadow-[0_0_20px_rgba(198,165,107,0.3)] border border-white/20"
              aria-label="Start a conversation"
            >
              Start a conversation
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-200 hover:text-[#C6A56B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A56B] rounded"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full max-w-[1340px] mx-auto mt-2 rounded-2xl border border-white/10 px-6 py-6 transition-all shadow-2xl pointer-events-auto bg-[#05070c]/95 backdrop-blur-2xl">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 text-base font-medium tracking-[0.04em] ${
                  pathname === link.href
                    ? "text-[#C6A56B]"
                    : "text-slate-200 hover:text-[#C6A56B]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-white/10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold tracking-tight text-slate-950 bg-white hover:bg-[#C6A56B] hover:text-slate-950 transition-all duration-200 shadow-[0_0_20px_rgba(198,165,107,0.3)]"
              >
                Start a conversation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
