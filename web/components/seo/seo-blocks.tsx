import Link from "next/link";
import type { ReactNode } from "react";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";

/**
 * Shared building blocks for the /seo/* landing pages.
 *
 * These are deliberately structural-only: every block accepts the unique
 * page copy as props so SEO pages don't share body content with each
 * other or with /use-cases/* — they share layout primitives only.
 */

type ProblemBulletsProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
  bullets: { headline: string; detail: string }[];
};

export function ProblemBullets({
  eyebrow = "The pattern",
  title,
  lede,
  bullets,
}: ProblemBulletsProps) {
  return (
    <Section tone="paper" className="!pt-0">
      <SectionHeading eyebrow={eyebrow} title={title} lede={lede} />
      <Reveal
        as="ul"
        className={cn(
          "mt-12 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-3",
          "border-t border-[var(--color-rule)] pt-10",
        )}
      >
        {bullets.map((b, i) => (
          <li key={b.headline} className="flex flex-col">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-4 font-sans text-[1.0625rem] font-medium tracking-[-0.005em] text-[var(--color-ink)]">
              {b.headline}
            </p>
            <p className="mt-3 font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-muted)] max-w-[var(--measure)]">
              {b.detail}
            </p>
          </li>
        ))}
      </Reveal>
    </Section>
  );
}

type InstallBlockProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
  /** Named workflow agents (PRD §11) — Lead Intake, Quote Prep, Inbox Ops, SOP, Reporting, etc. */
  agents: { name: string; description: string }[];
  /** Optional cross-links shown beneath the agent list */
  links?: { href: string; label: string }[];
};

