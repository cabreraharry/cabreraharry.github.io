import { ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/shared/section-shell";
import { GlassCard } from "@/components/shared/glass-card";
import { CountUp } from "@/components/shared/count-up-stats";
import { KeywordChart } from "@/components/shared/keyword-chart";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/motion-primitives";
import { seoHeadline, seoKeywords, seoMonthly, seoPeriod, seoWork } from "@/data/seo-results";

const pageOf = (position: number) => Math.max(1, Math.ceil(position / 10));

function PageMove({ before, after }: { before: number; after: number }) {
  if (after <= 3) return <span className="chip">Top of page 1</span>;
  return (
    <span className="chip">
      Page {pageOf(before)} → page {pageOf(after)}
    </span>
  );
}

export function SeoResultsSection() {
  return (
    <SectionShell
      id="seo"
      eyebrow="SEO & AEO results"
      title={
        <>
          Real search results, <span className="font-light italic text-gold">before and after.</span>
        </>
      }
      intro="usprimerealty.com, the WordPress site I help build and maintain, first showed up on Google in October 2025. Every number below comes straight from Google Search Console, Bing Webmaster Tools or Google Analytics, comparing whole months."
    >
      {/* Headline numbers */}
      <Stagger className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4" stagger={0.07}>
        {seoHeadline.map((s) => (
          <StaggerItem key={s.label} className="h-full min-w-0">
            <GlassCard className="flex h-full flex-col gap-2 p-4 sm:p-5 md:p-6">
              <span className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
                <CountUp value={s.after} />
              </span>
              <span className="text-sm font-medium text-fg">{s.label}</span>
              <span className="mt-auto pt-2 text-xs text-fg-subtle">
                Up from <span className="tabular-nums text-fg-muted">{s.before.toLocaleString("en-US")}</span> ·{" "}
                {seoPeriod.from} → {seoPeriod.to}
                {s.note && <span className="block pt-0.5">{s.note}</span>}
              </span>
            </GlassCard>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 [&>*]:min-w-0">
        {/* Chart */}
        <Reveal className="lg:col-span-7">
          <GlassCard className="h-full p-5 md:p-6">
            <KeywordChart data={seoMonthly} />
          </GlassCard>
        </Reveal>

        {/* Keyword by keyword */}
        <Reveal className="lg:col-span-5" delay={0.1}>
          <GlassCard className="flex h-full flex-col gap-4 p-5 md:p-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold text-fg-strong">Keyword by keyword</h3>
              <p className="text-xs text-fg-subtle">Average position that month. 1 is the top result.</p>
            </div>
            <ul className="flex flex-col divide-y divide-border-subtle">
              {seoKeywords.map((k) => (
                <li key={k.keyword} className="flex flex-col gap-1.5 py-3 first:pt-0 last:pb-0">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-sm font-medium text-fg">&ldquo;{k.keyword}&rdquo;</span>
                    <span className="shrink-0 text-[11px] uppercase tracking-wider text-fg-subtle">{k.engine}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <span className="flex items-center gap-1.5 text-sm tabular-nums">
                      <span className="text-fg-muted">{k.before.position.toFixed(1)}</span>
                      <ArrowRight className="size-3.5 text-primary-400" aria-label="to" />
                      <span className="font-semibold text-fg-strong">{k.after.position.toFixed(1)}</span>
                    </span>
                    <PageMove before={k.before.position} after={k.after.position} />
                  </div>
                  <span className="text-xs text-fg-subtle">
                    {k.before.month} → {k.after.month} · {k.page}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>

      {/* How */}
      <div className="mt-14">
        <h3 className="mb-6 text-2xl font-semibold text-fg-strong">How I got there</h3>
        <Stagger className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
          {seoWork.map((w) => (
            <StaggerItem key={w.title} className="flex flex-col gap-3 border-t border-border-accent/60 pt-4">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-400">{w.title}</span>
              <ul className="flex flex-col gap-2.5">
                {w.points.map((p) => (
                  <li key={p} className="text-pretty text-sm leading-relaxed text-fg-muted">
                    {p}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <p className="mt-10 max-w-3xl text-pretty text-xs leading-relaxed text-fg-subtle">
        &ldquo;Keywords on page 1&rdquo; counts the Search Console queries whose average position that month was 10 or
        better. Topics are agreed with the marketing team; I do the research, the build and the technical SEO. Data
        read on 22 October 2026.
      </p>
    </SectionShell>
  );
}
