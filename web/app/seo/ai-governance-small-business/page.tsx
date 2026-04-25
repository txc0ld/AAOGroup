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

const PATH = "/seo/ai-governance-small-business";
const TITLE = "AI governance for small business";
const DESCRIPTION =
  "AI governance for Australian small businesses. The approval queue is the contract between the business and the system. Logs, rails, and policy without enterprise theatre.";

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
        section={{ label: "Framework", href: "/framework" }}
        areaServed="Australia"
        audienceType="Small and medium businesses"
      />

      <SeoHero
        eyebrow="Governance · SMB"
        title="AI governance for small business, without enterprise theatre."
        lede="The approval queue is the contract between the business and the system. Everything else — logs, rails, residency, policy — exists to make that contract trustworthy enough to use day to day."
        secondary={{ href: "/framework", label: "Read the framework" }}
      />

      <ProblemBullets
        title="What governance actually has to do here."
        lede="Three concrete obligations the system owes the operator. Anything beyond this is paperwork."
        bullets={[
          {
            headline: "Stop the wrong thing going out.",
            detail:
              "The approval queue catches every customer-facing or system-changing action before it leaves. Approve, edit, or reject in one tap.",
          },
          {
            headline: "Show what happened, after the fact.",
            detail:
              "Every tool call, approval decision, rail trip, and cost is logged. The monthly report rolls it up into business outcomes the owner can read in five minutes.",
          },
          {
            headline: "Keep the data where it should be.",
            detail:
              "Inference onshore. Read-only integrations by default. Per-workflow policy under version control. Provider can be restricted by client policy.",
          },
        ]}
      />

      <InstallBlock
        title="The five-layer framework, as a governance posture."
        lede="Each layer is a control. The approval queue is the wedge — the visible commitment to the operator. The other four make that commitment honest."
        agents={[
          {
            name: "Integration — least privilege",
            description:
              "Read-only by default. A connections page with scope per integration and a revoke button on every connection.",
          },
          {
            name: "Workflow — deterministic and named",
            description:
              "Each workflow is a documented operation with a defined trigger, defined stops, and defined outputs. No open-ended autonomy.",
          },
          {
            name: "Guarded LLM — input, output, and policy rails",
            description:
              "The model call sits inside guardrails, not behind them. Topical, dialog, and policy rails constrain behaviour at every step.",
          },
          {
            name: "Approval queue — the contract",
            description:
              "Every outbound or system-changing action is held for human approve / edit / reject, with full source context attached.",
          },
          {
            name: "Audit — the record",
            description:
              "A searchable activity log and a monthly written report. Governance only works if it's visible.",
          },
        ]}
        links={[
          { href: "/framework", label: "Framework" },
          { href: "/trust", label: "Trust posture" },
        ]}
      />

      <HowItWorks
        intro={
          <>
            For an SMB, governance has to live inside the operating workflow —
            not in a separate policy binder. That&rsquo;s the whole reason the
            approval queue is the product. It is the place where governance
            becomes a daily action, not a quarterly review.
          </>
        }
      />

      <TrustBlock
        body={
          <>
            Sovereign residency on Bedrock (Sydney) or Azure (Australia East).
            Per-workflow policy and rail config under version control. Approval
            queue on every outbound action. Searchable audit log. Quarterly
            governance review at the Operator and Embedded subscription tiers.
          </>
        }
      />

      <PricingSnapshot />

      <CTABand
        headline="Bring your governance questions to the audit."
        body="The audit produces a data sensitivity map and a risk register before any agent is built. That's where the governance conversation belongs."
        secondaryHref="/framework"
        secondaryLabel="See the framework"
      />
    </>
  );
}
