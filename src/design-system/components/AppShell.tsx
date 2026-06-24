import type { ReactNode } from "react";
import { cx } from "../utils";

type AppShellProps = {
  productName: string;
  sidebar: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  className?: string;
};

export function AppShell({
  productName,
  sidebar,
  children,
  actions,
  className
}: AppShellProps) {
  return (
    <div className={cx("ds-app-shell", className)}>
      <header className="ds-topbar">
        <div className="ds-product-mark" aria-hidden="true">
          PN
        </div>
        <div className="ds-product-title">{productName}</div>
        {actions ? <div className="ds-topbar-actions">{actions}</div> : null}
      </header>
      <div className="ds-app-body">
        {sidebar}
        <main className="ds-main">{children}</main>
      </div>
    </div>
  );
}
