import type { ReactNode } from "react";
import { cx } from "./utils";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

export function EmployeeChatLayout({
  chat,
  summary,
  className
}: {
  chat: ReactNode;
  summary: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("ds-employee-chat-layout", className)}>
      <section className="ds-chat-main">{chat}</section>
      <aside className="ds-summary-panel">{summary}</aside>
    </div>
  );
}

export function PeopleDashboardLayout({
  metrics,
  workflows,
  escalations,
  className
}: {
  metrics: ReactNode;
  workflows: ReactNode;
  escalations: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("ds-people-dashboard-layout", className)}>
      <section className="ds-dashboard-metrics">{metrics}</section>
      <section className="ds-dashboard-workflows">{workflows}</section>
      <section className="ds-dashboard-escalations">{escalations}</section>
    </div>
  );
}

export function TwoColumnLayout({ children, className }: LayoutProps) {
  return <div className={cx("ds-two-column-layout", className)}>{children}</div>;
}

export function DashboardGrid({ children, className }: LayoutProps) {
  return <div className={cx("ds-dashboard-grid", className)}>{children}</div>;
}
