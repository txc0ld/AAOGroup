export type AgentSkill = {
  name: string;
  purpose: string;
};

export const AGENT_SKILLS: AgentSkill[] = [
  {
    name: "Client Intake Analyst",
    purpose: "Converts onboarding answers into a structured client profile.",
  },
  {
    name: "Workflow Discovery Analyst",
    purpose: "Identifies repetitive workflows worth automating.",
  },
  {
    name: "Data Sensitivity Classifier",
    purpose:
      "Rates client data and workflow risk before automation is proposed.",
  },
  {
    name: "Integration Planner",
    purpose:
      "Determines required system connections and the minimum scopes for each.",
  },
  {
    name: "AI Opportunity Scorer",
    purpose: "Ranks workflow candidates by ROI, repeatability, and risk fit.",
  },
  {
    name: "Approval Policy Designer",
    purpose: "Defines where humans must approve, who, and on what timeline.",
  },
  {
    name: "Guardrail Spec Writer",
    purpose: "Produces input, output, topical, and policy rails per workflow.",
  },
  {
    name: "Pilot Proposal Writer",
    purpose: "Turns audit outputs into a fixed-scope pilot proposal.",
  },
  {
    name: "Monthly Impact Analyst",
    purpose:
      "Converts logs and metrics into the client-facing monthly report.",
  },
  {
    name: "Expansion Opportunity Analyst",
    purpose:
      "Finds the next workflow to automate from usage logs and feedback.",
  },
];
