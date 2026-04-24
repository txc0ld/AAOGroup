import type { Metadata } from "next";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Prose } from "@/components/prose";
import { CTABand } from "@/components/cta-band";
import { PostureCard } from "@/components/trust/posture-card";
import { DataClassTable } from "@/components/trust/data-class-table";
import { RiskTierTable } from "@/components/trust/risk-tier-table";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Trust & Security",
  description:
    "Approval gates, logs, data boundaries, and onshore models — the controls that let you actually use AI in your business.",
};

const postures = [
  {
    heading: "Approval-gated by default",
    body: "Every customer-facing or system-changing action requires human approve / edit / reject before it leaves the building. Autonomy is earned per workflow, not assumed.",
  },
  {
    heading: "Every action logged",
    body: "Every tool call, approval decision, model call, and rail trip is written to an audit log. Logs are searchable and exportable.",
  },
  {
    heading: "Read-only first",
    body: "Every integration starts with the minimum scope required to read. Write access is granted per workflow when the workflow needs it, and is revocable.",
  },
];

const monoLabel =
  "font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]";

const monoLabelInk =
  "font-mono text-[0.75rem] uppercase tracking-[0.2em] text-[var(--color-ink)]";

export default function TrustPage() {
  return (
    <>
      {/* 1. Page hero */}
      <Section id="top" className="scroll-mt-24">
        <SectionHeading
          eyebrow="Trust & security"
          title="Trust is the product."
          lede="Approval gates, logs, data boundaries, and onshore models — the controls that let you actually use AI in your business."
          as="h1"
        />
      </Section>

      {/* 2. PostureCard row */}
      <Section className="!pt-0">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {postures.map((p, i) => (
            <Reveal key={p.heading} delay={i * 100} className="h-full">
              <PostureCard
                heading={p.heading}
                body={p.body}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. Approval gates */}
      <Section>
        <SectionHeading
          title="Approval gates"
          lede="The product, not a feature."
        />
        <div className="mt-10">
          <Prose>
            <p>
              Approval gates are the moments where a human reviews what an
              agent is about to do and chooses to approve, edit, or reject
              it. They fire on any customer-facing message, any write to a
              CRM, calendar, or document store, and anything tagged as
              sensitive in the client policy. The approver is configurable
              per workflow — usually the workflow owner, an admin, or a
              named manager — and approvals can be routed by data
              classification, value threshold, or business hours. Every
              decision is recorded with a timestamp, the user, the original
              AI output, any edits made, and the rationale captured at
              decision time. Nothing customer-facing or system-changing
              leaves the building without that record.
            </p>
          </Prose>
        </div>
      </Section>

      {/* 4. Logs and audit trail */}
      <Section tone="paper" className="!pt-0">
        <SectionHeading
          title="Logs and audit trail"
          lede="Every action is recorded, retained, and exportable."
        />
        <div className="mt-10">
          <Prose>
            <p>
              We log every tool call with its parameters, every approval
              decision with reviewer metadata, every model call with the
              provider, model name, and cost, and every rail trip with the
              trigger that fired it. Retention defaults to twelve months
              and is configurable per client policy — longer where
              regulation requires it, shorter where the client prefers.
              The client owner and the platform operator can search and
              export the audit log at any time, in CSV or JSON, scoped to
              a workflow, a date range, or a single approval.
            </p>
          </Prose>
        </div>
      </Section>

      {/* 5. Data boundaries */}
      <Section>
        <SectionHeading
          title="Data boundaries"
          lede="Five classification levels. Every workflow is mapped to one."
        />
        <div className="mt-10">
          <Prose>
            <p>
              Before a workflow goes live, every input and every output is
              mapped to a data classification level. The level determines
              who can approve, what can be logged in plain text, and which
              providers are allowed to see it. The classification is part
              of the client's policy document and is reviewed when the
              workflow changes.
            </p>
          </Prose>
        </div>
        <Reveal>
          <DataClassTable />
        </Reveal>
      </Section>

      {/* 6. Sovereign data residency */}
      <Section tone="paper" className="!pt-0">
        <SectionHeading
          title="Sovereign data residency"
          lede="Onshore models, onshore data, documented per workflow."
        />
        <div className="mt-10">
          <Prose>
            <p>
              Model calls run via Amazon Bedrock in the ap-southeast-2
              (Sydney) region or Microsoft Azure in Australia East where
              the chosen model is supported. Customer data stays onshore.
              Each deployment includes a model-region check before
              go-live: if the requested model is not available in an
              Australian region, we either substitute a model that is, or
              flag the workflow as out of scope. The model and region are
              documented in the client's policy and reviewed monthly.
            </p>
          </Prose>
        </div>
      </Section>

      {/* 7. Guarded LLM */}
      <Section>
        <SectionHeading
          title="Guarded LLM"
          lede="Guardrails wrap the model. They do not sit downstream."
        />

        {/* Diagram */}
        <Reveal as="div" className="mt-12">
        <figure>
          <div
            className={cn(
              "relative",
              "border border-[var(--color-rule)]",
              "bg-[var(--color-paper-2)]",
              "p-6 md:p-10",
            )}
          >
            {/* Bands row */}
            <div
              className={cn(
                "grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]",
                "md:items-stretch",
              )}
            >
              {/* Input rails */}
              <div
                className={cn(
                  "border border-[var(--color-ink)]",
                  "bg-[var(--color-paper)]",
                  "px-5 py-6 flex flex-col items-center justify-center text-center",
                )}
              >
                <p className={monoLabel}>Step 01</p>
                <p
                  className={cn(
                    "mt-3 font-mono text-[0.875rem] uppercase tracking-[0.18em]",
                    "text-[var(--color-ink)]",
                  )}
                >
                  Input rails
                </p>
              </div>

              {/* Arrow */}
              <div
                className="hidden md:flex items-center justify-center px-2"
                aria-hidden="true"
              >
                <span className="font-mono text-[1rem] text-[var(--color-muted)]">
                  →
                </span>
              </div>

              {/* LLM call */}
              <div
                className={cn(
                  "border border-[var(--color-ink)]",
                  "bg-[var(--color-ink)] text-[var(--color-paper)]",
                  "px-5 py-6 flex flex-col items-center justify-center text-center",
                )}
              >
                <p
                  className={cn(
                    "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
                    "text-[rgb(246_244_238_/_0.65)]",
                  )}
                >
                  Step 02
                </p>
                <p
                  className={cn(
                    "mt-3 font-mono text-[0.875rem] uppercase tracking-[0.18em]",
                    "text-[var(--color-paper)]",
                  )}
                >
                  LLM call
                </p>
              </div>

              {/* Arrow */}
              <div
                className="hidden md:flex items-center justify-center px-2"
                aria-hidden="true"
              >
                <span className="font-mono text-[1rem] text-[var(--color-muted)]">
                  →
                </span>
              </div>

              {/* Output rails */}
              <div
                className={cn(
                  "border border-[var(--color-ink)]",
                  "bg-[var(--color-paper)]",
                  "px-5 py-6 flex flex-col items-center justify-center text-center",
                )}
              >
                <p className={monoLabel}>Step 03</p>
                <p
                  className={cn(
                    "mt-3 font-mono text-[0.875rem] uppercase tracking-[0.18em]",
                    "text-[var(--color-ink)]",
                  )}
                >
                  Output rails
                </p>
              </div>
            </div>

            {/* Spanning policy label */}
            <div className="mt-6 border-t border-[var(--color-rule)] pt-5">
              <p
                className={cn(
                  "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
                  "text-[var(--color-muted)] text-center",
                )}
              >
                Topical, dialog, policy rails — applied throughout
              </p>
            </div>
          </div>
          <figcaption
            className={cn(
              "mt-4 font-mono text-[0.75rem] uppercase tracking-[0.18em]",
              "text-[var(--color-muted)]",
            )}
          >
            Figure · Guarded LLM call path
          </figcaption>
        </figure>
        </Reveal>

        <div className="mt-10">
          <Prose>
            <p>
              Guardrails wrap the LLM, not just sit downstream. Input
              rails validate the request before it reaches the model.
              Output rails check the response before any action is taken.
              Topical, dialog, and policy rails constrain what the model
              is allowed to discuss and do at every step (NVIDIA NeMo
              Guardrails rail types).
            </p>
          </Prose>
        </div>
      </Section>

      {/* 8. Risk tiers */}
      <Section tone="paper" className="!pt-0">
        <SectionHeading
          title="Risk tiers"
          lede="Five tiers. Higher tier, tighter control. Tier 5 is out of scope."
        />
        <div className="mt-10">
          <Prose>
            <p>
              Every workflow is assigned a risk tier during the audit.
              The tier sets the minimum control level — logging and
              review at the bottom, human approval in the middle,
              enhanced review and restricted scope at the top, and an
              outright "no" at the ceiling. Tier 4 and tier 5 workflows
              require additional sign-off from the client owner before we
              build them.
            </p>
          </Prose>
        </div>
        <Reveal>
          <RiskTierTable />
        </Reveal>
      </Section>

      {/* 9. Model and provider register */}
      <Section>
        <SectionHeading
          title="Model and provider register"
          lede="We publish what we use, per workflow."
        />
        <div className="mt-10">
          <Prose>
            <p>
              We publish the model and provider for every workflow. The
              register is part of the client's policy document and
              reviewed monthly. Clients can restrict providers in their
              policy — for example, "no provider outside Australian
              regions" or "no provider with US-only inference." If a
              workflow needs a model that doesn't fit the register, we
              raise it before building, not after.
            </p>
          </Prose>
        </div>
      </Section>

      {/* 10. Incident response */}
      <Section tone="paper" className="!pt-0">
        <SectionHeading
          title="Incident response"
          lede="A defined severity scale, a defined escalation path."
        />
        <div className="mt-10">
          <Prose>
            <p>
              We use a four-level severity scale.{" "}
              <strong>S1</strong> covers customer or data exposure.{" "}
              <strong>S2</strong> covers a workflow failure where an
              action was sent before it was caught. <strong>S3</strong>{" "}
              covers a workflow failure that was caught by an approval
              gate before any action left the building.{" "}
              <strong>S4</strong> covers minor or cosmetic issues that
              don't affect operations.
            </p>
            <p>
              Escalation runs operator → platform owner → client owner,
              within defined SLAs per severity. S1 incidents are notified
              to the client owner within 24 hours, with a full root-cause
              analysis delivered within 5 business days.
            </p>
          </Prose>
        </div>
      </Section>

      {/* 11. Security questions footer */}
      <Section>
        <SectionHeading
          eyebrow="Contact"
          title="Security and disclosure."
        />
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
          <div className="flex flex-col">
            <p className={monoLabel}>ABN</p>
            <p className="mt-2 font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-ink)]">
              51 559 921 362
            </p>
          </div>
          <div className="flex flex-col">
            <p className={monoLabel}>Insurance</p>
            <p className="mt-2 font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-ink)]">
              Professional indemnity and cyber liability cover
              (placeholder details available on request).
            </p>
          </div>
          <div className="flex flex-col">
            <p className={monoLabel}>Security questions</p>
            <p className="mt-2 font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-ink)]">
              <a
                href="mailto:security@aaogroup.au"
                className="underline underline-offset-[3px] decoration-[1px] decoration-[var(--color-rule)] hover:decoration-[var(--color-ink)]"
              >
                security@aaogroup.au
              </a>
            </p>
          </div>
          <div className="flex flex-col">
            <p className={monoLabel}>Responsible disclosure</p>
            <p className="mt-2 font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-ink)]">
              If you've found a security issue in our platform or one of
              our deployments, email{" "}
              <a
                href="mailto:security@aaogroup.au"
                className="underline underline-offset-[3px] decoration-[1px] decoration-[var(--color-rule)] hover:decoration-[var(--color-ink)]"
              >
                security@aaogroup.au
              </a>
              . We acknowledge within 2 business days.
            </p>
          </div>
        </div>
        {/* unused mono helper kept for type-safety lint avoidance */}
        <span className={cn("sr-only", monoLabelInk)}>section end</span>
      </Section>

      {/* 12. Final CTABand */}
      <CTABand
        headline="Ready to put controls around your AI?"
        body="A 15-minute audit call. We'll walk through approval gates, data boundaries, and what onshore looks like for your workflows."
      />
    </>
  );
}
