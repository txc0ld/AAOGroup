import type { Metadata } from "next";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Prose } from "@/components/prose";
import { CTABand } from "@/components/cta-band";
import { LayerDiagram } from "@/components/framework/layer-diagram";
import { LayerSection } from "@/components/framework/layer-section";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "The Sovereign AI Operations Framework",
  description:
    "Five layers that turn AI from a chat window into governed operational infrastructure. The approval queue is the product. Everything else supports it.",
};

export default function FrameworkPage() {
  return (
    <>
      {/* 1. Page hero + diagram */}
      <Section tone="paper">
        <SectionHeading
          as="h1"
          eyebrow="Methodology"
          title="The Sovereign AI Operations Framework."
          lede="Five layers that turn AI from a chat window into governed operational infrastructure. The approval queue is the product. Everything else supports it."
        />
        <LayerDiagram />
      </Section>

      {/* 2. Five layer sections */}
      <LayerSection
        id="layer-1"
        number="01"
        name="Integration"
        whatItDoes={
          <>
            OAuth, webhooks, and polling into the systems your business already
            runs — Gmail, Outlook, forms, CRM, Xero, Sheets. Events are
            normalised into a single consistent stream.
          </>
        }
        whatTheClientSees={
          <>
            A connections page with scope per integration, status indicators,
            and a revoke button on every connection.
          </>
        }
        whyItMatters={
          <>
            Least-privilege access by default. We connect read-only first, and
            request write scopes only when a workflow needs them.
          </>
        }
      />

      <LayerSection
        id="layer-2"
        number="02"
        name="Workflow"
        withTopRule
        whatItDoes={
          <>
            A deterministic state machine plus narrow, scoped task agents
            (LangGraph). No open-ended autonomy. Each workflow has a defined
            trigger, defined stops, and defined outputs.
          </>
        }
        whatTheClientSees={
          <>
            Every workflow is a named, documented operation — &ldquo;Lead
            intake&rdquo;, &ldquo;Quote prep&rdquo;, &ldquo;Inbox triage&rdquo;
            — with explicit inputs, steps, and outputs.
          </>
        }
        whyItMatters={
          <>
            Predictability is the precondition for trust. Open-ended agents do
            not survive contact with real businesses.
          </>
        }
      />

      <LayerSection
        id="layer-3"
        number="03"
        name="Guarded LLM"
        withTopRule
        whatItDoes={
          <>
            The model call sits inside guardrails, not behind them. Input rails
            validate the request before the LLM sees it. Output rails check the
            response before it leaves. Topical, dialog, and policy rails
            constrain behaviour at every step (NVIDIA NeMo Guardrails rail
            types). Model calls run via Amazon Bedrock (Sydney region) or Azure
            (Australia East) where the chosen model is supported.
          </>
        }
        whatTheClientSees={
          <>
            Per-workflow model and region documented in the policy. Provider
            can be restricted by client policy.
          </>
        }
        whyItMatters={<>Data stays onshore. Behaviour stays in scope.</>}
      />

      <LayerSection
        id="layer-4"
        number="04"
        name="Approval Queue"
        withTopRule
        whatItDoes={
          <>
            Every customer-facing or system-changing action lands here for
            human approve / edit / reject.
          </>
        }
        whatTheClientSees={
          <>
            A single inbox of decisions. Each item shows the proposed action,
            the source context that produced it, a diff if it&rsquo;s an edit,
            and a one-tap approve / edit / reject control. Audit metadata is
            captured automatically.
          </>
        }
        whyItMatters={
          <>
            This is the product. Without the approval queue, AI is a liability.
            With it, AI becomes operational infrastructure.
          </>
        }
      />

      <LayerSection
        id="layer-5"
        number="05"
        name="Audit"
        withTopRule
        whatItDoes={
          <>
            Every tool call, every approval decision, every rail trip, every
            cost is logged. The monthly client report rolls it up into business
            outcomes.
          </>
        }
        whatTheClientSees={
          <>
            A searchable activity log and a monthly PDF that lands in the
            owner&rsquo;s inbox.
          </>
        }
        whyItMatters={
          <>
            Governance only works if it&rsquo;s visible. Logs turn AI from a
            black box into a system you can manage like any other operational
            function.
          </>
        }
      />

      {/* 3. Premium runtime sidebar callout */}
      <Section
        tone="paper"
        className="bg-[var(--color-paper-2)] border-t border-[var(--color-rule)]"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-4">
            <p
              className={cn(
                "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
                "text-[var(--color-muted)]",
              )}
            >
              Sidebar — Outside the v1 stack
            </p>
            <h2
              className={cn(
                "mt-5 font-sans font-medium tracking-[-0.02em]",
                "text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.15]",
                "text-[var(--color-ink)]",
                "max-w-[20ch]",
              )}
            >
              Premium runtime.
            </h2>
          </header>

          <div className="lg:col-span-8">
            <div
              className={cn(
                "border border-[var(--color-rule)] bg-[var(--color-paper)]",
                "p-7 md:p-10",
              )}
            >
              <p
                className={cn(
                  "font-sans text-[1.0625rem] leading-[1.6]",
                  "text-[var(--color-ink)]",
                  "max-w-[var(--measure)]",
                )}
              >
                <strong className="font-semibold">
                  Premium runtime — NemoClaw / OpenShell.
                </strong>{" "}
                Reserved for sandboxed autonomous workloads,
                security-sensitive deployments, and enterprise customers who
                require it. Not part of the v1 default stack. Available on
                request as part of an Embedded subscription.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Closing band — three serif paragraphs on ink */}
      <Section tone="ink">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-4">
            <p
              className={cn(
                "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
                "text-[rgb(246_244_238_/_0.6)]",
              )}
            >
              In closing
            </p>
            <h2
              className={cn(
                "mt-5 font-sans font-medium tracking-[-0.02em]",
                "text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.1]",
                "text-[var(--color-paper)]",
                "max-w-[18ch]",
              )}
            >
              Three propositions the framework rests on.
            </h2>
          </header>

          <div className="lg:col-span-8">
            <Prose
              className={cn(
                "mx-0 text-[var(--color-paper)]",
                "[&_p]:text-[var(--color-paper)]",
                "[&_strong]:text-[var(--color-paper)]",
                "[&_p]:my-0 [&_p+p]:mt-10",
              )}
            >
              <p>
                <strong>Governance is not theatre.</strong> Approval queues,
                logs, and rails are not paperwork. They are the only things
                that make AI survivable inside a real operating business.
              </p>
              <p>
                <strong>Narrow workflows beat open autonomy.</strong> A scoped
                Lead Intake agent that runs every day under approval beats a
                &ldquo;general AI assistant&rdquo; that runs once during the
                demo and never again.
              </p>
              <p>
                <strong>
                  The approval queue is the entire commercial thesis.
                </strong>{" "}
                Everything else in this framework exists to make the approval
                queue trustworthy enough to use.
              </p>
            </Prose>
          </div>
        </div>
      </Section>

      {/* 5. Final CTA */}
      <CTABand
        headline="Ready to see where this lands in your business?"
        body="A 15-minute audit call, no slide deck."
      />
    </>
  );
}
