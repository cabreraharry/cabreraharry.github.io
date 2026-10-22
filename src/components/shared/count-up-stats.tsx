"use client";

import * as React from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [shown, setShown] = React.useState(reduce ? value : 0);

  React.useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setShown(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {shown.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/** A row of headline numbers that count up the first time they scroll into view. */
export function CountUpStats({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border-subtle pt-6 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col gap-0.5">
          <dt className="order-2 text-xs leading-snug text-fg-subtle">{s.label}</dt>
          <dd className="order-1 text-3xl font-bold tracking-tight text-gradient">
            <CountUp value={s.value} suffix={s.suffix} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
