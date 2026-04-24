import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/section";
import { CTABand } from "@/components/cta-band";
import { listInsights, formatInsightDate } from "@/lib/insights";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return listInsights().map((insight) => ({ slug: insight.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = listInsights().find((i) => i.slug === slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.description,
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const insight = listInsights().find((i) => i.slug === slug);
  if (!insight) notFound();

  const { default: Content } = await import(
    `@/content/insights/${slug}.mdx`
  );

  return (
    <>
      <Section>
        <header className="flex flex-col">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
            {formatInsightDate(insight.date)} · {insight.readingMinutes} min read
          </p>
          <h1 className="mt-5 font-sans font-medium tracking-[-0.02em] text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] max-w-[24ch]">
            {insight.title}
          </h1>
          <p className="mt-6 font-sans text-[1.125rem] leading-[1.55] text-[var(--color-muted)] max-w-[var(--measure)]">
            {insight.description}
          </p>
        </header>
      </Section>

      <Section className="border-t border-[var(--color-rule)]">
        <Content />
      </Section>

      <Section>
        <Link
          href="/insights"
          className="font-mono text-[0.8125rem] uppercase tracking-[0.18em] text-[var(--color-muted)] hover:text-[var(--color-ink)]"
        >
          ← Back to Insights
        </Link>
      </Section>

      <CTABand
        headline="Want help installing AI in your business?"
        body="Book a 15-minute audit."
      />
    </>
  );
}
