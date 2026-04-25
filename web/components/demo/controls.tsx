"use client";

import { cn } from "@/lib/cn";

type ControlsProps = {
  onReset?: () => void;
  onNext?: () => void;
  onPause?: () => void;
  paused?: boolean;
  showNext?: boolean;
  showPause?: boolean;
  showReset?: boolean;
  className?: string;
};

export function Controls({
  onReset,
  onNext,
  onPause,
  paused = false,
  showNext = true,
  showPause = false,
  showReset = true,
  className,
}: ControlsProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {showReset && onReset ? (
        <button
          type="button"
          onClick={onReset}
          className={cn(
            "border border-[var(--color-rule)] px-3 py-1.5",
            "font-mono text-[0.6875rem] uppercase tracking-[0.18em]",
            "text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]",
            "transition-colors duration-200",
          )}
        >
          Reset
        </button>
      ) : null}
      {showPause && onPause ? (
        <button
          type="button"
          onClick={onPause}
          aria-pressed={paused}
          className={cn(
            "border border-[var(--color-rule)] px-3 py-1.5",
            "font-mono text-[0.6875rem] uppercase tracking-[0.18em]",
            "text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]",
            "transition-colors duration-200",
          )}
        >
          {paused ? "Resume" : "Pause"}
        </button>
      ) : null}
      {showNext && onNext ? (
        <button
          type="button"
          onClick={onNext}
          className={cn(
            "border border-[var(--color-ink)] px-4 py-1.5",
            "font-mono text-[0.6875rem] uppercase tracking-[0.18em]",
            "text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]",
            "transition-colors duration-200",
          )}
        >
          Next &rarr;
        </button>
      ) : null}
    </div>
  );
}
