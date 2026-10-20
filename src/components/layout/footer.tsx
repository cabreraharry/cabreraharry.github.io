"use client";

import * as React from "react";
import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";
import { navLinks } from "@/data/nav-links";
import { siteConfig } from "@/config/site";
import { SocialRow } from "@/components/shared/social-row";

export function Footer() {
  const lenis = useLenis();
  const year = new Date().getFullYear();

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo(href, { offset: -80 });
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border-subtle bg-subtle/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      <div className="container-page py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_auto]">
          {/* Identity + quote */}
          <div className="flex flex-col gap-4">
            <a
              href="#"
              onClick={handleTop}
              className="font-display text-xl font-semibold tracking-wide text-fg-strong"
              aria-label={`${siteConfig.name} — back to top`}
            >
              Harry <span className="font-light italic text-gold">Cabrera</span>
            </a>
            <p className="text-sm text-fg-muted">{siteConfig.footerTagline}</p>
            <p className="max-w-sm text-pretty text-sm italic text-fg-subtle">
              “{siteConfig.footerQuote}”
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <h2 className="eyebrow mb-4">Navigate</h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-sm text-fg-muted transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex flex-col gap-4 md:items-end">
            <h2 className="eyebrow">Connect</h2>
            <SocialRow />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-6 sm:flex-row">
          <p className="text-xs text-fg-subtle">
            © {year} {siteConfig.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
          <button
            type="button"
            onClick={handleTop}
            className="inline-flex items-center gap-1.5 text-xs text-fg-subtle transition-colors hover:text-fg"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
