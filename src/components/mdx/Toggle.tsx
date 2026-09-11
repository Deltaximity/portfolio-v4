import type { ReactNode } from "react";

interface ToggleProps {
  title?: string;
  children: ReactNode;
}

export default function Toggle({
  title = "Show more",
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