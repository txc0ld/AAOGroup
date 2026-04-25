# PRD — Australian SMB AI Operations Platform

**Product name:** Working title — **Sovereign AI Ops**  
**Commercial vehicle:** Managed AI Operations for Australian SMBs  
**Technical basis:** Simplified governed workflow runtime using deterministic state machines, LangGraph-scoped task agents, approved LLM providers in Australian regions where available, NeMo Guardrails for policy rails, a human approval queue, audit logging, and a proprietary operator/client control layer. NemoClaw/OpenShell is reserved for R&D, premium sandboxing, or later enterprise-style deployments rather than the v1 commercial core.  
**Primary market:** Australian SMBs and mid-market operators  
**Version:** v1.0  
**Status:** Build-ready strategic PRD  
**Owner:** Taylor Mayor / Fantom Labs or standalone operating company  
**Document purpose:** Define the complete product, delivery model, platform architecture, GTM wedge, operating framework, and phased build plan for a high-ticket managed AI operations business serving Australian SMBs.

---

## 1. Executive Summary

Australian SMBs do not need another chatbot, automation consultant, or generic AI workshop. They need a controlled operating layer that can safely remove repetitive work from their businesses: lead handling, quoting, inbox triage, reporting, document processing, internal SOP retrieval, and admin follow-up.

The product is a **managed AI operations platform and service layer** that installs governed, narrow AI task agents inside SMB workflows. The v1 platform deliberately avoids heavy autonomous infrastructure. It uses deterministic workflow state machines, scoped LangGraph task agents, approved LLM providers, NeMo Guardrails for input/output/topical policy rails, and a proprietary client/operator dashboard that manages approvals, logs, workflow performance, risk events, and monthly reporting.

The initial business should be sold as a **high-ticket managed implementation and recurring subscription**, not as self-serve SaaS. The early moat is not the software alone. The moat is the combination of:

1. Australian SMB-specific workflow templates.
2. Trust and governance wrapper.
3. High-touch discovery and implementation.
4. Repeatable AI operations framework.
5. Strong local positioning.
6. Case studies and measurable ROI.
7. Infrastructure discipline around approvals, logs, permissions, and human-in-the-loop controls.

The core product thesis:

> Australian SMBs will pay recurring fees for AI agents when they are packaged as secure operational infrastructure that saves time, prevents missed revenue, and reduces owner/admin bottlenecks.

---

## 2. Product Vision

### 2.1 Vision Statement

Build the leading Australian AI operations layer for SMBs: a governed, measurable, managed agent infrastructure that helps businesses safely delegate repetitive operational work to controlled AI agents.

### 2.2 Product Positioning

**Primary positioning:**

> Secure AI operations for Australian SMBs.

**Expanded positioning:**

> We install controlled AI operators inside Australian businesses to handle leads, inboxes, quotes, reporting, SOPs, and repetitive admin — with approval gates, logs, data boundaries, and ongoing optimisation.

### 2.3 Category

**Fractional AI Operations + Managed Agent Infrastructure**

This category should intentionally avoid sounding like low-end automation, chatbot deployment, or prompt engineering. The positioning should anchor against a fractional AI lead, operations manager, or admin team expansion.

---

## 3. Strategic Context

### 3.1 Market Problem

Australian SMBs are being told to “adopt AI,” but most do not know where to start. Their real problems are operational, not theoretical:

- Leads are missed or answered late.
- Quotes take too long to prepare.
- Owners are trapped in inboxes.
- Admin teams manually chase information.
- Internal knowledge is scattered across emails, folders, PDFs, and people’s heads.
- Staff use AI tools informally without governance.
- Sensitive information may be copied into public AI tools without oversight.
- Most business owners cannot distinguish useful AI from hype.

### 3.2 Why Now

The timing is attractive because:

- AI agent tooling is now capable enough to automate narrow workflows.
- SMBs are aware of AI but lack internal expertise.
- Australian businesses care about data handling, privacy, sovereignty, and trust.
- Most AI consultancies sell strategy decks, not operational systems.
- Generic automation tools cannot satisfy businesses that require governance, auditability, and human approval.
- NVIDIA’s agent infrastructure direction gives technical credibility, but SMBs still need packaging, implementation, and support.

### 3.3 Strategic Constraint

NemoClaw should be treated as an early-stage reference stack, not the production foundation for v1 customer deployments.

The production strategy must therefore use a simpler layered approach:

- Use deterministic workflow state machines as the commercial runtime backbone.
- Use LangGraph for narrow scoped task agents, not open-ended autonomy.
- Use NeMo Guardrails around model interactions for input, output, topical, and policy control.
- Use approved LLM providers through Australian-region infrastructure where commercially and technically available.
- Use human approval as the central product surface.
- Keep every early deployment narrow, monitored, logged, and approval-gated.
- Reserve NemoClaw/OpenShell for internal R&D, advanced sandboxing, or premium deployments where the client’s risk profile and budget justify it.

---

## 4. Business Objectives

### 4.1 First 90 Days

- Build demo-grade technical proof for 3 SMB workflows.
- Launch professional website and trust assets.
- Run 100 targeted outbound messages.
- Complete 10 discovery calls.
- Sell 3 paid AI Operations Audits.
- Convert at least 1 audit into a First Agent Pilot.
- Build 1 anonymised or internal case study.

### 4.2 First 6 Months

- Reach AUD $20,000–$50,000 monthly recurring revenue.
- Deploy 3–5 paid client workflows.
- Convert at least 2 clients to managed AI operations retainers.
- Build reusable templates for the first 3 verticals.
- Create a repeatable implementation playbook.
- Build v1 operator dashboard.

### 4.3 First 12 Months

- Reach AUD $100,000+ monthly recurring revenue.
- Establish the brand as a credible Australian AI operations provider.
- Build a repeatable platform with multi-client support.
- Develop vertical-specific agent packs.
- Build proprietary workflow libraries, governance templates, reporting systems, and deployment automation.
- Hire or contract technical delivery capacity.

---

## 5. Non-Goals

The product must not become unfocused.

### 5.1 Not in Scope Initially

- Fully autonomous financial actions.
- Fully autonomous customer-facing communications without approval.
- Self-serve public SaaS onboarding.
- Consumer AI products.
- General-purpose “AI everything” consulting.
- Custom AI model training for every SMB.
- Deep enterprise procurement and government sales in the first 90 days.
- IRAP, ISO 27001, or SOC 2 certification before revenue validation.
- Highly regulated medical/clinical decisioning.
- Legal advice, accounting advice, or regulated professional judgement generated autonomously.

