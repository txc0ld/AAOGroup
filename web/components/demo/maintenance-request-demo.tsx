"use client";

import { useState } from "react";
import { DemoShell, type DemoStepDef } from "./demo-shell";
import { DemoStep } from "./demo-step";
import { ApprovalCard, ApprovalConfirmation } from "./approval-card";
import { cn } from "@/lib/cn";

const CLASSIFY_ROWS = [
  { k: "Urgency", v: "HIGH — water damage in progress" },
  { k: "Category", v: "Plumbing — hot water unit" },
  { k: "Vendor required", v: "Yes — licensed plumber" },
  { k: "Safety risk", v: "Low — no electrical exposure visible in photos" },
  { k: "After-hours", v: "Yes — submitted 8:47pm Tuesday" },
  { k: "Tenant present", v: "Confirmed via portal" },
];

const VENDORS = [
  {
    name: "AllTrade Plumbing",
    note: "Preferred · avg response 4 hrs · $180 after-hours call-out fee applies",
    selected: true,
  },
  {
    name: "WaterRight",
    note: "Alternative · next business day · no after-hours fee",
    selected: false,
  },
];

const VENDOR_BRIEF = [
  "Job: hot water unit failure with active leak — water on laundry floor.",
  "Address: 22 Ocean Ave (unit at rear, side gate access — code 4421).",
  "Submitted: 8:47pm Tuesday by tenant K. Nguyen (mob attached in portal).",
  "After-hours: yes — call-out fee acknowledged, tenant aware.",
  "Photos: 2 attached (unit + floor). No electrical exposure visible in either.",
  "Please confirm ETA inside 30 minutes. Tenant has been notified to expect first contact within 2 hours.",
];

const TENANT_ACK = [
  "Hi K, thanks for reporting this — we've received your request and it's been logged as urgent.",
  "We've briefed AllTrade Plumbing (our preferred after-hours plumber). They'll contact you directly within the next two hours to confirm an ETA.",
  "In the meantime: if it's safe, please turn off the water at the mains (typically the tap near the front meter). Avoid touching the unit itself. If anything changes — water level rising, electrical sparking, smoke — call 000 first, then us.",
  "We'll update you again once the plumber confirms ETA.",
  "— Property Management",
];

export function MaintenanceRequestDemo() {
  const [approved, setApproved] = useState(false);

  const steps: DemoStepDef[] = [
    {
      id: "trigger",
      label: "Trigger",
      autoMs: 2400,
      render: () => (
        <DemoStep
          eyebrow="01 — Trigger"
          title="Tenant submits via portal. 8:47pm Tuesday."
          body="The agent watches the portal under your policy. After-hours submissions are flagged before any classification — the timestamp matters as much as the words."
        >
          <PortalSubmission />
        </DemoStep>
      ),
    },
    {
      id: "classify",
      label: "Classify",
      autoMs: 2800,
      render: () => (
        <DemoStep
          eyebrow="02 — Classify"
          title="Urgency: HIGH. Category: plumbing."
          body="Vision pass on both photos confirms no visible electrical exposure. The agent classifies, then proposes — it does not act on the urgency rating alone."
        >
          <ClassifyTable rows={CLASSIFY_ROWS} />
        </DemoStep>
      ),
    },
    {
      id: "recommend",
      label: "Recommend",
      autoMs: 2600,
      render: () => (
        <DemoStep
          eyebrow="03 — Recommend"
          title="Vendor matched against your preferred list."
          body="The agent reads from your vendor list — not a generic directory. After-hours fee disclosure is part of the recommendation."
        >
          <VendorList vendors={VENDORS} />
        </DemoStep>
      ),
    },
    {
      id: "draft",
      label: "Draft",
      autoMs: 4400,
      render: () => (
        <DemoStep
          eyebrow="04 — Draft"
          title="Two drafts ready for one approval."
          body="Vendor brief and tenant acknowledgement are paired — both go out together, or neither does. Edit splits them."
        >
          <DualDrafts vendor={VENDOR_BRIEF} tenant={TENANT_ACK} />
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
          title="One click sends both. Edit splits them."
          body="The card carries the tenant acknowledgement; the vendor brief preview sits beside it. Approve dispatches both within seconds."
        >
          {approved ? null : (
            <ApprovalCard
              workflowName="maintenance-request"
              ageLabel="1 min ago"
              subject="Send vendor brief + tenant acknowledgement · 22 Ocean Ave · hot water leak"
              bodyLines={TENANT_ACK}
              generatedBy="Maintenance Request Agent"
              approveLabel="Approve & send both"
              flag="After-hours call-out fee ($180) will apply with AllTrade Plumbing."
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
              rightSlot={<VendorPreview lines={VENDOR_BRIEF} />}
              diff={[
                "Send vendor brief to AllTrade Plumbing (after-hours dispatch line)",
                "Send tenant acknowledgement to K. Nguyen (portal + SMS fallback)",
                "Create job in property management system (job #PM-2025-0314, status: dispatched)",
                "Set 9:00am follow-up tomorrow to confirm completion",
                "Append entry to audit log #00476",
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
          title="Vendor briefed. Tenant updated. Job tracked."
          body="Within four minutes of the tenant pressing submit, the right plumber has the brief and the tenant has a clear next step. The follow-up is in the diary."
        >
          <ApprovalConfirmation
            timeLabel="20:51:18 AWST"
            auditId="00476"
            followUps={[
              "Vendor brief sent to AllTrade Plumbing — ETA confirmed 11:00pm",
              "Acknowledgement delivered to K. Nguyen (portal + SMS)",
              "Job #PM-2025-0314 created in property management system",
              "9:00am follow-up scheduled for completion confirmation",
              "Audit log entry #00476 — approved by property manager at 20:51:18",
            ]}
          />
        </DemoStep>
      ),
    },
  ];

  return <DemoShell workflowName="maintenance-request" steps={steps} />;
}

function PortalSubmission() {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--color-rule)] pb-3">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Tenant portal &middot; maintenance request
        </p>
        <p className="font-mono text-[0.6875rem] tracking-[0.04em] text-[var(--color-muted)]">
          Submitted 8:47pm Tuesday
        </p>
      </div>
      <dl className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-[150px_1fr]">
        <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)] md:pt-1">
          Property
        </dt>
        <dd className="font-serif text-[0.9375rem] leading-[1.55] text-[var(--color-ink)]">
          22 Ocean Ave (rear unit)
        </dd>
        <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)] md:pt-1">
          Tenant
        </dt>
        <dd className="font-serif text-[0.9375rem] leading-[1.55] text-[var(--color-ink)]">
          K. Nguyen
        </dd>
        <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)] md:pt-1">
          Description
        </dt>
        <dd className="font-serif text-[0.9375rem] leading-[1.55] text-[var(--color-ink)]">
          Hot water unit at 22 Ocean Ave is leaking — there's water on the laundry floor.
        </dd>
        <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)] md:pt-1">
          Photos
        </dt>
        <dd>
          <ul className="flex flex-wrap gap-2">
            {["hwu-leak-01.jpg", "laundry-floor-02.jpg"].map((p) => (
              <li
                key={p}
                className="font-mono text-[0.6875rem] tracking-[0.02em] text-[var(--color-muted)] border border-[var(--color-rule)] px-2 py-0.5"
              >
                📎 {p}
              </li>
            ))}
          </ul>
        </dd>
      </dl>
    </div>
  );
}

