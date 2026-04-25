# Case Study Template

*Template Taylor uses to write up the first paid client outcome. Replace `{{placeholders}}`. The v1 default is sector-anonymous (named client only with explicit written consent).*

---

## {{Headline outcome — e.g. "Quote turnaround down from 31 hours to under 4, owner gains 10 hours a week"}}

*A {{vertical}} business in {{state}} installed one AI workflow with AAO Group. Here's what changed in 90 days.*

---

### One-line summary

A {{headcount}}-person {{vertical}} operator, turning over ~AUD ${{revenue_band}}M in {{state}}, installed an AAO Lead Intake + Quote Prep Agent over a 4-week pilot. {{One-sentence outcome with the headline metric}}.

---

### Client snapshot

| Field | Value |
|---|---|
| Vertical | {{vertical}} |
| Headcount | {{headcount}} |
| Revenue band | AUD ${{revenue_band}} |
| Location | {{city_or_region}} |
| Named publicly? | {{yes/no — defaults to no in v1}} |
| Engagement type | Audit → Pilot → {{subscription_tier}} Subscription |

---

### The bottleneck

{{One paragraph, in plain language, describing the operational pain in the client's own words. Quote the owner where possible. No hype. The reader of this case study should recognise their own business in this paragraph.}}

---

### What we installed

**Workflow:** {{workflow_name}}

**Layers used (per the Sovereign AI Operations Framework):**

- **Integration** — {{systems_connected, e.g. "Microsoft 365 inbox, ServiceM8, WordPress form webhook"}}
- **Workflow** — {{workflow_shape_one_line, e.g. "Classify enquiry → draft response → draft quote skeleton → queue for approval"}}
- **Guarded LLM** — {{model_provider_region, e.g. "Anthropic Claude via Amazon Bedrock, ap-southeast-2 (Sydney)"}}, with input/output/topical/policy rails configured for this workflow
- **Approval queue** — {{number}} named approvers, {{device_summary}}, {{sla_summary}} SLA
- **Audit** — every tool call, approval, rail trip, and escalation logged; rolled into the monthly client report

---

### Implementation

| Phase | Duration | What happened |
|---|---|---|
| Audit | {{audit_weeks}} weeks | Workflow map, opportunity matrix, fixed-scope pilot proposal |
| Pilot — build | 2 weeks | Integration provisioning, workflow build, approval queue configuration, internal QA |
| Pilot — shadow | 5 business days | Agent drafts every action, no sends, end-of-day review with operator |
| Pilot — approval | 5 business days | Live approval mode, daily standups for first 3 days |
| Subscription | Ongoing | {{subscription_tier}} tier — operation, monitoring, monthly impact report |

Approval matrix at go-live: {{describe — who approves what, on which device, within which SLA}}.

---

### Results

Measured against baselines captured during the audit. 30 / 60 / 90-day reads taken from the production audit log.

| Metric | Baseline | 30 days | 60 days | 90 days |
|---|---:|---:|---:|---:|
| {{metric_1}} | {{base_1}} | {{r30_1}} | {{r60_1}} | {{r90_1}} |
| {{metric_2}} | {{base_2}} | {{r30_2}} | {{r60_2}} | {{r90_2}} |
| {{metric_3}} | {{base_3}} | {{r30_3}} | {{r60_3}} | {{r90_3}} |
| Approval rate (drafts approved as-is or with minor edit) | n/a | {{ar30}}% | {{ar60}}% | {{ar90}}% |
| Customer-reported issues attributable to agent error | n/a | {{ci30}} | {{ci60}} | {{ci90}} |

**Year-1 estimated value (annualised from 90-day measurement):** AUD ${{annual_value}}
**Year-1 cost (pilot + 12-month subscription):** AUD ${{annual_cost}}
**Payback period:** {{payback_months}} months

---

### In the owner's words

> "{{owner_quote — short, specific, ideally referring to a measurable change rather than a generic feeling}}"
>
> — {{owner_first_name}}, {{owner_role}}, {{client_or_sector_attribution}}

---

### What's next

The next workflow in the roadmap is **{{next_workflow}}**, scoped during the {{when_scoped}} review and entering its own pilot in {{quarter}}. {{One sentence on why it's next — usually the second-highest opportunity score, or the workflow that unlocks the third}}.

---

### Footnotes

- All metrics in this case study come from the production audit log between {{date_range}}.
- {{client_attribution_clause — e.g. "The client's name is withheld at their request; the data and outcomes are real."}}
- The Sovereign AI Operations Framework is documented at [aaogroup.au/framework](https://aaogroup.au/framework).
- Contact AAO Group for the full pilot deliverable that produced these outcomes: hello@aaogroup.au.

---

**AAO Group** · Australian AI Operations · ABN 51 559 921 362 · [aaogroup.au](https://aaogroup.au) · Perth, Western Australia
**Book an audit:** [calendly.com/aaogroup](https://calendly.com/aaogroup)
