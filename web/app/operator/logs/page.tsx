import type { Metadata } from "next";
import {
  PageHeader,
  FilterBar,
  SearchInput,
  FilterChip,
  StatusPill,
  DataTable,
  Th,
  Td,
} from "@/components/operator/operator-ui";
import { MOCK_LOGS, getClient, formatAudPrecise } from "@/lib/operator-mock";

export const metadata: Metadata = { title: "Logs" };

export default function OperatorLogsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Operations"
        title="Audit log"
        subtitle={`${MOCK_LOGS.length} most recent entries. Every model call, tool call, approval decision, rail trip, and integration sync is recorded.`}
      />

      <div className="px-6 py-5 space-y-4">
        <FilterBar>
          <SearchInput placeholder="Search by id, client, target, action…" />
          <FilterChip active>All clients</FilterChip>
          <FilterChip>Coastal Concrete</FilterChip>
          <FilterChip>Pilbara Services</FilterChip>
          <FilterChip>NPB</FilterChip>
          <FilterChip>Henderson Legal</FilterChip>
        </FilterBar>
        <FilterBar>
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-muted)] mr-2">
            Actor
          </span>
          <FilterChip active>All</FilterChip>
          <FilterChip>Operator</FilterChip>
          <FilterChip>Agent</FilterChip>
          <FilterChip>System</FilterChip>
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-muted)] mx-2">
            Status
          </span>
          <FilterChip>OK</FilterChip>
          <FilterChip>Held</FilterChip>
          <FilterChip>Rail-flag</FilterChip>
          <FilterChip>Error</FilterChip>
        </FilterBar>

        <DataTable>
          <thead>
            <tr>
              <Th>Timestamp (AWST)</Th>
              <Th>Client</Th>
              <Th>Workflow</Th>
              <Th>Actor</Th>
              <Th>Action</Th>
              <Th>Target</Th>
              <Th>Status</Th>
              <Th className="text-right">Cost</Th>
              <Th className="text-right">ID</Th>
            </tr>
          </thead>
          <tbody>
            {MOCK_LOGS.map((l) => {
              const client = getClient(l.clientSlug);
              return (
                <tr key={l.id} className="hover:bg-[var(--color-paper-2)] transition-colors">
                  <Td mono className="whitespace-nowrap">
                    {l.timestamp}
                  </Td>
                  <Td className="whitespace-nowrap">{client?.name}</Td>
                  <Td>{l.workflow}</Td>
                  <Td mono>{l.actor}</Td>
                  <Td mono>{l.action}</Td>
                  <Td mono className="text-[var(--color-ink-2)] max-w-[28ch] truncate">
                    {l.target}
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
                      <StatusPill>Rejected</StatusPill>
                    )}
                  </Td>
                  <Td mono className="text-right">
                    {l.costAud > 0 ? formatAudPrecise(l.costAud) : "—"}
                  </Td>
                  <Td mono className="text-right text-[var(--color-muted)]">
                    {l.id}
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </DataTable>

        <div className="flex items-center justify-between">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Showing {MOCK_LOGS.length} of 58,721 lifetime entries · paginated
          </p>
          <div className="flex gap-1">
            <button
              type="button"
              className="border border-[var(--color-rule)] px-2 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]"
            >
              ‹ Prev
            </button>
            <button
              type="button"
              className="border border-[var(--color-ink)] px-2 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]"
            >
              Next ›
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
