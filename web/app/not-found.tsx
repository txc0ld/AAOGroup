import Link from "next/link";
import { Section } from "@/components/section";

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] mb-6">404</p>
      <h1 className="font-sans font-medium text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
        Not the page.
      </h1>
      <p className="mt-6 text-[var(--color-muted)] max-w-[36rem] mx-auto">
        That route does not exist. Probably.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
        <Link href="/" className="underline underline-offset-4 decoration-[var(--color-rule)] hover:decoration-[var(--color-ink)]">
          Back to home
        </Link>
        <Link href="/use-cases" className="underline underline-offset-4 decoration-[var(--color-rule)] hover:decoration-[var(--color-ink)]">
          See use cases
        </Link>
        <Link href="/contact" className="underline underline-offset-4 decoration-[var(--color-rule)] hover:decoration-[var(--color-ink)]">
          Book the audit
        </Link>
      </div>
    </Section>
  );
}
