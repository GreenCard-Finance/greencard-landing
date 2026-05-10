import type { Metadata } from "next";
import { Lato, Lalezar, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/nav";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
});

const lalezar = Lalezar({
  weight: "400",
  subsets: ["arabic", "latin"],
  variable: "--font-heading",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
});

export const metadata: Metadata = {
  title: "Greencard Finance",
  description: "Created by next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        lato.variable,
        lalezar.variable,
        sourceSans.variable,
      )}
    >
      <body className="min-h-full flex flex-col font-source">
        <Nav />
        <main className="flex-1 w-full max-w-360 mx-auto">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
