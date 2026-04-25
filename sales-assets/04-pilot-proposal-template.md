# First Agent Pilot — Proposal

*Reusable template for the fixed-scope pilot proposal that follows an AI Operations Audit. Replace `{{placeholders}}` with audit outputs. Sections marked* draft pending counsel review *should be confirmed with legal before issue.*

---

**Prepared for:** {{client_legal_name}} ({{client_trading_name}})
**Client ABN:** {{client_abn}}
**Client contact:** {{client_contact_name}}, {{client_contact_role}} — {{client_contact_email}} · {{client_contact_phone}}
**Issued by:** AAO Group · ABN 51 559 921 362 · hello@aaogroup.au
**Proposal date:** {{proposal_date}}
**Proposal version:** {{proposal_version}}
**Valid until:** {{valid_until_date}} (30 days from issue)

---

## 1. Pilot summary

This proposal covers the design, build, and operation of one workflow — **{{workflow_name}}** — for {{client_trading_name}}, delivered over {{pilot_duration_weeks}} weeks. The workflow runs in shadow mode first, then in approval mode, with every customer-facing or system-changing action gated by a named human approver. Pilot price is fixed. Outcomes are measured against agreed baselines and reported at the end of the pilot.

---

## 2. In-scope workflow

**Workflow name:** {{workflow_name}}
**Workflow purpose:** {{workflow_purpose_one_line}}

**Steps (deterministic, in order):**

1. {{step_1}}
2. {{step_2}}
3. {{step_3}}
4. {{step_4}}
5. {{step_5}}

**Risk tier (per AAO 5-tier model):** Tier {{risk_tier}} — {{risk_tier_label}}
**Sensitivity level (per AAO 5-level scale):** Level {{sensitivity_level}} — {{sensitivity_label}}

---

## 3. Inputs and integrations

| System | Access type | OAuth scopes / permissions | Read or write |
|---|---|---|---|
| {{system_1}} | {{access_1}} | {{scopes_1}} | {{rw_1}} |
| {{system_2}} | {{access_2}} | {{scopes_2}} | {{rw_2}} |
| {{system_3}} | {{access_3}} | {{scopes_3}} | {{rw_3}} |

**Integration principles applied:**
- Least privilege — only the scopes listed above are requested.
- Read-only first — write access only where required to fulfil the workflow.
- Revocable — client may revoke any integration at any time via the relevant provider console.
- Documented — model and provider register published on pilot start.

---

## 4. Constraints

- **Shadow mode for the first {{shadow_days}} business days.** Agent drafts every action, takes no real-world action, outputs reviewed at end of each day.
- **Approval mode thereafter.** Every customer-facing or system-changing action is gated by a named human approver per the matrix in §6.
- **No autonomous send / write.** Under no circumstance during pilot does the agent take action without human approval.
- **Narrow integration scope.** Only the systems listed in §3 are connected.
- **Limited data exposure.** Data classes restricted to those listed in §8.
- **Weekly review** with the AAO operator throughout the pilot.
- **Pause anytime.** {{client_trading_name}} may pause the pilot at any time without justification (commercial terms in §13).

---

## 5. Success metrics

Three to five measurable metrics with baselines from the audit and targets agreed below.

| Metric | Baseline | Target | Stretch | Measurement method |
|---|---:|---:|---:|---|
| {{metric_1}} | {{baseline_1}} | {{target_1}} | {{stretch_1}} | {{method_1}} |
| {{metric_2}} | {{baseline_2}} | {{target_2}} | {{stretch_2}} | {{method_2}} |
| {{metric_3}} | {{baseline_3}} | {{target_3}} | {{stretch_3}} | {{method_3}} |
| {{metric_4}} | {{baseline_4}} | {{target_4}} | {{stretch_4}} | {{method_4}} |
| Approval rate (drafts approved as-is or with minor edit) | n/a | ≥75% | ≥85% | Approval queue logs |

Metrics are measured against the {{measurement_period}} ending the day the pilot performance report is delivered.

---

## 6. Approval matrix

| Action | Primary approver | Backup approver | Device | SLA | Escalation |
|---|---|---|---|---|---|
| {{action_1}} | {{approver_1}} | {{backup_1}} | {{device_1}} | {{sla_1}} | {{escalation_1}} |
| {{action_2}} | {{approver_2}} | {{backup_2}} | {{device_2}} | {{sla_2}} | {{escalation_2}} |
| {{action_3}} | {{approver_3}} | {{backup_3}} | {{device_3}} | {{sla_3}} | {{escalation_3}} |

Approver identities and contact details confirmed in writing before pilot start. Changes to the approval matrix during pilot require both parties' written agreement.

---

## 7. Deliverables

AAO Group delivers:

