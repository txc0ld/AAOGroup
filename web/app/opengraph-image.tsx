import { ImageResponse } from "next/og";

export const alt = "AAO Group — Secure AI operations for Australian businesses";
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
          justifyContent: "space-between",
          background: "#0A0E14",
          color: "#F6F4EE",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            opacity: 0.6,
            fontFamily: "sans-serif",
          }}
        >
          AAO · Australian AI Operations Group
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontFamily: "serif",
            }}
          >
            aao group
          </div>
          <div
            style={{
              fontSize: 36,
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
              maxWidth: 900,
              opacity: 0.8,
              fontFamily: "sans-serif",
            }}
          >
            Secure AI operations for Australian businesses.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.5,
            fontFamily: "sans-serif",
          }}
        >
          <span>Approval gates · Logs · Data boundaries</span>
          <span>aaogroup.au</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
