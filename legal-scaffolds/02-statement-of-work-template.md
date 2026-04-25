# Statement of Work — {{workflow_name}} Pilot

> **⚠️ DRAFT — Not legal advice. Pending counsel review before use with any client. Last updated 2026-04-25.**
>
> This SOW template is a commercial scaffold. It attaches to and is governed by the Master Services Agreement (`01-master-services-agreement.md`) between AAO and the Client. Replace `{{placeholders}}` with engagement-specific values. Items marked ***⚠️ counsel:*** are flagged for legal review.

---

## SOW Reference

| Field | Value |
|---|---|
| SOW Number | **{{sow_number}}** (e.g. AAO-2026-{{client_short}}-001) |
| MSA Date | **{{msa_effective_date}}** |
| SOW Effective Date | **{{sow_effective_date}}** |
| Engagement Type | **First Agent Pilot** (Offer 2 per AAO services) |
| Client | **{{client_legal_name}}** (ABN {{client_abn}}) |
| Client Owner | **{{client_owner_name}}**, {{client_owner_title}} |
| AAO Operator | **{{aao_operator_name}}** |
| AAO Platform Owner | **{{aao_platform_owner_name}}** |

---

## 1. Service Description

1.1. **Workflow name:** {{workflow_name}}

1.2. **Scope summary** (one paragraph):
{{workflow_summary}}

1.3. **In-scope systems / Integrations** (high level — full detail in §7):
- {{integration_1}}
- {{integration_2}}
- {{integration_3}}

1.4. **Volume assumptions** (basis on which the pilot is priced):
- Estimated **{{volume_per_week}}** Workflow runs per week.
- Estimated **{{approvals_per_week}}** Approvals per week.
- ***⚠️ counsel: confirm whether material variance from these volumes triggers a re-pricing right (see §9).***

## 2. Deliverables

Per PRD §9.2 (Pilot offer):

| # | Deliverable | Format |
|---|---|---|
| D1 | One Workflow built end-to-end and operating in approve-mode | Live in production |
| D2 | Approval queue configured per §4 Approval Matrix | Operational |
| D3 | Audit Log capturing every Output and Approval | Live; exportable CSV/JSON |
| D4 | Operator runbook (how to operate, escalate, and report) | Markdown / PDF |
| D5 | Approver training session | 1-hour live; recorded |
| D6 | First 30-day impact report | Markdown / PDF |

## 3. Acceptance Criteria

Per PRD §23.1. The pilot is **Accepted** when **all** of the following are satisfied during a continuous **14-day operational window** following go-live:

- (a) Workflow runs end-to-end without operator manual intervention for ≥ **{{acceptance_success_pct}}%** of executions;
- (b) Approval queue functions as designed; Approvers can approve, edit, reject and escalate from the agreed device;
- (c) No S1 incidents during the acceptance window;
- (d) ≤ **{{acceptance_s2_threshold}}** S2 incidents during the acceptance window;
- (e) Audit Log records every run with no gaps;
- (f) D4 (runbook) and D5 (training) are delivered.

3.2. The Client must notify AAO of acceptance or specific deficiencies within **5 business days** of the end of the acceptance window. Use of the Workflow in production beyond this period without written objection constitutes Acceptance.

3.3. ***⚠️ counsel: confirm "deemed acceptance" mechanism is appropriate for SMB clients who may not respond promptly.***

## 4. Approval Matrix

Per PRD §16 governance and §25.1 approval responsibility. The Client appoints the following Approvers for this Workflow:

| Decision type | Approver (name + role) | Backup Approver | Approval device | SLA to action |
|---|---|---|---|---|
| {{decision_1}} | {{approver_1}} | {{backup_1}} | {{device_1}} (e.g. Slack mobile) | {{sla_1}} (e.g. 4 business hours) |
| {{decision_2}} | {{approver_2}} | {{backup_2}} | {{device_2}} | {{sla_2}} |
| {{decision_3}} | {{approver_3}} | {{backup_3}} | {{device_3}} | {{sla_3}} |
| **Escalation** (Workflow flags risk) | {{escalation_owner}} | {{aao_operator_name}} | {{escalation_device}} | 1 business day |

4.2. The Client warrants Approvers are authorised to bind the Client to the actions they approve.

4.3. The Client will keep this matrix current and notify AAO in writing of any change.

## 5. Timeline

Indicative pilot timeline (4–6 weeks). Adjusted to {{kickoff_date}} kickoff:

