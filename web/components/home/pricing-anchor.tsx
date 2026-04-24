import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";

const tiers = [
  {
    name: "Audit",
    price: "From $2,500",
    scope: "Operational map and one workflow recommendation.",
  },
  {
    name: "Pilot",
    price: "From $10,000",
    scope: "One end-to-end workflow with approval gates and logs.",
  },
  {
    name: "Subscription",
    price: "From $5,000 / month",
    scope: "We run the operator and review monthly.",
  },
];

export function PricingAnchor() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Pricing"
        title="Fixed scope, fixed price."
        lede="No retainers without a working pilot first."
      />
      <ul
        className={cn(
          "mt-16 grid grid-cols-1 gap-0",
          "md:grid-cols-3",
          "border-t border-[var(--color-rule)]",
        )}
      >
        {tiers.map((t, i) => (
          <Reveal
            as="li"
            key={t.name}
            delay={i * 100}
            className={cn(
              "flex flex-col py-10 md:py-12",
              "border-b border-[var(--color-rule)]",
              "md:border-b-0",
              i > 0 && "md:border-l md:border-[var(--color-rule)]",
              i === 0 ? "md:pl-0 md:pr-10" : i === tiers.length - 1 ? "md:pl-10 md:pr-0" : "md:px-10",
            )}
          >
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              {t.name}
            </p>
            <p className="mt-5 font-sans font-medium tracking-[-0.02em] text-[1.875rem] leading-[1.05] text-[var(--color-ink)]">
              {t.price}
            </p>
            <p className="mt-5 font-sans text-[1rem] leading-[1.6] text-[var(--color-muted)] max-w-[34ch]">
              {t.scope}
            </p>
          </Reveal>
        ))}
      </ul>
      <div className="mt-12">
        <a
          href="/pricing"
          className={cn(
            "inline-flex items-center gap-2",
            "font-sans text-[0.9375rem] leading-none text-[var(--color-ink)]",
            "underline-offset-[6px] decoration-[1px] hover:underline",
          )}
        >
          See full pricing <span aria-hidden="true">→</span>
        </a>
      </div>
    </Section>
  );
}
