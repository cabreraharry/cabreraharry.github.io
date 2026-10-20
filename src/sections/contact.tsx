import { Calendar, Download } from "lucide-react";
import { SectionShell } from "@/components/shared/section-shell";
import { GlassCard } from "@/components/shared/glass-card";
import { Reveal } from "@/components/shared/motion-primitives";
import { ContactForm } from "@/components/shared/contact-form";
import { SocialRow } from "@/components/shared/social-row";
import { EmailLink } from "@/components/shared/email-link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title={<>Got a website that <span className="font-light italic text-gold">needs a hand?</span></>}
      intro="WordPress fixes and updates, a new landing page, or an AI tool for your business: tell me what you need and I'll get back to you."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <GlassCard className="flex h-full flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-sm text-fg-muted">
                Prefer email or socials? Reach me directly:
              </p>
              <EmailLink size="lg" />
              <SocialRow />
            </div>

            <div className="mt-auto flex flex-col gap-3 pt-2">
              {siteConfig.calendlyUrl && (
                <Button asChild variant="outline">
                  <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
                    <Calendar />
                    Book a 15-min call
                  </a>
                </Button>
              )}
              <Button asChild variant="ghost">
                <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Download />
                  Download Resume
                </a>
              </Button>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal>
          <GlassCard className="h-full">
            <ContactForm />
          </GlassCard>
        </Reveal>
      </div>
    </SectionShell>
  );
}
