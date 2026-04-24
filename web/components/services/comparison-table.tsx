import { cn } from "@/lib/cn";

type Cell = string | boolean;

type Row = {
  label: string;
  cells: [Cell, Cell, Cell]; // Audit, Pilot, Subscription
};

const columns = ["Audit", "Pilot", "Subscription"] as const;

const rows: Row[] = [
  {
    label: "Outcome",
    cells: [
      "Workflow map and pilot proposal",
      "One workflow live in shadow mode",
      "Workflows run, monitored, and tuned",
    ],
  },
  {
    label: "Price band",
    cells: [
      "AUD $2,500–$7,500",
      "AUD $10,000–$30,000 setup",
      "AUD $5,000–$35,000+/mo",
    ],
  },
  {
    label: "Duration",
    cells: ["1–2 weeks", "2–4 weeks", "Ongoing"],
  },
  {
    label: "Workflows included",
    cells: ["Diagnostic only", "One primary workflow", "1 to many, by tier"],
  },
  {
    label: "Approval queue",
    cells: [false, true, true],
  },
  {
    label: "Logs and audit trail",
    cells: [false, true, true],
  },
  {
    label: "Monthly reporting",
    cells: [false, "Pilot performance report", true],
  },
  {
    label: "Ongoing optimisation",
    cells: [false, false, true],
  },
];

function CellContent({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <span
        className="font-mono text-[1rem] leading-none text-[var(--color-ink)]"
        aria-label="Included"
      >
        ✓
      </span>
    );
  }
  if (value === false) {
    return (
      <span
        className="font-mono text-[0.875rem] leading-none text-[var(--color-muted)]"
        aria-label="Not included"
      >
        —
      </span>
    );
  }
  return (
    <span className="font-sans text-[0.9375rem] leading-[1.5] text-[var(--color-ink)]">
      {value}
    </span>
  );
}

export function ComparisonTable() {
  return (
    <div className="mt-14">
      {/* Desktop table */}
      <div className="hidden md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th
                scope="col"
                className={cn(
                  "w-[26%] py-4 pr-6 text-left align-bottom",
                  "font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]",
                  "border-b border-[var(--color-rule)]",
                )}
              >
                Feature
              </th>
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className={cn(
                    "w-[24.6%] py-4 px-5 text-left align-bottom",
                    "font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-ink)]",
                    "border-b border-[var(--color-ink)]",
                  )}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th
                  scope="row"
                  className={cn(
                    "py-5 pr-6 text-left align-top",
                    "font-sans text-[0.9375rem] font-medium leading-[1.4] text-[var(--color-ink)]",
                    "border-b border-[var(--color-rule)]",
                  )}
                >
                  {row.label}
                </th>
                {row.cells.map((cell, idx) => (
                  <td
                    key={idx}
                    className={cn(
                      "py-5 px-5 align-top",
                      "border-b border-[var(--color-rule)]",
                    )}
                  >
                    <CellContent value={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="flex flex-col gap-6 md:hidden">
        {columns.map((col, colIdx) => (
          <div
            key={col}
            className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6"
          >
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-ink)]">
              {col}
            </p>
            <dl className="mt-5 flex flex-col">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-2 border-t border-[var(--color-rule)] py-4 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    {row.label}
                  </dt>
                  <dd>
                    <CellContent value={row.cells[colIdx]} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
