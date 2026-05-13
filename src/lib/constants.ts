import {
  ig,
  linkedin,
  s5_firstimg,
  s5_secondimg,
  s5_thirdimg,
  x,
} from "@/assets/images";

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
    href: "#contact",
  },
];

export const footerSocialLinks = [
  {
    icon: linkedin,
    href: "#1",
    label: "linkedin",
  },
  {
    icon: ig,
    href: "#1",
    label: "ig",
  },
  {
    icon: x,
    href: "#3",
    label: "x",
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
    question: "Is GREENCARD Finance a Bank?",
    answer:
      "No. GreenCard Finance is a cross-border financial platform. We operate through licensed partners and use modern settlement infrastructure to help you receive, convert, withdraw and spend global income.",
  },
  {
    question: "What currencies can I receive?",
    answer:
      "USD, GBP, EUR, CAD and NGN through ACH, wire, transfer, and supported payment routes. Coverage expands as we open new corridors.",
  },
  {
    question: "How does GreenCard show FX transparency?",
    answer:
      "Every conversion screen shows the live rate, GCF fee, network fee, the final amount, and how much you saved versus a typical alternative. Nothing is buried in the rate.",
  },
  {
    question: "Do I need crypto knowledge to use GreenCard?",
    answer:
      "No. You use a normal payment app — receive, convert, withdraw, pay. There are no wallets, seed phrases or tokens to manage.",
  },
  {
    question: "What does stablecoin-backed statement actually mean?",
    answer:
      "Every conversion screen shows the live rate, GCF fee, network fee, the final amount, and how much you saved versus a typical alternative. Nothing is buried in the rate.",
  },
  {
    question: "Can I use it for foreign online payments?",
    answer:
      "Yes. Pay any merchant that accepts cards or bank payments online — airline tickets, software, subscriptions, visa fees, travel, and more.",
  },
  {
    question: "Who is GreenCard for?",
    answer:
      "Freelancers, creators, remote workers, SMEs, and individuals in emerging markets — starting with Africa — who earn or pay globally.",
  },
  {
    question: "What happens if a payment fails?",
    answer:
      "You'll see a clear status, a reason, and the next step. Our support team can be reached directly from the payment, with full context already attached.",
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
    title: "Get your GREENCARD <br /> account",
    description:
      "Now you card receive any currency <br /> and spend with your GREENCARD",
  },
];
