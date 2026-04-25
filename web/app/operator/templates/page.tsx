import type { Metadata } from "next";
import {
  PageHeader,
  PanelCard,
  OperatorButton,
} from "@/components/operator/operator-ui";
import { MOCK_TEMPLATES } from "@/lib/operator-mock";

export const metadata: Metadata = { title: "Templates" };

export default function OperatorTemplatesPage() {
  const workflows = MOCK_TEMPLATES.filter((t) => t.category === "workflow");
  const governance = MOCK_TEMPLATES.filter((t) => t.category === "governance");

  return (
    <>
      <PageHeader
        eyebrow="Library"
        title="Templates"
        subtitle="The library of reusable workflow patterns and governance documents. Edit centrally, propagate per-deployment."
        actions={<OperatorButton variant="primary">+ New template</OperatorButton>}
      />

      <div className="px-6 py-5 space-y-5">
        <PanelCard title={`Workflow templates — ${workflows.length}`}>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {workflows.map((t) => (
              <TemplateCard key={t.slug} t={t} />
            ))}
          </ul>
        </PanelCard>

        <PanelCard title={`Governance templates — ${governance.length}`}>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {governance.map((t) => (
              <TemplateCard key={t.slug} t={t} />
            ))}
          </ul>
        </PanelCard>
      </div>
    </>
  );
}

function TemplateCard({
  t,
}: {
  t: { slug: string; name: string; description: string; lastUpdated: string };
}) {
  return (
    <li className="border border-[var(--color-rule)] p-3 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-medium text-[var(--color-ink)] text-[0.875rem]">{t.name}</p>
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-muted)] mt-0.5">
            Updated {t.lastUpdated} · {t.slug}
          </p>
        </div>
        <OperatorButton variant="outline">Use</OperatorButton>
      </div>
      <p className="font-serif text-[0.8125rem] leading-[1.5] text-[var(--color-ink-2)]">
        {t.description}
      </p>
    </li>
  );
}
