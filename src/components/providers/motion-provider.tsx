"use client";

import * as React from "react";
import { MotionConfig } from "motion/react";

/**
 * Makes every Motion component honor the user's reduced-motion preference:
 * transforms are skipped (opacity still fades) when reduce is requested.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
