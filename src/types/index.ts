/**
 * Canonical shared types for the portfolio.
 *
 * Every section renders by mapping over typed arrays in `src/data/*`.
 * Adding content = adding an object here-shaped value, with zero UI changes.
 */

/* ----------------------------- Projects ----------------------------- */

export type ProjectStatus =
  | "live"
  | "in-progress"
  | "completed"
  | "research"
  | "coming-soon";

export type ProjectDifficulty = "intermediate" | "advanced" | "experimental";

export type ProjectCategory =
  | "Landing Pages"
  | "WordPress"
  | "AI"
  | "Software"
  | "Mobile"
  | "Automation";

export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  tech: string[];
  features: string[];
  categories: ProjectCategory[];
  status: ProjectStatus;
  difficulty: ProjectDifficulty;
  /** Path under /public. */
  thumbnail: string;
  /** Carousel images (paths under /public). */
  images: string[];
  /** `null` when the repo is private / has no public link. */
  githubUrl: string | null;
  /** `null` when there is no public live demo. */
  liveUrl: string | null;
  featured: boolean;
}

/** Minimal shape for the "future work" teaser cards. */
export type FutureProject = Pick<
  Project,
  "slug" | "name" | "shortDescription" | "status"
>;

/* ---------------------------- Experience ---------------------------- */

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  summary: string;
  highlights: string[];
}

/* ------------------------------ Skills ------------------------------ */

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  /** lucide-react icon name, resolved through the icon map. */
  icon: string;
  items: string[];
}

/* ---------------------------- Education ----------------------------- */

export interface Thesis {
  title: string;
  description: string;
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  summary: string;
  thesis?: Thesis;
  coursework: string[];
}

/* ----------------------------- Roadmap ------------------------------ */

export type RoadmapStatus = "In progress" | "Exploring" | "Ongoing" | "Learning";

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: RoadmapStatus;
  icon: string;
}

/* -------------------------- Certifications -------------------------- */

export type CertCategory =
  | "Development"
  | "Cloud / DevOps"
  | "Cybersecurity"
  | "AI & Automation";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: CertCategory;
  /** "Mon YYYY" or ISO date. */
  date: string;
  credentialId: string;
  verifyUrl: string;
  logo: string;
  /** Picture of the certificate, path under /public. */
  image: string;
}

export interface CertCategoryTarget {
  category: CertCategory;
  targets: string;
}

/* ----------------------------- Services ----------------------------- */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

/* ------------------------- Links / navigation ----------------------- */

export type SocialLabel = "GitHub" | "LinkedIn" | "Facebook";

export interface SocialLink {
  label: SocialLabel;
  href: string;
  /** react-icons key, resolved through the icon map. */
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}
