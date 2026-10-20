import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

/** Monospace tech-stack / interest chip. */
export function Tag({ children, className }: TagProps) {
  return <span className={cn("chip", className)}>{children}</span>;
}
