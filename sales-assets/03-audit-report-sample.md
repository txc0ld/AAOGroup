# AI Operations Audit — Coastal Concrete Constructions Pty Ltd

*Worked example of a paid AI Operations Audit deliverable. Fictional client; format and depth match what an actual paying client receives.*

---

**Prepared for:** Coastal Concrete Constructions Pty Ltd
**Audit lead:** Taylor Mayor, AAO Group
**Audit dates:** 7 April 2026 – 18 April 2026
**Report version:** 1.0 (final)
**Distribution:** Coastal Concrete Constructions directors only
**Classification:** Confidential — Coastal Concrete Constructions and AAO Group

---

AAO Group · Australian AI Operations · ABN 51 559 921 362 · aaogroup.au · Perth, Western Australia

---

## 1. Executive summary

Coastal Concrete Constructions ("Coastal") runs a healthy ten-person residential and small-commercial concrete operation out of Bibra Lake, Perth, turning over approximately $4.0M annually with steady year-on-year growth. The business is constrained on the front end of its sales pipeline. Owner-director Mark Halpin estimates he personally touches every quote that goes out, and the business loses roughly one in three enquiries to slow first response — most often during peak weeks when pours are running on multiple sites.

This audit identifies six candidate workflows. We recommend Coastal install one workflow first: a combined **Lead Intake + Quote Prep Agent** that captures inbound enquiries from the website form, missed-call SMS, and the quotes@ inbox; classifies each by job type and urgency; drafts a first response and a quote skeleton from prior similar jobs; and presents both to Mark or estimator Jake Fairhall for approval inside an approval queue.

Estimated impact, conservative case: **8–12 hours per week of owner time recovered**, **first-response time reduced from a current median of 31 hours to under 4 hours during business days**, and **5–8 additional quotes converted per quarter** at Coastal's current win rate. Implementation timeline is two weeks build, two weeks shadow-and-approval, total four-week pilot. Pilot price is **AUD $18,500** (fixed), with a recommended **Foundation Subscription at AUD $6,500/month** thereafter.

The remaining five workflows are sequenced into a 90-day roadmap. Two of them — Inbox Triage for Mark and a Weekly Site Report rollup — are queued for the second pilot. The other three are deferred pending pilot results.

---

## 2. Discovery summary

### 2.1 Discovery activities

- **Owner interview** — 75 minutes with Mark Halpin (director), 14 April 2026 at the Coastal yard.
- **Estimator interview** — 45 minutes with Jake Fairhall (senior estimator), 15 April 2026 by phone.
- **Office walkthrough** — 90 minutes observing the front-of-house workflow with bookkeeper Tania Ng, 16 April 2026.
- **Systems inventory** — completed by Tania Ng and reviewed with Mark.
- **Sample documents reviewed** — 12 quotes (last 90 days), 30 inbound enquiries, the 2026 Q1 P&L summary, the current website lead form.

### 2.2 Business context

| Field | Value |
|---|---|
| Trading name | Coastal Concrete Constructions Pty Ltd |
| ABN | (omitted from sample) |
| Director | Mark Halpin |
| Headcount | 10 (1 director, 1 senior estimator, 1 bookkeeper, 1 office admin, 6 site crew) |
| Revenue (FY25) | ~$4.0M |
| Locations | Bibra Lake yard; sites across Perth metro and South West WA |
| Key services | Residential slabs, driveways, commercial small-format pours, decorative finishes |
| Peak season | September–April |
| Insurance | Public liability $20M, workers comp current |

### 2.3 Current systems

| Layer | System | Notes |
|---|---|---|
| Accounting | Xero | Used for invoicing and BAS; bookkeeper-managed |
| Job management | ServiceM8 | Schedules, job cards, photos; field crew uses mobile app |
| Quoting | ServiceM8 + Word templates | Quotes drafted in ServiceM8 for simple jobs; complex jobs go to Word |
| CRM | None formal | Customer records live in ServiceM8 and the quotes@ inbox |
| Email | Microsoft 365 (Exchange) | Mark's inbox + shared quotes@ inbox |
| Website | WordPress | Single contact form with name, phone, email, message |
| Phone | Hosted PBX with missed-call SMS | Office number rolls to mobile after 4 rings |
| Storage | OneDrive | Photos, documents, plans |
| Comms | WhatsApp | Used informally with crew; not a system of record |

