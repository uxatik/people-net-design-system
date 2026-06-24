import type { ReactNode } from "react";
import { cx } from "../utils";

type CardProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
};

export function Card({ children, title, description, actions, className }: CardProps) {
  return (
    <section className={cx("ds-card", className)}>
      {title || description || actions ? (
        <div className="ds-card-header">
          <div>
            {title ? <h2>{title}</h2> : null}
            {description ? <p>{description}</p> : null}
          </div>
          {actions ? <div className="ds-card-actions">{actions}</div> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
