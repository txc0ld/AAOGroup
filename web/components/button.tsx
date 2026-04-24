import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "inverse" | "outline" | "ghost";
type Size = "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps & {
  as?: "button";
} & Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps>;

type ButtonAsAnchor = CommonProps & {
  as: "a";
  href: string;
} & Omit<ComponentPropsWithoutRef<"a">, keyof CommonProps | "href">;

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const baseClass = cn(
  "inline-flex items-center justify-center",
  "font-sans leading-none tracking-[0.01em]",
  "transition-colors duration-200",
  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2",
  "disabled:opacity-50 disabled:pointer-events-none",
  "select-none whitespace-nowrap",
);

const sizeClass: Record<Size, string> = {
  md: "px-5 py-3 text-[0.9375rem]",
  lg: "px-7 py-4 text-[1rem]",
};

const variantClass: Record<Variant, string> = {
  primary: cn(
    "bg-[var(--color-ink)] text-[var(--color-paper)]",
    "border border-[var(--color-ink)]",
    "hover:bg-[var(--color-ink-2)] hover:border-[var(--color-ink-2)]",
    "focus-visible:ring-[var(--color-ink)] focus-visible:ring-offset-[var(--color-paper)]",
  ),
  inverse: cn(
    "bg-[var(--color-paper)] text-[var(--color-ink)]",
    "border border-[var(--color-paper)]",
    "hover:bg-[var(--color-paper-2)] hover:border-[var(--color-paper-2)]",
    "focus-visible:ring-[var(--color-paper)] focus-visible:ring-offset-[var(--color-ink)]",
  ),
  outline: cn(
    "bg-transparent text-[var(--color-ink)]",
    "border border-[var(--color-ink)]",
    "hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]",
    "focus-visible:ring-[var(--color-ink)] focus-visible:ring-offset-[var(--color-paper)]",
    "data-[on-ink=true]:text-[var(--color-paper)] data-[on-ink=true]:border-[var(--color-paper)]",
    "data-[on-ink=true]:hover:bg-[var(--color-paper)] data-[on-ink=true]:hover:text-[var(--color-ink)]",
    "data-[on-ink=true]:focus-visible:ring-[var(--color-paper)] data-[on-ink=true]:focus-visible:ring-offset-[var(--color-ink)]",
  ),
  ghost: cn(
    "bg-transparent border border-transparent",
    "text-[var(--color-ink)]",
    "underline-offset-[6px] decoration-[1px]",
    "hover:underline",
    "focus-visible:ring-[var(--color-ink)] focus-visible:ring-offset-[var(--color-paper)]",
    "data-[on-ink=true]:text-[var(--color-paper)]",
    "data-[on-ink=true]:focus-visible:ring-[var(--color-paper)] data-[on-ink=true]:focus-visible:ring-offset-[var(--color-ink)]",
  ),
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(baseClass, sizeClass[size], variantClass[variant], className);

  if (props.as === "a") {
    const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...anchorRest } = props;
    void _as; void _v; void _s; void _c; void _ch;
    return (
      <a className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...buttonRest } = props as ButtonAsButton;
  void _as; void _v; void _s; void _c; void _ch;
  return (
    <button type={buttonRest.type ?? "button"} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
