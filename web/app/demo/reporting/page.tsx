import type { Metadata } from "next";
import { ReportingDemo } from "@/components/demo/reporting-demo";

export const metadata: Metadata = {
  title: "Reporting demo",
  robots: { index: false, follow: false },
};

export default function ReportingPage() {
  return <ReportingDemo />;
}
