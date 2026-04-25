import type { Metadata } from "next";
import {
  PageHeader,
  FilterBar,
  SearchInput,
  FilterChip,
  OperatorButton,
} from "@/components/operator/operator-ui";
import { ApprovalRowCard } from "@/components/operator/approval-row-card";
import { MOCK_APPROVALS, MOCK_CLIENTS } from "@/lib/operator-mock";

export const metadata: Metadata = { title: "Approvals" };

export default function OperatorApprovalsPage() {
  const pending = MOCK_APPROVALS.filter((a) => a.status === "pending");
  const high = pending.filter((a) => a.riskTier >= 4).length;

  return (
    <>
      <PageHeader
        eyebrow="The wedge"
        title="Approval queue"
        subtitle={`${pending.length} pending across ${MOCK_CLIENTS.length} clients · ${high} high-risk (tier 4–5). Every action is yours to take.`}
        actions={
          <>
            <OperatorButton variant="ghost">Defer selected</OperatorButton>
            <OperatorButton variant="outline">Reject selected</OperatorButton>
            <OperatorButton variant="primary">Approve selected</OperatorButton>
          </>
        }
      />

      <div className="px-6 py-5 space-y-4">
        {/* Filter bar */}
        <FilterBar>
          <SearchInput placeholder="Search approvals…" />
          <FilterChip active>All clients</FilterChip>
          <FilterChip>Coastal Concrete</FilterChip>
          <FilterChip>Pilbara Services</FilterChip>
          <FilterChip>NPB</FilterChip>
          <FilterChip>Henderson Legal</FilterChip>
        </FilterBar>
        <FilterBar>
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-muted)] mr-2">
            Workflow
          </span>
          <FilterChip active>All</FilterChip>
          <FilterChip>Lead Intake</FilterChip>
          <FilterChip>Quote Prep</FilterChip>
          <FilterChip>Inbox Ops</FilterChip>
          <FilterChip>BAS Prep</FilterChip>
          <FilterChip>HSE Triage</FilterChip>
          <FilterChip>SOP Knowledge</FilterChip>
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-muted)] mx-2">
            Risk
          </span>
          <FilterChip>1–2</FilterChip>
          <FilterChip>3</FilterChip>
          <FilterChip>4–5</FilterChip>
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-muted)] mx-2">
            Age
          </span>
          <FilterChip>{`< 1h`}</FilterChip>
          <FilterChip>1–4h</FilterChip>
          <FilterChip>{`> 4h`}</FilterChip>
        </FilterBar>

        {/* Bulk action header */}
        <div className="flex items-center justify-between border border-[var(--color-rule)] bg-[var(--color-paper-2)] px-3 py-2">
          <label className="flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-ink)]">
            <input type="checkbox" className="h-3.5 w-3.5" /> Select all ({pending.length})
          </label>
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Sorted by risk · then age
          </span>
        </div>

        {/* Approval cards */}
        <ul className="flex flex-col gap-3">
          {pending
            .sort((a, b) => b.riskTier - a.riskTier || a.ageMinutes - b.ageMinutes)
            .map((a) => (
              <li key={a.id}>
                <ApprovalRowCard approval={a} />
              </li>
            ))}
        </ul>

        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          Showing {pending.length} of {pending.length} pending. Approved/rejected items archived after 30 days.
        </p>
      </div>
    </>
  );
}
