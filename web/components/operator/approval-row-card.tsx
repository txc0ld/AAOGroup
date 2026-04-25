import Link from "next/link";
import { cn } from "@/lib/cn";
import {
  StatusPill,
  RiskPill,
  OperatorButton,
} from "@/components/operator/operator-ui";
import { type MockApproval, getClient, ageLabel } from "@/lib/operator-mock";

// Dashboard-density adaptation of components/demo/approval-card.tsx.
// Smaller padding, no animation, designed to be scanned in a queue.
export function ApprovalRowCard({ approval }: { approval: MockApproval }) {
  const client = getClient(approval.clientSlug);
  const isHigh = approval.riskTier >= 4;

  return (
    <article
      className={cn(
        "border bg-[var(--color-paper)]",
        "p-4",
        isHigh ? "border-[var(--color-rule)]" : "border-[var(--color-rule)]",
      )}
      style={isHigh ? { borderColor: "var(--color-signal)" } : undefined}
    >
      {/* Header row */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[var(--color-rule)]">
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="checkbox"
            aria-label={`Select ${approval.id}`}
            className="h-3.5 w-3.5 border border-[var(--color-rule)]"
          />
          <StatusPill variant="signal">Awaiting approval</StatusPill>
          <RiskPill tier={approval.riskTier} />
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            {approval.id} · {client?.name} · {approval.workflow} · {ageLabel(approval.ageMinutes)}
          </span>
        </div>
        <Link
          href={`/operator/approvals/${approval.id}`}
          className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-ink)] hover:underline"
        >
          Open detail ›
        </Link>
      </div>

      {/* Subject */}
      <h3 className="mt-3 font-sans text-[1rem] tracking-[-0.005em] leading-[1.3] text-[var(--color-ink)]">
        {approval.subject}
      </h3>

      {/* Draft preview — first two body lines */}
      <div className="mt-2 border-l border-[var(--color-rule)] pl-3">
        {approval.bodyLines.slice(0, 2).map((line, i) => (
          <p
            key={i}
            className={cn(
              "font-serif text-[0.8125rem] leading-[1.5] text-[var(--color-ink-2)]",
              i > 0 && "mt-1.5",
            )}
          >
            {line}
          </p>
        ))}
        {approval.bodyLines.length > 2 ? (
          <p className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            +{approval.bodyLines.length - 2} more line(s)
          </p>
        ) : null}
      </div>

      {/* Optional flag */}
      {approval.flag ? (
        <p
          className="mt-3 border px-2.5 py-1.5 font-mono text-[0.6875rem]"
          style={{ color: "var(--color-signal)", borderColor: "var(--color-signal)" }}
        >
          ⚠ {approval.flag}
        </p>
      ) : null}

      {/* Metadata + diff strip */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[0.625rem] tracking-[0.04em] text-[var(--color-muted)]">
          {approval.modelLine}
        </p>
        <details className="group">
          <summary className="cursor-pointer list-none font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-ink)] hover:underline">
            On approve — what happens [+]
          </summary>
          <ul className="mt-2 border-t border-[var(--color-rule)] pt-2">
            {approval.diff.map((d, i) => (
              <li
                key={i}
                className="font-mono text-[0.6875rem] leading-[1.5] text-[var(--color-ink-2)]"
              >
                → {d}
              </li>
            ))}
          </ul>
        </details>
      </div>

      {/* Actions */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <OperatorButton variant="primary">Approve</OperatorButton>
        <OperatorButton variant="outline">Edit</OperatorButton>
        <OperatorButton variant="ghost">Reject</OperatorButton>
        <OperatorButton variant="ghost">Escalate</OperatorButton>
      </div>
    </article>
  );
}
