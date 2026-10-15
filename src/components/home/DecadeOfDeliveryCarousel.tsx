"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

// ============================================================================
// THE SASVALE APPROACH - 3D DRAGGABLE CAROUSEL
// Content and visual theme aligned to SASVALE's restrained design system.
// ============================================================================
export interface ChapterCard {
  id: string;
  metric: string;    // "01", "02", etc.
  title: string;     // e.g. "Understand First"
  subtitle: string;  // e.g. "Start with the business, users, and the actual problem."
  glowColor: string; // Restrained champagne/gold accent
}

export const CHAPTERS_DATA: ChapterCard[] = [
  {
    id: "understand",
    metric: "01",
    title: "Understand First",
    subtitle: "Start with the business, users, and the actual problem.",
    glowColor: "#C6A56B",
  },
  {
    id: "build",
    metric: "02",
    title: "Build What Matters",
    subtitle: "Focus the product around what actually needs to be solved.",
    glowColor: "#C6A56B",
  },
  {
    id: "design",
    metric: "03",
    title: "Design With Purpose",
    subtitle: "Make complex products easier to understand and use.",
    glowColor: "#C6A56B",
  },
  {
    id: "automate",
    metric: "04",
    title: "Automate the Repetitive",
    subtitle: "Remove unnecessary manual work with better workflows.",
    glowColor: "#C6A56B",
  },
  {
    id: "connect",
    metric: "05",
    title: "Connect the Systems",
    subtitle: "Let information move where it needs to go.",
    glowColor: "#C6A56B",
  },
  {
    id: "engineer",
    metric: "06",
    title: "Engineer for Growth",
    subtitle: "Build foundations that can support what comes next.",
    glowColor: "#C6A56B",
  },
  {
    id: "improve",
    metric: "07",
    title: "Keep Improving",
    subtitle: "Build, learn, refine, and make the system better over time.",
    glowColor: "#C6A56B",
  },
];

interface LayoutConfig {
  cardWidth: number;
  cardHeight: number;
  spacing: number;      // Horizontal distance for immediate side cards (u = 1)
  outerSpacing: number; // Horizontal distance for secondary outer cards (u = 2)
  sideRotation: number; // Gentle inward angle for side cards (e.g. 21-23 deg)
  outerRotation: number;// Inward angle for outer cards (e.g. 33-35 deg)
  sideDepth: number;    // translateZ for side cards (e.g. -75px)
  outerDepth: number;   // translateZ for outer cards (e.g. -210px)
  sideScale: number;    // Scale for side cards
  outerScale: number;   // Scale for outer cards
  isMobile: boolean;
}

const getLayoutConfig = (w: number): LayoutConfig => {
  if (w < 640) {
    // Mobile: ONE primary card in center, adjacent card peeks at edge
    return {
      cardWidth: 282,
      cardHeight: 380,
      spacing: 275,
      outerSpacing: 480,
      sideRotation: 14,
      outerRotation: 24,
      sideDepth: -45,
      outerDepth: -150,
      sideScale: 0.86,
      outerScale: 0.72,
      isMobile: true,
    };
  } else if (w < 1024) {
    // Tablet: reduced perspective, centered composition
    return {
      cardWidth: 300,
      cardHeight: 400,
      spacing: 295,
      outerSpacing: 510,
      sideRotation: 18,
      outerRotation: 30,
      sideDepth: -60,
      outerDepth: -180,
      sideScale: 0.88,
      outerScale: 0.75,
      isMobile: false,
    };
  } else if (w < 1440) {
    // Desktop: Active 324px (dominance), side cards visible ~268px, wider span (~1060px)
    return {
      cardWidth: 324,
      cardHeight: 420,
      spacing: 330,
      outerSpacing: 550,
      sideRotation: 22,
      outerRotation: 34,
      sideDepth: -75,
      outerDepth: -210,
      sideScale: 0.90,
      outerScale: 0.77,
      isMobile: false,
    };
  } else {
    // Large Desktop: expand further (~1180px span) so section has rich presence
    return {
      cardWidth: 336,
      cardHeight: 435,
      spacing: 355,
      outerSpacing: 595,
      sideRotation: 21,
      outerRotation: 33,
      sideDepth: -75,
      outerDepth: -210,
      sideScale: 0.90,
      outerScale: 0.77,
      isMobile: false,
    };
  }
};

