import { ImageResponse } from "next/og";

export const alt = "SMCSS — School of Mathematical and Computational Sciences Society";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          position: "relative",
          background: "#0b0c0f",
          color: "#ecedea",
          backgroundImage:
            "linear-gradient(rgba(236,237,234,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(236,237,234,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <svg width="1200" height="630" style={{ position: "absolute", top: 0, left: 0 }}>
          <path d="M 560 500 C 720 300, 860 640, 1140 330" stroke="#5ce1e6" strokeWidth="5" fill="none" />
          <circle cx="700" cy="420" r="12" fill="#ff914d" />
          <circle cx="1000" cy="450" r="12" fill="#f8d16f" />
        </svg>

        <div style={{ display: "flex", alignItems: "center", fontSize: 44, fontWeight: 700 }}>
          <span style={{ color: "#ff914d" }}>{"{"}</span>
          <span style={{ padding: "0 14px" }}>SMCSS</span>
          <span style={{ color: "#5ce1e6" }}>{"}"}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 100, fontWeight: 700, letterSpacing: -3 }}>Plot your year.</div>
          <div style={{ fontSize: 34, color: "#9aa0ad", marginTop: 16 }}>
            Where math meets code and friendships compute.
          </div>
        </div>

        <div style={{ fontSize: 26, color: "#9aa0ad" }}>
          School of Mathematical and Computational Sciences Society · UPEI
        </div>
      </div>
    ),
    size
  );
}