"use client";

import { useLenis } from "lenis/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCtaButton({ label = "Start a conversation" }: { label?: string }) {
  const lenis = useLenis();

  const handleClick = () => {
    if (lenis) lenis.scrollTo("#contact", { offset: -80 });
    else document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button size="lg" onClick={handleClick}>
      {label}
      <ArrowRight />
    </Button>
  );
}
