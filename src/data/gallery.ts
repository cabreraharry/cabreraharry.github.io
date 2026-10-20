/** Design gallery: real pages, posts and emails Harry built (screenshots in public/images). */

export interface GalleryItem {
  src: string;
  title: string;
  kind: string;
}

const g = (name: string) => `/images/gallery/${name}.webp`;
const p = (name: string) => `/images/projects/${name}.webp`;

/** Landscape row: blog post designs and site pages. */
export const galleryWide: GalleryItem[] = [
  { src: g("blog-miami-luxury"), title: "Miami Luxury Real Estate 2026", kind: "Blog post · WordPress" },
  { src: g("israel-balfour-81"), title: "Balfour 81, Bat Yam", kind: "Project page · Israel site" },
  { src: g("blog-flood-zones"), title: "Florida Flood Zones Guide", kind: "Blog post · WordPress" },
  { src: p("bayit-properties-2"), title: "Live inventory", kind: "Landing page · Bayit" },
  { src: g("blog-living-in-naples"), title: "Living in Naples 2026", kind: "Blog post · WordPress" },
  { src: g("israel-hagdud-haivri"), title: "HaGdud Ha'Ivri, Ra'anana", kind: "Project page · Israel site" },
  { src: p("rentals-2"), title: "Two-step lead form", kind: "Landing page · Rentals" },
  { src: g("blog-orlando-living"), title: "Orlando Living Guide 2026", kind: "Blog post · WordPress" },
  { src: g("israel-lovely-bavli"), title: "Lovely Bavli, Tel Aviv", kind: "Project page · Israel site" },
  { src: g("blog-condo-vs-house"), title: "Condo vs Single-Family Home", kind: "Blog post · WordPress" },
  { src: p("israel-seminar-2"), title: "Seminar agenda & speakers", kind: "Funnel page · Seminar" },
  { src: g("blog-preconstruction"), title: "Pre-Construction Buyer's Guide", kind: "Blog post · WordPress" },
  { src: g("blog-cape-coral"), title: "Cape Coral Investment Property", kind: "Blog post · WordPress" },
];

/** Portrait row: email designs and phone views. */
export const galleryTall: GalleryItem[] = [
  { src: g("email-1-confirmation"), title: "“You're registered”", kind: "Email · seminar" },
  { src: p("bayit-properties-m"), title: "Bayit Properties", kind: "Phone view" },
  { src: g("email-2-this-sunday"), title: "“This Sunday” reminder", kind: "Email · seminar" },
  { src: p("israel-projects-m"), title: "Israel Projects", kind: "Phone view" },
  { src: g("email-3-starts-in-1-hour"), title: "“Starts in 1 hour”", kind: "Email · seminar" },
  { src: p("rentals-m"), title: "South Florida Rentals", kind: "Phone view" },
  { src: g("email-4-second-session"), title: "Second session", kind: "Email · seminar" },
  { src: p("israel-seminar-m"), title: "Seminar sign-up", kind: "Phone view" },
  { src: g("email-6-thank-you"), title: "Thank-you email", kind: "Email · seminar" },
  { src: p("seo-blog-posts-m"), title: "Blog post", kind: "Phone view" },
  { src: g("email-5-starts-in-1-hour"), title: "Last call", kind: "Email · seminar" },
  { src: p("ai-chatbot-m"), title: "AI chatbot", kind: "Phone view" },
];
