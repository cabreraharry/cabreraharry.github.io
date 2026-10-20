"use client";

import * as React from "react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealProps extends React.ComponentProps<typeof motion.div> {
  /** Entrance delay in seconds. */
  delay?: number;
}

/** Single block that fades + rises into view once. */
export function Reveal({ className, delay = 0, children, ...props }: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps extends React.ComponentProps<typeof motion.div> {
  stagger?: number;
  delayChildren?: number;
}

/** Container that staggers the entrance of its <StaggerItem> children. */
export function Stagger({
  className,
  stagger = 0.08,
  delayChildren = 0,
  children,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Child of <Stagger>; its entrance is driven by the parent's timeline. */
export function StaggerItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div variants={fadeUp} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
}
