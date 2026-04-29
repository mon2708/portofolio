import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Afterlife by Remon — Web Developer Indonesia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BASE_URL = "https://afterlife-remon.vercel.app";

export default async function Image() {
  // Ambil URL logo secara absolut untuk ImageResponse
  const logoUrl = `${BASE_URL}/logo-afterlife.png`;

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
          background: "#000000",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative glow */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, rgba(147,51,234,0.08) 40%, transparent 70%)",
          }}
        />

        {/* Logo Container with Invert Effect for Dark Mode */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <img
            src={logoUrl}
            width="600"
            style={{
              filter: "invert(1) brightness(1.2)", // Mengubah logo hitam jadi putih
            }}
          />
        </div>

        {/* URL Label */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "rgba(255,255,255,0.4)",
            fontSize: "20px",
            letterSpacing: "0.2em",
            fontFamily: "monospace",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3b82f6" }} />
          afterlife-remon.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