### 2.4 Operational pain reported

In Mark's words (paraphrased and consolidated):

- *"I'm the bottleneck on quotes. Always have been. By the time I get to one it's been three days and the customer's already called the next bloke."*
- *"Tania's good but she can't quote. Jake can quote but he's on the tools half the time."*
- *"Half the leads from the website I never even see till the weekend. The form just emails Tania and she sticks them in a folder."*
- *"I run the Friday meeting from memory and a notepad. There's no report."*

### 2.5 Quantified baseline

| Metric | Current state | Source |
|---|---|---|
| Inbound enquiries per week (median) | 22 | Last 12 weeks of website form + missed-call SMS + quotes@ inbox |
| Median time to first response | 31 hours (business hours) | Sample of 30 enquiries, March 2026 |
| Enquiries that receive a quote | 64% | Quotes raised vs enquiries received, Q1 2026 |
| Quote-to-win conversion rate | 41% | ServiceM8 won-job records vs quotes raised, Q1 2026 |
| Owner hours per week on quotes/leads | ~14 hours | Mark's estimate, validated against 5-day diary |
| Missed-call rate (rolls to voicemail) | 18% | PBX report, March 2026 |

---

## 3. Workflow map

Six workflows surfaced during discovery. Each is described in current state, with a pain score (1 low, 5 high) reflecting business impact and operator frustration.

### 3.1 Workflow inventory

| # | Workflow | Trigger | Current owner | Pain (1–5) |
|---:|---|---|---|---:|
| W1 | **Lead intake + first response** | Website form, missed-call SMS, quotes@ email | Tania (forwards to Mark) | 5 |
| W2 | **Quote preparation** | Lead qualified | Mark or Jake | 5 |
| W3 | **Owner inbox triage** | Anything entering Mark's inbox | Mark | 4 |
| W4 | **Weekly site report** | Friday meeting | Mark (verbal) | 3 |
| W5 | **Invoice follow-up on overdue** | Xero ageing >30 days | Tania | 2 |
| W6 | **SOP retrieval for crew (concrete mix specs, finish standards)** | Site question | Foreman texts Mark | 3 |

### 3.2 Current state — top three workflows

**W1: Lead intake + first response**
A lead arrives via one of three channels. Website form emails Tania, who saves it into a OneDrive folder named *Leads — current month*. Missed-call SMS goes to a shared inbox nobody monitors. The quotes@ inbox is read by Tania once each morning. Tania forwards leads she thinks are real to Mark; she filters out obvious spam and timewasters using her own judgement. Mark sees most leads sometime between 24 and 48 hours after they arrive, often at night or on weekends. He replies from his phone or marks them for Jake. About 30% of leads never get a response.

**W2: Quote preparation**
For simple jobs (residential driveway, single-pour slab), Jake prepares a quote in ServiceM8 from a template. For anything bigger or with site complications, Mark visits, takes photos, and writes the quote himself in Word using a template he last updated in 2023. Quotes go out as PDF attachments by email. Mark estimates he spends 6–8 hours per week on quotes alone, mostly in the evening. Jake estimates 3–4 hours; the rest of his week is on the tools or running crew.

**W3: Owner inbox triage**
Mark's inbox receives roughly 80 messages per day. About 15 are operational (suppliers, councils, customers). The rest is marketing, generic invoices, internal CC, and platform notifications. Mark reads everything because he's been burned by missing the wrong thing twice. He estimates 90 minutes per day on inbox alone.

---

## 4. AI opportunity matrix

Each candidate workflow scored against the AAO opportunity model:

> Opportunity Score = Revenue Impact × 0.30 + Time Saved × 0.25 + Repeatability × 0.20 + Implementation Ease × 0.15 + Risk Suitability × 0.10
> Each component scored 1–5. Maximum possible score 5.00.