| Week | AAO activities | Client activities |
|---|---|---|
| **W0 — Kickoff** | Confirm scope; collect credentials; provision environments | Nominate Approvers; provide access; sign Schedule 4 |
| **W1 — Build** | Configure Workflow, prompts, guardrails, Audit Log | Provide sample data; SME review |
| **W2 — Internal test** | Shadow-mode runs against historical data; tune | Approver(s) review sample Outputs |
| **W3 — Approve-mode go-live** | Workflow live in approve-mode; daily check-in | Approvers handle approval queue per §4 |
| **W4 — Acceptance window (start)** | Operate; Audit Log review; minor tuning | Continue Approvals; report any concerns |
| **W5 — Acceptance window (end)** | Acceptance review meeting; D6 report | Confirm Acceptance per §3 |
| **W6 — Handover or move to subscription** | Subscription proposal if Client elects to continue | Decide next step |

## 6. Fees

| Item | Amount (AUD, ex GST) | Timing |
|---|---|---|
| **Pilot fixed fee** | **AUD ${{pilot_fee}}** | Per schedule below |
| **Out of pocket (e.g. paid LLM credits beyond agreed allowance)** | At cost | Monthly, with receipts |
| **Subscription** (if Client elects to continue post-Acceptance) | **AUD ${{monthly_fee}} / month** for the {{tier}} tier | Monthly in advance, separate SOW |

**Payment schedule (pilot):**
- **50% deposit (AUD ${{deposit}})** invoiced on SOW signing — payable within 14 days.
- **50% balance (AUD ${{balance}})** invoiced on Acceptance — payable within 14 days.

***⚠️ counsel: confirm 50/50 split and "payable on Acceptance" position. An alternative is 40/30/30 (signing / go-live / Acceptance) which spreads cash flow but adds invoice cycles.***

GST is added to all amounts at the rate prescribed by Australian law.

## 7. Integrations and Access

7.1. **Systems and OAuth scopes required:**

| System | OAuth scopes / API permissions | Credentials provided by | Date provided |
|---|---|---|---|
| {{system_1}} | {{scopes_1}} | {{credential_owner_1}} | {{date_1}} |
| {{system_2}} | {{scopes_2}} | {{credential_owner_2}} | {{date_2}} |

7.2. **Credential handover process:**
- Credentials are handed over via {{credential_method}} (e.g. 1Password shared vault; never email or chat).
- AAO stores credentials per Schedule 2 (DPS) §Security Measures.
- Credentials are revoked at the end of the engagement per Schedule 7 (Offboarding).

7.3. **Client access AAO requires:**
- {{access_requirement_1}}
- {{access_requirement_2}}

## 8. Out of Scope

The following are **not** included in this SOW. They can be added by Change Request (see §9) or addressed in a separate SOW:

- Changes to the Client's own systems beyond OAuth setup.
- Custom development outside the configured Workflow.
- Workflows for prohibited use cases (Schedule 4).
- Migration of historical data older than {{historical_data_cutoff}}.
- Approver headcount beyond {{approver_count}} named individuals.
- Training for staff outside the Approver group.
- After-hours support beyond the SLA in Schedule 6.
- {{additional_oos_item}}

## 9. Change Requests

9.1. Either Party may request a change to this SOW in writing.

9.2. AAO will respond within **5 business days** with a written change note covering scope, timeline and fee impact.

9.3. No change is binding until both Parties sign a written change note.

9.4. If actual volume runs more than **{{volume_variance_threshold}}%** above the assumptions in §1.4 for two consecutive weeks, AAO may issue a re-pricing change request.

## 10. Cancellation

10.1. Cancellation of this SOW is governed by clause 14 of the MSA and Schedule 7 (Offboarding).

10.2. If the Client cancels before Acceptance, the deposit is non-refundable. The balance invoice is pro-rated against work completed to the date of notice. ***⚠️ counsel: confirm enforceability of "non-refundable deposit" position.***

## 11. Special Terms

(Use this section for engagement-specific commercial points, e.g. "Workflow handles invoices >AUD $10k requires dual Approval".)

- {{special_term_1}}
- {{special_term_2}}

---

## Signatures

**Signed for and on behalf of Australian AI Operations Group Pty Ltd:**

Name: ___________________________
Title: ___________________________
Signature: _______________________
Date: ___________________________

**Signed for and on behalf of {{client_legal_name}}:**

Name: ___________________________
Title: ___________________________
Signature: _______________________
Date: ___________________________

---

> **End of Statement of Work scaffold.**
> **⚠️ DRAFT — Pending counsel review. Do not execute without legal sign-off.**
