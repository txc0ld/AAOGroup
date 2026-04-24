import type { Metadata } from "next";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";
import { CTABand } from "@/components/cta-band";
import { OfferSection } from "@/components/services/offer-section";
import { ComparisonTable } from "@/components/services/comparison-table";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three ways to work with aao group: AI Operations Audit, First Agent Pilot, and Managed AI Operations Subscription.",
};

const subscriptionTiers = [
  {
    name: "Foundation",
    price: "AUD $5,000–$8,500",
    cadence: "/month",
    summary: "1–2 workflows, monitoring, monthly optimisation.",
  },
  {
    name: "Operator",
    price: "AUD $10,000–$18,500",
    cadence: "/month",
    summary:
      "Multiple workflows, integrations, monthly strategy, reporting.",
  },
  {
    name: "Embedded",
    price: "AUD $20,000–$35,000+",
    cadence: "/month",
    summary:
      "Fractional AI leadership, custom infrastructure, deeper governance, priority support.",
  },
];

const subscriptionIncludes = [
  "Agent monitoring",
  "Workflow optimisation",
  "Monthly reporting",
  "Policy updates",
  "Prompt and workflow tuning",
  "Integration maintenance",
  "Cost tracking",
  "Incident review",
  "New workflow roadmap",
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <Section id="top" className="scroll-mt-24">
        <SectionHeading
          eyebrow="Services"
          title="Three ways to work with us."
          lede="Audit, pilot, subscription. Each one stands alone. Most clients go through all three."
          as="h1"
        />
        <nav
          aria-label="Service offers"
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--color-rule)] pt-6"
        >
          {[
            { href: "#audit", label: "01 Audit" },
            { href: "#pilot", label: "02 Pilot" },
            { href: "#subscription", label: "03 Subscription" },
            { href: "#compare", label: "Compare" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono text-[0.75rem] uppercase tracking-[0.22em] text-[var(--color-muted)]",
                "underline-offset-[6px] decoration-[1px] hover:text-[var(--color-ink)] hover:underline",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Section>

      {/* Offer 1: Audit */}
      <OfferSection
        id="audit"
        number="01"
        name="AI Operations Audit"
        purpose="A paid diagnostic that maps your workflows, ranks AI opportunities, and gives you a fixed-scope pilot proposal."
        included={{
          heading: "What's included",
          items: [
            "Owner interview",
            "Systems inventory",
            "Workflow walkthrough",
            "Sample document review",
            "Current process metrics review where available",
          ],
        }}
        deliverables={[
          "Workflow map",
          "AI opportunity matrix",
          "Data sensitivity map",
          "Risk register",
          "First-agent recommendation",
          "ROI estimate",
          "90-day implementation roadmap",
          "Pilot proposal",
        ]}
        price="AUD $2,500–$7,500"
        duration="1–2 weeks"
        idealFor="Owners who want a clear-headed read on where AI fits, before signing a longer engagement."
        cta={
          <Button as="a" href="/contact" variant="primary" size="lg">
            Book the audit
          </Button>
        }
      >
        <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] leading-[1.6] text-[var(--color-muted)] max-w-[var(--measure)]">
          Each deliverable is produced by a named skill from our internal Agent
          Skill Library — and reviewed by an operator before you see it.
        </p>
      </OfferSection>

      {/* Offer 2: Pilot */}
      <OfferSection
        id="pilot"
        number="02"
        name="First Agent Pilot"
        tone="ink"
        purpose="A controlled proof-of-value: one workflow, shadow mode first, human approval required, weekly review."
        included={{
          heading: "Pilot constraints",
          items: [
            "One primary workflow",
            "Shadow mode first",
            "Human approval required for outbound messages",
            "Narrow integration scope",
            "Limited data exposure",
          ],
        }}
        deliverables={[
          "Configured agent workflow",
          "Human approval queue",
          "Logs and activity report",
          "Staff handover guide",
          "Pilot performance report",
          "Managed subscription proposal",
        ]}
        price="AUD $10,000–$30,000 setup"
        duration="2–4 weeks"
        idealFor="Businesses ready to put a single agent into real operations under tight controls."
        cta={
          <Button as="a" href="/contact" variant="inverse" size="lg">
            Talk about a pilot
          </Button>
        }
      />

      {/* Offer 3: Subscription */}
      <OfferSection
        id="subscription"
        number="03"
        name="Managed AI Operations Subscription"
        purpose="Ongoing operations: monitoring, optimisation, monthly reporting, and continuous workflow tuning."
        included={{
          heading: "Subscription includes",
          items: subscriptionIncludes,
        }}
        deliverables={[
          "Live agent monitoring",
          "Monthly written report",
          "Quarterly governance review",
          "Prompt and policy version history",
          "Cost and usage dashboard",
          "Roadmap of new workflows",
        ]}
        price="From AUD $5,000/mo"
        duration="Ongoing, monthly billing"
        idealFor="Operators who want the agent run, watched, and improved on their behalf."
        cta={
          <Button as="a" href="/pricing" variant="primary" size="lg">
            See full pricing
          </Button>
        }
      >
        {/* Tiers grid */}
        <div>
          <h3 className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Tiers
          </h3>
          <ul className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {subscriptionTiers.map((tier) => (
              <li
                key={tier.name}
                className={cn(
                  "flex flex-col",
                  "bg-[var(--color-paper-2)]",
                  "border border-[var(--color-rule)]",
                  "p-6 md:p-7",
                )}
              >
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  {tier.name}
                </p>
                <p className="mt-4 font-sans text-[1.125rem] font-medium tracking-[-0.01em] text-[var(--color-ink)]">
                  {tier.price}
                  <span className="font-mono text-[0.875rem] font-normal tracking-normal text-[var(--color-muted)]">
                    {tier.cadence}
                  </span>
                </p>
                <p className="mt-4 font-sans text-[0.9375rem] leading-[1.55] text-[var(--color-muted)]">
                  {tier.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </OfferSection>

      {/* Comparison */}
      <Section id="compare" tone="paper" className="scroll-mt-24">
        <SectionHeading
          eyebrow="Compare"
          title="Side by side."
          lede="The same offers, lined up so you can see what changes between them."
        />
        <ComparisonTable />
      </Section>

      <CTABand
        headline="Not sure which one fits?"
        body="Start with a 15-minute call. We'll tell you which engagement is the honest next step."
      />
    </>
  );
}
