import type { Metadata } from "next";
import { MaintenanceRequestDemo } from "@/components/demo/maintenance-request-demo";

export const metadata: Metadata = {
  title: "Maintenance request demo",
  robots: { index: false, follow: false },
};

export default function MaintenanceRequestPage() {
  return <MaintenanceRequestDemo />;
}
