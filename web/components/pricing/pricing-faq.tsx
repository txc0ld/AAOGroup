import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/cn";

type FAQ = {
  q: string;
  a: string;
};

const faqs: FAQ[] = [
  {
    q: "Will this expose my data?",
    a: "Every integration starts read-only and uses least-privilege scopes. Customer data routes through Amazon Bedrock (Sydney region) or Azure (Australia East) where the chosen model is supported, so it stays onshore. We do not use client data to train models.",
  },
  {
    q: "What happens if it makes a mistake?",
    a: "The approval queue exists to catch mistakes before they leave the building. Every customer-facing or system-changing action requires human approval — approve, edit, or reject. Mistakes that get through are reviewed in the next monthly governance check.",
  },
  {
    q: "Why not just use ChatGPT?",
    a: "ChatGPT is a chat window, not an operating layer. It has no integration with your CRM, no approval queue, no logs your accountant or insurer will accept, and no governance contract with you. We install the plumbing and the controls.",
  },
  {
    q: "How is this different from automation tools like Zapier or Make?",
    a: "Those tools connect APIs deterministically. We add controlled language-model judgement — drafting replies, summarising documents, classifying leads — inside a workflow that still has logs and approval gates. Tools like Zapier sit beneath us; we orchestrate them.",
  },
  {
    q: "Can we cancel?",
    a: "Yes. Subscriptions are month-to-month after the initial term. We hand back configurations, logs, and a cancellation runbook on request.",
  },
];

export function PricingFAQ() {
  return (
    <Section tone="paper">
      <SectionHeading
        eyebrow="Questions"
        title="What people ask before they sign."
      />

      <ul
        className={cn(
          "mt-14 flex flex-col",
          "border-t border-[var(--color-rule)]",
        )}
      >
        {faqs.map((item) => (
          <li
            key={item.q}
            className="border-b border-[var(--color-rule)]"
          >
            <details
              className={cn(
                "group",
                "[&_summary::-webkit-details-marker]:hidden",
              )}
            >
              <summary
                className={cn(
                  "flex cursor-pointer list-none items-baseline justify-between gap-6",
                  "py-7 md:py-8",
                  "font-sans font-medium text-[var(--color-ink)]",
                  "text-[1.0625rem] md:text-[1.1875rem] leading-[1.3]",
                  "tracking-[-0.005em]",
                  "transition-colors hover:text-[var(--color-ink-2)]",
                  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-paper)]",
                )}
              >
                <span className="max-w-[52ch]">{item.q}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "relative inline-block h-4 w-4 shrink-0 translate-y-[0.15em]",
                    "text-[var(--color-muted)]",
                  )}
                >
                  <span className="absolute left-0 top-1/2 block h-px w-4 bg-current" />
                  <span
                    className={cn(
                      "absolute left-1/2 top-0 block h-4 w-px bg-current",
                      "transition-transform duration-200",
                      "group-open:rotate-90 group-open:opacity-0",
                    )}
                  />
                </span>
              </summary>
              <div
                className={cn(
                  "pb-8 pr-6 md:pr-12",
                  "font-serif text-[1.0625rem] leading-[1.65] text-[var(--color-ink-2)]",
                  "max-w-[var(--measure)]",
                )}
              >
                {item.a}
              </div>
            </details>
          </li>
        ))}
      </ul>
    </Section>
  );
}
