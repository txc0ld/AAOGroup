import type { Metadata } from "next";
import { InboxOpsDemo } from "@/components/demo/inbox-ops-demo";

export const metadata: Metadata = {
  title: "Inbox ops demo",
  robots: { index: false, follow: false },
};

export default function InboxOpsPage() {
  return <InboxOpsDemo />;
}
