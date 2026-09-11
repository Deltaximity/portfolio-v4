import type { ReactNode } from "react";

interface ColumnProps {
  children: ReactNode;
}

export default function Column({
  children,
}: ColumnProps) {
  return (
    <div className="markdown-column">
      {children}
    </div>
  );
}