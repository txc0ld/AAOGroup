import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { CTABand } from "@/components/cta-band";
import { MetricPill } from "@/components/use-cases/metric-pill";
import { ScreenshotMock } from "@/components/use-cases/screenshot-mock";
import { WorkflowSteps } from "@/components/use-cases/workflow-steps";
import { USE_CASES, type UseCase } from "@/lib/use-cases";
import { cn } from "@/lib/cn";

type Params = { slug: string };

const SUBJECT_LINES: Record<string, string> = {
  "trades-construction":
    "Draft reply to Sam Pearce · 14 Hill Rd, Maylands · Siteworks enquiry — slab pour & retaining wall",
  "mining-services":
    "Draft compliance summary · Site 7 Pilbara · Q2 incident roll-up",
  "accounting-bookkeeping":
    "Draft chase email to Acme Holdings · BAS supporting docs outstanding 9 days",
  "legal-admin":
    "Draft matter brief · Henderson v. Coastal Holdings · 32-page bundle summarised",
  "property-management":
    "Draft vendor brief to AllTrade Plumbing · 22 Ocean Ave · Hot water unit failure",
};

export async function generateStaticParams(): Promise<Params[]> {
  return USE_CASES.map((useCase) => ({ slug: useCase.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const useCase = USE_CASES.find((uc) => uc.slug === slug);
  if (!useCase) {
    return { title: "Use case" };
  }
  return { title: useCase.vertical };
}

export default async function UseCaseDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const useCase: UseCase | undefined = USE_CASES.find((uc) => uc.slug === slug);
  if (!useCase) notFound();

  const subjectLine = SUBJECT_LINES[useCase.slug] ?? useCase.firstAgent;

  return (
    <>
      {/* Hero */}
      <Section>
        <SectionHeading
          eyebrow="Use case"
          title={useCase.vertical}
          lede={useCase.pain}
          as="h1"
        />
      </Section>

      {/* Recommended first agent */}
      <Section tone="paper" className="!pt-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-5">
            <p
              className={cn(
                "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
                "text-[var(--color-muted)]",
              )}
            >
              Where we'd start
            </p>
            <h2
              className={cn(
                "mt-5 font-sans font-medium tracking-[-0.015em]",
                "text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.1]",
                "text-[var(--color-ink)]",
                "max-w-[18ch]",
              )}
            >
              Recommended first agent
            </h2>
          </header>
          <div className="lg:col-span-7">
            <p
              className={cn(
                "font-serif text-[1.125rem] md:text-[1.1875rem] leading-[1.65]",
                "text-[var(--color-ink)]",
                "max-w-[var(--measure)]",
              )}
            >
              <strong className="font-semibold">{useCase.firstAgent}.</strong>{" "}
              The narrowest workflow that consistently moves a metric you'll
              feel within four weeks.
            </p>
          </div>
        </div>
      </Section>

      {/* Workflow */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Workflow"
          title="How the agent runs."
          lede="Each step is logged and reviewable. Outbound actions wait for human approval."
        />
        <div className="mt-12">
          <WorkflowSteps steps={useCase.workflow} />
        </div>
      </Section>

      {/* Screenshot mock */}
      <Section tone="paper" className="!pt-0">
        <SectionHeading
          eyebrow="Approval queue"
          title="What approval looks like."
          lede="Every outbound action surfaces here first. Approve, edit, or reject in one tap."
        />
        <div className="mt-12 max-w-[42rem]">
          <ScreenshotMock
            vertical={useCase.vertical}
            firstAgent={useCase.firstAgent}
            subjectLine={subjectLine}
          />
        </div>
      </Section>

      {/* Outcomes */}
      <Section tone="paper" className="!pt-0">
        <SectionHeading
          eyebrow="Outcomes"
          title="What clients feel within weeks."
          lede="Indicative ranges based on engagements to date. Your numbers depend on baseline."
        />
        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {useCase.outcomes.map((outcome) => (
            <li key={outcome.label}>
              <MetricPill label={outcome.label} value={outcome.value} />
            </li>
          ))}
        </ul>
      </Section>

      <CTABand
        headline="See if this fits your business."
        body={`A 15-minute audit will tell you whether ${useCase.vertical} workflows are a fit for AAO.`}
        primaryLabel="Book the audit"
      />
    </>
  );
}