function ClassifyTable({ rows }: { rows: { k: string; v: string }[] }) {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
      <div className="flex items-baseline justify-between border-b border-[var(--color-rule)] pb-3">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Classification
        </p>
        <p className="font-mono text-[0.75rem] tracking-[0.04em] text-[var(--color-ink)]">
          Urgency <span className="uppercase tracking-[0.18em]">High</span>
        </p>
      </div>
      <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-[150px_1fr]">
        {rows.map((r, i) => (
          <div
            key={r.k}
            className={cn(
              "contents",
              i > 0 &&
                "[&>dt]:border-t [&>dd]:border-t [&>dt]:border-[var(--color-rule)] [&>dd]:border-[var(--color-rule)] [&>dt]:pt-3 [&>dd]:pt-3",
            )}
          >
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

function VendorList({
  vendors,
}: {
  vendors: { name: string; note: string; selected: boolean }[];
}) {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        Vendor match &middot; from your preferred list
      </p>
      <ul className="mt-4 flex flex-col">
        {vendors.map((v, i) => (
          <li
            key={v.name}
            className={cn(
              "grid grid-cols-[1fr_auto] items-baseline gap-4 py-3",
              i > 0 && "border-t border-[var(--color-rule)]",
            )}
          >
            <div>
              <p className="font-sans text-[0.9375rem] leading-tight text-[var(--color-ink)]">
                {v.name}
              </p>
              <p className="mt-1 font-serif text-[0.8125rem] leading-[1.5] text-[var(--color-muted)]">
                {v.note}
              </p>
            </div>
            {v.selected ? (
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-ink)] border border-[var(--color-ink)] px-2 py-0.5">
                proposed
              </span>
            ) : (
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)] border border-[var(--color-rule)] px-2 py-0.5">
                alternative
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DualDrafts({
  vendor,
  tenant,
}: {
  vendor: string[];
  tenant: string[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <DraftPanel
        label="Draft (a) · Vendor brief"
        recipient="To: AllTrade Plumbing dispatch"
        lines={vendor}
      />
      <DraftPanel
        label="Draft (b) · Tenant acknowledgement"
        recipient="To: K. Nguyen (portal + SMS)"
        lines={tenant}
      />
    </div>
  );
}

function DraftPanel({
  label,
  recipient,
  lines,
}: {
  label: string;
  recipient: string;
  lines: string[];
}) {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        {label}
      </p>
      <p className="mt-2 font-mono text-[0.6875rem] tracking-[0.04em] text-[var(--color-muted)]">
        {recipient}
      </p>
      <div className="mt-4 border-l border-[var(--color-rule)] pl-4">
        {lines.map((line, i) => (
          <p
            key={i}
            className={cn(
              "font-serif text-[0.9375rem] leading-[1.55] text-[var(--color-ink-2)]",
              i > 0 && "mt-2.5",
            )}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function VendorPreview({ lines }: { lines: string[] }) {
  return (
    <div className="mt-5 border border-[var(--color-rule)] p-5">
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        Bundled draft &middot; vendor brief to AllTrade Plumbing
      </p>
      <div className="mt-3 border-l border-[var(--color-rule)] pl-4">
        {lines.map((line, i) => (
          <p
            key={i}
            className={cn(
              "font-serif text-[0.875rem] leading-[1.5] text-[var(--color-ink-2)]",
              i > 0 && "mt-2",
            )}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
