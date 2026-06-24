import {
  AppShell,
  Button,
  Card,
  ChatBubble,
  ChatCard,
  DashboardGrid,
  DataTable,
  DEMO_LABELS,
  EmployeeChatLayout,
  MetricCard,
  PageHeader,
  PeopleDashboardLayout,
  Sidebar,
  SourceChip,
  SOURCE_LABELS,
  spacing,
  StatusChip,
  STATUS_LABELS,
  TwoColumnLayout,
  typography,
  WorkflowTable,
  colors,
  statusColors
} from "../index";
import type { DataTableColumn } from "../components/DataTable";
import type { SourceKind } from "../labels";
import type { StatusKind } from "../tokens";

type RequestRow = {
  id: string;
  request: string;
  source: SourceKind;
  status: StatusKind;
  owner: string;
};

const requests: RequestRow[] = [
  {
    id: "REQ-2042",
    request: DEMO_LABELS.timesheetReminder,
    source: "agileday",
    status: "aiHandled",
    owner: "People Ops"
  },
  {
    id: "REQ-2043",
    request: DEMO_LABELS.vacationRequest,
    source: "odoo",
    status: "managerApproval",
    owner: "Line manager"
  },
  {
    id: "REQ-2044",
    request: DEMO_LABELS.sensitiveCaseEscalation,
    source: "manualNote",
    status: "humanReview",
    owner: "People Partner"
  }
];

const columns: Array<DataTableColumn<RequestRow>> = [
  {
    key: "request",
    header: "Request",
    render: (row) => (
      <>
        <strong>{row.request}</strong>
        <span className="ds-table-subtext">{row.id}</span>
      </>
    )
  },
  {
    key: "source",
    header: "Source",
    render: (row) => <SourceChip source={row.source} />
  },
  {
    key: "status",
    header: "Status",
    render: (row) => <StatusChip status={row.status} />
  },
  {
    key: "owner",
    header: "Owner",
    render: (row) => row.owner
  }
];

const workflows = [
  {
    id: "WF-101",
    name: DEMO_LABELS.timesheetReminder,
    owner: "People Ops",
    source: "agileday" as const,
    status: "aiHandled" as const,
    lastActivity: "4 min ago",
    risk: "healthy" as const
  },
  {
    id: "WF-102",
    name: DEMO_LABELS.vacationRequest,
    owner: "Managers",
    source: "odoo" as const,
    status: "managerApproval" as const,
    lastActivity: "18 min ago",
    risk: "warning" as const
  },
  {
    id: "WF-103",
    name: DEMO_LABELS.sensitiveCaseEscalation,
    owner: "People Partner",
    source: "manualNote" as const,
    status: "humanReview" as const,
    lastActivity: "31 min ago",
    risk: "highRisk" as const
  }
];

const colorTokens = {
  ...colors,
  ...Object.fromEntries(
    Object.entries(statusColors).map(([key, value]) => [`status.${key}`, value.background])
  )
};

type TypographyTokenName = Exclude<keyof typeof typography, "fontFamily">;
const typographyRows = Object.entries(typography).filter(
  ([name]) => name !== "fontFamily"
) as Array<[TypographyTokenName, (typeof typography)[TypographyTokenName]]>;

