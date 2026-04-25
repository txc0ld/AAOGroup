"use client";

import { useState } from "react";
import { DemoShell, type DemoStepDef } from "./demo-shell";
import { DemoStep } from "./demo-step";
import { DraftReveal } from "./draft-reveal";
import { ApprovalCard, ApprovalConfirmation } from "./approval-card";
import { cn } from "@/lib/cn";

const SEARCH_STATS = [
  { label: "SOPs scanned", value: "47" },
  { label: "Manuals scanned", value: "12" },
  { label: "Policy docs scanned", value: "3" },
  { label: "Search time", value: "0.6s" },
];

const MATCHES = [
  {
    title: "MS-OPS-2024-LOTO-Procedure-v3.pdf",
    section: "§4.2 — Compressor isolation · Bibra Lake yard",
    confidence: "0.94",
    primary: true,
    note: "Exact site + asset match. Owner: Operations Manager. Last reviewed Aug 2024.",
  },
  {
    title: "MS-OPS-2022-LOTO-General.pdf",
    section: "§3 — General compressor lockout",
    confidence: "0.71",
    primary: false,
    note: "Generic procedure, no site-specific call-outs. Superseded for Bibra Lake by v3.",
  },
];

const DRAFT_LINES = [
  "Hi Marcus — for the Bibra Lake compressor unit 3, here are the LOTO steps from MS-OPS-2024-LOTO-Procedure-v3.pdf §4.2:",
  "1. Notify the yard supervisor and log the isolation start time in the yard board.",
  "2. Shut the compressor at the local control panel; wait for the receiver to bleed below 50 kPa.",
  "3. Close the upstream air isolation valve (yellow handle, north wall) and tag with your personal lock.",
  "4. Open the downstream bleed valve to confirm zero pressure at the work point before any disassembly.",
  "5. Apply the electrical lockout at the MCC (board 2, breaker B-12) using a personal padlock and tag.",
  "Section 4.2 also references AS/NZS 4024.1604:2014. That standard was superseded by the 2019 revision — recommend an SOP refresh. I've queued a draft revision for the SOP owner to approve.",
];

