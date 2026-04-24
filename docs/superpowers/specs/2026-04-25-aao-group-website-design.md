# Design Spec — AAO Group Marketing Website (v1)

**Date:** 2026-04-25
**Owner:** Taylor Mayor
**Status:** Draft for review
**Source PRD:** `australian_smb_ai_ops_prd.md`
**Scope of this spec:** Public marketing website only. Operator dashboard, client dashboard, and agent runtime are deferred to future spec cycles.

---

## 1. Brand

| Field | Value |
|---|---|
| Legal/commercial name | Australian AI Operations Group |
| Short brand | AAO Group |
| Domain | `aaogroup.au` |
| Tagline | *Secure AI operations for Australian businesses.* |
| Sub-tagline | *We install controlled AI operators inside your business — with approval gates, logs, and data boundaries.* |
| Voice | Confident, plain-English, governance-forward, allergic to AI-marketing cliché |
| Audience | Australian SMB owners and operators (10–100 staff, $2M–$30M revenue) |

**Anti-patterns to avoid in copy:**
- "Transform your business with AI"
- "Unleash the power of AI"
- "AI-powered solutions"
- "Revolutionary"
- Any sentence that could appear on any other AI consultancy site

**Voice exemplars:** Stripe docs, Linear changelog, McKinsey Quarterly headlines, *The Economist* business reporting.

---

## 2. Visual identity

### 2.1 Aesthetic direction
Editorial, restrained, monochrome-leaning. Built to feel like the website of a serious advisory firm that happens to ship software — not a generative-AI product launch. Think: Linear / Stripe / Pivotal Labs crossed with the website of a top-tier strategy consultancy.

**Explicit anti-direction:**
- No gradient meshes, no purple-to-pink hero washes, no glowing orbs
- No 3D AI brain illustrations, no robot mascots, no "circuit board" textures
- No green-and-gold flag-waving for the Australian angle
- No stock photography of people in headsets or pointing at holograms
- No emoji in marketing copy

### 2.2 Colour system — pure monochrome

No chromatic accent. The site lives on ink, paper, and the space between them. CTAs are inverse fills (ink-on-paper or paper-on-ink) or outlined — never coloured. This is the hardest aesthetic to execute and the hardest to fake; it's the entire point.

| Token | Hex | Use |
|---|---|---|
| `ink` | `#0A0E14` | Primary text, dark section backgrounds, primary CTA fills on light bg |
| `ink-2` | `#1B1F26` | Subtle elevation on dark sections, hover states |
| `ink-3` | `#2B313A` | Tertiary surfaces on dark, mono-illustration strokes |
| `paper` | `#F6F4EE` | Page background (warm off-white, never pure white), text on dark |
| `paper-2` | `#EDEAE0` | Secondary surfaces, dividers, card fills on light bg |
| `paper-3` | `#E2DED2` | Subtle elevation on light, hover states |
| `rule` | `#0A0E14` at 10% | Hairlines, borders |
| `muted` | `#5C6470` | Secondary text, captions, metadata |
| `signal` | `#B8704A` | **Reserved exclusively for system status** (risk/warning labels in screenshots, error states). Muted bronze. **Never decorative, never marketing.** Single permitted exception to monochrome. |

Dark sections invert: `ink` background, `paper` text. CTA on dark = `paper` fill with `ink` text.

**CTA treatments:**
- Primary (light bg): solid `ink` fill, `paper` text
- Primary (dark bg): solid `paper` fill, `ink` text
- Secondary: 1px `ink` outline, transparent fill, `ink` text
- Tertiary / inline: `ink` text with underline-on-hover

**Discipline rules:**
- No additional colours may be added during build, even "just for one chart"
- Charts and diagrams use ink at varying opacities (10/30/60/100%)
- Status colours in product screenshots use `signal` only; no green ticks, no blue info badges

### 2.3 Typography

| Role | Family | Notes |
|---|---|---|
| Display / headlines | **Söhne Breit** or **Inter Display** (open-source fallback) | Tight tracking, large sizes, no all-caps |
| Body | **Inter** or **Geist Sans** | 17–18px base, 1.6 line-height |
| Editorial / quotes | **Source Serif 4** or **GT Sectra Display** | For pull-quotes and Insights posts only |
| Mono | **JetBrains Mono** or **Geist Mono** | Code, metrics, technical labels |

System uses fluid type scale (clamp-based) — display ranges from ~48px mobile to ~96px desktop.

