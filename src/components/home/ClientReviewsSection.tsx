const reviews = [
  {
    author: "James Berkley",
    role: "Business Owner, USA",
    quote:
      "Working with SAS Vale has been instrumental to my online business coming to life. The support has been very applaudable. They are knowledgeable, able to work with their client to bring their vision to life.",
  },
  {
    author: "D.A. Rowe",
    role: "Founder, USA",
    quote:
      "SAS Vale did a fantastic job on our creative package. The website design was sleek and innovative, exactly what we asked for. Most designers require constant back and forth. Not these guys. You share your vision and they hit the nail on the head right away.",
  },
  {
    author: "Sydney Cummings",
    role: "Client, USA",
    quote:
      "SAS Vale is my go-to web developer and has been helpful over the past two years across multiple sites. They are experts in development and all things UX.",
  },
  {
    author: "Wen Qian",
    role: "Founder",
    quote:
      "I cannot recommend SAS Vale highly enough. They have been instrumental in bringing my vision to life, from logo design and website development all the way through to our marketing campaign. Their creativity knows no bounds and they consistently deliver beyond expectations.",
  },
];

export function ClientReviewsSection() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/dispersion-glass-12-1-1.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom 20px left -15%",
        backgroundSize: "35%",
      }}
    >
      <div className="containers">
        <div className="mb-14">
          <h2 className="third-head text-white">What our clients actually say.</h2>
        </div>

        {/* Reviews Grid (2x2 on desktop, 1-col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <article
              key={idx}
              className="card-glass p-8 sm:p-10 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <h3 className="fourth-head !text-2xl text-white mb-1">{review.author}</h3>
                <p className="base-head !text-base text-slate-400 mb-6">{review.role}</p>
                <p className="body-txt text-slate-300 leading-relaxed min-h-[120px]">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Authentic Review Stars Badge */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5" aria-label="5 out of 5 stars">
                  {/* Trust badge primary green star */}
                  <div className="w-6 h-6 bg-[#00B67A] flex items-center justify-center rounded-sm shadow-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  {/* 4 purple rating stars */}
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-5 h-5 flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#7684FF"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-light">Verified Client</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
