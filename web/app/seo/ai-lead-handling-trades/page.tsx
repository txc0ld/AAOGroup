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

const PATH = "/seo/ai-lead-handling-trades";
const TITLE = "AI lead handling for trades";
const DESCRIPTION =
  "AI lead handling for Australian trades and construction businesses. Drafted replies under approval, faster turnaround, no enquiry left in the inbox over the weekend.";

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
        audienceType="Trades and construction businesses"
      />

      <SeoHero
        eyebrow="For trades & construction"
        title="AI lead handling for Australian trades businesses."
        lede="Inbound enquiries arrive at 7pm Friday. By Monday, the customer has phoned someone else. Lead Intake fixes that — not by sending a bot, but by drafting the reply for one-tap approval."
        secondary={{
          href: "/use-cases/trades-construction",
          label: "See the trades use case",
        }}
      />

      <ProblemBullets
        title="The pattern in trades inboxes."
        lede="Almost every builder, plumber, electrician and siteworks contractor we audit has the same three problems."
        bullets={[
          {
            headline: "Leads sit overnight, then over the weekend.",
            detail:
              "The owner is on a tool, not in the inbox. By the time they reply, the customer has the next quote.",
          },
          {
            headline: "The same five questions, every time.",
            detail:
              "Suburb, scope, urgency, access, photos. Half the back-and-forth is just collecting what should have come in with the form.",
          },
          {
            headline: "Quote prep waits two days for a free moment.",
            detail:
              "The pricing knowledge is in the owner's head. The admin around it doesn't have to be.",
          },
        ]}
      />

      <InstallBlock
        title="A Lead Intake agent that drafts the reply, not sends it."
        lede="The agent reads the enquiry, extracts what's needed, drafts a reply and a CRM entry, and parks both in the approval queue. The owner taps approve from the ute."
        agents={[
          {
            name: "Lead Intake",
            description:
              "Trigger: website form, email, or phone transcript. Extract: customer, suburb, job type, urgency, scope. Draft: reply email + CRM/job entry. Queue for one-tap approval.",
          },
          {
            name: "Quote Prep",
            description:
              "Once a lead is qualified, scope notes are turned into a draft quote against your rate card and standard inclusions. Owner edits price, approves, sends.",
          },
          {
            name: "Follow-up reminders",
            description:
              "Approved replies set a follow-up. If the customer goes quiet, a polite chase is drafted on the same approval pattern.",
          },
        ]}
        links={[
          { href: "/use-cases/trades-construction", label: "Trades use case" },
          { href: "/demo", label: "See the approval queue" },
        ]}
      />

      <HowItWorks
        intro={
          <>
            For a trades business the integration layer is usually the website
            form, Gmail or Outlook, and the existing CRM or spreadsheet. The
            workflow is short and deterministic. The approval queue is what makes
            it survivable: nothing reaches a customer that the owner hasn&rsquo;t
            tapped through.
          </>
        }
      />

      <TrustBlock
        body={
          <>
            Customer details — names, addresses, site photos — are handled under
            sovereign residency on Bedrock (Sydney) or Azure (Australia East).
            Every drafted reply is approved or edited by the owner before it
            goes out. Every action is logged so you can show, after the fact,
            exactly what happened on a given enquiry.
          </>
        }
      />

      <PricingSnapshot />

      <CTABand
        headline="See if Lead Intake fits your business."
        body="Fifteen-minute call. We'll look at one week of your inbox and tell you whether this saves you Friday nights or not."
        secondaryHref="/use-cases/trades-construction"
        secondaryLabel="Trades use case"
      />
    </>
  );
}