export function DesignSystemPreview() {
  return (
    <AppShell
      productName="Unikie People NET"
      sidebar={
        <Sidebar
          items={[
            { label: "Design system", isActive: true },
            { label: "Employee assistant", meta: "Next" },
            { label: "Control center", meta: "Next" },
            { label: "Workflow rules" }
          ]}
          footer="Hackathon prototype foundation"
        />
      }
      actions={
        <>
          <Button variant="secondary" size="sm">
            Export tokens
          </Button>
          <Button size="sm">Use system</Button>
        </>
      }
    >
      <PageHeader
        eyebrow="Shared foundation"
        title="People NET Design System"
        description="A compact enterprise UI kit for the employee Teams-style assistant and People Team control center prototype."
      />

      <div className="ds-preview-stack">
        <PreviewSection
          title="Color Tokens"
          description="Muted teal identity, neutral surfaces, and restrained operational status colors."
        >
          <div className="ds-token-grid">
            {Object.entries(colorTokens).map(([name, value]) => (
              <div className="ds-token-swatch" key={name}>
                <div className="ds-token-color" style={{ background: value }} />
                <div>
                  <div className="ds-token-name">{name}</div>
                  <div className="ds-token-value">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </PreviewSection>

        <TwoColumnLayout>
          <PreviewSection title="Typography" description="System font stack with practical scale.">
            <div className="ds-typography-list">
              {typographyRows.map(([name, value]) => (
                <div className="ds-type-row" key={name}>
                  <div className="ds-type-label">{name}</div>
                  <div
                    style={{
                      fontSize: value.fontSize,
                      lineHeight: value.lineHeight,
                      fontWeight: value.fontWeight,
                      textTransform: "textTransform" in value ? value.textTransform : undefined
                    }}
                  >
                    People workflow clarity
                  </div>
                </div>
              ))}
            </div>
          </PreviewSection>

          <PreviewSection title="Spacing" description="Compact spacing tokens for dashboards.">
            <div className="ds-spacing-list">
              {Object.entries(spacing).map(([name, value]) => (
                <div className="ds-space-row" key={name}>
                  <div className="ds-space-label">{name}</div>
                  <div className="ds-space-bar" style={{ width: value }} />
                </div>
              ))}
            </div>
          </PreviewSection>
        </TwoColumnLayout>

        <PreviewSection
          title="Chips and Actions"
          description="Operational status and source language shared across both views."
        >
          <div className="ds-preview-chip-row">
            {Object.keys(STATUS_LABELS).map((status) => (
              <StatusChip key={status} status={status as StatusKind} />
            ))}
          </div>
          <div className="ds-preview-chip-row">
            {Object.keys(SOURCE_LABELS).map((source) => (
              <SourceChip key={source} source={source as SourceKind} />
            ))}
          </div>
          <div className="ds-preview-button-row">
            <Button>Primary action</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="subtle">Subtle action</Button>
            <Button variant="danger">Escalate</Button>
          </div>
        </PreviewSection>

        <PreviewSection title="Cards and Metrics" description="Reusable compact card patterns.">
          <DashboardGrid>
            <MetricCard label="AI handled" value="74%" helper="Today" trend="+8%" status="healthy" />
            <MetricCard
              label="Manager approvals"
              value="12"
              helper="Open queue"
              trend="3 urgent"
              status="warning"
            />
            <MetricCard
              label="Human reviews"
              value="4"
              helper="Needs People Team"
              trend="1 high risk"
              status="highRisk"
            />
            <MetricCard
              label="Paused automations"
              value="2"
              helper="Policy guardrails"
              status="automationPaused"
            />
          </DashboardGrid>
          <div className="ds-preview-component-grid">
            <Card
              title={DEMO_LABELS.policyQuestion}
              description="HR policy answer with traceable source context."
              actions={<StatusChip status="aiHandled" />}
            >
              <p className="ds-chat-card-body">
                Employees get concise answers while People Team retains source visibility.
              </p>
            </Card>
            <ChatCard
              title={DEMO_LABELS.vacationRequest}
              source="odoo"
              footer={<Button size="sm">Send for approval</Button>}
            >
              Vacation balance and manager routing are ready to confirm.
            </ChatCard>
            <ChatCard title={DEMO_LABELS.sensitiveCaseEscalation} source="manualNote">
              Sensitive wording triggers human review before any automated response.
            </ChatCard>
          </div>
        </PreviewSection>

        <PreviewSection title="Tables" description="Data table and workflow-specific row pattern.">
          <DataTable columns={columns} rows={requests} getRowKey={(row) => row.id} />
          <WorkflowTable workflows={workflows} />
        </PreviewSection>

        <PreviewSection title="Employee Chat Layout" description="Main assistant thread with a right summary panel.">
          <EmployeeChatLayout
            chat={
              <>
                <ChatBubble role="employee" meta="Employee">
                  Can I carry unused vacation days into next quarter?
                </ChatBubble>
                <ChatBubble role="assistant" meta="People NET assistant">
                  Yes, based on the current HR policy. I found the relevant clause and can show the
                  source before you submit a follow-up.
                </ChatBubble>
              </>
            }
            summary={
              <div className="ds-preview-layout-box">
                Summary panel: source trace, confidence, related actions, and escalation state.
              </div>
            }
          />
        </PreviewSection>

        <PreviewSection
          title="People Dashboard Layout"
          description="Metrics, workflow table, and escalation queue slots for the control center."
        >
          <PeopleDashboardLayout
            metrics={
              <DashboardGrid>
                <MetricCard label="Handled" value="128" status="healthy" />
                <MetricCard label="Approvals" value="12" status="managerApproval" />
                <MetricCard label="Reviews" value="4" status="humanReview" />
                <MetricCard label="Paused" value="2" status="automationPaused" />
              </DashboardGrid>
            }
            workflows={<WorkflowTable workflows={workflows} />}
            escalations={
              <div className="ds-preview-layout-box">
                Escalation section: high-risk cases, owner, source, and next required action.
              </div>
            }
          />
        </PreviewSection>
      </div>
    </AppShell>
  );
}

function PreviewSection({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="ds-preview-section">
      <div className="ds-preview-section-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </section>
  );
}
