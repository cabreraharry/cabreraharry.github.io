/**
 * SEO results for usprimerealty.com, read from Google Search Console (Domain property), Bing Webmaster
 * Tools and Google Analytics on 22 Oct 2026. "Keywords on page 1" = Search Console queries whose average
 * position that month was 10 or better. Clicks and leads are left out on purpose.
 */

export interface BeforeAfter {
  label: string;
  before: number;
  after: number;
  note?: string;
}

export interface KeywordMove {
  keyword: string;
  engine: "Google" | "Bing";
  page: string;
  before: { position: number; month: string };
  after: { position: number; month: string };
}

export interface MonthPoint {
  month: string;
  keywords: number;
  impressions: number;
  partial?: boolean;
}

export const seoPeriod = { from: "Oct 2025", to: "Sep 2026" };

export const seoHeadline: BeforeAfter[] = [
  { label: "Keywords on Google's page 1", before: 7, after: 100 },
  { label: "Non-brand keywords on page 1", before: 2, after: 84, note: "Searches that don't include our name" },
  { label: "Different searches the site shows up in, per month", before: 38, after: 1103 },
  { label: "Google impressions per month", before: 307, after: 9108, note: "Peak 23,302 in June 2026" },
];

export const seoMonthly: MonthPoint[] = [
  { month: "Oct 2025", keywords: 7, impressions: 307 },
  { month: "Nov 2025", keywords: 16, impressions: 1918 },
  { month: "Dec 2025", keywords: 16, impressions: 4026 },
  { month: "Jan 2026", keywords: 27, impressions: 8485 },
  { month: "Feb 2026", keywords: 78, impressions: 11641 },
  { month: "Mar 2026", keywords: 109, impressions: 20118 },
  { month: "Apr 2026", keywords: 76, impressions: 11457 },
  { month: "May 2026", keywords: 86, impressions: 11278 },
  { month: "Jun 2026", keywords: 167, impressions: 23302 },
  { month: "Jul 2026", keywords: 118, impressions: 16738 },
  { month: "Aug 2026", keywords: 70, impressions: 18344 },
  { month: "Sep 2026", keywords: 100, impressions: 9108 },
  { month: "Oct 2026", keywords: 120, impressions: 9173, partial: true },
];

export const seoKeywords: KeywordMove[] = [
  {
    keyword: "cape coral canal map",
    engine: "Google",
    page: "Cape Coral canal map blog post",
    before: { position: 5.6, month: "Feb 2026" },
    after: { position: 1.4, month: "Sep 2026" },
  },
  {
    keyword: "Florida tax-benefit questions (150+ wordings)",
    engine: "Bing",
    page: "Florida tax benefits guide",
    before: { position: 4.4, month: "Nov 2025" },
    after: { position: 1.5, month: "Sep 2026" },
  },
  {
    keyword: "aventura real estate",
    engine: "Google",
    page: "Aventura community page",
    before: { position: 60.3, month: "Apr 2026" },
    after: { position: 35.5, month: "Sep 2026" },
  },
  {
    keyword: "home values in cape coral fl",
    engine: "Google",
    page: "Cape Coral pages",
    before: { position: 71.6, month: "Apr 2026" },
    after: { position: 34.9, month: "Sep 2026" },
  },
  {
    keyword: "cape coral waterfront homes for sale",
    engine: "Google",
    page: "Cape Coral waterfront page",
    before: { position: 33.8, month: "Nov 2025" },
    after: { position: 23.8, month: "Sep 2026" },
  },
];

export const seoWork: { title: string; points: string[] }[] = [
  {
    title: "Research",
    points: [
      "Export Search Console data and sort by impressions, CTR and position to find the pages closest to page 1",
      "Competitor research for each city we sell in, then new posts and pages for the gaps",
    ],
  },
  {
    title: "On-page",
    points: [
      "Built 25 SEO blog posts in WordPress, each with its Rank Math title, description, focus keyword and FAQ",
      "Built the 8 city buyer's guides (Miami, Naples, Cape Coral, Orlando and more)",
    ],
  },
  {
    title: "Technical",
    points: [
      "Audit indexing for every sitemap URL through the Search Console API, and request indexing the day a post goes live",
      "Kept translated copies out of Google with noindex, so they stop competing with the English pages",
      "IndexNow for Bing, and accessibility raised to 99 on mobile",
    ],
  },
  {
    title: "AEO for AI answers",
    points: [
      "Turned 445 FAQ questions on 30 pages into real headings with FAQPage schema: clear questions and answers that AI tools can pick up",
      "Track visits from AI assistants such as ChatGPT in Google Analytics: 2 in June, 15 in September 2026",
    ],
  },
];
