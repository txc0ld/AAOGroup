import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";

const useCases = [
  {
    vertical: "Trades & construction",
    pain: "Quotes stall while admin chases scope.",
    slug: "trades-construction",
  },
  {
    vertical: "Mining services",
    pain: "Compliance paperwork bottlenecks at one supervisor.",
    slug: "mining-services",
  },
  {
    vertical: "Accounting & bookkeeping",
    pain: "Client document chasing eats the senior's week.",
    slug: "accounting-bookkeeping",
  },
  {
    vertical: "Legal admin",
    pain: "Intake forms sit unread between matters.",
    slug: "legal-admin",
  },
  {
    vertical: "Property management",
    pain: "Maintenance requests queue behind end-of-month.",
    slug: "property-management",
  },
];

export function UseCasesStrip() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Use cases"
        title="Where this work tends to land first."
      />
      <ul
        className={cn(
          "mt-16 grid gap-5",
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
        )}
      >
        {useCases.map((u, i) => (
          <Reveal as="li" key={u.slug} delay={i * 80}>
            <a
              href={`/use-cases/${u.slug}`}
              className={cn(
                "card-hover group flex h-full flex-col justify-between",
                "border border-[var(--color-rule)] bg-[var(--color-paper)]",
                "p-7 min-h-[14rem]",
                "transition-colors duration-200",
                "hover:bg-[var(--color-paper-2)]",
              )}
            >
              <div>
                <h3 className="font-sans font-medium tracking-[-0.015em] text-[1.25rem] leading-[1.2] text-[var(--color-ink)]">
                  {u.vertical}
                </h3>
                <p className="mt-4 font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-muted)]">
                  {u.pain}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="card-arrow mt-8 inline-block font-sans text-[1rem] text-[var(--color-ink)] transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
