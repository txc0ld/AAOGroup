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

const PATH = "/seo/fractional-ai-operator";
const TITLE = "Fractional AI operator";
const DESCRIPTION =
  "Bring in a fractional AI operator to design, run, and govern AI workflows in your business — without hiring a full-time AI lead.";

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
        section={{ label: "Services", href: "/services" }}
        areaServed="Australia"
      />

      <SeoHero
        eyebrow="For owners and ops leads"
        title="A fractional AI operator, embedded in your business."
        lede="Most Australian SMBs cannot justify a full-time AI lead, and shouldn't try. The Embedded subscription gives you the design, governance, and run-rate work of an AI operations function — at fractional cost, on a monthly retainer."
        secondary={{
          href: "/services#subscription",
          label: "See the Embedded tier",
        }}
      />

      <ProblemBullets
        title="What a fractional AI operator actually does."
        lede="Not a coach. Not a tools tour. The day-to-day of running AI inside an operating business."
        bullets={[
          {
            headline: "Designs the workflow, not the prompt.",
            detail:
              "Picks the right narrow use case, scopes the integrations, defines the approval policy, writes the guardrail spec.",
          },
          {
            headline: "Runs the approval queue with you.",
            detail:
              "Watches what the agent does, where it gets edited, where it gets rejected. Tunes prompts and rails on the back of real data.",
          },
          {
            headline: "Owns the monthly report.",
            detail:
              "Logs become a written impact report: hours saved, items processed, exceptions, next workflow recommendation. Justifies the retainer in writing.",
          },
        ]}
      />

      <InstallBlock
        title="The Embedded subscription, in plain terms."
        lede="One operator, accountable for your AI workflows. Backed by the full skill library and runtime, but managed as a monthly relationship — not a project."
        agents={[
          {
            name: "Workflow design and rollout",
            description:
              "New workflows scoped, built, shadow-tested, and moved into production under approval. One at a time, on a documented cadence.",
          },
          {
            name: "Approval policy and guardrails",
            description:
              "Per-workflow policy: what's auto, what's approved, what's escalated, what's blocked. Updated as the business changes.",
          },
          {
            name: "Monthly impact report",
            description:
              "A written rollup of activity, outcomes, and exceptions — with a recommendation for the next workflow worth installing.",
          },
          {
            name: "Quarterly governance review",
            description:
              "A structured review of policies, integrations, costs, and incidents. Signed off by you.",
          },
        ]}
        links={[
          { href: "/services", label: "All offers" },
          { href: "/pricing", label: "Pricing" },
        ]}
      />

      <HowItWorks
        intro={
          <>
            Fractional doesn&rsquo;t mean part-time attention to your business —
            it means the right amount of senior operator time, on a known
            cadence. The framework underneath is the same five layers used in
            every engagement: integration, workflow, guarded LLM, approval
            queue, audit.
          </>
        }
      />

      <TrustBlock
        body={
          <>
            An embedded operator works inside your governance, not around it.
            Every workflow is documented, every integration scope is recorded,
            every model call sits inside guardrails on Bedrock (Sydney) or Azure
            (Australia East). The relationship is operator-to-operator, not
            vendor-to-customer.
          </>
        }
      />

      <PricingSnapshot />

      <CTABand
        headline="Embedded AI operations, on a retainer."
        body="A 15-minute call to see whether your business has the workflow density and governance need to make a fractional operator the right shape."
        secondaryHref="/services#subscription"
        secondaryLabel="Subscription tiers"
      />
    </>
  );
}
