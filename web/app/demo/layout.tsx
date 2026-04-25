import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DemoBodyClass } from "@/components/demo/demo-body-class";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Demo",
};

export default function DemoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <DemoBodyClass />
      {children}
    </div>
  );
}
