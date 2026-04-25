"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

type NavItem = {
  href: string;
  label: string;
  badge?: string;
};

type NavGroup = {
  group: string;
  items: NavItem[];
};

type OperatorSidebarProps = {
  pendingApprovals: number;
  openIncidents: number;
};

export function OperatorSidebar({ pendingApprovals, openIncidents }: OperatorSidebarProps) {
  const pathname = usePathname() ?? "/operator";

  const groups: NavGroup[] = [
    {
      group: "Workspace",
      items: [
        { href: "/operator", label: "Overview" },
        { href: "/operator/clients", label: "Clients" },
        { href: "/operator/workflows", label: "Workflows" },
        { href: "/operator/deployments", label: "Deployments" },
      ],
    },
    {
      group: "The wedge",
      items: [{ href: "/operator/approvals", label: "Approvals", badge: String(pendingApprovals) }],
    },
    {
      group: "Operations",
      items: [
        { href: "/operator/integrations", label: "Integrations" },
        { href: "/operator/logs", label: "Logs" },
        {
          href: "/operator/incidents",
          label: "Incidents",
          badge: openIncidents > 0 ? String(openIncidents) : undefined,
        },
        { href: "/operator/costs", label: "Costs" },
      ],
    },
    {
      group: "Library",
      items: [
        { href: "/operator/templates", label: "Templates" },
        { href: "/operator/reports", label: "Reports" },
        { href: "/operator/governance", label: "Governance" },
      ],
    },
  ];

  return (
    <aside
      className={cn(
        "hidden md:flex w-[220px] flex-col shrink-0",
        "border-r border-[var(--color-rule)] bg-[var(--color-paper)]",
        "h-[calc(100vh-3.25rem)] sticky top-[3.25rem]",
        "overflow-y-auto",
      )}
      aria-label="Operator navigation"
    >
      <nav className="flex flex-col py-4">
        {groups.map((g) => (
          <div key={g.group} className="px-3 pb-4">
            <p className="px-3 pb-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              {g.group}
            </p>
            <ul className="flex flex-col">
              {g.items.map((item) => {
                const isActive =
                  item.href === "/operator"
                    ? pathname === "/operator"
                    : pathname === item.href || pathname.startsWith(item.href + "/");
                const isWedge = g.group === "The wedge";
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between gap-2 px-3 py-1.5",
                        "text-[0.875rem] leading-[1.4]",
                        "border-l-2",
                        isActive
                          ? "border-l-[var(--color-ink)] font-medium text-[var(--color-ink)] bg-[var(--color-paper-2)]"
                          : "border-l-transparent text-[var(--color-ink-2)] hover:bg-[var(--color-paper-2)] transition-colors duration-150",
                      )}
                    >
                      <span>{item.label}</span>
                      {item.badge ? (
                        <span
                          className={cn(
                            "inline-flex min-w-[1.25rem] items-center justify-center px-1.5 py-0.5",
                            "font-mono text-[0.625rem] tracking-[0.04em] leading-none",
                            isWedge
                              ? "border"
                              : "bg-[var(--color-ink)] text-[var(--color-paper)]",
                          )}
                          style={
                            isWedge
                              ? { color: "var(--color-signal)", borderColor: "var(--color-signal)" }
                              : undefined
                          }
                        >
                          {item.badge}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      <div className="mt-auto border-t border-[var(--color-rule)] px-6 py-3">
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          AAO Operator · v0.4.1
        </p>
      </div>
    </aside>
  );
}
