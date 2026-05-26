import type { Metadata } from "next";
import { Lato, Lalezar, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import { Analytics } from "@vercel/analytics/next";
import { CountryPreferenceProvider } from "@/components/features/country/country-preference";
import { StructuredData } from "@/components/seo/structured-data";
import { fetchPublicBootstrap } from "@/lib/service/fx";
import { headers } from "next/headers";
import { FloatingWaitlistButton } from "@/components/ui/floating-waitlist";

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
  metadataBase: new URL("https://www.greencardfinance.com"),
  title: {
    default: "GreenCard Finance | Global payments for African freelancers",
    template: "%s | GreenCard Finance",
  },
  description:
    "Global payments, transparent FX, and seamless money movement built for African freelancers.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.greencardfinance.com",
    siteName: "GreenCard Finance",
    title: "GreenCard Finance | Global payments for African freelancers",
    description:
      "Global payments, transparent FX, and seamless money movement built for African freelancers.",
    images: [
      {
        url: "/images/gcf-social-preview.png",
        width: 1200,
        height: 630,
        alt: "GreenCard Finance - Global payments for African freelancers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenCard Finance | Global payments for African freelancers",
    description:
      "Global payments, transparent FX, and seamless money movement built for African freelancers.",
    images: ["/images/gcf-social-preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

async function getInitialCountryCode() {
  const requestHeaders = await headers();
  const bootstrapHeaders = new Headers();
  const countryCode = firstHeaderValue(requestHeaders, [
    "x-user-country-code",
    "x-preferred-country-code",
    "x-user-country",
    "cf-ipcountry",
    "x-vercel-ip-country",
    "x-country-code",
  ]);

  [
    "cf-ipcountry",
    "x-vercel-ip-country",
    "x-country-code",
    "accept-language",
  ].forEach((header) => {
    const value = requestHeaders.get(header);
    if (value) bootstrapHeaders.set(header, value);
  });

  const bootstrap = await fetchPublicBootstrap({
    countryCode,
    headers: bootstrapHeaders,
  });

  return bootstrap?.countryCode;
}

function firstHeaderValue(requestHeaders: Headers, headerNames: string[]) {
  for (const headerName of headerNames) {
    const value = requestHeaders.get(headerName)?.trim();
    if (value) return value;
  }

  return undefined;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialCountryCode = await getInitialCountryCode();

  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased scroll-smooth",
        lato.variable,
        lalezar.variable,
        sourceSans.variable,
      )}
    >
      <body className="min-h-full flex flex-col font-source">
        <StructuredData />
        <CountryPreferenceProvider initialCountryCode={initialCountryCode}>
          <Nav />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <Analytics />
          <FloatingWaitlistButton />
        </CountryPreferenceProvider>
      </body>
    </html>
  );
}
