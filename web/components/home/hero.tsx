import { Button } from "@/components/button";
import { cn } from "@/lib/cn";

export function Hero() {
  return (
    <section
      data-tone="paper"
      className={cn(
        "w-full bg-[var(--color-paper)] text-[var(--color-ink)]",
        "pt-[clamp(5rem,14vw,10rem)] pb-[clamp(var(--section-pad-y-mobile),12vw,var(--section-pad-y))]",
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[var(--container-max)]",
          "px-[clamp(1.25rem,8vw,5rem)]",
        )}
      >
        <h1
          className={cn(
            "font-sans font-medium tracking-[-0.03em]",
            "text-[clamp(3rem,8vw,5.5rem)] leading-[0.98]",
            "max-w-[18ch]",
          )}
        >
          Secure AI operations for Australian businesses.
        </h1>
        <p
          className={cn(
            "mt-8 font-sans text-[1.125rem] leading-[1.55] text-[var(--color-muted)]",
            "max-w-[36rem]",
          )}
        >
          We install controlled AI operators inside your business — with
          approval gates, logs, and data boundaries.
        </p>
        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
          <Button as="a" href="/contact" variant="primary" size="lg">
            Book a 15-minute audit
          </Button>
          <Button as="a" href="/framework" variant="ghost" size="lg">
            See the framework
          </Button>
        </div>
      </div>
    </section>
  );
}
