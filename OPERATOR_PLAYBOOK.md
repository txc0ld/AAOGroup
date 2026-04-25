# AAO Group - Operator Playbook

> What to do, in what order, with which skills.

**Owner:** Taylor Mayo
**Last updated:** 2026-04-25
**Audience:** the operator running an AAO engagement (currently: you)

This is the single document you open when a new lead arrives. Read it once end-to-end. Re-read the section that matches the stage you are in. Everything else - the PRD, the sales assets, the legal scaffolds, the skills - is a reference. This is the operating manual.

---

## Table of contents

1. [The motion](#1-the-motion)
2. [Outbound (week 0)](#2-outbound-week-0)
3. [Discovery call (15 min, week 1)](#3-discovery-call-15-min-week-1)
4. [Audit (week 1-2)](#4-audit-week-1-2)
5. [Pilot proposal (after audit acceptance)](#5-pilot-proposal-after-audit-acceptance)
6. [Pilot delivery (week 1-4 of pilot)](#6-pilot-delivery-week-1-4-of-pilot)
7. [Subscription (post-pilot)](#7-subscription-post-pilot)
8. [Incident handling](#8-incident-handling)
9. [Engagement end](#9-engagement-end)
10. [Personal habits](#10-personal-habits)
11. [Appendix A - Email cover-note templates](#appendix-a---email-cover-note-templates)
12. [Appendix B - Which skill to invoke when](#appendix-b---which-skill-to-invoke-when)

---

## 1. The motion

The AAO offer ladder, end to end:

```
                           [ no ] -> polite "wrong shape" email; door open
                              ^
                              |
Outbound  ->  Discovery  --> [ fit? ]                    ->  Subscription
( 5-10 / day  ( 15 min,        |                                Foundation  $5-9k/mo
  per channel)  Calendly )     v                                Operator    $10-19k/mo
                          [ Audit ]  --> [ Pilot ]              Embedded    $20-35k+/mo
                          $2.5-7.5k     $10-30k                        ^
                          1-2 wk        2-4 wk                          |
                                                                   converts from pilot
```

Typical timing for a clean prospect from first touch to signed retainer:

| Stage | Elapsed days from first touch | Notes |
|---|---|---|
| Outbound message sent | Day 0 | |
| Discovery call booked | Day 3-10 | Most reply or do not within a week |
| Discovery call held | Day 5-14 | |
| Onboarding form returned | Day 7-17 | Chase at +3 business days |
| Audit kickoff | Day 10-21 | |
| Audit deliverable sent | Day 17-35 | 1-2 working weeks of audit work |
| Pilot proposal accepted | Day 24-49 | 14-day "audit-fee credit" window starts at audit delivery |
| Pilot live in shadow mode | Day 31-56 | |
| Pilot complete, subscription proposed | Day 49-84 | |
| First retainer month invoiced | Day 56-91 | |

You will lose people at every stage. Track conversion in `clients/_metrics.csv` (see s4 step 8).

---

## 2. Outbound (week 0)

The goal is one booked discovery call per day, not a hundred sent messages per day.

**Daily routine:**

1. Open `sales-assets/08-outreach-pack.md`.
2. Pick one vertical for the day (rotate; do not blast all of them at once).
3. Pick a channel and warmth band. Use the variant from the pack that matches.
4. Send 5-10 messages. Personalise the first sentence. The pack handles the rest.
5. For every reply (positive or negative), open or update `clients/<lead-slug>-prospect.md` with one paragraph of notes - this is a free-form scratch file, NOT a full workspace.
6. When someone books a Calendly slot, instantiate the workspace:

```bash
cp -r clients/_template clients/<client-slug>
```

(or PowerShell: `Copy-Item -Recurse clients\_template clients\<client-slug>`)

7. Move the prospect notes into `clients/<client-slug>/00-intake/discovery-call-notes.md` under "How they found us".

**Rules of thumb:**
- Three follow-ups maximum per prospect. After that, move on - they will see your nurture content if you ever build it.
- Do not LinkedIn-DM and email the same person on the same day.
- If a vertical is not biting after 30-50 messages across 2 weeks, change vertical, not message.

---

## 3. Discovery call (15 min, week 1)

This is the highest-leverage 15 minutes of the entire engagement. Prepare like it.

**Before the call (5 minutes):**

1. Open `clients/<slug>/00-intake/discovery-call-notes.md`. Pre-fill anything you know from outbound or LinkedIn (industry, headcount, location).
2. Glance at their website. Note the obvious workflow guess in your head.
3. Have `sales-assets/02-discovery-deck.md` open in another tab. You will not screenshare it, but you will use the question prompts.

**During the call:**

- Type live into `discovery-call-notes.md`. The placeholder prompts ARE the questions you ask.
- The shape: 2 min business snapshot, 6 min the bottleneck, 4 min systems and AI usage, 3 min decision/budget/next step.
- **Do not pitch.** You are diagnosing. The pitch is the audit deliverable.
- If they ask "what would you do for us?" - answer "I do not know yet, that is what the audit produces. What I can tell you is the shape - here is the offer ladder".

**Within 5 minutes of hanging up:**

- Complete the "Operator's gut read" section honestly. Be willing to write "no" - those are cheap to discard.
- Decide the lane: audit / pilot direct / not a fit / follow-up.

**Within 2 hours:**

- Send the appropriate cover-note email (Appendix A).
- If audit accepted: send the onboarding form (`00-intake/onboarding-form.md`) as the body of an email or as a Google Form / Typeform mirror, your call.
- If not a fit: send the polite decline. Door open.

---

## 4. Audit (week 1-2)

The audit is your paid foot in the door. It must be excellent. Skills do most of the analytical work; you do the curation and the commercial judgement.

**Step 1 - Receive intake artefacts**

Confirm you have received from the client:
- Completed onboarding form (back into `00-intake/onboarding-form.md`)
- Filled-in systems inventory (collaborative, in `00-intake/systems-inventory.md`)
- Any policy documents they offered to share

If anything is missing at +3 business days, chase. Do not start the audit on partial inputs - it pollutes the analysis.

**Step 2 - Assemble the orchestrator input**

Open `01-audit/audit-pipeline-input.json`. Drop the cleaned discovery transcript, the structured onboarding form data, and the systems inventory rows into the right fields. Fill in the `commercial_context` block with your best estimates from the discovery call.

This is the most important manual step in the audit. Garbage in, garbage out.

**Step 3 - Run the orchestrator**

In a Claude Code session in the project directory, invoke `aao-audit-pipeline` with the assembled JSON. The skill chains all eight analytical sub-skills (`aao-client-intake-analyst`, `aao-workflow-discovery-analyst`, `aao-data-sensitivity-classifier`, `aao-integration-planner`, `aao-ai-opportunity-scorer`, `aao-approval-policy-designer`, `aao-guardrail-spec-writer`, `aao-pilot-proposal-writer`).

Save the full JSON output to `01-audit/audit-pipeline-output.json`.

**Step 4 - Render the deliverable**

Invoke `aao-audit-report-renderer` with the orchestrator output and the client metadata. The skill writes a fully formatted Markdown audit report into `01-audit/audit-deliverable.md`, matching the structure of `sales-assets/03-audit-report-sample.md`.

**Step 5 - Operator review (this is the step everyone wants to skip)**

Read the deliverable end-to-end. Specifically:

- Does the recommended pilot workflow match what the client actually said hurt most? Skills score on weighted criteria; clients buy on emotion. Reconcile.
- Are the ROI numbers credible? If the deliverable says "saves 14 hours/week" but the discovery call said "two hours a week of pain", lower the number. Conservative numbers that come true beat heroic numbers that do not.
- Is the sensitivity classification correct? If you have any doubt, raise the level - never lower it.
- Does the approval matrix match the client's risk appetite? A self-rated 2 should not be looking at "auto-execute" anywhere.
- Is the guardrail spec implementable with the integrations they have? Cross-check against the systems inventory.
- Are there things the skills missed? Add them.

Edit `audit-deliverable.md` directly. Do not re-render after editing - your edits are the gold copy.

**Step 6 - Export to PDF**

Browser print to PDF (Chrome: print -> save as PDF, A4, default margins). Or pandoc if you prefer:

```bash
pandoc audit-deliverable.md -o audit-deliverable.pdf --pdf-engine=xelatex
```

Filename convention: `<client-slug>-audit-YYYY-MM-DD.pdf`.

**Step 7 - Send**

Email the PDF with the cover note from Appendix A. Cc: the client owner only. Do NOT cc internal team members - it dilutes the message.

**Step 8 - Log the outcome**

Open `clients/_metrics.csv`. Append a row:

```
client_slug,outbound_date,discovery_date,audit_sent_date,audit_accepted_y_n,pilot_signed_y_n,subscription_tier,notes
```

This is how you find out, in 12 months, whether your conversion is improving and which verticals close.

---

## 5. Pilot proposal (after audit acceptance)

If the client says "yes, let's do the audit" you are NOT yet here. This step is for after they have read the audit deliverable and indicated interest in the recommended pilot.

**Step 1 - Pilot proposal**

1. Copy `sales-assets/04-pilot-proposal-template.md` content into `clients/<slug>/02-pilot/pilot-proposal.md`.
2. Fill placeholders from `01-audit/audit-deliverable.md` section 11 (recommended pilot scope).
3. Sanity-check pricing against `sales-assets/05-pricing-sheet.md` (pilot band $10k-$30k).

**Step 2 - SOW**

1. Copy `legal-scaffolds/02-statement-of-work-template.md` content into `clients/<slug>/02-pilot/pilot-sow.md`.
2. Fill placeholders to mirror the proposal exactly. The SOW is the contract; the proposal is the readable summary. They must agree.

**Step 3 - MSA**

- First-ever client: the MSA (`legal-scaffolds/01-master-services-agreement.md`) needs an Australian lawyer's eyes on it before first execution. Budget $1.5-3k and a week.
- Repeat client: reuse the executed MSA. Reference it in the SOW.

**Step 4 - Send the package**

Email contains:
- Pilot proposal PDF
- SOW PDF
- MSA PDF (first time only)
- AI limitations disclosure (`legal-scaffolds/04-ai-limitations-disclosure.md`) as an attachment

Cover note from Appendix A.

**Step 5 - Audit-fee credit rule**

If the SOW is signed within 14 days of the audit deliverable being sent, credit the audit fee against the pilot fee. This is named in the proposal. After 14 days, no credit. Do not negotiate this verbally.

---

## 6. Pilot delivery (week 1-4 of pilot)

The pilot is operator-led: you are the one building the workflow. Skills support; they do not implement.

**Pre-week (kickoff):**

1. Confirm `02-pilot/approval-matrix.md` is signed by the client owner. If the audit produced one, walk through it with the client; revise; resign. If it did not, invoke `aao-approval-policy-designer` now.
2. Confirm `02-pilot/guardrail-spec.md` is in place. Same: from the audit if available, otherwise invoke `aao-guardrail-spec-writer`.
3. Walk through both documents with the client. They sign the approval matrix.

**Week 1 - shadow mode:**

- Build the workflow per the SOW.
- Run in shadow mode: agent generates outputs, no actions taken, drafts only.
- Daily: open `02-pilot/pilot-engagement-log.md`, log what was processed and what would have happened.
- End of week 1: review the shadow output with the client. Tune.

**Week 2 - live with approvals:**

- Move to live: agent proposes, named human approver in the matrix clicks Approve, system executes.
- Daily: log activities, approvals, incidents.
- Watch the approval rate. If it stays under 60%, the workflow is wrong, not the model. Stop and re-scope.

**Week 3 - live, expanded volume:**

- Increase throughput. Confirm the SLAs in the approval matrix are still met.
- Mid-week 3: send a 1-pager to the client (extracted from the engagement log) showing volumes, approval rate, hours saved.

**Week 4 - hardening + handover:**

- Reduce flakiness. Document any gotchas in the engagement log.
- Write the "Final report" section of `pilot-engagement-log.md`.
- Send the subscription proposal (Foundation / Operator / Embedded - reference `sales-assets/05-pricing-sheet.md`).

---

## 7. Subscription (post-pilot)

The subscription is your business. Pilots produce one-off revenue; subscriptions produce a business.

**Tier reference:**

- **Foundation** ($5-9k/mo): one workflow live, monthly check-in, monthly report.
- **Operator** ($10-19k/mo): up to three workflows, biweekly check-in, monthly report, included build hours for tweaks.
- **Embedded** ($20k-35k+/mo): unlimited in-scope workflows, weekly check-in, embedded operator time, included build hours for new workflows.

**Monthly cadence (every active client):**

| Day of month | Action | Reference |
|---|---|---|
| 1 | Pull last month's audit logs and incidents | `04-incidents/` + workflow audit logs |
| 5 | Invoke `aao-monthly-impact-analyst` with last month's data; write to `03-monthly-reports/<YYYY-MM>-monthly-report.md` | `03-monthly-reports/_monthly-report-template.md` |
| 7 | Operator review, edit, send to client owner | Cover note in Appendix A |
| 15 | 30-min check-in call with client owner | |
| 25 | Review next month's roadmap; raise any policy or guardrail updates | |

**Quarterly cadence:**

- Invoke `aao-expansion-opportunity-analyst`. Write output to `05-expansion/<YYYY-Qn>-roadmap.md`.
- Walk through with the client owner. Only present an expansion if existing workflows are stable: approval rate >=80%, zero open S1/S2 incidents, four consecutive weeks of operation.

---

## 8. Incident handling

Every incident, no matter how small, gets a file. Discipline here is what separates AAO from a cowboy.

**Severity scale (matches Trust page):**

- **S1** Customer or third-party data exposure, regulatory-reportable event, or live action that caused material commercial harm.
  - Notify client within **1 hour** by phone (not email).
  - Reference `legal-scaffolds/03-data-processing-schedule.md` section 11 for breach notification specifics.
  - If the Privacy Act NDB threshold is met, notify OAIC within statutory timeframes.
- **S2** Workflow failure where an incorrect action was sent or executed (no exposure).
  - Notify client within **4 hours**.
- **S3** Workflow failure caught by approval or guardrail before any action.
  - Log only. Mention in next monthly report.
- **S4** Cosmetic, formatting, or non-impacting issue.
  - Log only.

**Process for any incident:**

1. Open `clients/<slug>/04-incidents/<YYYY-MM-DD>-<short-name>.md` from `_incident-template.md`.
2. Complete the header and section 1 immediately.
3. If S1/S2: notify per timeline above. The phone call is more important than the file.
4. Mitigate. Pause the workflow if needed.
5. Complete the RCA (sections 2-7) within **5 business days** of detection.
6. Close the loop: corrective actions verified, learnings captured, any approval matrix or guardrail spec updates applied.

If a workflow has produced 3 rejections in a single week, treat that as an S3 pattern incident even without a triggering event.

---

## 9. Engagement end

Every engagement ends eventually. Make the last impression as professional as the first.

1. Follow the runbook in `legal-scaffolds/07-cancellation-and-offboarding.md`.
2. Produce a final monthly report covering the partial month.
3. Hand back configurations, audit logs, integration credentials. Use the export checklist in the offboarding scaffold.
4. Hold a one-hour knowledge transfer call. Record it (with consent) and hand them the recording.
5. Move `clients/<slug>/` to `clients/_archived/<slug>/`. Do **not** delete - retention obligations under the Privacy Act and tax record-keeping rules apply (5 years minimum).
6. Add a one-line `ARCHIVED.md` at the root of the archived folder with the archive date and reason.
7. Send the cancellation acknowledgement email (Appendix A).

---

## 10. Personal habits

Operator hygiene. Re-read this monthly.

- **Operator review is mandatory.** Nothing leaves this workspace and reaches a client without your eyes on it. Skills are advisory; you are the operator.
- **Log every outcome.** Won, lost, deferred, ghosted - all of it goes into `clients/_metrics.csv`. This feeds future skill tuning and your own pattern recognition.
- **One workflow at a time per client.** You earn the right to add a second by stabilising the first. Approval rate >=80%, zero open S1/S2, four weeks of stability.
- **Never promise an SLA the approval queue cannot honour.** A 2-hour SLA needs an approver who actually checks their phone. Audit this when defining the matrix; revisit at every monthly check-in.
- **Three rejections in a week pauses the workflow.** This is not optional. Pause, review with the client, fix the policy or the prompt or the scope. Then resume.
- **The skills are advisory.** They produce defensible drafts; they do not produce defensible truth. You are responsible for what reaches the client.
- **Conservative ROI numbers that come true beat heroic ones that do not.** Trim the optimism every time.
- **Do not pitch on the discovery call.** Diagnose. The pitch is the audit deliverable.
- **Do not bundle.** Two pilots in one proposal closes worse than one pilot in one proposal.
- **Phone before email for S1.** Always.

---

## Appendix A - Email cover-note templates

> All en-AU. Plain, confident, no marketing language. Sender: Taylor Mayo, AAO Group. Substitute `{{placeholders}}`.

### A.1 Discovery call confirmation (after Calendly booking)

> Subject: Confirmed - {{HH:MM}} {{day}} - quick AAO discovery chat

Hi {{first_name}},

Confirming our 15-minute call at {{HH:MM AEST}} on {{day, date}}.

I will use the time to understand the shape of {{trading_name}} - the work that is eating the most time, the systems you already use, and where AI might genuinely help (versus where it would just create new problems). I will not pitch on the call. If we both think there is something worth looking at, the next step would be a paid Operations Audit.

If anything has come up since you booked, just reply and we will reschedule.

Talk then,
Taylor
AAO Group

### A.2 Onboarding form (after audit accepted)

> Subject: Operations Audit - onboarding form for {{trading_name}}

Hi {{first_name}},

Great - I am glad we are doing this.

Attached (or below) is the onboarding form. It takes about 30 minutes to fill in and gives me what I need to make the audit useful rather than generic. The fields marked "unknown" are fine to leave - we will work them out together at the kickoff.

Once it is back, I will book the audit kickoff call and start the analysis. The deliverable lands within {{N}} working days of kickoff.

Invoice for the audit fee (${{X}} + GST) is attached. Standard terms - 7 days. Payment is due before the deliverable is sent.

Let me know if anything is unclear.

Taylor
AAO Group

### A.3 Audit deliverable (with PDF attached)

> Subject: Operations Audit - {{trading_name}} - deliverable attached

Hi {{first_name}},

The audit is attached.

Three things worth flagging up front:

1. The single recommendation is on page {{N}}, section 11. That is what I would do first if this were my business.
2. The numbers in section 4 are deliberately conservative. They are what I am willing to defend, not what is theoretically possible.
3. If we move forward to the pilot within the next 14 days, the audit fee credits against the pilot fee.

I have set aside 30 minutes on {{day, date, time}} to walk through it. Let me know if that works or send a couple of alternatives.

Taylor
AAO Group

### A.4 Pilot proposal cover note

> Subject: First Agent Pilot - {{trading_name}} - proposal + SOW

Hi {{first_name}},

Attached:

- Pilot proposal (the readable version)
- Statement of Work (the contract version - the two agree)
- AI limitations disclosure (acknowledgement annex)
{{first-engagement only:}}- Master Services Agreement (one-time signature)

The pilot scope is the single workflow we identified in the audit (section 11). It runs {{N}} weeks: week 1 in shadow mode, weeks 2-{{N}} live with approvals. Fixed fee ${{X}} + GST. Audit fee credited per the 14-day rule.

I am happy to walk through the SOW with your lawyer if that helps. Otherwise, signed return by {{date}} would mean we kick off on {{date}}.

Taylor
AAO Group

### A.5 Monthly report cover note

> Subject: AAO monthly report - {{trading_name}} - {{Month YYYY}}

Hi {{first_name}},

This month's report is attached.

Headline: {{one sentence - the dollar or hour figure}}.

Two things that need a decision from you (section 8):

1. {{decision 1}}
2. {{decision 2}}

Our regular check-in is on {{date, time}}. If you want to bring anything else to that call, send it through beforehand.

Taylor
AAO Group

### A.6 Polite "not a fit" decline

> Subject: Following up on our chat

Hi {{first_name}},

Thanks for the time on {{day}}. After thinking it through, I do not think AAO is the right fit for {{trading_name}} right now - {{one specific reason: too early, not enough repetitive volume, regulatory regime we are not the right people for, etc.}}.

If that changes in the next 6-12 months, please get in touch. And if you know someone else who might fit the shape we work with, I would appreciate the introduction.

All the best with it,
Taylor
AAO Group

### A.7 Cancellation acknowledgement

> Subject: AAO engagement wind-down - {{trading_name}}

Hi {{first_name}},

Confirming we have received your notice of cancellation effective {{date}}.

Here is what happens next:

1. I will produce a final monthly report covering this partial month, by {{date}}.
2. Configuration, audit logs, and integration credentials will be exported and handed back per the offboarding runbook in our SOW.
3. We will hold a one-hour knowledge transfer call at a time that works for you - send a couple of options.
4. Final invoice is enclosed for the partial month.

I genuinely appreciate the trust you placed in AAO. If there is feedback on what would have made this a longer engagement, I would value hearing it - on or off the record.

Taylor
AAO Group

---

## Appendix B - Which skill to invoke when

| Stage | Skill | Input | Output |
|---|---|---|---|
| Audit prep | `aao-client-intake-analyst` | Onboarding form + discovery transcript | Structured client profile JSON |
| Audit prep | `aao-workflow-discovery-analyst` | Discovery transcript + onboarding workflows section | Ranked candidate workflows |
| Audit | `aao-data-sensitivity-classifier` | Workflow + data categories | Per-workflow sensitivity classification (L1-L5) + handling rules |
| Audit | `aao-integration-planner` | Workflow + systems inventory | OAuth scopes, webhooks, polling, setup checklist |
| Audit | `aao-ai-opportunity-scorer` | Workflows + sensitivity + integration | Weighted ROI rank for each candidate |
| Audit | `aao-approval-policy-designer` | Top workflow + risk appetite | Approval matrix |
| Audit | `aao-guardrail-spec-writer` | Top workflow + approval policy | Guardrail spec (input/output/topical/dialog/retrieval/policy) |
| Audit | `aao-pilot-proposal-writer` | Audit + scoring | Pilot proposal Markdown |
| Audit (orchestrator) | `aao-audit-pipeline` | Full input JSON | All eight skill outputs chained as one JSON |
| Audit deliverable | `aao-audit-report-renderer` | Orchestrator output + client metadata | Client-ready Markdown report |
| Pilot delivery | `aao-approval-policy-designer` | Refined workflow + risk | Updated approval matrix (if audit version needs revision) |
| Pilot delivery | `aao-guardrail-spec-writer` | Refined workflow + policy | Updated guardrail spec |
| Subscription monthly | `aao-monthly-impact-analyst` | Audit logs + workflow metrics + incidents | Monthly impact report |
| Subscription quarterly | `aao-expansion-opportunity-analyst` | Usage data + client feedback + monthly trends | Expansion roadmap with ranked candidates |
