# Onboarding form - {{client_trading_name}}

> Sent to the client after the discovery call confirms a paid audit. Returned by the client and used as primary input to `aao-client-intake-analyst`. The operator may pre-fill anything already known from the discovery call.

**Form version:** 1.0
**Issued:** {{YYYY-MM-DD}}
**Returned:** {{YYYY-MM-DD}}
**Audit start scheduled for:** {{YYYY-MM-DD}}

---

## 1. Business profile

- **Legal entity name:** {{e.g. Coastal Concrete Pty Ltd}}
- **ABN:** {{XX XXX XXX XXX}}
- **Trading name (if different):** 
- **Industry / ANZSIC where known:** 
- **Year founded:** 
- **Primary trading address:** 
- **Website:** 
- **Workers compensation jurisdiction (state):** 

## 2. Team

- **Org chart sketch (text is fine):**
  - Owner / MD: {{name}}
  - Operations lead: {{name}}
  - Admin / office manager: {{name}}
  - Field / delivery team size: {{n}}
  - Other notable roles: {{name, role}}
- **Primary decision-maker for this engagement:** {{name, role, email, mobile}}
- **Day-to-day technical contact:** {{name, role, email, mobile}}
- **AI champion / curious internal user (if any):** {{name, role}}

## 3. Systems we may touch

> One row per system. If you do not know a value, write "unknown" - we will find it together.

| System | Provider | Plan tier | Primary user(s) | Sensitive data Y/N | Notes |
|---|---|---|---|---|---|
| {{e.g. CRM}} | {{HubSpot}} | {{Starter}} | {{Sales lead}} | {{Y}} | |
| | | | | | |
| | | | | | |
| | | | | | |

(Full inventory continues in `systems-inventory.md`.)

## 4. Workflows of interest

> List 3-5 workflows where you suspect AI could save time or reduce errors. Rank them by how painful they are today. We will analyse all of them.

| Rank | Workflow name | Current owner | Frequency | Time per week (h) | What is annoying about it today |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

## 5. Data we will touch

> Tick every category that may appear inside the workflows above.

- [ ] Customer/contact PII (name, address, phone, email)
- [ ] Customer financial info (invoices, payment details)
- [ ] Employee records (TFN, pay, super)
- [ ] Health information about a person (TFN, medical, allied health notes)
- [ ] Legal/contractual documents
- [ ] Pricing or commercial terms
- [ ] Pricing or contracts under NDA with third parties
- [ ] Trade secrets or proprietary processes
- [ ] Government identifiers (Medicare, driver licence, passport)
- [ ] Children's records (under 18)
- [ ] Other regulated data: {{describe}}

> AAO will classify each category against the AAO 5-level sensitivity scale (L1 Public to L5 Restricted) during the audit.

## 6. Compliance context

- **Regulatory regimes that apply:** {{e.g. Privacy Act 1988, APP, Notifiable Data Breaches scheme, AHPRA, ASIC, ACCC, state-based licensing}}
- **Industry codes / standards (e.g. ISO 27001, IRAP, PCI DSS):** 
- **Prior data breaches in last 5 years (Y/N + brief):** 
- **Cyber insurance policy in place:** {{Y/N, insurer, limit}}
- **Existing AI / acceptable use policy in place:** {{Y/N - if Y, please attach}}

## 7. Approval preferences

> Who needs to say "yes" before the AI does X, on what device, and how fast?

| Action class | Approver role | Preferred device | SLA target | Escalation if no response |
|---|---|---|---|---|
| {{e.g. Send quote >$5k}} | {{Owner}} | {{Mobile}} | {{2h business}} | {{Ops lead}} |
| | | | | |
| | | | | |

## 8. Risk appetite

> Self-rated 1 (very conservative - human in loop on everything) to 5 (we move fast and accept small errors).

- **Score:** {{1-5}}
- **Comment:** 

## 9. Engagement logistics

- **Audit kickoff date:** {{YYYY-MM-DD}}
- **Audit lead (your side):** {{name}}
- **Billing contact:** {{name, email}}
- **GST registered:** {{Y/N}}
- **Preferred invoice cadence:** {{up-front / on delivery / split}}
- **Preferred payment method:** {{EFT / card / direct debit}}

---

**Client signature (acknowledging accuracy of the above):** {{name, date}}
**AAO operator who reviewed:** {{operator name, date}}
