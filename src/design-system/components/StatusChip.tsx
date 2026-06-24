import { STATUS_LABELS } from "../labels";
import type { StatusKind } from "../tokens";
import { cx } from "../utils";

type StatusChipProps = {
  status: StatusKind;
  label?: string;
  className?: string;
};

export function StatusChip({ status, label, className }: StatusChipProps) {
  return (
    <span className={cx("ds-status-chip", `ds-status-${status}`, className)}>
      {label ?? STATUS_LABELS[status]}
    </span>
  );
}
