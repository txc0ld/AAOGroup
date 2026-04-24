import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";

type Layer = {
  number: string;
  label: string;
  subtext: string;
  emphasised?: boolean;
};

const layers: Layer[] = [
  {
    number: "01",
    label: "Integration",
    subtext: "Connect the systems where work already lives.",
  },
  {
    number: "02",
    label: "Workflow",
    subtext: "Encode the steps a person would otherwise repeat.",
  },
  {
    number: "03",
    label: "Guarded LLM",
    subtext: "Reasoning bounded by tools, scopes, and permissions.",
  },
  {
    number: "04",
    label: "Approval Queue",
    subtext: "A human signs off before any outbound action.",
    emphasised: true,
  },
  {
    number: "05",
    label: "Audit",
    subtext: "Every tool call, prompt, and decision recorded.",
  },
];

export function FrameworkPreview() {
  return (
    <Section tone="ink">
      <Reveal className="max-w-[44rem]">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[rgb(246_244_238_/_0.6)]">
          The framework
        </p>
        <p
          className={cn(
            "mt-6 font-sans text-[1.25rem] leading-[1.45] text-[var(--color-paper)]",
          )}
        >
          Five layers turn AI from a chat window into governed operational
          infrastructure. The approval queue is the product. Everything else
          supports it.
        </p>
      </Reveal>

      <ol className="mt-16 flex flex-col gap-3">
        {layers.map((layer, i) => {
          const emphasised = layer.emphasised === true;
          return (
            <Reveal
              as="li"
              key={layer.number}
              delay={i * 90}
              className={cn(
                "relative w-full",
                "border",
                emphasised
                  ? "wedge-pulse bg-[var(--color-paper)] text-[var(--color-ink)] border-[var(--color-paper)]"
                  : "bg-transparent text-[var(--color-paper)] border-[rgb(246_244_238_/_0.18)]",
                emphasised ? "py-10 md:py-14" : "py-6 md:py-8",
                "px-6 md:px-10",
              )}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-10">
                <span
                  className={cn(
                    "font-mono text-[0.75rem] uppercase tracking-[0.22em]",
                    emphasised
                      ? "text-[var(--color-muted)]"
                      : "text-[rgb(246_244_238_/_0.55)]",
                    "md:w-12 md:shrink-0",
                  )}
                >
                  {layer.number}
                </span>
                <div className="flex-1">
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-8">
                    <h3
                      className={cn(
                        "font-sans font-medium tracking-[-0.02em]",
                        emphasised
                          ? "text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.05]"
                          : "text-[clamp(1.25rem,2.4vw,1.625rem)] leading-[1.15]",
                      )}
                    >
                      {layer.label}
                    </h3>
                    {emphasised ? (
                      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                        the wedge
                      </span>
                    ) : null}
                  </div>
                  <p
                    className={cn(
                      "mt-2 font-sans text-[0.9375rem] leading-[1.55] max-w-[var(--measure)]",
                      emphasised
                        ? "text-[var(--color-muted)]"
                        : "text-[rgb(246_244_238_/_0.7)]",
                    )}
                  >
                    {layer.subtext}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ol>

      <div className="mt-12">
        <a
          href="/framework"
          data-on-ink="true"
          className={cn(
            "inline-flex items-center gap-2",
            "font-sans text-[0.9375rem] leading-none text-[var(--color-paper)]",
            "underline-offset-[6px] decoration-[1px] hover:underline",
          )}
        >
          See the framework <span aria-hidden="true">→</span>
        </a>
      </div>
    </Section>
  );
}