| # | Workflow | Revenue (×0.30) | Time (×0.25) | Repeat (×0.20) | Ease (×0.15) | Risk (×0.10) | **Score** |
|---:|---|---:|---:|---:|---:|---:|---:|
| W1+W2 | Lead intake + Quote prep (combined) | 5 | 5 | 4 | 4 | 4 | **4.55** |
| W3 | Owner inbox triage | 2 | 5 | 3 | 3 | 3 | **3.20** |
| W4 | Weekly site report | 1 | 3 | 5 | 4 | 5 | **3.15** |
| W6 | SOP retrieval | 1 | 2 | 4 | 4 | 4 | **2.65** |
| W5 | Overdue invoice follow-up | 2 | 2 | 4 | 3 | 2 | **2.55** |

**Confidence notes**

- W1+W2 combined because Coastal's lead and quote workflow is one continuous handoff. Splitting them would build half a workflow and leave the bottleneck. Confidence: high.
- W3 scores high on time but low on revenue. It's a quality-of-life workflow for the owner, not a growth workflow. Recommended as second pilot.
- W4 is high repeatability and low risk but doesn't unlock revenue. Good third workflow. Confidence: medium — depends on whether Mark wants the report or wants the meeting.
- W5 is low revenue impact (Coastal has good payment discipline already) and triggers tier-3 controls (touches finance). Defer.

---

## 5. Data sensitivity map

Workflows mapped against the AAO 5-level sensitivity scale.

| Level | Label | Handling |
|---:|---|---|
| 0 | Public | Low-risk use |
| 1 | Internal | Standard workflow controls |
| 2 | Confidential | Approval-gated, logged |
| 3 | Sensitive | Restricted processing, redaction where possible |
| 4 | High-risk / regulated | Out of scope for v1 |

| Workflow | Data classes touched | Highest level | Handling rule |
|---|---|---:|---|
| W1+W2 Lead + Quote | Customer name, phone, email, address, job description, photos, prior quote pricing | 2 | Approval-gated. Pricing visible only to Mark and Jake. No customer personal data sent to provider beyond what's needed to draft a reply. |
| W3 Owner inbox triage | Mark's full inbox, including supplier pricing, internal staff matters | 3 | Restricted — reads only flagged categories; never reads HR or director-only threads. Redaction on outbound summaries. |
| W4 Weekly site report | Job progress, site notes, crew names | 1 | Standard controls. Logged. |
| W6 SOP retrieval | Concrete mix specs, finish standards, safety SOPs | 1 | Standard controls. Citations required on every answer. |
| W5 Overdue invoice follow-up | Customer payment status, ageing | 3 | Restricted — drafts only, owner approves every send, no autonomous payment-related action. |

---

## 6. Risk register — top three workflows

### 6.1 W1+W2 Lead intake + Quote preparation

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Agent drafts an inaccurate quote and it goes out without correction | Medium | High | Approval queue blocks every outbound message and every quote PDF. Mark or Jake must explicitly approve. No auto-send mode in v1. |
| Customer data leaks via model provider | Low | High | Bedrock Sydney region (ap-southeast-2). Provider contract excludes training use. PII minimised in prompts. Logged. |
| Agent misclassifies an enquiry and it sits unresponded | Medium | Medium | Every classified lead surfaces in the queue regardless of confidence. Low-confidence drafts flagged with a confidence badge. |
| Spam or competitor probing wastes operator time | High | Low | Input rails filter known spam patterns and obviously malicious payloads before drafting. |
| ServiceM8 outage breaks the workflow mid-draft | Low | Medium | Workflow is idempotent. Failed draft re-queues. Human can complete manually using existing process. |
| Approver SLA breaches — drafts age in queue | Medium | Medium | Queue ages drafts, escalates after defined SLA (e.g. 4 business hours), and produces weekly SLA report. |

