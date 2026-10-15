import Link from "next/link";

const expertiseAreas = [
  {
    title: "Design & Creative",
    href: "/services/branding",
    description:
      "Brand identity, web design, UX, social media design, content design, print and packaging. We make your business look like the serious operation it is and give you a visual language that works everywhere your brand shows up.",
  },
  {
    title: "Digital Marketing",
    href: "/services/seo-marketing",
    description:
      "SEO, PPC, social media marketing, email automation, local SEO, online reputation management, AI search optimisation. We get your business found by the right people and build the systems that keep them coming back.",
  },
  {
    title: "Website & CMS Development",
    href: "/services/web-development",
    description:
      "Custom web development, WordPress, Shopify, Webflow, CMS builds and migrations, conversion rate optimisation. We build websites and web products that are fast, manageable, and built to grow with your business.",
  },
];

export function SocialProofServicesSection() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        backgroundImage: "url('/assets/images/dispersion-glass-20-1-1-2-1.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right -10%",
        backgroundSize: "40%",
      }}
    >
      <div className="containers">
        {/* Top Headline & CTA */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="second-head">
            200 clients trusted us with their idea. Every single one of them is glad they did.
          </h2>
          <Link href="/contact" className="main-light-button mt-6">
            Join our list of clients
          </Link>
        </div>

        {/* Core Philosophy Split */}
        <div className="max-w-2xl mb-12">
          <h3 className="third-head mb-4">
            Three things most businesses need. All done properly.
          </h3>
          <p className="body-txt">
            We work across three core areas. Not because we do a little of everything but because
            these three disciplines are deeply connected. What you look like, what you build, and how
            people find you are not separate problems. They are one problem we solve together.
          </p>
        </div>

        {/* Section Label */}
        <div className="mb-6">
          <p className="base-head text-white">Areas of Expertise</p>
        </div>

        {/* 3 Discipline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertiseAreas.map((area) => (
            <Link
              key={area.title}
              href={area.href}
              className="card-glass group flex flex-col justify-between p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 block"
            >
              <div>
                <h4 className="fourth-head mb-4 text-white group-hover:text-[#7684FF] transition-colors">
                  {area.title}
                </h4>
                <p className="body-txt !mb-0 text-slate-300 leading-relaxed text-sm sm:text-base">
                  {area.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/contact" className="main-light-button">
            Book a free strategy call
          </Link>
        </div>
      </div>
    </section>
  );
}
