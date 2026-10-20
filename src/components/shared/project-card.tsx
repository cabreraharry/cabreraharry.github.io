"use client";

import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { GlassCard } from "@/components/shared/glass-card";
import { StatusBadge } from "@/components/shared/status-badge";
import { Tag } from "@/components/shared/tag";
import type { Project } from "@/types";

const MAX_TAGS = 4;

export function ProjectCard({
  project,
  onView,
}: {
  project: Project;
  onView: (project: Project) => void;
}) {
  const extraTags = project.tech.length - MAX_TAGS;

  return (
    <GlassCard interactive className="group flex h-full flex-col overflow-hidden p-0 md:p-0">
      {/* Screenshot, only when there is a real one — no placeholder art. */}
      {project.thumbnail && (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border-subtle">
          <Image
            src={project.thumbnail}
            alt={`${project.name} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}

      <div className="relative z-[1] flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[11px] uppercase tracking-[0.2em] text-fg-subtle">
            {project.categories.join(" · ")}
          </span>
          <StatusBadge status={project.status} />
        </div>
        <h3 className="text-lg font-semibold text-fg-strong transition-colors group-hover:text-primary-400">
          {project.name}
        </h3>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-fg-muted">
          {project.shortDescription}
        </p>

        <ul className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, MAX_TAGS).map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
          {extraTags > 0 && (
            <li>
              <Tag>+{extraTags}</Tag>
            </li>
          )}
        </ul>

        <div className="flex items-center justify-between gap-2 pt-1">
          <button
            type="button"
            onClick={() => onView(project)}
            className="group/btn inline-flex items-center gap-1 text-sm font-medium text-primary-400"
          >
            Details
            <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
          </button>

          <div className="flex items-center gap-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="flex size-9 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-white/5 hover:text-fg-strong"
              >
                <FaGithub size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live site`}
                className="flex size-9 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-white/5 hover:text-fg-strong"
              >
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
