export const STATUS_LABELS = {
  aiHandled: "AI handled",
  managerApproval: "Manager approval",
  humanReview: "Human review required",
  automationPaused: "Automation paused",
  healthy: "Healthy",
  warning: "Warning",
  highRisk: "High risk"
} as const;

export const SOURCE_LABELS = {
  agileday: "Source: Agileday",
  odoo: "Source: Odoo",
  hrPolicy: "Source: HR policy",
  manualNote: "Source: Manual note"
} as const;

export const DEMO_LABELS = {
  timesheetReminder: "Timesheet reminder",
  vacationRequest: "Vacation request",
  policyQuestion: "Policy question",
  sensitiveCaseEscalation: "Sensitive case escalation"
} as const;

export type SourceKind = keyof typeof SOURCE_LABELS;
