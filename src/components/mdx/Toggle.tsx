import type { ReactNode } from "react";

interface ToggleProps {
  title?: string;
  open?: boolean;
  children: ReactNode;
}

export default function Toggle({
  title = "Show more",
  open = false,
  children,
}: ToggleProps) {
  return (
    <details className="markdown-toggle">
      <summary>{title}</summary>
      <div className="toggle-content">
        {children}
      </div>
    </details>
  );
}