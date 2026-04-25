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

const PATH = "/seo/ai-admin-automation-perth";
const TITLE = "AI admin automation Perth";
const DESCRIPTION =
  "AI admin automation for Perth and Western Australian businesses. Perth-based, Australian-owned, founder-led. Onshore inference and human approval gates.";

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
        section={{ label: "About", href: "/about" }}
        areaServed={["Perth", "Western Australia", "Australia"]}
      />

      <SeoHero
        eyebrow="Perth · Western Australia"
        title="AI admin automation for Perth businesses."
        lede="Perth-based, Australian-owned, founder-led. We work with Western Australian businesses face-to-face — not via a global call centre. The first vertical is the trades and mining-services wedge that already runs WA's economy."
        secondary={{ href: "/about", label: "About AAO" }}
      />

      <ProblemBullets
        title="Why local matters for this work."
        lede="Three reasons Perth operators tell us they didn't go with a US or eastern-states vendor."
        bullets={[
          {
            headline: "An audit needs to look at real systems.",
            detail:
              "A workflow audit is a conversation in front of an inbox, a CRM, and a folder of past quotes. It's quicker, cleaner, and more honest in person.",
          },
          {
            headline: "Time zones and same-day decisions.",
            detail:
              "Most US vendors are asleep when a Perth operator needs an answer. Local means same-day, on local hours, in plain en-AU.",
          },
          {
            headline: "Sovereign residency is the easy promise.",
            detail:
              "We run inference on Bedrock (Sydney) or Azure (Australia East). No data leaves Australia without an explicit, documented exception.",
          },
        ]}
      />

      <InstallBlock
        title="The wedge for Perth: trades, mining services, professional admin."
        lede="The first vertical is whatever has the densest admin pile and the clearest approval bottleneck. In WA that's almost always trades, mining services, or a partner-led professional firm."
        agents={[
          {
            name: "Lead Intake",
            description:
              "Inbound enquiries drafted and queued for one-tap approval. Common across Perth trades and field-services businesses.",
          },
          {
            name: "Quote Prep",
            description:
              "Scope notes turned into a draft quote against your rate card. Operator prices, approves, sends.",
          },
          {
            name: "Inbox Ops",
            description:
              "Email triage and reply drafting under approval. The owner reads a 7am digest, not 23 emails.",
          },
          {
            name: "SOP & Reporting",
            description:
              "Procedures answered with citations. Compliance and status reports drafted from approved templates.",
          },
        ]}
        links={[
          { href: "/use-cases/trades-construction", label: "Trades use case" },
          { href: "/use-cases/mining-services", label: "Mining services use case" },
          { href: "/about", label: "About AAO" },
        ]}
      />

      <HowItWorks
        intro={
          <>
            For a Perth-based engagement the integration layer is the systems
            you already run — usually Microsoft 365 or Google Workspace, a CRM,
            and your document storage. The workflow is short and named. The
            approval queue and audit log are what make the system survivable
            once the operator goes back to running the business.
          </>
        }
      />

      <TrustBlock
        body={
          <>
            Inference runs on Bedrock (Sydney) or Azure (Australia East), so
            client data stays onshore. Every outbound action is approved by a
            human and logged. Per-workflow policy under version control.
            Quarterly governance review at the Operator and Embedded
            subscription tiers.
          </>
        }
      />

      <PricingSnapshot />

      <CTABand
        headline="Local audit, in person where it helps."
        body="A 15-minute call, then a paid audit. For Perth-based businesses we'll come to you for the workflow walkthrough."
        secondaryHref="/contact"
        secondaryLabel="Get in touch"
      />
    </>
  );
}
