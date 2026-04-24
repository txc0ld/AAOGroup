import { Hero } from "@/components/home/hero";
import { ProblemBand } from "@/components/home/problem-band";
import { OfferCards } from "@/components/home/offer-cards";
import { UseCasesStrip } from "@/components/home/use-cases-strip";
import { FrameworkPreview } from "@/components/home/framework-preview";
import { GovernanceBand } from "@/components/home/governance-band";
import { PricingAnchor } from "@/components/home/pricing-anchor";
import { CTABand } from "@/components/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemBand />
      <OfferCards />
      <UseCasesStrip />
      <FrameworkPreview />
      <GovernanceBand />
      <PricingAnchor />
      <CTABand
        headline="Ready to see where this lands in your business?"
        body="A 15-minute audit call, no slide deck."
      />
    </>
  );
}
