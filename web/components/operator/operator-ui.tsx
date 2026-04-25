import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

// Page header used at the top of every operator route.
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  actions,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  breadcrumbs?: { href?: string; label: string }[];
}) {
  return (
    <header className="border-b border-[var(--color-rule)] px-6 py-5">
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <nav aria-label="Breadcrumb" className="mb-2">
          <ol className="flex flex-wrap items-center gap-1 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            {breadcrumbs.map((b, i) => (
              <li key={`${b.label}-${i}`} className="flex items-center gap-1">
                {b.href ? (
                  <Link href={b.href} className="hover:text-[var(--color-ink)] transition-colors">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-[var(--color-ink)]">{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 ? <span aria-hidden>›</span> : null}
              </li>
            ))}
          </ol>
        </nav>
      ) : null}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          {eyebrow ? (
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-1 font-sans text-[1.625rem] tracking-[-0.015em] leading-[1.15] text-[var(--color-ink)]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-1 font-sans text-[0.875rem] text-[var(--color-muted)] max-w-[80ch]">
              {subtitle}
            </p>
          ) : null}
        </div>
        {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
      </div>
    </header>
  );
}

// Status pill — variant "signal" for pending/pilot, "ink" for active/approved, "muted" for archived/resolved
export function StatusPill({
  children,
  variant = "muted",
  className,
}: {
  children: ReactNode;
  variant?: "signal" | "ink" | "muted" | "outline";
  className?: string;
}) {
  if (variant === "signal") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 px-2 py-0.5 border",
          "font-mono text-[0.625rem] uppercase tracking-[0.18em] leading-none",
          className,
        )}
        style={{ color: "var(--color-signal)", borderColor: "var(--color-signal)" }}
      >
        <span
          aria-hidden
          className="inline-block h-1 w-1 rounded-full"
          style={{ background: "var(--color-signal)" }}
        />
        {children}
      </span>
    );
  }
  if (variant === "ink") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 px-2 py-0.5",
          "bg-[var(--color-ink)] text-[var(--color-paper)]",
          "font-mono text-[0.625rem] uppercase tracking-[0.18em] leading-none",
          className,
        )}
      >
        {children}
      </span>
    );
  }
  if (variant === "outline") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 px-2 py-0.5 border border-[var(--color-ink)]",
          "text-[var(--color-ink)]",
          "font-mono text-[0.625rem] uppercase tracking-[0.18em] leading-none",
          className,
        )}
      >
        {children}
      </span>
    );
  }
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 border border-[var(--color-rule)]",
        "text-[var(--color-muted)]",
        "font-mono text-[0.625rem] uppercase tracking-[0.18em] leading-none",
        className,
      )}
    >
      {children}
    </span>
  );
}

// Risk pill — only tier 4/5 use signal colour
export function RiskPill({ tier }: { tier: 1 | 2 | 3 | 4 | 5 }) {
  const isHigh = tier >= 4;
  return (
    <span
      className={cn(
        "inline-flex items-center px-1.5 py-0.5 border",
        "font-mono text-[0.625rem] uppercase tracking-[0.18em] leading-none",
      )}
      style={
        isHigh
          ? { color: "var(--color-signal)", borderColor: "var(--color-signal)" }
          : { color: "var(--color-ink-2)", borderColor: "var(--color-rule)" }
      }
    >
      Tier {tier}
    </span>
  );
}

// Stat card — used on overview
export function StatCard({
  label,
  value,
  delta,
  hint,
}: {
  label: string;
  value: string;
  delta?: string;
  hint?: string;
}) {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-4">
      <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        {label}
      </p>
      <p className="mt-2 font-sans text-[1.75rem] tracking-[-0.02em] leading-none text-[var(--color-ink)]">
        {value}
      </p>
      {delta ? (
        <p className="mt-1 font-mono text-[0.6875rem] tracking-[0.04em] text-[var(--color-muted)]">
          {delta}
        </p>
      ) : null}
      {hint ? (
        <p className="mt-3 font-sans text-[0.75rem] text-[var(--color-muted)]">{hint}</p>
      ) : null}
    </div>
  );
}

