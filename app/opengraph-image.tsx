import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Afterlife by Remon — Web Developer Indonesia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #000000 0%, #0a0a1a 40%, #0d0d2b 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative glow */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, rgba(147,51,234,0.08) 40%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            right: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(147,51,234,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#3b82f6",
            }}
          />
          <span
            style={{
              color: "#3b82f6",
              fontSize: "16px",
              fontFamily: "monospace",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Portfolio — Web Developer
          </span>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: "110px",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-4px",
            lineHeight: 1,
            marginBottom: "8px",
          }}
        >
          AFTERLIFE
          <span style={{ color: "#3b82f6" }}>.</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.1em",
            marginBottom: "48px",
          }}
        >
          by Remon
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "16px 32px",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "100px",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "20px" }}>
            Website · Landing Page · Bot WhatsApp · API
          </span>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "rgba(255,255,255,0.25)",
            fontSize: "16px",
            letterSpacing: "0.05em",
          }}
        >
          afterlife-remon.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
