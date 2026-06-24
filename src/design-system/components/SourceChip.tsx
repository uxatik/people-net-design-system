import { SOURCE_LABELS, type SourceKind } from "../labels";
import { cx } from "../utils";

type SourceChipProps = {
  source: SourceKind;
  label?: string;
  className?: string;
};

export function SourceChip({ source, label, className }: SourceChipProps) {
  return (
    <span className={cx("ds-source-chip", `ds-source-${source}`, className)}>
      {label ?? SOURCE_LABELS[source]}
    </span>
  );
}
