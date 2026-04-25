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
import { MOCK_CLIENTS, formatAud } from "@/lib/operator-mock";

export const metadata: Metadata = { title: "Clients" };

export default function OperatorClientsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Workspace"
        title="Clients"
        subtitle={`${MOCK_CLIENTS.length} clients across Western Australia. Includes active, pilot, audit, and paused engagements.`}
        actions={<OperatorButton variant="primary">+ New client</OperatorButton>}
      />

      <div className="px-6 py-5 space-y-4">
        <FilterBar>
          <SearchInput placeholder="Search by name, ABN, industry, or contact…" />
          <FilterChip active>All</FilterChip>
          <FilterChip>Active</FilterChip>
          <FilterChip>Pilot</FilterChip>
          <FilterChip>Audit</FilterChip>
          <FilterChip>Paused</FilterChip>
        </FilterBar>

        <DataTable>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Industry</Th>
              <Th>Region</Th>
              <Th>Tier</Th>
              <Th className="text-right">MRR</Th>
              <Th className="text-right">Workflows</Th>
              <Th>Status</Th>
              <Th>Started</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>
            {MOCK_CLIENTS.map((c) => (
              <tr key={c.slug} className="hover:bg-[var(--color-paper-2)] transition-colors">
                <Td>
                  <Link
                    href={`/operator/clients/${c.slug}`}
                    className="font-medium text-[var(--color-ink)] hover:underline"
                  >
                    {c.name}
                  </Link>
                  <p className="font-mono text-[0.6875rem] text-[var(--color-muted)] mt-0.5">
                    ABN {c.abn}
                  </p>
                </Td>
                <Td>{c.industry}</Td>
                <Td>{c.region}</Td>
                <Td mono>{c.subscription}</Td>
                <Td mono className="text-right">
                  {c.mrr > 0 ? formatAud(c.mrr) : "—"}
                </Td>
                <Td mono className="text-right">
                  {c.workflows}
                </Td>
                <Td>
                  {c.status === "active" ? (
                    <StatusPill variant="ink">Active</StatusPill>
                  ) : c.status === "pilot" ? (
                    <StatusPill variant="signal">Pilot</StatusPill>
                  ) : c.status === "audit" ? (
                    <StatusPill variant="signal">Audit</StatusPill>
                  ) : (
                    <StatusPill>Paused</StatusPill>
                  )}
                </Td>
                <Td mono>{c.startedOn}</Td>
                <Td className="text-right">
                  <Link
                    href={`/operator/clients/${c.slug}`}
                    className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-ink)] hover:underline"
                  >
                    Open ›
                  </Link>
                </Td>
              </tr>
            ))}
          </tbody>
        </DataTable>

        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          Showing {MOCK_CLIENTS.length} of {MOCK_CLIENTS.length}
        </p>
      </div>
    </>
  );
}
