"use client";

import * as React from "react";
import { SectionShell } from "@/components/shared/section-shell";
import { CaseStudy } from "@/components/shared/case-study";
import { ProjectCard } from "@/components/shared/project-card";
import { ProjectDetailDialog } from "@/components/shared/project-detail-dialog";
import { Stagger, StaggerItem } from "@/components/shared/motion-primitives";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

const featured = projects.filter((p) => p.featured);
const more = projects.filter((p) => !p.featured);

export function ProjectsSection() {
  const [selected, setSelected] = React.useState<Project | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleView = (project: Project) => {
    setSelected(project);
    setOpen(true);
  };

  return (
    <SectionShell
      id="projects"
      eyebrow="Selected work"
      title={
        <>
          Things I&apos;ve built, <span className="font-light italic text-gold">live and in use.</span>
        </>
      }
      intro="Every project here is real: live sites you can open, the WordPress site I develop and maintain, and the software, mobile and AI work behind them."
    >
      <div className="flex flex-col gap-24 lg:gap-32">
        {featured.map((project, i) => (
          <CaseStudy key={project.slug} project={project} index={i} />
        ))}
      </div>

      <div className="mt-28">
        <div className="rule-gold mb-12" />
        <h3 className="mb-2 text-2xl font-semibold text-fg-strong">More work</h3>
        <p className="mb-8 max-w-2xl text-fg-muted">
          Software, mobile, AI and automation projects. Click a card for the details.
        </p>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {more.map((project) => (
            <StaggerItem key={project.slug} className="h-full min-w-0">
              <ProjectCard project={project} onView={handleView} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <ProjectDetailDialog project={selected} open={open} onOpenChange={setOpen} />
    </SectionShell>
  );
}
