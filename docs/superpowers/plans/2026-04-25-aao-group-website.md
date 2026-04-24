# AAO Group Marketing Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a deployable v1 marketing website for Australian AI Operations Group (AAO Group) at `aaogroup.au` — 9 top-level pages + 5 use-case detail pages, pure-monochrome editorial aesthetic, Lighthouse ≥ 90/95/95/95.

**Architecture:** Next.js 15 App Router, static export to Vercel, Tailwind v4 with locked monochrome design tokens, MDX for Insights, server actions for the enquiry form, Calendly inline embed for booking. UI work is generated via the `frontend-design` skill against the spec; the plan owns scaffolding, gates, smoke tests, and integration. Pages are split into four agent slices (Foundation → Conversion / Trust / Narrative in parallel) but executed here as sequential tasks for the executor; an inline orchestrator may dispatch the parallel slices via subagent-driven-development.

**Tech Stack:** Next.js 15, TypeScript (strict), Tailwind v4, shadcn/ui (sparingly), MDX, Resend (stubbed), Playwright (smoke tests only), pnpm, Vercel.

**Spec:** `docs/superpowers/specs/2026-04-25-aao-group-website-design.md` — every UI task references a spec section. Read the spec before starting.

**TDD note:** Marketing-site UI is reviewed visually, not unit-tested. This plan applies TDD to non-visual code (server actions, MDX rendering, link integrity) and uses Playwright **smoke tests only** (route renders + headline text visible) for pages. Visual quality is gated by `frontend-design`'s self-review and a final manual pass.

---

## Task 1: Initialise repo and Next.js scaffold

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `.gitignore`, `.nvmrc`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- Create: `.git/` (via `git init`)

- [ ] **Step 1: Init git and create `.gitignore`**

```bash
cd "C:/Users/tmayo/.claude/projects/Australian AI Operations Group"
git init
git branch -m main
```

`.gitignore`:
```
node_modules
.next
out
.env*.local
.vercel
*.log
.DS_Store
playwright-report
test-results
```

- [ ] **Step 2: Scaffold Next.js**

```bash
pnpm dlx create-next-app@latest web --ts --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-pnpm --no-turbopack --skip-install
cd web
pnpm install
```

Expected: `web/` directory with App Router scaffold.

- [ ] **Step 3: Add `.nvmrc`**

`web/.nvmrc`:
```
20
```

- [ ] **Step 4: Verify scaffold runs**

```bash
cd web && pnpm dev
```
Expected: dev server boots on `localhost:3000` and serves the default Next.js page. Stop the server.

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "chore: scaffold next.js app router project"
```

---

## Task 2: Install dependencies

**Files:**
- Modify: `web/package.json`

- [ ] **Step 1: Install runtime deps**

```bash
cd web
pnpm add clsx tailwind-merge lucide-react @next/mdx @mdx-js/loader @mdx-js/react gray-matter rehype-slug rehype-autolink-headings remark-gfm
```

- [ ] **Step 2: Install dev deps**

```bash
pnpm add -D @types/mdx @playwright/test
```

- [ ] **Step 3: Initialise Playwright (smoke only)**

```bash
pnpm dlx playwright install chromium
```

- [ ] **Step 4: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: add runtime and dev dependencies"
```

---

## Task 3: Lock monochrome design tokens

**Files:**
- Create: `web/app/tokens.css`
- Modify: `web/app/globals.css`

Spec reference: `2026-04-25-aao-group-website-design.md` §2.2 (colour system) and §2.4 (layout).

- [ ] **Step 1: Write `tokens.css`**

`web/app/tokens.css`:
```css
@theme {
  /* Ink scale */
  --color-ink: #0A0E14;
  --color-ink-2: #1B1F26;
  --color-ink-3: #2B313A;

  /* Paper scale */
  --color-paper: #F6F4EE;
  --color-paper-2: #EDEAE0;
  --color-paper-3: #E2DED2;

  /* Semantic */
  --color-rule: rgb(10 14 20 / 0.10);
  --color-muted: #5C6470;
  --color-signal: #B8704A; /* Reserved: status only — never decorative */

  /* Type families set in layout via next/font */
  --font-sans: var(--font-inter);
  --font-serif: var(--font-source-serif);
  --font-mono: var(--font-jetbrains);

  /* Spacing rhythm */
  --section-pad-y: 7.5rem; /* 120px desktop */
  --section-pad-y-mobile: 4rem; /* 64px mobile */
  --container-max: 1400px;
  --measure: 65ch;
}
```

- [ ] **Step 2: Replace `globals.css`**

`web/app/globals.css`:
```css
@import "tailwindcss";
@import "./tokens.css";

@layer base {
  html { font-family: var(--font-sans); color: var(--color-ink); background: var(--color-paper); -webkit-font-smoothing: antialiased; }
  body { font-size: 17px; line-height: 1.6; }
  ::selection { background: var(--color-ink); color: var(--color-paper); }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  }
}
```

- [ ] **Step 3: Smoke check**

```bash
pnpm dev
```
Open `localhost:3000`. Expected: page renders with warm off-white background (`#F6F4EE`), ink text, no console errors. Stop server.

- [ ] **Step 4: Commit**

```bash
git add app/tokens.css app/globals.css
git commit -m "feat(design): lock monochrome tokens and base styles"
```

---

## Task 4: Wire fonts via `next/font`

**Files:**
- Modify: `web/app/layout.tsx`

- [ ] **Step 1: Replace `layout.tsx`**

`web/app/layout.tsx`:
```tsx
import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: { default: "AAO Group — Secure AI operations for Australian businesses", template: "%s · AAO Group" },
  description: "We install controlled AI operators inside Australian businesses — with approval gates, logs, and data boundaries.",
  metadataBase: new URL("https://aaogroup.au"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Verify fonts load**

```bash
pnpm dev
```
Open `localhost:3000`, inspect computed font-family on `<body>` — Expected: includes Inter. Stop server.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat(design): wire inter, source serif, jetbrains mono via next/font"
```

---

## Task 5: Build SiteHeader and SiteFooter

**Files:**
- Create: `web/components/site-header.tsx`
- Create: `web/components/site-footer.tsx`
- Create: `web/lib/cn.ts`
- Create: `web/lib/nav.ts`
- Modify: `web/app/layout.tsx`

Spec reference: §3.3 (global components) and §2.4 (layout).

- [ ] **Step 1: Add `cn` helper**

