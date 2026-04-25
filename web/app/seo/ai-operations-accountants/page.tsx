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

const PATH = "/seo/ai-operations-accountants";
const TITLE = "AI operations for accountants";
const DESCRIPTION =
  "AI operations for Australian accounting and bookkeeping firms. Inbox triage and client chasing drafted under approval, so partner time goes back to advisory work.";

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
        audienceType="Accounting and bookkeeping firms"
      />

      <SeoHero
        eyebrow="For accounting & bookkeeping"
        title="AI operations for Australian accounting firms."
        lede="Inbox triage and client chasing eat partner-level time. Both can be drafted by an AI agent under approval — so the partner edits and approves, instead of writing from scratch."
        secondary={{
          href: "/use-cases/accounting-bookkeeping",
          label: "See the accounting use case",
        }}
      />

      <ProblemBullets
        title="Where firm time leaks."
        lede="Three patterns we see in practically every firm we audit, regardless of size."
        bullets={[
          {
            headline: "The senior person triages the inbox.",
            detail:
              "Because they're the only one who can read an email and know whether it matters. The cost of that judgement is paid in partner hours.",
          },
          {
            headline: "Client chasing is inconsistent.",
            detail:
              "BAS docs, missing receipts, queries on draft accounts. Some clients get chased, some don't. The cadence drifts because no one has time to maintain it.",
          },
          {
            headline: "Templates exist but aren't used.",
            detail:
              "Every firm has a folder of approved chase letters and reply patterns. Almost no one writes from them under deadline.",
          },
        ]}
      />

      <InstallBlock
        title="Two narrow agents, drafted under approval."
        lede="Inbox Ops and Client Chasing are the wedge. They use your approved templates, your tone, your client context — and never send without a human tap."
        agents={[
          {
            name: "Inbox Ops",
            description:
              "Inbox sorted by urgency, type, and client. Replies drafted from firm templates and matter context. Bookkeeper or partner approves before send. Weekly digest of what's outstanding.",
          },
          {
            name: "Client Chasing",
            description:
              "Outstanding items tracked. Chase emails drafted on a defined cadence and tone. Escalation path documented. Approved before sending; logged after.",
          },
          {
            name: "SOP & Reporting",
            description:
              "Firm SOPs answered with citations from your knowledge base. Status and workflow reports drafted from approved templates.",
          },
        ]}
        links={[
          { href: "/use-cases/accounting-bookkeeping", label: "Accounting use case" },
          { href: "/trust", label: "Trust posture" },
        ]}
      />

      <HowItWorks
        intro={
          <>
            For an accounting firm, the integration layer is usually email,
            practice management, and document storage. The workflow is short and
            repeatable. The approval queue is what keeps the agent inside firm
            standards — every drafted reply is the partner&rsquo;s call, not the
            model&rsquo;s.
          </>
        }
      />

      <TrustBlock
        body={
          <>
            Client data — financial details, BAS supporting documents, draft
            accounts — is handled under sovereign residency on Bedrock (Sydney)
            or Azure (Australia East). Every drafted reply is approved or edited
            by a firm member before send. Every action is logged for review.
          </>
        }
      />

      <PricingSnapshot />

      <CTABand
        headline="See if Inbox Ops fits the firm."
        body="A 15-minute call, then a paid audit. The audit looks at one week of partner inbox activity and tells you what would shift."
        secondaryHref="/use-cases/accounting-bookkeeping"
        secondaryLabel="Accounting use case"
      />
    </>
  );
}