### 2.4 Layout principles
- 12-column grid, 80px gutters at desktop, generous outer margins (min 8% viewport)
- Sections separated by silence (whitespace), not dividers
- Hard left-alignment by default; centred only for hero and CTA bands
- Components breathe — minimum 120px section padding desktop, 64px mobile
- One idea per section. If a section has two ideas, it becomes two sections.

### 2.5 Motion
- Subtle only: 200–400ms ease-out fades on scroll-in for primary content blocks
- No parallax, no scroll-jacking, no auto-playing video
- Hover states: opacity/colour shifts, no transforms on body content
- Respect `prefers-reduced-motion`

### 2.6 Imagery
- Real product screenshots (operator dashboard, approval queue) rendered as static mock images for v1
- One founder photograph on About page
- Otherwise: zero illustration, zero stock photography

---

## 3. Information architecture

### 3.1 Pages in v1 scope

1. **Home** (`/`)
2. **Services** (`/services`)
3. **Framework** (`/framework`) — the Sovereign AI Operations Framework as moat IP
4. **Use cases** (`/use-cases`) — index page + per-vertical detail pages
   - `/use-cases/trades-construction`
   - `/use-cases/mining-services`
   - `/use-cases/accounting-bookkeeping`
   - `/use-cases/legal-admin`
   - `/use-cases/property-management`
5. **Trust & Security** (`/trust`)
6. **Pricing** (`/pricing`)
7. **About** (`/about`)
8. **Insights** (`/insights`) — index + 1 seed post (`/insights/<slug>`)
9. **Contact / Book Audit** (`/contact`)

Plus: `/legal/privacy`, `/legal/terms` (placeholder content, real copy out of scope).

### 3.2 Out of scope for v1
- 10 SEO/GEO landing pages from PRD §20.4 (Phase 1.5)
- Live embedded agent demos — replaced by static screenshot mocks
- CMS — Insights uses MDX files
- Auth, payments, multi-tenant
- i18n (English-only, en-AU spelling)
- Operator/client dashboards (separate specs)

### 3.3 Global components
Navigation, Footer, CTA band, cookie banner (basic, en-AU compliant placeholder), 404 page.

---

## 4. Page-level briefs

Each page includes: purpose, sections, key copy beats, components used. Detailed copy drafted during build.

### 4.1 Home (`/`)

**Purpose:** Convert qualified visitor → "Book a 15-minute audit" within 30 seconds of skim.

**Sections (top → bottom):**
1. **Hero** — Tagline, sub-tagline, primary CTA "Book a 15-minute audit", secondary "See the framework". No hero image; type-led.
2. **Problem** — Three-column statement of the operational pain (missed leads, owner-trapped inboxes, scattered SOPs). Plain prose, no icons.
3. **What we install** — Three offer cards: Audit / Pilot / Subscription. Each card → Services page.
4. **Use cases strip** — Five vertical cards (logo-style), each → use case detail.
5. **Framework preview** — One-paragraph intro to the Sovereign AI Operations Framework + a five-layer stacked diagram labelled in order: **Integration → Workflow → Guarded LLM → Approval Queue → Audit**. The Approval Queue band is visually emphasised (slightly taller, hairline accent, mono label "the wedge") because it is the product. Link to `/framework`.
6. **Governance and trust band** — Dark section. Three pillars: approval gates, logs, data boundaries. Numbers (e.g., "Every tool call logged"). Link to `/trust`.
7. **Pricing anchor** — Three-tier preview (Audit, Pilot, Subscription) with starting prices. Link to `/pricing`.
8. **CTA band** — Single line + button. Calendly link.

### 4.2 Services (`/services`)
Three offers expanded: Audit, First Agent Pilot, Managed Subscription. Each: purpose, what's included, deliverables, price band, ideal for. Comparison table at bottom. Sticky CTA.

### 4.3 Framework (`/framework`)
The Sovereign AI Operations Framework — five-layer architecture, plain-English explanation per layer, why each layer matters to a non-technical owner. This page is the moat — it should feel like reading a methodology white paper, not a sales page.

**Hardened v1 architecture (use this, not the old draft):**

