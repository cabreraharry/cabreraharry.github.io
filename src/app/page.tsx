import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { SkillsSection } from "@/sections/skills";
import { ExperienceSection } from "@/sections/experience";
import { ProjectsSection } from "@/sections/projects";
import { CertificationsSection } from "@/sections/certifications";
import { EducationSection } from "@/sections/education";
import { ServicesSection } from "@/sections/services";
import { GallerySection } from "@/sections/gallery";
import { ContactSection } from "@/sections/contact";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <GallerySection />
      <SkillsSection />
      <ExperienceSection />
      {siteConfig.showServices && <ServicesSection />}
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
