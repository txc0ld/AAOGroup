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

const PATH = "/seo/ai-agents-australian-smbs";
const TITLE = "AI agents for Australian SMBs";
const DESCRIPTION =
  "AI agents for Australian SMBs that sit inside real workflows under human approval. Onshore inference, audit logs, governance built in.";

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
        eyebrow="For Australian SMBs"
        title="AI agents for Australian SMBs that act under approval, not on their own."
        lede="Most Australian SMBs don't need a chatbot. They need controlled AI operators inside their workflows — drafting replies, prepping quotes, triaging inboxes — with a human approval gate on every outbound action."
        secondary={{ href: "/services", label: "See the offer ladder" }}
      />

      <ProblemBullets
        title="What 'an AI agent' usually means in an SMB."
        lede="The market is loud. The pattern that holds up in real businesses is narrow."
        bullets={[
          {
            headline: "A tab, not a teammate.",
            detail:
              "Generic chat tools sit on the side of the desk. Staff use them once, then forget. Nothing in the operating workflow changes.",
          },
          {
            headline: "Demos that don't survive Monday.",
            detail:
              "An open-ended agent looks impressive in a sandbox. In a real inbox, it sends the wrong thing once and gets switched off.",
          },
          {
            headline: "No audit trail when something goes out wrong.",
            detail:
              "Most off-the-shelf tools can't tell you which prompt produced which reply, or who approved it. That's a governance gap, not a feature gap.",
          },
        ]}
      />

      <InstallBlock
        title="Narrow agents inside the systems you already run."
        lede="We install named, scoped workflow agents — not assistants. Each one has a defined trigger, a defined output, and a human approval queue between the model and the customer."
        agents={[
          {
            name: "Lead Intake",
            description:
              "Inbound enquiries get parsed, drafted, and queued for one-tap approval. No lead waits for the owner to find a moment.",
          },
          {
            name: "Quote Prep",
            description:
              "Scope notes and rate cards turned into a draft quote, ready for the operator to price and send.",
          },
          {
            name: "Inbox Ops",
            description:
              "Email triage and reply drafting under approval. The owner reads a digest, not 23 emails.",
          },
          {
            name: "SOP & Reporting",
            description:
              "Procedures answered with citations. Compliance and status reports drafted from approved templates.",
          },
        ]}
        links={[
          { href: "/use-cases", label: "Use cases" },
          { href: "/services", label: "Offers" },
        ]}
      />

      <HowItWorks
        intro={
          <>
            For an SMB, the work isn&rsquo;t a model — it&rsquo;s a pipeline.
            Integrations connect to your systems, the workflow runs deterministically,
            the model call sits inside guardrails, the approval queue holds every
            outbound action for human sign-off, and the audit log makes the whole
            thing reviewable.
          </>
        }
      />

      <TrustBlock
        body={
          <>
            Inference runs on Amazon Bedrock (Sydney) or Azure (Australia East),
            so client data stays onshore. Every outbound action is approved by a
            human and logged. Read-only integrations by default; write scopes are
            requested only when a workflow needs them.
          </>
        }
      />

      <PricingSnapshot />

      <CTABand
        headline="Start with the audit, not the build."
        body="A 15-minute call to see if your business has the right shape for an AI operator. We'll tell you honestly if it doesn't."
        secondaryHref="/framework"
        secondaryLabel="See the framework"
      />
    </>
  );
}
