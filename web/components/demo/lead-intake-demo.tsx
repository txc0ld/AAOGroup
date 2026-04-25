"use client";

import { useState } from "react";
import { DemoShell, type DemoStepDef } from "./demo-shell";
import { DemoStep } from "./demo-step";
import { FormMock } from "./form-mock";
import { DraftReveal } from "./draft-reveal";
import { ApprovalCard, ApprovalConfirmation } from "./approval-card";
import { cn } from "@/lib/cn";

const FORM_FIELDS = [
  { label: "Name", value: "Sam Pearce" },
  { label: "Phone", value: "0413 552 901" },
  { label: "Suburb", value: "Maylands WA 6051" },
  { label: "Job address", value: "14 Hill Rd, Maylands" },
  {
    label: "Job description",
    value:
      "After a quote on a slab pour for a small extension out the back (~32m²) plus a low retaining wall along the west boundary (~6m). Looking to get it done this month if possible. Budget around 8k.",
  },
  { label: "Best contact time", value: "Weekends or after 5pm" },
];

const EXTRACTED = [
  { k: "Customer", v: "Sam Pearce · 0413 552 901" },
  { k: "Suburb", v: "Maylands WA 6051 (in service area · 8.4km)" },
  { k: "Scope", v: "Slab pour ~32m² + retaining wall ~6m" },
  { k: "Urgency", v: "This month (high)" },
  { k: "Budget signal", v: "$8,000 stated" },
  { k: "Channel", v: "Website enquiry form" },
];

const DRAFT_LINES = [
  "Hi Sam, thanks for the enquiry — appreciate you sending through the detail.",
  "A 32m² slab plus a 6m retaining wall is a job we do regularly in your area, and your budget is in a sensible range for that scope. The honest answer is we'll know within a few hundred dollars after a quick site visit.",
  "Two quick things to confirm before I lock in a time: (1) is the boundary wall on a level run or is there a fall along it, and (2) is there clear access for a concrete pump or will we need to barrow it?",
  "I can be at the property Tuesday between 4pm and 6pm, or Saturday morning. Let me know which suits and I'll confirm. We aim to reply to all enquiries inside 24 hours during the working week.",
  "Cheers, Daniel — Coastline Concrete",
];

