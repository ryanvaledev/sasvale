"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { footerConfig } from "@/config/v2-foundation";

export function EnterpriseFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    areaOfInterest: "Custom Software",
    projectScope: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.areaOfInterest,
          message: `Company: ${formData.company || "Not provided"}. Scope: ${formData.projectScope || "General inquiry"}`,
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to submit. Please email hello@sasvale.com directly.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        areaOfInterest: "Custom Software",
        projectScope: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <footer 
      className="w-full bg-[#04060d] border-t border-white/[0.08] pt-20 pb-12 text-white"
      aria-label="Global Corporate Footer"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Split: Executive Invitation & Direct Intake Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/[0.08] items-start">
          
          {/* Left Column (5 cols): Invitation Narrative */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
              <span>EXECUTIVE INQUIRIES</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-[-0.03em] leading-[1.12] text-white mb-6">
              Engineering digital platforms for <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 bg-clip-text text-transparent">enduring scale.</span>
            </h2>

            <p className="text-[15px] sm:text-[16px] text-slate-400 leading-relaxed mb-8 max-w-md">
              Share your technical specifications or operational objectives. We review every brief directly with senior technology principals within one business day.
            </p>

            <div className="space-y-2 text-[13px] text-slate-400">
              <p>
                <strong className="text-white">Direct Principal Channel:</strong>{" "}
                <a href={`mailto:${footerConfig.contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4">
                  {footerConfig.contactInfo.email}
                </a>
              </p>
              <p>{footerConfig.contactInfo.londonPresence}</p>
              <p className="text-[12px] text-slate-400/80">{footerConfig.contactInfo.globalAvailability}</p>
            </div>
          </div>

          {/* Right Column (7 cols): Clean Executive Intake Form */}
          <div className="lg:col-span-7 w-full p-6 sm:p-8 rounded-2xl bg-[#080d1a] border border-white/[0.1] shadow-xl">
            <h3 className="font-display text-lg font-bold text-white mb-4">
              Request Technical Consultation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="footer-name" className="block text-[11px] uppercase tracking-[0.14em] text-slate-400 mb-1.5 font-medium">
                    Full Name
                  </label>
                  <input
                    id="footer-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/[0.12] text-[14px] text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="footer-email" className="block text-[11px] uppercase tracking-[0.14em] text-slate-400 mb-1.5 font-medium">
                    Corporate Email
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@enterprise.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/[0.12] text-[14px] text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="footer-company" className="block text-[11px] uppercase tracking-[0.14em] text-slate-400 mb-1.5 font-medium">
                    Organization / Domain
                  </label>
                  <input
                    id="footer-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company or website"
                    className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/[0.12] text-[14px] text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="footer-area" className="block text-[11px] uppercase tracking-[0.14em] text-slate-400 mb-1.5 font-medium">
                    Discipline
                  </label>
                  <select
                    id="footer-area"
                    value={formData.areaOfInterest}
                    onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/[0.12] text-[14px] text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="Custom Software">Custom Software &amp; POS</option>
                    <option value="Digital Experiences">Digital Experiences &amp; E-Commerce</option>
                    <option value="Automation Systems">Automation &amp; System Integration</option>
                    <option value="Growth Optimization">Growth &amp; Technical SEO</option>
                    <option value="Brand Design">Brand &amp; Product Design</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="footer-scope" className="block text-[11px] uppercase tracking-[0.14em] text-slate-400 mb-1.5 font-medium">
                  Project Context / Target Outcomes
                </label>
                <textarea
                  id="footer-scope"
                  rows={3}
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  placeholder="Outline key objectives, timeline constraints, or system bottlenecks..."
                  className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/[0.12] text-[14px] text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-[13px] text-red-400 font-medium" role="alert">
                  {errorMessage}
                </p>
              )}

              {status === "success" && (
                <p className="text-[13px] text-emerald-400 font-medium" role="status">
                  Consultation request received. A Sasvale engineering principal will respond shortly.
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-[11px] text-slate-400">
                  Confidential review. Mutual NDA honored on request.
                </span>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-slate-950 hover:bg-slate-100 font-semibold rounded-full px-7 py-2.5 text-[12px] uppercase tracking-[0.08em] shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-200"
                >
                  <span>{status === "submitting" ? "Processing..." : "Submit Brief"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Middle: Multi-Column Corporate Sitemap */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 border-b border-white/[0.08]">
          {footerConfig.columns.map((col) => (
            <div key={col.heading} className="space-y-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Legal & Brand */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-slate-400">
          <div className="flex items-center gap-4">
            <Link href="/" className="relative h-5 w-24 block opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src="/assets/brand/sasvale-logo.png"
                alt="Sasvale"
                fill
                sizes="96px"
                className="object-contain object-left mix-blend-screen"
              />
            </Link>
            <span>&copy; {new Date().getFullYear()} Sasvale Technologies Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            {footerConfig.legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-cyan-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default EnterpriseFooter;
