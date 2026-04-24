import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { CTABand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { listInsights, formatInsightDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on running AI in real businesses — governance, operating models, and what actually happens after the demo.",
};

export default function InsightsIndexPage() {
  const insights = listInsights();

  return (
    <>
      <Section>
        <SectionHeading
          title="Insights."
          lede="Notes on running AI in real businesses."
          as="h1"
        />
      </Section>

      <Section className="border-t border-[var(--color-rule)]">
        {insights.length === 0 ? (
          <p className="font-mono text-[0.8125rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Coming soon.
          </p>
        ) : (
          <ul className="flex flex-col">
            {insights.map((insight, i) => (
              <Reveal
                as="li"
                key={insight.slug}
                delay={i * 80}
                className="border-t border-[var(--color-rule)] first:border-t-0 py-10 first:pt-0"
              >
                <article className="grid grid-cols-1 gap-6 lg:grid-cols-[10rem_1fr] lg:gap-12">
                  <div className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {formatInsightDate(insight.date)}
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-sans font-medium tracking-[-0.015em] text-[clamp(1.5rem,2.4vw,1.875rem)] leading-[1.15]">
                      <Link
                        href={`/insights/${insight.slug}`}
                        className="text-[var(--color-ink)] underline decoration-transparent underline-offset-[6px] hover:decoration-[var(--color-ink)]"
                      >
                        {insight.title}
                      </Link>
                    </h2>
                    <p className="mt-4 font-sans text-[1.0625rem] leading-[1.55] text-[var(--color-muted)] max-w-[var(--measure)]">
                      {insight.description}
                    </p>
                    <p className="mt-5 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {insight.readingMinutes} min read
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        )}
      </Section>

      <CTABand
        headline="Want this in your inbox?"
        body="The audit is the fastest way to find out whether AAO fits. The newsletter is the slowest."
        secondaryHref="/contact"
        secondaryLabel="Book the audit instead"
      />
    </>
  );
}
