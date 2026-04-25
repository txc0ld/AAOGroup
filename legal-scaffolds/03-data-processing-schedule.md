# Data Processing Schedule (Schedule 2 to the MSA)

> **⚠️ DRAFT — Not legal advice. Pending counsel review before use with any client. Last updated 2026-04-25.**
>
> This Schedule attaches to and forms part of the Master Services Agreement (`01-master-services-agreement.md`) between **Australian AI Operations Group Pty Ltd** (ABN 51 559 921 362) and the Client. It describes how AAO handles Personal Information and other data on behalf of the Client. Items marked ***⚠️ counsel:*** are flagged for legal review.

---

## 1. Subject Matter and Duration

1.1. **Subject matter.** Processing of Client data (including Personal Information) by AAO and its Sub-processors to deliver the Workflows specified in each SOW.

1.2. **Duration.** From the Effective Date of each SOW until the offboarding obligations in Schedule 7 are completed.

## 2. Nature and Purpose of Processing

2.1. **Nature.** AAO performs the following operations on Client data:

- collection (via Integrations or direct upload);
- structuring and tagging (e.g. classification, intent detection);
- inference (passing data to LLMs to generate Outputs);
- storage (for the duration required to operate the Workflow and meet retention obligations);
- transmission (between Sub-processors and back to Client systems);
- deletion (per §10).

2.2. **Purpose.** Solely to deliver the Service to the Client. **AAO does not use Client data for any other purpose**, including:

- training, fine-tuning, or evaluating any AI model;
- benchmarking AAO's product;
- marketing to the Client's customers; or
- selling or licensing data to third parties.

## 3. Categories of Data

| Category | Examples | Sensitivity (per AAO scale) |
|---|---|---|
| **Personal Information** of Client staff | name, work email, role | L1–L2 |
| **Personal Information** of Client end-customers | name, contact details, transaction history | L2–L3 |
| **Sensitive Information** (where in scope) | health, financial, government identifiers — only where the SOW expressly authorises | L4 |
| **Business operational data** | invoice line items, schedules, inventory, internal communications | L1–L3 |
| **Third-party data flowing through Workflows** | supplier emails, contractor documents | L2–L3 |

3.2. **AAO Sensitivity Classification (5-level):**

| Level | Description | Default handling |
|---|---|---|
| **L1 — Public** | Already public information | Standard logging |
| **L2 — Internal** | Routine internal data | Encrypted at rest; access-controlled |
| **L3 — Confidential** | Customer details, contracts, pricing | Australian-resident processing default; restricted access |
| **L4 — Restricted** | Sensitive Information per Privacy Act, financial credentials, regulated data | Australian-resident processing required; enhanced logging; explicit Client authorisation in SOW |
| **L5 — Prohibited** | Data classes excluded by Schedule 4 | Workflow refuses; incident raised |

## 4. Categories of Data Subjects

- Client employees, contractors and Approvers;
- Client end-customers (consumers or business contacts);
- Suppliers, contractors and other third parties referenced in Workflows;
- Members of the public who contact the Client through channels covered by a Workflow.

## 5. Sub-processors

5.1. AAO uses the following categories of Sub-processor. The current list per Workflow is documented in the SOW.

| Category | Provider | Role | Region (default) |
|---|---|---|---|
| **LLM provider** | Anthropic (via AWS Bedrock) | Model inference | **AWS Sydney (ap-southeast-2)** |
| **LLM provider** (where required) | OpenAI (via Azure) | Model inference | **Azure Australia East** |
| **Productivity Integrations** | Google (Workspace), Microsoft (365) | Source/sink for Workflow data | Per Client's existing tenancy |
| **Finance Integrations** | Xero, MYOB | Source/sink for finance Workflows | Australia |
| **Communications Integrations** | Slack, SMS gateways | Approval channel | Per provider |
| **Hosting / orchestration** | Vercel, Fly.io (or equivalent) | Run AAO control plane | **Sydney region where available** |
| **Logging / monitoring** | {{logging_provider}} | Audit Log storage | **Australia** |
| **Secrets management** | {{secrets_provider}} | Credential vault | **Australia** |

5.2. **Sub-processor changes.** AAO will give the Client at least **30 days' written notice** before adding or replacing a Sub-processor that processes Personal Information. The Client may object on reasonable grounds within 14 days; if not resolved, the Client may terminate the affected SOW with no early-termination fee.

5.3. **Sub-processor obligations.** AAO will impose contractual obligations on Sub-processors that are no less protective than this Schedule, including no-training and security commitments.

5.4. ***⚠️ counsel: confirm whether AAO needs to maintain a public Sub-processor register page (some enterprise clients will require this even at SMB scale).***

## 6. International Transfers

6.1. **Default position.** Where the Workflow can be operated using Sub-processors and infrastructure located in Australia, AAO will do so.

6.2. **Where offshore processing is required.** If a Workflow requires a Sub-processor that processes data outside Australia (e.g. a model not yet available in an Australian region), AAO will:

