import type { Metadata } from "next";
import { SopKnowledgeDemo } from "@/components/demo/sop-knowledge-demo";

export const metadata: Metadata = {
  title: "SOP knowledge demo",
  robots: { index: false, follow: false },
};

export default function SopKnowledgePage() {
  return <SopKnowledgeDemo />;
}
