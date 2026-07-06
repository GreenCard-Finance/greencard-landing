const siteUrl = "https://www.greencardfinance.com";

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const financialServiceId = `${siteUrl}/#financial-service`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "GreenCard Finance",
      url: siteUrl,
      logo: `${siteUrl}/images/gcf-horizontal-logo.svg`,
      image: `${siteUrl}/images/gcf-social-preview.png`,
      description:
        "Send money from the UK to Nigeria with clear rates, transparent fees, and reliable Naira payout.",
      email: "support@greencardfinance.com",
      telephone: "+447517099268",
      address: {
        "@type": "PostalAddress",
        streetAddress: "66 Paul Street",
        addressLocality: "London",
        postalCode: "EC2A 4NA",
        addressCountry: "GB",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "support@greencardfinance.com",
          telephone: "+447517099268",
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: "GreenCard Finance",
      url: siteUrl,
      description:
        "Send money from the UK to Nigeria with clear rates, transparent fees, and reliable Naira payout.",
      publisher: {
        "@id": organizationId,
      },
      inLanguage: "en",
    },
    {
      "@type": "FinancialService",
      "@id": financialServiceId,
      name: "GreenCard Finance Send Money Home",
      url: siteUrl,
      provider: {
        "@id": organizationId,
      },
      serviceType: "UK to Nigeria money transfer service",
      description:
        "A focused UK-to-Nigeria transfer service for verified UK users sending GBP and recipients receiving Naira in Nigeria.",
      areaServed: [
        {
          "@type": "Country",
          name: "United Kingdom",
        },
        {
          "@type": "Country",
          name: "Nigeria",
        },
      ],
      availableLanguage: ["English"],
      currenciesAccepted: "GBP, NGN",
    },
  ],
};

export function StructuredData() {
  return (
    <script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
