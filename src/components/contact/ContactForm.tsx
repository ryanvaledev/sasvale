"use client";

import React, { useState } from "react";

const SERVICE_OPTIONS = [
  "Web & Mobile Platforms",
  "Custom Software",
  "AI & Automation",
  "Brand & Product Design",
  "Technical Advisory",
  "General Inquiry",
];


export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedService, setSelectedService] = useState<string>(SERVICE_OPTIONS[0]);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();
    setSubmittedEmail(email);

    const data = {
      name: String(formData.get("name") || "").trim(),
      email,
      company: String(formData.get("company") || "").trim() || undefined,
      service: selectedService,
      message: String(formData.get("message") || "").trim(),
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
          : "An unexpected error occurred. Please try again or email us directly at inquiries@sasvale.com."
      );
    }
  };

  return (
    <div className="contact-form-card relative rounded-3xl p-7 sm:p-9 lg:p-11 shadow-2xl transition-all duration-300">
      {/* Soft Ambient Gold Glow */}
      <div
        className="pointer-events-none absolute -top-24 right-0 w-80 h-80 rounded-full blur-[140px] opacity-15 bg-[#C6A56B]"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {status === "success" ? (
          <div className="py-8 sm:py-12 text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#C6A56B]/15 border border-[#C6A56B]/30 flex items-center justify-center text-[#C6A56B] mb-6 shadow-[0_0_24px_rgba(198,165,107,0.2)]">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#F3F0E8] mb-3">
              Message received!
            </h3>

            <p className="text-[#A8A49B] text-base leading-relaxed mb-6 max-w-lg">
              Thank you for reaching out. We have sent a confirmation note
              {submittedEmail ? (
                <> to <span className="text-[#F3F0E8] font-medium">{submittedEmail}</span></>
              ) : null}
              . A senior architect will review your details and be in touch within 24 hours.
            </p>

            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] mb-8 text-xs text-[#A8A49B] space-y-1.5 max-w-md">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" />
                <span>Reviewed directly by lead partners &amp; architects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" />
                <span>Mutual NDA executed upon request</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C6A56B] hover:text-[#d8b87e] transition-colors cursor-pointer"
            >
              <span>← Send another project inquiry</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-7">
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

            {/* Service Selection Chips */}
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-[#A8A49B] mb-3">
                How can we help? <span className="text-[#C6A56B]">*</span>
              </label>
              <div className="flex flex-wrap gap-2.5">
                {SERVICE_OPTIONS.map((service) => {
                  const isSelected = selectedService === service;
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`contact-service-chip px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${isSelected ? "active" : ""
                        }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
              <input type="hidden" name="service" value={selectedService} />
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium uppercase tracking-wider text-[#A8A49B] mb-2"
                >
                  Your Name <span className="text-[#C6A56B]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Alex Vance"
                  className="contact-input w-full rounded-xl px-4 py-3.5 text-sm sm:text-base focus:outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-wider text-[#A8A49B] mb-2"
                >
                  Work Email <span className="text-[#C6A56B]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="alex@company.com"
                  className="contact-input w-full rounded-xl px-4 py-3.5 text-sm sm:text-base focus:outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Company / Organization (Optional) */}
            <div>
              <label
                htmlFor="company"
                className="block text-xs font-medium uppercase tracking-wider text-[#A8A49B] mb-2"
              >
                Company / Organization <span className="text-white/30 text-[11px] font-normal lowercase">(optional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="e.g. Acme Corp"
                className="contact-input w-full rounded-xl px-4 py-3.5 text-sm sm:text-base focus:outline-none transition-all duration-200"
              />
            </div>

            {/* Project Details */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-medium uppercase tracking-wider text-[#A8A49B]"
                >
                  Tell us about your project <span className="text-[#C6A56B]">*</span>
                </label>
                <span className="text-xs text-[#A8A49B]/50">
                  Goals, scope, or timeline
                </span>
              </div>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="What are you looking to build or solve? Tell us about your goals, existing stack, desired milestones, or challenges..."
                className="contact-input w-full rounded-xl px-4 py-3.5 text-sm sm:text-base focus:outline-none transition-all duration-200 resize-y"
              />
            </div>

            {/* Error Message */}
            {status === "error" && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-300 text-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Actions & Trust Signals */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-[#C6A56B] text-[#080909] hover:bg-[#d8b87e] shadow-lg shadow-[#C6A56B]/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none cursor-pointer w-full sm:w-auto"
                >
                  <span>
                    {status === "submitting" ? "Sending your message..." : "Send Project Inquiry"}
                  </span>
                  <span
                    className="text-base transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>

                <p className="text-xs text-[#A8A49B]/70 sm:text-right">
                  We typically reply in&nbsp; <span className="text-[#F3F0E8] font-medium"> under 24 hours</span>.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#A8A49B]/70">
                <div className="flex items-center gap-2">
                  <span className="text-[#C6A56B]">✓</span>
                  <span>Strict confidentiality &amp; mutual NDA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6A56B]">✓</span>
                  <span>Direct senior architect consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6A56B]">✓</span>
                  <span>No sales pressure or spam</span>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
