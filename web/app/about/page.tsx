import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Prose } from "@/components/prose";
import { CTABand } from "@/components/cta-band";
import { PrincipleList } from "@/components/about/principle-list";

export const metadata: Metadata = {
  title: "About",
  description:
    "AAO Group installs governed AI operators inside real workflows for Australian small and mid-market businesses, and stays accountable for what they do.",
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="About"
          title="We install AI that earns trust."
          lede="AAO Group exists because Australian SMBs need controlled AI operations — not strategy decks."
          as="h1"
        />
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--color-ink)]">
            <Image
              src="/about/founder-placeholder.svg"
              alt="Founder of AAO Group"
              width={600}
              height={750}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center">
            <Prose className="mx-0">
              <p>
                AAO Group was started in Perth, Western Australia, to bring
                controlled AI operations to Australian small and mid-market
                businesses. We are not a consultancy that ships strategy decks.
                We install governed AI operators inside real workflows — and we
                stay accountable for what they do.
              </p>
              <p>
                Our customers are owners and operators in trades, mining
                services, accounting, legal admin, and property. They are
                time-poor, admin-heavy, and uninterested in AI hype. They want
                one thing: less repetitive work, with controls they can defend
                to a customer, an auditor, or themselves at 9pm on a Friday.
              </p>
              <p>
                We charge what serious operational infrastructure costs. We
                start narrow. We document everything. And we say no when AI is
                the wrong answer.
              </p>
            </Prose>
          </div>
        </div>
      </Section>

      <Section tone="paper" className="border-t border-[var(--color-rule)]">
        <SectionHeading
          eyebrow="Why this exists"
          title="AI as governed operational infrastructure."
          align="center"
        />
        <div className="mt-10">
          <Prose className="text-center">
            <p>
              We have watched Australian businesses sign AI contracts they
              could not govern, deploy chatbots they could not measure, and
              copy customer data into public AI tools they could not audit.
              AAO Group is the alternative: AI as governed operational
              infrastructure, with the approval queue as the product, not as a
              feature.
            </p>
          </Prose>
        </div>
      </Section>

      <Section tone="paper" className="border-t border-[var(--color-rule)]">
        <SectionHeading
          eyebrow="Operating principles"
          title="How we operate"
        />
        <PrincipleList />
      </Section>

      <CTABand
        headline="Ready to talk?"
        body="A 15-minute audit will tell you whether AAO is a fit for your business."
      />
    </>
  );
}