1. **Integration** — OAuth/webhooks/polling into the systems your business already runs (Gmail, Outlook, forms, CRM, Xero, Sheets). Normalised into a consistent event stream.
2. **Workflow** — A deterministic state machine plus narrow, scoped task agents (LangGraph). No open-ended autonomy. Each workflow has a defined start, stops, and outputs.
3. **Guarded LLM** — The model call sits inside guardrails, not behind them. **Input rails** validate the request before the LLM ever sees it. **Output rails** check the response before it leaves. **Topical, dialog, and policy rails** constrain what the model is allowed to do at every step. Models run via Amazon Bedrock (Sydney region) or Azure (Australia East) where supported, so data stays onshore.
4. **Approval queue** — The wedge. Every customer-facing or system-changing action lands here for human approve / edit / reject. This is the product.
5. **Audit** — Every tool call, every approval decision, every rail trip is logged. Monthly client report rolls it up into business outcomes.

**Sidebar callout (separate, not part of the five layers):** *Premium runtime — NemoClaw / OpenShell.* Reserved for sandboxed autonomous workloads, security-sensitive deployments, and enterprise customers who require it. Not part of the v1 default stack.

### 4.4 Use cases — index (`/use-cases`)
Five vertical cards. Each shows: vertical, primary pain, first product (Lead Intake / Quote Prep / etc.), expected ROI band. Click → detail page.

### 4.5 Use case detail (`/use-cases/<vertical>`)
Single template, populated five times. Sections:
- Vertical-specific pain
- Recommended first agent
- How it works (3–5 step diagram)
- Sample workflow screenshot (static mock image)
- Expected outcomes (metric pills)
- "Book an audit for this vertical" CTA

### 4.6 Trust & Security (`/trust`)
The reason the brand exists. Sections:
- Posture summary (one paragraph)
- Approval gates (what they are, why they matter) — **the product, not a feature**
- Logs and audit trail
- Data boundaries (data classification table from PRD §10.5)
- **Sovereign data residency** — Models run via Amazon Bedrock (ap-southeast-2 / Sydney) or Azure (Australia East) where supported. Customer data stays onshore. Each deployment includes a model-region check and is documented in the client's model/provider register.
- **Guarded LLM model** — Guardrails wrap the LLM, not just sit downstream: input rails validate before the model sees the request; output rails check before any response leaves; topical/dialog/policy rails constrain behaviour throughout. Reference: NVIDIA NeMo Guardrails rail types.
- Risk tier table (PRD §16.2)
- Model and provider register (one-liner — "we publish ours per workflow; clients can restrict providers in their policy")
- Incident response process
- ABN, insurance, contact for security questions (placeholder fields)

### 4.7 Pricing (`/pricing`)
Three offers, three columns. Audit / Pilot / Subscription tiers (Foundation / Operator / Embedded). Price bands per PRD §21.2. FAQ section addressing PRD's listed objections. CTA: "Book the audit" — discount note: "Audit fee credited toward pilot if signed within 14 days."

### 4.8 About (`/about`)
Founder narrative, why this exists, why Australian SMBs specifically, why governance-first. One photograph. Brief operating principles list (PRD §32).

### 4.9 Insights (`/insights`)
Index page listing posts (1 seed post in v1). Post template: editorial layout, serif headlines, generous measure (~720px), pullquotes, footnotes supported. Seed post topic: *"Why most SMB AI projects fail in week three"* — adapted from PRD content pillars (§20.5).

### 4.10 Contact (`/contact`)
Two paths:
- **Book the audit** (primary): Calendly inline embed
- **General enquiry** (secondary): server-action form → email
Includes: ABN placeholder, response-time commitment, Perth address line.

---

## 5. Component inventory

Built once, used everywhere. Each lives in `components/` with a clear interface.

| Component | Used on |
|---|---|
| `SiteHeader` (nav) | All pages |
| `SiteFooter` | All pages |
| `Hero` (variants: home, page) | Home, all top-level pages |
| `SectionHeading` | Everywhere |
| `OfferCard` | Home, Services |
| `UseCaseCard` | Home, Use Cases index |
| `FrameworkDiagram` | Home, Framework |
| `PricingTable` | Pricing, Home (compact variant) |
| `FAQ` | Pricing, Trust |
| `MetricPill` | Use case details, Home |
| `RiskTierTable` | Trust |
| `DataClassTable` | Trust |
| `Quote` (pullquote, editorial) | Insights, About |
| `CTABand` | Bottom of every page |
| `CalendlyEmbed` | Contact |
| `EnquiryForm` | Contact |
| `ScreenshotMock` | Use case details — static styled image of a fake operator dashboard / approval queue |
| `Prose` (MDX wrapper) | Insights posts, legal pages |

---

