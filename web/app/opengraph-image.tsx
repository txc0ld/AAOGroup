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
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <div
            style={{
              fontSize: 132,
              lineHeight: 1,
              letterSpacing: "-0.05em",
              fontFamily: "sans-serif",
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <span style={{ fontWeight: 200, opacity: 0.55 }}>[</span>
            <span style={{ fontWeight: 700 }}>aao</span>
            <span style={{ fontWeight: 200, opacity: 0.55 }}>]</span>
          </div>
          <div
            style={{
              marginTop: 22,
              paddingTop: 18,
              borderTop: "1px solid #F6F4EE",
              fontSize: 22,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              opacity: 0.65,
              fontFamily: "monospace",
            }}
          >
            Australian AI Operations
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 56,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
              fontFamily: "sans-serif",
              fontWeight: 500,
            }}
          >
            Secure AI operations for Australian businesses.
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.4,
              letterSpacing: "-0.005em",
              maxWidth: 900,
              opacity: 0.7,
              fontFamily: "serif",
              fontStyle: "italic",
            }}
          >
            Approval gates, logs, data boundaries — and onshore models.
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
          <span>Integration · Workflow · Guarded LLM · Approval queue · Audit</span>
          <span>aaogroup.au</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
