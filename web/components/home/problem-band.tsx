import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";

const problems = [
  {
    title: "Leads go cold.",
    body: "The owner doesn't see the website enquiry until Tuesday.",
  },
  {
    title: "Quotes wait on someone.",
    body: "Admin chases scope details for two days; the customer goes elsewhere.",
  },
  {
    title: "The owner is the bottleneck.",
    body: "Every escalation lands in one inbox at 9pm.",
  },
];

export function ProblemBand() {
  return (
    <Section>
      <SectionHeading
        eyebrow="The problem"
        title="Operational work waits on people who are already at capacity."
      />
      <ul
        className={cn(
          "mt-16 grid grid-cols-1 gap-y-10",
          "md:grid-cols-3 md:gap-y-0",
          "md:divide-x md:divide-[var(--color-rule)]",
        )}
      >
        {problems.map((p, i) => (
          <Reveal
            as="li"
            key={p.title}
            delay={i * 100}
            className={cn(
              "md:px-10",
              i === 0 && "md:pl-0",
              i === problems.length - 1 && "md:pr-0",
            )}
          >
            <h3 className="font-serif text-[1.5rem] leading-[1.2] tracking-[-0.01em] text-[var(--color-ink)]">
              {p.title}
            </h3>
            <p className="mt-4 font-sans text-[1rem] leading-[1.6] text-[var(--color-muted)] max-w-[34ch]">
              {p.body}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
