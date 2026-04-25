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

const PATH = "/seo/ai-operations-mining-services";
const TITLE = "AI operations for mining services";
const DESCRIPTION =
  "AI operations for Australian mining services and industrial contractors. Compliance reporting, SOP retrieval, and quote packets drafted under approval.";

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
        areaServed={["Western Australia", "Australia"]}
        audienceType="Mining services and industrial contractors"
      />

      <SeoHero
        eyebrow="For mining services & industrial"
        title="AI operations for mining services contractors."
        lede="Compliance reports, SOPs, quote packets — all admin, all currently manual, all consuming senior people. The wedge is drafting them under approval, with citations, on a documented workflow."
        secondary={{
          href: "/use-cases/mining-services",
          label: "See the mining use case",
        }}
      />

      <ProblemBullets
        title="Where the admin pile sits."
        lede="Mining services contractors and industrial subcontractors share a documentation pattern that's almost identical."
        bullets={[
          {
            headline: "SOPs are everywhere and nowhere.",
            detail:
              "Procedures, manuals, JSAs, rate cards, past quotes — spread across SharePoint, Drive, and people's heads. Retrieval costs minutes per question, hours per day.",
          },
          {
            headline: "Reporting is hand-rolled every cycle.",
            detail:
              "Compliance summaries and incident roll-ups get rebuilt from scratch each time, by whoever has bandwidth that week.",
          },
          {
            headline: "Quote packets are inconsistent.",
            detail:
              "Same job type, two operators, two different documents. The customer can't tell that the price is right because the packet doesn't look it.",
          },
        ]}
      />

      <InstallBlock
        title="Three agents, one approval queue."
        lede="SOP retrieval, drafted reporting, and Quote Prep — all under the same governance posture. Senior staff approve, the agent learns from edits, the audit log keeps the trail."
        agents={[
          {
            name: "SOP",
            description:
              "Ingest SOPs, manuals, rate cards, and past quotes from SharePoint or Drive. Staff ask questions; the agent answers with source citations. No fabrication.",
          },
          {
            name: "Reporting",
            description:
              "Compliance summaries, incident roll-ups, and status reports drafted from approved templates and source data. Reviewed and approved by a senior operator.",
          },
          {
            name: "Quote Prep",
            description:
              "Scope notes turned into a draft quote against your rate card and standard inclusions. Operator prices, approves, and sends.",
          },
        ]}
        links={[
          { href: "/use-cases/mining-services", label: "Mining use case" },
          { href: "/trust", label: "Trust posture" },
        ]}
      />

      <HowItWorks
        intro={
          <>
            For mining services the integration layer reaches into SharePoint or
            Drive, email, and your document tool. The workflow is deterministic:
            same trigger, same shape of output. The approval queue keeps senior
            people in the loop on what gets returned to the field, what goes to
            the client, and what gets filed for compliance.
          </>
        }
      />

      <TrustBlock
        body={
          <>
            Compliance documents, SOPs, and pricing data are handled under
            sovereign residency on Bedrock (Sydney) or Azure (Australia East).
            Every drafted report or quote sits in the approval queue with the
            source documents and template version attached. Every retrieval
            answer carries a citation back to the source.
          </>
        }
      />

      <PricingSnapshot />

      <CTABand
        headline="See if SOP retrieval is your first agent."
        body="The audit looks at how much time staff spend asking questions of the document pile, and tells you whether SOP retrieval clears the bottleneck."
        secondaryHref="/use-cases/mining-services"
        secondaryLabel="Mining use case"
      />
    </>
  );
}
