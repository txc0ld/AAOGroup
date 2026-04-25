import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHeader,
  PanelCard,
  StatusPill,
  RiskPill,
  OperatorButton,
  DataTable,
  Th,
  Td,
} from "@/components/operator/operator-ui";
import {
  MOCK_WORKFLOW_TEMPLATES,
  MOCK_DEPLOYMENTS,
  getClient,
  formatAudPrecise,
} from "@/lib/operator-mock";

export const metadata: Metadata = { title: "Workflows" };

export default function OperatorWorkflowsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Workspace"
        title="Workflows"
        subtitle="Templates plus all active per-client deployments. Each template is a tested pattern from PRD §10.2."
        actions={<OperatorButton variant="primary">+ New template</OperatorButton>}
      />

      <div className="px-6 py-5 space-y-6">
        <PanelCard title={`Templates — ${MOCK_WORKFLOW_TEMPLATES.length}`}>
          <DataTable className="border-0">
            <thead>
              <tr>
                <Th>Name</Th>
                <Th>Description</Th>
                <Th>Default risk</Th>
                <Th className="text-right">Active deployments</Th>
                <Th></Th>
              </tr>
            </thead>
            <tbody>
              {MOCK_WORKFLOW_TEMPLATES.map((t) => (
                <tr key={t.slug}>
                  <Td>
                    <span className="font-medium text-[var(--color-ink)]">{t.name}</span>
                    <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-muted)] mt-0.5">
                      {t.category}
                    </p>
                  </Td>
                  <Td className="max-w-[40ch]">{t.description}</Td>
                  <Td>
                    <RiskPill tier={t.defaultRiskTier} />
                  </Td>
                  <Td mono className="text-right">
                    {t.activeDeployments}
                  </Td>
                  <Td className="text-right">
                    <OperatorButton variant="outline">Deploy to client</OperatorButton>
                  </Td>
                </tr>
              ))}
            </tbody>
          </DataTable>
        </PanelCard>

        <PanelCard
          title={`Active deployments — ${MOCK_DEPLOYMENTS.length}`}
          action={
            <Link
              href="/operator/deployments"
              className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-ink)] hover:underline"
            >
              Full view ›
            </Link>
          }
        >
          <DataTable className="border-0">
            <thead>
              <tr>
                <Th>Client</Th>
                <Th>Workflow</Th>
                <Th>Status</Th>
                <Th className="text-right">Runs (24h)</Th>
                <Th className="text-right">Approval rate</Th>
                <Th className="text-right">Cost (24h)</Th>
              </tr>
            </thead>
            <tbody>
              {MOCK_DEPLOYMENTS.map((d) => {
                const client = getClient(d.clientSlug);
                return (
                  <tr key={d.id}>
                    <Td>
                      <Link
                        href={`/operator/clients/${d.clientSlug}`}
                        className="hover:underline text-[var(--color-ink)]"
                      >
                        {client?.name}
                      </Link>
                    </Td>
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
                      {d.approvalRatePct}%
                    </Td>
                    <Td mono className="text-right">
                      {formatAudPrecise(d.cost24hAud)}
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </DataTable>
        </PanelCard>
      </div>
    </>
  );
}
