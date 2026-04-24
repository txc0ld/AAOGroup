import Link from "next/link";
import type { UseCase } from "@/lib/use-cases";
import { cn } from "@/lib/cn";

type UseCaseCardProps = {
  useCase: UseCase;
};

export function UseCaseCard({ useCase }: UseCaseCardProps) {
  return (
    <Link
      href={`/use-cases/${useCase.slug}`}
      className={cn(
        "card-hover group flex h-full flex-col",
        "bg-[var(--color-paper-2)]",
        "border border-[var(--color-rule)]",
        "p-7 md:p-8",
        "transition-colors duration-200",
        "hover:border-[var(--color-ink)]",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-paper)]",
      )}
    >
      <h3
        className={cn(
          "font-sans font-medium tracking-[-0.015em]",
          "text-[1.5rem] leading-[1.15] text-[var(--color-ink)]",
          "max-w-[18ch]",
        )}
      >
        {useCase.vertical}
      </h3>
      <p
        className={cn(
          "mt-5 font-sans text-[0.9375rem] leading-[1.55]",
          "text-[var(--color-muted)]",
          "max-w-[40ch]",
        )}
      >
        {useCase.pain}
      </p>

      <div
        className={cn(
          "mt-auto pt-8",
        )}
      >
        <div
          className={cn(
            "border-t border-[var(--color-rule)] pt-5",
            "flex items-end justify-between gap-4",
          )}
        >
          <div className="min-w-0">
            <p
              className={cn(
                "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
                "text-[var(--color-muted)]",
              )}
            >
              First agent
            </p>
            <p
              className={cn(
                "mt-2 font-mono text-[0.8125rem] leading-[1.4]",
                "text-[var(--color-ink)]",
              )}
            >
              {useCase.firstAgent}
            </p>
          </div>
          <span
            aria-hidden="true"
            className={cn(
              "card-arrow shrink-0 font-sans text-[1.25rem] leading-none",
              "text-[var(--color-ink)]",
              "translate-x-0 transition-transform duration-200",
              "group-hover:translate-x-1",
            )}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
