# Monthly impact report - {{client_trading_name}} - {{Month YYYY}}

> Per-PRD section 22 metrics and per-skill `aao-monthly-impact-analyst` output. Copy this file as `YYYY-MM-monthly-report.md`, populate from the skill output, operator-review, then send. Day 5 of each month: generate. Day 7: send.

**Reporting period:** {{YYYY-MM-01}} to {{YYYY-MM-31}}
**Prepared by:** {{operator_name}}, AAO Group
**Sent to:** {{client_owner_name}}, {{role}}
**Subscription tier:** {{Foundation / Operator / Embedded}}
**Workflows in scope:** {{list}}

---

## 1. Executive summary

> Three to five sentences. The owner reads this on their phone over coffee. Lead with the dollar or hour figure. Name the one thing that matters this month.

- 

## 2. Business impact

| Metric | This month | Last month | Pilot baseline | Trend |
|---|---|---|---|---|
| Hours saved | | | | |
| Cost saved (AUD) | | | | |
| Revenue influenced (AUD) | | | | |
| Customer response time | | | | |
| Error rate | | | | |
| Net promoter / sentiment proxy | | | | |

## 3. Operational metrics (per workflow)

### Workflow: {{workflow_name}}

| Metric | Value |
|---|---|
| Actions proposed | |
| Approved as drafted | |
| Approved with edits | |
| Rejected | |
| Escalated | |
| Approval rate (%) | |
| Average time-to-approve | |
| Guardrail rules triggered | |
| Incidents (count) | |
| Cost per action (AUD) | |

(Repeat block for each workflow.)

## 4. Risks and incidents

| ID | Date | Severity (S1-S4) | Summary | Status | RCA link |
|---|---|---|---|---|---|
| | | | | | `04-incidents/{{file}}.md` |

If no incidents: "No incidents in {{Month}}." Be honest.

## 5. Optimisations made this month

> Things AAO changed without bothering the client.

- 

## 6. Next-workflow recommendation

> Only if the current workflow is stable (approval rate >=80%, zero S1/S2 incidents, four consecutive weeks of operation). Otherwise: "Current workflow not yet stable; no expansion recommended this month."

- **Recommended workflow:** 
- **Why now:** 
- **Estimated incremental retainer impact:** $/mo
- **Decision needed by:** {{YYYY-MM-DD}}

## 7. Retainer justification narrative

> Two short paragraphs. Connect this month's outcomes to the retainer fee. If the math is bad, say so honestly and propose what to change.

- 

## 8. Approvals required from client this month

- [ ] {{e.g. Approve next workflow scope}}
- [ ] {{e.g. Approve guardrail change}}
- [ ] {{e.g. Approve approver change for X action class}}

## 9. Appendix

- Audit log export: {{link or "available on request"}}
- Guardrail spec version in force: v{{X.Y}} (`02-pilot/guardrail-spec.md`)
- Approval matrix version in force: v{{X.Y}} (`02-pilot/approval-matrix.md`)
- Next monthly check-in: {{YYYY-MM-DD}} at {{HH:MM}} AEST
