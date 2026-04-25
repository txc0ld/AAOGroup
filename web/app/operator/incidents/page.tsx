import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHeader,
  FilterBar,
  FilterChip,
  SearchInput,
  StatusPill,
  OperatorButton,
  DataTable,
  Th,
  Td,
} from "@/components/operator/operator-ui";
import { MOCK_INCIDENTS, getClient } from "@/lib/operator-mock";

export const metadata: Metadata = { title: "Incidents" };

export default function OperatorIncidentsPage() {
  const open = MOCK_INCIDENTS.filter((i) => i.status !== "resolved").length;

  return (
    <>
      <PageHeader
        eyebrow="Operations"
        title="Incidents"
        subtitle={`${open} open · ${MOCK_INCIDENTS.length - open} resolved (this quarter). All severities tracked per the incident response runbook.`}
        actions={<OperatorButton variant="primary">+ Open incident</OperatorButton>}
      />

      <div className="px-6 py-5 space-y-4">
        <FilterBar>
          <SearchInput placeholder="Search incidents…" />
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-muted)] mx-2">
            Severity
          </span>
          <FilterChip active>All</FilterChip>
          <FilterChip>S1</FilterChip>
          <FilterChip>S2</FilterChip>
          <FilterChip>S3</FilterChip>
          <FilterChip>S4</FilterChip>
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-muted)] mx-2">
            Status
          </span>
          <FilterChip>Open</FilterChip>
          <FilterChip>Investigating</FilterChip>
          <FilterChip>Mitigated</FilterChip>
          <FilterChip>Resolved</FilterChip>
        </FilterBar>

        <DataTable>
          <thead>
            <tr>
              <Th>ID</Th>
              <Th>Severity</Th>
              <Th>Client</Th>
              <Th>Workflow</Th>
              <Th>Description</Th>
              <Th>Status</Th>
              <Th>Owner</Th>
              <Th>Opened</Th>
              <Th>Resolved</Th>
            </tr>
          </thead>
          <tbody>
            {MOCK_INCIDENTS.map((i) => {
              const client = getClient(i.clientSlug);
              const isHigh = i.severity === "S1" || i.severity === "S2";
              return (
                <tr key={i.id} className="hover:bg-[var(--color-paper-2)] transition-colors">
                  <Td mono>{i.id}</Td>
                  <Td>
                    {isHigh ? (
                      <StatusPill variant="signal">{i.severity}</StatusPill>
                    ) : (
                      <StatusPill variant="outline">{i.severity}</StatusPill>
                    )}
                  </Td>
                  <Td>
                    <Link
                      href={`/operator/clients/${i.clientSlug}`}
                      className="hover:underline text-[var(--color-ink)]"
                    >
                      {client?.name}
                    </Link>
                  </Td>
                  <Td>{i.workflow}</Td>
                  <Td className="max-w-[40ch]">{i.description}</Td>
                  <Td>
                    {i.status === "resolved" ? (
                      <StatusPill>Resolved</StatusPill>
                    ) : i.status === "mitigated" ? (
                      <StatusPill variant="outline">Mitigated</StatusPill>
                    ) : (
                      <StatusPill variant="signal">{i.status}</StatusPill>
                    )}
                  </Td>
                  <Td>{i.owner}</Td>
                  <Td mono className="whitespace-nowrap">
                    {i.openedAt}
                  </Td>
                  <Td mono className="whitespace-nowrap text-[var(--color-muted)]">
                    {i.resolvedAt ?? "—"}
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