### 5.2 Explicit Product Boundary

The product automates and assists operational workflows. It does **not** replace professional judgement where regulated expertise is required.

---

## 6. Customer Segmentation

### 6.1 Primary ICP

Australian SMBs and lower mid-market businesses with:

- 10–100 staff.
- AUD $2M–$30M annual revenue.
- Founder, owner, or GM still involved in day-to-day operations.
- High admin burden.
- Clear lead, inbox, quote, reporting, or document workflow bottlenecks.
- Basic digital stack already in place.
- Willingness to pay for operational outcomes.

### 6.2 First Geographic Wedge

Start in **Perth / Western Australia**, then expand nationally.

Reasons:

- Local network advantage.
- WA business community is relationship-driven.
- Mining services, construction, trades, professional services, and industrial businesses have real admin/documentation pain.
- Local Australian-owned positioning is stronger than competing with every AI consultancy nationally from day one.

### 6.3 Priority Verticals

| Priority | Vertical | Pain | First Product |
|---:|---|---|---|
| 1 | Trades / construction / maintenance | Missed leads, slow quoting, admin load | Lead Intake + Quote Prep |
| 2 | Mining services / industrial suppliers | Documentation, compliance, reporting, quotes | SOP + Reporting + Quote Prep |
| 3 | Accounting / bookkeeping | Client chasing, inbox triage, repetitive documents | Inbox Ops + Client Chasing |
| 4 | Legal admin / boutique firms | Document-heavy workflows, intake, admin | Matter Intake + Document Summary |
| 5 | Ecommerce | Support, product content, order workflows | Support + Product Content Agent |
| 6 | Property management | Maintenance requests, inbox volume, vendor coordination | Maintenance Request Agent |

---

## 7. Personas

### 7.1 Owner / Managing Director

**Profile:** Owns or runs the business. Time-poor. Handles too much personally. Wants fewer missed opportunities and less admin drag.

**Goals:**

- Save time.
- Improve response speed.
- Reduce admin dependency.
- Stop missing leads.
- Get cleaner reporting.
- Adopt AI safely without becoming technical.

**Objections:**

- “Will this expose my data?”
- “Will it make mistakes?”
- “Will my staff use it?”
- “What happens if it sends something wrong?”
- “Why not just use ChatGPT?”

### 7.2 Operations Manager

**Profile:** Owns process execution. Feels the pain of messy workflows.

**Goals:**

- Reduce repetitive admin.
- Standardise processes.
- Improve handovers.
- Keep staff accountable.
- Reduce manual chasing.

**Objections:**

- “Will this create more work?”
- “Will it break our current process?”
- “Will staff ignore it?”

### 7.3 Admin / Office Team

**Profile:** Handles inboxes, customer enquiries, quotes, scheduling, and follow-up.

**Goals:**

- Get help with repetitive work.
- Avoid being blamed for AI errors.
- Keep final control over customer communications.

**Objections:**

- “Is this replacing me?”
- “Will I have to check everything anyway?”

### 7.4 IT / External MSP

**Profile:** Responsible for systems and access. May be internal or outsourced.

**Goals:**

- Ensure secure access.
- Avoid credential leaks.
- Maintain least privilege.
- Keep integrations supportable.

**Objections:**

- “What access does this need?”
- “Where is data stored?”
- “What logs exist?”
- “How do we revoke access?”

---

## 8. Core Product Architecture

### 8.1 Product Layers

The commercial product consists of nine layers:

1. **Client Systems Layer** — Gmail, Outlook, forms, CRM, Xero, Sheets, SharePoint, Google Drive, job systems, and other client tools.
2. **Integration Layer** — OAuth, webhooks, polling, normalisation, API connectors, and data minimisation.
3. **Workflow Engine Layer** — deterministic state machines that define each workflow step, state, retry path, and approval gate.
4. **Narrow Task Agent Layer** — LangGraph-scoped task agents for classification, extraction, summarisation, drafting, validation, and reporting. No open-ended autonomy in v1.
5. **LLM Layer** — Claude/GPT or other approved models through Bedrock Sydney, Azure Australia East, or other approved regional infrastructure where available and suitable.
6. **Guardrails Layer** — NeMo Guardrails for input rails, output rails, topical rails, dialog constraints, retrieval validation, and policy checks.
7. **Human Approval Queue** — the core product surface where humans approve, edit, reject, or escalate AI-proposed actions.
8. **Action Layer** — approved actions such as reply, CRM update, quote packet generation, notification, task creation, and report delivery.
9. **Audit and Reporting Layer** — immutable logs, approval history, workflow metrics, cost tracking, incidents, and monthly client reports.

### 8.2 Technical Reference Architecture

```text
Client Systems
  - Gmail / Outlook
  - Forms
  - CRM
  - Xero / MYOB
  - Google Sheets / Excel
  - SharePoint / Google Drive
  - Job systems

        ↓

Integration Layer
  - OAuth
  - Webhooks
  - Polling
  - Normalisation
  - Data minimisation
  - Scope control

        ↓

Workflow Engine
  - Deterministic state machine
  - Explicit workflow states
  - Retry paths
  - Escalation paths
  - Approval gates

        ↓

Narrow Task Agents
  - LangGraph
  - Scoped task nodes
  - No open-ended autonomy
  - Extraction / classification / drafting / validation

        ↓

Guarded LLM Layer
  - Claude / GPT / approved models
  - Bedrock Sydney or Azure Australia East where available and suitable
  - NeMo Guardrails around model calls
  - Input rails before inference
  - Output rails after inference
  - Topical/dialog/policy rails around the workflow

        ↓

Human Approval Queue
  - The central product surface
  - Approve / edit / reject / escalate
  - Diff view
  - Source context
  - Risk label

        ↓

Action Layer
  - Send reply
  - Create CRM note
  - Generate quote packet
  - Notify staff
  - Create task
  - Produce report

        ↓

Audit Layer + Monthly Client Report
  - Action logs
  - Approval history
  - Costs
  - Incidents
  - Time saved
  - Optimisation recommendations
```

---

## 9. Offer Architecture

### 9.1 Offer 1 — AI Operations Audit

