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
