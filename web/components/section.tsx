import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  tone?: "paper" | "ink";
  className?: string;
  innerClassName?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "tone" | "className" | "children">;

export function Section<T extends ElementType = "section">({
  as,
  tone = "paper",
  className,
  innerClassName,
  children,
  ...rest
}: SectionProps<T>) {
  const Tag = (as ?? "section") as ElementType;
  const isInk = tone === "ink";

  return (
    <Tag
      data-tone={tone}
      className={cn(
        "w-full py-[clamp(var(--section-pad-y-mobile),12vw,var(--section-pad-y))]",
        isInk
          ? "bg-[var(--color-ink)] text-[var(--color-paper)]"
          : "bg-[var(--color-paper)] text-[var(--color-ink)]",
        className,
      )}
      {...rest}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[var(--container-max)]",
          "px-[clamp(1.25rem,8vw,5rem)]",
          innerClassName,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
