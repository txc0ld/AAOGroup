# Security & Trust — One Page

*For IT and MSP gatekeepers screening AAO Group as a vendor.*

---

**AAO Group** · Australian AI Operations · ABN **51 559 921 362**
Security contact: **security@aaogroup.au**
Responsible disclosure: **security@aaogroup.au** (PGP key on request)
General contact: hello@aaogroup.au · aaogroup.au · Perth, Western Australia

---

## Posture summary

AAO Group installs narrow, human-approved AI workflows inside Australian SMBs. Every customer-facing or system-changing action is gated by a named human approver and recorded in a structured audit log. Models run onshore (Bedrock Sydney or Azure Australia East) where supported. We hold professional indemnity and cyber liability insurance. We are not yet IRAP, ISO 27001, or SOC 2 certified — that is a deliberate v1 scope decision, not an oversight, and we say so in every conversation. Our v1 baseline is the Australian Privacy Principles (Privacy Act 1988) implemented properly.

---

## Approval gates

Every workflow runs in shadow mode (no real-world action) for the first 5 business days, then in approval mode (every action gated). The approval queue is the product. Specifically:

- Every customer-facing message lands in the queue for approve / edit / reject by a named human on a registered device.
- Every system-changing action (CRM update, file write, record creation) is treated the same way.
- No autonomous send / write mode is offered in v1.
- Each workflow ships with a documented approval matrix: which actions, which approvers, which devices, which SLAs, which escalation paths.

---

## Logging and audit trail

We capture, per workflow:

- Every tool / API call (timestamp, system, scope, success/failure, latency).
- Every approval decision (approver identity, decision, edits made, time-in-queue).
- Every guardrail trip (rail type, input/output excerpt with PII redacted, action taken).
- Every escalation and incident.

**Default retention:** 18 months online, 7 years cold archive. Configurable per client.
**Access:** Client-side audit log access via the operator dashboard. Logs exportable on request.
**Tamper-evidence:** Append-only structured logs with hash-chained daily snapshots.

---

## Data residency

- **Models** run on Amazon Bedrock in **ap-southeast-2 (Sydney)** or Azure **Australia East** where the chosen model is supported.
- **Application infrastructure** runs in Australian regions of the same providers.
- **Logs and operator dashboard** hosted in Australian regions.
- A per-deployment **model and provider register** is published at pilot start and re-checked at every subscription renewal. Clients can restrict providers in their workflow policy.

---

## Data handling

- **Minimisation** — only the fields required for the workflow are sent to the model. Identifiers are stripped or pseudonymised where the workflow permits.
- **Classification** — every workflow's data is mapped against the AAO 5-level sensitivity scale (Public / Internal / Confidential / Sensitive / High-risk-regulated). Sensitivity ≥ 3 triggers restricted handling rules. Sensitivity = 4 is out of v1 scope.
- **No training use** — provider contracts exclude use of client data for model training. Documented in the SOW.
- **No cross-client memory** — internal Skills are client-isolated. There is no shared sensitive context between clients.
- **Right to erasure** — client data is returned or destroyed within 14 days of contract end, at the client's election.

---

## Integration principles

- **Least privilege** — only the OAuth scopes / API permissions required for the workflow are requested. Read-only first; write only where required.
- **Scope-restricted** — integration access is constrained to allow-listed labels, folders, accounts, or record types.
- **Revocable** — the client may revoke any integration at any time via the relevant provider console; the workflow degrades cleanly to manual mode.
- **Documented** — every integration is listed in the SOW and the model and provider register.

---

## Incident response

| Severity | Definition | Response SLA | Communication |
|---:|---|---|---|
| **Sev 1** | Confirmed data exposure, autonomous unintended action, or full workflow outage | Acknowledge within 1 hour; first written status within 4 hours | Direct call to nominated client contact |
| **Sev 2** | Material guardrail failure, partial outage, or repeated SLA breach | Acknowledge within 4 business hours; written status within 1 business day | Email to nominated client contact |
| **Sev 3** | Single isolated guardrail trip or non-blocking degradation | Logged; included in next weekly report | Weekly report only |

Every Sev 1 / Sev 2 incident produces a written post-incident report within 5 business days, covering root cause, scope, action taken, and prevention plan. Reports are shared with the client and retained in their audit log.

---

## Insurance

- **Professional indemnity** — coverage held through {{insurer_name}} (placeholder; certificate available on request to security@aaogroup.au).
- **Cyber liability** — coverage held through {{insurer_name}} (placeholder; certificate available on request).
- Certificates of currency are provided to procurement teams during onboarding.

*(Replace placeholders with current carrier and limits before issuing externally.)*

---

## Standards alignment

| Standard | Status |
|---|---|
| Australian Privacy Principles (Privacy Act 1988) | Aligned and operating |
| Notifiable Data Breaches scheme | Process documented; aligned to OAIC guidance |
| ISO 27001 | Not certified in v1 — controls mapped, certification on roadmap |
| SOC 2 Type II | Not certified in v1 — controls mapped, certification on roadmap |
| IRAP | Not assessed in v1 — out of scope for current target market |

We say what we are and what we aren't. Where a client requires a certification we don't hold, we'll tell you on the first call rather than the fifth.

---

## Contact

**Security questions:** security@aaogroup.au
**Responsible disclosure:** security@aaogroup.au (PGP key on request)
**General:** hello@aaogroup.au
**Web:** aaogroup.au/trust

---

*This document is a public summary. The full security control set, including matched control evidence, is shared under NDA on request.*
