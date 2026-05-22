import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GreenCard Finance - Global payments for African freelancers";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const siteUrl = "https://www.greencardfinance.com";

/* eslint-disable @next/next/no-img-element */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#D7F1E1",
          padding: 56,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: 56,
            background: "#FFFFFF",
            border: "2px solid rgba(14, 62, 41, 0.14)",
            boxShadow: "0 28px 80px rgba(14, 62, 41, 0.16)",
            padding: 64,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={`${siteUrl}/images/gcf-horizontal-logo.svg`}
              alt="GreenCard Finance"
              width="380"
              height="380"
              style={{
                width: 250,
                height: 250,
                objectFit: "contain",
                objectPosition: "left center",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                color: "#0E3E29",
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  background: "#2E8B57",
                }}
              />
              Global payments
            </div>
            <div
              style={{
                color: "#0B1510",
                fontSize: 72,
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.03em",
                maxWidth: 920,
              }}
            >
              Built for African freelancers
            </div>
            <div
              style={{
                color: "#3F5C4E",
                fontSize: 34,
                lineHeight: 1.25,
                maxWidth: 900,
              }}
            >
              Receive, convert, and move money globally with transparent FX.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#0E3E29",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            <span>greencardfinance.com</span>
            <span
              style={{
                borderRadius: 999,
                background: "#0E3E29",
                color: "#FFFFFF",
                padding: "14px 24px",
              }}
            >
              Transparent FX
            </span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
