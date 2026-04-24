import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";

const pillars = [
  {
    title: "Approval gates",
    body: "Approval required before any outbound message.",
  },
  {
    title: "Logs",
    body: "Every tool call logged.",
  },
  {
    title: "Data boundaries",
    body: "Read-only by default.",
  },
];

export function GovernanceBand() {
  return (
    <Section tone="ink">
      <SectionHeading
        eyebrow="Governance"
        title="Three constraints we never relax."
        lede="An operator without these isn't an operator. It's an autocomplete with an outbox."
        className="[&_p:first-child]:text-[rgb(246_244_238_/_0.6)] [&_p:last-child]:text-[rgb(246_244_238_/_0.78)]"
      />
      <ul
        className={cn(
          "mt-16 grid grid-cols-1 gap-y-12",
          "md:grid-cols-3 md:gap-x-12 md:gap-y-0",
        )}
      >
        {pillars.map((p, i) => (
          <Reveal as="li" key={p.title} delay={i * 100} className="flex flex-col">
            <h3 className="font-sans font-medium tracking-[-0.015em] text-[1.5rem] leading-[1.15] text-[var(--color-paper)]">
              {p.title}
            </h3>
            <p className="mt-5 font-sans text-[1rem] leading-[1.6] text-[rgb(246_244_238_/_0.78)] max-w-[34ch]">
              {p.body}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
