import type { ReactNode } from "react";
import { Section } from "@/components/section";
import { Prose } from "@/components/prose";
import { cn } from "@/lib/cn";

type LayerSectionProps = {
  id: string;
  number: string;
  name: string;
  whatItDoes: ReactNode;
  whatTheClientSees: ReactNode;
  whyItMatters: ReactNode;
  withTopRule?: boolean;
};

export function LayerSection({
  id,
  number,
  name,
  whatItDoes,
  whatTheClientSees,
  whyItMatters,
  withTopRule = false,
}: LayerSectionProps) {
  return (
    <Section
      id={id}
      tone="paper"
      className={cn(
        "scroll-mt-24",
        withTopRule && "border-t border-[var(--color-rule)]",
      )}
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: number + name */}
        <header className="lg:col-span-5">
          <p
            className={cn(
              "font-mono text-[0.75rem] uppercase tracking-[0.22em]",
              "text-[var(--color-muted)]",
            )}
            aria-hidden="true"
          >
            Layer {number}
          </p>
          <p
            className={cn(
              "mt-6 font-mono tabular-nums",
              "text-[clamp(3rem,7vw,5.5rem)] leading-[1] tracking-[-0.02em]",
              "text-[var(--color-ink)]",
            )}
          >
            {number}
          </p>
          <h2
            className={cn(
              "mt-6 font-sans font-medium tracking-[-0.02em]",
              "text-[clamp(2rem,4.2vw,3rem)] leading-[1.05]",
              "text-[var(--color-ink)]",
              "max-w-[14ch]",
            )}
          >
            {name}
          </h2>
        </header>

        {/* Right: three labelled paragraphs */}
        <div className="lg:col-span-7">
          <Block heading="What it does">
            <Prose className="mx-0">
              <p>{whatItDoes}</p>
            </Prose>
          </Block>

          <Block heading="What the client sees" withRule>
            <Prose className="mx-0">
              <p>{whatTheClientSees}</p>
            </Prose>
          </Block>

          <Block heading="Why it matters" withRule>
            <Prose className="mx-0">
              <p>{whyItMatters}</p>
            </Prose>
          </Block>
        </div>
      </div>
    </Section>
  );
}

function Block({
  heading,
  children,
  withRule = false,
}: {
  heading: string;
  children: ReactNode;
  withRule?: boolean;
}) {
  return (
    <div
      className={cn(
        withRule && "mt-10 pt-10 border-t border-[var(--color-rule)]",
      )}
    >
      <h3
        className={cn(
          "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
          "text-[var(--color-muted)]",
        )}
      >
        {heading}
      </h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}
