import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GreenCard Finance | Global payments for African freelancers";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const previewTitle =
  "GreenCard Finance | Global payments for African freelancers";

function BrandLogo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 24,
      }}
    >
      <div
        style={{
          position: "relative",
          width: 128,
          height: 128,
          display: "flex",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 10,
            bottom: 8,
            width: 42,
            height: 106,
            background: "#0E3E29",
            transform: "rotate(24deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 48,
            top: 0,
            width: 72,
            height: 118,
            background: "#2E8B57",
            transform: "rotate(24deg)",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "#0B1510",
          lineHeight: 1,
        }}
      >
        <span
          style={{
            fontSize: 52,
            fontWeight: 900,
            letterSpacing: 0,
          }}
        >
          GREENCARD
        </span>
        <span
          style={{
            fontSize: 40,
            fontWeight: 500,
            letterSpacing: 18,
            marginTop: 8,
          }}
        >
          FINANCE
        </span>
      </div>
    </div>
  );
}

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
          background: "#D8F2E2",
          padding: "72px 84px 64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 58,
          }}
        >
          <BrandLogo />

          <div
            style={{
              color: "#0B1510",
              fontSize: 76,
              fontWeight: 900,
              lineHeight: 1.04,
              letterSpacing: 0,
              maxWidth: 1000,
            }}
          >
            {previewTitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#0E3E29",
            fontSize: 32,
            fontWeight: 800,
          }}
        >
          <span>greencardfinance.com</span>
          <span
            style={{
              color: "#2E8B57",
            }}
          >
            Transparent FX. Global payments.
          </span>
        </div>
      </div>
    ),
    size,
  );
}
