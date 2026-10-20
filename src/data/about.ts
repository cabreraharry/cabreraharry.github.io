/** About-section content (data-first; edit copy here, not in the component). */

export interface QuickFact {
  label: string;
  value: string;
}

export const aboutNarrative: string[] = [
  "I'm a developer from Palawan, Philippines, with a BS in Computer Science from Palawan State University (2025). Most of what I know I learned by building things that had to work for a real business, on a real deadline, for people in other time zones.",
  "For almost two years I've looked after a live WordPress site for a U.S. real estate brokerage: updates, troubleshooting, custom PHP, SEO and accessibility. I moved the whole site to a new host, raised its accessibility score to 99 on mobile, published 25 SEO blog posts, and hand-coded landing pages and a full project website from scratch.",
  "Beyond WordPress, I build desktop software in Python, Rust and React, worked on a Flutter marketplace app with a Laravel back end, and use AI every day: I build chatbots and voice agents, connect AI assistants to business tools through MCP, and write and test the prompts behind them.",
];

export const aboutQuickFacts: QuickFact[] = [
  { label: "Focus", value: "WordPress · Landing pages · Full-stack · AI" },
  { label: "Education", value: "BS Computer Science — Palawan State University (2025)" },
  { label: "Works with", value: "Teams in the U.S., Europe and the Philippines, fully remote" },
  { label: "Based in", value: "Puerto Princesa City, Philippines (GMT+8)" },
];

export const aboutInterests: string[] = [
  "AI agents",
  "Prompt engineering",
  "Web performance",
  "Accessibility",
  "Automation",
  "Desktop apps",
  "Cryptography",
];
