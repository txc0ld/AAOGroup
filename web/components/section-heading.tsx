import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <header
      className={cn(
        "flex flex-col",
        isCenter ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
            "text-[var(--color-muted)]",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "font-sans font-medium tracking-[-0.02em]",
          "text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]",
          eyebrow ? "mt-5" : undefined,
          "max-w-[24ch]",
          isCenter && "mx-auto",
        )}
      >
        {title}
      </Tag>
      {lede ? (
        <p
          className={cn(
            "mt-6 font-sans text-[1.125rem] leading-[1.55] text-[var(--color-muted)]",
            "max-w-[var(--measure)]",
            isCenter && "mx-auto",
          )}
        >
          {lede}
        </p>
      ) : null}
    </header>
  );
}
