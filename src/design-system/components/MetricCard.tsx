import type { ReactNode } from "react";
import { cx } from "../utils";
import { StatusChip } from "./StatusChip";
import type { StatusKind } from "../tokens";

type MetricCardProps = {
  label: string;
  value: string;
  helper?: string;
  trend?: ReactNode;
  status?: StatusKind;
  className?: string;
};

export function MetricCard({
  label,
  value,
  helper,
  trend,
  status,
  className
}: MetricCardProps) {
  return (
    <section className={cx("ds-metric-card", className)}>
      <div className="ds-metric-card-topline">
        <span>{label}</span>
        {status ? <StatusChip status={status} /> : null}
      </div>
      <div className="ds-metric-value">{value}</div>
      {helper || trend ? (
        <div className="ds-metric-footer">
          {helper ? <span>{helper}</span> : null}
          {trend ? <strong>{trend}</strong> : null}
        </div>
      ) : null}
    </section>
  );
}
