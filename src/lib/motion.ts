import type { Variants } from "motion/react";

/** Premium easing used across entrance animations (easeOutExpo-ish). */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** Fade + rise — the default scroll-reveal for cards and blocks. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

/** Plain fade — for backgrounds / subtle reveals. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT } },
};

/** Container that staggers its children's entrance. */
export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

/** Shared `whileInView` viewport config — reveal once, when ~20% visible. */
export const viewportOnce = { once: true, amount: 0.2 } as const;
