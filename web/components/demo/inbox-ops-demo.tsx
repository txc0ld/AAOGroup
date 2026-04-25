"use client";

import { useState } from "react";
import { DemoShell, type DemoStepDef } from "./demo-shell";
import { DemoStep } from "./demo-step";
import { InboxItem } from "./inbox-item";
import { DraftReveal } from "./draft-reveal";
import { ApprovalCard, ApprovalConfirmation } from "./approval-card";
import { cn } from "@/lib/cn";

const INBOX = [
  { from: "Jenna Walsh", subject: "Quote follow-up — kitchen reno?", time: "8:41pm", lane: "customer" },
  { from: "BCF Supplies", subject: "Statement Mar-25 attached", time: "8:22pm", lane: "supplier" },
  { from: "Reece Plumbing", subject: "PO #4421 confirmation", time: "7:58pm", lane: "supplier" },
  { from: "Master Builders WA", subject: "Newsletter: April training schedule", time: "7:31pm", lane: "newsletter" },
  { from: "Sarah (ops)", subject: "Tomorrow's run sheet — one change", time: "6:12pm", lane: "internal" },
  { from: "Tom Beazley", subject: "Re: rear shed slab — can we lock in?", time: "5:48pm", lane: "customer" },
  { from: "noreply@trades.com.au", subject: "5 new leads matched your filter", time: "4:22pm", lane: "newsletter" },
];

const TRIAGE_BANDS = [
  {
    label: "Customer enquiries",
    count: 4,
    note: "priority — drafts queued for your approval",
    intent: "draft",
  },
  {
    label: "Supplier emails",
    count: 6,
    note: "actionable — invoice/PO matched, draft replies for 4",
    intent: "action",
  },
  {
    label: "Newsletters",
    count: 8,
    note: "auto-archive under policy",
    intent: "archive",
  },
  {
    label: "Internal",
    count: 3,
    note: "1 escalated to Sarah (ops) at 9:02pm",
    intent: "escalate",
  },
  {
    label: "Spam",
    count: 2,
    note: "auto-deleted under policy",
    intent: "delete",
  },
];

const REPLY_LINES = [
  "Hi Tom, yep — happy to lock that in.",
  "Pencilling you in for the week starting Mon 14 April. I'll send a final confirmation and the deposit invoice on Thursday once I've checked the concrete supply window.",
  "One thing: the engineering drawing you sent had the slab at 120mm, but the spec on the planning approval calls for 100mm. Easy fix either way — do you want me to engineer for 120 (slightly more material, sturdier for what you've described) or stay at 100 (cheaper, matches the approval)?",
  "Cheers, Daniel",
];

const DIGEST_ITEMS = [
  { label: "Priority items needing your reply", value: "4", note: "2 require reply by 11am AWST" },
  { label: "Actioned automatically overnight", value: "14", note: "8 archives · 4 supplier confirmations · 2 spam" },
  { label: "Escalations to managers", value: "1", note: "Sarah (ops) — phone alert sent 9:02pm" },
  { label: "Items awaiting approval in queue", value: "2", note: "this customer reply + 1 supplier credit note" },
];

export function InboxOpsDemo() {
  const [approved, setApproved] = useState(false);

  const steps: DemoStepDef[] = [
    {
      id: "trigger",
      label: "Trigger",
      autoMs: 2200,
      render: () => (
        <DemoStep
          eyebrow="01 — Trigger"
          title="9:04pm Wednesday. 23 unread emails. Agent run starts."
          body="The agent does a sweep on the schedule you set — overnight, after hours, never interrupting your day."
        >
          <InboxSnapshot items={INBOX} />
        </DemoStep>
      ),
    },
    {
      id: "triage",
      label: "Triage",
      autoMs: 3200,
      render: () => (
        <DemoStep
          eyebrow="02 — Triage"
          title="Sorted into lanes by your policy."
          body="Each lane has a different rule set. Customer enquiries always require approval. Newsletters never do. Internal items can escalate to a named human."
        >
          <TriageBands bands={TRIAGE_BANDS} />
        </DemoStep>
      ),
    },
    {
      id: "draft",
      label: "Draft",
      autoMs: 6500,
      render: () => (
        <DemoStep
          eyebrow="03 — Draft"
          title="One priority customer reply takes shape."
          body="Tom's job is in the diary already; the agent picks up that context and proposes a confirmation with one specific clarification."
        >
          <DraftReveal lines={REPLY_LINES} speed={9} pause={220} />
        </DemoStep>
      ),
    },
    {
      id: "digest",
      label: "Digest",
      autoMs: 3000,
      render: () => (
        <DemoStep
          eyebrow="04 — Digest"
          title="The 7am digest you'll wake up to."
          body="One screen. Numbers first. The links into the queue are one tap away."
        >
          <DigestPanel items={DIGEST_ITEMS} />
        </DemoStep>
      ),
    },
    {
      id: "approve",
      label: "Approve",
      awaitsAction: true,
      render: ({ goNext }) => (
        <DemoStep
          eyebrow="05 — Approve"
          title="7:14am. You open the queue from the digest."
          body="Two cards waiting. This is the first."
        >
          {approved ? null : (
            <ApprovalCard
              workflowName="inbox-ops"
              ageLabel="9h 22m ago"
              subject="Draft reply to Tom Beazley · re: rear shed slab"
              bodyLines={REPLY_LINES}
              generatedBy="Inbox Ops Agent"
              onApprove={() => {
                setApproved(true);
                setTimeout(goNext, 350);
              }}
              onEdit={() => {
                setApproved(true);
                setTimeout(goNext, 350);
              }}
              onReject={() => {
                setApproved(true);
                setTimeout(goNext, 350);
              }}
              diff={[
                "Send email to tom.beazley@gmail.com",
                "Tag thread in inbox: 'awaiting customer reply'",
                "Add provisional booking to ServiceM8 (week of Mon 14 April, status: pencilled)",
                "Set reminder to confirm concrete supply by Thu 4pm",
                "Append entry to audit log #00473",
              ]}
            />
          )}
        </DemoStep>
      ),
    },
    {
      id: "outcome",
      label: "Outcome",
      autoMs: 0,
      render: () => (
        <DemoStep
          eyebrow="06 — Outcome"
          title="Your inbox at 7:15am."
          body="Twelve actions completed under policy overnight. Two waited for you. One went to Sarah on the phone at nine last night because that was the rule."
        >
          <ApprovalConfirmation
            timeLabel="07:14:51 AWST"
            auditId="00473"
            followUps={[
              "Reply sent to tom.beazley@gmail.com",
              "Provisional booking added to ServiceM8 (week of 14 April)",
              "Reminder set: confirm concrete supply by Thu 4pm",
              "12 actions completed overnight under policy",
              "1 remaining card in queue (supplier credit note from Reece — also yours to approve)",
              "1 escalation to Sarah (ops) — acknowledged 9:14pm last night",
            ]}
          />
        </DemoStep>
      ),
    },
  ];

  return <DemoShell workflowName="inbox-ops" steps={steps} />;
}

