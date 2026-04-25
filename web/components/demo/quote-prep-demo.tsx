"use client";

import { useState } from "react";
import { DemoShell, type DemoStepDef } from "./demo-shell";
import { DemoStep } from "./demo-step";
import { InboxItem } from "./inbox-item";
import { DraftReveal } from "./draft-reveal";
import { ApprovalCard, ApprovalConfirmation } from "./approval-card";
import { cn } from "@/lib/cn";

const PHOTO_NOTES = [
  "front-driveway-1.jpg — concrete pad, ~85m², visible cracking along south edge, slope ~1:25 to street",
  "front-driveway-2.jpg — close-up of crumbling edge near letterbox, exposed aggregate worn through",
  "front-driveway-3.jpg — wider shot showing hardstand abuts garage slab, shared expansion joint intact",
];

const SCOPE_TAGS = [
  "concrete · existing pad",
  "~85m² (estimate from frame)",
  "edge failure (south, ~6m)",
  "slope to street",
  "no drainage works requested",
  "garage slab abuts (preserve joint)",
];

const QUOTE_LINES = [
  { label: "Mobilisation & site setup", price: "$420" },
  { label: "Demolition & removal (existing slab)", price: "$1,850 — $2,300" },
  { label: "Sub-base prep & compaction", price: "$1,100 — $1,400" },
  { label: "Reinforcement (SL72 mesh) + formwork", price: "$1,250" },
  { label: "Concrete supply & pour (32MPa, 100mm)", price: "$2,650 — $3,200" },
  { label: "Finish (broom · sealed) + saw cuts", price: "$580" },
  { label: "Edge restoration & cleanup", price: "$350 — $1,400" },
];

const DRAFT_LINES = [
  "Hi Marcus, thanks for the photos — they tell the story well.",
  "Based on what I can see, the slab is nearing end-of-life on the south side and the cleanest fix is a full demolition and re-pour rather than a patch. I've put together an indicative range below; the variance comes from how much sub-base needs replacing once we lift the existing pad, which we can only confirm on the day.",
  "Pricing band: $8,200 — $11,400 incl. GST. Inclusions and exclusions are listed in the attached PDF. Standard 10-year workmanship warranty applies.",
  "One thing to confirm before I finalise: do you need driveway access during the works? If so, we'd phase the pour over two days and I'd add roughly $600 for staged formwork. If you can park on the street for 5 days, the lower end of the range is realistic.",
  "Happy to walk the site with you next Tuesday or Thursday afternoon. Let me know.",
  "Cheers, Daniel — Coastline Concrete",
];

