import Image from "next/image";
import { ExternalLink, Maximize2 } from "lucide-react";
import { SectionShell } from "@/components/shared/section-shell";
import { GlassCard } from "@/components/shared/glass-card";
import { Stagger, StaggerItem } from "@/components/shared/motion-primitives";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  return (
    <SectionShell
      id="certifications"
      eyebrow="Certifications"
      title="Certificates"
      intro="Courses and certifications in Python, web development, data analysis and automation. Click a certificate to see it full size."
      
    >
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <StaggerItem key={cert.id} className="h-full">
            <GlassCard interactive className="group flex h-full flex-col overflow-hidden p-0 md:p-0">
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open the ${cert.title} certificate full size`}
                className="relative block aspect-[1.414] overflow-hidden border-b border-border-subtle bg-white"
              >
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-md bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <Maximize2 className="size-4" />
                </span>
              </a>
              <div className="relative z-[1] flex flex-1 flex-col gap-1.5 p-5">
                <h3 className="text-base font-semibold text-fg-strong">{cert.title}</h3>
                <p className="text-sm text-fg-muted">{cert.issuer}</p>
                <p className="font-sans tracking-wide text-xs text-fg-subtle">Issued {cert.date}</p>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm text-primary-400"
                  >
                    Verify credential <ExternalLink className="size-3.5" />
                  </a>
                )}
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}
