import Image from "next/image";
import { SectionShell } from "@/components/shared/section-shell";
import { GlassCard } from "@/components/shared/glass-card";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/motion-primitives";
import { Tag } from "@/components/shared/tag";
import { aboutInterests, aboutNarrative, aboutQuickFacts } from "@/data/about";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title={<>Hi, I&apos;m Harry. <span className="font-light italic text-gold">Nice to meet you.</span></>}
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        {/* Left: monogram + quick facts */}
        <Reveal className="flex flex-col gap-6">
          <GlassCard className="relative aspect-square overflow-hidden p-0">
            <div
              aria-hidden
              className="absolute inset-0 bg-elevated"
            />
            <Image
              src="/images/harry-graduation.webp"
              alt={`Graduation photo of ${siteConfig.fullName}, BS Computer Science, Palawan State University`}
              fill
              sizes="(max-width: 1024px) 90vw, 30vw"
              className="object-cover object-top"
            />
          </GlassCard>

          <GlassCard className="p-6">
            <dl className="flex flex-col divide-y divide-border-subtle">
              {aboutQuickFacts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-0.5 py-2.5 first:pt-0 last:pb-0">
                  <dt className="font-sans tracking-wide text-xs uppercase tracking-wider text-fg-subtle">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </GlassCard>
        </Reveal>

        {/* Right: narrative + interests */}
        <div className="flex flex-col gap-8">
          <Stagger className="flex flex-col gap-5">
            {aboutNarrative.map((para, i) => (
              <StaggerItem
                key={i}
                className="text-pretty text-base leading-relaxed text-fg-muted md:text-lg"
              >
                {para}
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="flex flex-col gap-3">
            <span className="font-sans tracking-wide text-sm text-fg-subtle">Into:</span>
            <ul className="flex flex-wrap gap-2">
              {aboutInterests.map((interest) => (
                <li key={interest}>
                  <Tag>{interest}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
