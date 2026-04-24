import type { Metadata } from "next";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { CTABand } from "@/components/cta-band";
import { UseCaseCard } from "@/components/use-cases/use-case-card";
import { USE_CASES } from "@/lib/use-cases";

export const metadata: Metadata = {
  title: "Use cases",
  description:
    "Five verticals where governed AI operators consistently remove admin and recover revenue.",
};

export default function UseCasesIndexPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Use cases"
          title="Where AAO works."
          lede="Five verticals where governed AI operators consistently remove admin and recover revenue."
          as="h1"
        />

        <ul
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          {USE_CASES.map((useCase) => (
            <li key={useCase.slug} className="flex">
              <UseCaseCard useCase={useCase} />
            </li>
          ))}
        </ul>
      </Section>

      <CTABand
        headline="Don't see your vertical?"
        body="Most operational pain looks similar across SMBs. Book a 15-minute audit and we'll tell you whether AI fits your business."
      />
    </>
  );
}