**Purpose:** Paid diagnostic and trust-building product.

**Price:** AUD $2,500–$7,500.

**Duration:** 1–2 weeks.

**Inputs:**

- Owner interview.
- Systems inventory.
- Workflow walkthrough.
- Sample documents/emails/forms.
- Current process metrics if available.

**Deliverables:**

- Workflow map.
- AI opportunity matrix.
- Data sensitivity map.
- Risk register.
- First-agent recommendation.
- ROI estimate.
- 90-day implementation roadmap.
- Proposal for First Agent Pilot.

**Acceptance criteria:**

- Client clearly understands top 3 automation opportunities.
- Client has a ranked implementation roadmap.
- Client receives a fixed-scope pilot proposal.

### 9.2 Offer 2 — First Agent Pilot

**Purpose:** Controlled proof-of-value.

**Price:** AUD $10,000–$30,000 setup.

**Duration:** 2–4 weeks.

**Pilot constraints:**

- One primary workflow.
- Shadow mode first.
- Human approval required for outbound messages.
- Narrow integration scope.
- Limited data exposure.
- Weekly review.
- Clear success metrics.

**Deliverables:**

- Configured agent workflow.
- Human approval queue.
- Logs and activity report.
- Staff handover guide.
- Pilot performance report.
- Managed subscription proposal.

### 9.3 Offer 3 — Managed AI Operations Subscription

**Purpose:** Recurring infrastructure, monitoring, support, and continuous optimisation.

| Tier | Monthly Price | Scope |
|---|---:|---|
| Foundation | AUD $5,000–$8,500 | 1–2 workflows, monitoring, monthly optimisation |
| Operator | AUD $10,000–$18,500 | Multiple workflows, integrations, monthly strategy, reporting |
| Embedded | AUD $20,000–$35,000+ | Fractional AI leadership, custom infra, deeper governance, priority support |

**Subscription includes:**

- Agent monitoring.
- Workflow optimisation.
- Monthly reporting.
- Policy updates.
- Prompt/workflow tuning.
- Integration maintenance.
- Cost tracking.
- Incident review.
- New workflow roadmap.

---

## 10. Product Modules

### 10.1 Client Discovery Module

**Objective:** Standardise discovery and turn sales calls into structured implementation data.

**Features:**

- Client profile form.
- Systems inventory.
- Workflow intake questionnaire.
- Pain scoring.
- Data sensitivity questionnaire.
- Integration readiness checklist.
- ROI estimator.
- Risk profile generator.

**User stories:**

- As an operator, I want to capture a client’s systems and workflows so I can identify the safest first agent.
- As a client, I want a structured discovery process so I understand where AI can help and where it should not be used.

**MVP requirements:**

- Form-based intake.
- Admin-only dashboard.
- Exportable audit report.
- Manual editing before client delivery.

---

### 10.2 Workflow Library

**Objective:** Create reusable templates for common SMB workflows.

**Initial workflow templates:**

1. Lead Intake Agent.
2. Quote Prep Agent.
3. Inbox Ops Agent.
4. SOP / Knowledge Agent.
5. Reporting Agent.
6. Client Chasing Agent.
7. Maintenance Request Agent.
8. Product Content Agent.

**Each workflow template must include:**

- Trigger.
- Required integrations.
- Data inputs.
- Tools available to the agent.
- Prompt/config template.
- Guardrails.
- Human approval points.
- Success metrics.
- Known risks.
- Escalation paths.

---

### 10.3 Agent Deployment Manager

**Objective:** Deploy, configure, pause, update, and monitor agent workflows per client.

**Features:**

- Client workspace creation.
- Workflow deployment.
- Environment configuration.
- Tool permission settings.
- Integration credentials status.
- Model routing settings.
- Guardrail policy assignment.
- Rollback controls.
- Pause/resume workflow.

**MVP requirements:**

- Internal operator-only workflow config.
- Manual deployment scripts acceptable.
- Status page for each workflow.
- Basic rollback to previous config.

---

### 10.4 Human Approval Queue

**Objective:** Prevent uncontrolled AI actions and create trust.

**Approval item types:**

- Draft customer reply.
- Quote draft.
- CRM update.
- Calendar action.
- Follow-up message.
- Document summary.
- Report output.
- Escalation recommendation.

**Approval states:**

- Pending.
- Approved.
- Edited and approved.
- Rejected.
- Escalated.
- Auto-approved under policy.

**MVP requirements:**

- Operator/admin queue.
- Client approver view.
- Before/after diff for edited AI output.
- Audit trail for each decision.

---

### 10.5 Governance and Policy Module

**Objective:** Convert AI safety and responsible AI principles into practical operating controls.

**Features:**

- AI use policy template.
- Approved systems list.
- Data classification.
- Model/provider register.
- Human approval matrix.
- Agent access register.
- Risk register.
- Incident log.
- Monthly governance review.

**Data classification levels:**

| Level | Description | Handling |
|---:|---|---|
| 0 | Public | Can be used in demos and low-risk workflows |
| 1 | Internal | Approved internal workflows only |
| 2 | Confidential | Approval-gated, restricted access, logged |
| 3 | Sensitive personal/commercial | Strict approval, minimisation, redaction where possible |
| 4 | Regulated/high-risk | Do not process until controls, contract, and legal review are complete |

---

### 10.6 Integration Gateway

**Objective:** Connect agents to business systems safely and consistently.

**Initial integrations:**

- Gmail.
- Microsoft 365 Outlook.
- Google Calendar.
- Microsoft Calendar.
- Google Drive.
- SharePoint / OneDrive.
- Xero.
- HubSpot.
- Shopify.
- Web forms.
- Slack / Teams notifications.
- CSV/spreadsheet ingestion.

**Later integrations:**

- MYOB.
- ServiceM8.
- simPRO.
- Monday.com.
- Asana.
- Notion.
- Salesforce.
- Airtable.
- Job management systems used by Australian trades and mining services.

**Integration principles:**

- Least privilege.
- Read-only first where possible.
- Write access requires explicit approval.
- Every tool call logged.
- Credentials isolated from model context.
- Revocation available per client.

---

### 10.7 Observability and Reporting Module

**Objective:** Make the AI system measurable and accountable.

**Metrics tracked:**