`web/lib/cn.ts`:
```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
```

- [ ] **Step 2: Define nav data**

`web/lib/nav.ts`:
```ts
export const PRIMARY_NAV = [
  { href: "/services", label: "Services" },
  { href: "/framework", label: "Framework" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/trust", label: "Trust" },
  { href: "/pricing", label: "Pricing" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
] as const;

export const FOOTER_LEGAL = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
] as const;
```

- [ ] **Step 3: Generate SiteHeader and SiteFooter via frontend-design**

Invoke the `frontend-design:frontend-design` skill with this brief (paste exactly into the skill prompt):

> Build `components/site-header.tsx` and `components/site-footer.tsx` for the AAO Group marketing site.
>
> **Design constraints (non-negotiable):**
> - Pure monochrome — see spec §2.2. No colour accents.
> - Editorial, restrained, CEO-level. References: Linear, Stripe, McKinsey Quarterly, Pivotal Labs.
> - No icons in the header except a minimal hamburger on mobile (Lucide `Menu`/`X`).
> - Header: sticky, `paper` background with bottom hairline (`rule`), wordmark left ("AAO Group" — set in display sans, tight tracking, all caps optional but lowercase preferred), nav right, primary CTA "Book audit" → `/contact` as outlined button.
> - Footer: `ink` background, `paper` text. Three columns: company (wordmark + one-sentence positioning), nav (mirror header), legal (privacy/terms + ABN placeholder + © 2026).
> - Mobile: nav collapses to a slide-down sheet (no overlays from third-party libs; built with Radix `Dialog` from shadcn or pure state).
> - Use `PRIMARY_NAV` from `lib/nav.ts` and `FOOTER_LEGAL`. Use `cn` from `lib/cn.ts`.
>
> Output: production-grade TSX, no inline comments, no placeholder text. Active link state: subtle underline.

After the skill completes, save the two component files to the paths above.

- [ ] **Step 4: Wire header/footer into layout**

Modify `web/app/layout.tsx` body:
```tsx
<body>
  <SiteHeader />
  <main>{children}</main>
  <SiteFooter />
</body>
```
Add imports at top:
```tsx
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
```

- [ ] **Step 5: Smoke check**

```bash
pnpm dev
```
Open `localhost:3000`. Expected: header sticky on scroll, all nav links present, footer renders three columns at desktop, collapses cleanly at 375px. No console errors. Stop server.

- [ ] **Step 6: Commit**

```bash
git add components/site-header.tsx components/site-footer.tsx lib/cn.ts lib/nav.ts app/layout.tsx
git commit -m "feat(layout): site header and footer"
```

---

## Task 6: Build shared section primitives

**Files:**
- Create: `web/components/section.tsx`
- Create: `web/components/section-heading.tsx`
- Create: `web/components/cta-band.tsx`
- Create: `web/components/button.tsx`
- Create: `web/components/prose.tsx`

Spec reference: §2.4, §2.3, §5.

- [ ] **Step 1: Generate primitives via frontend-design**

Invoke `frontend-design:frontend-design`:

> Build five shared layout primitives for the AAO Group marketing site. All pure monochrome (spec §2.2). Strict.
>
> **`components/section.tsx`** — `<Section>` wrapper. Props: `tone?: "paper" | "ink"` (default paper), `as?: keyof JSX.IntrinsicElements` (default section), `className?`. Applies `--section-pad-y` vertical padding (responsive), centres content in a `--container-max` max-width with responsive horizontal padding (8% min margin via `clamp`), inverts colours when `tone="ink"`.
>
> **`components/section-heading.tsx`** — `<SectionHeading>`. Props: `eyebrow?: string` (small uppercase mono label above), `title: string` (display-size sans, tight tracking), `lede?: string` (one-sentence intro, muted), `align?: "left" | "center"` (default left).
>
> **`components/cta-band.tsx`** — `<CTABand>` — full-width band, default `tone="ink"`. Props: `headline: string`, `body?: string`, `primaryHref?: string`, `primaryLabel?: string` (default "Book a 15-minute audit" → `/contact`), `secondaryHref?`, `secondaryLabel?`. Centred. Generous padding.
>
> **`components/button.tsx`** — `<Button>`. Variants: `primary` (solid ink fill, paper text), `inverse` (solid paper fill, ink text — for use on ink backgrounds), `outline` (1px ink outline, transparent), `ghost` (text + underline-on-hover). Sizes: `md`, `lg`. Polymorphic via `as` prop (default button; supports anchor). Must not introduce any colour beyond ink/paper.
>
> **`components/prose.tsx`** — `<Prose>` MDX wrapper. Editorial typography: serif headings? No — keep sans for hierarchy, but body in serif (Source Serif 4) for long-form. Max-width `--measure` (65ch). Pullquote, footnote, blockquote styles. Used by Insights and legal pages.
>
> No comments. No placeholders. Production code.

Save all five files.

- [ ] **Step 2: Smoke check by mounting one in `app/page.tsx`**

Temporarily replace `app/page.tsx` body with:
```tsx
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { CTABand } from "@/components/cta-band";

export default function Home() {
  return (
    <>
      <Section><SectionHeading eyebrow="Test" title="Primitives render" lede="If you can read this in serif-free, monochrome calm — we're good." /></Section>
      <CTABand headline="Smoke test CTA" />
    </>
  );
}
```

```bash
pnpm dev
```
Expected: clean monochrome render at 1280px, 768px, 375px. No layout shift. Stop server.

- [ ] **Step 3: Commit**

```bash
git add components/section.tsx components/section-heading.tsx components/cta-band.tsx components/button.tsx components/prose.tsx app/page.tsx
git commit -m "feat(components): section, heading, cta band, button, prose primitives"
```

---

## Task 7: Build Home page

**Files:**
- Modify: `web/app/page.tsx`
- Create: `web/components/home/hero.tsx`
- Create: `web/components/home/problem-band.tsx`
- Create: `web/components/home/offer-cards.tsx`
- Create: `web/components/home/use-cases-strip.tsx`
- Create: `web/components/home/framework-preview.tsx`
- Create: `web/components/home/governance-band.tsx`
- Create: `web/components/home/pricing-anchor.tsx`

Spec reference: §4.1.

- [ ] **Step 1: Generate Home via frontend-design**

Invoke `frontend-design:frontend-design`:

