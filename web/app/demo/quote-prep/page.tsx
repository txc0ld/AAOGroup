import type { Metadata } from "next";
import { QuotePrepDemo } from "@/components/demo/quote-prep-demo";

export const metadata: Metadata = {
  title: "Quote prep demo",
  robots: { index: false, follow: false },
};

export default function QuotePrepPage() {
  return <QuotePrepDemo />;
}
