export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  readTime: string;
  label: string;
  body: {
    heading: string;
    paragraphs: string[];
  }[];
};

export const blogCategories = [
  "All",
  "Send Money Home",
  "Rates and Fees",
  "Safety",
  "Nigeria Payouts",
  "Family Support",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "send-money-uk-to-nigeria-confidence",
    title: "How to send money from the UK to Nigeria with more confidence",
    category: "Send Money Home",
    summary:
      "A simple guide to checking rates, reviewing fees, confirming recipient details, and tracking a transfer from GBP to NGN.",
    readTime: "4 min read",
    label: "Featured guide",
    body: [
      {
        heading: "Start with the corridor",
        paragraphs: [
          "GreenCard Finance is launching with a focused UK-to-Nigeria transfer flow. That means the sender pays in GBP and the recipient receives NGN in Nigeria.",
          "Keeping the launch scope narrow helps make the experience easier to understand, easier to support, and clearer for every customer using the service.",
        ],
      },
      {
        heading: "Review the transfer before you send",
        paragraphs: [
          "Before confirming a transfer, check the recipient details, exchange rate, fees, and estimated NGN payout.",
          "A few seconds of review can prevent avoidable mistakes and gives you a clearer view of what your recipient should expect.",
        ],
      },
      {
        heading: "Track the transfer",
        paragraphs: [
          "After a transfer is created, simple tracking helps you follow the payment from confirmation through to payout.",
          "If something needs attention, support should be able to help with the transfer details in context.",
        ],
      },
    ],
  },
  {
    slug: "clear-rates-transparent-fees",
    title: "What clear rates and transparent fees mean when sending money home",
    category: "Rates and Fees",
    summary:
      "Understand the rate, fees, and final payout amount before sending money to Nigeria.",
    readTime: "3 min read",
    label: "Money basics",
    body: [
      {
        heading: "Look beyond the headline rate",
        paragraphs: [
          "A clear transfer experience should show the exchange rate, any fees, and the amount the recipient is expected to receive.",
          "That full view matters because the cheapest-looking option is not always the clearest option.",
        ],
      },
      {
        heading: "Know the payout amount",
        paragraphs: [
          "For a UK-to-Nigeria transfer, the number that matters most to many families is the NGN amount arriving in Nigeria.",
          "GreenCard is designed to make that payout amount easier to review before you confirm.",
        ],
      },
    ],
  },
  {
    slug: "why-identity-verification-matters",
    title: "Why identity verification matters for money transfers",
    category: "Safety",
    summary:
      "Why verified accounts help protect senders, recipients, and the transfer experience.",
    readTime: "3 min read",
    label: "Safety guide",
    body: [
      {
        heading: "Verification protects the transfer flow",
        paragraphs: [
          "Identity verification helps confirm that people using the service are who they say they are.",
          "It also supports safer processing, clearer support, and a more reliable transfer experience.",
        ],
      },
      {
        heading: "Prepare the basics",
        paragraphs: [
          "When a service asks for verification, use accurate personal details and a valid identity document.",
          "Good information at the start can reduce delays later in the transfer journey.",
        ],
      },
    ],
  },
  {
    slug: "what-happens-after-you-send",
    title: "What happens after you send money to Nigeria?",
    category: "Nigeria Payouts",
    summary:
      "A plain-English look at payment confirmation, transfer processing, and NGN payout tracking.",
    readTime: "3 min read",
    label: "Payout guide",
    body: [
      {
        heading: "Payment comes first",
        paragraphs: [
          "A transfer starts when the sender confirms the payment in GBP.",
          "From there, the transfer can move through checks, processing, and payout steps.",
        ],
      },
      {
        heading: "The recipient receives NGN",
        paragraphs: [
          "For the launch corridor, the recipient receives Naira in Nigeria.",
          "Simple tracking helps you understand whether a transfer is still processing, completed, or needs attention.",
        ],
      },
    ],
  },
  {
    slug: "support-family-from-the-uk",
    title: "Planning family support from the UK",
    category: "Family Support",
    summary:
      "Practical tips for sending money home with fewer last-minute surprises.",
    readTime: "2 min read",
    label: "Family guide",
    body: [
      {
        heading: "Send with purpose",
        paragraphs: [
          "People send money home for school fees, healthcare, household needs, family events, and everyday support.",
          "Writing down the purpose and timing can help you plan the amount and avoid rushed decisions.",
        ],
      },
      {
        heading: "Keep recipient details handy",
        paragraphs: [
          "Before sending, confirm the recipient name and bank details carefully.",
          "Small errors can slow down a transfer, especially when support teams need to review what happened.",
        ],
      },
    ],
  },
];

export const featuredBlogPost = blogPosts[0];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
