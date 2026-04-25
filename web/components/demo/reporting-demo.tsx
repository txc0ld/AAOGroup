"use client";

import { useState } from "react";
import { DemoShell, type DemoStepDef } from "./demo-shell";
import { DemoStep } from "./demo-step";
import { ApprovalCard, ApprovalConfirmation } from "./approval-card";
import { cn } from "@/lib/cn";

const SOURCES = [
  {
    label: "Xero",
    pulled: "12 invoices",
    detail: "3 overdue >14 days · largest $12,800",
  },
  {
    label: "ServiceM8",
    pulled: "8 active jobs",
    detail: "2 marked at-risk · 4 invoiced this week",
  },
  {
    label: "Slack #team",
    pulled: "47 messages",
    detail: "4 flagged 'needs decision' · 3 from leads",
  },
];

const SECTIONS = [
  {
    heading: "Pipeline",
    body: "$84,200 in active quotes, 2 awaiting customer reply (Pearce, Tang).",
  },
  {
    heading: "Cash",
    body: "$26,400 overdue. Largest: Acme Steel $12,800 at 21 days — recommend escalation to phone call this week.",
  },
  {
    heading: "Jobs at risk",
    body: "Site 3 Karratha — 4-day weather delay (cyclone watch lifted Wed, crew remobilising Thu). Site 7 — subcontractor confirmation pending since Tue.",
  },
  {
    heading: "Decisions for you",
    body: "4 items requiring your input by Monday 9am — escalation call to Acme; subcontractor swap on Site 7; quote sign-off for Pearce; staff leave request from Sarah.",
  },
];

const APPROVE_BODY = [
  "Weekly briefing for the week ending Fri 4 April 2025.",
  "Pipeline: $84,200 in active quotes, 2 awaiting customer reply.",
  "Cash: $26,400 overdue — largest Acme Steel $12,800 at 21 days. Recommend escalation.",
  "Jobs at risk: Site 3 Karratha (weather delay 4 days), Site 7 (subcontractor confirmation pending since Tue).",
  "Decisions for you: 4 items requiring your input by Mon 9am — full list inside.",
];

export function ReportingDemo() {
  const [approved, setApproved] = useState(false);

  const steps: DemoStepDef[] = [
    {
      id: "trigger",
      label: "Trigger",
      autoMs: 2200,
      render: () => (
        <DemoStep
          eyebrow="01 — Trigger"
          title="Friday 5pm. Scheduled run begins."
          body="The agent runs on the schedule you set. No prompt, no chat — it just shows up at 5pm Friday like clockwork."
        >
          <ScheduleCard />
        </DemoStep>
      ),
    },
    {
      id: "pull",
      label: "Pull",
      autoMs: 2800,
      render: () => (
        <DemoStep
          eyebrow="02 — Pull"
          title="Reads from your three systems."
          body="Read-only pulls under the credentials you scoped. The agent never writes back to Xero or ServiceM8 from this workflow."
        >
          <SourcesPanel sources={SOURCES} />
        </DemoStep>
      ),
    },
    {
      id: "synthesise",
      label: "Synthesise",
      autoMs: 2600,
      render: () => (
        <DemoStep
          eyebrow="03 — Synthesise"
          title="Briefing assembles in four sections."
          body="Same shape every week — so you read it the same way every Sunday night. Numbers first, then the recommended next move."
        >
          <SectionStack sections={SECTIONS.map((s) => ({ heading: s.heading, body: "" }))} />
        </DemoStep>
      ),
    },
    {
      id: "highlight",
      label: "Highlight",
      autoMs: 4400,
      render: () => (
        <DemoStep
          eyebrow="04 — Highlight"
          title="Draft briefing — preview."
          body="One screen. Pipeline, cash, jobs at risk, decisions. The decisions section is the one you'll act on first."
        >
          <BriefingPreview sections={SECTIONS} />
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
          title="Owner reviews. One click to send."
          body="Reporting is the one workflow where approval isn't strictly required by policy — but during pilot, every output is approved. The schedule-send toggle is on by default."
        >
          {approved ? null : (
            <>
              <PilotCallout />
              <ApprovalCard
                workflowName="reporting"
                ageLabel="1 min ago"
                subject="Send weekly briefing to owner@aaogroup-client.au"
                bodyLines={APPROVE_BODY}
                generatedBy="Reporting Agent"
                approveLabel="Approve & schedule"
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
                rightSlot={<ScheduleToggle />}
                diff={[
                  "Send briefing email to owner@aaogroup-client.au",
                  "Scheduled delivery: Sunday 8:00pm AWST (so it lands before Monday planning)",
                  "Attach PDF copy to /reports/2025-W14-briefing.pdf",
                  "Set next briefing run: Friday 17:00 AWST",
                  "Append entry to audit log #00475",
                ]}
              />
            </>
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
          title="Scheduled. The owner reads it Sunday night."
          body="Same time, same shape, every week. After three months of stable approvals, the operator can move this workflow to auto-send under policy."
        >
          <ApprovalConfirmation
            timeLabel="17:04:11 AWST"
            auditId="00475"
            followUps={[
              "Briefing scheduled for delivery Sunday 6 April · 8:00pm AWST",
              "PDF copy saved to /reports/2025-W14-briefing.pdf",
              "Next briefing run scheduled: Friday 11 April · 17:00 AWST",
              "Audit log entry #00475 — approved by operator at 17:04:11",
            ]}
          />
        </DemoStep>
      ),
    },
  ];

  return <DemoShell workflowName="reporting" steps={steps} />;
}

function ScheduleCard() {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--color-rule)] pb-3">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Scheduled run &middot; weekly owner briefing
        </p>
        <p className="font-mono text-[0.6875rem] tracking-[0.04em] text-[var(--color-muted)]">
          Trigger: Friday 17:00 AWST
        </p>
      </div>
      <h3 className="mt-5 font-sans text-[1.25rem] tracking-[-0.01em] leading-[1.25] text-[var(--color-ink)]">
        Friday 4 April 2025 · 17:00 AWST
      </h3>
      <p className="mt-3 font-serif text-[0.9375rem] leading-[1.55] text-[var(--color-muted)]">
        The reporting agent is starting its weekly run. It will pull from Xero, ServiceM8 and Slack,
        synthesise a four-section briefing, then queue it for owner approval before scheduled
        Sunday-evening send.
      </p>
      <ul className="mt-5 grid grid-cols-1 gap-2 md:grid-cols-3">
        <li className="border border-[var(--color-rule)] px-3 py-2 font-mono text-[0.75rem] tracking-[0.02em] text-[var(--color-ink-2)]">
          Cadence: weekly
        </li>
        <li className="border border-[var(--color-rule)] px-3 py-2 font-mono text-[0.75rem] tracking-[0.02em] text-[var(--color-ink-2)]">
          Owner: pilot mode
        </li>
        <li className="border border-[var(--color-rule)] px-3 py-2 font-mono text-[0.75rem] tracking-[0.02em] text-[var(--color-ink-2)]">
          Next: Fri 11 Apr 17:00
        </li>
      </ul>
    </div>
  );
}