### 6.2 W3 Owner inbox triage

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Agent reads a thread it shouldn't (HR, director-only) | Medium | High | Topical rails restrict reading to allow-listed categories. HR labels and director-only labels are excluded at the integration layer. |
| Important message is archived or deprioritised | Medium | High | Archival is never autonomous in v1. Agent surfaces a triage view; Mark archives or actions. |

### 6.3 W4 Weekly site report

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Report misrepresents site progress | Medium | Low | Report is a draft; foreman and Mark review before circulation. Citations to source notes required. |

---

## 7. First-agent recommendation

### 7.1 Recommended first workflow

**Lead Intake + Quote Prep Agent** (combined W1+W2)

### 7.2 Why this one

- Highest opportunity score (4.55) of any candidate.
- Touches the actual revenue bottleneck — Coastal's growth is constrained by quote turnaround, not pour capacity.
- Risk profile is tier 2 (drafting customer messages) — well within v1 scope and exactly what the approval queue is built for.
- Coastal already has the systems (ServiceM8, Microsoft 365, WordPress form) to integrate cleanly.
- Win-rate uplift is measurable — we can compare quoted-and-won during pilot against the FY25 baseline.

### 7.3 Workflow shape

1. **Trigger** — new enquiry from any of three channels (website form, missed-call SMS, quotes@ inbox).
2. **Classify** — agent classifies (residential / commercial / decorative / out-of-scope) and assesses urgency from message content.
3. **Draft first response** — short reply acknowledging the enquiry, asking for the 2–3 specific data points needed to quote (site address, slab dimensions or scope, target pour date), signed from Mark or Jake based on routing rules.
4. **Draft quote skeleton** — when enough information is available, retrieve the three most-similar prior jobs, surface their line items and pricing, and draft a quote skeleton in the Coastal template.
5. **Approval queue** — both the response draft and the quote skeleton land in a single screen for Mark or Jake to approve, edit, or reject.
6. **Send + log** — on approval, the response goes via Microsoft 365 (from the approver's identity), the quote PDF is generated and attached, and a ServiceM8 record is created or updated.
7. **Escalate** — if no approval in 4 business hours, the queue notifies the alternate approver.

### 7.4 Approval matrix

| Action | Approver | Device | SLA | Escalation |
|---|---|---|---|---|
| First-response draft (residential) | Tania (initial classify), Mark or Jake (approve send) | Web or mobile | 4 business hours | If unapproved, re-route to other approver |
| First-response draft (commercial) | Mark only | Web or mobile | 4 business hours | If unapproved, AAO operator notification |
| Quote skeleton (residential, <$15k) | Jake | Web | 1 business day | If unapproved, escalate to Mark |
| Quote skeleton (residential, ≥$15k or commercial) | Mark | Web | 1 business day | If unapproved, AAO operator notification |
| Out-of-scope enquiry decline | Tania | Web | 1 business day | None |

### 7.5 Constraints

- Shadow mode for the first 5 business days — agent drafts, no sends. Mark and Jake review side-by-side with their current process.
- Approval mode for the remaining pilot period — every outbound action gated.
- No autonomous send under any circumstance during pilot.
- No customer payment data ever in scope.
- WhatsApp explicitly out of scope (not a system of record).

---

## 8. ROI estimate

### 8.1 Current cost — annualised

| Component | Quantity | Unit cost | Annual cost |
|---|---:|---:|---:|
| Owner hours on lead/quote (Mark) | 14 hrs/wk × 48 wks | $180/hr loaded | **$120,960** |
| Estimator hours on quote (Jake) | 4 hrs/wk × 48 wks | $90/hr loaded | **$17,280** |
| Admin hours on lead handling (Tania) | 5 hrs/wk × 48 wks | $55/hr loaded | **$13,200** |
| Lost revenue — enquiries that never receive a quote (~30%) | Approx. 343 enquiries/yr × 30% × 41% win rate × $11k avg | (gross margin 22%) | **~$104,000 gross margin** |
| **Total — current operating cost + opportunity cost** | | | **~$255,000** |

### 8.2 Expected post-pilot impact (conservative case)

| Component | Change | Annual value |
|---|---|---:|
| Owner hours saved | 8–12 hrs/wk recovered → 10 hrs midpoint | **~$86,400** |
| Estimator hours saved | 2 hrs/wk recovered | **~$8,640** |
| First-response time | 31 hrs → <4 hrs | (drives lead recovery below) |
| Lead recovery — fewer enquiries lost to slow response | 30% lost → 10% lost | **~$70,000 gross margin recovered** |
| **Conservative total annual value** | | **~$165,000** |

### 8.3 Cost of operation

| Component | Cost |
|---:|---:|
| First Agent Pilot (one-off) | $18,500 |
| Foundation Subscription | $6,500/month → **$78,000/yr** |
| **Year-1 total cost** | **$96,500** |

### 8.4 Payback

- **Payback period (conservative case): ~7 months** from pilot start.
- **Year-1 net value (conservative): ~$68,500**.
- **Year-2 net value (conservative, subscription only): ~$87,000**.

These numbers will be re-baselined against actual measured outcomes at the end of the pilot. The pilot performance report will replace these estimates with measured values before any retainer commitment.

---

## 9. 90-day implementation roadmap

### Weeks 1–2 — Pilot build (AAO Group)

- Day 1: Pilot kickoff. Approver list confirmed, Microsoft 365 OAuth scopes provisioned (read mail, send-as for Mark and Jake), ServiceM8 API access provisioned, WordPress form webhook registered.
- Days 2–4: Workflow built. Classification rules defined from sample of 90 days of enquiries. Quote template digitised with line-item structure.
- Days 5–6: Approval queue configured. SLAs and escalation paths set. Notification channels (email + SMS) provisioned for Mark and Jake.
- Days 7–8: Internal QA. AAO operator runs 30 historical enquiries through the pipeline; outputs reviewed against actual responses Coastal sent at the time.
- Days 9–10: Coastal walkthrough. Mark, Jake, Tania trained on the queue in 90 minutes.

### Weeks 3–4 — Shadow + Approval mode (live)

- Days 11–15: Shadow mode. Agent drafts every enquiry. No sends. Mark and Jake review drafts at end of day. Discrepancies logged.
- Days 16–20: Approval mode. Every action gated. Daily 10-minute standup with AAO operator for the first three days.

### End of week 4 — Pilot review

- Performance report delivered. Baselines compared. Subscription proposal issued for Foundation tier.

### Weeks 5–8 — Subscription mode + second workflow scoping

- Foundation Subscription begins.
- AAO operator scopes second workflow (recommended: W3 Owner inbox triage). Discovery interview only, no build.

### Weeks 9–12 — Second workflow pilot (separate scope)

- Second pilot priced and scheduled if first pilot succeeded against agreed metrics. Coastal can decline without affecting subscription.

---

## 10. Pilot proposal

### 10.1 Scope

One workflow: **Lead Intake + Quote Prep Agent** as defined in §7.

### 10.2 Inputs and integrations

| System | Access | Scope |
|---|---|---|
| Microsoft 365 (Exchange) | OAuth — Mark + Jake + quotes@ | Read inbox (allow-listed senders + quotes@ inbox); Send-as on approval; archive only on approval |
| ServiceM8 | API token | Read jobs and quotes; create quote draft on approval |
| WordPress (Coastal site) | Webhook | New form submission triggers workflow |
| Hosted PBX (missed-call SMS) | Email forwarder | Inbound SMS notifications routed to workflow |
| OneDrive | Read-only | Access to historical quote folder for reference matching |

### 10.3 Constraints

- Shadow mode first (5 business days), then approval mode.
- Human approval required for every outbound message and every quote PDF.
- No autonomous send, ever.
- No customer payment data in scope.
- Weekly review with AAO operator.
- Coastal can pause the pilot at any time without penalty.

### 10.4 Success metrics

| Metric | Baseline | Target | Stretch |
|---|---:|---:|---:|
| Median time to first response (business hours) | 31 hrs | <4 hrs | <2 hrs |
| Enquiries receiving a quote (% of total) | 64% | 80% | 90% |
| Owner hours per week on lead/quote | 14 hrs | 6 hrs | 4 hrs |
| Approval rate (% drafts approved as-is or with minor edit) | n/a | ≥75% | ≥85% |
| Customer-reported issues attributable to agent error | n/a | 0 | 0 |

### 10.5 Approval matrix

As per §7.4.

### 10.6 Deliverables

- Configured Lead Intake + Quote Prep workflow.
- Approval queue (web + mobile) with notifications.
- Structured logs (every tool call, approval, rail trip, escalation).
- Weekly status report during pilot.
- End-of-pilot performance report against baselines.
- Staff handover guide.
- Foundation Subscription proposal.

### 10.7 Timeline

Four weeks total. Two weeks build, two weeks live (5 days shadow + 5 days approval mode).

### 10.8 Price

**AUD $18,500 fixed, GST exclusive.**
Payment terms: 50% on signature, 50% on pilot performance report delivery. Audit fee of $5,500 already paid is credited against this amount, net pilot cost AUD $13,000 GST exclusive.

### 10.9 Out of scope

- WhatsApp integration.
- Inbound phone-call transcription or live answering.
- Autonomous send mode.
- Customer payment / invoicing workflows.
- Subcontractor management.
- Any workflow not listed in §7.

### 10.10 Acceptance criteria

Pilot is accepted when:

- All five success metrics in §10.4 are measured and reported.
- The approval queue is operational and being used by Mark and Jake.
- Coastal staff have received the handover guide and 90-minute training.
- The end-of-pilot performance report has been delivered and walked through.

### 10.11 Cancellation

Coastal may cancel during the pilot at any time. If cancelled before week 3, 50% of the unbilled balance is owed. After week 3, full pilot fee is owed. Cancellation does not require justification.

---

## 11. Appendix — glossary

| Term | Meaning |
|---|---|
| **Approval queue** | Single-screen interface where every customer-facing or system-changing AI action waits for a named human to approve, edit, or reject before it executes. |
| **Approval matrix** | Mapping of which actions require which named approvers, on which devices, within which SLA. |
| **Approval mode** | Operating mode in which the agent drafts but never sends; humans approve everything. The default v1 mode. |
| **Audit log** | Structured, immutable record of every tool call, approval decision, guardrail trip, escalation, and incident. |
| **Bedrock Sydney** | Amazon Bedrock in the ap-southeast-2 region. Models hosted here keep customer data onshore. |
| **Confidence badge** | Visible indicator on a draft showing the agent's self-assessed confidence in its classification or output. |
| **Data residency** | Where customer data is processed and stored. Coastal's deployment runs entirely in ap-southeast-2. |
| **Escalation** | Automatic re-routing of an unresolved approval to an alternate approver after SLA breach. |
| **Guardrail / rail** | A check applied to AI input or output: input rails validate before the model sees a request; output rails check the response before it leaves; topical, dialog, and policy rails constrain behaviour. |
| **Idempotent workflow** | A workflow that can safely be re-run without duplicating effects (e.g. doesn't double-send). |
| **Model and provider register** | Per-workflow record of which model is called by which provider, in which region. Coastal can request changes. |
| **Risk tier** | One of five categories defining the controls required for a workflow. Tier 1 (low-risk admin) through Tier 5 (out of scope). |
| **Shadow mode** | Operating mode in which the agent runs end-to-end but takes no real-world action. Used for the first 5 days of pilot. |
| **SOP** | Standard Operating Procedure — Coastal's internal documentation of how a task is done. |

---

## 12. Cover sign-off

**Audit accepted by:**

Coastal Concrete Constructions Pty Ltd — Mark Halpin, Director
Signature: _________________________ Date: _____________

**Audit delivered by:**

AAO Group — Taylor Mayor, Founder
Signature: _________________________ Date: _____________

---

*Reference: AAO Sovereign AI Operations Framework (aaogroup.au/framework). All sample numbers and the client name are for illustrative purposes; actual audits use real client data and produce numbers specific to the client.*
