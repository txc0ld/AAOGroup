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

const PATH = "/seo/ai-quote-automation-australia";
const TITLE = "AI quote automation Australia";
const DESCRIPTION =
  "AI quote automation for Australian businesses. Quote Prep drafts pricing packets from your rate card and scope notes, ready for the operator to approve and send.";

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
        eyebrow="Quote Prep · Australia"
        title="AI quote automation that drafts the packet, not the price."
        lede="Quote turnaround is revenue. Most of the delay is admin, not pricing — collecting scope, finding the right rate card, formatting the document. Quote Prep does the admin and hands the priced decision back to a human."
        secondary={{ href: "/framework", label: "How the workflow runs" }}
      />

      <ProblemBullets
        title="Why quotes go out late."
        lede="The pattern is consistent across trades, mining services, professional services, and field work."
        bullets={[
          {
            headline: "The pricing brain is the bottleneck.",
            detail:
              "Only one or two people can price the work. Their day fills with admin around the price instead of the price itself.",
          },
          {
            headline: "Scope is collected twice.",
            detail:
              "Once in an enquiry email, once again when the operator sits down to draft the quote. The second pass is pure friction.",
          },
          {
            headline: "Inconsistent formatting and inclusions.",
            detail:
              "Two operators draft the same job differently. The customer sees a quote that looks improvised, even when the price is right.",
          },
        ]}
      />

      <InstallBlock
        title="Quote Prep — a workflow, not a generator."
        lede="The agent assembles the packet from approved templates and your real rate data. The operator opens a draft that's already 80% there, prices it, approves it, sends it."
        agents={[
          {
            name: "Quote Prep",
            description:
              "Reads the enquiry and any scope notes. Pulls the right rate card and inclusions for the job type. Drafts the quote document with line items and standard terms. Operator edits price and approves.",
          },
          {
            name: "Lead Intake (upstream)",
            description:
              "Pre-fills the customer, suburb, and job type so Quote Prep doesn't ask twice. Operates under the same approval gate.",
          },
          {
            name: "Follow-up cadence",
            description:
              "If a quote isn't accepted in a set window, a polite follow-up is drafted on a defined cadence. Approved by a human before send.",
          },
        ]}
        links={[
          { href: "/use-cases/trades-construction", label: "Trades use case" },
          { href: "/use-cases/mining-services", label: "Mining services use case" },
        ]}
      />

      <HowItWorks
        intro={
          <>
            For quote automation the integration layer is usually email, your
            rate-card source (Sheets, Drive, or a CRM), and your document tool.
            The workflow is deterministic — same trigger, same shape of output
            every time. The approval queue is where pricing judgement stays with
            a human.
          </>
        }
      />

      <TrustBlock
        body={
          <>
            Pricing data and customer details are handled under Australian
            sovereign residency on Bedrock (Sydney) or Azure (Australia East).
            Quote Prep never sends to a customer on its own. Every drafted quote
            sits in the approval queue with the source context — scope notes,
            rate card version, template version — attached.
          </>
        }
      />

      <PricingSnapshot />

      <CTABand
        headline="See whether Quote Prep is your first agent."
        body="The audit looks at your last month of quotes and tells you what would have shifted if Quote Prep had been running."
        secondaryHref="/services"
        secondaryLabel="See the offers"
      />
    </>
  );
}