function SourcesPanel({
  sources,
}: {
  sources: { label: string; pulled: string; detail: string }[];
}) {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        Pulling &middot; read-only &middot; tenant-scoped credentials
      </p>
      <ul className="mt-4 flex flex-col">
        {sources.map((s, i) => (
          <li
            key={s.label}
            className={cn(
              "grid grid-cols-[120px_auto_1fr] items-baseline gap-4 py-3",
              i > 0 && "border-t border-[var(--color-rule)]",
            )}
          >
            <p className="font-mono text-[0.8125rem] tracking-[0.02em] text-[var(--color-ink)]">
              {s.label}
            </p>
            <p className="font-mono text-[0.75rem] tracking-[0.02em] text-[var(--color-ink-2)]">
              {s.pulled}
            </p>
            <p className="font-serif text-[0.875rem] leading-[1.5] text-[var(--color-muted)]">
              {s.detail}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionStack({
  sections,
}: {
  sections: { heading: string; body: string }[];
}) {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        Briefing skeleton &middot; assembling
      </p>
      <ol className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        {sections.map((s, i) => (
          <li key={s.heading} className="border border-[var(--color-rule)] p-4">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Section {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 font-sans text-[1rem] leading-tight text-[var(--color-ink)]">
              {s.heading}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function BriefingPreview({
  sections,
}: {
  sections: { heading: string; body: string }[];
}) {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6 md:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--color-rule)] pb-3">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Weekly briefing &middot; week ending Fri 4 April 2025
        </p>
        <p className="font-mono text-[0.6875rem] tracking-[0.04em] text-[var(--color-muted)]">
          Draft &middot; not yet sent
        </p>
      </div>
      <h3 className="mt-5 font-sans text-[1.5rem] tracking-[-0.015em] leading-[1.2] text-[var(--color-ink)]">
        Four things to know before Monday.
      </h3>
      <ul className="mt-5 flex flex-col">
        {sections.map((s, i) => (
          <li
            key={s.heading}
            className={cn("py-4", i > 0 && "border-t border-[var(--color-rule)]")}
          >
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              {s.heading}
            </p>
            <p className="mt-2 font-serif text-[1rem] leading-[1.55] text-[var(--color-ink-2)]">
              {s.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PilotCallout() {
  return (
    <div className="mb-5 border border-[var(--color-rule)] bg-[var(--color-paper-2)] px-5 py-4">
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        Pilot mode policy
      </p>
      <p className="mt-2 font-serif text-[0.9375rem] leading-[1.55] text-[var(--color-ink-2)]">
        During pilot, every output is approved by a human — even internal reports. Once trust is
        established (typically after 3 months of stable approvals), the operator may move this
        workflow to auto-send under policy.
      </p>
    </div>
  );
}

function ScheduleToggle() {
  const [on, setOn] = useState(true);
  return (
    <div className="mt-5 border border-[var(--color-rule)] p-4">
      <label className="flex items-start gap-3 cursor-pointer">
        <span
          aria-hidden
          className={cn(
            "mt-0.5 inline-flex h-4 w-4 items-center justify-center border",
            on
              ? "bg-[var(--color-ink)] border-[var(--color-ink)] text-[var(--color-paper)]"
              : "bg-transparent border-[var(--color-rule)]",
          )}
        >
          <span className="font-mono text-[0.625rem] leading-none">{on ? "✓" : ""}</span>
        </span>
        <input
          type="checkbox"
          className="sr-only"
          checked={on}
          onChange={(e) => setOn(e.target.checked)}
        />
        <span className="flex-1">
          <span className="font-sans text-[0.875rem] leading-tight text-[var(--color-ink)]">
            Send Sunday 8:00pm AWST
          </span>
          <span className="mt-1 block font-serif text-[0.8125rem] leading-[1.5] text-[var(--color-muted)]">
            Default on — the owner reads it Sunday evening to plan the week. Untick to send
            immediately.
          </span>
        </span>
      </label>
    </div>
  );
}
