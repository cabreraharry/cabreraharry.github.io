"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface Shot {
  src: string;
  url: string;
  className: string;
  /** How far (px) this layer drifts with the pointer — nearer layers move more. */
  depth: number;
  delay: number;
  /** Float amplitude in px. */
  float: number;
}

const BROWSERS: Shot[] = [
  {
    src: "/images/projects/bayit-properties-1.webp",
    url: "bayitproperties.usprimerealty.com",
    className: "left-0 top-[4%] w-[60%] -rotate-[5deg]",
    depth: 14,
    delay: 0.45,
    float: 6,
  },
  {
    src: "/images/projects/israel-seminar-1.webp",
    url: "seminar.usprimerealty.com",
    className: "right-0 top-0 w-[56%] rotate-[4deg]",
    depth: 20,
    delay: 0.6,
    float: 8,
  },
  {
    src: "/images/projects/israel-projects-1.webp",
    url: "israel.usprimerealty.com",
    className: "left-[10%] top-[30%] z-10 w-[70%]",
    depth: 30,
    delay: 0.25,
    float: 5,
  },
];

const PHONE: Shot = {
  src: "/images/projects/rentals-m.webp",
  url: "rentals.usprimerealty.com",
  className: "bottom-0 right-[3%] z-20 w-[23%] rotate-[3deg]",
  depth: 42,
  delay: 0.8,
  float: 9,
};

function Layer({
  shot,
  mx,
  my,
  index,
  children,
}: {
  shot: Shot;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  index: number;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const x = useTransform(mx, (v) => v * shot.depth);
  const y = useTransform(my, (v) => v * shot.depth);

  // Three wrappers so entrance, pointer parallax and idle float never fight over `y`.
  return (
    <motion.div
      className={cn("absolute", shot.className)}
      initial={{ opacity: 0, y: 48, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: shot.delay, ease: EASE_OUT }}
    >
      <motion.div style={{ x, y }}>
        <motion.div
          animate={reduce ? undefined : { y: [0, -shot.float, 0] }}
          transition={{ duration: 5 + index * 1.3, repeat: Infinity, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function BrowserFrame({ shot }: { shot: Shot }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border-strong bg-elevated shadow-[0_30px_80px_-20px_rgba(0,0,0,0.75)]">
      <div className="flex items-center gap-1.5 border-b border-border-subtle bg-black/40 px-3 py-2">
        <span className="size-2 rounded-full bg-error/70" />
        <span className="size-2 rounded-full bg-warning/70" />
        <span className="size-2 rounded-full bg-success/70" />
        <span className="ml-2 truncate rounded bg-white/5 px-2 py-0.5 font-sans tracking-wide text-[9px] text-fg-subtle sm:text-[10px]">
          {shot.url}
        </span>
      </div>
      <Image
        src={shot.src}
        alt={`Screenshot of ${shot.url}`}
        width={1440}
        height={900}
        priority
        sizes="(max-width: 1024px) 70vw, 30vw"
        className="block h-auto w-full"
      />
    </div>
  );
}

function PhoneFrame({ shot }: { shot: Shot }) {
  return (
    <div className="overflow-hidden rounded-[1.4rem] border-[5px] border-[#1c2130] bg-black shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)]">
      <Image
        src={shot.src}
        alt={`Phone view of ${shot.url}`}
        width={600}
        height={1298}
        sizes="(max-width: 1024px) 25vw, 12vw"
        className="block h-auto w-full"
      />
    </div>
  );
}

/** Stacked, floating screenshots of real client sites that tilt toward the pointer. */
export function HeroShowcase() {
  const ref = React.useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18 });
  const rotateY = useTransform(mx, (v) => v * 6);
  const rotateX = useTransform(my, (v) => v * -6);

  const onMove = (e: React.PointerEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    rawX.set((e.clientX - r.left) / r.width - 0.5);
    rawY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative mx-auto w-full max-w-[640px] [perspective:1400px]"
      aria-label="Screenshots of websites I built"
      role="img"
    >
      {/* Glow behind the stack */}
      <div
        aria-hidden
        className="absolute inset-[10%] -z-10 rounded-full bg-gradient-to-tr from-primary/35 via-secondary/25 to-transparent blur-3xl"
      />
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative aspect-[5/4] w-full"
      >
        {BROWSERS.map((shot, i) => (
          <Layer key={shot.src} shot={shot} mx={mx} my={my} index={i}>
            <BrowserFrame shot={shot} />
          </Layer>
        ))}
        <Layer shot={PHONE} mx={mx} my={my} index={3}>
          <PhoneFrame shot={PHONE} />
        </Layer>
      </motion.div>
    </div>
  );
}