export function SopKnowledgeDemo() {
  const [approved, setApproved] = useState(false);

  const steps: DemoStepDef[] = [
    {
      id: "trigger",
      label: "Trigger",
      autoMs: 2200,
      render: () => (
        <DemoStep
          eyebrow="01 — Trigger"
          title="Site supervisor asks in Slack."
          body="Question lands in #site-questions. The agent watches the channel under your policy — only responds when asked, never volunteers."
        >
          <SlackMessage
            channel="#site-questions"
            from="Marcus Tully"
            role="Site supervisor · Bibra Lake yard"
            time="10:14am · Tuesday"
            text="Hey — what's the LOTO for the Bibra Lake compressor unit 3?"
          />
        </DemoStep>
      ),
    },
    {
      id: "search",
      label: "Search",
      autoMs: 2400,
      render: () => (
        <DemoStep
          eyebrow="02 — Search"
          title="Searches your library, not the public internet."
          body="The agent reads only from documents you own. Nothing leaves your tenant. Two candidate documents matched."
        >
          <SearchPanel stats={SEARCH_STATS} />
        </DemoStep>
      ),
    },
    {
      id: "retrieve",
      label: "Retrieve",
      autoMs: 2600,
      render: () => (
        <DemoStep
          eyebrow="03 — Retrieve"
          title="Top match is site-specific. Confidence 0.94."
          body="The 2024 site-specific procedure beats the 2022 generic one. The agent shows both so the operator can sanity-check the choice."
        >
          <MatchesPanel matches={MATCHES} />
        </DemoStep>
      ),
    },
    {
      id: "synthesise",
      label: "Synthesise",
      autoMs: 7800,
      render: () => (
        <DemoStep
          eyebrow="04 — Synthesise"
          title="Answer drafted with the cited section."
          body="Five steps lifted directly from §4.2, plus a side note: one referenced standard is out of date."
        >
          <DraftReveal lines={DRAFT_LINES} speed={8} pause={220} />
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
          title="SOP owner opens the queue."
          body="One card, one click. The flagged SOP refresh is bundled in — toggled on by default, can be unticked."
        >
          {approved ? null : (
            <ApprovalCard
              workflowName="sop-knowledge"
              ageLabel="42 sec ago"
              subject="Draft answer to Marcus (site supervisor) · LOTO · Bibra Lake unit 3"
              bodyLines={DRAFT_LINES}
              generatedBy="SOP Knowledge Agent"
              flag="Section 4.2 cites AS/NZS 4024.1604:2014 — superseded by 2019 revision. SOP refresh recommended."
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
              rightSlot={<RefreshToggle />}
              diff={[
                "Post answer to #site-questions thread (reply to Marcus Tully)",
                "Cite source: MS-OPS-2024-LOTO-Procedure-v3.pdf §4.2",
                "Create SOP-refresh ticket in operator queue (priority: medium)",
                "Notify SOP owner (Operations Manager) by email",
                "Append entry to audit log #00474",
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
          title="Answered. Cited. Flagged for refresh."
          body="Marcus has his answer in the Slack thread. The standards drift didn't get buried — it's now a tracked refresh ticket with a named owner."
        >
          <ApprovalConfirmation
            timeLabel="10:15:08 AWST"
            auditId="00474"
            followUps={[
              "Reply posted to #site-questions thread (citing MS-OPS-2024-LOTO-Procedure-v3.pdf §4.2)",
              "SOP-refresh ticket #SOP-2025-018 created in operator queue",
              "Notification sent to Operations Manager (SOP owner)",
              "Audit log entry #00474 — approved by Sarah K (SOP owner) at 10:15:08",
            ]}
          />
        </DemoStep>
      ),
    },
  ];

  return <DemoShell workflowName="sop-knowledge" steps={steps} />;
}

function SlackMessage({
  channel,
  from,
  role,
  time,
  text,
}: {
  channel: string;
  from: string;
  role: string;
  time: string;
  text: string;
}) {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--color-rule)] pb-3">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Slack &middot; {channel}
        </p>
        <p className="font-mono text-[0.6875rem] tracking-[0.04em] text-[var(--color-muted)]">
          {time}
        </p>
      </div>
      <div className="mt-5 grid grid-cols-[auto_1fr] gap-4">
        <span
          aria-hidden
          className="inline-flex h-9 w-9 items-center justify-center border border-[var(--color-rule)] font-mono text-[0.75rem] tracking-[0.04em] text-[var(--color-ink)]"
        >
          MT
        </span>
        <div>
          <p className="font-sans text-[0.9375rem] leading-tight text-[var(--color-ink)]">
            {from}{" "}
            <span className="font-mono text-[0.6875rem] tracking-[0.04em] text-[var(--color-muted)]">
              · {role}
            </span>
          </p>
          <p className="mt-2 font-serif text-[1rem] leading-[1.55] text-[var(--color-ink-2)]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function SearchPanel({
  stats,
}: {
  stats: { label: string; value: string }[];
}) {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        Library search &middot; tenant-scoped
      </p>
      <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((s) => (
          <li key={s.label} className="border border-[var(--color-rule)] p-4">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              {s.label}
            </p>
            <p className="mt-2 font-sans text-[1.5rem] leading-none tracking-[-0.02em] text-[var(--color-ink)] tabular-nums">
              {s.value}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-5 font-serif text-[0.875rem] leading-[1.5] text-[var(--color-muted)]">
        Search runs against your indexed library only. The agent will not consult external sources
        for procedural answers.
      </p>
    </div>
  );
}

function MatchesPanel({
  matches,
}: {
  matches: {
    title: string;
    section: string;
    confidence: string;
    primary: boolean;
    note: string;
  }[];
}) {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        Candidate documents &middot; ranked by confidence
      </p>
      <ul className="mt-4 flex flex-col">
        {matches.map((m, i) => (
          <li
            key={m.title}
            className={cn(
              "py-4",
              i > 0 && "border-t border-[var(--color-rule)]",
            )}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="font-sans text-[0.9375rem] leading-tight text-[var(--color-ink)]">
                {m.title}
              </p>
              <p className="font-mono text-[0.75rem] tracking-[0.04em] text-[var(--color-ink-2)]">
                conf {m.confidence}
                {m.primary ? (
                  <span className="ml-3 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-ink)] border border-[var(--color-ink)] px-2 py-0.5">
                    selected
                  </span>
                ) : null}
              </p>
            </div>
            <p className="mt-2 font-mono text-[0.75rem] tracking-[0.02em] text-[var(--color-ink-2)]">
              {m.section}
            </p>
            <p className="mt-2 font-serif text-[0.8125rem] leading-[1.5] text-[var(--color-muted)]">
              {m.note}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RefreshToggle() {
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
            Also flag SOP for refresh
          </span>
          <span className="mt-1 block font-serif text-[0.8125rem] leading-[1.5] text-[var(--color-muted)]">
            Creates a ticket for the SOP owner. Defaulted on because §4.2 cites a superseded
            standard.
          </span>
        </span>
      </label>
    </div>
  );
}
