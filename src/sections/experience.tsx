"use client";

import * as React from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionShell } from "@/components/shared/section-shell";
import { Reveal } from "@/components/shared/motion-primitives";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  const railRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 70%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      intro="Remote roles with teams in the U.S., Europe and the Philippines: websites, desktop software, mobile apps and AI."
    >
      <div ref={railRef} className="relative">
        {/* Base rail + animated fill */}
        <span className="absolute bottom-2 left-[15px] top-2 w-px bg-border" aria-hidden />
        <motion.span
          style={{ scaleY: fill }}
          className="absolute bottom-2 left-[15px] top-2 w-px origin-top bg-gradient-to-b from-primary to-secondary"
          aria-hidden
        />

        <ul className="flex flex-col gap-8">
          {experience.map((item) => (
            <li key={item.id} className="relative pl-12">
              {/* Node */}
              <span
                className="absolute left-[7px] top-1.5 size-4 rounded-full border-2 border-base bg-primary shadow-[var(--glow-primary)]"
                aria-hidden
              />
              <Reveal>
                <GlassCard interactive className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h3 className="text-lg font-semibold text-fg-strong">
                      {item.role}
                      <span className="text-primary-400"> · {item.org}</span>
                    </h3>
                    <span className="shrink-0 font-sans tracking-wide text-xs text-fg-subtle">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-fg-muted">{item.summary}</p>
                  <ul className="relative z-[1] flex flex-col gap-1.5">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-fg-muted">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary-400/70" aria-hidden />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
