import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { CTABand } from "@/components/cta-band";

export default function Home() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Test"
          title="Primitives render"
          lede="If you can read this in serif-free, monochrome calm — we're good."
        />
      </Section>
      <CTABand headline="Smoke test CTA" />
    </>
  );
}
