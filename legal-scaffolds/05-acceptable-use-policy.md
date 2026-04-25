# Acceptable Use Policy (Schedule 5 to the MSA)

> **⚠️ DRAFT — Not legal advice. Pending counsel review before use with any client. Last updated 2026-04-25.**
>
> This AUP attaches to the Master Services Agreement and is referenced in every Statement of Work. It sets out what the Client and the Client's staff agree **not to do** with AAO-installed agents and infrastructure. Items marked ***⚠️ counsel:*** are flagged for legal review.

---

**Australian AI Operations Group Pty Ltd** · ABN 51 559 921 362 · hello@aaogroup.au

---

## Why this exists

Our workflows touch real customers, real money and real people. This Acceptable Use Policy keeps everyone safe — the Client, the Client's customers, AAO's other clients, and AAO's people. By signing the SOW, the Client agrees to follow this AUP and to make sure their staff do too.

If you're unsure whether something is allowed, ask us first: **hello@aaogroup.au**.

## What you agree not to do

The Client and the Client's personnel will not:

1. **Use a workflow for a prohibited purpose** (per the AI Limitations Disclosure §6 and PRD §16.3), including:
    - medical advice or diagnosis;
    - legal advice;
    - employment decisions;
    - credit or lending decisions;
    - autonomous financial transfers without per-transaction Approval;
    - decisions that affect a person's access to government services or benefits;
    - anything unlawful under Australian law.

2. **Share credentials**, login codes, MFA tokens, OAuth tokens or approval-channel access with anyone who is not a nominated Approver or a Client employee with a clear business need.

3. **Bypass an Approval gate** — for example, by writing automation that auto-clicks "approve", by setting up a forwarder that approves without human review, or by sharing an Approver account so multiple people can act under one identity.

4. **Insert sensitive data outside the agreed data classification** for the workflow. If the workflow is configured for L2 (Internal) data, do not paste L4 (Restricted) data into it. If the data class needs to change, raise a Change Request and let us re-design the workflow safely.

5. **Use AAO infrastructure for activities that breach Australian law**, including but not limited to:
    - the Privacy Act, the Spam Act, the Do Not Call Register Act;
    - copyright or other intellectual property law;
    - consumer protection law;
    - anti-discrimination law;
    - sanctions, anti-money-laundering or counter-terrorism financing law.

6. **Reverse-engineer, decompile or attempt to extract AAO IP** from the configuration, prompts, guardrails, runbooks or platform we deliver. The Workflow configuration the Client owns under the MSA does not include the underlying framework, skills library or templates.

7. **Use the Service to generate content designed to deceive** — for example, deepfakes of identifiable people, synthetic voices impersonating real individuals, or messages that misrepresent the sender.

8. **Probe, scan or attempt to penetrate AAO systems** without prior written authorisation. Bug reports are welcome; please send them to **security@aaogroup.au**. ***⚠️ counsel: confirm whether AAO should have a written responsible-disclosure policy referenced here.***

9. **Resell, sublicence or make the Service available to third parties** outside the Client's group of companies without AAO's prior written consent.

10. **Use the Service to compete with AAO** (e.g. to build a competing AI ops product).

## Reporting violations

If the Client becomes aware that someone has breached this AUP — including the Client's own staff — please report it promptly to **hello@aaogroup.au** (or **security@aaogroup.au** for security matters).

We will work with the Client to investigate and remediate. We may suspend the affected workflow under MSA clause 14.4 if continued operation poses a clear risk.

## Consequences

- A first non-serious breach: AAO will raise it with the Client owner and agree a remediation plan.
- A serious or repeated breach: AAO may suspend or terminate the affected SOW, or terminate the MSA, per clause 14.3 of the MSA.

## Updates

We may update this AUP from time to time. We will give the Client at least **30 days' written notice** before a material change takes effect. ***⚠️ counsel: confirm that unilateral AUP updates are acceptable, or whether material changes need re-signing.***

---

**Acknowledged for and on behalf of {{client_legal_name}}:**

Name: ___________________________
Title: ___________________________
Signature: _______________________
Date: ___________________________

---

> **End of Acceptable Use Policy scaffold.**
> **⚠️ DRAFT — Pending counsel review. Do not use with clients without legal sign-off.**