export function LeadIntakeDemo() {
  const [approved, setApproved] = useState(false);

  const steps: DemoStepDef[] = [
    {
      id: "trigger",
      label: "Trigger",
      autoMs: 2200,
      render: () => (
        <DemoStep
          eyebrow="01 — Trigger"
          title="A website enquiry arrives. 7:42pm Friday."
          body="The agent watches the contact form. When a submission lands, it captures the raw payload before doing anything else — that's the first audit log entry."
        >
          <FormMock
            formName="coastlineconcrete.com.au/contact"
            receivedAt="7:42pm · Friday 28 March 2025"
            fields={FORM_FIELDS}
          />
        </DemoStep>
      ),
    },
    {
      id: "extract",
      label: "Extract",
      autoMs: 2400,
      render: () => (
        <DemoStep
          eyebrow="02 — Extract"
          title="Agent pulls the structured detail."
          body="No outbound action yet — just parsing into your CRM shape so the next step has clean inputs."
        >
          <ExtractedTable rows={EXTRACTED} />
        </DemoStep>
      ),
    },
    {
      id: "classify",
      label: "Classify",
      autoMs: 2200,
      render: () => (
        <DemoStep
          eyebrow="03 — Classify"
          title="Quality score: HIGH."
          body="Pre-existing budget signal, clear scope, in service area, recent timestamp. Routed to the high-priority lane — owner will see this in the morning digest."
        >
          <ClassifyPanel />
        </DemoStep>
      ),
    },
    {
      id: "draft",
      label: "Draft",
      autoMs: 6500,
      render: () => (
        <DemoStep
          eyebrow="04 — Draft"
          title="Reply takes shape."
          body="Australian voice, two clarifying questions, two suggested visit times, response-window line. Draft is held — not sent."
        >
          <DraftReveal lines={DRAFT_LINES} speed={9} pause={250} />
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
          title="Saturday 8:14am. Owner opens the queue."
          body="One card. Three options. The decision stays with a human — and the action only happens after the click."
        >
          {approved ? null : (
            <ApprovalCard
              workflowName="lead-intake"
              ageLabel="13h 32m ago"
              subject="Draft reply to Sam Pearce · 14 Hill Rd · siteworks enquiry"
              bodyLines={DRAFT_LINES}
              generatedBy="Lead Intake Agent"
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
                "Send email to sam.pearce@iinet.net.au from daniel@coastlineconcrete.com.au",
                "Create lead in Xero CRM · tag: siteworks · priority: high · est value $8,000",
                "Schedule follow-up reminder for Mon 9am if no reply",
                "Escalate to owner phone if no reply by Wed 5pm",
                "Append entry to audit log #00471",
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
          title="Sent. Logged. Followed up."
          body="The reply is out. The lead is in the CRM. The follow-up is scheduled. Every step has an audit log entry that names the human who approved it."
        >
          <ApprovalConfirmation
            timeLabel="08:14:22 AWST"
            auditId="00471"
            followUps={[
              "Email sent to sam.pearce@iinet.net.au",
              "Lead added to Xero CRM (priority: high · est value $8,000)",
              "Follow-up reminder set for Mon 9am",
              "Escalation to owner phone if no reply by Wed 5pm",
              "Audit log entry #00471 — approved by Daniel B at 08:14:22",
            ]}
          />
        </DemoStep>
      ),
    },
  ];

  return <DemoShell workflowName="lead-intake" steps={steps} />;
}

function ExtractedTable({ rows }: { rows: { k: string; v: string }[] }) {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        Extracted &middot; structured fields
      </p>
      <dl className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-[150px_1fr]">
        {rows.map((r, i) => (
          <div key={r.k} className={cn("contents", i > 0 && "[&>dt]:border-t [&>dd]:border-t [&>dt]:border-[var(--color-rule)] [&>dd]:border-[var(--color-rule)] [&>dt]:pt-3 [&>dd]:pt-3")}>
            <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              {r.k}
            </dt>
            <dd className="font-mono text-[0.8125rem] tracking-[0.01em] text-[var(--color-ink)]">
              {r.v}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function ClassifyPanel() {
  const signals = [
    { label: "Budget signal", weight: "+30", note: "$8,000 stated explicitly" },
    { label: "Scope clarity", weight: "+25", note: "size, location, materials all named" },
    { label: "In service area", weight: "+15", note: "Maylands · 8.4km from depot" },
    { label: "Recency", weight: "+10", note: "submitted <12h ago" },
    { label: "Channel quality", weight: "+10", note: "website form (vs cold lead list)" },
  ];
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
      <div className="flex items-baseline justify-between border-b border-[var(--color-rule)] pb-3">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Classification
        </p>
        <p className="font-mono text-[0.75rem] tracking-[0.04em] text-[var(--color-ink)]">
          Score 90 / 100 &middot; <span className="uppercase tracking-[0.18em]">High</span>
        </p>
      </div>
      <ul className="mt-4 flex flex-col">
        {signals.map((s, i) => (
          <li
            key={s.label}
            className={cn(
              "grid grid-cols-[1fr_auto] gap-3 py-2.5",
              i > 0 && "border-t border-[var(--color-rule)]",
            )}
          >
            <div>
              <p className="font-sans text-[0.875rem] leading-tight text-[var(--color-ink)]">
                {s.label}
              </p>
              <p className="font-serif text-[0.8125rem] leading-tight text-[var(--color-muted)]">
                {s.note}
              </p>
            </div>
            <p className="font-mono text-[0.75rem] tracking-[0.04em] text-[var(--color-ink)] self-center">
              {s.weight}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
