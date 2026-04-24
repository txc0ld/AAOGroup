"use client";

import { useEffect } from "react";

const CALENDLY_SCRIPT_SRC =
  "https://assets.calendly.com/assets/external/widget.js";
const DEFAULT_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/aaogroup";

type CalendlyEmbedProps = {
  url?: string;
};

export function CalendlyEmbed({ url = DEFAULT_URL }: CalendlyEmbedProps) {
  useEffect(() => {
    const existing = document.querySelector(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`,
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Leave the script in place across navigations to avoid re-fetching.
    };
  }, []);

  return (
    <div className="w-full">
      <div
        className="calendly-inline-widget w-full"
        data-url={url}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}
