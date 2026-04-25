"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type DraftRevealProps = {
  /** Lines that progressively reveal, character by character. */
  lines: string[];
  /** ms per character */
  speed?: number;
  /** ms pause between lines */
  pause?: number;
  className?: string;
  onDone?: () => void;
};

export function DraftReveal({
  lines,
  speed = 12,
  pause = 200,
  className,
  onDone,
}: DraftRevealProps) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setLineIdx(lines.length);
      setCharIdx(0);
      setDone(true);
      onDoneRef.current?.();
      return;
    }
    if (lineIdx >= lines.length) {
      if (!done) {
        setDone(true);
        onDoneRef.current?.();
      }
      return;
    }
    const current = lines[lineIdx];
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((i) => i + 1);
      setCharIdx(0);
    }, pause);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx, lines, speed, pause, done]);

  return (
    <div
      className={cn(
        "border border-[var(--color-rule)] bg-[var(--color-paper)] p-6",
        className,
      )}
    >
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        Agent draft &middot; in progress
      </p>
      <div className="mt-4 border-l border-[var(--color-rule)] pl-5 min-h-[10rem]">
        {lines.map((line, i) => {
          if (i < lineIdx) {
            return (
              <p
                key={i}
                className={cn(
                  "font-serif text-[1rem] leading-[1.55] text-[var(--color-ink-2)]",
                  i > 0 && "mt-3",
                )}
              >
                {line}
              </p>
            );
          }
          if (i === lineIdx) {
            return (
              <p
                key={i}
                className={cn(
                  "font-serif text-[1rem] leading-[1.55] text-[var(--color-ink-2)]",
                  i > 0 && "mt-3",
                  !done && "demo-caret",
                )}
              >
                {line.slice(0, charIdx)}
              </p>
            );
          }
          return null;
        })}
      </div>
      <p className="mt-4 font-mono text-[0.6875rem] tracking-[0.04em] text-[var(--color-muted)]">
        {done ? "Draft complete &middot; queued for approval" : "Drafting…"}
      </p>
    </div>
  );
}
