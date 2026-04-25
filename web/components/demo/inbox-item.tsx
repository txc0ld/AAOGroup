import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type InboxItemProps = {
  from: string;
  subject: string;
  preview?: string;
  time?: string;
  badge?: string;
  unread?: boolean;
  attachments?: string[];
  className?: string;
  trailing?: ReactNode;
};

export function InboxItem({
  from,
  subject,
  preview,
  time,
  badge,
  unread = false,
  attachments,
  className,
  trailing,
}: InboxItemProps) {
  return (
    <div
      className={cn(
        "border border-[var(--color-rule)] bg-[var(--color-paper)]",
        "p-4 md:p-5",
        className,
      )}
    >
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-2 min-w-0">
          {unread ? (
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-ink)]"
            />
          ) : null}
          <p
            className={cn(
              "font-sans text-[0.9375rem] leading-none truncate",
              unread ? "text-[var(--color-ink)] font-medium" : "text-[var(--color-ink-2)]",
            )}
          >
            {from}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {badge ? (
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-[var(--color-muted)] border border-[var(--color-rule)] px-2 py-0.5">
              {badge}
            </span>
          ) : null}
          {time ? (
            <p className="font-mono text-[0.6875rem] tracking-[0.04em] text-[var(--color-muted)] whitespace-nowrap">
              {time}
            </p>
          ) : null}
        </div>
      </div>

      <p className="mt-2 font-sans text-[0.9375rem] leading-[1.4] text-[var(--color-ink)]">
        {subject}
      </p>

      {preview ? (
        <p className="mt-1 font-serif text-[0.875rem] leading-[1.5] text-[var(--color-muted)] line-clamp-2">
          {preview}
        </p>
      ) : null}

      {attachments && attachments.length > 0 ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {attachments.map((a) => (
            <li
              key={a}
              className="font-mono text-[0.6875rem] tracking-[0.02em] text-[var(--color-muted)] border border-[var(--color-rule)] px-2 py-0.5"
            >
              📎 {a}
            </li>
          ))}
        </ul>
      ) : null}

      {trailing}
    </div>
  );
}