- (a) document the offshore element in the SOW;
- (b) obtain the Client's prior written agreement;
- (c) ensure a contractual basis for the transfer that is consistent with **APP 8** (cross-border disclosure of Personal Information) under the Privacy Act; and
- (d) take reasonable steps to ensure the overseas recipient does not breach the Australian Privacy Principles.

6.3. ***⚠️ counsel: APP 8 places residual liability on AAO for overseas recipient acts. Please confirm whether AAO should rely on the "reasonable steps" model, or seek standard contractual protections (e.g. SCCs-style clauses).***

## 7. Security Measures

Per PRD §15. AAO maintains the following measures (current as at the date of this Schedule):

**7.1. Access control**
- Multi-factor authentication required for all AAO personnel and admin consoles.
- Role-based access following the principle of least privilege.
- Quarterly access reviews; immediate revocation on personnel departure.

**7.2. Encryption**
- Data in transit: TLS 1.2 or higher.
- Data at rest: AES-256 or equivalent provider-managed encryption.

**7.3. Logging and monitoring**
- Immutable Audit Log of every Workflow run, Output, and Approval.
- Administrative actions logged separately and reviewed monthly.

**7.4. Software development**
- Secrets never committed to source control; secrets manager for runtime credentials.
- Code review required for all changes to Workflow logic.
- Dependency scanning and patching cadence per AAO security policy.

**7.5. Personnel**
- Background checks for personnel with access to Client data (consistent with Australian employment law).
- Confidentiality obligations as a condition of engagement.

**7.6. Resilience**
- Automated backups for stateful systems; documented restore procedures.
- Incident response runbook (per clause 11 of the MSA).

**7.7. Assurance**
- Annual third-party security review; report available on request to the Client (subject to confidentiality).

7.8. ***⚠️ counsel: AAO will not be SOC 2 / ISO 27001 certified at v1. Confirm that "annual third-party review" is sufficient for the SMB market and how to handle clients that contractually require formal certification.***

## 8. Data Subject Rights

8.1. AAO will assist the Client to respond to requests from individuals exercising rights under the *Privacy Act 1988* (Cth), including:

- access to Personal Information;
- correction of Personal Information;
- complaints about handling of Personal Information.

8.2. **Routing.** Individuals who contact AAO directly will be directed to **privacy@aaogroup.au**, and AAO will route the request to the Client without unreasonable delay.

8.3. **Cost.** Routine assistance is included in the subscription. Non-routine assistance (e.g. extensive log searches) may be charged at AAO's standard rates with prior written agreement.

8.4. ***⚠️ counsel: confirm "routine vs non-routine" framing is acceptable, or whether a more explicit cost model is needed.***

## 9. Breach Notification

9.1. **AAO to Client.** AAO will notify the Client of any actual or reasonably suspected breach of Personal Information:

- **within 1 hour** of detection for **S1** events (per MSA clause 11);
- with a written summary within **24 hours**;
- with a root cause analysis within **5 business days**.

9.2. **OAIC and individuals.** Where the breach is an "**eligible data breach**" under the **Notifiable Data Breaches scheme** (Part IIIC of the Privacy Act), AAO will support the Client to make the notification to the **Office of the Australian Information Commissioner (OAIC)** and to affected individuals, within the statutory timeframes.

9.3. ***⚠️ counsel: confirm allocation of the notification obligation. The Client is normally the APP entity for its end-customer data, but AAO may itself be an APP entity for Client staff data — this needs to be mapped per Workflow.***

## 10. Audit Rights

10.1. **Annual security report.** AAO will provide its current annual third-party security report to the Client on request, subject to a reasonable confidentiality undertaking.

10.2. **Client audits.** Once per 12-month period, the Client may conduct an on-site audit of AAO's controls relevant to the Service:

- with at least **30 days' written notice**;
- during business hours;
- without disrupting AAO's operations or other clients;
- subject to a confidentiality undertaking; and
- **at the Client's cost** (including AAO's reasonable time at standard rates).

10.3. ***⚠️ counsel: confirm "at Client's cost" position is reasonable for SMB market.***

## 11. Return / Deletion at Termination

Per MSA clause 14 and Schedule 7. On termination:

- (a) AAO will provide the Client with an export of Workflow configurations (JSON), Audit Logs (CSV/JSON) and any other Client data within **30 days**.
- (b) After export and Client confirmation of receipt, AAO will delete Client data from active systems within **30 days**, and from backups in accordance with the standard backup rotation cycle.
- (c) Where any data must be retained to meet a legal or regulatory obligation, AAO will keep only the minimum required and delete it on expiry of the retention period.
- (d) AAO will provide written confirmation of deletion on Client request.

11.2. ***⚠️ counsel: confirm 30-day windows are appropriate, and how to handle clients in regulated sectors (e.g. financial services 7-year record retention) where the Client may need AAO to hold data longer.***

---

> **End of Data Processing Schedule scaffold.**
> **⚠️ DRAFT — Pending counsel review. Do not execute without legal sign-off.**
