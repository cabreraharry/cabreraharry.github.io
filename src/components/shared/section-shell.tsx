import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./motion-primitives";

interface SectionShellProps {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  children: React.ReactNode;
  /** Alternating section band background. */
  subtle?: boolean;
  className?: string;
  headingClassName?: string;
}

/** Standard section wrapper: anchor id, container, revealed heading, content. */
export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  children,
  subtle = false,
  className,
  headingClassName,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("section-y scroll-mt-[var(--nav-height)]", subtle && "bg-subtle/60", className)}
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            intro={intro}
            align={align}
            className={cn("mb-10 md:mb-14", headingClassName)}
          />
        </Reveal>
        {children}
      </div>
    </section>
  );
}
