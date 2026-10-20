import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "us-prime-realty",
    role: "Software & Website Developer",
    org: "U.S. Prime Realty LLC · Florida, USA (remote)",
    period: "2025 – 2026",
    summary:
      "One of the main developers of the brokerage's WordPress website, which I also maintain, and builder of its landing pages, funnels and AI tools.",
    highlights: [
      "One of the main developers of usprimerealty.com: page design in Elementor on the Real Estate 7 theme, parts of the back end",
      "Maintain it day to day: child theme, Rank Math, LiteSpeed Cache, WPCode, plugin and theme updates",
      "Migrated the full WordPress site from cPanel to Hostinger; rebuilt 54 DNS records and fixed SPF, DKIM and DMARC",
      "Raised the PageSpeed accessibility score to 99 (mobile) / 91 (desktop); WCAG failures down from 37 to 11",
      "Built and published 25 SEO blog posts with FAQ schema; wrote a PHP must-use plugin for the schema",
      "Hand-coded landing pages and a full project website (Israel Projects, Bayit Properties, Rentals)",
      "Built GoHighLevel funnels, email and SMS workflows; set up the website's AI chatbot and voice agent",
    ],
  },
  {
    id: "shortcut-linking",
    role: "Software Developer",
    org: "ShortCut Linking (SCL) · remote",
    period: "2026",
    summary:
      "Main developer of the ShortCut Studio desktop app and contributor to the Python and Rust back end.",
    highlights: [
      "ShortCut Studio desktop app: Tauri 2 (Rust) + React, TypeScript and Tailwind CSS, with installer and updates",
      "PyQt6 desktop tools for the team: task runner, live activity monitor, database diff viewer",
      "Ported back-end services from Python to Rust, including PDF processing and search indexing",
      "Built an evaluation tool for AI (LLM) prompts; set up AWS servers with Terraform",
    ],
  },
  {
    id: "hayahay",
    role: "Mobile & Web Developer",
    org: "Hayahay (hayahay.ph) · Philippines",
    period: "2025 – 2026",
    summary:
      "Online marketplace where people sell their products and services.",
    highlights: [
      "Worked on the Hayahay user app in Flutter (Dart) for Android and iOS: BLoC, Dio REST calls, Firebase",
      "Worked on the Laravel (PHP) API behind the marketplace and the hayahay.ph web shop, deployed through cPanel",
    ],
  },
];
