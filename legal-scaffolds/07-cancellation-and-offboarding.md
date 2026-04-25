# Cancellation and Offboarding (Schedule 7 to the MSA)

> **⚠️ DRAFT — Not legal advice. Pending counsel review before use with any client. Last updated 2026-04-25.**
>
> This Schedule attaches to the Master Services Agreement (`01-master-services-agreement.md`) and is referenced in clause 14 (Term and Termination). It describes what happens when a Client cancels or an engagement otherwise ends. Items marked ***⚠️ counsel:*** are flagged for legal review.

---

**Australian AI Operations Group Pty Ltd** · ABN 51 559 921 362 · hello@aaogroup.au

---

## 1. Notice Periods

| Engagement type | Notice required to terminate for convenience |
|---|---|
| **Pilot SOW** | Pilots run to completion. Either Party may terminate by mutual written agreement. Either Party may terminate for cause per MSA clause 14.3. |
| **Subscription SOW (during Initial Term)** | Per the Initial Term in the SOW. Early termination by the Client for convenience is not permitted unless the SOW expressly provides for it. ***⚠️ counsel: confirm whether to offer "early termination for convenience with kill fee" as a sales lever.*** |
| **Subscription SOW (after Initial Term, month-to-month)** | **30 days' written notice** by either Party. |

1.2. Notice is given by email to the contacts in the SOW, with a copy to **legal@aaogroup.au**.

## 2. Final Invoice

2.1. AAO will issue a final invoice within **5 business days** of the effective termination date covering:

- subscription fees up to the effective termination date (pro-rated for any partial month);
- any outstanding usage-based or out-of-pocket charges; and
- any agreed offboarding services beyond the included scope (see §3).

2.2. Pre-paid amounts that relate to a period after the effective termination date will be refunded **except** that:

- pilot deposits are non-refundable per the SOW;
- subscription month-in-progress at notice is not pro-rated **down** unless the SOW expressly provides for it.

2.3. ***⚠️ counsel: confirm pro-rata treatment. The "pro-rate up but not down" position is common in SaaS but should be reviewed for fairness under the Australian Consumer Law unfair contract terms regime.***

## 3. Offboarding Runbook

At the start of the notice period AAO will deliver the **Offboarding Runbook** to the Client. The runbook describes a sequence of steps to be completed by the end of the notice period. Standard inclusions:

| # | Step | Owner | Default timing |
|---|---|---|---|
| 1 | **Workflow configurations exported** (JSON per Workflow), delivered via the Client's chosen secure channel. | AAO | Within 5 business days of notice |
| 2 | **Audit Logs exported** (CSV/JSON for the retention period). | AAO | Within 10 business days of notice |
| 3 | **Approval queue archived** and read-only access provided for 30 days post-termination. | AAO | Day of termination |
| 4 | **Integrations revoked**: AAO disconnects its OAuth tokens, webhooks, API credentials. | AAO | Day of termination |
| 5 | **Client credentials returned or destroyed** per the agreement (see §4). | AAO | Within 5 business days of termination |
| 6 | **Final monthly report** delivered (workflow performance to date of termination). | AAO | Within 5 business days of termination |
| 7 | **Knowledge transfer call** (1 hour) with the Client owner and any successor provider. | AAO + Client | At Client's election, within 30 days of termination |

3.2. Additional offboarding services beyond this list (e.g. building a custom export, supporting a successor provider for an extended period, training the Client to operate workflows independently) are available at AAO's standard rates by Change Request.

## 4. Credentials and Access

4.1. **Client credentials held by AAO** (e.g. service-account passwords, API keys, secret-vault entries) will be either:

- (a) returned to the Client via a secure channel and then destroyed from AAO systems; or
- (b) destroyed in place with written confirmation,

at the Client's election, within **5 business days** of termination.

4.2. **AAO credentials issued to the Client** (if any — e.g. logins to AAO consoles or shared workspaces) will be deactivated within **5 business days** of termination.

## 5. Data Retention After Termination

5.1. **Default deletion timeline.** Per Schedule 2 (DPS) §11. Within **30 days** of the Client confirming receipt of the data export, AAO will delete Client data from active systems. Backups will age out per the standard backup rotation cycle.

5.2. **Earlier deletion on request.** The Client may request deletion before the standard cycle. AAO will accommodate where reasonably practicable.

5.3. **Legal or regulatory retention.** Where AAO must retain data to meet a legal or regulatory obligation, AAO will retain only the minimum required and delete it on expiry.

5.4. **Confirmation.** AAO will provide written confirmation of deletion on Client request.

5.5. ***⚠️ counsel: confirm that the 30-day window starts from "Client confirms receipt of export" rather than "termination date" — this protects against losing data before the Client has confirmed they have it. Also: should AAO commit to deletion of derived data (e.g. learned classifier weights specific to this Client), and how to evidence that?***

## 6. Surviving Obligations

The following clauses of the MSA survive termination:

- Confidentiality (clause 10) — for **5 years**.
- Data handling (clause 8 and Schedule 2) — until deletion is complete.
- IP (clause 9) — perpetual.
- Liability (clause 15) — for accrued claims.
- Fees and GST (clause 13) — for any unpaid amounts.
- Dispute resolution and governing law (clauses 18–19).

## 7. Intellectual Property at Termination

7.1. **Client retains:**

- Workflow configurations the Client paid for, in the form delivered at offboarding (subject to MSA clause 9.2 ***⚠️ counsel: see related note in MSA — the IP-vs-licence position may need revisiting***);
- Client data and Audit Logs the Client has exported.

7.2. **AAO retains:**

- the AAO framework, skills library, prompt templates, guardrail patterns and operational runbooks;
- pre-existing software, tools and libraries used to deliver the Service;
- improvements to the above developed during the engagement;
- anonymised, aggregated learnings (subject to MSA clause 9.4).

## 8. Re-engagement

8.1. There is **no penalty** for a former Client returning to AAO. We'd be glad to have you back.

8.2. **Pilot credits.** Where a Client paid for a pilot and elected not to proceed, the value of that pilot is **not** carried forward as a credit against future engagements unless expressly agreed in writing. ***⚠️ counsel: alternative position is "pilot credits expire 12 months from issue" — if AAO wants to use credits as a sales tool, this needs explicit terms.***

8.3. **Subscription pricing on return.** A returning Client is offered current pricing at the time of re-engagement. AAO does not guarantee preservation of historical rates.

## 9. References

9.1. After termination, AAO and the Client may, by mutual written agreement, list each other as a customer / supplier reference. Neither Party uses the other's logo or testimonials publicly without prior written consent.

---

> **End of Cancellation and Offboarding scaffold.**
> **⚠️ DRAFT — Pending counsel review. Do not use with clients without legal sign-off.**
