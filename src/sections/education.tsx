import { GraduationCap, FlaskConical } from "lucide-react";
import { SectionShell } from "@/components/shared/section-shell";
import { GlassCard } from "@/components/shared/glass-card";
import { Reveal } from "@/components/shared/motion-primitives";
import { Tag } from "@/components/shared/tag";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <SectionShell id="education" eyebrow="Education" title="Education">
      <div className="flex flex-col gap-6">
        {education.map((entry) => (
          <Reveal key={entry.id}>
            <GlassCard className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-border-accent bg-primary-soft text-primary-400">
                    <GraduationCap className="size-5" />
                  </span>
                  <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-fg-strong">{entry.degree}</h3>
                      <p className="text-sm text-primary-400">{entry.school}</p>
                    </div>
                    <span className="font-sans tracking-wide text-xs text-fg-subtle">{entry.period}</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-fg-muted">{entry.summary}</p>
              </div>

              {entry.thesis && (
                <div className="border-gradient rounded-lg bg-inset/60 p-5">
                  <div className="flex items-center gap-2">
                    <FlaskConical className="size-4 text-secondary-400" />
                    <span className="eyebrow text-secondary-400">Thesis / Research</span>
                  </div>
                  <h4 className="mt-2 text-base font-semibold text-fg-strong">
                    {entry.thesis.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {entry.thesis.description}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {entry.thesis.tags.map((tag) => (
                      <li key={tag}>
                        <Tag>{tag}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {entry.coursework.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="font-sans tracking-wide text-sm text-fg-subtle">Relevant coursework</span>
                  <ul className="flex flex-wrap gap-1.5">
                    {entry.coursework.map((course) => (
                      <li key={course}>
                        <Tag>{course}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
