# Support and Service Level Agreement (Schedule 6 to the MSA)

> **⚠️ DRAFT — Not legal advice. Pending counsel review before use with any client. Last updated 2026-04-25.**
>
> This Schedule attaches to the Master Services Agreement and applies to **subscription** engagements. Pilot SOWs include support per the SOW timeline rather than this Schedule. Items marked ***⚠️ counsel:*** are flagged for legal review.

---

**Australian AI Operations Group Pty Ltd** · ABN 51 559 921 362 · hello@aaogroup.au

---

## 1. Coverage by Subscription Tier

All times are **Australian Western Standard Time (AWST, UTC+8)** unless stated.

| Tier | Coverage hours | Channels | Named contact |
|---|---|---|---|
| **Foundation** | Business hours: Mon–Fri 09:00–17:00 AWST (excluding WA public holidays) | Email + shared Slack channel | AAO operator (rotated) |
| **Operator** | Business hours **plus** on-call for S1 incidents 24/7 | Email + Slack + on-call phone | Named AAO operator |
| **Embedded** | Extended hours: Mon–Fri 07:00–19:00 AWST + on-call 24/7 + 4-hour weekend window | All Operator channels + direct mobile | Named AAO operator + named platform owner |

1.2. ***⚠️ counsel: confirm whether the on-call commitment for Operator/Embedded is appropriately scoped (e.g. excludes pre-existing incidents, force majeure).***

## 2. Severity Definitions

| Severity | Definition | Example |
|---|---|---|
| **S1** | Customer or end-customer data exposure; security breach; unauthorised action sent externally; workflow producing a continuous stream of incorrect external actions. | Approval queue compromised; PII leaked; spam being sent under the Client's brand. |
| **S2** | Workflow failure that resulted in an action being sent (incorrectly or to the wrong recipient), but contained to a single instance or small batch. | Wrong customer received a draft; price typo went out in a quote; outage of a critical integration that's stopping production. |
| **S3** | Workflow failure caught by an Approval gate (no external action). Or a workflow paused and not yet recovered. | Drafts queueing because integration auth expired; workflow flagged a risk and escalated. |
| **S4** | Minor issue, no operational impact. | Cosmetic UI glitch in approval queue; documentation correction; question. |

## 3. Response and Resolution Targets

| Severity | AAO acknowledgement | Status updates | Resolution target (best-effort) |
|---|---|---|---|
| **S1** | **Within 1 hour** of detection or Client report | Hourly until resolved | 8 business hours to mitigation; root cause within 5 business days |
| **S2** | **Within 4 hours** | Every 4 hours during business hours | 1 business day |
| **S3** | **Next business day** | Daily | 3 business days |
| **S4** | **Within 5 business days** | Weekly | At AAO's discretion |

3.2. **Best-effort.** Resolution targets are targets, not guarantees. AAO will use commercially reasonable efforts to meet them.

3.3. ***⚠️ counsel: AAO commits to acknowledgement times (which AAO controls) but not to resolution times (which depend on third-party providers, integrations, and root cause complexity). Confirm this framing.***

## 4. Escalation Path

If the Client is not satisfied with response or resolution progress:

| Escalation level | Contact | When to escalate |
|---|---|---|
| **L1 — Operator** | The named AAO operator on the engagement | First port of call |
| **L2 — Platform Owner** | AAO Platform Owner — escalations@aaogroup.au | If L1 has not acknowledged within SLA, or response is insufficient |
| **L3 — Client Owner / Founder** | Taylor — taylor@aaogroup.au | If L2 has not resolved or the matter is commercially significant |

4.2. The Client's escalation contact is recorded in the SOW.

## 5. Maintenance Windows

5.1. **Standard window:** Sundays 22:00–02:00 AWST.

5.2. AAO will give the Client at least **48 hours' written notice** before any planned maintenance affecting the Workflow.

5.3. Emergency maintenance (e.g. urgent security patches) may occur outside the standard window with notice as soon as practicable.

## 6. Out of Scope

The following are **not** covered by support:

- Outages of third-party providers (LLMs, integrations, infrastructure) where AAO is not the cause. AAO will keep the Client informed and follow the provider's status updates.
- Issues caused by Client-side changes (e.g. credential rotated, integration permissions changed, system the workflow depends on retired) without notifying AAO.
- Issues caused by Client breach of the Acceptable Use Policy.
- Custom development beyond the scope of the subscription. New work is handled via a Change Request or new SOW.
- Training or onboarding of staff beyond the Approver group as defined in the SOW.
- Restoration of data the Client has deleted or modified themselves.

## 7. Service Credits

> ***⚠️ counsel: this section is a placeholder. Service credits are a meaningful commercial commitment and need careful drafting. Options: (a) no service credits, with the resolution targets being best-effort; (b) modest credits (e.g. 5% of monthly fee) for missed S1 acknowledgement only; (c) tiered credits across S1–S2. Recommend (b) for v1.***

7.1. **Placeholder language for counsel to refine:**

If AAO fails to meet the **S1 acknowledgement target** (1 hour) more than once in any calendar month, the Client is entitled to a service credit of **5% of the monthly subscription fee** for that month, capped at **15%** in any 12-month period. Service credits are the Client's sole and exclusive remedy for missed SLA targets.

7.2. The Client must request a service credit in writing within **30 days** of the missed target.

## 8. Reporting

8.1. AAO will provide a monthly report covering:

- workflow volume and approval rates;
- incidents by severity;
- changes made;
- governance review summary;
- next-month focus.

8.2. The monthly report is sent within **5 business days** of month-end.

---

> **End of Support and SLA scaffold.**
> **⚠️ DRAFT — Pending counsel review. Do not use with clients without legal sign-off.**
