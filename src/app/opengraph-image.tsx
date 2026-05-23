import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GreenCard Finance | Global payments for African freelancers";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

function BrandLogo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 42,
      }}
    >
      <div
        style={{
          position: "relative",
          width: 232,
          height: 232,
          display: "flex",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 18,
            bottom: 15,
            width: 76,
            height: 192,
            background: "#0E3E29",
            transform: "rotate(24deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 88,
            top: 0,
            width: 130,
            height: 214,
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
            fontSize: 82,
            fontWeight: 900,
            letterSpacing: 0,
          }}
        >
          GREENCARD
        </span>
        <span
          style={{
            fontSize: 64,
            fontWeight: 500,
            letterSpacing: 28,
            marginTop: 14,
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
          alignItems: "center",
          justifyContent: "center",
          background: "#D8F2E2",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <BrandLogo />
      </div>
    ),
    size,
  );
}
