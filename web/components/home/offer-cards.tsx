import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/cn";

const offers = [
  {
    eyebrow: "01 — Audit",
    title: "Audit",
    description:
      "We map where work waits, where it leaks, and where an operator could safely hold the line.",
    price: "$2,500 – $7,500",
    duration: "1 – 2 weeks",
    href: "/services#audit",
  },
  {
    eyebrow: "02 — Pilot",
    title: "Pilot",
    description:
      "One workflow built end to end with approval gates, logs, and a working handover.",
    price: "$10,000 – $30,000",
    duration: "2 – 4 weeks",
    href: "/services#pilot",
  },
  {
    eyebrow: "03 — Subscription",
    title: "Subscription",
    description:
      "We run, monitor, and improve the operator on your behalf — with monthly review.",
    price: "From $5,000 / month",
    duration: "Ongoing",
    href: "/services#subscription",
  },
];

export function OfferCards() {
  return (
    <Section>
      <SectionHeading
        eyebrow="What we install"
        title="Three engagements, in sequence."
        lede="Start with an audit. Move to a pilot once we agree on the workflow worth building. Bring us on as operators after the pilot proves out."
      />
      <ul className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
        {offers.map((o) => (
          <li
            key={o.title}
            className={cn(
              "flex flex-col",
              "bg-[var(--color-paper-2)]",
              "border border-[var(--color-rule)]",
              "p-8 md:p-10",
            )}
          >
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              {o.eyebrow}
            </p>
            <h3 className="mt-5 font-sans font-medium tracking-[-0.02em] text-[1.875rem] leading-[1.1] text-[var(--color-ink)]">
              {o.title}
            </h3>
            <p className="mt-5 font-sans text-[1rem] leading-[1.6] text-[var(--color-muted)]">
              {o.description}
            </p>
            <div className="mt-8 flex flex-col gap-1 border-t border-[var(--color-rule)] pt-6">
              <p className="font-mono text-[0.875rem] tracking-[0.02em] text-[var(--color-ink)]">
                {o.price}
              </p>
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {o.duration}
              </p>
            </div>
            <a
              href={o.href}
              className={cn(
                "mt-8 inline-flex items-center gap-2",
                "font-sans text-[0.9375rem] leading-none text-[var(--color-ink)]",
                "underline-offset-[6px] decoration-[1px] hover:underline",
              )}
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
