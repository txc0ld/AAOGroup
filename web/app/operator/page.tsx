import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHeader,
  StatCard,
  PanelCard,
  StatusPill,
  RiskPill,
  OperatorButton,
  DataTable,
  Th,
  Td,
} from "@/components/operator/operator-ui";
import {
  MOCK_APPROVALS,
  MOCK_LOGS,
  MOCK_CLIENTS,
  activeClientsCount,
  totalMrr,
  pendingApprovalsCount,
  openIncidentsCount,
  formatAud,
  ageLabel,
  getClient,
} from "@/lib/operator-mock";

export const metadata: Metadata = { title: "Overview" };

export default function OperatorOverviewPage() {
  const topApprovals = MOCK_APPROVALS.filter((a) => a.status === "pending").slice(0, 3);
  const recentLogs = MOCK_LOGS.slice(0, 8);

  return (
    <>
      <PageHeader
        eyebrow="Heads-up display"
        title="Overview"
        subtitle="Your operator console for every active client. Today is Saturday 25 April 2026 · 06:48 AWST."
      />

      <div className="px-6 py-5 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <StatCard
            label="Active clients"
            value={String(activeClientsCount())}
            delta="+1 vs last month"
            hint={`${MOCK_CLIENTS.length} total · ${MOCK_CLIENTS.filter((c) => c.status === "audit").length} in audit`}
          />
          <StatCard
            label="MRR (AUD)"
            value={formatAud(totalMrr())}
            delta="+$6,500 vs last month"
            hint="Across active + pilot engagements"
          />
          <StatCard
            label="Pending approvals"
            value={String(pendingApprovalsCount())}
            delta={`${MOCK_APPROVALS.filter((a) => a.riskTier >= 4).length} high-risk`}
            hint="Across all clients"
          />
          <StatCard
            label="Open incidents"
            value={String(openIncidentsCount())}
            delta="0 S1 · 1 S2 · 1 S3"
            hint="Resolution SLA in spec"
          />
        </div>

        {/* Awaiting your action */}
        <PanelCard
          title="Awaiting your action — top 3"
          action={
            <Link
              href="/operator/approvals"
              className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-ink)] hover:underline"
            >
              View queue ›
            </Link>
          }
        >
          <ul className="flex flex-col gap-3">
            {topApprovals.map((a) => {
              const client = getClient(a.clientSlug);
              return (
                <li
                  key={a.id}
                  className="border border-[var(--color-rule)] p-3 flex flex-wrap items-start justify-between gap-3"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <StatusPill variant="signal">Awaiting approval</StatusPill>
                      <RiskPill tier={a.riskTier} />
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                        {client?.name} · {a.workflow} · {ageLabel(a.ageMinutes)}
                      </span>
                    </div>
                    <p className="font-sans text-[0.9375rem] text-[var(--color-ink)] leading-[1.4]">
                      {a.subject}
                    </p>
                    <p className="mt-1 font-serif text-[0.8125rem] text-[var(--color-muted)] leading-[1.5] line-clamp-2">
                      {a.bodyLines[0]}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <OperatorButton variant="primary">Approve</OperatorButton>
                    <OperatorButton variant="outline">Edit</OperatorButton>
                    <OperatorButton variant="ghost">Reject</OperatorButton>
                    <Link
                      href={`/operator/approvals/${a.id}`}
                      className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-ink)] hover:underline ml-1"
                    >
                      Open ›
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </PanelCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent activity */}
          <PanelCard
            title="Recent activity — last 8"
            action={
              <Link
                href="/operator/logs"
                className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-ink)] hover:underline"
              >
                Full log ›
              </Link>
            }
          >
            <DataTable className="border-0">
              <thead>
                <tr>
                  <Th>Time</Th>
                  <Th>Client</Th>
                  <Th>Action</Th>
                  <Th>Status</Th>
                </tr>
              </thead>
              <tbody>
                {recentLogs.map((l) => {
                  const client = getClient(l.clientSlug);
                  return (
                    <tr key={l.id}>
                      <Td mono>{l.timestamp.split(" ")[1]}</Td>
                      <Td>{client?.name.split(" ").slice(0, 2).join(" ")}</Td>
                      <Td mono>
                        {l.actor}.{l.action}
                      </Td>
                      <Td>
                        {l.status === "ok" ? (
                          <StatusPill variant="ink">OK</StatusPill>
                        ) : l.status === "held" ? (
                          <StatusPill variant="signal">Held</StatusPill>
                        ) : l.status === "rail-flag" ? (
                          <StatusPill variant="signal">Rail</StatusPill>
                        ) : l.status === "error" ? (
                          <StatusPill variant="signal">Error</StatusPill>
                        ) : (
                          <StatusPill>{l.status}</StatusPill>
                        )}
                      </Td>
                    </tr>
                  );
                })}
              </tbody>
            </DataTable>
          </PanelCard>

          {/* This week — operator todo */}
          <PanelCard title="This week — operator todo">
            <ul className="flex flex-col gap-2.5">
              <TodoItem
                label="Run April monthly impact reports"
                detail="3 clients pending: Coastal Concrete, Pilbara Services, North Perth Bookkeeping"
                due="By Wed 30 Apr"
              />
              <TodoItem
                label="Convert Henderson Legal pilot → Foundation"
                detail="Week 6 conversion gate. Decision call Tue 28 Apr 14:00 AWST."
                due="By Tue 28 Apr"
              />
              <TodoItem
                label="Audit deliverable — Swan Valley Cellars"
                detail="Pilot proposal + guardrail spec due end-of-week."
                due="By Fri 1 May"
              />
              <TodoItem
                label="Resolve INC-0091 (Xero token refresh)"
                detail="Pilbara Services — supplier reconciliation pipeline blocked."
                due="Today"
              />
              <TodoItem
                label="Review Q3 BAS draft for Westside Auto"
                detail="apv-2045 — two flagged transactions need operator decision."
                due="Mon 27 Apr"
              />
            </ul>
          </PanelCard>
        </div>
      </div>
    </>
  );
}

function TodoItem({ label, detail, due }: { label: string; detail: string; due: string }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden
        className="mt-1 inline-block h-3 w-3 shrink-0 border border-[var(--color-rule)]"
      />
      <div className="min-w-0 flex-1">
        <p className="font-sans text-[0.875rem] text-[var(--color-ink)]">{label}</p>
        <p className="mt-0.5 font-sans text-[0.75rem] text-[var(--color-muted)] leading-[1.45]">
          {detail}
        </p>
      </div>
      <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-muted)] whitespace-nowrap shrink-0">
        {due}
      </span>
    </li>
  );
}
