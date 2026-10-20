"use client";

import * as React from "react";
import { useLenis } from "lenis/react";
import { motion } from "motion/react";
import { ArrowRight, Download, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialRow } from "@/components/shared/social-row";
import { HeroShowcase } from "@/components/shared/hero-showcase";
import { CountUpStats, type Stat } from "@/components/shared/count-up-stats";
import { siteConfig } from "@/config/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

const STATS: Stat[] = [
  { value: 25, label: "SEO blog posts published" },
  { value: 99, label: "Accessibility score on mobile" },
  { value: 4, label: "Hand-coded sites & landing pages" },
  { value: 6, label: "Certificates earned" },
];

export function HeroSection() {
  const lenis = useLenis();

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo(href, { offset: -80 });
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center pt-28 pb-20 sm:pt-32"
    >
      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-2 [&>*]:min-w-0">
        {/* Left: copy */}
        <motion.div
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <span className="eyebrow">WordPress · Full-Stack · AI</span>
            {siteConfig.available && (
              <span className="inline-flex items-center gap-2 text-xs text-fg-muted">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-success" />
                </span>
                Available for projects
                <span className="inline-flex items-center gap-1 text-fg-subtle">
                  <MapPin className="size-3" />
                  {siteConfig.location}
                </span>
              </span>
            )}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-[2.6rem] font-bold leading-[1.04] tracking-tight text-fg-strong sm:text-6xl xl:text-7xl"
          >
            Harry Cabrera
            <span className="block font-light italic text-gold">WordPress &amp; Web Developer</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-pretty text-lg leading-relaxed text-fg-muted"
          >
            Developer from Palawan, Philippines. {siteConfig.subheadline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#projects" onClick={(e) => handleNav(e, "#projects")}>
                See my work
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact" onClick={(e) => handleNav(e, "#contact")}>
                <Mail />
                Contact me
              </a>
            </Button>
            <Button asChild variant="link" size="lg">
              <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download />
                Resume
              </a>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp}>
            <SocialRow />
          </motion.div>

          <motion.div variants={fadeUp}>
            <CountUpStats stats={STATS} />
          </motion.div>
        </motion.div>

        {/* Right: live work */}
        <HeroShowcase />
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#projects"
        onClick={(e) => handleNav(e, "#projects")}
        aria-label="Scroll to my work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute inset-x-0 bottom-6 mx-auto hidden w-fit flex-col items-center gap-1 text-xs uppercase tracking-[0.2em] text-fg-subtle xl:flex"
      >
        Scroll
        <ChevronDown className="size-4 animate-bounce text-primary-400" />
      </motion.a>
    </section>
  );
}
