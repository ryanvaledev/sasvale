import Link from "next/link";
import Image from "next/image";

const partnerLogos = [
  { src: "/assets/icons/clip-path-group-6.svg", alt: "Magoos", href: "/work" },
  { src: "/assets/icons/clip-path-group-5.svg", alt: "Cottread", href: "/work" },
  { src: "/assets/icons/group-4-1.svg", alt: "SAS Vale", href: "/work" },
  { src: "/assets/icons/clip-path-group-3.svg", alt: "Client Partner 3", href: "/work" },
  { src: "/assets/icons/clip-path-group-2.svg", alt: "Client Partner 2", href: "/work" },
  { src: "/assets/icons/clip-path-group-1-1.svg", alt: "Client Partner 1", href: "/work" },
  { src: "/assets/icons/clip-path-group-1.svg", alt: "Bloom Beauty", href: "/work" },
  { src: "/assets/images/digitac-2x.svg", alt: "Digitac", href: "#" },
  { src: "/assets/images/asset-1-2x.svg", alt: "Partner Asset", href: "#" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-36 lg:pb-24">
      {/* Top Banner Content */}
      <div className="containers relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 className="prmry-head">
            Web development and software built for{" "}
            <span className="c-p">growing businesses.</span>
          </h1>

          <div className="body-txt mt-6 max-w-3xl mx-auto">
            Custom websites, software, and digital growth for growing businesses. Real engineering,
            direct founder access, delivered remotely. No account managers, no outsourced middlemen —
            just senior engineers who build what you need.
          </div>

          <Link href="/contact" className="main-light-button mt-4">
            Book a free strategy call
          </Link>
        </div>

        {/* Floating Rotating Dispersion Background Element */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[450px] sm:w-[600px] lg:w-[700px] h-full -z-10 opacity-60"
          style={{
            backgroundImage: "url('/assets/images/dispersion-glass-5-1-1.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 20%",
            backgroundSize: "contain",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Trust Metric Strip */}
      <div className="containers mt-20 pt-10 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="md:w-1/2">
            <p className="base-head">
              50+ projects delivered. 15+ modern technologies. 100% remote-first engineering serving
              US businesses.
            </p>
          </div>
          <div className="md:w-1/2 md:text-right">
            <Link
              href="/work"
              className="base-head inline-flex items-center gap-3 group text-white hover:text-[#7684FF] transition-colors"
            >
              <span>See our work</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="17"
                viewBox="0 0 32 17"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M28.165 8.05074L-1.16116e-05 8.05074L-1.15723e-05 8.94926L28.165 8.94926C25.2358 10.4019 23.2124 13.4658 23.2124 17L24.0947 17C24.0947 12.5613 27.6415 8.94926 32 8.94926L32 8.05074C27.6415 8.05074 24.0947 4.43869 24.0947 8.54135e-07L23.2124 8.927e-07C23.2124 3.53418 25.2358 6.59813 28.165 8.05074Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Partner Logos Carousel / Grid */}
      <div className="containers mt-10">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8 py-8 opacity-80 hover:opacity-100 transition-opacity">
          {partnerLogos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center p-2">
              <Link href={logo.href} className="inline-block transition-transform hover:scale-105" aria-label={logo.alt}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={50}
                  className="h-9 sm:h-12 w-auto object-contain brightness-95"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
