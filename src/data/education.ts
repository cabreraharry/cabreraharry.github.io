import type { EducationItem } from "@/types";

export const education: EducationItem[] = [
  {
    id: "bscs-psu",
    degree: "Bachelor of Science in Computer Science",
    school: "Palawan State University · Puerto Princesa City",
    period: "2021 – 2025",
    summary:
      "Computer science fundamentals with a focus on applied software development. Member of the Association of Computer Scientists (ACS).",
    thesis: {
      title: "The Hat: Aperiodic Einstein Monotile as Basis for Cryptography",
      description:
        "Group research on using the aperiodic “hat” monotile, the first true single-tile aperiodic shape, as the basis of a cryptographic scheme, with a messaging app as the working proof of concept.",
      tags: ["Cryptography", "Aperiodic tiling", "Python", "Research"],
    },
    coursework: [],
  },
];
