import type { ReactNode } from "react";

interface ColumnsProps {
  cols?: number;
  children: ReactNode;
}

export default function Columns({
  cols = 2,
  children,
}: ColumnsProps) {
  return (
    <div className={`markdown-columns col-${cols}`}>
      {children}
    </div>
  );
}