const reasons = [
  {
    title: "One team across design, development, and marketing",
    description:
      "When brand, build, and growth strategy come from the same team, the work is better. There is no briefing a new agency every time a problem crosses a discipline boundary. We hold the full picture and make decisions with all of it in view.",
  },
  {
    title: "We explain what we are doing and why",
    description:
      "Most agencies operate like a black box. You approve things without fully understanding them. We do not work that way. We explain the thinking behind every recommendation so you can make informed decisions and understand what you are investing in.",
  },
  {
    title: "Built for US businesses with zero offshore handoffs",
    description:
      "Direct founder access and engineering rigor. That means clear timezone alignment (EST - PST), direct communication with the engineers building your product, and no account managers or middlemen.",
  },
  {
    title: "We move fast without cutting corners",
    description:
      "Speed is important. So is doing things properly. We run in sprints, communicate constantly, and build processes that compress timelines without introducing the technical debt or brand inconsistencies that fast work usually creates.",
  },
  {
    title: "The same senior team from brief to delivery",
    description:
      "No bait and switch. The people you talk to in the sales process are the people who work on your project. We do not hand off to junior staff after you sign. Every engagement gets experienced hands from start to finish.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/dispersion-glass-20-2-2-1-1.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left -20px",
        backgroundSize: "500px",
      }}
    >
      <div className="containers">
        <div className="max-w-3xl mb-16">
          <h2 className="second-head text-white">
            Why businesses choose us over everyone else.
          </h2>
        </div>

        {/* 5 Cards Grid: 3 on row 1, 2 on row 2, fluid responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="card-glass p-8 rounded-2xl flex flex-col justify-between"
            >
              <h3 className="fourth-head mb-4 text-white">
                {item.title}
              </h3>
              <p className="body-txt !mb-0 text-slate-300 leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