- Workflow runs.
- Tasks completed.
- Drafts created.
- Approvals requested.
- Approval rate.
- Rejection rate.
- Average response time.
- Time saved estimate.
- Cost per workflow.
- Errors and retries.
- Escalations.
- Sensitive data events.
- Customer/staff satisfaction.

**Reports:**

- Weekly pilot report.
- Monthly managed AI ops report.
- ROI summary.
- Risk and incident summary.
- Workflow improvement recommendations.

---

## 11. Initial Agent Products

### 11.1 Lead Intake Agent

**Target customers:** Trades, construction, maintenance, service businesses, agencies.

**Problem:** Inbound leads are missed, answered slowly, or handled inconsistently.

**Inputs:**

- Website form submissions.
- Emails.
- Contact page enquiries.
- CRM leads.
- Optional call transcripts.

**Actions:**

- Extract customer name, contact, suburb, job type, urgency, budget, description.
- Classify lead quality.
- Flag missing information.
- Draft reply.
- Create CRM/job entry.
- Notify assigned staff.
- Prepare follow-up reminders.

**Human approval:**

- Required for customer replies in MVP.
- Optional auto-approval later for templated low-risk responses.

**Success metrics:**

- Lead response time reduced by 50%+.
- Fewer missed enquiries.
- More consistent lead qualification.
- Owner/admin saves 3–10 hours per week.

---

### 11.2 Quote Prep Agent

**Target customers:** Trades, concrete, construction, mining services, maintenance companies.

**Problem:** Quotes take too long and depend heavily on owner/admin knowledge.

**Inputs:**

- Site notes.
- Photos.
- Emails.
- Scope templates.
- Rate cards.
- Past quote examples.
- Job requirements.

**Actions:**

- Summarise job scope.
- Identify missing information.
- Draft quote sections.
- Add inclusions/exclusions.
- Suggest follow-up questions.
- Prepare internal quote packet.

**Human approval:**

- Required before sending any quote.
- Required before price finalisation unless pricing model is explicitly configured.

**Success metrics:**

- Quote prep time reduced by 30–60%.
- Faster quote turnaround.
- Fewer missing scope details.
- Better quote consistency.

---

### 11.3 Inbox Ops Agent

**Target customers:** Owner-led SMBs and admin-heavy teams.

**Problem:** Critical tasks sit in inboxes and owners lose time sorting low-value email.

**Inputs:**

- Email inbox.
- Calendar.
- Contact list.
- CRM if available.

**Actions:**

- Triage emails.
- Label urgency.
- Draft replies.
- Extract tasks.
- Create daily action digest.
- Escalate critical items.
- Detect overdue replies.

**Human approval:**

- Required for outbound replies in MVP.

**Success metrics:**

- Owner inbox time reduced by 5+ hours/week.
- Faster response to priority emails.
- Fewer missed tasks.

---

### 11.4 SOP / Knowledge Agent

**Target customers:** Growing SMBs with scattered internal knowledge.

**Problem:** Staff ask repeated questions and business knowledge is trapped in documents or people’s heads.

**Inputs:**

- SOPs.
- Manuals.
- Google Drive / SharePoint folders.
- PDFs.
- Internal notes.
- Policy docs.

**Actions:**

- Answer staff questions from approved sources.
- Cite source documents internally.
- Flag missing or outdated SOPs.
- Draft new SOPs from repeated tasks.
- Suggest document clean-up.

**Human approval:**

- Required before publishing new SOPs.

**Success metrics:**

- Reduced repeated internal questions.
- Faster onboarding.
- Better process consistency.

---

### 11.5 Reporting Agent

**Target customers:** SMBs using accounting, CRM, job systems, or spreadsheets.

**Problem:** Owners lack clean weekly visibility and manual reporting takes too long.

**Inputs:**

- Xero/MYOB exports.
- CRM pipeline.
- Job system.
- Spreadsheets.
- Support tickets.

**Actions:**

- Generate weekly owner briefing.
- Summarise sales pipeline.
- Summarise overdue invoices.
- Flag operational bottlenecks.
- Create action list.

**Human approval:**

- Not required for internal reports, but report should be labelled AI-assisted and reviewed during pilot.

**Success metrics:**

- Weekly reporting time reduced.
- Owner visibility improved.
- Faster decision-making.

---

## 12. User Experience Requirements

### 12.1 Client Dashboard

The client dashboard should be simple and confidence-building.

**Main screens:**

1. Overview.
2. Approvals.
3. Workflows.
4. Reports.
5. Activity Log.
6. Settings.
7. Governance.

**Dashboard principles:**

- No technical jargon.
- Show business outcomes first.
- Make approvals fast.
- Make logs readable.
- Make risk visible without overwhelming the client.

### 12.2 Operator Dashboard

The internal operator dashboard is more powerful.

**Main screens:**

1. Clients.
2. Workflows.
3. Deployments.
4. Integrations.
5. Approvals.
6. Logs.
7. Incidents.
8. Reports.
9. Costs.
10. Templates.
11. Governance.

### 12.3 Approval UX

Each approval item must show:

- Request type.
- Client/workflow.
- AI-generated output.
- Source context.
- Risk level.
- Suggested action.
- Approve / edit / reject / escalate.
- Audit metadata.

### 12.4 Reporting UX

Monthly report must include:

- Summary.
- Key metrics.
- Work completed.
- Time saved estimate.
- Risks/issues.
- Optimisations made.
- Next recommended workflows.

---

## 13. Roles and Permissions

### 13.1 Roles

| Role | Description |
|---|---|
| Platform Owner | Full internal admin access |
| Operator | Manages client workflows and support |
| Technical Engineer | Deploys integrations and runtime changes |
| Client Owner | Client-side business owner/decision-maker |
| Client Approver | Can approve/reject AI actions |
| Client Viewer | Can view reports/logs only |
| External IT/MSP | Can assist with integrations and access setup |

### 13.2 Permission Principles

- Least privilege by default.
- Client users cannot access other clients.
- Operator actions are logged.
- Approval authority is explicit.
- Write actions require policy-level permission.
- Sensitive workflow changes require platform-owner approval.

---

## 14. Data Model — Conceptual

### 14.1 Core Entities

