import type { Metadata } from "next";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Prose } from "@/components/prose";
import { CTABand } from "@/components/cta-band";
import { PricingTable } from "@/components/pricing/pricing-table";
import { PricingFAQ } from "@/components/pricing/pricing-faq";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Fixed-scope pricing for AI audits, pilots, and subscriptions. Priced against missed revenue, owner time, and admin hire — not seat count or token usage.",
};

export default function PricingPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Pricing"
          title="Priced against the cost of doing nothing."
          lede="We price against missed revenue, owner time, and admin hire — not seat count or token usage."
          as="h1"
        />
      </Section>

      <PricingTable />

      <Section>
        <SectionHeading
          eyebrow="How we price"
          title="Business value, not hours billed."
        />
        <div className="mt-10">
          <Prose>
            <p>
              We price against business value and replacement cost — what an
              additional admin hire, an operations manager, an AI consultant,
              or missed revenue actually costs you. Not against hours billed
              or tokens consumed. The number on the page is what you pay; if
              a workflow expands, we re-quote.
            </p>
          </Prose>
        </div>
        <p
          className="mx-auto mt-10 max-w-[var(--measure)] font-sans text-[0.9375rem] italic leading-[1.55] text-[var(--color-muted)]"
        >
          Audit fee credited toward the pilot if signed within 14 days.
          Recurring subscriptions are not discounted.
        </p>
      </Section>

      <PricingFAQ />

      <CTABand
        headline="Ready to see where this lands in your business?"
        body="A 15-minute audit call, no slide deck."
      />
    </>
  );
}