> Build the AAO Group home page. Read `docs/superpowers/specs/2026-04-25-aao-group-website-design.md` §4.1 for section list and §1, §2 for brand and design constraints — the constraints are non-negotiable.
>
> **Pages structure:** Each numbered section becomes its own component under `components/home/`. The page (`app/page.tsx`) imports and composes them in order.
>
> **Sections:**
> 1. Hero — type-led, no image. Headline: "Secure AI operations for Australian businesses." Sub: "We install controlled AI operators inside your business — with approval gates, logs, and data boundaries." Primary CTA "Book a 15-minute audit" → `/contact`. Secondary "See the framework" → `/framework`.
> 2. Problem — three-column statement of operational pain. No icons. Plain prose with brief headlines:
>    - "Leads go cold." — owner doesn't see the website enquiry until Tuesday.
>    - "Quotes wait on someone." — admin chases scope details for two days; the customer goes elsewhere.
>    - "The owner is the bottleneck." — every escalation lands in one inbox at 9pm.
> 3. What we install — three offer cards: Audit ($2,500–$7,500, 1–2 weeks), Pilot ($10,000–$30,000, 2–4 weeks), Subscription (from $5,000/mo). Each card → /services anchor.
> 4. Use cases strip — five vertical cards (Trades, Mining services, Accounting, Legal admin, Property). Each card: vertical, one-line pain, link to detail page.
> 5. Framework preview — single paragraph + a five-layer architecture diagram rendered in pure CSS (stacked horizontal bands labelled: Discovery / Governance / Agent runtime / Integration / Operator). Link to `/framework`.
> 6. Governance band — `tone="ink"`. Three pillars (Approval gates / Logs / Data boundaries). Each with a one-line value prop and a number ("Every tool call logged", "Approval required before any outbound message", "Read-only by default").
> 7. Pricing anchor — three-tier preview using `PricingTable` if it exists or a compact local variant. Link to `/pricing`.
> 8. CTABand — defaults.
>
> Use the primitives from Task 6. Do not introduce colour. Do not add icons except where absolutely needed for navigation. Copy must avoid AI-marketing cliché — see spec §1 anti-patterns.

Save all components and the updated `app/page.tsx`.

- [ ] **Step 2: Smoke check**