```text
Organisation
  id
  name
  ABN
  industry
  size
  revenue_band
  risk_profile
  subscription_tier

User
  id
  organisation_id
  name
  email
  role
  permissions
  mfa_status

Workflow
  id
  organisation_id
  type
  status
  configuration
  risk_level
  assigned_model_policy
  approval_policy

AgentRun
  id
  workflow_id
  trigger_type
  input_summary
  output_summary
  status
  cost
  started_at
  completed_at

ApprovalItem
  id
  agent_run_id
  type
  proposed_action
  content
  risk_level
  status
  approver_id
  decision_reason

Integration
  id
  organisation_id
  provider
  scopes
  status
  last_sync
  credential_reference

Policy
  id
  organisation_id
  policy_type
  rules
  version
  active

AuditLog
  id
  organisation_id
  actor_type
  actor_id
  action
  target
  metadata
  timestamp

Incident
  id
  organisation_id
  workflow_id
  severity
  description
  status
  resolution

Report
  id
  organisation_id
  period
  metrics
  narrative_summary
  recommendations
```

---

## 15. Security Requirements

### 15.1 Baseline Security

- MFA for internal operator accounts.
- MFA recommended for client approvers.
- Role-based access control.
- Separate client workspaces.
- Encrypted secrets storage.
- No secrets in prompts.
- No credentials visible to LLM context.
- Logging of all tool calls.
- Audit trail for approvals and edits.
- Ability to pause any workflow immediately.
- Ability to revoke integrations.
- Backup and recovery process.

### 15.2 Network and Tool Controls

- Default-deny network posture where possible.
- Explicit allowlists per workflow.
- Tool permissions per agent.
- Read-only first for integrations.
- Write access granted only when required.
- High-risk tool calls require human approval.

### 15.3 Data Handling

- Data minimisation.
- Sensitive data classification.
- Redaction where practical.
- Client-specific data retention settings.
- No cross-client data leakage.
- No use of client data for training unless explicitly agreed in writing.

### 15.4 Incident Response

Each client must have:

- Incident severity scale.
- Escalation contacts.
- Pause workflow process.
- Data exposure review procedure.
- Root-cause analysis template.
- Client notification process.

---

## 16. AI Governance Requirements

### 16.1 Governance Principles

The platform must operationalise responsible AI through practical controls, not abstract policy.

Controls include:

- Human approval matrix.
- Model/provider register.
- Approved use-case list.
- Prohibited use-case list.
- Risk tiering.
- Logging.
- Review cadence.
- Incident management.
- Staff guidance.

### 16.2 Risk Tiers

| Tier | Workflow Type | Control Level |
|---:|---|---|
| 1 | Internal summaries, low-risk admin | Logging + review |
| 2 | Drafting internal/customer messages | Human approval |
| 3 | CRM/job/accounting updates | Approval or strict policy controls |
| 4 | Financial/legal/HR-sensitive workflows | Enhanced review, restricted scope |
| 5 | Regulated/high-impact decisions | Out of scope initially |

### 16.3 Prohibited MVP Uses

- Medical diagnosis.
- Legal advice.
- Employment termination decisions.
- Credit decisions.
- Fully autonomous financial transfers.
- Fully autonomous customer commitments.
- Sensitive personal data processing without explicit controls.

---

## 17. Model Routing Requirements

### 17.1 Model Policy

Each workflow must have a model policy defining:

- Approved models.
- Data classes allowed.
- Provider restrictions.
- Cost ceiling.
- Latency requirement.
- Local/cloud preference.
- Fallback model.

### 17.2 Routing Logic

Basic routing:

| Task Type | Preferred Model Class |
|---|---|
| Classification | Fast/low-cost model |
| Summarisation | Mid-tier model |
| Drafting customer messages | Strong language model |
| Complex reasoning | Strong reasoning model |
| Sensitive document workflow | Approved private/local option where required |
| High-volume extraction | Cheap structured extraction model |

### 17.3 Cost Controls

- Per-client monthly budget.
- Per-workflow budget.
- Alert at 70%, 90%, and 100% of budget.
- Cost per agent run logged.
- High-cost workflows reviewed monthly.

---

## 18. MVP Scope

### 18.1 MVP Definition

The MVP is not a full SaaS platform. The MVP is an internal operator-led platform capable of delivering paid pilots safely and repeatedly.

### 18.2 MVP Must Include

- Client intake form.
- Workflow template library for first 3 workflows.
- Deterministic workflow engine.
- LangGraph-based narrow task-agent execution.
- Integration with email/forms for one pilot use case.
- NeMo Guardrails configuration for input, output, topical, and policy checks.
- Human approval queue as the primary client-facing product surface.
- Activity logs.
- Monthly report template.
- Governance checklist.
- Operator dashboard.
- Client-facing approval/report view.

### 18.3 MVP May Be Manual Behind the Scenes

Acceptable manual components:

- Proposal generation.
- Audit report editing.
- Workflow config review.
- Monthly report commentary.
- Some integration setup.
- Custom workflow tuning.

### 18.4 MVP Should Avoid

- Public self-serve onboarding.
- Complex billing automation.
- Full multi-tenant self-service configuration.
- Too many integrations.
- Unrestricted autonomous actions.

---

## 19. Phase Plan

### Phase 0 — Strategic Setup

**Duration:** 1–2 weeks.

**Deliverables:**

- Brand decision.
- Domain.
- Website outline.
- Offer pages.
- Discovery script.
- Audit report template.
- Governance checklist.
- Demo workflow plan.

### Phase 1 — Demo and Sales Infrastructure

**Duration:** 2–4 weeks.

**Deliverables:**

- Demo Lead Intake Agent.
- Demo Inbox Ops Agent.
- Demo Quote Prep Agent.
- Landing page.
- Security/trust page.
- Pricing page.
- Discovery deck.
- Outreach scripts.
- 30 LinkedIn posts queued.

### Phase 2 — Paid Audit Delivery

**Duration:** 4–8 weeks.

**Deliverables:**

- 3 paid audits.
- 3 workflow maps.
- 3 opportunity matrices.
- 3 pilot proposals.
- Refined ICP.

### Phase 3 — First Pilot Deployment

**Duration:** 8–12 weeks.

**Deliverables:**

- First live pilot.
- Human approval queue.
- Activity logs.
- Weekly report.
- Pilot outcome report.
- Conversion proposal.

### Phase 4 — Managed Subscription Platform

**Duration:** Months 3–6.

**Deliverables:**

- Client dashboard v1.
- Operator dashboard v1.
- Workflow library v1.
- Governance module v1.
- Monthly reporting automation.
- Multi-client support.

