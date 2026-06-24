import type { ReactNode } from "react";
import { SourceChip } from "./SourceChip";
import type { SourceKind } from "../labels";

type ChatCardProps = {
  title: string;
  children: ReactNode;
  source?: SourceKind;
  footer?: ReactNode;
};

export function ChatCard({ title, children, source, footer }: ChatCardProps) {
  return (
    <article className="ds-chat-card">
      <div className="ds-chat-card-header">
        <h3>{title}</h3>
        {source ? <SourceChip source={source} /> : null}
      </div>
      <div className="ds-chat-card-body">{children}</div>
      {footer ? <div className="ds-chat-card-footer">{footer}</div> : null}
    </article>
  );
}
