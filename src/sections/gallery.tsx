import Image from "next/image";
import { SectionShell } from "@/components/shared/section-shell";
import { galleryTall, galleryWide, type GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

function Tile({ item, tall }: { item: GalleryItem; tall?: boolean }) {
  return (
    <figure
      className={cn(
        "group relative mx-2.5 shrink-0 overflow-hidden rounded-lg border border-border bg-elevated",
        tall ? "aspect-[1/2] w-[11.5rem] sm:w-[13rem]" : "aspect-[16/10] w-[19rem] sm:w-[24rem]",
      )}
    >
      <Image
        src={item.src}
        alt={`${item.title} — ${item.kind}`}
        fill
        sizes={tall ? "210px" : "390px"}
        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 bg-gradient-to-t from-black via-black/80 to-transparent px-3.5 pb-3 pt-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="block text-[10px] uppercase tracking-[0.18em] text-primary-400">{item.kind}</span>
        <span className="block text-sm font-medium text-fg-strong">{item.title}</span>
      </figcaption>
    </figure>
  );
}

/** Two auto-scrolling rows (opposite directions); hover pauses. Items are doubled for a seamless loop. */
function Row({ items, tall, reverse, duration }: { items: GalleryItem[]; tall?: boolean; reverse?: boolean; duration: string }) {
  return (
    <div className="marquee-track marquee-mask overflow-hidden py-2">
      <div
        className={reverse ? "marquee-reverse" : "marquee"}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        {[...items, ...items].map((item, i) => (
          <Tile key={`${item.src}-${i}`} item={item} tall={tall} />
        ))}
      </div>
    </div>
  );
}

export function GallerySection() {
  return (
    <SectionShell
      id="gallery"
      eyebrow="Design work"
      title={
        <>
          Pages, posts and emails <span className="font-light italic text-gold">I&apos;ve shipped.</span>
        </>
      }
      intro="Blog posts I laid out and published in WordPress, inner pages of the sites I built, and the email designs behind the seminar funnel. Hover to pause and read."
      className="overflow-hidden"
    >
      <div className="mx-[calc(50%-50vw)] flex flex-col gap-5">
        <Row items={galleryWide} duration="90s" />
        <Row items={galleryTall} tall reverse duration="70s" />
      </div>
    </SectionShell>
  );
}
