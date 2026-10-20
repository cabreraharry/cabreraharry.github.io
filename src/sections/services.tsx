import { SectionShell } from "@/components/shared/section-shell";
import { Stagger, StaggerItem, Reveal } from "@/components/shared/motion-primitives";
import { ContactCtaButton } from "@/components/shared/contact-cta-button";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <SectionShell
      id="services"
      eyebrow="Services"
      title={
        <>
          How I can <span className="font-light italic text-gold">help you.</span>
        </>
      }
      intro="Freelance and part-time work, fully remote."
      subtle
    >
      <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
        {services.map((service, i) => (
          <StaggerItem
            key={service.id}
            className="group flex flex-col gap-3 border-t border-border py-8 pr-8 transition-colors hover:border-border-accent"
          >
            <span className="font-display text-4xl font-light text-fg-subtle transition-colors group-hover:text-primary-400">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-semibold text-fg-strong">{service.title}</h3>
            <p className="text-sm leading-relaxed text-fg-muted">{service.description}</p>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-10 flex justify-center">
        <ContactCtaButton />
      </Reveal>
    </SectionShell>
  );
}
