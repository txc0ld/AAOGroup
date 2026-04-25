import { cn } from "@/lib/cn";

export type FormField = { label: string; value: string };

export type FormMockProps = {
  formName: string;
  receivedAt: string;
  fields: FormField[];
  className?: string;
};

export function FormMock({ formName, receivedAt, fields, className }: FormMockProps) {
  return (
    <div
      className={cn(
        "border border-[var(--color-rule)] bg-[var(--color-paper)]",
        "p-6",
        className,
      )}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--color-rule)] pb-3">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Inbound &middot; website form &middot; {formName}
        </p>
        <p className="font-mono text-[0.6875rem] tracking-[0.04em] text-[var(--color-muted)]">
          {receivedAt}
        </p>
      </div>
      <dl className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-[150px_1fr]">
        {fields.map((f) => (
          <div key={f.label} className="contents">
            <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)] md:pt-1">
              {f.label}
            </dt>
            <dd className="font-serif text-[0.9375rem] leading-[1.55] text-[var(--color-ink)]">
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
