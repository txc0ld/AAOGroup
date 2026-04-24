import { cn } from "@/lib/cn";

type WorkflowStepsProps = {
  steps: { step: string; detail: string }[];
};

export function WorkflowSteps({ steps }: WorkflowStepsProps) {
  return (
    <ol className="border-t border-[var(--color-rule)]">
      {steps.map((item, index) => {
        const number = String(index + 1).padStart(2, "0");
        return (
          <li
            key={item.step}
            className={cn(
              "grid grid-cols-[auto_1fr] gap-x-8 md:gap-x-12",
              "border-b border-[var(--color-rule)]",
              "py-7 md:py-9",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "font-mono tabular-nums",
                "text-[1.25rem] md:text-[1.5rem] leading-none",
                "text-[var(--color-muted)]",
                "pt-1",
                "min-w-[3ch]",
              )}
            >
              {number}
            </span>
            <div className="min-w-0">
              <h3
                className={cn(
                  "font-sans font-medium tracking-[-0.01em]",
                  "text-[1.25rem] md:text-[1.375rem] leading-[1.2]",
                  "text-[var(--color-ink)]",
                )}
              >
                {item.step}
              </h3>
              <p
                className={cn(
                  "mt-3 font-sans text-[1rem] leading-[1.6]",
                  "text-[var(--color-muted)]",
                  "max-w-[var(--measure)]",
                )}
              >
                {item.detail}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
