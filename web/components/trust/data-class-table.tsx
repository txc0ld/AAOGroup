import { cn } from "@/lib/cn";

type Row = {
  level: string;
  description: string;
  handling: string;
};

const rows: Row[] = [
  {
    level: "0",
    description: "Public",
    handling: "Can be used in demos and low-risk workflows",
  },
  {
    level: "1",
    description: "Internal",
    handling: "Approved internal workflows only",
  },
  {
    level: "2",
    description: "Confidential",
    handling: "Approval-gated, restricted access, logged",
  },
  {
    level: "3",
    description: "Sensitive personal/commercial",
    handling:
      "Strict approval, minimisation, redaction where possible",
  },
  {
    level: "4",
    description: "Regulated/high-risk",
    handling:
      "Do not process until controls, contract, and legal review are complete",
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

export function DataClassTable() {
  return (
    <div className="mt-12">
      {/* Desktop table */}
      <div className="hidden md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th scope="col" className={cn(headerCell, "w-[12%]")}>
                Level
              </th>
              <th scope="col" className={cn(headerCell, "w-[34%]")}>
                Description
              </th>
              <th scope="col" className={cn(headerCell, "w-[54%]")}>
                Handling
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.level}>
                <th scope="row" className={cn(bodyCell)}>
                  <span
                    className={cn(
                      "font-mono text-[0.8125rem] uppercase tracking-[0.18em]",
                      "text-[var(--color-ink)]",
                    )}
                  >
                    L{row.level}
                  </span>
                </th>
                <td className={bodyCell}>
                  <span className="font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-ink)]">
                    {row.description}
                  </span>
                </td>
                <td className={bodyCell}>
                  <span className="font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-muted)]">
                    {row.handling}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="flex flex-col gap-5 md:hidden">
        {rows.map((row) => (
          <div
            key={row.level}
            className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-5"
          >
            <p
              className={cn(
                "font-mono text-[0.75rem] uppercase tracking-[0.22em]",
                "text-[var(--color-ink)]",
              )}
            >
              L{row.level} · {row.description}
            </p>
            <dl className="mt-4 flex flex-col gap-3">
              <div>
                <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Handling
                </dt>
                <dd className="mt-1 font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-ink)]">
                  {row.handling}
                </dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