### Phase 5 — Productisation

**Duration:** Months 6–12.

**Deliverables:**

- Vertical workflow packs.
- Repeatable deployment automation.
- Rich analytics.
- Cost management.
- Integration marketplace.
- Formal partner program.
- Certification/training product.

---

## 20. Go-To-Market Requirements

### 20.1 Sales Motion

Initial motion is founder-led outbound.

**Target list:** 100 Australian SMB owners/operators.

**Primary channel:** LinkedIn DM, email, referrals, direct calls.

**Offer:** 15-minute AI workflow audit call.

**Primary CTA:**

> Book a 15-minute AI workflow audit.

### 20.2 Outreach Script

```text
Hi [Name] — I’m working with Australian SMBs to install controlled AI operators for admin-heavy workflows like lead handling, quote prep, inbox triage and reporting.

Not a chatbot. More like a governed internal assistant with approval gates, logs and data boundaries.

Worth 15 minutes to see if there’s 10+ hours/week we can remove from your operations?
```

### 20.3 Website Requirements

Pages:

- Home.
- Services.
- Framework.
- Security / Trust.
- Use Cases.
- Pricing.
- About.
- Insights.
- Contact / Book Audit.

Homepage sections:

1. Hero.
2. Problem.
3. What we install.
4. Use cases.
5. Framework.
6. Governance and trust.
7. Pricing starting points.
8. CTA.

### 20.4 SEO/GEO Pages

Create pages for:

- AI agents for Australian SMBs.
- AI lead handling for trades.
- AI quote automation Australia.
- Fractional AI operator.
- Secure AI agents Australia.
- AI operations for accountants.
- AI operations for mining services.
- AI governance for small business.
- AI inbox automation.
- AI admin automation Perth.

### 20.5 Content Pillars

- AI agents need permissions, not vibes.
- Most SMBs do not need a chatbot; they need admin removed.
- The owner inbox is the bottleneck.
- Quote turnaround is revenue.
- Shadow AI is already inside your business.
- AI governance does not need to be enterprise theatre.
- Start with one boring workflow.
- AI adoption fails when nobody owns operations.
- Data boundaries are a sales advantage.
- The best first AI project saves time this week.

---

## 21. Pricing Requirements

### 21.1 Pricing Philosophy

Price against business value and replacement cost, not hours or software usage.

The comparison is:

- Additional admin hire.
- Operations manager.
- AI consultant.
- Missed revenue.
- Slow response time.
- Owner time.

### 21.2 Pricing Table

| Product | Price | Notes |
|---|---:|---|
| AI Operations Audit | AUD $2,500–$7,500 | Paid diagnostic |
| First Agent Pilot | AUD $10,000–$30,000 | One workflow, 2–4 weeks |
| Foundation Subscription | AUD $5,000–$8,500/mo | 1–2 workflows |
| Operator Subscription | AUD $10,000–$18,500/mo | Multi-workflow |
| Embedded Subscription | AUD $20,000–$35,000+/mo | Fractional AI leadership + infra |
| Additional Workflow | AUD $3,000–$15,000/mo | Depends on complexity/volume |

### 21.3 Discount Policy

- No discounting recurring subscription.
- Can credit audit fee toward pilot if signed within 14 days.
- Can offer reduced first pilot only in exchange for formal case study and testimonial.

---

## 22. Success Metrics

### 22.1 Business Metrics

- Number of discovery calls.
- Audit conversion rate.
- Pilot conversion rate.
- Pilot-to-retainer conversion rate.
- MRR.
- Gross margin.
- Churn.
- Expansion revenue.
- Average contract value.

### 22.2 Product Metrics

- Workflow runs per client.
- Approval rate.
- Rejection rate.
- Escalation rate.
- Error rate.
- Average latency.
- Cost per workflow.
- Time saved estimate.
- Customer satisfaction.

### 22.3 Operational Metrics

- Time to deploy first workflow.
- Support tickets per client.
- Incidents per month.
- Manual operator hours per workflow.
- Template reuse rate.
- Integration failure rate.

### 22.4 Target Metrics by Month 6

| Metric | Target |
|---|---:|
| Paid audits sold | 6–10 |
| Pilots delivered | 3–5 |
| Managed retainers | 2–4 |
| MRR | AUD $20k–$50k |
| Average gross margin | 60%+ initially, 75%+ after templates mature |
| Time to deploy standard workflow | Under 10 business days |

---

## 23. Acceptance Criteria

### 23.1 Pilot Acceptance Criteria

A pilot is successful when:

- Workflow operates on real or realistic client data.
- Human approval queue works reliably.
- Logs capture actions and decisions.
- Client can see measurable operational value.
- At least one metric improves materially.
- Risks are documented.
- Client receives a managed subscription proposal.

### 23.2 MVP Platform Acceptance Criteria

MVP platform is acceptable when:

- Operator can onboard a client.
- Operator can deploy at least one workflow template.
- Workflow can trigger from a real input source.
- AI output can be routed to approval.
- Approver can approve/edit/reject.
- Actions are logged.
- Monthly report can be generated.
- Workflow can be paused.
- Integration credentials can be revoked.

---

## 24. Risk Register

| Risk | Likelihood | Impact | Mitigation |
|---|---:|---:|---|
| NemoClaw changes rapidly | High | Medium | Treat as reference stack; abstract runtime layer |
| SMBs resist high pricing | Medium | High | Sell audit first; prove ROI; target higher-value verticals |
| Too much custom work | High | High | Start with 3 workflows and reject edge cases |
| AI output errors | High | Medium | Human approval, logs, escalation, strict workflow scope |
| Data exposure | Medium | High | Least privilege, redaction, client policy, no training use |
| Integration instability | Medium | Medium | Start with simple integrations, monitoring, retries |
| Founder bandwidth | High | High | Narrow ICP, productised templates, contractor bench |
| Weak trust assets | Medium | High | Build security page, governance docs, ABN, insurance, case studies |
| Staff resistance | Medium | Medium | Position as admin assist, not replacement; train approvers |
| Regulatory uncertainty | Medium | Medium | Build flexible governance aligned to current Australian guidance |

---

## 25. Legal, Commercial, and Contract Requirements

### 25.1 Required Commercial Documents

