/**
 * Single source of truth for identity, hero, SEO, and global constants.
 *
 * The site is a static export served from GitHub Pages at siteUrl. When a custom
 * domain is bought, change `domain` + `siteUrl` and add public/CNAME.
 */

export const siteConfig = {
  name: "Harry Cabrera",
  fullName: "Harry Ericson A. Cabrera",
  initials: "HC",
  role: "WordPress & Full-Stack Developer · AI Engineer",

  headline: "WordPress & Web Developer",
  subheadline:
    "I build and look after fast, accessible WordPress sites and hand-coded landing pages, " +
    "write software in Python, PHP, Rust and Flutter, and connect AI to the tools a business already uses.",
  usp: "WordPress and full-stack developer and AI engineer who builds websites, software and AI integrations that hold up in real business use.",

  // Hero headline: typed one after another under the name (first = what clients hire me for).
  heroRoles: [
    "WordPress Developer",
    "Web Developer",
    "AI Engineer",
    "Landing Page Builder",
    "Flutter Developer",
  ],

  // Hero availability pill
  available: true,
  location: "Puerto Princesa, PH",
  timezone: "GMT+8",

  // Contact / assets
  email: "harryericsoncabrera15@gmail.com",
  resumeUrl: "/Harry-Cabrera-CV.pdf",
  calendlyUrl: "",

  // SEO / domain
  domain: "cabreraharry.github.io",
  siteUrl: "https://cabreraharry.github.io",
  twitterHandle: "",
  description:
    "Harry Cabrera — WordPress & full-stack developer and AI engineer from the Philippines. " +
    "WordPress maintenance, hand-coded landing pages, Python, PHP, Rust, Flutter and AI integrations.",
  keywords: [
    "Harry Cabrera",
    "WordPress Developer",
    "Full-Stack Developer",
    "AI Engineer",
    "Prompt Engineering",
    "Landing Pages",
    "PHP",
    "Python",
    "Flutter",
    "Rust",
    "Philippines",
    "Portfolio",
  ],

  footerQuote:
    "Good systems are quiet — they just work. I build for that kind of quiet.",
  footerTagline: "WordPress & Full-Stack Developer · AI Engineer",

  // Feature flags
  showServices: true,
} as const;

export type SiteConfig = typeof siteConfig;