export function QuotePrepDemo() {
  const [approved, setApproved] = useState(false);

  const steps: DemoStepDef[] = [
    {
      id: "trigger",
      label: "Trigger",
      autoMs: 2400,
      render: () => (
        <DemoStep
          eyebrow="01 — Trigger"
          title="Email lands. Existing customer. Three photos attached."
          body="Marcus has used you before. The agent recognises the address from a prior job and tags the thread."
        >
          <InboxItem
            from="Marcus Tang &lt;marcus.tang@bigpond.com&gt;"
            subject="Driveway resurfacing quote — 22 Riverside Pl, Como"
            preview="Hey Daniel, the front drive is starting to crack up near the letterbox. Can you put together a quote? I've attached a few photos."
            time="11:08am · Wed 2 April"
            badge="Repeat customer"
            unread
            attachments={[
              "front-driveway-1.jpg",
              "front-driveway-2.jpg",
              "front-driveway-3.jpg",
            ]}
          />
        </DemoStep>
      ),
    },
    {
      id: "extract",
      label: "Read",
      autoMs: 2800,
      render: () => (
        <DemoStep
          eyebrow="02 — Read"
          title="Agent reads the email and the photos."
          body="Vision pass on each attachment, scope keywords pulled from the message body. Outputs are descriptions — not assumptions."
        >
          <PhotoReadPanel notes={PHOTO_NOTES} tags={SCOPE_TAGS} />
        </DemoStep>
      ),
    },
    {
      id: "reference",
      label: "Reference",
      autoMs: 2400,
      render: () => (
        <DemoStep
          eyebrow="03 — Reference"
          title="Pulls your quote templates and current rate card."
          body="The agent reads from your library — not a generic price book. Rates are the ones you set last quarter."
        >
          <ReferencePanel />
        </DemoStep>
      ),
    },
    {
      id: "draft",
      label: "Draft",
      autoMs: 7500,
      render: () => (
        <DemoStep
          eyebrow="04 — Draft"
          title="Quote packet takes shape."
          body="Line items, inclusions/exclusions, pricing band, one clarifying question. Held — not sent."
        >
          <div className="grid grid-cols-1 gap-5">
            <DraftReveal lines={DRAFT_LINES} speed={8} pause={220} />
            <QuoteLines lines={QUOTE_LINES} />
          </div>
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
          title="One flag — operator must add the tax invoice number."
          body="The agent will not silently fill a field it cannot verify. Edit is highlighted because action is needed before send."
        >
          {approved ? null : (
            <ApprovalCard
              workflowName="quote-prep"
              ageLabel="38 sec ago"
              subject="Draft quote · Marcus Tang · 22 Riverside Pl, Como · driveway re-pour"
              bodyLines={DRAFT_LINES}
              generatedBy="Quote Prep Agent"
              flag="Missing: tax invoice number from Xero — operator must add before send"
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
                "Generate quote PDF (template: 'Coastline · standard quote v3')",
                "Attach to reply email to marcus.tang@bigpond.com",
                "Record quote in ServiceM8 (job #J-2025-0418, status: quoted)",
                "Schedule 7-day follow-up reminder",
                "Append entry to audit log #00472",
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
          title="Quote sent. Recorded. Follow-up booked."
          body="The PDF is in Marcus's inbox. ServiceM8 has the job. The agent will nudge you in seven days if there's no reply."
        >
          <ApprovalConfirmation
            timeLabel="11:27:04 AWST"
            auditId="00472"
            followUps={[
              "Quote PDF generated and emailed to marcus.tang@bigpond.com",
              "Recorded in ServiceM8 — job #J-2025-0418, status: quoted",
              "7-day follow-up reminder set for Wed 9 April",
              "Audit log entry #00472 — edited by Daniel B (added Xero TI #) then approved at 11:27:04",
            ]}
          />
        </DemoStep>
      ),
    },
  ];

  return <DemoShell workflowName="quote-prep" steps={steps} />;
}

function PhotoReadPanel({ notes, tags }: { notes: string[]; tags: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Photo descriptions
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {notes.map((n) => (
            <li
              key={n}
              className="font-mono text-[0.75rem] leading-[1.55] tracking-[0.01em] text-[var(--color-ink-2)] border-l border-[var(--color-rule)] pl-3"
            >
              {n}
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Scope tags
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li
              key={t}
              className="font-mono text-[0.75rem] tracking-[0.02em] text-[var(--color-ink)] border border-[var(--color-rule)] px-2.5 py-1"
            >
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-6 font-serif text-[0.875rem] leading-[1.5] text-[var(--color-muted)]">
          Drainage works are absent from the customer's message and not visible in the photos. The
          agent will leave them out of scope and flag the assumption in the draft.
        </p>
      </div>
    </div>
  );
}

function ReferencePanel() {
  const items = [
    {
      title: "Coastline · standard quote v3 (template)",
      meta: "Updated 12 Feb 2025 · operator-owned",
    },
    {
      title: "Rate card 2025-Q1",
      meta: "Concrete supply $172 / m³ · labour $95 / hr · demolition $48 / m²",
    },
    {
      title: "Past quote · 18 Riverside Pl (similar street, 2024)",
      meta: "78m² re-pour · $9,640 incl. GST · 4-day job",
    },
    {
      title: "Inclusions/exclusions library · concrete · residential",
      meta: "Standard SL72 mesh, 32MPa, 10-yr workmanship warranty",
    },
  ];
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        Reading from your library
      </p>
      <ul className="mt-4 flex flex-col">
        {items.map((it, i) => (
          <li
            key={it.title}
            className={cn(
              "py-3",
              i > 0 && "border-t border-[var(--color-rule)]",
            )}
          >
            <p className="font-sans text-[0.9375rem] leading-tight text-[var(--color-ink)]">
              {it.title}
            </p>
            <p className="mt-1 font-mono text-[0.6875rem] tracking-[0.02em] text-[var(--color-muted)]">
              {it.meta}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function QuoteLines({ lines }: { lines: { label: string; price: string }[] }) {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
      <div className="flex items-baseline justify-between border-b border-[var(--color-rule)] pb-3">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Quote lines &middot; preview
        </p>
        <p className="font-mono text-[0.75rem] tracking-[0.04em] text-[var(--color-ink)]">
          $8,200 — $11,400 incl. GST
        </p>
      </div>
      <ul className="mt-3">
        {lines.map((l, i) => (
          <li
            key={l.label}
            className={cn(
              "grid grid-cols-[1fr_auto] gap-4 py-2",
              i > 0 && "border-t border-[var(--color-rule)]",
            )}
          >
            <p className="font-sans text-[0.875rem] leading-tight text-[var(--color-ink)]">
              {l.label}
            </p>
            <p className="font-mono text-[0.75rem] tracking-[0.04em] text-[var(--color-ink-2)] self-center">
              {l.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
