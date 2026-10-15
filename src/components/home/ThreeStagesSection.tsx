import Link from "next/link";
import Image from "next/image";

export function ThreeStagesSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="containers">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (7 cols): Heading + 3 Stages + Dark CTA */}
          <div className="lg:col-span-7">
            <h2 className="third-head mb-8 text-white">
              We work with businesses at three stages. Each one needs something different from us.
            </h2>

            <div className="space-y-6 body-txt text-slate-300">
              <div>
                <h3 className="fourth-head !text-xl !font-semibold text-white mb-2">
                  Founders building something real
                </h3>
                <p className="leading-relaxed">
                  You have the idea, the energy, and the plan. What you need is a team that can
                  build the brand, ship the product, and get it in front of the right people fast. We
                  have done it for over 200 founders and we know exactly what needs to happen at each
                  stage.
                </p>
              </div>

              <div>
                <h3 className="fourth-head !text-xl !font-semibold text-white mb-2">
                  Brands that have grown but need to look like it
                </h3>
                <p className="leading-relaxed">
                  Your business is not what it was two years ago but your website, your brand, and
                  your marketing still look like the early days. We come in at this point a lot. We
                  know how to close the gap between what a business has become and how it currently
                  presents itself.
                </p>
              </div>

              <div>
                <h3 className="fourth-head !text-xl !font-semibold text-white mb-2">
                  Enterprise teams that need a partner, not just a vendor
                </h3>
                <p className="leading-relaxed">
                  You have internal teams. You need outside expertise that integrates with how you
                  work, delivers to your standards, and does not need to be managed like a junior hire.
                  We operate as an extension of your team. Senior people on every engagement.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact" className="dark-button">
                Let&apos;s talk about your website
              </Link>
            </div>
          </div>

          {/* Right Column (5 cols): Banner Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/assets/images/home-page-banner.webp"
                alt="We work with businesses at three stages. Each one needs something different from us."
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
