import type { Metadata } from "next";
import {
  PageHeader,
  StatusPill,
  OperatorButton,
  DataTable,
  Th,
  Td,
  FilterBar,
  FilterChip,
  SearchInput,
} from "@/components/operator/operator-ui";
import { MOCK_INTEGRATIONS } from "@/lib/operator-mock";

export const metadata: Metadata = { title: "Integrations" };

export default function OperatorIntegrationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Operations"
        title="Integrations"
        subtitle="Per-provider connector management. Scopes are minimum required; revoke anytime."
        actions={<OperatorButton variant="primary">+ Add provider</OperatorButton>}
      />

      <div className="px-6 py-5 space-y-4">
        <FilterBar>
          <SearchInput placeholder="Filter providers…" />
          <FilterChip active>All</FilterChip>
          <FilterChip>Healthy</FilterChip>
          <FilterChip>Degraded</FilterChip>
          <FilterChip>Error</FilterChip>
        </FilterBar>

        <DataTable>
          <thead>
            <tr>
              <Th>Provider</Th>
              <Th>Category</Th>
              <Th className="text-right">Clients connected</Th>
              <Th>Scopes</Th>
              <Th>Status</Th>
              <Th>Last sync</Th>
              <Th className="text-right">Actions</Th>
            </tr>
          </thead>
          <tbody>
            {MOCK_INTEGRATIONS.map((i) => (
              <tr key={i.provider} className="hover:bg-[var(--color-paper-2)] transition-colors">
                <Td>
                  <span className="font-medium text-[var(--color-ink)]">{i.provider}</span>
                </Td>
                <Td mono>{i.category}</Td>
                <Td mono className="text-right">
                  {i.clientsConnected}
                </Td>
                <Td>
                  {i.scopes.length === 0 ? (
                    <span className="font-mono text-[0.6875rem] text-[var(--color-muted)]">—</span>
                  ) : (
                    <div className="flex flex-wrap gap-1">
                      {i.scopes.map((s) => (
                        <code
                          key={s}
                          className="font-mono text-[0.6875rem] px-1.5 py-0.5 border border-[var(--color-rule)] bg-[var(--color-paper-2)] text-[var(--color-ink-2)]"
                        >
                          {s}
                        </code>
                      ))}
                    </div>
                  )}
                </Td>
                <Td>
                  {i.status === "healthy" ? (
                    <StatusPill variant="ink">Healthy</StatusPill>
                  ) : i.status === "degraded" ? (
                    <StatusPill variant="signal">Degraded</StatusPill>
                  ) : (
                    <StatusPill variant="signal">Error</StatusPill>
                  )}
                </Td>
                <Td mono className="whitespace-nowrap">
                  {i.lastSync}
                </Td>
                <Td className="text-right">
                  <div className="inline-flex gap-1">
                    <OperatorButton variant="ghost">Configure</OperatorButton>
                    <OperatorButton variant="ghost">Revoke</OperatorButton>
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </DataTable>

        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          All OAuth tokens stored encrypted in ap-southeast-2 (Sydney). Sovereign data residency policy applies.
        </p>
      </div>
    </>
  );
}
