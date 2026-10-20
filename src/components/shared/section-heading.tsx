import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

/** Eyebrow + title + optional intro. Used at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-fg-strong sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed text-fg-muted",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