```bash
pnpm dev
```
Visit `/`. Expected: all 8 sections render in order, mobile (375px) stacks cleanly, no horizontal scroll, no console errors. Stop server.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx components/home
git commit -m "feat(home): build home page with hero, problem, offers, use cases, framework, governance, pricing"
```

---

## Task 8: Build Services page

**Files:**
- Create: `web/app/services/page.tsx`
- Create: `web/components/services/offer-section.tsx`
- Create: `web/components/services/comparison-table.tsx`

Spec reference: §4.2 and PRD §9.

- [ ] **Step 1: Generate Services via frontend-design**

Invoke `frontend-design:frontend-design`:

> Build `app/services/page.tsx` for AAO Group. Spec §4.2 + brand constraints (§1, §2).
>
> **Structure:**
> - Page hero (small): eyebrow "Services", title "Three ways to work with us.", lede "Audit, pilot, subscription. Each one stands alone. Most clients go through all three."
> - Offer 1: AI Operations Audit — purpose, what's included (5 bullets per PRD §9.1), deliverables, price band $2,500–$7,500, duration 1–2 weeks, ideal for. CTA: "Book the audit".
> - Offer 2: First Agent Pilot — purpose, constraints (PRD §9.2 pilot constraints), deliverables, price $10,000–$30,000, duration 2–4 weeks. CTA: "Talk about a pilot".
> - Offer 3: Managed AI Operations Subscription — three tiers (Foundation $5,000–$8,500/mo, Operator $10,000–$18,500/mo, Embedded $20,000–$35,000+/mo) per PRD §9.3 with scope per tier. Subscription includes block (PRD §9.3 list). CTA: "See pricing".
> - Comparison table at bottom: rows = features, columns = three offers. Pure ink/paper styled.
> - Final CTABand.
>
> Use primitives. No new colours. Plain, confident copy.

- [ ] **Step 2: Smoke check**

```bash
pnpm dev
```
Visit `/services`. Expected: three offer sections render with prices and bullet lists, comparison table displays at desktop and stacks at mobile. Stop server.

- [ ] **Step 3: Commit**

```bash
git add app/services components/services
git commit -m "feat(services): build services page with three offers and comparison"
```

---

## Task 9: Build Pricing page

**Files:**
- Create: `web/app/pricing/page.tsx`
- Create: `web/components/pricing/pricing-table.tsx`
- Create: `web/components/pricing/pricing-faq.tsx`

Spec reference: §4.7, PRD §21.

- [ ] **Step 1: Generate Pricing via frontend-design**

Invoke `frontend-design:frontend-design`:

> Build `app/pricing/page.tsx` for AAO Group. Spec §4.7 + PRD §21.
>
> **Structure:**
> - Page hero: title "Priced against the cost of doing nothing.", lede "We price against missed revenue, owner time, and admin hire — not seat count or token usage."
> - PricingTable: three columns (Audit / Pilot / Subscription). For Subscription column, show three sub-tiers stacked. Show: price band, duration, what's included (4–6 bullets), CTA per column.
> - "How we price" explainer (one paragraph, restating PRD §21.1 in plain English).
> - Discount note: "Audit fee credited toward the pilot if signed within 14 days. Recurring subscriptions are not discounted."
> - PricingFAQ — answer the PRD §7 owner objections in plain English: "Will this expose my data?", "What if it makes a mistake?", "Why not just use ChatGPT?", "How is this different from automation tools?", "Can we cancel?". Use a clean accordion (Radix `Accordion` from shadcn) with no chevron animation theatrics — just rotation.
> - Final CTABand.
>
> Make the PricingTable and PricingFAQ exportable so other pages can reuse compact variants.

- [ ] **Step 2: Smoke check**

```bash
pnpm dev
```
Visit `/pricing`. Expected: three columns at desktop, stacks vertically at mobile, FAQ expand/collapse works, no console errors. Stop server.

- [ ] **Step 3: Commit**

```bash
git add app/pricing components/pricing
git commit -m "feat(pricing): build pricing page with table and faq"
```

---

## Task 10: Build Framework page

**Files:**
- Create: `web/app/framework/page.tsx`
- Create: `web/components/framework/layer-diagram.tsx`
- Create: `web/components/framework/layer-section.tsx`

Spec reference: §4.3, PRD §8.

- [ ] **Step 1: Generate Framework via frontend-design**

Invoke `frontend-design:frontend-design`:

> Build `app/framework/page.tsx` — the methodology page. Spec §4.3 + PRD §8 (five layers). This is the moat. It must read like a serious methodology white paper, not a sales page.
>
> **Structure:**
> - Page hero: eyebrow "Methodology", title "The Sovereign AI Operations Framework.", lede "Five layers that turn AI from a chat window into governed operational infrastructure."
> - LayerDiagram: pure-CSS five-layer stacked diagram at the top, labelled left-to-right or top-to-bottom: Discovery → Governance → Agent runtime → Integration → Operator. Each layer is an ink band on paper (or vice-versa for visual rhythm) with mono labels.
> - Five LayerSection components, one per layer, each with: layer number, layer name, what it does (2 sentences), what the client sees (2 sentences), why it matters (1 sentence). No bullet-point firehose.
> - Closing band: "Why we built it this way." — three short paragraphs on governance, narrowness, and measurable outcomes.
> - Final CTABand.
>
> Editorial tone. Source Serif 4 for body where it earns it (long paragraphs in layer sections). No icons.

- [ ] **Step 2: Smoke check**

```bash
pnpm dev
```
Visit `/framework`. Expected: diagram renders cleanly, all five layers documented, mobile-responsive. Stop server.

- [ ] **Step 3: Commit**

```bash
git add app/framework components/framework
git commit -m "feat(framework): build sovereign ai operations framework page"
```

---

## Task 11: Build Trust & Security page

**Files:**
- Create: `web/app/trust/page.tsx`
- Create: `web/components/trust/data-class-table.tsx`
- Create: `web/components/trust/risk-tier-table.tsx`
- Create: `web/components/trust/posture-card.tsx`

Spec reference: §4.6, PRD §10.5, §15, §16.

- [ ] **Step 1: Generate Trust via frontend-design**

Invoke `frontend-design:frontend-design`:

> Build `app/trust/page.tsx` for AAO Group. Spec §4.6 + PRD §10.5 (data classification), §15 (security), §16 (governance/risk tiers).
>
> **Structure:**
> - Page hero: title "Trust is the product.", lede "Approval gates, logs, and data boundaries — the controls that let you actually use AI in your business."
> - PostureCard row (3): "Approval-gated by default" / "Every action logged" / "Read-only first". One paragraph each.
> - "Approval gates" section — what they are, when they fire, who approves, what the audit trail looks like (describe in prose).
> - "Logs and audit trail" section — what's logged, retention, access.
> - "Data boundaries" section — DataClassTable rendering PRD §10.5 (5 levels: Public / Internal / Confidential / Sensitive / Regulated, with handling per level).
> - "Risk tiers" section — RiskTierTable rendering PRD §16.2 (5 tiers, control level per tier).
> - "Model and provider register" section — one paragraph: we publish the model and provider for every workflow; clients can restrict providers in their policy.
> - "Incident response" section — incident severity scale, escalation path, client notification commitment.
> - "Security questions" footer — placeholder ABN, insurance, security@aaogroup.au.
> - Final CTABand.
>
> Tables use ink-on-paper with hairline rules (`--color-rule`). No coloured status badges; if a status is needed, use mono labels with `signal` bronze for warning rows ONLY in the risk tier table for tier 4–5.

- [ ] **Step 2: Smoke check**

```bash
pnpm dev
```
Visit `/trust`. Expected: all sections render, both tables responsive, signal bronze used only on the highest risk tier rows. Stop server.

- [ ] **Step 3: Commit**

```bash
git add app/trust components/trust
git commit -m "feat(trust): build trust and security page with data class and risk tier tables"
```

---

## Task 12: Build Use Cases (index + 5 detail pages)

**Files:**
- Create: `web/app/use-cases/page.tsx`
- Create: `web/app/use-cases/[slug]/page.tsx`
- Create: `web/lib/use-cases.ts`
- Create: `web/components/use-cases/use-case-card.tsx`
- Create: `web/components/use-cases/screenshot-mock.tsx`
- Create: `web/components/use-cases/metric-pill.tsx`
- Create: `web/components/use-cases/workflow-steps.tsx`

Spec reference: §4.4, §4.5, PRD §6.3 (verticals).

- [ ] **Step 1: Define use case data**

`web/lib/use-cases.ts`:
```ts
export type UseCase = {
  slug: string;
  vertical: string;
  pain: string;
  firstAgent: string;
  outcomes: { label: string; value: string }[];
  workflow: { step: string; detail: string }[];
};

