# Incident report - {{INC-YYYY-MM-DD-short-name}}

> One file per incident. Filename: `YYYY-MM-DD-short-name.md`. RCA must be completed within 5 business days of detection. S1 incidents trigger client notification within 1 hour (phone, not email).

---

## Header

- **Incident ID:** {{INC-YYYY-MM-DD-NNN}}
- **Client:** {{client_trading_name}}
- **Workflow involved:** {{workflow_name}} v{{X.Y}}
- **Detected at (timestamp, AEST):** {{YYYY-MM-DD HH:MM}}
- **Detected by:** {{name / system / client}}
- **Reported at:** {{YYYY-MM-DD HH:MM}}
- **Severity:** {{S1 / S2 / S3 / S4}}
- **Status:** {{open / mitigating / resolved / closed}}
- **Assigned to:** {{operator_name}}

### Severity scale (AAO Trust)

- **S1** Customer or third-party data exposure, regulatory-reportable event, or live action that caused material commercial harm. Client notified within 1 hour by phone.
- **S2** Workflow failure where an incorrect action was sent or executed (no exposure). Client notified within 4 hours.
- **S3** Workflow failure caught by approval or guardrail before any action. Logged; mentioned in next monthly report.
- **S4** Cosmetic, formatting, or non-impacting issue. Logged only.

---

## 1. What happened (5W1H)

- **What:** 
- **Who:** 
- **When:** 
- **Where (system / workflow / step):** 
- **Why (initial hypothesis):** 
- **How discovered:** 

## 2. Client impact

- **Customers / records affected:** 
- **Financial impact (AUD):** 
- **Reputational / relational impact:** 
- **Regulatory exposure (Privacy Act NDB threshold? Industry regulator? Contract breach?):** 

## 3. Immediate actions taken

| Time (AEST) | Action | By |
|---|---|---|
| | | |
| | | |

## 4. Root cause analysis

> Use the 5-Whys or fishbone, not vibes.

- **Why 1:** 
- **Why 2:** 
- **Why 3:** 
- **Why 4:** 
- **Why 5:** 
- **Root cause statement:** 

## 5. Corrective and preventive actions

| ID | Action | Owner | Due | Status | Verification |
|---|---|---|---|---|---|
| CA-1 | | | | | |
| CA-2 | | | | | |
| PA-1 | | | | | |

## 6. Client notification

- **Notification required (Y/N):** 
- **Method (phone / email / meeting):** 
- **Notified at:** {{YYYY-MM-DD HH:MM}}
- **Notified by:** {{operator_name}}
- **Client representative notified:** {{name}}
- **Summary of what was communicated:** 

> Reference for breach notification timelines and content: `legal-scaffolds/03-data-processing-schedule.md` section 11. For NDB scheme thresholds, refer to OAIC guidance on serious harm.

## 7. Audit log references

- Action log entries: 
- Guardrail rule firings: 
- Model + version at time of incident: 
- Approver(s) involved: 

## 8. Learnings

- What we will do differently:
  - 
- Skill, guardrail, or approval matrix changes triggered:
  - 
- Update to `OPERATOR_PLAYBOOK.md` triggered (Y/N + section): 

## 9. Sign-off

- **RCA completed by:** {{operator_name}} on {{YYYY-MM-DD}}
- **Reviewed by client (if S1/S2):** {{name, date}}
- **Closed on:** {{YYYY-MM-DD}}