## 6. Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind v4 with custom design tokens |
| Component primitives | shadcn/ui (radix-based) — used sparingly, not as the design system |
| Icons | Lucide (selectively) |
| Fonts | Inter + Source Serif 4 + JetBrains Mono via `next/font` |
| Content | MDX for Insights and legal pages |
| Forms | Server actions → email via Resend (env var, not wired in v1) |
| Booking | Calendly inline embed (placeholder URL) |
| Analytics | Plausible (placeholder script tag, no key in v1) |
| Hosting | Vercel (static export where possible) |
| Repo | Git, conventional commits |

---

## 7. Build approach — agent swarm

After this spec is approved and `teach-impeccable` has been run to lock design context to the project's `CLAUDE.md`, the implementation plan dispatches **four parallel build agents** using the `frontend-design` skill. Each agent owns a non-overlapping slice; the orchestrator (main thread) integrates and reviews.

| Agent | Owns |
|---|---|
| **A — Foundation** | Repo init, Next.js scaffold, Tailwind config, design tokens, `next/font` setup, layout, `SiteHeader`, `SiteFooter`, global styles, deploy config |
| **B — Conversion pages** | Home, Services, Pricing |
| **C — Trust & methodology** | Framework, Trust & Security, Use cases (index + 5 details) |
| **D — Narrative & contact** | About, Insights (index + 1 seed post), Contact, legal placeholders |

Coordination rules:
- Agent A finishes before B/C/D start — they need the design tokens and shared components
- B/C/D run in parallel and may not edit each other's pages or globals
- Shared components added by B/C/D must be promoted to `components/` with a one-line PR-style note in the agent's report
- Each agent runs `frontend-design` skill internally and produces production-grade code

Main thread responsibilities:
- Run `teach-impeccable` once before dispatch
- Integrate and resolve conflicts between agents
- Run a final visual pass and Lighthouse audit
- Produce the `README.md`

---

## 8. Acceptance criteria — Definition of Done v1

- [ ] All 9 top-level pages + 5 use-case detail pages render
- [ ] Mobile (375px), tablet (768px), desktop (1280px), wide (1920px) all polished
- [ ] Navigation works, all internal links resolve, no broken anchors
- [ ] Calendly embed loads (placeholder URL acceptable)
- [ ] Enquiry form server action wired (sending stubbed)
- [ ] MDX seed post renders with editorial styling
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95
- [ ] No console errors or warnings
- [ ] `prefers-reduced-motion` respected
- [ ] All copy in en-AU spelling, no AI-marketing cliché
- [ ] `README.md` documents env vars, dev command, build command, deploy target
- [ ] Site builds and runs locally with `pnpm dev`
- [ ] One static deployment to Vercel preview URL

---

## 9. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Generic AI-startup aesthetic creeps in during build | `teach-impeccable` design context locked into `CLAUDE.md` before agents start; explicit anti-direction list (§2.1) referenced in every agent prompt |
| Pure-monochrome palette gets quietly broken ("just one accent for this CTA") | §2.2 discipline rules referenced in every agent prompt; main thread rejects any PR introducing a new colour token |
| Site reads as cold/austere without an accent to warm it up | Warm `paper` (`#F6F4EE`) not pure white; serif pullquotes; generous type sizes; founder photo on About; editorial Insights post — warmth comes from typography and material, not colour |
| Copy reads like every other AI consultancy | Voice exemplars and anti-pattern list in §1; main thread reviews all copy before integration |
| Component drift between parallel agents | Agent A delivers the component foundation first; B/C/D consume only — promotions reviewed by main thread |
| Calendly / email / domain not yet provisioned | Placeholders documented in `README.md`; production config is a swap-in operation, not a rebuild |
| User dislikes design after build | Each parallel agent produces a single page first as a "sample slice" for user review before continuing the rest of its scope (gate inside the implementation plan) |

---

## 10. Out of scope (explicit)

- Operator dashboard (separate spec cycle)
- Client dashboard (separate spec cycle)
- Agent runtime / NeMo orchestration (separate spec cycle)
- Real CMS (Sanity/Contentful) — MDX is sufficient for v1
- Live agent demos
- Multi-language
- E-commerce / payment processing
- 10 SEO/GEO landing pages
- Customer login portal
- Real legal copy (placeholders only — to be drafted by counsel)

---

## 11. Open items (not blocking spec approval)

- Final domain registration of `aaogroup.au` — assumed available, fallback `.com.au`
- Real Calendly URL — placeholder until provisioned
- Real ABN, insurance details, registered address — placeholders until provisioned
- Founder photograph for About page — placeholder silhouette until supplied
- Production email domain for enquiry form — placeholder until DNS configured
