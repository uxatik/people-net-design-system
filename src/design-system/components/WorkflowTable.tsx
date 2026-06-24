import { SourceChip } from "./SourceChip";
import { StatusChip } from "./StatusChip";
import type { SourceKind } from "../labels";
import type { StatusKind } from "../tokens";

export type Workflow = {
  id: string;
  name: string;
  owner: string;
  source: SourceKind;
  status: StatusKind;
  lastActivity: string;
  risk: StatusKind;
};

type WorkflowTableProps = {
  workflows: Workflow[];
};

export function WorkflowRow({ workflow }: { workflow: Workflow }) {
  return (
    <tr>
      <td>
        <strong>{workflow.name}</strong>
        <span className="ds-table-subtext">{workflow.id}</span>
      </td>
      <td>{workflow.owner}</td>
      <td>
        <SourceChip source={workflow.source} />
      </td>
      <td>
        <StatusChip status={workflow.status} />
      </td>
      <td>{workflow.lastActivity}</td>
      <td>
        <StatusChip status={workflow.risk} />
      </td>
    </tr>
  );
}

export function WorkflowTable({ workflows }: WorkflowTableProps) {
  return (
    <div className="ds-table-wrap">
      <table className="ds-data-table ds-workflow-table">
        <thead>
          <tr>
            <th>Workflow</th>
            <th>Owner</th>
            <th>Source</th>
            <th>Status</th>
            <th>Last activity</th>
            <th>Risk</th>
          </tr>
        </thead>
        <tbody>
          {workflows.map((workflow) => (
            <WorkflowRow key={workflow.id} workflow={workflow} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
