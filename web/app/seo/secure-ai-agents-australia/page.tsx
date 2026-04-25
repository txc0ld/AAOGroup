import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import {
  SeoHero,
  ProblemBullets,
  InstallBlock,
  HowItWorks,
  TrustBlock,
  PricingSnapshot,
  SeoJsonLd,
} from "@/components/seo/seo-blocks";

const PATH = "/seo/secure-ai-agents-australia";
const TITLE = "Secure AI agents Australia";
const DESCRIPTION =
  "Secure AI agents for Australian businesses: onshore inference on Bedrock Sydney or Azure Australia East, audit logs, and human approval gates on every action.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    type: "article",
  },
};

export default function Page() {
  return (
    <>
      <SeoJsonLd
        path={PATH}
        title={TITLE}
        description={DESCRIPTION}
        section={{ label: "Trust", href: "/trust" }}
        areaServed="Australia"
      />

      <SeoHero
        eyebrow="Secure AI · Australia"
        title="Secure AI agents for Australian businesses."
        lede="Onshore inference. Audit logs. Approval gates. We build AI agents that are governable in an Australian operating environment — not US enterprise theatre dressed up for export."
        secondary={{ href: "/trust", label: "Read the trust posture" }}
      />

      <ProblemBullets
        title="What 'secure AI' actually means in practice."
        lede="Three concrete commitments, not three pages of policy."
        bullets={[
          {
            headline: "Where the model runs.",
            detail:
              "Inference on Amazon Bedrock (Sydney region) or Azure (Australia East) so prompts and completions stay onshore. Provider can be restricted by client policy.",
          },
          {
            headline: "What the agent can and can't do.",
            detail:
              "Each workflow has input, output, topical, dialog, and policy rails (NeMo Guardrails rail types). The model isn't loose inside your systems.",
          },
          {
            headline: "What you can prove after the fact.",
            detail:
              "Every tool call, approval decision, rail trip, and cost is logged. Your monthly report rolls it into business outcomes you can show a board.",
          },
        ]}
      />

      <InstallBlock
        title="Security as a structural posture, not a checklist."
        lede="The five-layer framework is the security model. Each layer narrows what the system can do and widens what you can prove."
        agents={[
          {
            name: "Least-privilege integrations",
            description:
              "Read-only by default. Write scopes requested only when a workflow needs them. A connections page shows scope per integration with a revoke button on every connection.",
          },
          {
            name: "Deterministic workflows",
            description:
              "Named, scoped agents — Lead Intake, Quote Prep, Inbox Ops, SOP, Reporting. No open-ended autonomy. Defined trigger, defined stops, defined outputs.",
          },
          {
            name: "Guarded LLM",
            description:
              "Input rails validate the request before the model sees it. Output rails check the response before it leaves. Topical, dialog, and policy rails constrain behaviour at every step.",
          },
          {
            name: "Approval queue",
            description:
              "Every customer-facing or system-changing action lands here for human approve / edit / reject, with full source context attached.",
          },
        ]}
        links={[
          { href: "/trust", label: "Trust" },
          { href: "/framework", label: "Framework" },
        ]}
      />

      <HowItWorks
        intro={
          <>
            Security in this stack isn&rsquo;t a wrapper around a model — it&rsquo;s
            the architecture. Each layer is a control: integrations narrow access,
            the workflow narrows behaviour, the guardrails narrow output, the
            approval queue narrows action, and the audit log makes the whole
            thing legible after the fact.
          </>
        }
      />

      <TrustBlock
        body={
          <>
            Sovereign residency on Bedrock (Sydney) or Azure (Australia East),
            documented per workflow. Approval queue on every outbound or
            system-changing action. Searchable audit log. Per-workflow policy
            and rail config under version control. Monthly client report. No
            data leaves Australia without an explicit, documented exception.
          </>
        }
      />

      <PricingSnapshot />

      <CTABand
        headline="Bring your security questions to the audit."
        body="The audit produces a data sensitivity map and a risk register before any agent is built. That's the right time to interrogate the posture."
        secondaryHref="/trust"
        secondaryLabel="Trust posture"
      />
    </>
  );
}