export const USE_CASES: UseCase[] = [
  {
    slug: "trades-construction",
    vertical: "Trades & construction",
    pain: "Inbound leads sit in an inbox. Quotes wait two days for the owner to find a moment.",
    firstAgent: "Lead Intake + Quote Prep",
    outcomes: [
      { label: "Lead response time", value: "↓ 50–80%" },
      { label: "Owner time saved", value: "5–10 hrs/wk" },
      { label: "Quote turnaround", value: "↓ 30–60%" },
    ],
    workflow: [
      { step: "Trigger", detail: "Website form submission, email enquiry, or phone transcript." },
      { step: "Extract", detail: "Customer, suburb, job type, urgency, scope notes." },
      { step: "Draft", detail: "Reply email and CRM/job entry, ready for human approval." },
      { step: "Approve", detail: "Owner or admin approves, edits, or rejects in one tap." },
      { step: "Send", detail: "Approved reply goes out; reminder set for follow-up." },
    ],
  },
  {
    slug: "mining-services",
    vertical: "Mining services & industrial",
    pain: "Documentation is everywhere. Compliance reports and quotes consume admin capacity.",
    firstAgent: "SOP + Reporting + Quote Prep",
    outcomes: [
      { label: "Reporting time", value: "↓ 40–70%" },
      { label: "SOP retrieval", value: "Seconds, not hours" },
      { label: "Quote consistency", value: "Standardised" },
    ],
    workflow: [
      { step: "Ingest", detail: "SOPs, manuals, rate cards, past quotes from SharePoint or Drive." },
      { step: "Answer", detail: "Staff ask questions; agent responds with citations." },
      { step: "Draft", detail: "Reports and quotes drafted from approved templates." },
      { step: "Approve", detail: "Senior staff approve; agent learns from edits." },
      { step: "Log", detail: "Every action logged for compliance review." },
    ],
  },
  {
    slug: "accounting-bookkeeping",
    vertical: "Accounting & bookkeeping",
    pain: "Client chasing eats the day. Inbox triage falls to the most senior person in the firm.",
    firstAgent: "Inbox Ops + Client Chasing",
    outcomes: [
      { label: "Inbox time", value: "↓ 5–10 hrs/wk" },
      { label: "Chase response rate", value: "↑ via consistent cadence" },
      { label: "Partner focus time", value: "Restored" },
    ],
    workflow: [
      { step: "Triage", detail: "Inbox sorted by urgency, type, and client." },
      { step: "Draft", detail: "Replies and chase emails drafted from firm templates." },
      { step: "Approve", detail: "Bookkeeper or partner approves before send." },
      { step: "Track", detail: "Outstanding items tracked and escalated on schedule." },
      { step: "Report", detail: "Weekly digest of what's outstanding and what shipped." },
    ],
  },
  {
    slug: "legal-admin",
    vertical: "Legal admin & boutique firms",
    pain: "Matter intake, document summarisation, and client correspondence consume billable hours.",
    firstAgent: "Matter Intake + Document Summary",
    outcomes: [
      { label: "Intake time", value: "↓ 50%+" },
      { label: "Document review", value: "Drafted summaries with citations" },
      { label: "Lawyer focus", value: "On judgement work" },
    ],
    workflow: [
      { step: "Intake", detail: "New matter submitted via form or email." },
      { step: "Extract", detail: "Parties, dates, jurisdiction, requested action." },
      { step: "Summarise", detail: "Supporting documents summarised with source citations." },
      { step: "Approve", detail: "Lawyer reviews summary and matter brief before opening." },
      { step: "File", detail: "Approved record created in matter management system." },
    ],
  },
  {
    slug: "property-management",
    vertical: "Property management",
    pain: "Maintenance requests pile up. Vendor coordination and tenant updates drain the team.",
    firstAgent: "Maintenance Request Agent",
    outcomes: [
      { label: "Request triage", value: "Same-day" },
      { label: "Vendor coordination", value: "Drafted, scheduled" },
      { label: "Tenant satisfaction", value: "Faster updates" },
    ],
    workflow: [
      { step: "Receive", detail: "Tenant request via email, form, or portal." },
      { step: "Classify", detail: "Urgency, category, vendor required." },
      { step: "Draft", detail: "Vendor brief and tenant acknowledgement drafted." },
      { step: "Approve", detail: "Property manager approves before vendor contact." },
      { step: "Track", detail: "Status updates pushed to tenant on agreed cadence." },
    ],
  },
];
```

- [ ] **Step 2: Generate index page and components via frontend-design**

Invoke `frontend-design:frontend-design`:

> Build `app/use-cases/page.tsx` (index) and `app/use-cases/[slug]/page.tsx` (detail) for AAO Group, plus the supporting components in `components/use-cases/`. Spec §4.4, §4.5. Read from `lib/use-cases.ts`.
>
> **Index page (`/use-cases`):**
> - Page hero: title "Where AAO works.", lede "Five verticals where governed AI operators consistently remove admin and recover revenue."
> - Five UseCaseCard tiles in a responsive grid (3 across desktop, 2 tablet, 1 mobile). Each card: vertical name (display sans), one-line pain (muted), first agent label (mono small caps), link → detail.
> - Final CTABand.
>
> **Detail page (`/use-cases/[slug]`):**
> - generateStaticParams from USE_CASES.
> - Page hero: eyebrow "Use case", title = vertical, lede = pain.
> - "Recommended first agent" section — name + 2-sentence description.
> - WorkflowSteps — render workflow array as a numbered editorial list, each step = number + label + detail.
> - ScreenshotMock — pure-CSS rendered approximation of an approval queue card. Static content reflecting the use case (e.g., "Draft reply to Sam @ 14 Hill Rd — siteworks enquiry"). Bordered, ink/paper, status pill in `signal` bronze for "Awaiting approval".
> - MetricPill row — render outcomes as three pills: label above (mono small), value below (display).
> - "Book an audit for this vertical" CTABand.
>
> No icons except essential. No colour beyond the locked palette. ScreenshotMock must look like a real product, not a wireframe — convincing typography hierarchy, real labels, fake but specific data.

- [ ] **Step 3: Smoke check**

```bash
pnpm dev
```
Visit `/use-cases` and each of the 5 detail routes. Expected: all render, ScreenshotMock looks credible, no console errors. Stop server.

- [ ] **Step 4: Commit**

```bash
git add app/use-cases lib/use-cases.ts components/use-cases
git commit -m "feat(use-cases): build index and 5 vertical detail pages with screenshot mocks"
```

---

## Task 13: Build About page

**Files:**
- Create: `web/app/about/page.tsx`
- Create: `web/components/about/principle-list.tsx`
- Create: `web/public/about/founder-placeholder.svg`

Spec reference: §4.8, PRD §32.

- [ ] **Step 1: Add founder placeholder image**

`web/public/about/founder-placeholder.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" preserveAspectRatio="xMidYMid slice"><rect width="600" height="750" fill="#1B1F26"/><text x="300" y="380" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="14" fill="#5C6470">FOUNDER PHOTO PLACEHOLDER</text></svg>
```

- [ ] **Step 2: Generate About via frontend-design**

Invoke `frontend-design:frontend-design`:

> Build `app/about/page.tsx` for AAO Group. Spec §4.8 + PRD §32 (operating principles).
>
> **Structure:**
> - Page hero: title "We install AI that earns trust.", lede "AAO Group exists because Australian SMBs need controlled AI operations — not strategy decks."
> - Two-column section (50/50 desktop, stacked mobile): left = founder photo from `/about/founder-placeholder.svg` (object-fit cover, full-bleed in column), right = founder narrative (3 short paragraphs in serif body — see spec §2.3).
> - "Why this exists" section — single editorial paragraph in serif, max-width `--measure`, centred.
> - "How we operate" — PrincipleList rendering PRD §32 ten product principles. Each: number, principle title, one-sentence elaboration. Ink/paper, no icons.
> - Final CTABand.
>
> Voice: first-person plural, plain, confident. No CEO-speak. No "passionate about transforming".

- [ ] **Step 3: Smoke check**

```bash
pnpm dev
```
Visit `/about`. Expected: founder placeholder renders at correct aspect, principle list of 10 displays cleanly, mobile stacks. Stop server.

- [ ] **Step 4: Commit**

```bash
git add app/about components/about public/about
git commit -m "feat(about): build about page with founder narrative and principles"
```

---

## Task 14: Build Insights index + seed post (MDX)

**Files:**
- Modify: `web/next.config.ts`
- Create: `web/mdx-components.tsx`
- Create: `web/lib/insights.ts`
- Create: `web/app/insights/page.tsx`
- Create: `web/app/insights/[slug]/page.tsx`
- Create: `web/content/insights/why-most-smb-ai-projects-fail-in-week-three.mdx`

Spec reference: §4.9, PRD §20.5 (content pillars).

- [ ] **Step 1: Configure MDX in `next.config.ts`**

`web/next.config.ts`:
```ts
import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
```

- [ ] **Step 2: Add `mdx-components.tsx`**

`web/mdx-components.tsx`:
```tsx
import type { MDXComponents } from "mdx/types";
import { Prose } from "@/components/prose";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => <Prose>{children}</Prose>,
    ...components,
  };
}
```

- [ ] **Step 3: Add insights loader**

`web/lib/insights.ts`:
```ts
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/insights");

