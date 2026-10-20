"use client";

import * as React from "react";
import { Check, Copy, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** The email address as a mailto link, with a one-click Copy button beside it. */
export function EmailLink({ size = "md", className }: { size?: "md" | "lg"; className?: string }) {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
    } catch {
      // Older browsers: fall back to a hidden textarea.
      const ta = document.createElement("textarea");
      ta.value = siteConfig.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <a
        href={`mailto:${siteConfig.email}`}
        className={cn(
          "inline-flex min-w-0 items-center gap-2 break-all text-fg transition-colors hover:text-primary-400",
          size === "lg" ? "text-base sm:text-lg" : "text-sm",
        )}
      >
        <Mail className="size-4 shrink-0 text-primary-400" aria-hidden />
        {siteConfig.email}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Email address copied" : "Copy email address"}
        className="inline-flex h-7 items-center gap-1 rounded-sm border border-border px-2 text-xs text-fg-muted transition-colors hover:border-border-accent hover:text-primary-400"
      >
        {copied ? <Check className="size-3.5 text-success" /> : <Copy className="size-3.5" />}
        <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
}
