"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "Mostly growth-stage founders, marketing-led brands, and enterprise teams who need an outside partner. We work across industries and company sizes. The common thread is that our clients take their digital presence seriously and want it done properly.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Our clients are spread across North America, the Middle East, Europe, South Asia, and beyond. We have built the remote workflow to make international engagements run smoothly.",
  },
  {
    question: "How do I know which services I actually need?",
    answer:
      "That is what the free strategy call is for. We look at where your business is, where you are trying to go, and what the actual gaps are. Then we tell you honestly what will move the needle and what would be nice to have but is not urgent.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends entirely on the scope. A brand identity project might take three to four weeks. A full web build might take eight to twelve. A marketing retainer is ongoing. We scope every project individually and give you a timeline before anything starts.",
  },
  {
    question: "What does working with SAS Vale actually look like day to day?",
    answer:
      "Regular check-ins, shared project boards, clear milestones, and direct access to the people doing the work. You always know where things stand. Nothing goes quiet and nothing gets delivered as a surprise at the end.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="FAQs"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/dispersion-glass-25-1-1.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom 40px right -20%",
        backgroundSize: "45%",
      }}
    >
      <div className="containers">
        <div className="max-w-2xl mb-12">
          <h2 className="third-head text-white">Frequently asked questions</h2>
        </div>

        <div className="flex flex-col space-y-4 max-w-4xl">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="card-glass !p-6 rounded-xl transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <h3 className="fourth-head !text-lg sm:!text-xl font-normal text-white">
                    {faq.question}
                  </h3>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-light text-lg transition-all duration-300 ${
                      isOpen
                        ? "bg-white text-black rotate-45"
                        : "bg-[#7684FF] text-white"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="mt-4 pt-4 border-t border-white/10 body-txt text-slate-300 !mb-0 text-sm sm:text-base leading-relaxed"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
