import { cn } from "@/lib/cn";

type PostureCardProps = {
  heading: string;
  body: string;
  className?: string;
};

export function PostureCard({ heading, body, className }: PostureCardProps) {
  return (
    <article
      className={cn(
        "card-hover flex flex-col",
        "bg-[var(--color-paper-2)]",
        "border border-[var(--color-rule)]",
        "p-6 md:p-7",
        className,
      )}
    >
      <h3
        className={cn(
          "font-sans text-[1.0625rem] font-medium tracking-[-0.01em] leading-[1.3]",
          "text-[var(--color-ink)]",
        )}
      >
        {heading}
      </h3>
      <p
        className={cn(
          "mt-4 font-sans text-[0.9375rem] leading-[1.6]",
          "text-[var(--color-muted)]",
        )}
      >
        {body}
      </p>
    </article>
  );
}
