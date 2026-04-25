import type { Metadata } from "next";
import { LeadIntakeDemo } from "@/components/demo/lead-intake-demo";

export const metadata: Metadata = {
  title: "Lead intake demo",
  robots: { index: false, follow: false },
};

export default function LeadIntakePage() {
  return <LeadIntakeDemo />;
}
