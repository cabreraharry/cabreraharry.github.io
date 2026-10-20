"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { EASE_OUT } from "@/lib/motion";

interface Box {
  title: string;
  sub: string;
  items: string[];
}

const UI: Box = {
  title: "Interface",
  sub: "React 19 · TypeScript",
  items: ["Tailwind CSS", "Recharts charts", "React Router", "Light & dark themes"],
};
const CORE: Box = {
  title: "Native core",
  sub: "Rust on Tauri 2",
  items: ["Background-service supervisor", "Live updates (server-sent events)", "Async HTTP (reqwest + tokio)", "Tray icon · deep links · single instance"],
};
const BACKEND: Box = {
  title: "Back-end services",
  sub: "Company APIs",
  items: ["HTTPS requests", "Live event stream"],
};
const SHIP: Box = {
  title: "Shipping",
  sub: "Windows",
  items: ["NSIS installer", "Auto-updater", "Starts with Windows"],
};

function Card({ box, delay, accent }: { box: Box; delay: number; accent?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay, ease: EASE_OUT }}
      className={
        "rounded-md border bg-elevated p-4 " + (accent ? "border-border-accent" : "border-border")
      }
    >
      <div className="flex items-baseline justify-between gap-3">
        <h4 className="text-sm font-semibold text-fg-strong">{box.title}</h4>
        <span className="text-[11px] uppercase tracking-[0.14em] text-primary-400">{box.sub}</span>
      </div>
      <ul className="mt-2.5 flex flex-wrap gap-1.5">
        {box.items.map((i) => (
          <li key={i} className="rounded-sm bg-white/[0.04] px-2 py-0.5 text-xs text-fg-muted">
            {i}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Arrow({ label, delay }: { label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center justify-center gap-2 py-1.5 text-[11px] text-fg-subtle"
    >
      <ArrowDown className="size-3.5 text-primary-400" aria-hidden />
      {label}
    </motion.div>
  );
}

/** How the ShortCut Studio desktop app is put together — no product details, just the engineering. */
export function ArchitectureDiagram() {
  return (
    <figure className="mt-6">
      <figcaption className="mb-3 text-xs uppercase tracking-[0.2em] text-fg-subtle">How it&apos;s built</figcaption>
      <Card box={UI} delay={0} />
      <Arrow label="91 typed commands over Tauri IPC" delay={0.15} />
      <Card box={CORE} delay={0.25} accent />
      <Arrow label="talks to the server · ships to users" delay={0.4} />
      <div className="grid gap-3 sm:grid-cols-2">
        <Card box={BACKEND} delay={0.5} />
        <Card box={SHIP} delay={0.6} />
      </div>
    </figure>
  );
}
