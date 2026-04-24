import type { ReactNode } from "react";
import { Section } from "@/components/section";
import { cn } from "@/lib/cn";

type OfferSectionProps = {
  id: string;
  number: string;
  name: string;
  purpose: string;
  included: { heading: string; items: string[] };
  deliverables: string[];
  price: string;
  duration: string;
  idealFor: string;
  tone?: "paper" | "ink";
  children?: ReactNode;
  cta: ReactNode;
};

export function OfferSection({
  id,
  number,
  name,
  purpose,
  included,
  deliverables,
  price,
  duration,
  idealFor,
  tone = "paper",
  children,
  cta,
}: OfferSectionProps) {
  const onInk = tone === "ink";
  const muted = onInk
    ? "text-[rgb(246_244_238_/_0.7)]"
    : "text-[var(--color-muted)]";
  const ink = onInk ? "text-[var(--color-paper)]" : "text-[var(--color-ink)]";
  const rule = onInk
    ? "border-[rgb(246_244_238_/_0.18)]"
    : "border-[var(--color-rule)]";

  return (
    <Section id={id} tone={tone} className="scroll-mt-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left rail: number + name + purpose */}
        <header className="lg:col-span-5">
          <p
            className={cn(
              "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
              onInk ? "text-[rgb(246_244_238_/_0.6)]" : "text-[var(--color-muted)]",
            )}
          >
            {number} — Offer
          </p>
          <h2
            className={cn(
              "mt-5 font-sans font-medium tracking-[-0.02em]",
              "text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]",
              "max-w-[18ch]",
              ink,
            )}
          >
            {name}
          </h2>
          <p
            className={cn(
              "mt-6 font-sans text-[1.0625rem] leading-[1.55] max-w-[var(--measure)]",
              muted,
            )}
          >
            {purpose}
          </p>

          <dl
            className={cn(
              "mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2",
              "border-t pt-8",
              rule,
            )}
          >
            <div>
              <dt
                className={cn(
                  "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
                  onInk ? "text-[rgb(246_244_238_/_0.55)]" : "text-[var(--color-muted)]",
                )}
              >
                Price
              </dt>
              <dd className={cn("mt-2 font-mono text-[0.9375rem]", ink)}>
                {price}
              </dd>
            </div>
            <div>
              <dt
                className={cn(
                  "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
                  onInk ? "text-[rgb(246_244_238_/_0.55)]" : "text-[var(--color-muted)]",
                )}
              >
                Duration
              </dt>
              <dd className={cn("mt-2 font-mono text-[0.9375rem]", ink)}>
                {duration}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt
                className={cn(
                  "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
                  onInk ? "text-[rgb(246_244_238_/_0.55)]" : "text-[var(--color-muted)]",
                )}
              >
                Ideal for
              </dt>
              <dd
                className={cn(
                  "mt-2 font-sans text-[0.9375rem] leading-[1.55] max-w-[var(--measure)]",
                  muted,
                )}
              >
                {idealFor}
              </dd>
            </div>
          </dl>

          <div className="mt-10">{cta}</div>
        </header>

        {/* Right column: included + deliverables */}
        <div className="lg:col-span-7">
          <div>
            <h3
              className={cn(
                "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
                onInk ? "text-[rgb(246_244_238_/_0.6)]" : "text-[var(--color-muted)]",
              )}
            >
              {included.heading}
            </h3>
            <ul className={cn("mt-5 border-t", rule)}>
              {included.items.map((item) => (
                <li
                  key={item}
                  className={cn(
                    "flex items-baseline gap-5 border-b py-4",
                    rule,
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-[0.75rem] tabular-nums",
                      onInk ? "text-[rgb(246_244_238_/_0.55)]" : "text-[var(--color-muted)]",
                    )}
                    aria-hidden="true"
                  >
                    —
                  </span>
                  <span
                    className={cn(
                      "font-sans text-[1rem] leading-[1.55]",
                      ink,
                    )}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h3
              className={cn(
                "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
                onInk ? "text-[rgb(246_244_238_/_0.6)]" : "text-[var(--color-muted)]",
              )}
            >
              Deliverables
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <li
                  key={item}
                  className={cn(
                    "font-sans text-[0.9375rem] leading-[1.5]",
                    ink,
                    "border-l pl-4",
                    rule,
                  )}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {children ? <div className="mt-12">{children}</div> : null}
        </div>
      </div>
    </Section>
  );
}
