import { cn } from "@/lib/cn";

type Principle = {
  number: string;
  title: string;
  body: string;
};

const PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "Start narrow.",
    body: "One workflow must work before adding five.",
  },
  {
    number: "02",
    title: "Human approval first.",
    body: "Autonomy is earned, not assumed.",
  },
  {
    number: "03",
    title: "Logs are product.",
    body: "Trust requires visibility.",
  },
  {
    number: "04",
    title: "Governance must be practical.",
    body: "No theatre.",
  },
  {
    number: "05",
    title: "Business value first.",
    body: "Do not sell architecture to non-technical buyers.",
  },
  {
    number: "06",
    title: "Templates become the moat.",
    body: "Every delivery should create reusable IP.",
  },
  {
    number: "07",
    title: "Default to boring reliability.",
    body: "Fancy autonomy loses to stable workflows.",
  },
  {
    number: "08",
    title: "Avoid custom traps.",
    body: "Bespoke work is priced high or declined.",
  },
  {
    number: "09",
    title: "Measure everything.",
    body: "If it cannot show value, it will churn.",
  },
  {
    number: "10",
    title: "Do not hide AI limitations.",
    body: "Clear boundaries increase trust.",
  },
];

export function PrincipleList() {
  return (
    <ol className="mt-12 border-t border-[var(--color-rule)]">
      {PRINCIPLES.map((principle) => (
        <li
          key={principle.number}
          className={cn(
            "grid grid-cols-[auto_1fr] gap-6 sm:gap-10",
            "border-b border-[var(--color-rule)]",
            "py-7 sm:py-9",
          )}
        >
          <span
            className={cn(
              "font-mono tabular-nums",
              "text-[0.875rem] sm:text-[1rem]",
              "leading-[1.4]",
              "text-[var(--color-muted)]",
              "pt-[0.2em]",
              "min-w-[2ch]",
            )}
            aria-hidden="true"
          >
            {principle.number}
          </span>
          <div>
            <h3
              className={cn(
                "font-sans font-medium tracking-[-0.01em]",
                "text-[clamp(1.25rem,2.2vw,1.625rem)] leading-[1.2]",
                "text-[var(--color-ink)]",
              )}
            >
              <span className="sr-only">
                {`Principle ${principle.number}: `}
              </span>
              {principle.title}
            </h3>
            <p
              className={cn(
                "mt-3 font-sans text-[1rem] leading-[1.55]",
                "text-[var(--color-muted)]",
                "max-w-[var(--measure)]",
              )}
            >
              {principle.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
