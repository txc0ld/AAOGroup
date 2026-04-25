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

const PATH = "/seo/ai-inbox-automation";
const TITLE = "AI inbox automation";
const DESCRIPTION =
  "AI inbox automation under approval. Email triage and reply drafting that hands you a 7am digest, not 23 emails. Onshore inference, audit logs, human approval gates.";

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
        section={{ label: "Use cases", href: "/use-cases" }}
        areaServed="Australia"
      />

      <SeoHero
        eyebrow="Inbox Ops"
        title="AI inbox automation that drafts, doesn't send."
        lede="Email triage and reply drafting under approval. The owner reads a 7am digest with drafted replies attached, not 23 raw emails. Approve, edit, or reject — one tap each."
        secondary={{ href: "/demo", label: "See the approval queue" }}
      />

      <ProblemBullets
        title="The pattern in an SMB inbox."
        lede="Three failures that show up in almost every owner-led business we audit."
        bullets={[
          {
            headline: "The inbox is the de-facto operations hub.",
            detail:
              "Every decision routes through one address. The owner can't be away from it without things stopping.",
          },
          {
            headline: "Reply quality drifts under load.",
            detail:
              "The first ten replies of the morning are sharp. The last ten are short, late, and inconsistent.",
          },
          {
            headline: "Important things get missed in the noise.",
            detail:
              "Newsletters, vendor notices, and real customer enquiries arrive in the same channel. Triage costs a quarter of the day.",
          },
        ]}
      />

      <InstallBlock
        title="Inbox Ops, on a documented cadence."
        lede="The agent reads, sorts, and drafts. The owner approves. Nothing reaches a customer that hasn't been tapped through."
        agents={[
          {
            name: "Inbox Ops",
            description:
              "Inbox sorted by urgency, type, and sender. Replies drafted from your templates and prior context. Owner approves before send. Weekly digest of what shipped and what's outstanding.",
          },
          {
            name: "7am digest",
            description:
              "A short morning summary: what arrived overnight, what's drafted, what needs a real decision. Read once with coffee, not throughout the day.",
          },
          {
            name: "Follow-up tracking",
            description:
              "Outstanding items tracked. Polite chases drafted on a defined cadence. Approved before send.",
          },
        ]}
        links={[
          { href: "/use-cases/accounting-bookkeeping", label: "Accounting use case" },
          { href: "/use-cases/trades-construction", label: "Trades use case" },
        ]}
      />

      <HowItWorks
        intro={
          <>
            For inbox automation the integration is Gmail or Outlook with
            read-and-draft scope, not send. The workflow is simple:
            classify, draft, queue. The approval queue is the only thing between
            the model and the customer — and that&rsquo;s the point.
          </>
        }
      />

      <TrustBlock
        body={
          <>
            Email content is processed under sovereign residency on Bedrock
            (Sydney) or Azure (Australia East). The integration scope is
            read-and-draft by default; send is approved per message. Every
            drafted reply is logged with the source thread and template version
            attached.
          </>
        }
      />

      <PricingSnapshot />

      <CTABand
        headline="See if Inbox Ops fits the way you work."
        body="Fifteen-minute call, then a paid audit on one week of real inbox activity. We'll tell you whether a 7am digest is the right shape for your business."
        secondaryHref="/demo"
        secondaryLabel="See the demo"
      />
    </>
  );
}
