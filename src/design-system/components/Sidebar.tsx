import { cx } from "../utils";

export type SidebarItem = {
  label: string;
  href?: string;
  isActive?: boolean;
  meta?: string;
};

type SidebarProps = {
  items: SidebarItem[];
  footer?: string;
};

export function Sidebar({ items, footer }: SidebarProps) {
  return (
    <aside className="ds-sidebar" aria-label="Primary navigation">
      <nav className="ds-sidebar-nav">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href ?? "#"}
            className={cx("ds-sidebar-link", item.isActive && "is-active")}
            aria-current={item.isActive ? "page" : undefined}
          >
            <span>{item.label}</span>
            {item.meta ? <span className="ds-sidebar-meta">{item.meta}</span> : null}
          </a>
        ))}
      </nav>
      {footer ? <div className="ds-sidebar-footer">{footer}</div> : null}
    </aside>
  );
}
