import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type DemoStepProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  children?: ReactNode;
  className?: string;
};

export function DemoStep({ eyebrow, title, body, children, className }: DemoStepProps) {
  return (
    <section className={cn("flex flex-col gap-5", className)}>
      {eyebrow ? (
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="font-sans font-medium tracking-[-0.015em] text-[1.625rem] leading-[1.15] text-[var(--color-ink)]">
          {title}
        </h2>
      ) : null}
      {body ? (
        <p className="font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-muted)] max-w-[60ch]">
          {body}
        </p>
      ) : null}
      {children}
    </section>
  );
}