// Generic data table primitives
export function DataTable({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "border border-[var(--color-rule)] bg-[var(--color-paper)] overflow-x-auto",
        className,
      )}
    >
      <table className="w-full border-collapse">{children}</table>
    </div>
  );
}

export function Th({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <th
      className={cn(
        "text-left px-3 py-2 font-mono text-[0.625rem] uppercase tracking-[0.18em] font-normal",
        "text-[var(--color-muted)] border-b border-[var(--color-rule)]",
        className,
      )}
      scope="col"
    >
      {children}
    </th>
  );
}

export function Td({ children, className, mono }: { children: ReactNode; className?: string; mono?: boolean }) {
  return (
    <td
      className={cn(
        "px-3 py-2 align-middle",
        "border-b border-[var(--color-rule)]",
        mono ? "font-mono text-[0.75rem]" : "font-sans text-[0.8125rem]",
        "text-[var(--color-ink-2)]",
        className,
      )}
    >
      {children}
    </td>
  );
}

// Filter/search bar (decorative — no interaction)
export function FilterBar({ children }: { children: ReactNode }) {
  return (
    <div className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-3 flex flex-wrap items-center gap-2">
      {children}
    </div>
  );
}

export function SearchInput({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative flex-1 min-w-[180px]">
      <span
        aria-hidden
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)] font-mono text-[0.75rem]"
      >
        ⌕
      </span>
      <input
        type="search"
        placeholder={placeholder}
        className={cn(
          "w-full border border-[var(--color-rule)] bg-[var(--color-paper)]",
          "pl-8 pr-3 py-1.5",
          "font-sans text-[0.8125rem] text-[var(--color-ink)] placeholder:text-[var(--color-muted)]",
          "focus:outline-none focus:border-[var(--color-ink)]",
        )}
      />
    </div>
  );
}

export function FilterChip({ children, active }: { children: ReactNode; active?: boolean }) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center px-2.5 py-1",
        "font-mono text-[0.6875rem] uppercase tracking-[0.18em] leading-none",
        "border transition-colors duration-150",
        active
          ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]"
          : "border-[var(--color-rule)] text-[var(--color-ink-2)] hover:bg-[var(--color-paper-2)]",
      )}
    >
      {children}
    </button>
  );
}

export function OperatorButton({
  children,
  variant = "outline",
  className,
}: {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center px-3 py-1.5",
        "font-sans text-[0.8125rem] leading-none",
        "transition-colors duration-150",
        variant === "primary" &&
          "bg-[var(--color-ink)] text-[var(--color-paper)] border border-[var(--color-ink)] hover:bg-[var(--color-ink-2)]",
        variant === "outline" &&
          "border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]",
        variant === "ghost" &&
          "border border-[var(--color-rule)] text-[var(--color-ink-2)] hover:bg-[var(--color-paper-2)]",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function PanelCard({
  title,
  action,
  children,
  className,
}: {
  title: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "border border-[var(--color-rule)] bg-[var(--color-paper)]",
        className,
      )}
    >
      <header className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--color-rule)]">
        <h2 className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          {title}
        </h2>
        {action}
      </header>
      <div className="p-4">{children}</div>
    </section>
  );
}

export function NoticeBar({ tone = "muted", children }: { tone?: "muted" | "signal"; children: ReactNode }) {
  if (tone === "signal") {
    return (
      <p
        className="border px-3 py-2 font-mono text-[0.75rem]"
        style={{ color: "var(--color-signal)", borderColor: "var(--color-signal)" }}
      >
        {children}
      </p>
    );
  }
  return (
    <p className="border border-[var(--color-rule)] px-3 py-2 font-mono text-[0.75rem] text-[var(--color-muted)]">
      {children}
    </p>
  );
}