export function InstallBlock({
  eyebrow = "What we install",
  title,
  lede,
  agents,
  links,
}: InstallBlockProps) {
  return (
    <Section tone="paper" className="!pt-0">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <header className="lg:col-span-5">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
            {eyebrow}
          </p>
          <h2
            className={cn(
              "mt-5 font-sans font-medium tracking-[-0.015em]",
              "text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.1]",
              "text-[var(--color-ink)] max-w-[18ch]",
            )}
          >
            {title}
          </h2>
          {lede ? (
            <p className="mt-6 font-sans text-[1.0625rem] leading-[1.6] text-[var(--color-muted)] max-w-[var(--measure)]">
              {lede}
            </p>
          ) : null}
        </header>
        <div className="lg:col-span-7">
          <Reveal
            as="ul"
            className={cn(
              "border-t border-[var(--color-rule)]",
            )}
          >
            {agents.map((a) => (
              <li
                key={a.name}
                className="border-b border-[var(--color-rule)] py-6 md:py-7"
              >
                <p className="font-sans font-medium tracking-[-0.005em] text-[1.0625rem] leading-[1.3] text-[var(--color-ink)]">
                  {a.name}
                </p>
                <p className="mt-2 font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-muted)] max-w-[var(--measure)]">
                  {a.description}
                </p>
              </li>
            ))}
          </Reveal>
          {links && links.length > 0 ? (
            <p className="mt-8 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              See also{" "}
              {links.map((l, i) => (
                <span key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[var(--color-ink)] underline underline-offset-[6px] decoration-[1px] decoration-[var(--color-rule)] hover:decoration-[var(--color-ink)]"
                  >
                    {l.label}
                  </Link>
                  {i < links.length - 1 ? <span> · </span> : null}
                </span>
              ))}
            </p>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

type HowItWorksProps = {
  /** Page-specific intro paragraph that re-frames the layers in this vertical's terms. */
  intro: ReactNode;
};

const LAYERS: { number: string; name: string; line: string; emphasised?: boolean }[] = [
  {
    number: "01",
    name: "Integration",
    line: "Connect to the systems you already run — email, forms, CRM, Sheets, Drive — read-only first.",
  },
  {
    number: "02",
    name: "Workflow",
    line: "A named, deterministic pipeline. Defined trigger, defined stops, defined outputs.",
  },
  {
    number: "03",
    name: "Guarded LLM",
    line: "Model calls sit inside input, output, topical, dialog, and policy rails. Inference onshore.",
  },
  {
    number: "04",
    name: "Approval Queue",
    line: "Every customer-facing or system-changing action lands here for human approve / edit / reject.",
    emphasised: true,
  },
  {
    number: "05",
    name: "Audit",
    line: "Every tool call, decision, rail trip and cost is logged. Rolled up monthly into business outcomes.",
  },
];

export function HowItWorks({ intro }: HowItWorksProps) {
  return (
    <Section tone="paper" className="!pt-0">
      <SectionHeading
        eyebrow="How it works"
        title="Five layers. One wedge."
        lede="The full method is on the framework page. Here's the short version, in the order the work happens."
      />
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="font-sans text-[1.0625rem] leading-[1.6] text-[var(--color-ink)] max-w-[var(--measure)]">
            {intro}
          </p>
          <p className="mt-8 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            <Link
              href="/framework"
              className="text-[var(--color-ink)] underline underline-offset-[6px] decoration-[1px] decoration-[var(--color-rule)] hover:decoration-[var(--color-ink)]"
            >
              Read the full framework →
            </Link>
          </p>
        </div>
        <Reveal
          as="ol"
          className="lg:col-span-7 border-t border-[var(--color-rule)]"
        >
          {LAYERS.map((l) => (
            <li
              key={l.number}
              className={cn(
                "grid grid-cols-[3rem_1fr] gap-6 border-b border-[var(--color-rule)] py-5 md:py-6",
                l.emphasised && "bg-[var(--color-paper-2)]",
              )}
            >
              <span className="font-mono text-[0.75rem] uppercase tracking-[0.22em] text-[var(--color-muted)] pt-[3px]">
                {l.number}
              </span>
              <div>
                <p
                  className={cn(
                    "font-sans font-medium tracking-[-0.005em] text-[1rem] leading-[1.3] text-[var(--color-ink)]",
                    l.emphasised && "text-[1.0625rem]",
                  )}
                >
                  {l.name}
                  {l.emphasised ? (
                    <span className="ml-3 font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      The wedge
                    </span>
                  ) : null}
                </p>
                <p className="mt-2 font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-muted)] max-w-[var(--measure)]">
                  {l.line}
                </p>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}

type TrustBlockProps = {
  /** Page-specific paragraph framing trust for this query intent. */
  body: ReactNode;
};

export function TrustBlock({ body }: TrustBlockProps) {
  return (
    <Section tone="ink">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <header className="lg:col-span-4">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[rgb(246_244_238_/_0.6)]">
            Trust posture
          </p>
          <h2
            className={cn(
              "mt-5 font-sans font-medium tracking-[-0.02em]",
              "text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.1]",
              "text-[var(--color-paper)] max-w-[18ch]",
            )}
          >
            Approval gates. Logs. Onshore inference.
          </h2>
        </header>
        <div className="lg:col-span-8">
          <p className="font-sans text-[1.0625rem] leading-[1.65] text-[rgb(246_244_238_/_0.85)] max-w-[var(--measure)]">
            {body}
          </p>
          <p className="mt-8 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[rgb(246_244_238_/_0.6)]">
            <Link
              href="/trust"
              className="text-[var(--color-paper)] underline underline-offset-[6px] decoration-[1px] decoration-[rgb(246_244_238_/_0.4)] hover:decoration-[var(--color-paper)]"
            >
              Read the trust posture in full →
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
}

export function PricingSnapshot() {
  const items = [
    {
      tier: "Audit",
      price: "AUD $2,500–$7,500",
      detail: "1–2 weeks. Workflow map, opportunity matrix, first-agent recommendation, pilot proposal.",
    },
    {
      tier: "Pilot",
      price: "AUD $10,000–$30,000",
      detail: "2–4 weeks. One workflow, shadow mode first, human approval required.",
    },
    {
      tier: "Subscription",
      price: "From AUD $5,000/mo",
      detail: "Ongoing operations: monitoring, optimisation, monthly reporting.",
    },
  ];

  return (
    <Section tone="paper">
      <SectionHeading
        eyebrow="Pricing"
        title="Three engagements, in order."
        lede="Most clients enter at the audit. The pilot decision is made on its findings, not on a sales call."
      />
      <Reveal
        as="ul"
        className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
      >
        {items.map((it) => (
          <li
            key={it.tier}
            className={cn(
              "flex flex-col",
              "bg-[var(--color-paper-2)] border border-[var(--color-rule)]",
              "p-6 md:p-7",
            )}
          >
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              {it.tier}
            </p>
            <p className="mt-4 font-sans text-[1.125rem] font-medium tracking-[-0.01em] text-[var(--color-ink)]">
              {it.price}
            </p>
            <p className="mt-4 font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-muted)]">
              {it.detail}
            </p>
          </li>
        ))}
      </Reveal>
      <p className="mt-10 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
        <Link
          href="/pricing"
          className="text-[var(--color-ink)] underline underline-offset-[6px] decoration-[1px] decoration-[var(--color-rule)] hover:decoration-[var(--color-ink)]"
        >
          See the full pricing page →
        </Link>
      </p>
    </Section>
  );
}

/** JSON-LD breadcrumb + WebPage helper. Returns the script tag. */
type JsonLdProps = {
  /** Path of the page, e.g. "/seo/ai-lead-handling-trades" */
  path: string;
  title: string;
  description: string;
  /** Section the page belongs under for breadcrumb (e.g. "Use cases", "Services"). */
  section?: { label: string; href: string };
  /** Optional geographic targeting (Perth, Australia, etc). */
  areaServed?: string | string[];
  /** Optional vertical/audience targeting (Trades, Mining, Accounting). */
  audienceType?: string;
};

export function SeoJsonLd({
  path,
  title,
  description,
  section,
  areaServed,
  audienceType,
}: JsonLdProps) {
  const base = "https://aaogroup.au";
  const url = `${base}${path}`;

  const breadcrumbItems: { "@type": "ListItem"; position: number; name: string; item: string }[] = [
    { "@type": "ListItem", position: 1, name: "Home", item: base },
  ];
  if (section) {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 2,
      name: section.label,
      item: `${base}${section.href}`,
    });
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 3,
      name: title,
      item: url,
    });
  } else {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 2,
      name: title,
      item: url,
    });
  }

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: "en-AU",
    isPartOf: {
      "@type": "WebSite",
      name: "AAO Group",
      url: base,
    },
    publisher: {
      "@type": "Organization",
      name: "AAO Group",
      url: base,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    },
  };

  if (areaServed) {
    data.areaServed = Array.isArray(areaServed)
      ? areaServed.map((a) => ({ "@type": "AdministrativeArea", name: a }))
      : { "@type": "AdministrativeArea", name: areaServed };
  }
  if (audienceType) {
    data.audience = {
      "@type": "Audience",
      audienceType,
    };
  }

  return (
    <script
      type="application/ld+json"
      // JSON.stringify is safe for trusted content (no user input here).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type SeoHeroProps = {
  eyebrow: string;
  title: string;
  lede: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export function SeoHero({
  eyebrow,
  title,
  lede,
  primary = { href: "/contact", label: "Book a 15-minute audit" },
  secondary,
}: SeoHeroProps) {
  return (
    <Section tone="paper" className="pt-[clamp(5rem,14vw,10rem)]">
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        {eyebrow}
      </p>
      <h1
        className={cn(
          "mt-5 font-sans font-medium tracking-[-0.025em]",
          "text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02]",
          "max-w-[20ch]",
        )}
      >
        {title}
      </h1>
      <p className="mt-8 font-sans text-[1.125rem] leading-[1.55] text-[var(--color-muted)] max-w-[40rem]">
        {lede}
      </p>
      <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
        <Link
          href={primary.href}
          className={cn(
            "inline-flex items-center justify-center px-7 py-4 text-[1rem] font-sans leading-none tracking-[0.01em]",
            "bg-[var(--color-ink)] text-[var(--color-paper)] border border-[var(--color-ink)]",
            "transition-colors duration-200 hover:bg-[var(--color-ink-2)] hover:border-[var(--color-ink-2)]",
          )}
        >
          {primary.label}
        </Link>
        {secondary ? (
          <Link
            href={secondary.href}
            className={cn(
              "inline-flex items-center justify-center px-7 py-4 text-[1rem] font-sans leading-none tracking-[0.01em]",
              "text-[var(--color-ink)] underline-offset-[6px] decoration-[1px] hover:underline",
            )}
          >
            {secondary.label}
          </Link>
        ) : null}
      </div>
    </Section>
  );
}
