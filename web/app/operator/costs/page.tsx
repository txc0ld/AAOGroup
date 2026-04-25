import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHeader,
  PanelCard,
  StatCard,
  StatusPill,
  NoticeBar,
} from "@/components/operator/operator-ui";
import { MOCK_COSTS, getClient, formatAud } from "@/lib/operator-mock";
import { cn } from "@/lib/cn";

export const metadata: Metadata = { title: "Costs" };

export default function OperatorCostsPage() {
  const totalSpend = MOCK_COSTS.reduce((s, c) => s + c.monthAud, 0);
  const totalBudget = MOCK_COSTS.reduce((s, c) => s + c.budgetAud, 0);
  const overSeventy = MOCK_COSTS.filter((c) => c.monthAud / c.budgetAud >= 0.7);
  const overNinety = MOCK_COSTS.filter((c) => c.monthAud / c.budgetAud >= 0.9);

  return (
    <>
      <PageHeader
        eyebrow="Operations"
        title="Costs"
        subtitle="Per-client cost tracking, model + tool spend, vs. monthly budget. April month-to-date as of 25 Apr."
      />

      <div className="px-6 py-5 space-y-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <StatCard
            label="Total spend (MTD)"
            value={formatAud(totalSpend)}
            hint={`vs. ${formatAud(totalBudget)} budget`}
          />
          <StatCard
            label="% of budget"
            value={`${Math.round((totalSpend / totalBudget) * 100)}%`}
            hint="Across all active clients"
          />
          <StatCard
            label="Clients > 70%"
            value={String(overSeventy.length)}
            hint="Within budget but trending hot"
          />
          <StatCard
            label="Clients > 90%"
            value={String(overNinety.length)}
            hint="Operator action recommended"
          />
        </div>

        {overSeventy.length > 0 ? (
          <NoticeBar tone="signal">
            {overSeventy.length} client(s) above 70% of monthly budget. Review usage or extend budget.
          </NoticeBar>
        ) : null}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {MOCK_COSTS.map((c) => {
            const client = getClient(c.clientSlug);
            const pct = Math.round((c.monthAud / c.budgetAud) * 100);
            const isHot = pct >= 70;
            return (
              <PanelCard
                key={c.clientSlug}
                title={`${client?.name} — April`}
                action={
                  <Link
                    href={`/operator/clients/${c.clientSlug}`}
                    className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-ink)] hover:underline"
                  >
                    Client ›
                  </Link>
                }
              >
                <div className="flex items-baseline justify-between mb-3">
                  <p className="font-sans text-[1.5rem] tracking-[-0.015em] leading-none text-[var(--color-ink)]">
                    {formatAud(c.monthAud)}
                  </p>
                  <p className="font-mono text-[0.75rem] text-[var(--color-muted)]">
                    of {formatAud(c.budgetAud)}
                  </p>
                </div>

                {/* Budget bar */}
                <div className="h-2 bg-[var(--color-paper-2)] border border-[var(--color-rule)] mb-1">
                  <div
                    className={cn("h-full")}
                    style={{
                      width: `${Math.min(pct, 100)}%`,
                      background: isHot ? "var(--color-signal)" : "var(--color-ink)",
                    }}
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <p className="font-mono text-[0.6875rem] tracking-[0.04em] text-[var(--color-muted)]">
                    {pct}% used · Model {formatAud(c.modelSpendAud)} · Tools {formatAud(c.toolSpendAud)}
                  </p>
                  {pct >= 90 ? (
                    <StatusPill variant="signal">Over 90%</StatusPill>
                  ) : pct >= 70 ? (
                    <StatusPill variant="signal">Over 70%</StatusPill>
                  ) : (
                    <StatusPill variant="ink">Healthy</StatusPill>
                  )}
                </div>

                {/* Per workflow */}
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-muted)] mb-2">
                  By workflow
                </p>
                <ul className="flex flex-col gap-1.5">
                  {c.byWorkflow.map((w) => {
                    const wpct = Math.round((w.spendAud / c.monthAud) * 100);
                    return (
                      <li key={w.workflowSlug}>
                        <div className="flex items-center justify-between text-[0.8125rem] mb-0.5">
                          <span className="text-[var(--color-ink-2)]">{w.workflowName}</span>
                          <span className="font-mono text-[0.75rem] text-[var(--color-ink-2)]">
                            {formatAud(w.spendAud)} · {wpct}%
                          </span>
                        </div>
                        <div className="h-1 bg-[var(--color-paper-2)]">
                          <div className="h-full bg-[var(--color-ink-3)]" style={{ width: `${wpct}%` }} />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </PanelCard>
            );
          })}
        </div>
      </div>
    </>
  );
}
