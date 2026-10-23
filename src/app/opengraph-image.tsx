import { ImageResponse } from "next/og";

export const alt = "Sasvale — Strategy. Automation. Scale.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          backgroundColor: "#05070c",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(198, 165, 107, 0.15) 0%, transparent 60%), radial-gradient(circle at 85% 75%, rgba(56, 189, 248, 0.12) 0%, transparent 50%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          border: "2px solid rgba(198, 165, 107, 0.3)",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 20px",
              borderRadius: "9999px",
              backgroundColor: "rgba(198, 165, 107, 0.12)",
              border: "1px solid rgba(198, 165, 107, 0.35)",
              color: "#C6A56B",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "9999px",
                backgroundColor: "#C6A56B",
              }}
            />
            ENTERPRISE DIGITAL STUDIO
          </div>

          <div
            style={{
              color: "#C6A56B",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            sasvale.com
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1,
              color: "#ffffff",
            }}
          >
            SASVALE
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#C6A56B",
              letterSpacing: "-0.5px",
            }}
          >
            Strategy. Automation. Scale.
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#94A3B8",
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            Engineering scalable digital platforms, custom software solutions, and AI-powered business systems for ambitious enterprises.
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div style={{ display: "flex", gap: "14px" }}>
          {["Custom Software", "Web Engineering", "AI Automation", "Technical SEO", "Brand Strategy"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "10px 18px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#E2E8F0",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
