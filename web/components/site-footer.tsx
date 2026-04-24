import Link from "next/link";
import { cn } from "@/lib/cn";
import { FOOTER_LEGAL, PRIMARY_NAV } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer
      className={cn(
        "bg-[var(--color-ink)] text-[var(--color-paper)]",
        "border-t border-[rgb(246_244_238_/_0.08)]",
      )}
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-6 pt-20 pb-10 lg:px-10 lg:pt-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Link
              href="/"
              aria-label="AAO Group — home"
              className="inline-flex items-baseline gap-[0.35rem]"
            >
              <span className="font-serif text-[1.5rem] leading-none tracking-[-0.02em] text-[var(--color-paper)]">
                aao
              </span>
              <span className="font-serif text-[1.5rem] leading-none tracking-[-0.02em] text-[rgb(246_244_238_/_0.55)]">
                group
              </span>
            </Link>
            <p className="mt-6 max-w-[34ch] text-[1.0625rem] leading-[1.55] text-[rgb(246_244_238_/_0.78)]">
              Secure AI operations for Australian businesses.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[rgb(246_244_238_/_0.45)]">
              Navigate
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-y-3 gap-x-6">
              {PRIMARY_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-block text-[0.9375rem] leading-none text-[var(--color-paper)]",
                      "transition-colors duration-200",
                      "hover:text-[rgb(246_244_238_/_0.65)]",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[rgb(246_244_238_/_0.45)]">
              Legal
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {FOOTER_LEGAL.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-block text-[0.9375rem] leading-none text-[var(--color-paper)]",
                      "transition-colors duration-200",
                      "hover:text-[rgb(246_244_238_/_0.65)]",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[0.75rem] tracking-[0.04em] text-[rgb(246_244_238_/_0.55)]">
              ABN 00 000 000 000
            </p>
          </div>
        </div>

        <div
          className={cn(
            "mt-20 flex flex-col gap-4 border-t pt-6",
            "border-[rgb(246_244_238_/_0.08)]",
            "md:flex-row md:items-center md:justify-between",
          )}
        >
          <p className="font-mono text-[0.75rem] tracking-[0.04em] text-[rgb(246_244_238_/_0.5)]">
            &copy; 2026 AAO Group Pty Ltd. All rights reserved.
          </p>
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[rgb(246_244_238_/_0.4)]">
            Made in Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
