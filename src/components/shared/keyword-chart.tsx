"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { MonthPoint } from "@/data/seo-results";

const TICKS = [0, 50, 100, 150];
const MAX = 180;
/** The partial month is hatched, so "not finished yet" never rests on colour alone. */
const HATCH = "repeating-linear-gradient(45deg, #d4af37 0 2px, rgba(212,175,55,0.3) 2px 6px)";

function shortMonth(m: string) {
  const [mon, year] = m.split(" ");
  return mon === "Oct" || mon === "Jan" ? `${mon} '${year.slice(2)}` : mon;
}

/** Monthly column chart of page-1 keywords, with a hover/focus tooltip on every month. */
export function KeywordChart({ data }: { data: MonthPoint[] }) {
  const reduce = useReducedMotion();
  const [active, setActive] = React.useState<number | null>(null);
  const peak = data.reduce((best, d, i) => (d.keywords > data[best].keywords ? i : best), 0);
  const lastFull = data.findLastIndex((d) => !d.partial);
  const labelled = new Set([0, peak, lastFull, data.length - 1]);

  return (
    <figure className="flex h-full flex-col gap-4">
      <figcaption className="flex flex-col gap-1">
        <span className="text-base font-semibold text-fg-strong">Keywords on Google&apos;s page 1, each month</span>
        <span className="text-xs text-fg-subtle">
          Hover or tap a month for its numbers. The striped bar is October 2026 so far (1–19 Oct).
        </span>
      </figcaption>

      {/* Grows to fill the card beside the keyword list on desktop */}
      <div className="flex min-h-56 flex-1 gap-2 sm:min-h-64">
        {/* Y axis */}
        <div aria-hidden className="relative w-7 shrink-0 text-right text-[11px] tabular-nums text-fg-subtle">
          {TICKS.map((t) => (
            <span key={t} className="absolute right-0 -translate-y-1/2" style={{ bottom: `${(t / MAX) * 100}%` }}>
              {t}
            </span>
          ))}
        </div>

        {/* Plot */}
        <div className="relative flex-1" onMouseLeave={() => setActive(null)}>
          {TICKS.map((t) => (
            <div
              key={t}
              aria-hidden
              className="absolute inset-x-0 h-px bg-white/[0.07]"
              style={{ bottom: `${(t / MAX) * 100}%` }}
            />
          ))}

          <div className="absolute inset-0 flex">
            {data.map((d, i) => {
              const h = (d.keywords / MAX) * 100;
              const on = active === i;
              return (
                <div
                  key={d.month}
                  tabIndex={0}
                  role="img"
                  aria-label={`${d.month}${d.partial ? " (1 to 19 October)" : ""}: ${d.keywords} keywords on page 1, ${d.impressions.toLocaleString("en-US")} impressions`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(on ? null : i)}
                  className="group relative flex h-full flex-1 cursor-default items-end justify-center outline-none"
                >
                  {labelled.has(i) && (
                    <span
                      aria-hidden
                      className="absolute left-1/2 -translate-x-1/2 text-[11px] font-medium tabular-nums text-fg-muted"
                      style={{ bottom: `calc(${h}% + 4px)` }}
                    >
                      {d.keywords}
                    </span>
                  )}
                  <motion.span
                    aria-hidden
                    initial={reduce ? false : { scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, delay: i * 0.04, ease: EASE_OUT }}
                    className={cn(
                      "block w-[62%] max-w-6 origin-bottom rounded-t-[4px] transition-opacity duration-200",
                      active !== null && !on && "opacity-40",
                      "group-focus-visible:ring-2 group-focus-visible:ring-primary-400/70",
                    )}
                    style={{ height: `${h}%`, background: d.partial ? HATCH : "#d4af37" }}
                  />

                  {on && (
                    <span
                      role="tooltip"
                      className={cn(
                        "pointer-events-none absolute z-10 w-max rounded-md border border-border-strong bg-overlay px-3 py-2 text-left shadow-[var(--shadow-ambient-md)]",
                        i < 3 ? "left-0" : i > data.length - 4 ? "right-0" : "left-1/2 -translate-x-1/2",
                      )}
                      style={{ bottom: `calc(${Math.min(h, 72)}% + 22px)` }}
                    >
                      <span className="block text-xs font-semibold text-fg-strong">
                        {d.month}
                        {d.partial && <span className="font-normal text-fg-subtle"> · 1–19 Oct</span>}
                      </span>
                      <span className="mt-1 block text-xs tabular-nums text-fg">
                        {d.keywords} keywords on page 1
                      </span>
                      <span className="block text-xs tabular-nums text-fg-muted">
                        {d.impressions.toLocaleString("en-US")} impressions
                      </span>
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* X axis: every third month, so the labels never collide on a phone */}
      <div aria-hidden className="ml-9 flex text-[11px] text-fg-subtle">
        {data.map((d, i) => (
          <span key={d.month} className="flex-1 whitespace-nowrap text-center">
            {i % 3 === 0 ? shortMonth(d.month) : ""}
          </span>
        ))}
      </div>

      <table className="sr-only">
        <caption>Keywords on Google&apos;s page 1 and impressions, by month</caption>
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Keywords on page 1</th>
            <th scope="col">Impressions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.month}>
              <th scope="row">{d.month}{d.partial ? " (1–19 Oct)" : ""}</th>
              <td>{d.keywords}</td>
              <td>{d.impressions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
