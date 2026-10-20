import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      tone: {
        neutral: "border-border bg-glass text-fg-muted",
        primary: "border-border-accent bg-primary-soft text-primary-400",
        secondary: "border-secondary/40 bg-secondary-soft text-secondary-400",
        success: "border-success/40 bg-success-soft text-success",
        warning: "border-warning/40 bg-warning-soft text-warning",
        info: "border-info/40 bg-info-soft text-info",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}

export { Badge, badgeVariants };
