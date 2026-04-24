import { cn } from "@/lib/cn";

type Layer = {
  number: string;
  label: string;
  subtext: string;
  href: string;
  emphasised?: boolean;
};

const layers: Layer[] = [
  {
    number: "01",
    label: "Integration",
    subtext: "OAuth, webhooks, and polling into the systems you already run.",
    href: "#layer-1",
  },
  {
    number: "02",
    label: "Workflow",
    subtext: "Deterministic state machines with narrow, scoped task agents.",
    href: "#layer-2",
  },
  {
    number: "03",
    label: "Guarded LLM",
    subtext: "Model calls bounded by input, output, topical, and policy rails.",
    href: "#layer-3",
  },
  {
    number: "04",
    label: "Approval Queue",
    subtext: "Every customer-facing action lands here for human sign-off.",
    href: "#layer-4",
    emphasised: true,
  },
  {
    number: "05",
    label: "Audit",
    subtext: "Every tool call, decision, rail trip, and cost is logged.",
    href: "#layer-5",
  },
];

export function LayerDiagram() {
  return (
    <ol
      className={cn(
        "mt-16 w-full",
        "border border-[var(--color-rule)]",
        "bg-[var(--color-paper)]",
      )}
      aria-label="The five layers of the Sovereign AI Operations Framework"
    >
      {layers.map((layer, index) => {
        const emphasised = layer.emphasised === true;
        const isFirst = index === 0;

        return (
          <li
            key={layer.number}
            className={cn(
              !isFirst && "border-t border-[var(--color-rule)]",
            )}
          >
            <a
              href={layer.href}
              className={cn(
                "group block w-full",
                "px-6 md:px-10",
                emphasised
                  ? "py-12 md:py-16 bg-[var(--color-ink)] text-[var(--color-paper)]"
                  : "py-7 md:py-9 bg-transparent text-[var(--color-ink)]",
                "transition-colors duration-200",
                emphasised
                  ? "hover:bg-[var(--color-ink-2)]"
                  : "hover:bg-[var(--color-paper-2)]",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset",
                emphasised
                  ? "focus-visible:ring-[var(--color-paper)]"
                  : "focus-visible:ring-[var(--color-ink)]",
              )}
            >
              <div
                className={cn(
                  "flex flex-col gap-2",
                  "md:grid md:grid-cols-[5rem_1fr_auto] md:items-baseline md:gap-10",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[0.75rem] uppercase tracking-[0.22em]",
                    emphasised
                      ? "text-[rgb(246_244_238_/_0.6)]"
                      : "text-[var(--color-muted)]",
                  )}
                >
                  {layer.number}
                </span>

                <div
                  className={cn(
                    "flex flex-col gap-1",
                    "md:flex-row md:items-baseline md:gap-5",
                  )}
                >
                  <h3
                    className={cn(
                      "font-sans font-medium tracking-[-0.02em]",
                      emphasised
                        ? "text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.05]"
                        : "text-[clamp(1.25rem,2.2vw,1.625rem)] leading-[1.15]",
                    )}
                  >
                    {layer.label}
                  </h3>
                  {emphasised ? (
                    <span
                      className={cn(
                        "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
                        "text-[rgb(246_244_238_/_0.65)]",
                      )}
                    >
                      the wedge
                    </span>
                  ) : null}
                </div>

                <p
                  className={cn(
                    "font-sans text-[0.9375rem] leading-[1.55] max-w-[var(--measure)]",
                    "md:col-start-2 md:row-start-2",
                    emphasised
                      ? "text-[rgb(246_244_238_/_0.78)]"
                      : "text-[var(--color-muted)]",
                  )}
                >
                  {layer.subtext}
                </p>

                <span
                  aria-hidden="true"
                  className={cn(
                    "hidden md:inline-block md:col-start-3 md:row-start-1",
                    "font-mono text-[1rem] leading-none",
                    emphasised
                      ? "text-[rgb(246_244_238_/_0.6)]"
                      : "text-[var(--color-muted)]",
                    "transition-transform duration-200 group-hover:translate-x-1",
                  )}
                >
                  →
                </span>
              </div>
            </a>
          </li>
        );
      })}
    </ol>
  );
}
