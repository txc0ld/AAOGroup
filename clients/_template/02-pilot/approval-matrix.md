# Approval matrix - {{client_trading_name}} - {{workflow_name}}

> Defines where humans must approve, edit, reject or escalate AI-proposed actions in this workflow. Output of `aao-approval-policy-designer`. This document MUST be signed by the client owner before the workflow runs in live (non-shadow) mode.

**Workflow name:** {{workflow_name}}
**Workflow version:** {{vMAJOR.MINOR}}
**Effective from:** {{YYYY-MM-DD}}
**Author:** {{operator_name}}
**Last reviewed:** {{YYYY-MM-DD}}
**Next review due:** {{YYYY-MM-DD - 90 days from effective}}

---

## 1. Scope

- **What the workflow does (one sentence):** 
- **What the workflow does NOT do (explicit out-of-scope):** 
- **Sensitivity classification (per AAO 5-level scale):** L{{1-5}}
- **Risk appetite assumed:** {{1-5}}

## 2. Approval matrix

| Action type | Approver role | Approver named user | Device required | SLA (business hours) | Escalation if SLA missed | Audit metadata captured |
|---|---|---|---|---|---|---|
| {{e.g. Send draft quote to client}} | {{Sales lead}} | {{name}} | {{Mobile or desktop}} | {{2h}} | {{Ops manager after 2h, owner after 4h}} | actor, timestamp, IP, action, before/after diff, model version |
| | | | | | | |
| | | | | | | |
| | | | | | | |

**Default action if all approvers exhausted:** hold for human; never auto-send.

## 3. Action classes (legend)

- **Auto-execute:** AI may take the action without prior approval. Logged. Reversible.
- **Approve-then-execute:** AI proposes; named approver clicks Approve; AI executes.
- **Edit-then-execute:** AI proposes a draft; approver edits if needed; approver executes.
- **Human-only:** AI may not propose. Listed for completeness so future operators do not re-add it without thinking.

## 4. Escalation paths

| Trigger | Escalates to | Channel | Time-to-respond |
|---|---|---|---|
| Approver unreachable past SLA | {{role}} | {{SMS / phone / email}} | {{Xh}} |
| Confidence below threshold {{X}} | {{role}} | {{channel}} | {{Xh}} |
| Guardrail violation flagged | {{role}} | {{channel}} | {{immediate}} |
| Three consecutive rejections | Operator (AAO) | Slack #{{channel}} or {{email}} | Same business day |

## 5. Audit metadata fields (per action)

Every approved or auto-executed action records, at minimum:

- Timestamp (ISO 8601, AEST)
- Actor (system user ID + named human approver if any)
- Action class
- Inputs hash (so we can reproduce without storing PII)
- Output (full text or document reference)
- Approver decision (approved / edited / rejected / escalated)
- Edits made (diff)
- Model + version
- Guardrail rules triggered (none / list)

Logs retained for 24 months minimum, per `legal-scaffolds/03-data-processing-schedule.md`.

## 6. Change log

| Date | Version | Change | Author | Approved by |
|---|---|---|---|---|
| {{YYYY-MM-DD}} | v1.0 | Initial issue | {{operator_name}} | {{client_owner_name}} |
| | | | | |

---

**Client owner sign-off:** _________________________ ({{name, role}}) Date: {{YYYY-MM-DD}}

**AAO operator sign-off:** _________________________ ({{operator_name}}) Date: {{YYYY-MM-DD}}
