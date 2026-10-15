"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const CIRCUMFERENCE = 138.23007675795088; // 2 * Math.PI * 22

const NAV_LINKS = [
  { number: "01", label: "WORK", href: "/work" },
  { number: "02", label: "CAPABILITIES", href: "/capabilities" },
  { number: "03", label: "PARTNERSHIPS", href: "/partnerships" },
  { number: "04", label: "APPROACH", href: "/approach" },
  { number: "05", label: "ABOUT", href: "/about" },
  { number: "06", label: "CONTACT", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/company/sasvale/" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/sasvaleltd/" },
  { label: "FACEBOOK", href: "https://www.facebook.com/SASValeglobal/" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-conditions" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight > 0) {
        const progress = Math.min(Math.max(scrollY / docHeight, 0), 1);
        setScrollProgress(progress);
      }

      setShowBackToTop(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Check periodically in case smooth scroll library animates
    const interval = setInterval(handleScroll, 250);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const strokeDashoffset = CIRCUMFERENCE - CIRCUMFERENCE * scrollProgress;

  return (
    <>
      <footer
        id="contact"
        className="site-footer relative pt-10 md:pt-16 pb-12 sm:pb-16 w-full select-none border-t border-[rgba(243,240,232,0.12)] bg-[#080909] text-[#F3F0E8] overflow-hidden"
        style={{
          backgroundColor: "var(--footer-bg, #080909)",
          color: "var(--footer-text, #F3F0E8)",
          borderColor: "var(--footer-border, rgba(243, 240, 232, 0.12))",
        }}
      >
        {/* Barely-visible warm radial glow behind the navigation area */}
        <div
          className="pointer-events-none absolute right-4 bottom-24 w-[500px] h-[260px] rounded-full blur-[150px] opacity-10 bg-radial from-[#C6A56B] to-transparent select-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl px-5 sm:px-6 xl:px-8 mx-auto leading-relaxed relative z-10">
          
          {/* Top Giant Sliced Logo - Solid Top Half */}
          <div
            className="relative border-b md:border-b-2 overflow-hidden max-w-full"
            style={{ borderColor: "var(--footer-border, rgba(243, 240, 232, 0.12))" }}
          >
            <Image
              alt="SASVALE"
              src="/assets/brand/sasvale_footer_logo.png"
              width={1915}
              height={152}
              priority
              className="w-full h-auto block select-none pointer-events-none max-w-full"
            />
          </div>

          {/* Bottom Giant Sliced Logo - Outlined Bottom Half */}
          <div className="relative mb-10 sm:mb-12 md:mb-16 overflow-hidden max-w-full">
            <Image
              alt="SASVALE"
              src="/assets/brand/sasvale_footer_logo_slice.png"
              width={1915}
              height={157}
              priority
              className="w-full h-auto block select-none pointer-events-none max-w-full"
            />
          </div>

          {/* Responsive Information & Editorial Navigation Grid */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-8 mb-12 md:mb-16">
            
            {/* Column 1: Brand Statement & Contact (Editorial Positioning) */}
            <div className="w-full md:max-w-[440px] lg:max-w-[490px] text-left">
              {/* Small Editorial Metadata Label */}
              <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-[#C6A56B]/75 mb-3 sm:mb-4 select-none">
                SASVALE / DIGITAL SYSTEMS
              </div>

              {/* Primary Editorial Statement */}
              <h2 className="text-[#F3F0E8] text-[22px] sm:text-[25px] lg:text-[28px] leading-[1.28] font-sans font-medium tracking-tight mb-5 sm:mb-6">
                Digital products and systems built <br />
                around <br />
                <span className="text-[#C6A56B] font-medium">how your business actually works.</span>
              </h2>

              {/* Deliberate Email Contact Link */}
              <div>
                <a
                  href="mailto:hello@sasvale.com"
                  className="group inline-flex items-center gap-2.5 text-base sm:text-lg font-medium text-[#F3F0E8] hover:text-[#C6A56B] transition-colors duration-200 relative"
                  aria-label="Send email to hello@sasvale.com"
                >
                  <span className="relative">
                    hello@sasvale.com
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[#C6A56B] transition-all duration-200 group-hover:w-full" />
                  </span>
                  <span
                    className="text-[#C6A56B] transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Column 2 & 3: Editorial Navigation & Social Groups */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-10 sm:gap-14 md:gap-16 lg:gap-20 md:ml-auto">
              
              {/* Group A: EXPLORE (Numbered Editorial Navigation) */}
              <nav aria-label="Footer Explore Navigation" className="flex flex-col">
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B]/80 mb-4 select-none">
                  EXPLORE
                </span>
                <ul className="space-y-2.5 text-left">
                  {NAV_LINKS.map((item) => (
                    <li key={item.number}>
                      <Link
                        href={item.href}
                        className="group inline-flex items-center gap-3 text-sm font-sans tracking-wide text-[#F3F0E8] transition-all duration-300 hover:translate-x-1"
                      >
                        <span className="text-[11px] font-mono text-[#A8A49B]/60 group-hover:text-[#C6A56B] transition-colors duration-300 tabular-nums w-4">
                          {item.number}
                        </span>
                        <span className="relative font-medium group-hover:text-[#C6A56B] transition-colors duration-300">
                          {item.label}
                          <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[#C6A56B]/60 transition-all duration-300 group-hover:w-full" />
                        </span>
                        <span
                          className="text-xs text-[#C6A56B] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Group B: CONNECT (Intentional Monochrome Social Links) */}
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B]/80 mb-4 select-none">
                  CONNECT
                </span>
                <ul className="space-y-2.5 text-left">
                  {SOCIAL_LINKS.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-between gap-3 text-sm font-sans font-medium tracking-wide text-[#F3F0E8] transition-all duration-300 hover:translate-x-1"
                      >
                        <span className="group-hover:text-[#C6A56B] transition-colors duration-300">
                          {item.label}
                        </span>
                        <span className="w-5 h-5 rounded-full border border-white/[0.12] flex items-center justify-center text-[#A8A49B] group-hover:text-[#C6A56B] group-hover:border-[#C6A56B]/40 group-hover:bg-[#C6A56B]/10 transition-all duration-300">
                          <svg
                            width="9"
                            height="9"
                            viewBox="0 0 10 10"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          >
                            <line x1="1.5" y1="8.5" x2="8.5" y2="1.5" />
                            <polyline points="3 1.5 8.5 1.5 8.5 7" />
                          </svg>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Subfooter: Legal Area */}
          <div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 border-t gap-4 sm:gap-0"
            style={{ borderColor: "var(--footer-border, rgba(243, 240, 232, 0.12))" }}
          >
            <div>
              <p className="text-[#A8A49B]/70 text-xs sm:text-sm font-sans">
                © 2026 SASVALE. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#A8A49B]/70 font-sans">
              {LEGAL_LINKS.map((link, idx) => (
                <div key={link.href} className="inline-flex items-center gap-3 sm:gap-4">
                  {idx > 0 && (
                    <span className="text-[rgba(243,240,232,0.18)]" aria-hidden="true">
                      •
                    </span>
                  )}
                  <Link
                    href={link.href}
                    className="relative py-0.5 hover:text-[#F3F0E8] transition-colors duration-200 group/legal"
                  >
                    <span>{link.label}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#C6A56B]/70 transition-all duration-200 group-hover/legal:w-full" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Interactive Back to Top Button with Progress Circle & Hover Animation */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-20 right-4 sm:bottom-6 sm:right-5 md:bottom-6 md:right-6 xl:right-8 z-40 group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full p-0 outline-none flex items-center justify-center shrink-0 aspect-square ${
          showBackToTop
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-12 scale-90 pointer-events-none"
        }`}
        style={{
          width: "50px",
          height: "50px",
          minWidth: "50px",
          minHeight: "50px",
        }}
        aria-label="Back to top"
      >
        <div className="absolute inset-0 bg-[#C6A56B]/20 blur-[20px] rounded-full scale-50 group-hover:scale-125 transition-transform duration-500" />
        <div
          className="back-to-top-circle absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10 group-hover:border-[#C6A56B]/40 group-hover:bg-[#C6A56B]/10 transition-colors duration-500 overflow-hidden"
          style={{ width: "100%", height: "100%" }}
        >
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
            viewBox="0 0 52 52"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle
              className="back-to-top-track text-white/10"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="transparent"
              r="22"
              cx="26"
              cy="26"
            />
            <circle
              className="text-[#C6A56B] transition-all duration-100 ease-out"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="currentColor"
              fill="transparent"
              r="22"
              cx="26"
              cy="26"
              style={{
                strokeDasharray: CIRCUMFERENCE,
                strokeDashoffset: strokeDashoffset,
              }}
            />
          </svg>
          <div className="back-to-top-arrow relative flex flex-col items-center overflow-hidden w-6 h-6 text-white group-hover:text-[#C6A56B] transition-colors duration-300">
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
              className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-hover:-translate-y-8"
              aria-hidden="true"
            >
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
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
              className="absolute top-8 w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-hover:-translate-y-8"
              aria-hidden="true"
            >
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
          </div>
        </div>
      </button>
    </>
  );
}
