import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GreenCard Finance | Global payments for African freelancers";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");
const previewTitle =
  "GreenCard Finance | Global payments for African freelancers";

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
          background: "#E6F5EC",
          padding: 58,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 34,
            borderRadius: 48,
            background: "#FFFFFF",
            border: "2px solid rgba(14, 62, 41, 0.14)",
            boxShadow: "0 28px 78px rgba(14, 62, 41, 0.16)",
            padding: 64,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={`${siteUrl}/images/gcf-horizontal-logo.svg`}
              alt="GreenCard Finance"
              width="430"
              height="120"
              style={{
                width: 430,
                height: 120,
                objectFit: "contain",
                objectPosition: "left center",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                color: "#0B1510",
                fontSize: 62,
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: 0,
                maxWidth: 980,
              }}
            >
              {previewTitle}
            </div>
            <div
              style={{
                color: "#3F5C4E",
                fontSize: 31,
                lineHeight: 1.25,
                maxWidth: 940,
              }}
            >
              Receive, convert, and move money globally with clear,
              customer-facing exchange rates.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#0E3E29",
              fontSize: 27,
              fontWeight: 700,
            }}
          >
            <span>greencardfinance.com</span>
            <span
              style={{
                color: "#2E8B57",
              }}
            >
              Global payments for African freelancers
            </span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
