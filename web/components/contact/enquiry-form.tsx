"use client";

import { useState, useTransition, type FormEvent } from "react";
import { Button } from "@/components/button";
import { submitEnquiry } from "@/app/contact/actions";
import { cn } from "@/lib/cn";

type Status = "idle" | "success" | "error";

const labelClass = cn(
  "font-mono text-[0.6875rem] uppercase tracking-[0.22em]",
  "text-[var(--color-ink)]",
);

const fieldClass = cn(
  "mt-3 w-full bg-[var(--color-paper)] text-[var(--color-ink)]",
  "border border-[var(--color-rule)]",
  "px-4 py-3 font-sans text-[1rem] leading-[1.5]",
  "shadow-none rounded-none",
  "outline-none focus:border-[var(--color-ink)]",
  "placeholder:text-[var(--color-muted)]",
);

const hintClass = cn(
  "mt-2 font-sans text-[0.8125rem] leading-[1.5]",
  "text-[var(--color-muted)]",
);

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [pending, startTransition] = useTransition();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await submitEnquiry(formData);
      if (result.ok) {
        setStatus("success");
        setErrorMsg("");
      } else {
        setStatus("error");
        setErrorMsg(result.error);
      }
    });
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-4">
        <h3
          className={cn(
            "font-sans font-medium tracking-[-0.02em]",
            "text-[clamp(1.5rem,2.5vw,1.875rem)] leading-[1.15]",
          )}
        >
          Thanks. We&rsquo;ll be in touch within one business day.
        </h3>
        <p
          className={cn(
            "font-sans text-[0.9375rem] leading-[1.55]",
            "text-[var(--color-muted)]",
          )}
        >
          If it&rsquo;s urgent, book the audit slot above.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8" noValidate>
      <div className="flex flex-col">
        <label htmlFor="enquiry-name" className={labelClass}>
          Name
        </label>
        <input
          id="enquiry-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="enquiry-company" className={labelClass}>
          Company
        </label>
        <input
          id="enquiry-company"
          name="company"
          type="text"
          autoComplete="organization"
          required
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="enquiry-email" className={labelClass}>
          Email
        </label>
        <input
          id="enquiry-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="enquiry-phone" className={labelClass}>
          Phone <span className="normal-case tracking-normal text-[var(--color-muted)]">(optional)</span>
        </label>
        <input
          id="enquiry-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="enquiry-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          required
          rows={5}
          maxLength={2000}
          className={cn(fieldClass, "resize-y")}
        />
        <p className={hintClass}>
          What&rsquo;s the bottleneck? &mdash; 200 chars is plenty.
        </p>
      </div>

      {status === "error" && errorMsg ? (
        <p
          role="alert"
          className={cn(
            "font-sans text-[0.9375rem] leading-[1.5]",
            "text-[var(--color-ink)]",
            "border-l border-[var(--color-ink)] pl-4",
          )}
        >
          {errorMsg}
        </p>
      ) : null}

      <div>
        <Button
          variant="primary"
          size="lg"
          type="submit"
          disabled={pending}
          aria-busy={pending}
        >
          {pending ? "Sending…" : "Send enquiry"}
        </Button>
      </div>
    </form>
  );
}