- Master Services Agreement.
- Statement of Work template.
- Data Processing Addendum or data handling schedule.
- AI limitations disclosure.
- Acceptable use policy.
- Client approval responsibility clause.
- Security schedule.
- Support terms.
- Cancellation and offboarding process.

### 25.2 Contract Must Cover

- Human approval responsibility.
- No guarantee of perfect AI output.
- Client remains responsible for professional judgement.
- Scope of integrations.
- Data handling and retention.
- Incident notification.
- Liability limits.
- IP ownership of workflow configs.
- Use of anonymised learnings/case studies only with permission.

---

## 26. Build Requirements — Technical Backlog

### 26.1 Foundation Backlog

- Repo setup.
- Auth and RBAC.
- Client workspace model.
- Workflow model.
- Integration credential vault.
- Audit logging.
- Approval queue.
- Basic operator UI.
- Basic client UI.
- Email/form trigger.
- Report generator.

### 26.2 Agent Backlog

- Lead Intake workflow.
- Quote Prep workflow.
- Inbox Ops workflow.
- SOP retrieval workflow.
- Reporting workflow.
- Guardrails config templates.
- Model routing policies.
- Evaluation datasets.
- Error/retry handling.

### 26.3 Governance Backlog

- AI use policy generator.
- Data classification tool.
- Approval matrix builder.
- Risk register.
- Incident log.
- Monthly governance report.

### 26.4 Integration Backlog

- Gmail.
- Outlook.
- Google Calendar.
- Microsoft Calendar.
- Google Drive.
- SharePoint.
- Xero.
- HubSpot.
- Shopify.
- Generic webhook.
- CSV import.

---

## 27. Agent Skill Library

### 27.1 Purpose

The platform should include a controlled internal **Agent Skill Library**. These skills are not autonomous agents. They are reusable, scoped analysis and preparation routines that operators can run against client information during discovery, onboarding, workflow design, reporting, and optimisation.

The skill library turns raw client information into structured implementation assets:

- Workflow maps.
- Risk profiles.
- AI opportunity matrices.
- Data sensitivity classifications.
- Integration plans.
- Approval policies.
- Monthly improvement recommendations.
- Client-facing audit reports.

### 27.2 Skill Design Principles

Each skill must be:

1. **Narrow** — one clear job only.
2. **Repeatable** — same input shape, same output structure.
3. **Auditable** — log inputs, outputs, assumptions, and confidence.
4. **Human-reviewed** — no client-facing recommendation is final without operator review.
5. **Template-driven** — outputs should populate reports, configs, or proposals.
6. **Client-isolated** — no cross-client memory or shared sensitive context.
7. **Evidence-aware** — distinguish observed facts from assumptions and recommendations.

### 27.3 Initial Agent Skills

| Skill | Purpose | Input | Output |
|---|---|---|---|
| Client Intake Analyst | Converts onboarding answers into a structured client profile | Onboarding form, call notes | Client profile, business context, systems list |
| Workflow Discovery Analyst | Identifies repetitive workflows worth automating | Interview notes, screenshots, docs | Workflow map, bottlenecks, automation candidates |
| Data Sensitivity Classifier | Rates client data and workflow risk | Sample emails/docs/fields | Data classes, handling rules, red flags |
| Integration Planner | Determines required system connections | Systems inventory | Integration plan, required scopes, setup checklist |
| AI Opportunity Scorer | Ranks potential workflows by ROI and difficulty | Workflow list, pain scores | Opportunity matrix, priority order |
| Approval Policy Designer | Defines where humans must approve actions | Workflow map, risk tier | Approval gates, user roles, escalation paths |
| Guardrail Spec Writer | Produces workflow-specific guardrail rules | Workflow requirements | Input/output/topical/policy guardrail spec |
| Pilot Proposal Writer | Creates first-agent pilot proposal | Audit outputs | Scope, timeline, pricing, success metrics |
| Monthly Impact Analyst | Turns logs into client-facing performance insight | Workflow metrics, approvals, incidents | Monthly report narrative and recommendations |
| Expansion Opportunity Analyst | Finds next workflow to automate | Usage logs, client feedback | Expansion roadmap and upsell recommendation |

### 27.4 Client Intake Analyst Skill

**Purpose:** Transform raw client onboarding information into a structured business and implementation profile.

**Inputs:**

- Onboarding form.
- Discovery call transcript.
- Business website.
- Systems inventory.
- Sample workflow notes.

**Outputs:**

- Business profile.
- Key operational pain points.
- Main systems used.
- High-value workflow candidates.
- Risk flags.
- Missing information.
- Recommended next interview questions.

**Output schema:**

```json
{
  "client_summary": "",
  "industry": "",
  "business_model": "",
  "team_structure": "",
  "systems": [],
  "pain_points": [],
  "workflow_candidates": [],
  "data_risks": [],
  "missing_information": [],
  "recommended_next_questions": []
}
```

### 27.5 Workflow Discovery Analyst Skill

**Purpose:** Identify workflows suitable for v1 automation.

**Evaluation criteria:**

- Frequency.
- Manual effort.
- Error rate.
- Revenue impact.
- Data sensitivity.
- Integration complexity.
- Approval complexity.
- Repeatability.

**Output schema:**

```json
{
  "workflow_name": "",
  "current_process": "",
  "trigger": "",
  "inputs": [],
  "manual_steps": [],
  "pain_level": 1,
  "automation_fit": 1,
  "risk_level": "low|medium|high",
  "recommended_mode": "shadow|approval|assisted_auto",
  "success_metrics": []
}
```

### 27.6 Data Sensitivity Classifier Skill

**Purpose:** Classify workflow data before any automation is proposed.

**Classification levels:**

| Level | Label | Handling |
|---:|---|---|
| 0 | Public | Low-risk use |
| 1 | Internal | Standard workflow controls |
| 2 | Confidential | Approval-gated, logged |
| 3 | Sensitive | Restricted processing, redaction where possible |
| 4 | High-risk/regulated | Do not automate in v1 without enhanced review |

### 27.7 AI Opportunity Scorer Skill

**Purpose:** Rank workflow candidates and prevent the team from building the wrong first automation.

**Scoring model:**

```text
Opportunity Score =
  Revenue Impact × 0.30
+ Time Saved × 0.25
+ Repeatability × 0.20
+ Implementation Ease × 0.15
+ Risk Suitability × 0.10
```

