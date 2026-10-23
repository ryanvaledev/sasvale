"use client";

import React, { useState } from "react";

const DISCIPLINES = [
  "Digital Products & Web Platforms",
  "Custom Software & Management Systems",
  "Intelligent Automation & AI Workflows",
  "Brand Architecture & Product Design",
  "Technical Architecture Advisory",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>(DISCIPLINES[0]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      service: selectedDiscipline,
      message: String(formData.get("message") || "").trim(),
      budget: (formData.get("budget") as string)?.trim() || undefined,
      website_trap: String(formData.get("website_trap") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again or email inquiries@sasvale.com directly."
      );
    }
  };

  return (
    <div className="relative rounded-2xl border border-white/[0.08] bg-[#0c0d10] p-6 sm:p-8 lg:p-10 overflow-hidden shadow-2xl">
      {/* Subtle Inner Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(198,165,107,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(198,165,107,0.015)_1px,transparent_1px)] bg-[size:32px_32px] select-none"
        aria-hidden="true"
      />

      {/* Subtle Ambient Glow */}
      <div
        className="pointer-events-none absolute -right-20 top-0 w-[300px] h-[300px] rounded-full blur-[140px] opacity-10 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {status === "success" ? (
          <div className="py-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A56B]/10 border border-[#C6A56B]/30 text-[#C6A56B] text-xs font-mono font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B] animate-pulse" />
              INTAKE CONFIRMED
            </div>
            
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#F3F0E8] mb-3">
              Thank you for reaching out.
            </h3>
            
            <p className="text-[#A8A49B] text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              We have received your requirements. A senior technical architect will review your project parameters and follow up directly.
            </p>

            <div className="p-4 rounded-xl border border-white/[0.08] bg-black/40 mb-6 text-xs font-mono text-[#A8A49B] space-y-1">
              <div>{"//"} DISPATCH: Direct to Lead Engineering Team</div>
              <div>{"//"} CONFIDENTIALITY: Standard NDA terms apply</div>
            </div>

            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#C6A56B] hover:underline cursor-pointer"
            >
              <span>← Send another project inquiry</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot anti-spam field */}
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="website_trap">Leave this field blank</label>
              <input
                type="text"
                id="website_trap"
                name="website_trap"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Primary Discipline Pills */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8A49B] mb-2.5 font-mono">
                Primary Discipline <span className="text-[#C6A56B]">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {DISCIPLINES.map((discipline) => {
                  const isSelected = selectedDiscipline === discipline;
                  return (
                    <button
                      key={discipline}
                      type="button"
                      onClick={() => setSelectedDiscipline(discipline)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer border ${
                        isSelected
                          ? "bg-[#C6A56B]/15 text-[#F3F0E8] border-[#C6A56B] font-semibold shadow-[0_0_12px_rgba(198,165,107,0.15)]"
                          : "bg-white/[0.02] border-white/[0.08] text-[#A8A49B] hover:text-[#F3F0E8] hover:border-white/[0.2]"
                      }`}
                    >
                      {discipline}
                    </button>
                  );
                })}
              </div>
              <input type="hidden" name="service" value={selectedDiscipline} />
            </div>

            {/* Two-Column Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#A8A49B] mb-2 font-mono"
                >
                  Full Name <span className="text-[#C6A56B]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Alex Vance"
                  className="w-full rounded-xl px-4 py-3.5 text-sm sm:text-base bg-[#080909] border border-white/[0.1] text-[#F3F0E8] placeholder:text-[#A8A49B]/40 focus:outline-none focus:border-[#C6A56B] focus:ring-1 focus:ring-[#C6A56B]/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#A8A49B] mb-2 font-mono"
                >
                  Work Email <span className="text-[#C6A56B]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="alex@company.com"
                  className="w-full rounded-xl px-4 py-3.5 text-sm sm:text-base bg-[#080909] border border-white/[0.1] text-[#F3F0E8] placeholder:text-[#A8A49B]/40 focus:outline-none focus:border-[#C6A56B] focus:ring-1 focus:ring-[#C6A56B]/20 transition-all"
                />
              </div>
            </div>

            {/* Project Scope & Context */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#A8A49B] font-mono"
                >
                  Project Scope &amp; Context <span className="text-[#C6A56B]">*</span>
                </label>
                <span className="text-[11px] font-mono text-[#A8A49B]/50">
                  Brief description
                </span>
              </div>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Describe what you are building, your current technology stack, operational bottlenecks, or specific goals..."
                className="w-full rounded-xl px-4 py-3.5 text-sm sm:text-base bg-[#080909] border border-white/[0.1] text-[#F3F0E8] placeholder:text-[#A8A49B]/40 focus:outline-none focus:border-[#C6A56B] focus:ring-1 focus:ring-[#C6A56B]/20 transition-all resize-y"
              />
            </div>

            {/* Target Timeline or Scope (Dropdown) */}
            <div>
              <label
                htmlFor="budget"
                className="block text-xs font-semibold uppercase tracking-wider text-[#A8A49B] mb-2 font-mono"
              >
                Target Timeline or Scope (Optional)
              </label>
              <select
                id="budget"
                name="budget"
                defaultValue=""
                className="w-full rounded-xl px-4 py-3.5 text-sm sm:text-base bg-[#080909] border border-white/[0.1] text-[#F3F0E8] focus:outline-none focus:border-[#C6A56B] focus:ring-1 focus:ring-[#C6A56B]/20 transition-all cursor-pointer"
              >
                <option value="" className="bg-[#0c0d10] text-[#A8A49B]">
                  Select approximate timeline
                </option>
                <option value="Immediate (< 1 month)" className="bg-[#0c0d10] text-[#F3F0E8]">
                  Immediate (start within 30 days)
                </option>
                <option value="Targeting next quarter" className="bg-[#0c0d10] text-[#F3F0E8]">
                  Targeting next quarter delivery
                </option>
                <option value="Exploratory Architecture Review" className="bg-[#0c0d10] text-[#F3F0E8]">
                  Preliminary architecture &amp; feasibility scoping
                </option>
                <option value="Ongoing Engineering Retainer" className="bg-[#0c0d10] text-[#F3F0E8]">
                  Long-term dedicated partnership retainer
                </option>
              </select>
            </div>

            {status === "error" && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Signature Gold Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group relative inline-flex items-center justify-between sm:justify-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#080909] hover:bg-[#d8b87e] shadow-lg shadow-[#C6A56B]/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none cursor-pointer w-full sm:w-auto"
              >
                <span>{status === "submitting" ? "Transmitting..." : "Send Project Inquiry"}</span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </button>

              <span className="text-[11px] font-mono text-[#A8A49B]/60">
                Direct architect review · Confidentiality ensured
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
