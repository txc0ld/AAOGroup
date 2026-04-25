import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHeader,
  PanelCard,
  StatusPill,
  OperatorButton,
} from "@/components/operator/operator-ui";
import { MOCK_CLIENTS, MOCK_REPORTS } from "@/lib/operator-mock";
import { cn } from "@/lib/cn";

export const metadata: Metadata = { title: "Reports" };

const MONTHS = ["2026-04", "2026-03", "2026-02", "2026-01"];
const MONTH_LABELS: Record<string, string> = {
  "2026-04": "Apr 26",
  "2026-03": "Mar 26",
  "2026-02": "Feb 26",
  "2026-01": "Jan 26",
};

export default function OperatorReportsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Library"
        title="Monthly impact reports"
        subtitle="Per client × per month. Each cell links to the report. April reports due by Wed 30 Apr."
        actions={<OperatorButton variant="primary">Generate all April reports</OperatorButton>}
      />

      <div className="px-6 py-5 space-y-4">
        <PanelCard title="Reports archive">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left px-3 py-2 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-muted)] border-b border-[var(--color-rule)]">
                    Client
                  </th>
                  {MONTHS.map((m) => (
                    <th
                      key={m}
                      className="text-left px-3 py-2 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-muted)] border-b border-[var(--color-rule)]"
                    >
                      {MONTH_LABELS[m]}
                    </th>
                  ))}
                  <th className="text-right px-3 py-2 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-muted)] border-b border-[var(--color-rule)]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {MOCK_CLIENTS.filter((c) => c.status !== "audit").map((c) => (
                  <tr key={c.slug} className="hover:bg-[var(--color-paper-2)] transition-colors">
                    <td className="px-3 py-2 border-b border-[var(--color-rule)]">
                      <Link
                        href={`/operator/clients/${c.slug}`}
                        className="font-medium text-[var(--color-ink)] hover:underline"
                      >
                        {c.name}
                      </Link>
                    </td>
                    {MONTHS.map((m) => {
                      const report = MOCK_REPORTS.find(
                        (r) => r.clientSlug === c.slug && r.month === m,
                      );
                      return (
                        <td
                          key={m}
                          className="px-3 py-2 border-b border-[var(--color-rule)] align-middle"
                        >
                          <ReportCell status={report?.status} sentOn={report?.sentOn} />
                        </td>
                      );
                    })}
                    <td className="px-3 py-2 border-b border-[var(--color-rule)] text-right">
                      <OperatorButton variant="ghost">Generate this month</OperatorButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PanelCard>

        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          Reports use the AAO monthly impact template (governance · monthly-report). Operator review required before send.
        </p>
      </div>
    </>
  );
}

function ReportCell({
  status,
  sentOn,
}: {
  status?: "sent" | "draft" | "not-started";
  sentOn?: string;
}) {
  if (!status) {
    return (
      <span className="font-mono text-[0.6875rem] text-[var(--color-muted)]">—</span>
    );
  }
  if (status === "sent") {
    return (
      <div className="flex flex-col gap-1">
        <StatusPill variant="ink">Sent</StatusPill>
        <span className="font-mono text-[0.625rem] text-[var(--color-muted)]">{sentOn}</span>
      </div>
    );
  }
  if (status === "draft") {
    return (
      <div className="flex flex-col gap-1">
        <StatusPill variant="signal">Draft</StatusPill>
        <button
          type="button"
          className={cn(
            "font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-ink)]",
            "hover:underline text-left",
          )}
        >
          View ›
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-1">
      <StatusPill>Not started</StatusPill>
      <button
        type="button"
        className={cn(
          "font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-ink)]",
          "hover:underline text-left",
        )}
      >
        Generate ›
      </button>
    </div>
  );
}
