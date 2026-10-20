"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/shared/tag";
import { ArchitectureDiagram } from "@/components/shared/architecture-diagram";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const isPhoneShot = (src: string) => src.endsWith("-m.webp");

function hostOf(url: string | null) {
  if (!url) return "";
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

/** Browser frame that cross-fades between a project's desktop screenshots. */
function ShotCycler({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const desktop = project.images.filter((s) => !isPhoneShot(s));
  const [i, setI] = React.useState(0);

  React.useEffect(() => {
    if (reduce || desktop.length < 2) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % desktop.length), 4200);
    return () => window.clearInterval(id);
  }, [reduce, desktop.length]);

  const src = desktop[i] ?? project.thumbnail;
  return (
    <div className="overflow-hidden rounded-lg border border-border-strong bg-elevated shadow-[var(--shadow-ambient-lg)]">
      <div className="flex items-center gap-1.5 border-b border-border-subtle bg-black/60 px-3 py-2">
        <span className="size-2.5 rounded-full bg-[#3a3a3a]" />
        <span className="size-2.5 rounded-full bg-[#3a3a3a]" />
        <span className="size-2.5 rounded-full bg-[#3a3a3a]" />
        <span className="ml-2 truncate rounded bg-white/5 px-2.5 py-0.5 text-[11px] text-fg-subtle">
          {hostOf(project.liveUrl) || project.name}
        </span>
      </div>
      <div className="relative aspect-[16/10]">
        <AnimatePresence initial={false}>
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt={`${project.name} screenshot`}
              fill
              sizes="(max-width: 1024px) 92vw, 52vw"
              className="object-cover object-top"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/** One featured project, shown large with its screenshots, story and what I did. */
export function CaseStudy({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  const phone = project.images.find(isPhoneShot);

  return (
    <article className="grid grid-cols-1 items-center gap-10 overflow-x-clip lg:grid-cols-12 lg:gap-14 [&>*]:min-w-0">
      {/* Media */}
      <motion.div
        initial={{ opacity: 0, x: flip ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: EASE_OUT }}
        className={cn("relative lg:col-span-7", flip && "lg:order-2")}
      >
        <div className={cn("relative", phone && "pr-[14%] pb-[6%]")}>
          <ShotCycler project={project} />
          {phone && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE_OUT }}
              className="absolute bottom-0 right-0 w-[26%] overflow-hidden rounded-[1.1rem] border-[4px] border-[#1d1d1f] bg-black shadow-[0_24px_60px_-12px_rgba(0,0,0,0.9)]"
            >
              <Image
                src={phone}
                alt={`${project.name} on a phone`}
                width={600}
                height={1298}
                sizes="(max-width: 1024px) 24vw, 14vw"
                className="block h-auto w-full"
              />
            </motion.div>
          )}
        </div>
        {project.note && <p className="mt-3 text-xs italic text-fg-subtle">{project.note}</p>}
        {project.diagram && <ArchitectureDiagram />}
      </motion.div>

      {/* Story */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }}
        className={cn("flex flex-col gap-5 lg:col-span-5", flip && "lg:order-1")}
      >
        <div className="flex items-center gap-4">
          <span className="font-display text-5xl font-light leading-none text-gold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          <span className="text-xs uppercase tracking-[0.2em] text-fg-subtle">
            {project.categories.join(" · ")}
          </span>
        </div>

        <h3 className="text-3xl font-semibold tracking-tight text-fg-strong sm:text-[2.1rem]">
          {project.name}
        </h3>
        <p className="text-pretty leading-relaxed text-fg-muted">{project.longDescription}</p>

        <ul className="flex flex-col gap-2">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2.5 text-sm text-fg">
              <Check className="mt-0.5 size-4 shrink-0 text-primary-400" aria-hidden />
              {f}
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>

        {(project.liveUrl || project.githubUrl) && (
          <div className="flex flex-wrap gap-3 pt-1">
            {project.liveUrl && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Visit live site <ExternalLink />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View code
                </a>
              </Button>
            )}
          </div>
        )}
      </motion.div>
    </article>
  );
}
