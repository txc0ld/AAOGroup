import { Section } from "@/components/section";
import { Button } from "@/components/button";
import { cn } from "@/lib/cn";

type SubTier = {
  name: string;
  price: string;
  scope: string;
};

type Column = {
  eyebrow: string;
  price: string;
  duration: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  subTiers?: SubTier[];
};

const columns: Column[] = [
  {
    eyebrow: "Audit",
    price: "$2,500–$7,500",
    duration: "1–2 weeks",
    bullets: [
      "Workflow map of your current operation",
      "AI opportunity matrix",
      "Data sensitivity map",
      "Risk register",
      "First-agent recommendation",
      "ROI estimate and 90-day roadmap",
    ],
    ctaLabel: "Book the audit",
    ctaHref: "/contact",
  },
  {
    eyebrow: "Pilot",
    price: "$10,000–$30,000",
    duration: "2–4 weeks",
    bullets: [
      "One workflow live in production",
      "Human approval queue for every action",
      "Logs and activity report",
      "Weekly review during the pilot",
      "Pilot performance report at handover",
    ],
    ctaLabel: "Talk about a pilot",
    ctaHref: "/contact",
  },
  {
    eyebrow: "Subscription",
    price: "from $5,000/mo",
    duration: "monthly",
    bullets: [
      "Ongoing monitoring of every workflow",
      "Monthly optimisation pass",
      "Monthly governance and activity report",
      "Policy updates as your operation changes",
      "Integration maintenance",
      "Cost tracking against business value",
    ],
    ctaLabel: "See subscription tiers",
    ctaHref: "/services#subscription",
    subTiers: [
      {
        name: "Foundation",
        price: "$5,000–$8,500/mo",
        scope: "1–2 workflows",
      },
      {
        name: "Operator",
        price: "$10,000–$18,500/mo",
        scope: "Multi-workflow",
      },
      {
        name: "Embedded",
        price: "$20,000–$35,000+/mo",
        scope: "Fractional AI leadership + infra",
      },
    ],
  },
];

export function PricingTable() {
  return (
    <Section>
      <div
        className={cn(
          "grid grid-cols-1 gap-0",
          "md:grid-cols-3",
          "border-t border-[var(--color-rule)]",
        )}
      >
        {columns.map((col, i) => (
          <article
            key={col.eyebrow}
            className={cn(
              "flex flex-col py-12 md:py-14",
              "border-b border-[var(--color-rule)]",
              "md:border-b-0",
              i > 0 && "md:border-l md:border-[var(--color-rule)]",
              i === 0
                ? "md:pl-0 md:pr-10"
                : i === columns.length - 1
                  ? "md:pl-10 md:pr-0"
                  : "md:px-10",
            )}
          >
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              {col.eyebrow}
            </p>

            <p
              className={cn(
                "mt-6 font-sans font-medium tracking-[-0.02em]",
                "text-[clamp(1.625rem,2.4vw,2rem)] leading-[1.05]",
                "text-[var(--color-ink)]",
              )}
            >
              {col.price}
            </p>

            <p className="mt-3 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              {col.duration}
            </p>

            <ul
              className={cn(
                "mt-8 flex flex-col gap-3",
                "font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-ink-2)]",
              )}
            >
              {col.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.55em] inline-block h-px w-3 shrink-0 bg-[var(--color-ink)]"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {col.subTiers ? (
              <ul
                className={cn(
                  "mt-8 flex flex-col",
                  "border-t border-[var(--color-rule)]",
                )}
              >
                {col.subTiers.map((tier) => (
                  <li
                    key={tier.name}
                    className={cn(
                      "flex flex-col gap-1 py-4",
                      "border-b border-[var(--color-rule)]",
                    )}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-sans text-[0.9375rem] font-medium text-[var(--color-ink)]">
                        {tier.name}
                      </span>
                      <span className="font-mono text-[0.75rem] text-[var(--color-muted)]">
                        {tier.price}
                      </span>
                    </div>
                    <p className="font-sans text-[0.8125rem] leading-[1.5] text-[var(--color-muted)]">
                      {tier.scope}
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-10">
              <Button as="a" href={col.ctaHref} variant="outline">
                {col.ctaLabel}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
