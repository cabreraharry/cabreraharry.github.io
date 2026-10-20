"use client";

import { useEffect } from "react";

/**
 * One global, rAF-throttled pointer listener that drives the `--mx/--my`
 * vars on whichever `.spotlight` element is under the cursor. Disabled on
 * touch devices and under reduced-motion. Mounted once in the layout.
 */
export function SpotlightController() {
  useEffect(() => {
    const noHover = window.matchMedia("(hover: none)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (noHover || reduced) return;

    let raf = 0;

    const onMove = (e: PointerEvent) => {
      const { clientX, clientY } = e;
      const target = e.target as HTMLElement | null;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = target?.closest?.(".spotlight") as HTMLElement | null;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${clientX - rect.left}px`);
        el.style.setProperty("--my", `${clientY - rect.top}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
