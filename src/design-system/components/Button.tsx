import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "../utils";

type ButtonVariant = "primary" | "secondary" | "subtle" | "danger";
type ButtonSize = "sm" | "md";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  icon,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx("ds-button", `ds-button-${variant}`, `ds-button-${size}`, className)}
      {...props}
    >
      {icon ? <span className="ds-button-icon">{icon}</span> : null}
      <span>{children}</span>
    </button>
  );
}
