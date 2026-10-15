import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import InteractivePortfolioHero from "@/components/home/InteractivePortfolioHero";
import EnterpriseCredibilityMatrix from "@/components/home/EnterpriseCredibilityMatrix";
import BuiltAiFirstCarousel from "@/components/home/BuiltAiFirstCarousel";
import ProprietaryProductsRail from "@/components/home/ProprietaryProductsRail";
import IndustriesHorizonExperience from "@/components/home/IndustriesHorizonExperience";
import ServicesTabbedMatrix from "@/components/home/ServicesTabbedMatrix";
import ExecutiveVideoTestimonials from "@/components/home/ExecutiveVideoTestimonials";
import DecadeOfDeliveryCarousel from "@/components/home/DecadeOfDeliveryCarousel";
import AiResearchLabAndStack from "@/components/home/AiResearchLabAndStack";
import ExecutiveFaqAndInsights from "@/components/home/ExecutiveFaqAndInsights";

export const metadata: Metadata = constructMetadata({
  title: "Sasvale | Scalable Digital Platforms & Custom Software Solutions",
  description:
    "Sasvale designs and engineers high-performance web applications, scalable digital platforms, and custom software solutions for ambitious businesses.",
  pathname: "/",
});

export default function HomePage() {
  return (
    <div className="w-full bg-[var(--color-bg-primary)] min-h-screen text-[var(--color-text-primary)] transition-colors duration-200">
      {/* 1. Interactive Portfolio Hero (Preserved Old Banner) */}
      <InteractivePortfolioHero />

      {/* 2. Enterprise Credibility & Social Proof Matrix (Exact SDLC Parity) */}
      <EnterpriseCredibilityMatrix />

      {/* 3. Built AI-First 3:4 Feature Carousel (Exact SDLC Parity) */}
      <BuiltAiFirstCarousel />

      {/* 4. AI Innovations & Proprietary Products Showcase (Exact SDLC Parity) */}
      <ProprietaryProductsRail />

      {/* 5. Industries We Transform Horizon Experience (Exact SDLC Parity) */}
      <IndustriesHorizonExperience />

      {/* 6. Services Engineered For Scale Tabbed Matrix (Exact SDLC Parity) */}
      {/* <ServicesTabbedMatrix /> */}

      {/* 7. Executive Video Testimonials (Exact SDLC Parity) */}
      {/* <ExecutiveVideoTestimonials /> */}

      {/* 8. A Decade of Delivery Experience 3D Draggable Metric Carousel */}
      <DecadeOfDeliveryCarousel />

      {/* 9. Pushing Boundaries of AI R&D Lab & Modern Stack */}
      <AiResearchLabAndStack />

      {/* 10. Editorial Insights Magazine Grid */}
      <ExecutiveFaqAndInsights />
    </div>
  );
}
