const stats = [
  {
    metric: "50+",
    description:
      "Modern web builds, custom software, and digital systems shipped for growing businesses.",
  },
  {
    metric: "100%",
    description:
      "Founder-led delivery. No junior handoffs, no outsourced dev shops. The people you plan with are the people who code.",
  },
  {
    metric: "EST – PST",
    description:
      "Real-time availability aligned with US business hours. Fast responses and seamless collaboration.",
  },
  {
    metric: "Modern Stack",
    description:
      "Built with Next.js, React, modern APIs, and battle-tested databases engineered for speed, conversion, and longevity.",
  },
];

export function RealNumbersSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="containers">
        <div className="max-w-3xl mb-16">
          <h2 className="second-head text-white">
            The numbers that tell you something real.
          </h2>
        </div>

        {/* 4 Columns (25% on desktop, 50% on tablet, 100% on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="card-glass p-8 rounded-2xl flex flex-col justify-between"
            >
              <p className="fourth-head !text-3xl lg:!text-4xl font-normal text-white mb-4">
                {stat.metric}
              </p>
              <p className="body-txt !mb-0 text-slate-300 leading-relaxed text-sm sm:text-base">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
