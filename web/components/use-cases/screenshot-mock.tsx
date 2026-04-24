import { cn } from "@/lib/cn";

type ScreenshotMockProps = {
  vertical: string;
  firstAgent: string;
  subjectLine: string;
};

const BODY_COPY: Record<string, string[]> = {
  "Trades & construction": [
    "Hi Sam, thanks for the enquiry about the slab pour and retaining wall at 14 Hill Rd, Maylands.",
    "Based on your notes, we'd want to walk the site before pricing. I have Tuesday 10am or Thursday 2pm available this week.",
    "Reply with the time that suits and I'll confirm with the team.",
  ],
  "Mining services & industrial": [
    "Q2 incident roll-up for Site 7 Pilbara: 3 reportable events, all closed within SLA. No lost-time injuries.",
    "Two recurring near-misses around the conveyor 4 changeover — recommend revisiting the SOP referenced in the Apr safety walk.",
    "Full evidence pack and citations attached for the compliance review.",
  ],
  "Accounting & bookkeeping": [
    "Hi Acme team, just a friendly follow-up — we're still waiting on the BAS supporting docs for the March quarter (now 9 days outstanding).",
    "If you could send through the bank statements and the two outstanding supplier invoices, we can finalise and lodge this week.",
    "Happy to jump on a quick call if anything's blocking it on your end.",
  ],
  "Legal admin & boutique firms": [
    "Matter brief: Henderson v. Coastal Holdings. 32-page bundle summarised with paragraph-level citations.",
    "Key issues: alleged breach of supply agreement (cl. 12.3), quantum disputed at $184,200, jurisdiction WA Supreme Court.",
    "Drafted chronology, parties register, and proposed next steps for your review before the matter is opened.",
  ],
  "Property management": [
    "Vendor brief for AllTrade Plumbing — 22 Ocean Ave, hot water unit failure reported by tenant this morning.",
    "Tenant available between 8am and 4pm tomorrow. Owner pre-approved up to $1,500 for unit replacement under the standing maintenance authority.",
    "Tenant acknowledgement drafted separately and ready to send once vendor confirms attendance window.",
  ],
};

export function ScreenshotMock({
  vertical,
  firstAgent,
  subjectLine,
}: ScreenshotMockProps) {
  const body = BODY_COPY[vertical] ?? [];

  return (
    <figure
      role="img"
      aria-label={`Approval queue mock for ${firstAgent}`}
      className={cn(
        "w-full",
        "bg-[var(--color-paper-2)]",
        "border border-[var(--color-rule)]",
      )}
    >
      {/* Header bar */}
      <div
        className={cn(
          "flex items-center justify-between gap-4",
          "border-b border-[var(--color-rule)]",
          "px-5 py-4 md:px-7 md:py-5",
        )}
      >
        <p
          className={cn(
            "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
            "text-[var(--color-muted)]",
          )}
        >
          Approval queue · pending
        </p>
        <span
          className={cn(
            "inline-flex items-center",
            "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
            "border px-3 py-1.5",
            "text-[var(--color-signal)] border-[var(--color-signal)]",
          )}
        >
          Awaiting approval
        </span>
      </div>

      {/* Subject line */}
      <div
        className={cn(
          "px-5 py-5 md:px-7 md:py-6",
          "border-b border-[var(--color-rule)]",
        )}
      >
        <p
          className={cn(
            "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
            "text-[var(--color-muted)]",
          )}
        >
          Draft
        </p>
        <p
          className={cn(
            "mt-2 font-sans font-medium tracking-[-0.01em]",
            "text-[1rem] md:text-[1.0625rem] leading-[1.4]",
            "text-[var(--color-ink)]",
          )}
        >
          {subjectLine}
        </p>
      </div>

      {/* Body */}
      <div
        className={cn(
          "px-5 py-6 md:px-7 md:py-8",
          "border-b border-[var(--color-rule)]",
          "font-serif text-[0.9375rem] md:text-[1rem] leading-[1.65]",
          "text-[var(--color-ink-2)]",
        )}
      >
        {body.map((paragraph, idx) => (
          <p
            key={idx}
            className={cn(idx > 0 && "mt-4")}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Metadata strip */}
      <div
        className={cn(
          "px-5 py-3.5 md:px-7 md:py-4",
          "border-b border-[var(--color-rule)]",
        )}
      >
        <p
          className={cn(
            "font-mono text-[0.6875rem] tracking-[0.06em]",
            "text-[var(--color-muted)]",
          )}
        >
          Generated 2 min ago · {firstAgent} Agent · Bedrock claude-sonnet (syd)
        </p>
      </div>

      {/* Action row */}
      <div
        className={cn(
          "flex flex-wrap items-center gap-3",
          "px-5 py-4 md:px-7 md:py-5",
        )}
      >
        {["Approve", "Edit", "Reject"].map((label) => (
          <span
            key={label}
            aria-hidden="true"
            className={cn(
              "inline-flex items-center justify-center",
              "font-sans text-[0.875rem] leading-none",
              "border border-[var(--color-ink)]",
              "text-[var(--color-ink)]",
              "px-4 py-2.5",
            )}
          >
            {label}
          </span>
        ))}
      </div>
    </figure>
  );
}