Each score must include an evidence note and confidence level.

### 27.8 Monthly Impact Analyst Skill

**Purpose:** Convert audit logs and workflow metrics into a client-facing monthly report.

**Inputs:**

- Workflow run count.
- Approvals.
- Rejections.
- Time-to-action.
- Cost.
- Escalations.
- Incidents.
- Manual operator notes.

**Outputs:**

- Executive summary.
- Business impact.
- Operational metrics.
- Risk and quality notes.
- Recommended next workflow.
- Retainer justification narrative.

### 27.9 Skill Execution Rules

No skill may:

- Execute client-system actions.
- Send emails.
- Modify CRM records.
- Publish reports without operator review.
- Infer sensitive facts without evidence.
- Mix client data across accounts.
- Override workflow approval policy.

Skills are advisory and preparatory. Workflow execution remains deterministic and approval-gated.

## 28. Recommended Tech Stack

### 27.1 Application Layer

- Next.js / React frontend.
- Node.js or Python API layer.
- PostgreSQL database.
- Redis/queue for workflow jobs.
- Object storage for documents/log exports.
- Docker-based runtime.
- Vercel/Fly.io/AWS/Azure depending on client requirements.

### 27.2 Agent and Workflow Layer

- Deterministic workflow state machine as v1 backbone.
- LangGraph for scoped task graphs.
- NeMo Guardrails for input/output/topical/dialog/policy rails.
- MCP-compatible tool connectors only where useful.
- Human-in-the-loop approval engine.
- NemoClaw/OpenShell reserved for internal R&D, advanced sandboxing, or later premium deployments.

### 27.3 Observability

- Structured logs.
- Sentry or equivalent.
- OpenTelemetry where feasible.
- Per-client workflow metrics.
- Cost tracking.

### 27.4 Security

- Managed secrets store.
- MFA.
- RBAC.
- Audit logs.
- Client workspace isolation.
- Encrypted backups.

---

## 28. Launch Assets Required

### 28.1 Sales Assets

- One-page capability statement.
- 8–12 slide discovery deck.
- Audit report sample.
- Pilot proposal template.
- Pricing sheet.
- Security one-pager.
- Case study template.

### 28.2 Website Assets

- Homepage copy.
- Services page.
- Framework page.
- Trust/security page.
- Use-case pages.
- Founder bio.
- Contact/booking page.

### 28.3 Demo Assets

- Demo inbox.
- Demo lead forms.
- Demo quote notes/photos.
- Demo SOP folder.
- Demo weekly report.
- Demo approval queue.

---

## 29. First 30-Day Execution Checklist

### Week 1

- Decide brand name.
- Register domain.
- Draft positioning.
- Create website wireframe.
- Set up repo.
- Install/test NemoClaw and NeMo Agent Toolkit.
- Define 3 demo workflows.

### Week 2

- Build demo Lead Intake Agent.
- Build audit report template.
- Build governance checklist.
- Draft MSA/SOW outline.
- Build first landing page.

### Week 3

- Build approval queue prototype.
- Build operator dashboard prototype.
- Build outreach list of 100 SMBs.
- Prepare discovery deck.
- Queue 30 LinkedIn posts.

### Week 4

- Launch site.
- Start outbound.
- Book discovery calls.
- Run demo calls.
- Sell first paid audit.
- Improve demo from objections.

---

## 30. Brand Naming Options

### 30.1 Recommended Commercial Names

1. Sovereign AI Ops.
2. Australian AI Operations Institute.
3. AI Operations Australia.
4. Applied AI Operators.
5. Proficiency AI.
6. Operator AI Australia.
7. Sentinel AI Ops.
8. TrustLayer AI.
9. Grounded AI Operations.
10. Applied Agent Systems.

### 30.2 Recommended Framework Names

1. Sovereign AI Operations Framework.
2. APEX AI Operating System.
3. Controlled Agent Deployment Framework.
4. Practical AI Operations Method.
5. Governed Agent Framework.

Best choice for current strategy:

> **Sovereign AI Operations Framework**

It communicates Australian relevance, safety, control, and operational maturity without sounding too academic.

---

## 31. Competitive Positioning

### 31.1 Against Generic AI Consultants

They sell strategy. This product installs operational workflows.

### 31.2 Against Automation Agencies

They connect tools. This product includes governance, agent controls, AI policy, approvals, and monitoring.

### 31.3 Against Chatbot Vendors

They handle website conversations. This product handles internal operations.

### 31.4 Against Big 4

They are expensive and slow. This product is faster, narrower, and built for SMB execution.

### 31.5 Against DIY ChatGPT

DIY has no controls, logs, approval matrix, integration discipline, or workflow ownership.

---

## 32. Product Principles

1. **Start narrow.** One workflow must work before adding five.
2. **Human approval first.** Autonomy is earned, not assumed.
3. **Logs are product.** Trust requires visibility.
4. **Governance must be practical.** No theatre.
5. **Business value first.** Do not sell architecture to non-technical buyers.
6. **Templates become the moat.** Every delivery must create reusable IP.
7. **Default to boring reliability.** Fancy autonomy loses to stable workflows.
8. **Avoid custom traps.** Bespoke work must be priced high.
9. **Measure everything.** If it cannot show value, it will churn.
10. **Do not hide AI limitations.** Clear boundaries increase trust.

---

## 33. Final MVP Recommendation

Build the first version as an **operator-led managed platform**, not public SaaS.

The first commercially viable product is:

> **AI Lead Handler + Quote Prep Agent for Australian service businesses, delivered through a paid audit, controlled pilot, and managed monthly subscription.**

This is the fastest path to revenue because:

- The pain is obvious.
- ROI is easy to explain.
- Data risk is manageable.
- Workflow is repeatable.
- Owner can approve outputs.
- Every client can expand into inbox, reporting, SOPs, and admin automation.

---

## 34. Definition of Done for v1

v1 is complete when:

- Website is live.
- Audit product is sellable.
- Discovery deck is complete.
- Demo Lead Intake Agent works.
- Demo Quote Prep Agent works.
- Approval queue works.
- Activity logs are captured.
- Monthly report template exists.
- First 100 prospects are contacted.
- At least one paid audit is sold.
- At least one pilot proposal is issued.

The product becomes real only when an Australian SMB pays for a workflow that saves measurable time or captures measurable revenue. Everything before that is preparation.