- Configured agent workflow per §2.
- Approval queue (web + mobile) with notifications, SLAs, and escalation routing.
- Structured audit logs covering every tool call, approval decision, guardrail trip, escalation, and incident.
- Weekly status report during pilot weeks.
- End-of-pilot performance report (against §5 metrics, with measured values replacing baseline estimates).
- Staff handover guide.
- Managed Subscription proposal (issued at pilot end if outcomes warrant).

---

## 8. Data classes in scope

| Data class | Source | Sensitivity (0–4) | Handling rule |
|---|---|---:|---|
| {{data_class_1}} | {{source_1}} | {{sens_1}} | {{handling_1}} |
| {{data_class_2}} | {{source_2}} | {{sens_2}} | {{handling_2}} |
| {{data_class_3}} | {{source_3}} | {{sens_3}} | {{handling_3}} |

**Models and providers used in this workflow:**

| Step | Model | Provider | Region |
|---|---|---|---|
| {{step_a}} | {{model_a}} | {{provider_a}} | {{region_a}} |
| {{step_b}} | {{model_b}} | {{provider_b}} | {{region_b}} |

Provider contracts exclude use of {{client_trading_name}} data for model training. Data residency is documented per workflow and re-checked at each subscription renewal.

---

## 9. Timeline

| Week | Activities |
|---|---|
| **Week 1 — Build** | Kickoff, integration provisioning, classification rules defined, workflow built, approval queue configured |
| **Week 2 — QA + handover** | Internal AAO QA against historical data, client walkthrough and 90-minute training session |
| **Week 3 — Shadow mode** | Agent drafts every action, no sends, end-of-day review, discrepancy log |
| **Week 4 — Approval mode + report** | Live approval mode, daily standups for first 3 days, performance report at end of week |

---

## 10. Price

**AUD ${{pilot_price_aud}} (fixed), GST exclusive.**

Payment terms (subject to MSA / SOW between the parties — *draft pending counsel review*):
- 50% on signature.
- 50% on delivery of the pilot performance report (§7).
- Audit fee credit: ${{audit_credit_aud}} credited against pilot price if signed within 14 days of audit delivery.
- Net pilot price after audit credit: **AUD ${{net_pilot_price_aud}} GST exclusive**.
- Invoices payable 14 days NET from issue.
- Payments in AUD via direct debit or EFT to the bank account nominated on the invoice.

---

## 11. Out of scope

The following are explicitly out of scope for this pilot. Each can be scoped separately after pilot completion.

- {{out_of_scope_1}}
- {{out_of_scope_2}}
- {{out_of_scope_3}}
- {{out_of_scope_4}}
- Autonomous send mode for any workflow.
- Any workflow not listed in §2.
- Any data class not listed in §8.
- Any integration not listed in §3.

---

## 12. Acceptance criteria

The pilot is accepted by {{client_trading_name}} when:

- All success metrics in §5 are measured and reported.
- The approval queue is operational and being used by the named approvers.
- Client staff have completed the handover and 90-minute training.
- The end-of-pilot performance report has been delivered and walked through.
- Any incidents during the pilot have been documented and reviewed.

---

## 13. Cancellation terms

*(Draft pending counsel review. Final terms reside in the executed SOW.)*

- {{client_trading_name}} may cancel during the pilot at any time, without justification, by written notice.
- If cancelled before week 3, 50% of any unbilled balance is owed for work performed.
- If cancelled in or after week 3, the full pilot fee is owed.
- AAO Group may cancel only for material breach (non-payment, integration access withdrawn without replacement, or unsafe scope change), with 5 business days written notice.
- All client data held by AAO Group is returned or destroyed within 14 days of cancellation, at the client's election.

---

## 14. Standard terms and assumptions

*(Draft pending counsel review.)*

- Master services agreement (MSA) and statement of work (SOW) referenced separately. This proposal is the commercial summary; the MSA / SOW is the binding agreement.
- Confidentiality: each party treats the other's confidential information per the MSA confidentiality clause.
- IP: workflow configurations, prompts, and integration code are AAO Group IP under licence; client outputs (drafts, approvals, logs of client business) are client property.
- Liability cap: as set out in the MSA.
- Insurance: AAO Group holds professional indemnity and cyber liability insurance. Certificates available on request.
- Governing law: Western Australia. Disputes resolved per the MSA dispute clause.
- Data handling: per AAO Group security one-pager (aaogroup.au/trust).
- Force majeure: per the MSA.

---

## 15. Signature

**Accepted on behalf of {{client_legal_name}}:**

Name: ____________________________
Role: ____________________________
Signature: _______________________
Date: ____________________________

**Accepted on behalf of AAO Group (Australian AI Operations Group):**

Name: Taylor Mayor
Role: Founder
Signature: _______________________
Date: ____________________________

---

*AAO Group · ABN 51 559 921 362 · aaogroup.au · hello@aaogroup.au · Perth, Western Australia*
