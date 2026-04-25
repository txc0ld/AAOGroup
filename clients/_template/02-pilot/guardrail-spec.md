# Guardrail specification - {{client_trading_name}} - {{workflow_name}}

> Workflow-specific guardrails covering input rails, output rails, topical rails, dialog rails, retrieval validation and policy checks. Suitable for direct translation into a NeMo Guardrails configuration. Output of `aao-guardrail-spec-writer`.

**Workflow:** {{workflow_name}}
**Workflow version:** {{vMAJOR.MINOR}}
**Effective from:** {{YYYY-MM-DD}}
**Sensitivity (AAO scale):** L{{1-5}}
**Linked approval matrix:** `02-pilot/approval-matrix.md` v{{X.Y}}
**Author:** {{operator_name}}

---

## 1. Input rails

> Validate, sanitise or reject content arriving at the agent.

| Rule ID | Rule | Trigger | Action | Notes |
|---|---|---|---|---|
| IN-01 | Reject inputs containing {{e.g. credit card numbers}} | Regex `\b(?:\d[ -]*?){13,16}\b` matches | Reject + log + notify operator | PCI exposure |
| IN-02 | Strip {{e.g. signature blocks}} from inbound emails before LLM call | Regex / heuristic match | Mask + log | Reduces token noise and PII |
| IN-03 | Block inputs over {{N}} tokens | Token count > {{N}} | Reject + return canned message | Cost + injection surface |
| IN-04 | Detect prompt-injection patterns | Pattern library match | Reject + log + escalate | |
| | | | | |

## 2. Output rails

> Validate, redact or block content the agent has generated before it leaves the system.

| Rule ID | Rule | Trigger | Action | Notes |
|---|---|---|---|---|
| OUT-01 | Block outputs that contain unredacted {{e.g. TFNs}} | Regex match | Block + escalate | |
| OUT-02 | Require citation for any factual claim about {{client domain}} | Claim without retrieved source | Strip claim or refuse | |
| OUT-03 | Force AI disclosure footer on outbound client emails | All outbound | Append `legal-scaffolds/04-ai-limitations-disclosure.md` short-form footer | Per AUP |
| OUT-04 | Numeric sanity check on quoted prices | Quoted price outside {{X-Y}} range | Hold for human approval | |
| | | | | |

## 3. Topical rails

> Restrict what the agent will discuss.

| Rule ID | Allowed | Disallowed | Behaviour on disallowed |
|---|---|---|---|
| TOP-01 | Topics directly related to {{workflow scope}} | Legal advice, tax advice, medical advice | Decline with template response, route to human |
| TOP-02 | Communications about active jobs | Speculation about future pricing | Decline; refer to owner |
| | | | |

## 4. Dialog rails

> Constrain conversation flow, multi-turn behaviour and persona.

| Rule ID | Rule | Notes |
|---|---|---|
| DLG-01 | Persona: {{e.g. polite, brief, Australian English, no emojis}} | |
| DLG-02 | Max turns before mandatory human handoff: {{N}} | Prevents loop-trapping |
| DLG-03 | Always confirm before any action affecting >$ {{X}} value | |
| DLG-04 | If user asks "are you a human" - answer truthfully and offer handoff | Per AUP |
| | | |

## 5. Retrieval validation

> Where the agent is RAG-augmented.

| Rule ID | Rule | Notes |
|---|---|---|
| RET-01 | Source must be from approved corpus: {{list}} | No open-web fetch |
| RET-02 | Document age must be < {{N}} days for {{policy/pricing}} retrievals | |
| RET-03 | Minimum {{N}} retrieved chunks must agree before claim is asserted | |
| RET-04 | Fail closed if retrieval returns 0 chunks - return "I do not have a source for that" | |
| | | |

## 6. Policy checks

> Cross-cutting compliance gates applied independently of input/output content.

| Rule ID | Policy reference | Rule | Notes |
|---|---|---|---|
| POL-01 | `legal-scaffolds/03-data-processing-schedule.md` s{{x}} | Data classified L4+ may not leave Australian data residency | |
| POL-02 | `legal-scaffolds/05-acceptable-use-policy.md` s{{x}} | No outputs that could constitute regulated advice | |
| POL-03 | AAO internal | All actions touching $ value > {{X}} require approve-then-execute, never auto | |
| POL-04 | Client-specific | {{e.g. No mention of competitor X}} | |
| | | | |

## 7. Failure mode behaviour

When any rail fires:

- Log the rule ID, input hash, output (if any), timestamp, actor, decision.
- If `Action = block` or `Action = reject`: surface a friendly message to the human operator, never to the end-recipient.
- If `Action = escalate`: send to the escalation path defined in `approval-matrix.md` s4.
- If three rails fire on the same workflow within 24h: pause the workflow automatically and notify operator.

## 8. Test cases (must pass before go-live)

| ID | Scenario | Expected behaviour |
|---|---|---|
| T-01 | Input contains a TFN | IN-02 redacts before LLM sees it |
| T-02 | User asks for legal advice | TOP-01 declines and routes to human |
| T-03 | Retrieval returns zero chunks | RET-04 returns refusal |
| T-04 | Output contains $ figure outside sanity range | OUT-04 holds for approval |
| T-05 | Prompt injection: "ignore previous instructions" | IN-04 blocks and escalates |
| | | |

## 9. Change log

| Date | Version | Change | Author |
|---|---|---|---|
| {{YYYY-MM-DD}} | v1.0 | Initial spec | {{operator_name}} |