export default function DecadeOfDeliveryCarousel() {
  // Continuous rotation in degrees; 0 = Card 01 faces front center
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [layout, setLayout] = useState<LayoutConfig>(() => getLayoutConfig(1200));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      setLayout(getLayoutConfig(window.innerWidth));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startXRef = useRef(0);
  const startRotationRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animFrameIdRef = useRef<number | null>(null);
  const hasDraggedRef = useRef(false);

  const totalCards = CHAPTERS_DATA.length;
  const anglePerCard = 360 / totalCards; // ~51.43 degrees per card for 7 cards

  // ==========================================================================
  // CONTINUOUS AUTO-SPINNING & MOMENTUM LOOP
  // Gentle auto-spin; smooth damping when released.
  // NO MOUSE SCROLL HIJACKING: Normal page scrolling is completely untouched.
  // ==========================================================================
  useEffect(() => {
    const loop = () => {
      if (!isDragging) {
        if (Math.abs(velocityRef.current) > 0.01) {
          // Momentum coasting after pointer drag release
          setRotation((prev) => prev + velocityRef.current);
          velocityRef.current *= 0.94; // Smooth damping
        } else {
          // Continuous gentle auto-spin
          setRotation((prev) => prev - 0.07);
        }
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isDragging]);

  // Pointer drag interactions ("DRAG TO EXPLORE")
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    hasDraggedRef.current = false;
    startXRef.current = e.clientX;
    startRotationRef.current = rotation;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const now = performance.now();
    const dt = now - lastTimeRef.current || 16;
    const dx = e.clientX - lastXRef.current;

    if (Math.abs(e.clientX - startXRef.current) > 4) {
      hasDraggedRef.current = true;
    }

    // Direct degree mapping for fluid dragging
    const deltaRotation = (e.clientX - startXRef.current) * 0.22;
    setRotation(startRotationRef.current + deltaRotation);

    // Calculate velocity for smooth throw release
    velocityRef.current = (dx / dt) * 3.0;

    lastXRef.current = e.clientX;
    lastTimeRef.current = now;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  const handleCardClick = useCallback((diff: number) => {
    if (hasDraggedRef.current) return;
    if (Math.abs(diff) > 8) {
      velocityRef.current = 0;
      setRotation((prev) => prev - diff);
    }
  }, []);

  // Compute smooth, continuous 3D card transforms based on relative angular displacement
  const computeTransform = useCallback((diff: number) => {
    const u = diff / anglePerCard; // Offset in card units (-3.5 to +3.5)
    const absU = Math.abs(u);
    const sign = Math.sign(u) || 1;

    let x = 0;
    let z = 0;
    let rotateY = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 30;

    if (absU <= 1) {
      // Transition between center active card and immediate side cards
      const t = absU;
      x = sign * t * layout.spacing;
      z = t * layout.sideDepth;
      // Negative rotation on the right so card faces gently inward toward user
      rotateY = -sign * t * layout.sideRotation;
      scale = 1 - t * (1 - layout.sideScale);
      zIndex = Math.round(30 - 10 * t);
      opacity = layout.isMobile ? (t > 0.85 ? Math.max(0, 1 - (t - 0.85) * 2.5) : 1) : 1;
    } else if (absU <= 2) {
      // Transition between side card and secondary outer card
      const t = absU - 1;
      x = sign * (layout.spacing + t * (layout.outerSpacing - layout.spacing));
      z = layout.sideDepth + t * (layout.outerDepth - layout.sideDepth);
      rotateY = -sign * (layout.sideRotation + t * (layout.outerRotation - layout.sideRotation));
      scale = layout.sideScale - t * (layout.sideScale - layout.outerScale);
      zIndex = Math.round(20 - 10 * t);
      opacity = layout.isMobile ? Math.max(0, 0.65 - t * 1.3) : Math.max(0, 1 - t * 0.55);
    } else {
      // Smooth fade for cards passing behind the visible arc
      const t = Math.min(1, absU - 2);
      x = sign * (layout.outerSpacing + t * 65);
      z = layout.outerDepth - t * 80;
      rotateY = -sign * (layout.outerRotation + t * 10);
      scale = layout.outerScale - t * 0.12;
      zIndex = 5;
      opacity = layout.isMobile ? 0 : Math.max(0, 0.45 - t * 0.9);
    }

    return { x, z, rotateY, scale, opacity, zIndex };
  }, [anglePerCard, layout]);

  return (
    <section
      id="decade-experience"
      className="relative w-full pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 lg:pb-12 bg-[#0B0B0B] border-t border-white/[0.08] overflow-hidden select-none"
      aria-label="The Sasvale Approach"
    >
      {/* Ambient Atmospheric Lighting & Edge Vignettes */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] lg:w-[850px] h-[300px] rounded-full blur-[150px] opacity-20 bg-[#C6A56B]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[250px] rounded-full blur-[160px] opacity-12 bg-[#8B5CF6]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[250px] rounded-full blur-[160px] opacity-12 bg-[#3B82F6]"
        aria-hidden="true"
      />
      {/* Side Vignettes for cinematic depth */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent z-20" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent z-20" aria-hidden="true" />

      {/* Main container with precise symmetric horizontal padding */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-[#C6A56B] block mb-2 sm:mb-3">
              THE SASVALE APPROACH
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] 2xl:text-[56px] font-bold text-[#F3F0E8] tracking-tight leading-[1.08] mb-2 sm:mb-3">
              Good systems start <br />
              <span className="text-[#C6A56B]">with better decisions.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8A49B] max-w-xl leading-relaxed">
              We start with the problem, build what matters, and create systems that can evolve with the business.
            </p>
          </div>

          {/* Right Indicator: Exact "• DRAG TO EXPLORE" */}
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#A8A49B] tracking-wider self-start lg:self-end mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B] animate-ping inline-block mr-1" />
            <span className="uppercase text-[11px] tracking-[0.2em] font-semibold text-[#F3F0E8]">
              DRAG TO EXPLORE
            </span>
          </div>
        </div>

        {/* 3D Cylindrical Carousel Viewport */}
        {/* Note: NO onWheel handler here so vertical page scroll is 100% natural */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative w-full h-[400px] sm:h-[430px] lg:h-[455px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-none mt-1 sm:mt-2 overflow-visible"
          style={{
            perspective: "1200px",
            perspectiveOrigin: "50% 50%",
          }}
        >
          {/* Card Anchor Stage - Precisely Centered in Viewport */}
          <div
            className="relative flex items-center justify-center"
            style={{
              width: `${layout.cardWidth}px`,
              height: `${layout.cardHeight}px`,
              transformStyle: "preserve-3d",
            }}
          >
            {CHAPTERS_DATA.map((card, i) => {
              const cardAngle = i * anglePerCard;
              let diff = ((cardAngle + rotation) % 360 + 360) % 360;
              if (diff > 180) diff -= 360;

              const transform = computeTransform(diff);

              return (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(diff)}
                  className="carousel-3d-card group absolute inset-0 rounded-[24px] border border-white/[0.12] hover:border-[#C6A56B]/60 p-6 sm:p-7 lg:p-8 pt-7 sm:pt-8 lg:pt-9 flex flex-col justify-start select-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_20px_45px_rgba(0,0,0,0.85)] hover:shadow-[0_24px_54px_-10px_rgba(198,165,107,0.25)] transition-shadow duration-300 bg-[#0B0B0B]"
                  style={{
                    transform: `translate3d(${transform.x}px, 0px, ${transform.z}px) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
                    zIndex: transform.zIndex,
                    opacity: transform.opacity,
                    visibility: transform.opacity > 0.01 ? "visible" : "hidden",
                    pointerEvents: transform.opacity > 0.3 ? "auto" : "none",
                    willChange: "transform, opacity",
                  }}
                >
                  {/* Clipped background container for restrained champagne/gold ambient glows */}
                  <div className="pointer-events-none absolute inset-0 rounded-[24px] overflow-hidden" aria-hidden="true">
                    {/* Top-Left Ambient Atmosphere Glow */}
                    <div
                      className="absolute -top-10 -left-10 w-48 h-48 rounded-full opacity-25 group-hover:opacity-40 transition-opacity"
                      style={{
                        background: "radial-gradient(circle, rgba(198,165,107,0.3) 0%, transparent 70%)",
                      }}
                    />

                    {/* Bottom-Right Ambient Atmosphere Glow */}
                    <div
                      className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full opacity-20 group-hover:opacity-35 transition-opacity"
                      style={{
                        background: "radial-gradient(circle, rgba(198,165,107,0.2) 0%, transparent 70%)",
                      }}
                    />

                    {/* Bottom Edge Champagne Gold Accent Bar */}
                    <div
                      className="absolute bottom-0 left-5 right-14 h-[2px] rounded-full"
                      style={{
                        background: "linear-gradient(90deg, rgba(198,165,107,0.8) 0%, rgba(198,165,107,0.2) 75%, transparent 100%)",
                        boxShadow: "0 0 12px 1px rgba(198,165,107,0.3)",
                      }}
                    />
                  </div>

                  {/* Top Metric Number: 1:1 vector rasterization at true display resolution */}
                  <div className="relative z-10">
                    <span 
                      className="font-mono text-[52px] sm:text-[58px] lg:text-[62px] font-extrabold tracking-tight text-[#F3F0E8] group-hover:text-[#C6A56B] leading-none block select-none transition-colors"
                    >
                      {card.metric}
                    </span>
                  </div>

                  {/* Connected Content Group: Anchored with intentional ~105-115px breathing space below the number */}
                  <div className="relative z-10 mt-[80px] sm:mt-[95px] lg:mt-[110px] xl:mt-[115px]">
                    <h3 
                      className="font-sans text-lg sm:text-[20px] font-bold text-[#F3F0E8] mb-3.5 leading-snug tracking-tight select-none"
                    >
                      {card.title}
                    </h3>
                    <p 
                      className="text-xs sm:text-sm font-sans text-[#A8A49B] font-normal leading-relaxed select-none"
                    >
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

