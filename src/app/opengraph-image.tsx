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
          background: "#D8F2E2",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <img
          src={`${siteUrl}/images/gcf-horizontal-logo.svg`}
          alt="GreenCard Finance"
          width="960"
          height="960"
          style={{
            width: 960,
            height: 960,
            objectFit: "contain",
          }}
        />
      </div>
    ),
    size,
  );
}