function InboxSnapshot({
  items,
}: {
  items: { from: string; subject: string; time: string; lane: string }[];
}) {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
      <div className="flex items-baseline justify-between border-b border-[var(--color-rule)] pb-3">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Inbox &middot; daniel@coastlineconcrete.com.au
        </p>
        <p className="font-mono text-[0.75rem] tracking-[0.04em] text-[var(--color-ink)]">
          23 unread &middot; +16 archived earlier
        </p>
      </div>
      <ul className="mt-3 flex flex-col">
        {items.map((it, i) => (
          <li
            key={it.from + i}
            className={cn(
              "grid grid-cols-[1fr_auto] gap-4 py-2.5",
              i > 0 && "border-t border-[var(--color-rule)]",
            )}
          >
            <div className="min-w-0">
              <p className="font-sans text-[0.875rem] leading-tight text-[var(--color-ink)] truncate">
                {it.from}
              </p>
              <p className="font-serif text-[0.8125rem] leading-tight text-[var(--color-muted)] truncate">
                {it.subject}
              </p>
            </div>
            <p className="font-mono text-[0.6875rem] tracking-[0.04em] text-[var(--color-muted)] self-center">
              {it.time}
            </p>
          </li>
        ))}
        <li className="py-2.5 border-t border-[var(--color-rule)]">
          <p className="font-mono text-[0.6875rem] tracking-[0.02em] text-[var(--color-muted)]">
            … and 16 more
          </p>
        </li>
      </ul>
    </div>
  );
}

function TriageBands({
  bands,
}: {
  bands: { label: string; count: number; note: string; intent: string }[];
}) {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        Triage &middot; 23 emails sorted in 4.2 sec
      </p>
      <ul className="mt-4 flex flex-col">
        {bands.map((b, i) => (
          <li
            key={b.label}
            className={cn(
              "grid grid-cols-[auto_1fr_auto] items-baseline gap-4 py-3",
              i > 0 && "border-t border-[var(--color-rule)]",
            )}
          >
            <p className="font-mono text-[0.9375rem] tracking-[0.02em] text-[var(--color-ink)] tabular-nums w-7 text-right">
              {b.count}
            </p>
            <div>
              <p className="font-sans text-[0.9375rem] leading-tight text-[var(--color-ink)]">
                {b.label}
              </p>
              <p className="font-serif text-[0.8125rem] leading-tight text-[var(--color-muted)]">
                {b.note}
              </p>
            </div>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)] border border-[var(--color-rule)] px-2 py-0.5">
              {b.intent}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DigestPanel({ items }: { items: { label: string; value: string; note: string }[] }) {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
      <div className="flex items-baseline justify-between border-b border-[var(--color-rule)] pb-3">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Morning digest &middot; sent 7:00am Thursday
        </p>
        <p className="font-mono text-[0.6875rem] tracking-[0.04em] text-[var(--color-muted)]">
          to: daniel@coastlineconcrete.com.au
        </p>
      </div>
      <h3 className="mt-5 font-sans text-[1.25rem] tracking-[-0.01em] leading-[1.25] text-[var(--color-ink)]">
        Last night, your agent handled 14 things. 4 are yours to look at.
      </h3>
      <ul className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
        {items.map((it) => (
          <li key={it.label} className="border border-[var(--color-rule)] p-4">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              {it.label}
            </p>
            <p className="mt-2 font-sans text-[2rem] leading-none tracking-[-0.02em] text-[var(--color-ink)] tabular-nums">
              {it.value}
            </p>
            <p className="mt-2 font-serif text-[0.8125rem] leading-[1.5] text-[var(--color-muted)]">
              {it.note}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
