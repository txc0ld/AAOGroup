import { cn } from "@/lib/cn";

type Row = {
  tier: string;
  workflow: string;
  control: string;
};

const rows: Row[] = [
  {
    tier: "1",
    workflow: "Internal summaries, low-risk admin",
    control: "Logging + review",
  },
  {
    tier: "2",
    workflow: "Drafting internal/customer messages",
    control: "Human approval",
  },
  {
    tier: "3",
    workflow: "CRM/job/accounting updates",
    control: "Approval or strict policy controls",
  },
  {
    tier: "4",
    workflow: "Financial/legal/HR-sensitive workflows",
    control: "Enhanced review, restricted scope",
  },
  {
    tier: "5",
    workflow: "Regulated/high-impact decisions",
    control: "Out of scope",
  },
];

const headerCell = cn(
  "py-4 pr-6 text-left align-bottom",
  "font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]",
  "border-b border-[var(--color-ink)]",
);

const bodyCell = cn(
  "py-5 pr-6 align-top",
  "border-b border-[var(--color-rule)]",
);

function isElevated(tier: string) {
  return tier === "4" || tier === "5";
}

export function RiskTierTable() {
  return (
    <div className="mt-12">
      {/* Desktop table */}
      <div className="hidden md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th scope="col" className={cn(headerCell, "w-[12%] pl-4")}>
                Tier
              </th>
              <th scope="col" className={cn(headerCell, "w-[44%]")}>
                Workflow type
              </th>
              <th scope="col" className={cn(headerCell, "w-[44%]")}>
                Control level
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const elevated = isElevated(row.tier);
              return (
                <tr key={row.tier}>
                  <th
                    scope="row"
                    className={cn(
                      bodyCell,
                      "pl-4 relative",
                      elevated &&
                        "before:absolute before:left-0 before:top-3 before:bottom-3 before:w-[2px] before:bg-[var(--color-signal)]",
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-[0.8125rem] uppercase tracking-[0.18em]",
                        elevated
                          ? "text-[var(--color-signal)]"
                          : "text-[var(--color-ink)]",
                      )}
                    >
                      T{row.tier}
                    </span>
                  </th>
                  <td className={bodyCell}>
                    <span className="font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-ink)]">
                      {row.workflow}
                    </span>
                  </td>
                  <td className={bodyCell}>
                    <span className="font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-muted)]">
                      {row.control}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="flex flex-col gap-5 md:hidden">
        {rows.map((row) => {
          const elevated = isElevated(row.tier);
          return (
            <div
              key={row.tier}
              className={cn(
                "border border-[var(--color-rule)] bg-[var(--color-paper)] p-5 relative",
                elevated &&
                  "before:absolute before:left-0 before:top-4 before:bottom-4 before:w-[2px] before:bg-[var(--color-signal)]",
              )}
            >
              <p
                className={cn(
                  "font-mono text-[0.75rem] uppercase tracking-[0.22em]",
                  elevated
                    ? "text-[var(--color-signal)]"
                    : "text-[var(--color-ink)]",
                )}
              >
                T{row.tier}
              </p>
              <dl className="mt-3 flex flex-col gap-3">
                <div>
                  <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Workflow type
                  </dt>
                  <dd className="mt-1 font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-ink)]">
                    {row.workflow}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Control level
                  </dt>
                  <dd className="mt-1 font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-ink)]">
                    {row.control}
                  </dd>
                </div>
              </dl>
            </div>
          );
        })}
      </div>
    </div>
  );
}
