import type { Metadata } from "next";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { CTABand } from "@/components/cta-band";
import { CalendlyEmbed } from "@/components/contact/calendly-embed";
import { EnquiryForm } from "@/components/contact/enquiry-form";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a 15-minute audit with Australian AI Operations Group, or send a short note about the bottleneck you want removed.",
};

const columnLabelClass = cn(
  "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
  "text-[var(--color-muted)]",
);

const columnHeadingClass = cn(
  "mt-3 font-sans font-medium tracking-[-0.02em]",
  "text-[clamp(1.25rem,2vw,1.5rem)] leading-[1.2]",
);

const reachLabelClass = cn(
  "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
  "text-[var(--color-muted)]",
);

const reachValueClass = cn(
  "mt-3 font-sans text-[1.0625rem] leading-[1.45]",
  "text-[var(--color-ink)]",
);

const reachNoteClass = cn(
  "mt-2 font-sans text-[0.9375rem] leading-[1.5]",
  "text-[var(--color-muted)]",
);

export default function ContactPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Contact"
          title="Book a 15-minute audit."
          lede="We will tell you whether AI can remove time from your operations — and how. If we cannot help, we will say so."
          as="h1"
        />
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
          <Reveal className="flex flex-col">
            <p className={columnLabelClass}>Book directly</p>
            <h2 className={columnHeadingClass}>
              Pick a time that suits you.
            </h2>
            <div className="mt-8 border-t border-[var(--color-rule)] pt-8">
              <CalendlyEmbed />
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col">
            <p className={columnLabelClass}>Or send us a note</p>
            <h2 className={columnHeadingClass}>
              Tell us where the time goes.
            </h2>
            <div className="mt-8 border-t border-[var(--color-rule)] pt-8">
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Other ways to reach us"
          title="Direct lines."
        />
        <div className="mt-12 grid grid-cols-1 gap-px bg-[var(--color-rule)] md:grid-cols-3">
          <Reveal className="bg-[var(--color-paper)] p-8">
            <p className={reachLabelClass}>Email</p>
            <p className={reachValueClass}>
              <a
                href="mailto:hello@aaogroup.au"
                className="underline-offset-[6px] decoration-[1px] hover:underline"
              >
                hello@aaogroup.au
              </a>
            </p>
          </Reveal>
          <Reveal delay={80} className="bg-[var(--color-paper)] p-8">
            <p className={reachLabelClass}>Office</p>
            <p className={reachValueClass}>Perth, Western Australia</p>
            <p className={reachNoteClass}>Visiting by appointment.</p>
          </Reveal>
          <Reveal delay={160} className="bg-[var(--color-paper)] p-8">
            <p className={reachLabelClass}>ABN</p>
            <p className={reachValueClass}>[placeholder — to be issued]</p>
          </Reveal>
        </div>
      </Section>

      <CTABand
        headline="Or jump back to the framework."
        body="If you'd rather understand what we install before booking, the methodology page is the next step."
        primaryHref="/framework"
        primaryLabel="See the framework"
      />
    </>
  );
}
