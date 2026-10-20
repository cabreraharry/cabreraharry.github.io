import { siteConfig } from "@/config/site";
import { socialLinks } from "@/data/social-links";
import { services } from "@/data/services";
import { skills } from "@/data/skills";

/** Structured data: Person + ProfessionalService, emitted as a JSON-LD @graph. */
export function JsonLd() {
  const personId = `${siteConfig.siteUrl}/#person`;
  const knowsAbout = skills.flatMap((c) => c.items).slice(0, 24);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        image: `${siteConfig.siteUrl}/images/harry-graduation.webp`,
        jobTitle: siteConfig.role,
        email: `mailto:${siteConfig.email}`,
        description: siteConfig.usp,
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Palawan State University",
        },
        knowsAbout,
        sameAs: socialLinks.map((s) => s.href),
      },
      {
        "@type": "ProfessionalService",
        name: `${siteConfig.name} — WordPress, Web & AI Development`,
        url: siteConfig.siteUrl,
        description: siteConfig.description,
        provider: { "@id": personId },
        areaServed: "Worldwide",
        serviceType: services.map((s) => s.title),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Static, trusted content — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
