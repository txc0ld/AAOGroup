import { cn } from "@/lib/cn";

type MetricPillProps = {
  label: string;
  value: string;
};

export function MetricPill({ label, value }: MetricPillProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col",
        "bg-[var(--color-paper)]",
        "border border-[var(--color-rule)]",
        "p-6 md:p-7",
      )}
    >
      <p
        className={cn(
          "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
          "text-[var(--color-muted)]",
        )}
      >
        {label}
      </p>
      <p
        className={cn(
          "mt-4 font-sans font-medium tracking-[-0.015em]",
          "text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.1]",
          "text-[var(--color-ink)]",
        )}
      >
        {value}
      </p>
    </div>
  );
}
