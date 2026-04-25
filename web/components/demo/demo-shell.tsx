"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type DemoStepDef = {
  id: string;
  label: string;
  /** Auto-advance delay in ms before moving on. Last step uses 0 (sticks). */
  autoMs?: number;
  /** True if this step is "blocked" until the user clicks an embedded action (e.g. Approve). */
  awaitsAction?: boolean;
  render: (ctx: DemoStepContext) => ReactNode;
};

export type DemoStepContext = {
  goNext: () => void;
  reset: () => void;
  index: number;
  total: number;
  isManual: boolean;
};

type DemoShellProps = {
  workflowName: string;
  steps: DemoStepDef[];
};

export function DemoShell({ workflowName, steps }: DemoShellProps) {
  const [index, setIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const [tick, setTick] = useState(0); // forces remount on reset
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = steps.length;
  const current = steps[index];

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const goNext = useCallback(() => {
    clearTimer();
    setIndex((i) => Math.min(i + 1, total - 1));
  }, [total]);

  const reset = useCallback(() => {
    clearTimer();
    setIndex(0);
    setTick((t) => t + 1);
  }, []);

  // Auto-advance
  useEffect(() => {
    clearTimer();
    if (isManual) return;
    if (!current) return;
    if (current.awaitsAction) return;
    if (index >= total - 1) return;
    const ms = current.autoMs ?? 2000;
    timerRef.current = setTimeout(() => {
      setIndex((i) => Math.min(i + 1, total - 1));
    }, ms);
    return () => clearTimer();
  }, [index, isManual, current, total]);

  const ctx: DemoStepContext = useMemo(
    () => ({ goNext, reset, index, total, isManual }),
    [goNext, reset, index, total, isManual],
  );

  const reduced = useReducedMotion();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top bar */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b border-[var(--color-rule)]",
          "bg-[var(--color-paper)]",
        )}
      >
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
            Demo &middot; {workflowName}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={reset}
              className={cn(
                "border border-[var(--color-rule)] px-3 py-1.5",
                "font-mono text-[0.6875rem] uppercase tracking-[0.18em]",
                "text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]",
                "transition-colors duration-200",
              )}
            >
              Reset
            </button>
            <button
              type="button"
              onClick={() => setIsManual((v) => !v)}
              aria-pressed={isManual}
              className={cn(
                "border px-3 py-1.5",
                "font-mono text-[0.6875rem] uppercase tracking-[0.18em]",
                "transition-colors duration-200",
                isManual
                  ? "bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]"
                  : "border-[var(--color-rule)] text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]",
              )}
            >
              {isManual ? "Manual" : "Auto"}
            </button>
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
        </div>
      </header>

      {/* Body */}
      <div className="flex-1">
        <div
          className={cn(
            "mx-auto w-full max-w-[1100px] px-5 py-10",
            "grid grid-cols-1 gap-8 md:grid-cols-[180px_1fr] md:gap-10",
          )}
        >
          {/* Left rail: progress */}
          <aside className="md:pt-2">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Progress
            </p>
            <ol className="mt-5 flex flex-row gap-3 md:flex-col md:gap-4">
              {steps.map((s, i) => {
                const isCurrent = i === index;
                const isPast = i < index;
                return (
                  <li key={s.id} className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className={cn(
                        "inline-block h-2.5 w-2.5 rounded-full border",
                        isPast && "bg-[var(--color-ink)] border-[var(--color-ink)]",
                        isCurrent && "bg-[var(--color-ink)] border-[var(--color-ink)]",
                        !isPast && !isCurrent && "bg-transparent border-[var(--color-rule)]",
                      )}
                    />
                    <span
                      className={cn(
                        "hidden md:inline font-mono text-[0.75rem] tracking-[0.04em]",
                        isCurrent ? "text-[var(--color-ink)]" : "text-[var(--color-muted)]",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")} &nbsp; {s.label}
                    </span>
                  </li>
                );
              })}
            </ol>

            {/* Manual controls */}
            {isManual && index < total - 1 && !current?.awaitsAction ? (
              <div className="mt-8 hidden md:block">
                <button
                  type="button"
                  onClick={goNext}
                  className={cn(
                    "border border-[var(--color-ink)] px-4 py-2",
                    "font-mono text-[0.75rem] uppercase tracking-[0.18em]",
                    "text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]",
                    "transition-colors duration-200",
                  )}
                >
                  Next &rarr;
                </button>
              </div>
            ) : null}
          </aside>

          {/* Right pane: current step */}
          <main key={`${tick}-${index}`} className={cn("min-w-0", !reduced && "demo-enter")}>
            <div className="mb-6 flex items-baseline justify-between">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Step {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </p>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-ink)]">
                {current?.label}
              </p>
            </div>
            <div>{current?.render(ctx)}</div>

            {/* Mobile manual next */}
            {isManual && index < total - 1 && !current?.awaitsAction ? (
              <div className="mt-8 md:hidden">
                <button
                  type="button"
                  onClick={goNext}
                  className={cn(
                    "border border-[var(--color-ink)] px-4 py-2",
                    "font-mono text-[0.75rem] uppercase tracking-[0.18em]",
                    "text-[var(--color-ink)]",
                  )}
                >
                  Next &rarr;
                </button>
              </div>
            ) : null}
          </main>
        </div>
      </div>

      {/* Bottom strip */}
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

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);
  return reduced;
}
