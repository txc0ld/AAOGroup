# Discovery Deck

*Twelve slides for the 15-minute Calendly discovery call. Operator presents — no speaker notes.*

---

## Slide 1 — Cover

**AAO Group**
Secure AI operations for Australian businesses

Discovery call for **{{prospect_company}}**
{{date}}

Presented by Taylor Mayor · hello@aaogroup.au · aaogroup.au

---

## Slide 2 — The bottleneck is rarely the work

Three patterns we see in Australian SMBs of 10–100 staff:

- Leads come in through web forms, calls, and email. Most go cold inside 48 hours because nobody owns first response.
- Quotes wait on the owner. The estimator has the numbers, the owner has the relationship, the customer has the silence.
- The owner inbox runs the business. Anything that enters it stops moving until the owner reads it.

None of this needs more software. It needs the admin removed.

---

## Slide 3 — Why AI fails in week three

The failure pattern is predictable:

- A general-purpose AI tool gets deployed without a workflow.
- Nobody owns approving its outputs, so half the time it's wrong and nobody notices.
- There are no logs, no risk tiering, no escalation path.
- By week three the tool is either ignored, switched off, or quietly creating risk in the background.

**The fix is operating model, not bigger model.** Narrow workflow, human approval, logged output, named owner.

---

## Slide 4 — How we install AI safely

The Sovereign AI Operations Framework — five layers, one workflow at a time:

1. **Integration** — connect Gmail, Outlook, forms, CRM, Xero, Sheets via OAuth and webhooks.
2. **Workflow** — a deterministic state machine plus narrow scoped task agents. No open-ended autonomy.
3. **Guarded LLM** — input rails, output rails, topical and policy rails wrap every model call. Models run via Bedrock (Sydney) or Azure (Australia East).
4. **Approval queue** — every customer-facing or system-changing action lands here for human approve / edit / reject. **This is the wedge. This is the product.**
5. **Audit** — every tool call, approval, rail trip, and escalation is logged. Rolled up into a monthly client report.

---

## Slide 5 — What we install

| Workflow | What it does |
|---|---|
| **Lead Intake Agent** | Captures inbound enquiries, classifies, drafts response for approval, routes to owner or estimator |
| **Quote Prep Agent** | Pulls job notes, photos, line items into a draft quote — owner approves, edits, or rejects in one screen |
| **Inbox Operator** | Triages the owner inbox, drafts replies, surfaces what needs a human, archives the rest |
| **SOP Retrieval** | Staff ask, the agent answers from your documented procedures with citations — never invented |
| **Weekly Reporting** | Pulls metrics from your systems and drafts the weekly operations report |

---

## Slide 6 — Trust posture

What you get on every deployment:

- **Approval gates** — defined per workflow, with named approvers, devices, and SLAs.
- **Structured audit logs** — tool calls, approvals, rail trips, escalations, incidents.
- **Data residency onshore** — Bedrock Sydney (ap-southeast-2) or Azure Australia East where supported.
- **Model and provider register** — published per workflow. Clients can restrict providers in policy.
- **No training use** — your data is not used to train provider models. Documented in the SOW.

Aligned to the Australian Privacy Principles (Privacy Act 1988). Not yet IRAP / ISO 27001 / SOC 2 — we say so plainly.

---

## Slide 7 — How we work

Three offers. Each one earns the next.

| Offer | Price | Duration | Output |
|---|---|---|---|
| **AI Operations Audit** | AUD $2,500–$7,500 | 1–2 weeks | Workflow map, opportunity matrix, fixed-scope pilot proposal |
| **First Agent Pilot** | AUD $10,000–$30,000 | 2–4 weeks | One workflow live in approval mode with measured outcomes |
| **Managed Subscription** | from AUD $5,000/month | Ongoing | Operation, optimisation, monthly report, next-workflow roadmap |

Audit fee is credited toward the pilot if signed within 14 days.

---

## Slide 8 — The Audit

What you get for $2,500–$7,500 in 1–2 weeks:

- **Workflow map** — your actual operations, drawn out, with current state and pain scores.
- **AI opportunity matrix** — workflows ranked by Revenue × 0.30 + Time × 0.25 + Repeatability × 0.20 + Implementation Ease × 0.15 + Risk Suitability × 0.10.
- **Data sensitivity map** — every workflow classified against a 5-level scale.
- **Risk register** — top risks for each recommended workflow.
- **First-agent recommendation** — the one workflow we'd build first, with full pilot brief.
- **ROI estimate** — current cost (owner hours, missed leads), expected savings, payback period.
- **90-day implementation roadmap** — week-by-week.
- **Pilot proposal** — fixed scope, fixed price, success metrics, approval matrix.

This is a real deliverable. It stands alone if you never engage us again.

---

## Slide 9 — Vertical fit

**{{prospect_vertical}}**

- Common pain we see: {{vertical_pain_one_liner}}
- Recommended first agent: {{recommended_first_workflow}}
- Typical payback window: {{payback_band}}

*(Operator populates per call from internal vertical brief.)*

---

## Slide 10 — Risk and governance

We use a 5-tier risk model. Tier 1 is logged and reviewed; tier 5 is out of scope.

| Tier | Workflow type | Control level |
|---:|---|---|
| 1 | Internal summaries, low-risk admin | Logging + review |
| 2 | Drafting internal/customer messages | Human approval |
| 3 | CRM / job / accounting updates | Approval or strict policy controls |
| 4 | Financial / legal / HR-sensitive | Enhanced review, restricted scope |
| 5 | Regulated or high-impact decisions | Out of scope in v1 |

**Prohibited in v1:** medical diagnosis, legal advice, employment termination, credit decisions, autonomous financial transfers, autonomous customer commitments, sensitive personal data without explicit controls.

We say no to these on day one. It's part of the offer.

---

## Slide 11 — Why now

Three things changed in the last twelve months:

- Onshore model availability — Bedrock Sydney and Azure Australia East mean Australian data can stay in Australia without compromise.
- Guardrails matured — input/output/topical/policy rails (NeMo Guardrails and equivalents) make narrow workflows safe to ship.
- The market caught up — Australian SMB owners are past the chatbot hype cycle and ready to pay for operational outcomes, not strategy decks.

The window for installing the operating model — before competitors do — is now.

---

## Slide 12 — Next step

Two paths from here:

- **Book the Audit.** Fixed price, fixed scope, two weeks. You leave with a real deliverable whether or not you continue.
- **Skip to Pilot.** If your scope is already clear (you know the workflow, you know the systems, you have the volume), we can write the pilot proposal directly.

**Book at:** [calendly.com/aaogroup](https://calendly.com/aaogroup)

Questions: hello@aaogroup.au · Security: security@aaogroup.au
