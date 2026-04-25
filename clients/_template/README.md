# Per-client workspace template

This folder is the canonical workspace template for a single AAO client engagement, from first discovery call through to post-engagement archive. Every active or past client lives in `clients/<client-slug>/`, instantiated from this template.

## Instantiating a workspace

When a prospect books a discovery call (or sooner, if you already know they are a fit), copy the template:

```bash
cp -r clients/_template clients/<client-slug>
```

On Windows PowerShell:

```powershell
Copy-Item -Recurse clients\_template clients\<client-slug>
```

Then open `00-intake/discovery-call-notes.md` before the call starts and begin filling in the placeholder fields.

## Naming convention

Client slugs are kebab-case versions of the trading name, lowercase, ASCII only, no punctuation:

- `Coastal Concrete Pty Ltd` -> `coastal-concrete`
- `Bright & Early Childcare` -> `bright-and-early-childcare`
- `O'Donnell Plumbing` -> `odonnell-plumbing`

If two clients collide on slug, append the suburb: `coastal-concrete-newcastle`.

Pre-engagement leads (people who replied to outbound but have not booked) live as a single file in `clients/<lead-slug>-prospect.md` with notes only. They get promoted to a full workspace when they book a discovery call.

## Lifecycle stages

Each numbered folder is a stage of the engagement. They are filled in order; you should rarely jump ahead.

| Folder | Stage | Typical duration | Output |
|---|---|---|---|
| `00-intake/` | Discovery + onboarding | Days 0-3 | Discovery notes, completed onboarding form, systems inventory |
| `01-audit/` | Paid Operations Audit | Week 1-2 | Client-ready audit deliverable (Markdown -> PDF) |
| `02-pilot/` | First Agent Pilot | Week 3-6 | Signed proposal + SOW, approval matrix, guardrail spec, weekly engagement log |
| `03-monthly-reports/` | Ongoing subscription | Monthly | One report per month, sent to client by day 7 |
| `04-incidents/` | Reactive | As needed | One file per incident, RCA within 5 business days |
| `05-expansion/` | Quarterly | Each quarter | Roadmap proposing the next workflow |

## Where each file's content comes from

| File | Source / producer |
|---|---|
| `00-intake/discovery-call-notes.md` | Operator types live during the 15-min call |
| `00-intake/onboarding-form.md` | Sent to client; client returns; input to `aao-client-intake-analyst` |
| `00-intake/systems-inventory.md` | Operator + client jointly fill; input to `aao-integration-planner` |
| `01-audit/audit-pipeline-input.json` | Operator assembles from intake artefacts |
| `01-audit/audit-pipeline-output.json` | Raw output of `aao-audit-pipeline` |
| `01-audit/audit-deliverable.md` | Output of `aao-audit-report-renderer`, then operator-reviewed |
| `02-pilot/pilot-proposal.md` | Populated from `sales-assets/04-pilot-proposal-template.md` |
| `02-pilot/pilot-sow.md` | Populated from `legal-scaffolds/02-statement-of-work-template.md` |
| `02-pilot/approval-matrix.md` | Output of `aao-approval-policy-designer` |
| `02-pilot/guardrail-spec.md` | Output of `aao-guardrail-spec-writer` |
| `02-pilot/pilot-engagement-log.md` | Operator updates daily during pilot |
| `03-monthly-reports/_monthly-report-template.md` | Copy per month; populate via `aao-monthly-impact-analyst` |
| `04-incidents/_incident-template.md` | Copy per incident; populate manually |
| `05-expansion/_expansion-roadmap-template.md` | Copy per quarter; populate via `aao-expansion-opportunity-analyst` |

Cross-cutting reference: see `OPERATOR_PLAYBOOK.md` at the project root for the full motion (which file to open when, which skill to invoke at each stage).

## At engagement end

When a client cancels, lapses, or completes a fixed-term engagement:

1. Run the offboarding runbook in `legal-scaffolds/07-cancellation-and-offboarding.md`.
2. Produce a final monthly report in `03-monthly-reports/`.
3. Export all configs, logs, and integration credentials back to the client.
4. Hold a one-hour knowledge transfer call.
5. Move the entire folder to `clients/_archived/<client-slug>/`. Do not delete - retention obligations under the Privacy Act 1988 (Cth) and tax record-keeping rules (5 years) apply.
6. Note the archive date and reason in a one-line `ARCHIVED.md` at the root of the archived folder.

## House rules

- All filenames in kebab-case. Dated files use `YYYY-MM-DD-` or `YYYY-MM-` prefixes.
- Never check raw client data into version control. The `clients/` folder should be in `.gitignore` for any shared repo.
- One workflow per client per pilot. Earn the right to add a second.
- Operator review is mandatory before anything leaves this workspace and reaches the client.
