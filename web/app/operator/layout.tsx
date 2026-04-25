import type { Metadata } from "next";
import type { ReactNode } from "react";
import { OperatorBodyClass } from "@/components/operator/operator-body-class";
import { OperatorSidebar } from "@/components/operator/operator-sidebar";
import { OperatorTopBar } from "@/components/operator/operator-top-bar";
import { pendingApprovalsCount, openIncidentsCount } from "@/lib/operator-mock";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: { default: "Operator", template: "%s · AAO Operator" },
};

export default function OperatorLayout({ children }: { children: ReactNode }) {
  const pendingApprovals = pendingApprovalsCount();
  const openIncidents = openIncidentsCount();

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <OperatorBodyClass />
      <OperatorTopBar />
      <div className="flex">
        <OperatorSidebar pendingApprovals={pendingApprovals} openIncidents={openIncidents} />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
