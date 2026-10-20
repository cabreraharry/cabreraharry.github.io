import { SectionShell } from "@/components/shared/section-shell";
import { Stagger, StaggerItem } from "@/components/shared/motion-primitives";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      intro="The tools and languages I use on real projects, from WordPress maintenance to desktop software and AI agents."
    >
      <Stagger className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {skills.map((group, i) => (
          <StaggerItem key={group.id} className="flex flex-col gap-4 border-t border-border pt-6">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-sm font-light text-primary-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold text-fg-strong">{group.title}</h3>
            </div>
            <p className="text-sm text-fg-subtle">{group.subtitle}</p>
            <ul className="flex flex-wrap gap-x-2 gap-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-border bg-white/[0.03] px-2.5 py-1 text-sm text-fg transition-colors hover:border-border-accent hover:text-primary-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}
