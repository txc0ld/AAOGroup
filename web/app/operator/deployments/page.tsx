import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHeader,
  FilterBar,
  SearchInput,
  FilterChip,
  StatusPill,
  OperatorButton,
  DataTable,
  Th,
  Td,
} from "@/components/operator/operator-ui";
import { MOCK_DEPLOYMENTS, getClient, formatAudPrecise } from "@/lib/operator-mock";

export const metadata: Metadata = { title: "Deployments" };

export default function OperatorDeploymentsPage() {
  const totalRuns = MOCK_DEPLOYMENTS.reduce((s, d) => s + d.runs24h, 0);
  const totalCost = MOCK_DEPLOYMENTS.reduce((s, d) => s + d.cost24hAud, 0);

  return (
    <>
      <PageHeader
        eyebrow="Workspace"
        title="Deployments"
        subtitle={`${MOCK_DEPLOYMENTS.length} active deployments across all clients. ${totalRuns} runs in the last 24h, ${formatAudPrecise(totalCost)} total spend.`}
      />

      <div className="px-6 py-5 space-y-4">
        <FilterBar>
          <SearchInput placeholder="Filter deployments…" />
          <FilterChip active>All</FilterChip>
          <FilterChip>Active</FilterChip>
          <FilterChip>Paused</FilterChip>
          <FilterChip>Deploying</FilterChip>
          <FilterChip>Errored</FilterChip>
        </FilterBar>

        <DataTable>
          <thead>
            <tr>
              <Th>Deployment</Th>
              <Th>Client</Th>
              <Th>Workflow</Th>
              <Th>Status</Th>
              <Th className="text-right">Runs (24h)</Th>
              <Th className="text-right">Approvals (24h)</Th>
              <Th className="text-right">Approval rate</Th>
              <Th className="text-right">Cost (24h)</Th>
              <Th className="text-right">Actions</Th>
            </tr>
          </thead>
          <tbody>
            {MOCK_DEPLOYMENTS.map((d) => {
              const client = getClient(d.clientSlug);
              return (
                <tr key={d.id} className="hover:bg-[var(--color-paper-2)] transition-colors">
                  <Td mono>{d.id}</Td>
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
                    {d.approvals24h}
                  </Td>
                  <Td mono className="text-right">
                    {d.approvalRatePct}%
                  </Td>
                  <Td mono className="text-right">
                    {formatAudPrecise(d.cost24hAud)}
                  </Td>
                  <Td className="text-right">
                    <div className="inline-flex gap-1">
                      <OperatorButton variant="ghost">Pause</OperatorButton>
                      <OperatorButton variant="ghost">Logs</OperatorButton>
                    </div>
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </DataTable>
      </div>
    </>
  );
}
