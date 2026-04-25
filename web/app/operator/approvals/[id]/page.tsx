import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PageHeader,
  PanelCard,
  StatusPill,
  RiskPill,
  OperatorButton,
} from "@/components/operator/operator-ui";
import {
  MOCK_APPROVALS,
  getApproval,
  getClient,
  ageLabel,
  formatAudPrecise,
} from "@/lib/operator-mock";
import { cn } from "@/lib/cn";

export function generateStaticParams() {
  // Build the 3 most representative pending approvals: 1 high-risk, 1 mid, 1 low
  return MOCK_APPROVALS.filter((a) => ["apv-2041", "apv-2044", "apv-2045"].includes(a.id)).map(
    (a) => ({ id: a.id }),
  );
}

type Params = { id: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const a = getApproval(id);
  return { title: a ? `Approval ${a.id}` : "Approval" };
}

export default async function ApprovalDetailPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const approval = getApproval(id);
  if (!approval) notFound();
  const client = getClient(approval.clientSlug);
  const isHigh = approval.riskTier >= 4;

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { href: "/operator", label: "Operator" },
          { href: "/operator/approvals", label: "Approvals" },
          { label: approval.id },
        ]}
        eyebrow={`${client?.name} · ${approval.workflow} · ${ageLabel(approval.ageMinutes)}`}
        title={approval.subject}
        actions={
          <>
            <OperatorButton variant="ghost">Reject</OperatorButton>
            <OperatorButton variant="outline">Edit</OperatorButton>
            <OperatorButton variant="ghost">Escalate</OperatorButton>
            <OperatorButton variant="primary">Approve</OperatorButton>
          </>
        }
      />

      <div className="px-6 py-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Main pane */}
        <div className="lg:col-span-2 space-y-5">
          {/* Status strip */}
          <div className="flex flex-wrap items-center gap-2">
            <StatusPill variant="signal">Awaiting approval</StatusPill>
            <RiskPill tier={approval.riskTier} />
            <StatusPill>{approval.id}</StatusPill>
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Cost so far · {formatAudPrecise(approval.costAud)}
            </span>
          </div>

          {/* Draft body */}
          <PanelCard title="Full draft">
            <div className="border-l border-[var(--color-rule)] pl-4">
              {approval.bodyLines.map((line, i) => (
                <p
                  key={i}
                  className={cn(
                    "font-serif text-[0.9375rem] leading-[1.55] text-[var(--color-ink-2)]",
                    i > 0 && "mt-3",
                  )}
                >
                  {line}
                </p>
              ))}
            </div>
            {approval.flag ? (
              <p
                className="mt-4 border px-3 py-2 font-mono text-[0.75rem]"
                style={{ color: "var(--color-signal)", borderColor: "var(--color-signal)" }}
              >
                ⚠ {approval.flag}
              </p>
            ) : null}
          </PanelCard>

          {/* On approve — diff */}
          <PanelCard title="On approve — what happens">
            <ul className="flex flex-col gap-1.5">
              {approval.diff.map((d, i) => (
                <li
                  key={i}
                  className="font-mono text-[0.75rem] leading-[1.6] text-[var(--color-ink-2)]"
                >
                  → {d}
                </li>
              ))}
            </ul>
          </PanelCard>

          {/* Source context — collapsible */}
          <PanelCard title="Source context">
            <details open>
              <summary className="cursor-pointer list-none font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-ink)] hover:underline">
                Show original input [−]
              </summary>
              <dl className="mt-3 grid grid-cols-[140px_1fr] gap-x-3 gap-y-2 text-[0.8125rem]">
                {approval.sourceContext.map((s) => (
                  <div key={s.label} className="contents">
                    <dt className="text-[var(--color-muted)] font-mono text-[0.6875rem] uppercase tracking-[0.18em]">
                      {s.label}
                    </dt>
                    <dd className="text-[var(--color-ink-2)]">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </details>
          </PanelCard>

          {/* Escalation note */}
          <PanelCard title="Escalation note (optional)">
            <textarea
              placeholder="Why are you escalating? Recorded in the audit log."
              rows={3}
              className={cn(
                "w-full border border-[var(--color-rule)] bg-[var(--color-paper)] p-3",
                "font-sans text-[0.8125rem] text-[var(--color-ink)] placeholder:text-[var(--color-muted)]",
                "focus:outline-none focus:border-[var(--color-ink)]",
              )}
            />
          </PanelCard>
        </div>

        {/* Sidebar metadata */}
        <aside className="space-y-5">
          <PanelCard title="Generated by">
            <p className="font-sans text-[0.875rem] text-[var(--color-ink)]">{approval.generatedBy}</p>
            <p className="mt-1 font-mono text-[0.6875rem] text-[var(--color-muted)] leading-[1.5]">
              {approval.modelLine}
            </p>
          </PanelCard>

          <PanelCard title="Rails fired">
            <ul className="flex flex-col gap-1">
              {approval.rails.map((r) => (
                <li
                  key={r}
                  className="font-mono text-[0.6875rem] text-[var(--color-ink-2)] border border-[var(--color-rule)] px-2 py-1 inline-block"
                >
                  {r}
                </li>
              ))}
            </ul>
            {isHigh ? (
              <p
                className="mt-3 font-mono text-[0.6875rem]"
                style={{ color: "var(--color-signal)" }}
              >
                Tier {approval.riskTier} requires elevated approval policy.
              </p>
            ) : null}
          </PanelCard>

          <PanelCard title="Audit metadata">
            <dl className="grid grid-cols-[80px_1fr] gap-x-2 gap-y-1.5 text-[0.75rem]">
              <dt className="text-[var(--color-muted)] font-mono uppercase tracking-[0.18em]">ID</dt>
              <dd className="font-mono">{approval.id}</dd>
              <dt className="text-[var(--color-muted)] font-mono uppercase tracking-[0.18em]">Client</dt>
              <dd>
                <Link
                  href={`/operator/clients/${approval.clientSlug}`}
                  className="hover:underline"
                >
                  {client?.name}
                </Link>
              </dd>
              <dt className="text-[var(--color-muted)] font-mono uppercase tracking-[0.18em]">Workflow</dt>
              <dd>{approval.workflow}</dd>
              <dt className="text-[var(--color-muted)] font-mono uppercase tracking-[0.18em]">Risk</dt>
              <dd>Tier {approval.riskTier}</dd>
              <dt className="text-[var(--color-muted)] font-mono uppercase tracking-[0.18em]">Cost</dt>
              <dd className="font-mono">{formatAudPrecise(approval.costAud)}</dd>
              <dt className="text-[var(--color-muted)] font-mono uppercase tracking-[0.18em]">Region</dt>
              <dd className="font-mono">ap-southeast-2</dd>
            </dl>
          </PanelCard>
        </aside>
      </div>
    </>
  );
}