export type InsightFrontmatter = {
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
};

export type Insight = InsightFrontmatter & { slug: string };

export function listInsights(): Insight[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
      const { data } = matter(raw);
      return { slug, ...(data as InsightFrontmatter) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
```

- [ ] **Step 4: Write seed post**

`web/content/insights/why-most-smb-ai-projects-fail-in-week-three.mdx`:
```mdx
---
title: "Why most SMB AI projects fail in week three"
description: "The first two weeks are champagne. Week three is when the system meets the inbox."
date: "2026-04-25"
readingMinutes: 6
---

Most AI projects in Australian SMBs do not fail because the model was wrong. They fail in week three, when the demo meets the actual inbox.

## The pattern

Week one is exciting. The owner sees the demo, signs the contract, briefs the team. Week two is configuration: connecting Gmail, importing the CRM, drafting the first prompts. The system responds well to test cases. Everyone is optimistic.

Then week three arrives. A real customer sends a real email at 6pm on a Friday. The agent drafts a reply. Nobody knows whether to send it. The owner is at dinner. The admin is gone for the weekend. The draft sits.

By Monday, the customer has phoned a competitor.

## The pattern beneath the pattern

The technology worked. The integration worked. What failed was the **operating model** around the technology — who approves, when, on what device, with what authority, against what risk threshold. None of that was specified in week one because the demo did not surface it.

This is why we sell governance before we sell agents. The approval matrix is not paperwork. It is the single thing that determines whether an AI workflow survives contact with a real business week.

## What we do differently

Every AAO pilot starts with a one-page approval matrix:

- Who can approve this action?
- On what device?
- Within what timeframe?
- What happens if nobody approves?

The matrix is signed by the owner before any agent goes live. It is the contract between the business and the system. It is also the document that makes week three survivable.

## The takeaway

If you are evaluating an AI vendor and they cannot show you the approval matrix in the first meeting, you are buying technology without an operating model. Buy the operating model. The technology is the cheap part.
```

- [ ] **Step 5: Generate index and detail pages via frontend-design**

Invoke `frontend-design:frontend-design`:

> Build `app/insights/page.tsx` (index) and `app/insights/[slug]/page.tsx` (detail) for AAO Group. Spec §4.9.
>
> **Index:**
> - Page hero: title "Insights.", lede "Notes on running AI in real businesses."
> - List posts from `listInsights()` (defined in `lib/insights.ts`). Each entry: date (mono small), title (display sans, link to detail), description (body), reading time. Hairline rule between entries.
> - Static `generateStaticParams` not needed for index.
>
> **Detail (`/insights/[slug]`):**
> - generateStaticParams from listInsights.
> - Hero: eyebrow date + reading time, title (display, large), description (lede).
> - MDX content rendered through `<Prose>` (already wrapped via `mdx-components.tsx`).
> - Use `import("@/content/insights/<slug>.mdx")` dynamically — Next.js MDX route convention.
> - Footer: "Back to Insights" link, then the standard CTABand.

- [ ] **Step 6: Smoke check**

```bash
pnpm dev
```
Visit `/insights` and `/insights/why-most-smb-ai-projects-fail-in-week-three`. Expected: index lists the seed post, detail renders MDX with editorial typography, headings have anchor links. Stop server.

- [ ] **Step 7: Commit**

```bash
git add next.config.ts mdx-components.tsx lib/insights.ts app/insights content/insights
git commit -m "feat(insights): mdx pipeline, index, and seed post"
```

---

## Task 15: Build Contact page (Calendly + enquiry form)

**Files:**
- Create: `web/app/contact/page.tsx`
- Create: `web/components/contact/calendly-embed.tsx`
- Create: `web/components/contact/enquiry-form.tsx`
- Create: `web/app/contact/actions.ts`

Spec reference: §4.10.

- [ ] **Step 1: Generate Contact via frontend-design**

Invoke `frontend-design:frontend-design`:

> Build `app/contact/page.tsx` for AAO Group. Spec §4.10.
>
> **Structure:**
> - Page hero: title "Book a 15-minute audit.", lede "We will tell you whether AI can remove time from your operations — and how. If we cannot help, we will say so."
> - Two paths in a 2-column layout (stacked on mobile):
>   - **Left (primary): CalendlyEmbed.** A `<CalendlyEmbed url="https://calendly.com/aaogroup/audit" />` component that lazy-loads the Calendly inline widget script (only when the component mounts). Min height 700px, no chrome.
>   - **Right (secondary): EnquiryForm.** Fields: Name, Company, Email, Phone (optional), "What's the bottleneck?" (textarea, required, 200-char hint). Submit calls a server action. On success: replace form with confirmation block. On error: inline error.
> - Below: "Other ways to reach us" — placeholder ABN, Perth address, security@aaogroup.au.
>
> The server action lives in `app/contact/actions.ts` and must validate input, log the submission to console (real email send is stubbed — leave a `// resend integration: see README` comment is forbidden, instead the function should call `sendEnquiryEmail` from `lib/email.ts` which currently no-ops with a console.log; use that). Return `{ ok: true }` or `{ ok: false, error: string }`.
>
> No client-side form library — pure React form + server action.

- [ ] **Step 2: Add stub email helper**

`web/lib/email.ts`:
```ts
export type EnquiryPayload = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
};

export async function sendEnquiryEmail(payload: EnquiryPayload): Promise<void> {
  if (process.env.RESEND_API_KEY) {
    return;
  }
  console.log("[enquiry-stub]", JSON.stringify(payload));
}
```

- [ ] **Step 3: Write failing test for action validation**

`web/__tests__/contact-action.test.ts`:
```ts
import { test, expect } from "@playwright/test";

test("contact form rejects empty submission", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: /send|submit/i }).click();
  await expect(page.getByText(/required/i).first()).toBeVisible();
});
```

Run: `pnpm dlx playwright test contact-action --reporter=line`
Expected: FAIL (form not built yet — this drives the build).

- [ ] **Step 4: Verify after frontend-design completes that test passes**

After Step 1's component generation lands:
```bash
pnpm dev &
sleep 4
pnpm dlx playwright test contact-action --reporter=line
```
Expected: PASS. Stop dev server.

- [ ] **Step 5: Commit**

```bash
git add app/contact components/contact lib/email.ts __tests__/contact-action.test.ts
git commit -m "feat(contact): contact page with calendly embed and enquiry form"
```

---

## Task 16: Build legal placeholder pages

**Files:**
- Create: `web/app/legal/privacy/page.mdx`
- Create: `web/app/legal/terms/page.mdx`

- [ ] **Step 1: Write privacy placeholder**

`web/app/legal/privacy/page.mdx`:
```mdx
export const metadata = { title: "Privacy" };

# Privacy

This is a placeholder. Final privacy policy will be drafted by counsel before public launch.

AAO Group operates in compliance with the Australian Privacy Principles under the Privacy Act 1988 (Cth). Contact: privacy@aaogroup.au.
```

- [ ] **Step 2: Write terms placeholder**

`web/app/legal/terms/page.mdx`:
```mdx
export const metadata = { title: "Terms" };

# Terms

This is a placeholder. Final terms of service will be drafted by counsel before public launch.

Service is delivered under a Master Services Agreement and Statement of Work. Contact: legal@aaogroup.au.
```

- [ ] **Step 3: Smoke check**

```bash
pnpm dev
```
Visit `/legal/privacy` and `/legal/terms`. Expected: both render in editorial Prose styling. Stop server.

- [ ] **Step 4: Commit**

```bash
git add app/legal
git commit -m "feat(legal): privacy and terms placeholders"
```

---

## Task 17: 404 page and metadata polish

**Files:**
- Create: `web/app/not-found.tsx`
- Modify: `web/app/layout.tsx` (OpenGraph + Twitter)
- Create: `web/app/opengraph-image.tsx`
- Create: `web/app/icon.tsx`

- [ ] **Step 1: Generate 404, OG image, favicon via frontend-design**

Invoke `frontend-design:frontend-design`:

> Build three files for AAO Group:
> 1. `app/not-found.tsx` — 404 page. Centred. Title "Not the page." Body "That route does not exist. Probably." Link back home and back to /use-cases. Pure monochrome.
> 2. `app/opengraph-image.tsx` — OG image using Next.js ImageResponse. Plain ink background, paper text: "AAO Group" wordmark large, "Secure AI operations for Australian businesses" beneath. 1200x630.
> 3. `app/icon.tsx` — favicon using ImageResponse. 32x32. Bold "A" wordmark in paper on ink background.

- [ ] **Step 2: Add OG metadata to layout**

In `app/layout.tsx` `metadata`:
```ts
openGraph: {
  type: "website",
  locale: "en_AU",
  url: "https://aaogroup.au",
  siteName: "AAO Group",
  title: "AAO Group — Secure AI operations for Australian businesses",
  description: "We install controlled AI operators inside Australian businesses — with approval gates, logs, and data boundaries.",
},
twitter: { card: "summary_large_image" },
```

- [ ] **Step 3: Smoke check**

```bash
pnpm build && pnpm start
```
Visit `/totally-fake-route` for 404. Visit `/opengraph-image` to verify OG renders. Stop server.

- [ ] **Step 4: Commit**

```bash
git add app/not-found.tsx app/opengraph-image.tsx app/icon.tsx app/layout.tsx
git commit -m "feat(meta): 404, opengraph image, favicon"
```

---

## Task 18: Playwright smoke suite for all routes

**Files:**
- Create: `web/playwright.config.ts`
- Create: `web/__tests__/routes.smoke.test.ts`

- [ ] **Step 1: Add Playwright config**

`web/playwright.config.ts`:
```ts
import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./__tests__",
  use: { baseURL: "http://localhost:3000" },
  webServer: { command: "pnpm dev", url: "http://localhost:3000", reuseExistingServer: true, timeout: 60_000 },
  reporter: "line",
});
```

- [ ] **Step 2: Write smoke suite**

`web/__tests__/routes.smoke.test.ts`:
```ts
import { test, expect } from "@playwright/test";

const ROUTES: { path: string; needle: RegExp }[] = [
  { path: "/", needle: /Secure AI operations/i },
  { path: "/services", needle: /Three ways to work/i },
  { path: "/framework", needle: /Sovereign AI Operations Framework/i },
  { path: "/use-cases", needle: /Where AAO works/i },
  { path: "/use-cases/trades-construction", needle: /Trades & construction/i },
  { path: "/use-cases/mining-services", needle: /Mining services/i },
  { path: "/use-cases/accounting-bookkeeping", needle: /Accounting & bookkeeping/i },
  { path: "/use-cases/legal-admin", needle: /Legal admin/i },
  { path: "/use-cases/property-management", needle: /Property management/i },
  { path: "/trust", needle: /Trust is the product/i },
  { path: "/pricing", needle: /Priced against/i },
  { path: "/about", needle: /We install AI that earns trust/i },
  { path: "/insights", needle: /Insights/i },
  { path: "/insights/why-most-smb-ai-projects-fail-in-week-three", needle: /week three/i },
  { path: "/contact", needle: /Book a 15-minute audit/i },
  { path: "/legal/privacy", needle: /Privacy/i },
  { path: "/legal/terms", needle: /Terms/i },
];

for (const { path, needle } of ROUTES) {
  test(`route ${path} renders and contains expected headline`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBeLessThan(400);
    await expect(page.getByText(needle).first()).toBeVisible();
  });
}

test("no console errors on home", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  expect(errors).toEqual([]);
});
```

- [ ] **Step 3: Run smoke suite**

```bash
pnpm dlx playwright test --reporter=line
```
Expected: all 18 tests PASS. If any FAIL, the headline/copy in the corresponding page must be updated to match the smoke needle (or vice versa).

- [ ] **Step 4: Commit**

```bash
git add playwright.config.ts __tests__/routes.smoke.test.ts
git commit -m "test: playwright smoke suite covers all routes"
```

---

## Task 19: README and deploy config

**Files:**
- Create: `web/README.md`
- Create: `web/.env.example`
- Create: `web/vercel.json`

- [ ] **Step 1: Write README**

`web/README.md`:
```markdown
# AAO Group — Marketing Site

Production marketing site for Australian AI Operations Group at https://aaogroup.au.

## Stack
Next.js 15 (App Router) · TypeScript · Tailwind v4 · MDX · Playwright (smoke) · Vercel.

## Develop
```
pnpm install
pnpm dev
```
Open http://localhost:3000.

## Build
```
pnpm build
pnpm start
```

## Test
```
pnpm dlx playwright test
```
Smoke suite only — covers route rendering and console-error checks. Visual review is manual.

## Environment

Copy `.env.example` to `.env.local`:
```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/aaogroup/audit
RESEND_API_KEY=
PLAUSIBLE_DOMAIN=aaogroup.au
```
The site runs without these set; absent integrations no-op gracefully.

## Deploy
Vercel project linked to this repo. `main` deploys to production. Preview deploys per PR.

## Content
Insights posts live in `content/insights/*.mdx`. Add a new post: drop an `.mdx` file with frontmatter (title, description, date, readingMinutes). Index regenerates on build.

## Design
Pure monochrome. Tokens locked in `app/tokens.css`. Adding a new colour requires updating the design spec — see `docs/superpowers/specs/2026-04-25-aao-group-website-design.md` §2.2.
```

- [ ] **Step 2: Write `.env.example`**

`web/.env.example`:
```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/aaogroup/audit
RESEND_API_KEY=
PLAUSIBLE_DOMAIN=aaogroup.au
```

- [ ] **Step 3: Write Vercel config**

`web/vercel.json`:
```json
{
  "buildCommand": "pnpm build",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "regions": ["syd1"]
}
```

- [ ] **Step 4: Commit**

```bash
git add README.md .env.example vercel.json
git commit -m "chore: readme, env example, vercel config"
```

---

## Task 20: Lighthouse audit and fix-pass

**Files:** Any pages that fail thresholds.

- [ ] **Step 1: Build and serve production**

```bash
pnpm build && pnpm start &
sleep 4
```

- [ ] **Step 2: Run Lighthouse on home + 3 representative pages**

```bash
pnpm dlx lighthouse http://localhost:3000 --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=./lighthouse-home.json --chrome-flags="--headless"
pnpm dlx lighthouse http://localhost:3000/framework --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=./lighthouse-framework.json --chrome-flags="--headless"
pnpm dlx lighthouse http://localhost:3000/use-cases/trades-construction --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=./lighthouse-usecase.json --chrome-flags="--headless"
pnpm dlx lighthouse http://localhost:3000/contact --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=./lighthouse-contact.json --chrome-flags="--headless"
```

Read each JSON. Expected thresholds:
- Performance ≥ 90
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 95

- [ ] **Step 3: Fix any failures**

For each metric below threshold, identify the audit (e.g., "color-contrast", "image-size-responsive", "uses-text-compression") and fix the underlying issue. Commit each fix individually.

- [ ] **Step 4: Re-run until green**

Repeat Step 2 until all four pages clear all four thresholds.

- [ ] **Step 5: Stop server and commit final tweaks**

```bash
git add -A
git commit -m "perf: lighthouse pass — performance ≥ 90, a11y/bp/seo ≥ 95"
```

---

## Task 21: Final manual visual review and Definition of Done

**Files:** None (review pass).

- [ ] **Step 1: Walk every route at three breakpoints**

```bash
pnpm dev
```
For each of the 17 routes in the smoke suite, visit at 375px, 768px, 1280px, 1920px. Confirm:
- No horizontal scroll
- No content overlap
- No clipped text
- CTA bands legible
- Type rhythm consistent

- [ ] **Step 2: Confirm Definition of Done from spec §8**

Tick each item from spec §8. If any fails, open a follow-up task.

- [ ] **Step 3: Final commit and tag**

```bash
git add -A
git commit --allow-empty -m "release: aao group website v1.0"
git tag v1.0
```

---

## Self-review summary

**Spec coverage check:**
- §1 brand → Tasks 5, 7, 13 (header wordmark, home headline, about voice)
- §2.1 aesthetic anti-direction → enforced in every frontend-design prompt
- §2.2 monochrome → Task 3 tokens locked + repeated in agent prompts
- §2.3 typography → Task 4 fonts + Task 6 Prose
- §2.4 layout → Task 6 Section primitive
- §2.5 motion → Task 3 globals.css `prefers-reduced-motion`
- §2.6 imagery → Tasks 12 (ScreenshotMock), 13 (founder placeholder)
- §3.1 page list → Tasks 7–16 cover all 14 pages
- §3.3 global components → Task 5 header/footer, Task 17 not-found
- §4.1–4.10 page briefs → Tasks 7–15 each reference their spec section
- §5 component inventory → distributed across Tasks 5–15
- §6 tech stack → Tasks 1, 2 install everything listed
- §7 build approach → represented as sequential tasks; subagent dispatch happens at execution time per executing skill
- §8 Definition of Done → Task 21 ticks every item, Task 18 covers smoke, Task 20 covers Lighthouse
- §9 risks → mitigated by tokens-first ordering (Task 3 before any UI), explicit anti-direction in every UI prompt, frontend-design self-review
- §10 out of scope → no tasks for dashboards, runtime, real CMS, etc.
- §11 open items → README documents placeholders (Task 19)

**Placeholder scan:** None. Every task has concrete file paths, concrete commands, and either complete code or an explicit `frontend-design` brief that names every section, copy, and constraint.

**Type/name consistency:** `USE_CASES` defined Task 12 → consumed Task 12 + smoke suite Task 18 references the slugs. `listInsights()` defined Task 14 → consumed in same task and smoke suite. `sendEnquiryEmail` defined Task 15 → consumed in same task. `Section`, `SectionHeading`, `CTABand`, `Button`, `Prose` defined Task 6 → consumed Tasks 7–16. `PRIMARY_NAV`, `FOOTER_LEGAL`, `cn` defined Task 5 → consumed in same task.

No drift detected.
