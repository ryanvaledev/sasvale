"use client";

import { useState } from "react";

export default function ContactIntake() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section 
      id="contact"
      className="py-20 sm:py-28 lg:py-32 border-t border-white/[0.08] bg-[#05070c]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Direct Invitation */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-sky-400" aria-hidden="true" />
                <span className="text-[11px] font-sans font-semibold tracking-[0.24em] uppercase text-slate-400">
                  START A CONVERSATION
                </span>
              </div>
              
              <h2 
                id="contact-heading"
                className="font-sans text-3xl sm:text-4xl lg:text-[54px] font-bold leading-[1.1] tracking-tight text-white mb-6"
              >
                Have an ambitious system to build? <span className="text-sky-400">Let&apos;s talk.</span>
              </h2>

              <p className="text-base sm:text-lg font-sans text-slate-300 leading-relaxed max-w-lg mb-8">
                Tell us about your project objectives. We provide direct, honest feedback on architectural feasibility, delivery scope, and technical roadmap.
              </p>
            </div>

            <div className="pt-8 border-t border-white/[0.08] text-sm font-sans text-slate-400">
              <div>
                Direct Email:{" "}
                <a 
                  href="mailto:hello@sasvale.com"
                  className="font-medium text-white hover:text-sky-400 transition-colors"
                >
                  hello@sasvale.com
                </a>
              </div>
              <div className="mt-2 text-xs text-slate-500">
                Global Client Engagements • Transparent Consultation
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Dark Accessible Intake Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0c101b] shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <span className="w-3 h-3 rounded-full bg-sky-400 inline-block mb-4" />
                  <h3 className="font-sans text-2xl font-bold text-white mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-sm font-sans text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. We will review your project details and respond shortly with architectural guidance.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-sm font-sans text-white placeholder:text-white/30 focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="sr-only">Work Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="Work Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-sm font-sans text-white placeholder:text-white/30 focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="sr-only">Company or Organization</label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="Company or Organization (Optional)"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-sm font-sans text-white placeholder:text-white/30 focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="sr-only">Project Description</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Describe what you want to build or improve *"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-sm font-sans text-white placeholder:text-white/30 focus:outline-none focus:border-sky-400 transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-white text-black text-xs font-sans font-bold uppercase tracking-[0.14em] transition-all duration-200 hover:bg-slate-200 cursor-pointer shadow-lg"
                  >
                    Submit Project Inquiry →
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
