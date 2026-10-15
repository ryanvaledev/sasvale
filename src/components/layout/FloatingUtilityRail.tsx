"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun, Mail, Calendar } from "lucide-react";
import { RiWhatsappLine } from "react-icons/ri";

// ============================================================================
// FLOATING UTILITY RAIL (SASVALE)
// Pure utility control for secondary actions.
// Displays only verified destinations. Collapses cleanly without empty spaces.
// ============================================================================

// Verified SASVALE destinations
const EMAIL_ADDRESS = "hello@sasvale.com";

// Set to official verified URLs when active; null cleanly collapses the rail
const WHATSAPP_URL: string | null = null;
const CALENDAR_URL: string | null = null;

function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("theme-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("theme-change", callback);
  };
}

function getThemeSnapshot(): boolean {
  if (typeof document === "undefined") return true;
  return !(
    document.documentElement.getAttribute("data-theme") === "light" ||
    document.documentElement.classList.contains("theme-light")
  );
}

function getServerThemeSnapshot(): boolean {
  return true;
}

export function FloatingUtilityRail() {
  const isDark = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const toggleTheme = () => {
    const nextDark = !isDark;
    if (typeof document !== "undefined") {
      if (nextDark) {
        document.documentElement.setAttribute("data-theme", "dark");
        document.documentElement.classList.remove("theme-light");
        try {
          localStorage.setItem("sasvale-theme", "dark");
        } catch (e) {}
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        document.documentElement.classList.add("theme-light");
        try {
          localStorage.setItem("sasvale-theme", "light");
        } catch (e) {}
      }
      window.dispatchEvent(new Event("theme-change"));
    }
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESKTOP SIDEBAR: Fixed right-side vertical utility rail                */}
      {/* ========================================================================= */}
      <aside
        aria-label="Utility Actions"
        className="fixed right-2 sm:right-3 xl:right-3 2xl:right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2.5 2xl:gap-3.5 select-none"
      >
        {/* 01: Theme Toggle */}
        <div className="relative group flex items-center">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="utility-rail-btn w-10 h-10 2xl:w-11 2xl:h-11 rounded-full bg-[#0B0B0B]/90 hover:bg-[#141414] border border-white/[0.12] hover:border-[#C6A56B]/50 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center justify-center text-[#A8A49B] hover:text-[#F3F0E8] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            {isDark ? (
              <Moon className="w-[18px] h-[18px] 2xl:w-[19px] 2xl:h-[19px]" strokeWidth={1.8} />
            ) : (
              <Sun className="w-[18px] h-[18px] 2xl:w-[19px] 2xl:h-[19px] text-[#C6A56B]" strokeWidth={1.8} />
            )}
          </button>
          {/* Subtle Editorial Tooltip */}
          <span className="utility-tooltip pointer-events-none absolute right-12 2xl:right-14 px-2.5 py-1 rounded-md bg-[#0B0B0B] border border-white/10 text-[11px] font-mono font-medium text-[#F3F0E8] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
            Toggle theme
          </span>
        </div>

        {/* 02: WhatsApp (Collapses cleanly when no verified URL exists) */}
        {WHATSAPP_URL && (
          <div className="relative group flex items-center justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="utility-rail-btn relative z-10 w-10 h-10 2xl:w-11 2xl:h-11 rounded-full bg-[#0B0B0B]/90 hover:bg-[#141414] border border-white/[0.12] hover:border-[#C6A56B]/50 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center justify-center text-[#A8A49B] hover:text-[#F3F0E8] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <RiWhatsappLine className="w-[19px] h-[19px] 2xl:w-[21px] 2xl:h-[21px]" />
            </a>
            <span className="utility-tooltip pointer-events-none absolute right-12 2xl:right-14 px-2.5 py-1 rounded-md bg-[#0B0B0B] border border-white/10 text-[11px] font-mono font-medium text-[#F3F0E8] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
              Chat on WhatsApp
            </span>
          </div>
        )}

        {/* 03: Calendar (Collapses cleanly when no verified URL exists) */}
        {CALENDAR_URL && (
          <div className="relative group flex items-center">
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a conversation"
              className="utility-rail-btn w-10 h-10 2xl:w-11 2xl:h-11 rounded-full bg-[#0B0B0B]/90 hover:bg-[#141414] border border-white/[0.12] hover:border-[#C6A56B]/50 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center justify-center text-[#A8A49B] hover:text-[#F3F0E8] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Calendar className="w-[18px] h-[18px] 2xl:w-[19px] 2xl:h-[19px]" strokeWidth={1.8} />
            </a>
            <span className="utility-tooltip pointer-events-none absolute right-12 2xl:right-14 px-2.5 py-1 rounded-md bg-[#0B0B0B] border border-white/10 text-[11px] font-mono font-medium text-[#F3F0E8] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
              Book a conversation
            </span>
          </div>
        )}

        {/* 04: Email (Official hello@sasvale.com) */}
        <div className="relative group flex items-center">
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            aria-label="Email SASVALE"
            className="utility-rail-btn w-10 h-10 2xl:w-11 2xl:h-11 rounded-full bg-[#0B0B0B]/90 hover:bg-[#141414] border border-white/[0.12] hover:border-[#C6A56B]/50 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center justify-center text-[#A8A49B] hover:text-[#C6A56B] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Mail className="w-[18px] h-[18px] 2xl:w-[19px] 2xl:h-[19px]" strokeWidth={1.8} />
          </a>
          <span className="utility-tooltip pointer-events-none absolute right-12 2xl:right-14 px-2.5 py-1 rounded-md bg-[#0B0B0B] border border-white/10 text-[11px] font-mono font-medium text-[#F3F0E8] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
            Email SASVALE
          </span>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. MOBILE DOCK: Compact, unobtrusive bottom-right utility pill            */}
      {/* ========================================================================= */}
      <nav
        aria-label="Quick Utility Dock"
        className="utility-mobile-dock fixed bottom-5 right-4 z-40 md:hidden flex items-center gap-2.5 px-3 py-2 rounded-full bg-[#0B0B0B]/95 backdrop-blur-xl border border-white/[0.14] shadow-[0_8px_32px_rgba(0,0,0,0.85)] select-none"
      >
        {/* Moon / Sun Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="w-8 h-8 rounded-full flex items-center justify-center text-[#A8A49B] active:text-[#F3F0E8] active:scale-90 transition-transform cursor-pointer"
        >
          {isDark ? (
            <Moon className="w-4 h-4" strokeWidth={1.8} />
          ) : (
            <Sun className="w-4 h-4 text-[#C6A56B]" strokeWidth={1.8} />
          )}
        </button>

        {/* WhatsApp (Mobile) - only if verified */}
        {WHATSAPP_URL && (
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#A8A49B] active:scale-90 transition-transform cursor-pointer"
          >
            <RiWhatsappLine className="w-4 h-4" />
          </a>
        )}

        {/* Calendar (Mobile) - only if verified */}
        {CALENDAR_URL && (
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a conversation"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#A8A49B] active:scale-90 transition-transform cursor-pointer"
          >
            <Calendar className="w-4 h-4" strokeWidth={1.8} />
          </a>
        )}

        {/* Divider between theme and action */}
        <span className="w-px h-4 bg-white/10" aria-hidden="true" />

        {/* Email (Mobile) */}
        <a
          href={`mailto:${EMAIL_ADDRESS}`}
          aria-label="Email SASVALE"
          className="w-8 h-8 rounded-full flex items-center justify-center text-[#A8A49B] active:text-[#C6A56B] active:scale-90 transition-transform cursor-pointer"
        >
          <Mail className="w-4 h-4" strokeWidth={1.8} />
        </a>
      </nav>
    </>
  );
}

export default FloatingUtilityRail;
