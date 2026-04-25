# Expansion roadmap - {{client_trading_name}} - {{YYYY-Qn}}

> Quarterly expansion analysis. Output of `aao-expansion-opportunity-analyst`. Copy this file as `YYYY-Qn-roadmap.md`, populate from the skill output, operator-review, then walk through with the client owner.

**Quarter:** {{YYYY-Qn}}
**Prepared by:** {{operator_name}}
**For client owner:** {{client_owner_name}}
**Discussion scheduled for:** {{YYYY-MM-DD}}

---

## 1. Current state

- **Live workflows:** 
  - {{workflow_1}} v{{X.Y}} - approval rate {{N}}%, hours saved/wk {{N}}
  - {{workflow_2}} v{{X.Y}} - approval rate {{N}}%, hours saved/wk {{N}}
- **Stability summary:** {{stable / hardening / fragile}}
- **Open incidents:** {{count}}
- **Open client requests / friction points:** 

## 2. Identified opportunities (ranked)

> Each candidate is scored on the same model used in the original audit (Revenue 0.30, Time 0.25, Repeatability 0.20, Implementation Ease 0.15, Risk Suitability 0.10).

| Rank | Workflow | Hours/wk addressable | Annual $ impact (est) | Implementation difficulty | Risk band | Composite score |
|---|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |

## 3. Recommended next workflow

- **Workflow:** {{name}}
- **Why this one and why now:** 
- **What changes in the client's day-to-day:** 
- **What we have already learned that de-risks this build:** 

## 4. Proposed scope and price

- **Scope (one paragraph):** 
- **Build duration:** {{N}} weeks
- **One-off build fee:** $ (or "absorbed into retainer for Operator/Embedded tiers")
- **Incremental monthly retainer impact:** $ (taking total to $/mo)
- **Tier change recommended:** {{none / Foundation -> Operator / Operator -> Embedded}}

## 5. Timeline

| Milestone | Owner | Date |
|---|---|---|
| Client approves scope | Client | {{YYYY-MM-DD}} |
| Sensitivity + integration scoping | AAO | {{YYYY-MM-DD}} |
| Approval matrix + guardrail spec signed | Joint | {{YYYY-MM-DD}} |
| Shadow mode start | AAO | {{YYYY-MM-DD}} |
| Live with approvals | Joint | {{YYYY-MM-DD}} |
| First monthly report including new workflow | AAO | {{YYYY-MM-DD}} |

## 6. Risks of expansion

> Be honest. Expansion is the single biggest cause of client dissatisfaction in managed services. Name the risk so the client can weigh it.

- **Operational risk (over-stretching the team):** 
- **Data risk (new sensitivity classes brought into scope):** 
- **Commercial risk (tier change vs ROI math):** 
- **Workflow conflict (does new workflow interact with existing):** 

## 7. Decision needed by

- **Date:** {{YYYY-MM-DD}}
- **Decision-maker:** {{name, role}}
- **What happens if no decision:** continue current scope until next quarterly review

---

**Operator note:** Only present an expansion if the existing workflows are stable for 4+ consecutive weeks with approval rate >=80% and no open S1/S2 incidents. If those gates are not met, the recommendation is "no expansion this quarter; harden current workflows".
