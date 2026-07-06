import { s5_firstimg, s5_secondimg, s5_thirdimg } from "@/assets/images";

export const navItems = [
  {
    label: "Product",
    href: "#product",
  },
  {
    label: "How it works",
    href: "#how-it-works",
  },
  {
    label: "About us",
    href: "#about-us",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Join Waitlist",
    href: "#waitlist",
    isButton: true,
  },
];

export const footerLinks = [
  {
    label: "Product",
    href: "#product",
  },
  {
    label: "How it works",
    href: "#how-it-works",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact us",
    href: "mailto:support@greencardfinance.com",
  },
];

export const footerAddresses = [
  {
    href: "mailto:support@greencardfinance.com",
    label: "support@greencardfinance.com",
  },
  {
    href: "tel:+447517099268",
    label: "+44 7517 099268",
  },
  {
    href: "https://maps.google.com/?q=66+Paul+Street+London+EC2A+4NA",
    label: "66, Paul Street, London, EC2A 4NA.",
  },
];

export const footerPolicies = [
  {
    href: "#privacy",
    label: "Privacy",
  },
  {
    href: "#terms",
    label: "Terms",
  },
  {
    href: "#contract",
    label: "Contract",
  },
];

export const faqData = [
  {
    question: "Is GreenCard Finance a Bank?",
    answer:
      "No. GreenCard Finance is not a bank. We are launching Send Money Home for UK-to-Nigeria transfers and work with trusted payment and payout partners to process payments securely.",
  },
  {
    question: "What can I use GreenCard for at launch?",
    answer:
      "At launch, GreenCard is focused on one corridor: verified users in the UK sending money to Nigeria, with recipients receiving NGN.",
  },
  {
    question: "What currencies are supported?",
    answer:
      "The launch flow is GBP to NGN. Additional currencies will be considered later and will be clearly marked as coming soon until they are available.",
  },
  {
    question: "How does GreenCard show rates and fees?",
    answer:
      "Before you send, we show the exchange rate, fees, and estimated NGN payout so you can review the transfer before confirming.",
  },
  {
    question: "Do I need to create a wallet or hold a balance?",
    answer:
      "No. The current MVP does not issue customer wallets, virtual accounts, cards, or stored balances.",
  },
  {
    question: "Who is GreenCard for?",
    answer:
      "GreenCard is for Africans in the UK who want a simple way to send money home to family, friends, and the people who matter in Nigeria.",
  },
  {
    question: "What happens if a transfer fails?",
    answer:
      "You'll see a clear status, a reason where available, and the next step. Our support team can help review the transfer if you need assistance.",
  },
  {
    question: "Are receiving money, cards, and other currencies available?",
    answer:
      "Not yet. Receiving money, virtual accounts, cards, and additional currencies are future features. The current launch is UK-to-Nigeria transfers only.",
  },
];

export const sectionFive = [
  {
    step: "1",
    img: s5_firstimg,
    title: "Create your GreenCard <br /> account",
    description:
      "Just sign up with your email <br /> and get a free GreenCard account",
  },
  {
    step: "2",
    img: s5_secondimg,
    title: "Complete <br /> KYC",
    description: "Verify your identity using <br /> Government issued ID",
  },
  {
    step: "DONE",
    img: s5_thirdimg,
    title: "Get your GreenCard <br /> account",
    description:
      "Now you card receive any currency <br /> and spend with your GreenCard",
  },
];
