import type { FutureProject, Project } from "@/types";

/**
 * Ordering = display order (strongest work first).
 * Screenshots come from scripts/capture_screenshots.py (public/images/projects/<slug>-1|2|m.webp).
 * The client sites' source repos are private, so githubUrl stays null for them.
 */
const shots = (slug: string) => ({
  thumbnail: `/images/projects/${slug}-1.webp`,
  images: [
    `/images/projects/${slug}-1.webp`,
    `/images/projects/${slug}-2.webp`,
    `/images/projects/${slug}-m.webp`,
  ],
});

export const projects: Project[] = [
  {
    slug: "israel-projects",
    name: "Israel Projects Website",
    shortDescription:
      "A full project showcase website for an Israeli property developer, hand-coded from scratch for U.S. buyers.",
    longDescription:
      "Designed and built israel.usprimerealty.com, the U.S. home of an Israeli developer's new-build projects. Project pages, floor-plan cards, an interactive map and an enquiry form that drops leads straight into the CRM. Prices show in U.S. dollars, converted live from an exchange-rate API, and the inventory is imported from the developer's own Excel file by Python build scripts.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "REST API", "GitHub Pages"],
    features: [
      "Project pages with floor-plan cards (sizes in sq ft and m²)",
      "Live USD pricing from an exchange-rate API",
      "Inventory imported from Excel by Python build scripts, with automated tests",
      "Enquiry form connected to the CRM",
      "Responsive from phone to wide desktop",
    ],
    categories: ["Landing Pages"],
    status: "live",
    difficulty: "advanced",
    ...shots("israel-projects"),
    githubUrl: null,
    liveUrl: "https://israel.usprimerealty.com/",
    featured: true,
  },
  {
    slug: "bayit-properties",
    name: "Bayit Properties — New Homes",
    shortDescription:
      "A landing page for brand-new homes in South Florida's kosher communities, with a live inventory of projects.",
    longDescription:
      "A hand-coded landing page that presents new-construction homes within walking distance of synagogues in South Florida. A premium dark-and-gold design, a filterable live inventory of projects with pricing and sizes, and clear calls to speak with an agent.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    features: [
      "Premium dark-and-gold design written in plain HTML, CSS and JavaScript",
      "Live inventory with property-type and location filters",
      "Built for one audience: buyers looking for kosher communities",
      "Fast, responsive and served from GitHub Pages on a company subdomain",
    ],
    categories: ["Landing Pages"],
    status: "live",
    difficulty: "intermediate",
    ...shots("bayit-properties"),
    githubUrl: null,
    liveUrl: "https://bayitproperties.usprimerealty.com/",
    featured: true,
  },
  {
    slug: "rentals",
    name: "South Florida Rentals",
    shortDescription:
      "A lead-capture landing page for renters and lease-to-own buyers, with a step-by-step search form.",
    longDescription:
      "A hand-coded landing page that turns visitors into qualified leads: a two-step form asks what they are looking for (bedrooms, budget, area, pets) and then for contact details. Listings come from an IDX Broker integration styled to match the page.",
    tech: ["HTML", "CSS", "JavaScript", "IDX Broker"],
    features: [
      "Two-step lead form that asks for needs before contact details",
      "IDX Broker property listings themed to match the page",
      "Dark-and-gold design shared with the other landing pages",
    ],
    categories: ["Landing Pages"],
    status: "live",
    difficulty: "intermediate",
    ...shots("rentals"),
    githubUrl: null,
    liveUrl: "https://rentals.usprimerealty.com/",
    featured: true,
  },
  {
    slug: "israel-seminar",
    name: "Seminar Sign-Up Funnel",
    shortDescription:
      "A sign-up page and email/SMS reminder system for a free online seminar on buying a home in Israel.",
    longDescription:
      "A custom-coded sign-up page inside a GoHighLevel funnel for a two-session online seminar, plus the automation behind it: confirmation email, reminder emails and texts before each session, a thank-you email afterwards, and consent tracking for text messages.",
    tech: ["GoHighLevel", "HTML", "CSS", "Email templates", "Workflows"],
    features: [
      "Custom-coded funnel page with session dates and agenda",
      "Six branded emails, built mobile-first",
      "Reminder emails and texts timed to each session",
      "SMS consent handled per contact",
    ],
    categories: ["Landing Pages", "Automation"],
    status: "live",
    difficulty: "intermediate",
    ...shots("israel-seminar"),
    githubUrl: null,
    liveUrl: "https://seminar.usprimerealty.com/",
    featured: true,
  },
  {
    slug: "usprimerealty-wordpress",
    name: "usprimerealty.com — WordPress",
    shortDescription:
      "A real estate brokerage's WordPress website: one of its main developers, and I maintain it: design, back end, migration, accessibility and SEO.",
    longDescription:
      "One of the main developers of usprimerealty.com, which I also maintain: I designed its pages in Elementor on the Real Estate 7 theme and built parts of the back end, then kept it running day to day with theme and plugin updates, troubleshooting and custom code in a child theme and WPCode. Migrated the whole site from cPanel to Hostinger with all 54 DNS records and email authentication intact, raised the accessibility score to 99 on mobile, and converted 445 FAQ questions on 30 Elementor pages into proper headings with FAQ schema.",
    tech: ["WordPress", "PHP", "Elementor", "Rank Math", "LiteSpeed Cache", "Hostinger"],
    features: [
      "Page design in Elementor and parts of the back end",
      "Full site migration from cPanel to Hostinger, DNS and email included",
      "Accessibility 99 (mobile) / 91 (desktop); WCAG failures 37 → 11",
      "445 FAQ questions on 30 pages converted to H3 headings with schema",
      "Custom PHP must-use plugin and WPCode snippets; parent theme never edited",
    ],
    categories: ["WordPress"],
    status: "live",
    difficulty: "advanced",
    ...shots("usprimerealty-wordpress"),
    githubUrl: null,
    liveUrl: "https://usprimerealty.com/",
    featured: true,
  },
  {
    slug: "seo-blog-posts",
    name: "25 SEO Blog Posts",
    shortDescription:
      "Custom-designed WordPress blog posts built from marketing briefs, each with images, SEO setup and FAQ schema.",
    longDescription:
      "Built and published 25 long-form blog posts in WordPress from marketing briefs. Each one has its own responsive HTML/CSS layout, WebP images with alt text, Rank Math title, description and focus keyword, and an FAQ section with FAQPage schema, checked at seven screen widths before publishing.",
    tech: ["WordPress", "HTML", "CSS", "Rank Math", "Schema.org", "WebP"],
    features: [
      "Custom responsive layout per post",
      "SEO title, meta description and focus keyword in Rank Math",
      "FAQ sections with FAQPage schema",
      "Tested at 360, 390, 430, 768, 1024, 1280 and 1600 px",
    ],
    categories: ["WordPress"],
    status: "live",
    difficulty: "intermediate",
    ...shots("seo-blog-posts"),
    githubUrl: null,
    liveUrl: "https://usprimerealty.com/naples-florida-cost-of-living-2026/",
    featured: false,
  },
  {
    slug: "google-sheets-mcp",
    name: "Google Sheets & Apps Script MCP Server",
    shortDescription:
      "An MCP server that lets AI assistants such as Claude build, deploy and run Google Apps Script and create Sheets.",
    longDescription:
      "A Model Context Protocol (MCP) server in Node.js that gives AI assistants tools for Google Apps Script and Google Sheets: list and create script projects, update their files, create versions and deployments, run script functions and create new spreadsheets, all from a chat.",
    tech: ["JavaScript", "Node.js", "MCP", "Google Apps Script", "Google Sheets", "AI"],
    features: [
      "Create, update, version and deploy Apps Script projects from an AI chat",
      "Run script functions and create spreadsheets",
      "Typed tool inputs with zod validation",
    ],
    categories: ["AI"],
    status: "completed",
    difficulty: "intermediate",
    thumbnail: "",
    images: [],
    githubUrl: "https://github.com/cabreraharry/google_sheet_mcp",
    liveUrl: null,
    featured: false,
  },
  {
    slug: "ai-chatbot-voice-agent",
    name: "AI Chatbot & Voice Agent",
    shortDescription:
      "The website chatbot and phone voice agent for a real estate brokerage: prompts, knowledge bases and lead hand-off.",
    longDescription:
      "Set up and tuned the AI chatbot on the brokerage's website and its voice agent on the phone line, inside GoHighLevel: the prompt structure, the knowledge bases the agents answer from, and the hand-off to a human when a lead needs a call back.",
    tech: ["GoHighLevel Conversation AI", "Voice AI", "Prompt engineering", "Knowledge bases"],
    features: [
      "Prompt structure and tone written and tested",
      "Knowledge bases the agents answer from",
      "Hand-off to staff for leads who need a human",
    ],
    categories: ["AI", "Automation"],
    status: "live",
    difficulty: "intermediate",
    thumbnail: "/images/projects/ai-chatbot-1.webp",
    images: ["/images/projects/ai-chatbot-1.webp", "/images/projects/ai-chatbot-m.webp"],
    githubUrl: null,
    liveUrl: "https://usprimerealty.com/",
    featured: true,
  },
  {
    slug: "shortcut-studio",
    name: "ShortCut Studio — Desktop App",
    shortDescription:
      "A Windows desktop app built with Tauri 2, Rust and React, with its own installer and auto-updates.",
    longDescription:
      "Main developer of ShortCut Studio, the desktop app of a software company's platform. A Rust core on Tauri 2 runs and watches the app's background services and receives live updates from the server; the React and TypeScript interface talks to it through 91 typed commands. It ships as a Windows installer that keeps itself up to date.",
    tech: ["Tauri 2", "Rust", "React", "TypeScript", "Tailwind CSS", "Recharts"],
    features: [
      "Rust core: background-service supervisor, live server updates, tray icon and deep links",
      "React 19 + TypeScript interface with charts, in light and dark themes",
      "91 typed commands between the interface and the Rust core",
      "Windows installer (NSIS) with auto-updates and start-with-Windows",
    ],
    categories: ["Software"],
    status: "in-progress",
    difficulty: "advanced",
    thumbnail: "/images/projects/shortcut-studio-1.webp",
    images: ["/images/projects/shortcut-studio-1.webp", "/images/projects/shortcut-studio-2.webp"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
    diagram: true,
  },
  {
    slug: "metatag-studio",
    name: "MetaTag Studio",
    shortDescription:
      "A Windows desktop app that adds alt text, GPS geotags and SEO metadata to batches of images.",
    longDescription:
      "Drag images or a folder in, fill in the fields once and get correctly tagged copies; originals are never touched. Built with Tauri 2, Svelte 5 and Rust, with ExifTool as the engine for EXIF, XMP and IPTC writes and Nominatim for geocoding.",
    tech: ["Tauri 2", "Rust", "Svelte", "TypeScript", "ExifTool"],
    features: [
      "Batch alt text, geotags and SEO metadata",
      "Originals never modified",
      "Native Windows installer",
    ],
    categories: ["Software"],
    status: "in-progress",
    difficulty: "intermediate",
    thumbnail: "",
    images: [],
    githubUrl: "https://github.com/cabreraharry/metatag_studio",
    liveUrl: null,
    featured: false,
  },
  {
    slug: "hayahay-app",
    name: "Hayahay Marketplace App",
    shortDescription:
      "A Flutter app for Android and iOS where people buy and sell products and services, on a Laravel API.",
    longDescription:
      "Worked on the user app of Hayahay, a Philippine marketplace for products and services, built in Flutter with BLoC state management, Dio for REST calls and Firebase, on top of a Laravel (PHP) API. The screenshot shows the hayahay.ph web marketplace in October 2025.",
    tech: ["Flutter", "Dart", "BLoC", "Firebase", "Laravel", "PHP"],
    features: [
      "Cross-platform Android and iOS app",
      "BLoC state management and REST API calls",
      "Laravel (PHP) back end",
    ],
    categories: ["Mobile"],
    status: "completed",
    difficulty: "intermediate",
    thumbnail: "/images/projects/hayahay-web-1.webp",
    images: ["/images/projects/hayahay-web-1.webp"],
    githubUrl: null,
    liveUrl: null,
    featured: false,
  },
  {
    slug: "florida-lead-scraper",
    name: "Florida Business Lead Scraper",
    shortDescription:
      "A Python tool that collects service-business leads across eight Florida cities into Excel.",
    longDescription:
      "Collects business name and phone for every lead, then searches for each business's own website and crawls it for a contact email. On the full Florida list it found an email for about 1 in 4 businesses. Categories, cities, limits and delays are all configurable.",
    tech: ["Python", "Web scraping", "Excel"],
    features: [
      "Eight Florida cities, four service categories",
      "Finds emails by crawling each business's own site",
      "Configurable, polite delays",
    ],
    categories: ["Automation"],
    status: "completed",
    difficulty: "intermediate",
    thumbnail: "",
    images: [],
    githubUrl: "https://github.com/cabreraharry/WebScraperTool",
    liveUrl: null,
    featured: false,
  },
];

/** Rendered as "Coming Soon" teaser cards at the end of the grid (none for now). */
export const futureProjects: FutureProject[] = [];
