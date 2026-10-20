"use client";

import * as React from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const TYPE_MS = 75;
const DELETE_MS = 40;
const HOLD_MS = 1700;
const GAP_MS = 350;

/**
 * Types each role out letter by letter, holds it, deletes it, then types the next.
 * Screen readers get the whole list once; reduced-motion users see the first role, still.
 */
export function TypingRoles({ roles, className }: { roles: readonly string[]; className?: string }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    if (reduce) return;
    const current = roles[index % roles.length];
    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && text === current) delay = HOLD_MS;
    if (deleting && text === "") delay = GAP_MS;

    const id = window.setTimeout(() => {
      if (!deleting && text === current) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      } else {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }
    }, delay);
    return () => window.clearTimeout(id);
  }, [text, deleting, index, roles, reduce]);

  const shown = reduce ? roles[0] : text;

  return (
    <span className={cn("block", className)}>
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden className="inline-flex min-h-[1.1em] items-baseline">
        <span className="text-gold pr-[0.06em]">{shown || "​"}</span>
        <span className="ml-1 inline-block h-[0.8em] w-[3px] translate-y-[0.08em] animate-[blink_1s_step-end_infinite] bg-primary" />
      </span>
    </span>
  );
}
