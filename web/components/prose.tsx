import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ProseProps = {
  children: ReactNode;
  className?: string;
};

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[var(--measure)]",
        "font-serif text-[1.125rem] leading-[1.7] text-[var(--color-ink)]",
        "[&_p]:my-[1.25em]",
        "[&_p:first-child]:mt-0 [&_p:last-child]:mb-0",
        "[&_a]:text-[var(--color-ink)] [&_a]:underline [&_a]:underline-offset-[3px] [&_a]:decoration-[1px] [&_a]:decoration-[var(--color-rule)] [&_a:hover]:decoration-[var(--color-ink)]",
        "[&_strong]:font-semibold [&_strong]:text-[var(--color-ink)]",
        "[&_em]:italic",
        "[&_h1]:font-sans [&_h1]:font-medium [&_h1]:tracking-[-0.02em] [&_h1]:text-[clamp(2.25rem,4.5vw,3.5rem)] [&_h1]:leading-[1.05] [&_h1]:mt-0 [&_h1]:mb-8",
        "[&_h2]:font-sans [&_h2]:font-medium [&_h2]:tracking-[-0.015em] [&_h2]:text-[clamp(1.5rem,2.6vw,2rem)] [&_h2]:leading-[1.15] [&_h2]:mt-16 [&_h2]:mb-5",
        "[&_h3]:font-sans [&_h3]:font-medium [&_h3]:tracking-[-0.01em] [&_h3]:text-[1.25rem] [&_h3]:leading-[1.25] [&_h3]:mt-12 [&_h3]:mb-4",
        "[&_h4]:font-sans [&_h4]:font-medium [&_h4]:text-[1.0625rem] [&_h4]:leading-[1.3] [&_h4]:mt-10 [&_h4]:mb-3",
        "[&_ul]:my-[1.25em] [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:marker:text-[var(--color-muted)]",
        "[&_ol]:my-[1.25em] [&_ol]:pl-6 [&_ol]:list-decimal [&_ol]:marker:text-[var(--color-muted)]",
        "[&_li]:my-[0.5em] [&_li]:pl-1",
        "[&_hr]:my-12 [&_hr]:border-0 [&_hr]:border-t [&_hr]:border-[var(--color-rule)]",
        "[&_code]:font-mono [&_code]:text-[0.875em] [&_code]:bg-[var(--color-paper-2)] [&_code]:px-[0.35em] [&_code]:py-[0.1em] [&_code]:rounded-[2px]",
        "[&_pre]:font-mono [&_pre]:text-[0.875rem] [&_pre]:leading-[1.6] [&_pre]:bg-[var(--color-paper-2)] [&_pre]:p-5 [&_pre]:my-8 [&_pre]:overflow-x-auto [&_pre]:border [&_pre]:border-[var(--color-rule)]",
        "[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:rounded-none [&_pre_code]:text-inherit",
        "[&_blockquote]:my-10 [&_blockquote]:pl-6 [&_blockquote]:border-l [&_blockquote]:border-[var(--color-ink)] [&_blockquote]:font-serif [&_blockquote]:italic [&_blockquote]:text-[var(--color-ink-2)]",
        "[&_blockquote_p]:my-2",
        "[&_.pullquote]:my-12 [&_.pullquote]:font-serif [&_.pullquote]:not-italic [&_.pullquote]:text-[clamp(1.5rem,2.6vw,2rem)] [&_.pullquote]:leading-[1.25] [&_.pullquote]:tracking-[-0.01em] [&_.pullquote]:text-[var(--color-ink)] [&_.pullquote]:pl-8 [&_.pullquote]:border-l [&_.pullquote]:border-[var(--color-ink)]",
        "[&_.footnote]:font-mono [&_.footnote]:text-[0.8125rem] [&_.footnote]:leading-[1.5] [&_.footnote]:text-[var(--color-muted)] [&_.footnote]:mt-12 [&_.footnote]:pt-6 [&_.footnote]:border-t [&_.footnote]:border-[var(--color-rule)]",
        "[&_figure]:my-10",
        "[&_figcaption]:font-mono [&_figcaption]:text-[0.75rem] [&_figcaption]:uppercase [&_figcaption]:tracking-[0.18em] [&_figcaption]:text-[var(--color-muted)] [&_figcaption]:mt-3",
        "[&_img]:w-full [&_img]:h-auto",
        "[&_table]:w-full [&_table]:my-10 [&_table]:border-collapse [&_table]:font-sans [&_table]:text-[0.9375rem]",
        "[&_th]:text-left [&_th]:font-mono [&_th]:text-[0.6875rem] [&_th]:uppercase [&_th]:tracking-[0.18em] [&_th]:text-[var(--color-muted)] [&_th]:py-3 [&_th]:pr-6 [&_th]:border-b [&_th]:border-[var(--color-rule)]",
        "[&_td]:py-3 [&_td]:pr-6 [&_td]:border-b [&_td]:border-[var(--color-rule)] [&_td]:align-top",
        className,
      )}
    >
      {children}
    </div>
  );
}
