import type { ReactNode } from "react";
import { cx } from "../utils";

type ChatBubbleRole = "employee" | "assistant" | "system";

type ChatBubbleProps = {
  role: ChatBubbleRole;
  children: ReactNode;
  meta?: string;
};

export function ChatBubble({ role, children, meta }: ChatBubbleProps) {
  return (
    <div className={cx("ds-chat-bubble-row", `is-${role}`)}>
      <div className="ds-chat-bubble">
        <div className="ds-chat-bubble-content">{children}</div>
        {meta ? <div className="ds-chat-meta">{meta}</div> : null}
      </div>
    </div>
  );
}
