import { Badge, type BadgeProps } from "@/components/ui/badge";
import type { ProjectStatus } from "@/types";

const STATUS_MAP: Record<
  ProjectStatus,
  { label: string; tone: NonNullable<BadgeProps["tone"]> }
> = {
  live: { label: "Live", tone: "success" },
  "in-progress": { label: "In Progress", tone: "info" },
  completed: { label: "Completed", tone: "primary" },
  research: { label: "Research", tone: "secondary" },
  "coming-soon": { label: "Coming Soon", tone: "neutral" },
};

export function StatusBadge({ status, className }: { status: ProjectStatus; className?: string }) {
  const { label, tone } = STATUS_MAP[status];
  return (
    <Badge tone={tone} className={className}>
      <span
        aria-hidden
        className="inline-block size-1.5 rounded-full bg-current opacity-80"
      />
      {label}
    </Badge>
  );
}
