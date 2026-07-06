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
    slug: "why-we-are-starting-with-uk-to-nigeria",
    title: "Why we are starting with UK to Nigeria",
    category: "Send Money Home",
    summary:
      "GreenCard is starting with one job: help people in the UK send money home to Nigeria without the usual confusion.",
    readTime: "3 min read",
    label: "Launch note",
    body: [
      {
        heading: "One corridor first",
        paragraphs: [
          "We could talk about a lot of future products, but that is not what this launch is about.",
          "The first version of GreenCard is focused on UK-to-Nigeria transfers. You send in GBP. Your recipient gets Naira in Nigeria.",
        ],
      },
      {
        heading: "Why narrow is better",
        paragraphs: [
          "A narrow launch lets us pay attention to the parts that actually matter: clear rates, fees you can see, correct recipient details, and useful support when something needs checking.",
          "It also keeps the product honest. We want the website to match what customers can actually use today.",
        ],
      },
      {
        heading: "What comes next",
        paragraphs: [
          "Other features may come later, but they should not distract from the first promise.",
          "For now, the goal is simple: make sending money from the UK to Nigeria feel clearer, safer, and easier to follow.",
        ],
      },
    ],
  },
  {
    slug: "three-things-to-check-before-sending",
    title: "Three things to check before sending money home",
    category: "Send Money Home",
    summary:
      "A short checklist for avoiding the small mistakes that can slow down a transfer.",
    readTime: "2 min read",
    label: "Checklist",
    body: [
      {
        heading: "Check the recipient name",
        paragraphs: [
          "Most transfer problems start with small details. A missing middle name, a typo, or the wrong bank detail can turn a quick payment into a support case.",
          "Before you confirm, slow down for ten seconds and check the recipient name exactly as it should appear.",
        ],
      },
      {
        heading: "Check the Naira amount",
        paragraphs: [
          "Do not only look at the GBP amount you are sending. Look at the amount expected to arrive in Nigeria.",
          "That final Naira payout is usually the number your family or friend is planning around.",
        ],
      },
      {
        heading: "Check the fee",
        paragraphs: [
          "A good transfer screen should make the fee visible before you pay.",
          "If you can see the rate, the fee, and the expected payout in one place, it is easier to decide whether the transfer works for you.",
        ],
      },
    ],
  },
  {
    slug: "rates-are-not-the-whole-story",
    title: "Rates are not the whole story",
    category: "Rates and Fees",
    summary:
      "A strong exchange rate matters, but the final payout and fee visibility matter too.",
    readTime: "3 min read",
    label: "Rates",
    body: [
      {
        heading: "The headline rate can distract you",
        paragraphs: [
          "It is easy to compare services by exchange rate alone. That is useful, but it is not the whole picture.",
          "A transfer can show a nice-looking rate and still feel unclear if the fee is hidden or the final payout changes too late.",
        ],
      },
      {
        heading: "Start from the payout",
        paragraphs: [
          "When sending from the UK to Nigeria, the practical question is simple: how much Naira will arrive?",
          "That is why GreenCard is being shaped around showing the rate, fee, and expected payout before you confirm.",
        ],
      },
      {
        heading: "Clear beats clever",
        paragraphs: [
          "People should not need a spreadsheet to understand a money transfer.",
          "The cleaner the breakdown, the easier it is to trust what you are sending.",
        ],
      },
    ],
  },
  {
    slug: "why-we-ask-for-id",
    title: "Why we ask for ID before you send",
    category: "Safety",
    summary:
      "Identity checks can feel annoying, but they help protect the transfer flow.",
    readTime: "3 min read",
    label: "Safety",
    body: [
      {
        heading: "It is not just a formality",
        paragraphs: [
          "When money moves across borders, the sender has to be verified. That protects customers, recipients, and the partners who help process the payment.",
          "It also makes support easier. If a transfer needs review, accurate account information helps the team understand what happened.",
        ],
      },
      {
        heading: "What to have ready",
        paragraphs: [
          "Use your real name, correct date of birth, current address, and a valid ID document.",
          "It is better to get this right once than to fix it in the middle of an urgent transfer.",
        ],
      },
    ],
  },
  {
    slug: "what-happens-after-you-press-send",
    title: "What happens after you press send?",
    category: "Nigeria Payouts",
    summary:
      "The transfer does not end when you pay in GBP. Here is what customers should be able to follow.",
    readTime: "3 min read",
    label: "Payout",
    body: [
      {
        heading: "Your payment is confirmed",
        paragraphs: [
          "The first step is confirming that your GBP payment has been received.",
          "After that, the transfer can move through processing and payout steps before the recipient gets Naira.",
        ],
      },
      {
        heading: "Status matters",
        paragraphs: [
          "A sender should not be left guessing. Clear status updates help you know whether a transfer is processing, completed, or needs attention.",
          "That is especially important when the money is for rent, school fees, healthcare, or family support.",
        ],
      },
      {
        heading: "Support should have context",
        paragraphs: [
          "If you contact support, you should not have to explain the entire transfer from scratch.",
          "Good tracking gives the support team the details they need to help faster.",
        ],
      },
    ],
  },
  {
    slug: "helping-family-without-guesswork",
    title: "Helping family without guesswork",
    category: "Family Support",
    summary:
      "For many people, sending money home is not occasional. It is part of how family life works.",
    readTime: "2 min read",
    label: "Family",
    body: [
      {
        heading: "Know what the money is for",
        paragraphs: [
          "School fees, hospital bills, groceries, repairs, rent, a younger sibling's allowance. The reason matters because the timing matters.",
          "When the purpose is clear, it is easier to decide how much to send and when to send it.",
        ],
      },
      {
        heading: "Keep the regular details close",
        paragraphs: [
          "If you send to the same person often, keep their correct bank details somewhere safe.",
          "That small habit can save time when someone needs money quickly.",
        ],
      },
      {
        heading: "Leave room for the unexpected",
        paragraphs: [
          "Family support is rarely perfectly scheduled. Something always comes up.",
          "The best transfer experience is one that makes the basics clear when you are already dealing with pressure.",
        ],
      },
    ],
  },
];

export const featuredBlogPost = blogPosts[0];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
