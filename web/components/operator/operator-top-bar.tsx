import Link from "next/link";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/cn";
import { MOCK_OPERATOR } from "@/lib/operator-mock";

export function OperatorTopBar() {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-[var(--color-rule)]",
        "bg-[var(--color-paper)]",
      )}
    >
      <div className="flex h-[3.25rem] w-full items-center justify-between gap-4 px-4">
        {/* Left — logo + workspace switcher */}
        <div className="flex items-center gap-6">
          <Link href="/operator" className="flex items-center" aria-label="Operator dashboard home">
            <Logo variant="compact" />
          </Link>

          {/* Workspace switcher (mock) */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Workspace
            </span>
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-2 border border-[var(--color-rule)] px-3 py-1",
                "font-sans text-[0.8125rem] text-[var(--color-ink)]",
                "hover:bg-[var(--color-paper-2)] transition-colors duration-150",
              )}
            >
              <span>AAO Group · Production</span>
              <span aria-hidden className="text-[var(--color-muted)]">v</span>
            </button>
          </div>
        </div>

        {/* Centre — search */}
        <div className="hidden md:block flex-1 max-w-[420px]">
          <label className="sr-only" htmlFor="operator-search">
            Search clients, workflows, approvals, logs
          </label>
          <div className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)] font-mono text-[0.75rem]"
            >
              ⌕
            </span>
            <input
              id="operator-search"
              type="search"
              placeholder="Search clients, workflows, approvals, logs…"
              className={cn(
                "w-full border border-[var(--color-rule)] bg-[var(--color-paper)]",
                "pl-8 pr-3 py-1.5",
                "font-sans text-[0.8125rem] text-[var(--color-ink)] placeholder:text-[var(--color-muted)]",
                "focus:outline-none focus:border-[var(--color-ink)]",
              )}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 border border-[var(--color-rule)] px-1.5 py-0.5 font-mono text-[0.625rem] text-[var(--color-muted)]"
            >
              ⌘ K
            </span>
          </div>
        </div>

        {/* Right — user pill */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className={cn(
              "hidden md:inline-flex items-center gap-2 border border-[var(--color-rule)] px-2.5 py-1",
              "hover:bg-[var(--color-paper-2)] transition-colors duration-150",
            )}
          >
            <span
              aria-hidden
              className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] font-sans text-[0.625rem]"
            >
              {MOCK_OPERATOR.name
                .split(" ")
                .map((p) => p[0])
                .join("")}
            </span>
            <span className="font-sans text-[0.75rem] text-[var(--color-ink)]">
              {MOCK_OPERATOR.email}
            </span>
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              · {MOCK_OPERATOR.role}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
