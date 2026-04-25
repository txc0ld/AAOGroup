import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PageHeader,
  PanelCard,
  StatCard,
  StatusPill,
  RiskPill,
  OperatorButton,
  DataTable,
  Th,
  Td,
} from "@/components/operator/operator-ui";
import {
  MOCK_CLIENTS,
  getClient,
  approvalsForClient,
  deploymentsForClient,
  incidentsForClient,
  costForClient,
  ageLabel,
  formatAud,
  formatAudPrecise,
} from "@/lib/operator-mock";

export function generateStaticParams() {
  return MOCK_CLIENTS.map((c) => ({ slug: c.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const client = getClient(slug);
  return { title: client?.name ?? "Client" };
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "workflows", label: "Workflows" },
  { id: "approvals", label: "Approvals" },
  { id: "logs", label: "Logs" },
  { id: "reports", label: "Reports" },
  { id: "settings", label: "Settings" },
];

export default async function ClientDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) notFound();

  const approvals = approvalsForClient(slug);
  const deployments = deploymentsForClient(slug);
  const incidents = incidentsForClient(slug);
  const cost = costForClient(slug);

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { href: "/operator", label: "Operator" },
          { href: "/operator/clients", label: "Clients" },
          { label: client.name },
        ]}
        eyebrow={`${client.industry} · ${client.region}`}
        title={client.name}
        subtitle={`ABN ${client.abn} · ${client.subscription} tier · started ${client.startedOn}`}
        actions={
          <>
            <OperatorButton variant="ghost">Pause</OperatorButton>
            <OperatorButton variant="outline">Run audit pipeline</OperatorButton>
            <OperatorButton variant="primary">Generate report</OperatorButton>
          </>
        }
      />

      {/* Tabs (visual only) */}
      <div className="border-b border-[var(--color-rule)] px-6">
        <nav className="flex gap-1 overflow-x-auto">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              type="button"
              className={`px-3 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.18em] border-b-2 -mb-px ${
                i === 0
                  ? "border-[var(--color-ink)] text-[var(--color-ink)]"
                  : "border-transparent text-[var(--color-muted)] hover:text-[var(--color-ink)]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="px-6 py-5 space-y-6">
        {/* Snapshot */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <StatCard
            label="Status"
            value={client.status[0].toUpperCase() + client.status.slice(1)}
            hint={`Renews ${client.nextRenewal}`}
          />
          <StatCard label="MRR" value={client.mrr > 0 ? formatAud(client.mrr) : "—"} hint={client.subscription} />
          <StatCard
            label="Workflows"
            value={String(client.workflows)}
            hint={`${deployments.filter((d) => d.status === "active").length} active`}
          />
          <StatCard
            label="This month"
            value={cost ? formatAud(cost.monthAud) : "—"}
            hint={cost ? `Budget ${formatAud(cost.budgetAud)} · ${Math.round((cost.monthAud / cost.budgetAud) * 100)}% used` : "No spend"}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Snapshot card */}
          <PanelCard title="Snapshot" className="lg:col-span-1">
            <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-[0.8125rem]">
              <dt className="text-[var(--color-muted)]">Contact</dt>
              <dd className="text-[var(--color-ink)]">{client.primaryContact}</dd>
              <dt className="text-[var(--color-muted)]">Email</dt>
              <dd className="font-mono text-[0.75rem] text-[var(--color-ink-2)]">{client.primaryEmail}</dd>
              <dt className="text-[var(--color-muted)]">Tier</dt>
              <dd>{client.subscription}</dd>
              <dt className="text-[var(--color-muted)]">Status</dt>
              <dd>
                {client.status === "active" ? (
                  <StatusPill variant="ink">Active</StatusPill>
                ) : client.status === "pilot" ? (
                  <StatusPill variant="signal">Pilot</StatusPill>
                ) : client.status === "audit" ? (
                  <StatusPill variant="signal">Audit</StatusPill>
                ) : (
                  <StatusPill>Paused</StatusPill>
                )}
              </dd>
              <dt className="text-[var(--color-muted)]">Renewal</dt>
              <dd className="font-mono text-[0.75rem]">{client.nextRenewal}</dd>
              <dt className="text-[var(--color-muted)]">Notes</dt>
              <dd className="text-[var(--color-ink-2)]">{client.notes}</dd>
            </dl>
          </PanelCard>

          {/* Active workflows */}
          <PanelCard title="Active workflows" className="lg:col-span-2">
            {deployments.length === 0 ? (
              <p className="font-sans text-[0.8125rem] text-[var(--color-muted)]">
                No workflows deployed for this client yet.
              </p>
            ) : (
              <DataTable className="border-0">
                <thead>
                  <tr>
                    <Th>Workflow</Th>
                    <Th>Status</Th>
                    <Th className="text-right">Runs (24h)</Th>
                    <Th className="text-right">Approvals</Th>
                    <Th className="text-right">Cost (24h)</Th>
                  </tr>
                </thead>
                <tbody>
                  {deployments.map((d) => (
                    <tr key={d.id}>
                      <Td>{d.workflowName}</Td>
                      <Td>
                        {d.status === "active" ? (
                          <StatusPill variant="ink">Active</StatusPill>
                        ) : (
                          <StatusPill>{d.status}</StatusPill>
                        )}
                      </Td>
                      <Td mono className="text-right">
                        {d.runs24h}
                      </Td>
                      <Td mono className="text-right">
                        {d.approvals24h} ({d.approvalRatePct}%)
                      </Td>
                      <Td mono className="text-right">
                        {formatAudPrecise(d.cost24hAud)}
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </DataTable>
            )}
          </PanelCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent approvals */}
          <PanelCard
            title="Recent approvals"
            action={
              <Link
                href="/operator/approvals"
                className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-ink)] hover:underline"
              >
                Queue ›
              </Link>
            }
          >
            {approvals.length === 0 ? (
              <p className="font-sans text-[0.8125rem] text-[var(--color-muted)]">No approvals yet.</p>
            ) : (
              <ul className="flex flex-col gap-2">
                {approvals.slice(0, 4).map((a) => (
                  <li key={a.id} className="border border-[var(--color-rule)] px-3 py-2">
                    <div className="flex items-center gap-2 mb-0.5">
                      <RiskPill tier={a.riskTier} />
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                        {a.workflow} · {ageLabel(a.ageMinutes)}
                      </span>
                    </div>
                    <Link
                      href={`/operator/approvals/${a.id}`}
                      className="font-sans text-[0.875rem] text-[var(--color-ink)] hover:underline"
                    >
                      {a.subject}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </PanelCard>

          {/* Pending incidents */}
          <PanelCard
            title="Incidents"
            action={
              <Link
                href="/operator/incidents"
                className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-ink)] hover:underline"
              >
                All ›
              </Link>
            }
          >
            {incidents.length === 0 ? (
              <p className="font-sans text-[0.8125rem] text-[var(--color-muted)]">
                No incidents on record.
              </p>
            ) : (
              <ul className="flex flex-col gap-2">
                {incidents.map((i) => (
                  <li key={i.id} className="border border-[var(--color-rule)] px-3 py-2">
                    <div className="flex items-center gap-2 mb-0.5">
                      <StatusPill variant={i.severity === "S2" ? "signal" : "outline"}>
                        {i.severity}
                      </StatusPill>
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                        {i.id} · {i.status} · {i.openedAt.split(" ")[0]}
                      </span>
                    </div>
                    <p className="font-sans text-[0.8125rem] text-[var(--color-ink-2)]">
                      {i.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </PanelCard>
        </div>

        {/* Cost breakdown */}
        {cost ? (
          <PanelCard title="This month — cost by workflow">
            <ul className="flex flex-col gap-2">
              {cost.byWorkflow.map((w) => {
                const pct = (w.spendAud / cost.monthAud) * 100;
                return (
                  <li key={w.workflowSlug}>
                    <div className="flex items-center justify-between text-[0.8125rem] mb-1">
                      <span>{w.workflowName}</span>
                      <span className="font-mono text-[0.75rem] text-[var(--color-ink-2)]">
                        {formatAud(w.spendAud)} · {Math.round(pct)}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-[var(--color-paper-2)] border border-[var(--color-rule)]">
                      <div
                        className="h-full bg-[var(--color-ink)]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Model {formatAud(cost.modelSpendAud)} · Tools {formatAud(cost.toolSpendAud)} · Budget {formatAud(cost.budgetAud)}
            </p>
          </PanelCard>
        ) : null}
      </div>
    </>
  );
}
