import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Demos",
  description: "Live agent prototypes for AAO discovery calls.",
  robots: { index: false, follow: false },
};

const DEMOS = [
  {
    href: "/demo/lead-intake",
    slug: "Lead intake",
    sub: "Trades & construction",
    teaser:
      "A website enquiry arrives at 7:42pm Friday. The agent extracts, drafts, queues. Owner approves Saturday morning.",
  },
  {
    href: "/demo/quote-prep",
    slug: "Quote prep",
    sub: "Field services",
    teaser:
      "Customer emails photos asking for a driveway quote. Agent reads photos, drafts a packet, flags missing info for the operator.",
  },
  {
    href: "/demo/inbox-ops",
    slug: "Inbox ops",
    sub: "Owner-operator inbox",
    teaser:
      "23 unread emails. Agent triages overnight, drafts replies for the priority items, batches the noise for the morning digest.",
  },
  {
    href: "/demo/sop-knowledge",
    slug: "SOP knowledge",
    sub: "Mining services",
    teaser:
      "Site supervisor asks for the LOTO procedure on Slack. Agent retrieves with citation, flags an outdated standard, queues a refresh.",
  },
  {
    href: "/demo/reporting",
    slug: "Weekly reporting",
    sub: "Owner briefing",
    teaser:
      "Friday 5pm. Agent compiles the weekly briefing from Xero, ServiceM8 and Slack. Pipeline, cash, jobs at risk, decisions for you.",
  },
  {
    href: "/demo/maintenance-request",
    slug: "Maintenance request",
    sub: "Property management",
    teaser:
      "Tenant reports a hot water leak at 8:47pm. Agent classifies, recommends a vendor, drafts brief and acknowledgement together.",
  },
];

export default function DemoIndexPage() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      {/* Top bar — minimal, mirrors demo shell */}
      <header className="sticky top-0 z-40 w-full border-b border-[var(--color-rule)] bg-[var(--color-paper)]">
        <div className="mx-auto flex h-14 w-full max-w-[1100px] items-center justify-between px-5">
          <Link
            href="/demo"
            className="font-sans text-[1.125rem] tracking-[-0.04em] leading-none text-[var(--color-ink)]"
            aria-label="Demo index"
          >
            <span className="font-light text-[var(--color-muted)]">[</span>
            <span className="font-semibold">aao</span>
            <span className="font-light text-[var(--color-muted)]">]</span>
          </Link>
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Demo &middot; index
          </p>
          <Link
            href="/"
            className={cn(
              "border border-[var(--color-rule)] px-3 py-1.5",
              "font-mono text-[0.6875rem] uppercase tracking-[0.18em]",
              "text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]",
              "transition-colors duration-200",
            )}
          >
            Exit demo
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1100px] px-5 py-16 md:py-24">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Six workflow prototypes
        </p>
        <h1 className="mt-5 max-w-[28ch] font-sans font-medium tracking-[-0.02em] text-[clamp(2rem,4.5vw,3rem)] leading-[1.05] text-[var(--color-ink)]">
          Six workflows. Same shape.
        </h1>
        <p className="mt-6 max-w-[60ch] font-serif text-[1.0625rem] leading-[1.55] text-[var(--color-muted)]">
          Trigger &rarr; extract &rarr; draft &rarr; approve. The approval card is the product. Each
          prototype below is a scripted, no-backend simulation of an installed AAO agent — the same
          shape your team would use day one.
        </p>

        <ul className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {DEMOS.map((d, i) => (
            <li key={d.href}>
              <Link
                href={d.href}
                className={cn(
                  "group block h-full border border-[var(--color-rule)] bg-[var(--color-paper)]",
                  "p-7",
                  "card-hover",
                )}
              >
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Workflow {String(i + 1).padStart(2, "0")} &middot; {d.sub}
                </p>
                <h2 className="mt-5 font-sans text-[1.5rem] tracking-[-0.015em] leading-[1.15] text-[var(--color-ink)]">
                  {d.slug}
                </h2>
                <p className="mt-4 font-serif text-[0.9375rem] leading-[1.55] text-[var(--color-muted)]">
                  {d.teaser}
                </p>
                <p className="mt-8 inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--color-ink)]">
                  Open demo <span className="card-arrow">&rarr;</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-16 max-w-[60ch] font-mono text-[0.75rem] tracking-[0.04em] text-[var(--color-muted)]">
          These are scripted prototypes — no real systems are connected. Auto-advance is on by
          default; switch to Manual in any demo to step through deliberately.
        </p>
      </main>

      <footer className="border-t border-[var(--color-rule)]">
        <div className="mx-auto w-full max-w-[1100px] px-5 py-4">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
            This is a static demonstration. No real systems are connected.
          </p>
        </div>
      </footer>
    </div>
  );
}
