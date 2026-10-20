"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/shared/status-badge";
import { Tag } from "@/components/shared/tag";
import type { Project, ProjectDifficulty } from "@/types";

const DIFFICULTY_LABEL: Record<ProjectDifficulty, string> = {
  intermediate: "Intermediate",
  advanced: "Advanced",
  experimental: "Experimental",
};

export function ProjectDetailDialog({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        {project && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center justify-between gap-3 pr-8">
              <DialogTitle>{project.name}</DialogTitle>
              <StatusBadge status={project.status} />
            </div>

            <DialogDescription className="text-base text-fg-muted">
              {project.longDescription}
            </DialogDescription>

            {project.images.length > 0 && (
              <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
                {project.images.map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-[16/10] w-[85%] shrink-0 snap-center overflow-hidden rounded-md border border-border-subtle bg-black/40"
                  >
                    <Image
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 85vw, 560px"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <h4 className="eyebrow">Highlights</h4>
              <ul className="flex flex-col gap-1.5">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-fg-muted">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary-400/70" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="eyebrow">Tech stack</h4>
              <ul className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="secondary">{DIFFICULTY_LABEL[project.difficulty]}</Badge>
              {project.categories.map((c) => (
                <Badge key={c} tone="neutral">
                  {c}
                </Badge>
              ))}
            </div>

            {(project.githubUrl || project.liveUrl) && (
              <div className="flex flex-wrap gap-3 pt-1">
                {project.githubUrl && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> View code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink /> Visit live site
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
