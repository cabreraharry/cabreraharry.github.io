"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useLenis } from "lenis/react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav-links";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { SocialRow } from "@/components/shared/social-row";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const SECTION_IDS = navLinks.map((l) => l.href.replace("#", ""));
const NAV_OFFSET = -80;

export function Navbar() {
  const lenis = useLenis();
  const active = useActiveSection(SECTION_IDS);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = React.useCallback(
    (href: string) => {
      const target = href.startsWith("#") ? href : `#${href}`;
      if (lenis) {
        lenis.scrollTo(target, { offset: NAV_OFFSET });
      } else {
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenis],
  );

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  const handleTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 pt-3 sm:pt-4">
      <nav className="container-page" aria-label="Primary">
        <div
          className={cn(
            "flex h-14 items-center justify-between rounded-md px-3 transition-all duration-300 sm:px-4",
            scrolled && "glass-strong rounded-md",
          )}
        >
          <a
            href="#"
            onClick={handleTop}
            className="font-display text-lg font-semibold tracking-wide text-fg-strong"
            aria-label={`${siteConfig.name} — back to top`}
          >
            Harry <span className="font-light italic text-gold">Cabrera</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-md px-3 py-2 text-sm transition-colors",
                      isActive ? "text-fg-strong" : "text-fg-muted hover:text-fg",
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-2 -bottom-0.5 h-px bg-primary-400"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="ghost" size="sm">
              <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
            <Button asChild size="sm">
              <a href="#contact" onClick={(e) => handleNav(e, "#contact")}>
                Contact
              </a>
            </Button>
          </div>

          {/* Mobile menu */}
          <DialogPrimitive.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <DialogPrimitive.Trigger
              className="flex size-10 items-center justify-center rounded-md text-fg lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </DialogPrimitive.Trigger>
            <DialogPrimitive.Portal>
              <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 lg:hidden" />
              <DialogPrimitive.Content className="glass-strong fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col gap-2 p-6 shadow-[var(--shadow-ambient-lg)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right lg:hidden">
                <div className="mb-4 flex items-center justify-between">
                  <DialogPrimitive.Title className="font-display text-lg font-semibold tracking-wide text-fg-strong">
                    Harry <span className="font-light italic text-gold">Cabrera</span>
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Close
                    className="flex size-10 items-center justify-center rounded-md text-fg-muted hover:text-fg-strong"
                    aria-label="Close menu"
                  >
                    <X className="size-6" />
                  </DialogPrimitive.Close>
                </div>
                <DialogPrimitive.Description className="sr-only">
                  Site navigation
                </DialogPrimitive.Description>
                <ul className="flex flex-col">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          handleNav(e, link.href);
                          setMobileOpen(false);
                        }}
                        className="block border-b border-border-subtle py-3 text-lg text-fg transition-colors hover:text-primary-400"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3">
                  <Button asChild>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        handleNav(e, "#contact");
                        setMobileOpen(false);
                      }}
                    >
                      Contact Me
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                      Download Resume
                    </a>
                  </Button>
                </div>
                <SocialRow className="mt-6" />
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          </DialogPrimitive.Root>
        </div>
      </nav>
    </header>
  );
}
