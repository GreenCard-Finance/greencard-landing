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
        "Global payments, transparent FX, and seamless money movement built for African freelancers.",
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
        "Global payments, transparent FX, and seamless money movement built for African freelancers.",
      publisher: {
        "@id": organizationId,
      },
      inLanguage: "en",
    },
    {
      "@type": "FinancialService",
      "@id": financialServiceId,
      name: "GreenCard Finance global payments",
      url: siteUrl,
      provider: {
        "@id": organizationId,
      },
      serviceType: "Global payments and currency conversion platform",
      description:
        "A payment platform for African freelancers to receive, convert, and move money globally with customer-facing exchange rates.",
      areaServed: [
        {
          "@type": "Country",
          name: "United Kingdom",
        },
        {
          "@type": "Country",
          name: "Nigeria",
        },
        {
          "@type": "Country",
          name: "United States",
        },
        {
          "@type": "Country",
          name: "Canada",
        },
      ],
      availableLanguage: ["English"],
      currenciesAccepted: "GBP, NGN, USD, CAD",
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
