import type { Metadata } from "next";
import {
  PageHeader,
  PanelCard,
  StatusPill,
  RiskPill,
  DataTable,
  Th,
  Td,
} from "@/components/operator/operator-ui";

export const metadata: Metadata = { title: "Governance" };

const APPROVED_USE_CASES = [
  "Customer email triage and drafting (with operator approval)",
  "Lead intake — extract, draft reply, queue for approval",
  "Quote preparation — line-item drafts with operator review",
  "Inbox operations — overnight triage and morning digest",
  "Internal SOP Q&A grounded in client document corpus (with citation)",
  "Supplier statement reconciliation against ledger",
  "Quarterly BAS preparation (registered BAS agent must approve)",
  "HSE incident triage with dual approval required for tier 5",
];

const PROHIBITED_USE_CASES = [
  "Any external sending without an operator approval gate",
  "Legal advice generation (intake-triage may classify and refer only)",
  "Medical advice generation",
  "Direct payment instructions to third parties",
  "Storage or processing of credit card or bank login credentials",
  "Use cases requiring client data to leave Australian regions",
  "Workflows targeting individuals based on protected attributes",
];

const MODEL_PROVIDERS = [
  {
    provider: "Amazon Bedrock — claude-sonnet (Sydney)",
    region: "ap-southeast-2",
    use: "Default for all approval-gated drafting workflows",
    status: "approved" as const,
  },
  {
    provider: "Amazon Bedrock — claude-haiku (Sydney)",
    region: "ap-southeast-2",
    use: "SOP knowledge / low-cost retrieval workflows",
    status: "approved" as const,
  },
  {
    provider: "Azure OpenAI — gpt-4.1 (Australia East)",
    region: "australiaeast",
    use: "Backup for inbox-ops; only when sovereign Bedrock route fails",
    status: "approved" as const,
  },
  {
    provider: "Anthropic API direct (US)",
    region: "us-east-1",
    use: "PROHIBITED — no client data may leave Australia",
    status: "prohibited" as const,
  },
  {
    provider: "OpenAI API direct (US)",
    region: "us-east-1",
    use: "PROHIBITED — no client data may leave Australia",
    status: "prohibited" as const,
  },
];

const APPROVAL_MATRIX = [
  { tier: 1 as const, approver: "Self-serve agent", note: "Internal answers, citations, no external action" },
  { tier: 2 as const, approver: "Operator (single)", note: "External email drafts, low-impact replies" },
  { tier: 3 as const, approver: "Operator (single)", note: "Quotes, scheduling, mid-impact external sends" },
  { tier: 4 as const, approver: "Operator + named domain expert", note: "Financial outputs, BAS lodgement, scope referrals" },
  { tier: 5 as const, approver: "Operator + named lead (dual)", note: "HSE, legal, anything reputational/safety" },
];

const SEVERITY = [
  { sev: "S1", desc: "Customer data exposure, tier-5 misfire, or any safety incident", sla: "1h response · 4h mitigation" },
  { sev: "S2", desc: "Workflow blocked, integration outage, financial-output error caught at gate", sla: "4h response · 24h mitigation" },
  { sev: "S3", desc: "Output rail flag with no external impact, single-client degradation", sla: "1 business day response" },
  { sev: "S4", desc: "Cosmetic, low-impact, opportunistic improvement", sla: "Best effort" },
];

export default function OperatorGovernancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Library"
        title="Governance"
        subtitle="Policies, model/provider register, approval matrix, risk and incident references. Read-only configured state."
      />

      <div className="px-6 py-5 space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <PanelCard title="Approved use cases">
            <ul className="flex flex-col gap-1.5">
              {APPROVED_USE_CASES.map((u) => (
                <li
                  key={u}
                  className="font-serif text-[0.875rem] leading-[1.5] text-[var(--color-ink-2)] flex gap-2"
                >
                  <span aria-hidden className="text-[var(--color-ink)] mt-0.5">
                    ✓
                  </span>
                  {u}
                </li>
              ))}
            </ul>
          </PanelCard>

          <PanelCard title="Prohibited use cases">
            <ul className="flex flex-col gap-1.5">
              {PROHIBITED_USE_CASES.map((u) => (
                <li
                  key={u}
                  className="font-serif text-[0.875rem] leading-[1.5] text-[var(--color-ink-2)] flex gap-2"
                >
                  <span
                    aria-hidden
                    className="mt-0.5"
                    style={{ color: "var(--color-signal)" }}
                  >
                    ×
                  </span>
                  {u}
                </li>
              ))}
            </ul>
          </PanelCard>
        </div>

        <PanelCard title="Model & provider register">
          <DataTable className="border-0">
            <thead>
              <tr>
                <Th>Provider</Th>
                <Th>Region</Th>
                <Th>Use</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              {MODEL_PROVIDERS.map((m) => (
                <tr key={m.provider}>
                  <Td>{m.provider}</Td>
                  <Td mono>{m.region}</Td>
                  <Td className="max-w-[40ch]">{m.use}</Td>
                  <Td>
                    {m.status === "approved" ? (
                      <StatusPill variant="ink">Approved</StatusPill>
                    ) : (
                      <StatusPill variant="signal">Prohibited</StatusPill>
                    )}
                  </Td>
                </tr>
              ))}
            </tbody>
          </DataTable>
        </PanelCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <PanelCard title="Approval matrix — defaults">
            <DataTable className="border-0">
              <thead>
                <tr>
                  <Th>Tier</Th>
                  <Th>Approver</Th>
                  <Th>Examples</Th>
                </tr>
              </thead>
              <tbody>
                {APPROVAL_MATRIX.map((r) => (
                  <tr key={r.tier}>
                    <Td>
                      <RiskPill tier={r.tier} />
                    </Td>
                    <Td className="whitespace-nowrap">{r.approver}</Td>
                    <Td>{r.note}</Td>
                  </tr>
                ))}
              </tbody>
            </DataTable>
          </PanelCard>

          <PanelCard title="Incident severity reference">
            <DataTable className="border-0">
              <thead>
                <tr>
                  <Th>Severity</Th>
                  <Th>Definition</Th>
                  <Th>SLA</Th>
                </tr>
              </thead>
              <tbody>
                {SEVERITY.map((s) => (
                  <tr key={s.sev}>
                    <Td>
                      {s.sev === "S1" || s.sev === "S2" ? (
                        <StatusPill variant="signal">{s.sev}</StatusPill>
                      ) : (
                        <StatusPill variant="outline">{s.sev}</StatusPill>
                      )}
                    </Td>
                    <Td>{s.desc}</Td>
                    <Td mono className="whitespace-nowrap">
                      {s.sla}
                    </Td>
                  </tr>
                ))}
              </tbody>
            </DataTable>
          </PanelCard>
        </div>

        <PanelCard title="Risk tier reference">
          <p className="font-serif text-[0.875rem] leading-[1.55] text-[var(--color-ink-2)]">
            Risk tiers reflect the consequence of a wrong action, not the difficulty of the task. Tier 1
            outputs are self-serve and reversible. Tier 5 outputs are irreversible, regulated, or impact
            safety — and always require dual approval. Every workflow is classified during the audit and
            re-classified at each monthly review.
          </p>
          <p className="mt-3 font-mono text-[0.75rem] text-[var(--color-muted)]">
            Reference: AAO Sovereign AI Operations Framework · Section 4 (Risk classification)
          </p>
        </PanelCard>
      </div>
    </>
  );
}
