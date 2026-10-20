"use client";

import * as React from "react";
import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";

/**
 * Lenis smooth scroll (root mode). Disabled under prefers-reduced-motion,
 * where native scrolling + CSS scroll-padding handle anchor navigation.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, duration: 1.1, smoothWheel: true, wheelMultiplier: 1 }}
    >
      {children}
    </ReactLenis>
  );
}
