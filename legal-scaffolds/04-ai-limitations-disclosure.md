# AI Limitations Disclosure (Schedule 4 to the MSA)

> **⚠️ DRAFT — Not legal advice. Pending counsel review before use with any client. Last updated 2026-04-25.**
>
> This Disclosure is sent to the Client before signing the Statement of Work and is signed at the same time. It is intentionally written in plain English and is **client-facing**. Items marked ***⚠️ counsel:*** are for legal review only — they will be removed from the version sent to clients.

---

**Australian AI Operations Group Pty Ltd**
ABN 51 559 921 362
Perth, WA
hello@aaogroup.au · privacy@aaogroup.au

---

## What this document is

This is a plain-English summary of how AI works in the workflows we build for you, what it can and cannot do, and what we ask of you in return. It sits alongside the Master Services Agreement and the Statement of Work, and is signed by both parties before we go live.

If anything here is unclear, please ask before signing. We would much rather answer the question than have you discover a surprise later.

---

## 1. What AAO does — and does not do

**We do:**
- design, build and operate AI-assisted workflows that draft messages, classify items, fill forms, summarise documents and route work to the right person;
- route every consequential decision through a human Approver before it becomes an external action;
- keep a complete audit log of every step;
- run a monthly governance review of every workflow in production;
- respond to incidents per the SLA in Schedule 6.

**We do not:**
- give you legal, medical, financial or HR advice;
- make decisions on your behalf about people, money or risk;
- guarantee any AI output is accurate, complete or appropriate for a specific business decision;
- use your data to train AI models, ours or anyone else's;
- send your data overseas without telling you and getting your written agreement.

## 2. How AI works in your workflows

Our workflows use **large language models** (LLMs) — the kind of AI most people have met through ChatGPT or Claude.

The pattern is always:

1. **Trigger** — something happens (an email arrives, a form is submitted, a record changes).
2. **Draft** — the AI reads the context and drafts a response, classification or action.
3. **Approve** — the draft goes into your **approval queue**. A nominated person on your team reviews it.
4. **Send** — once approved (or edited and approved), the action goes out.
5. **Log** — every step is recorded in the audit log.

Material decisions never bypass step 3. Your Approver is in the loop.

## 3. Where AI can be wrong

LLMs are powerful, but they have well-known limitations. We design workflows around these limitations rather than pretending they don't exist:

- **Hallucination.** AI can produce confident-sounding text that is factually wrong. It can invent names, prices, dates and references.
- **Missing context.** AI only knows what we give it. If a key piece of context (e.g. an offline conversation, a verbal agreement) hasn't been written down, the AI won't know.
- **Bias.** AI models reflect the data they were trained on. They can carry biases into the way they describe people or situations.
- **Drift.** A workflow that is accurate today can become less accurate over time as the world around it changes (your products, your customers, your tone of voice).
- **Edge cases.** AI handles the common cases well and the unusual cases poorly. The 5% of weird inputs are where mistakes happen.

These are not bugs we can patch. They are properties of the technology. **The mitigation is the human approval step and the monthly governance review** — not a promise that the AI will be perfect.

## 4. What we do about it

- **Approval queue.** Every action that affects an external party, a financial transaction, or a regulated decision is gated by a human Approver.
- **Guardrails.** We configure input, output, topic, dialog, retrieval and policy guardrails per the workflow design. These catch many common failure modes before the Approver sees them.
- **Audit log.** We can show you exactly what the AI saw, what it drafted, what the Approver did, and what was sent.
- **Monthly governance review.** We meet with you each month to look at what worked, what didn't, and what to change.
- **Incident response.** If something goes wrong, we follow the SLA in Schedule 6 — including notifying you within 1 hour for the most serious incidents.

## 5. What we ask you to do

For the workflow to work safely, you need to:

- **Designate Approvers.** Nominate the people on your team who are authorised to approve actions, and a backup for each. Keep this list current.
- **Respond to the approval queue within the agreed SLA.** If approvals back up, the workflow stalls. We'll work with you on a sensible cadence.
- **Read drafts before approving.** It is genuinely tempting to skim and click "approve". Please don't. The Approver carries responsibility for the final action.
- **Escalate concerns.** If something looks off, escalate using the agreed channel. We would much rather pause a workflow for an hour than send something wrong.
- **Maintain access.** Keep our access to the integrations live. If you change a credential or revoke a token without telling us, the workflow will break.

## 6. What's prohibited

Per PRD §16.3, we will not build workflows for the following decisions, and we will not allow workflows already in production to be used for them:

- **Medical advice or diagnosis.**
- **Legal advice.**
- **Employment decisions** (hiring, firing, promotion, performance management).
- **Credit decisions** (lending, credit limit changes, credit refusal).
- **Autonomous financial transfers** without a human Approval per transaction.
- **Decisions that affect a person's access to government services or benefits.**
- **Anything unlawful under Australian law.**

If a workflow drifts toward one of these uses, we will pause it and raise it with you.

## 7. Your rights

You can, at any time:

- **Pause any workflow** by telling us in writing. We will pause within 1 business hour during business hours, or as soon as reasonably practicable outside business hours.
- **Revoke any integration.** It's your tenancy, your credentials.
- **Request an export** of the audit log for any workflow.
- **Request an export** of your workflow configuration.
- **Terminate** per the MSA.

## 8. Acknowledgement

By signing below, the Client acknowledges that:

- I have read and understood this Disclosure.
- I understand AI outputs are drafts, that human Approvers carry responsibility for the final action, and that AAO does not warrant the accuracy of AI outputs.
- I will ensure nominated Approvers are aware of this Disclosure and the responsibilities it sets out.
- I understand the prohibited uses in §6 and will not request workflows for those uses.

---

**Signed for and on behalf of {{client_legal_name}} (ABN {{client_abn}}):**

Name: ___________________________
Title: ___________________________
Signature: _______________________
Date: ___________________________

**Signed for and on behalf of Australian AI Operations Group Pty Ltd:**

Name: ___________________________
Title: ___________________________
Signature: _______________________
Date: ___________________________

---

> **End of AI Limitations Disclosure scaffold.**
> **⚠️ DRAFT — Pending counsel review. Do not execute without legal sign-off.**
>
> ***⚠️ counsel: please confirm that this plain-English disclosure, signed by the Client, is an effective allocation of risk for AI output errors. Specifically: (a) does the Approver-responsibility position survive any Australian Consumer Law guarantees; (b) is anything missing that an Australian court would expect to see; (c) should this be re-acknowledged annually for ongoing subscriptions?***
