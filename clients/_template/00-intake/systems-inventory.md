# Systems inventory - {{client_trading_name}}

> Detailed inventory of every system that may be in scope for the audit. Used as input to `aao-integration-planner`. Build this collaboratively with the technical contact during the audit kickoff. Anything marked "unknown" gets a follow-up assigned.

**Last updated:** {{YYYY-MM-DD}}
**Compiled by:** {{operator_name}} with {{client_technical_contact}}

---

## A. Connected systems

> One row per system. Add rows as needed. Sensitive data Y/N is a quick yes/no - the formal classification happens in the audit via `aao-data-sensitivity-classifier`.

| # | System name | Provider | Plan / tier | Primary owner | OAuth scopes available | Current integrations | Sensitive data (Y/N) | Notes |
|---|---|---|---|---|---|---|---|---|
| 1 | {{e.g. Gmail}} | {{Google Workspace}} | {{Business Standard}} | {{Office mgr}} | {{Mail.ReadWrite, Calendar}} | {{Zapier, Calendly}} | {{Y}} | {{Shared inbox lives here}} |
| 2 | | | | | | | | |
| 3 | | | | | | | | |
| 4 | | | | | | | | |
| 5 | | | | | | | | |
| 6 | | | | | | | | |
| 7 | | | | | | | | |
| 8 | | | | | | | | |

**Suggested categories to cover:** email, calendar, CRM, accounting, file storage, job/project mgmt, e-signature, payments, payroll, marketing automation, telephony/SMS, website CMS, internal chat, BI/reporting, identity provider (Google/Microsoft).

---

## B. Ad-hoc and spreadsheet workflows

> Things that are not really a "system" but still hold data and drive work. Capture them here so they are not invisible during integration planning.

| # | What it is | Where it lives | Who maintains it | Used for | Sensitive data (Y/N) | Notes |
|---|---|---|---|---|---|---|
| 1 | {{e.g. Job tracker spreadsheet}} | {{Google Sheet, shared drive}} | {{Office mgr}} | {{Tracks active jobs and crew rosters}} | {{Y - has client addresses}} | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |

---

## C. Identity and access

- **Primary identity provider:** {{Google Workspace / Microsoft Entra / Okta / none}}
- **MFA enforced for staff:** {{Y/N - which method}}
- **Shared logins still in use:** {{Y/N - which systems}}
- **Password manager in use:** {{1Password / Bitwarden / LastPass / none}}
- **Offboarding process for departed staff:** {{describe in 1-2 lines}}

---

## D. Data flow notes (free text)

> Anything notable about how data moves between the systems above. Manual exports, scheduled jobs, weird workarounds, things held together with sticky tape. This is gold for the audit.

- 
- 
- 

---

## E. Out of scope (explicit)

> Systems the client has but does not want touched in this engagement. Document so we do not accidentally plan against them.

- 
- 
