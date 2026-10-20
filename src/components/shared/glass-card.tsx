import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds hover lift + accent glow + cursor spotlight. */
  interactive?: boolean;
  /** Adds a gradient hairline border (for featured items). */
  gradientBorder?: boolean;
  as?: React.ElementType;
}

/** The signature surface: glassmorphism panel with optional interactivity. */
const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    { className, interactive, gradientBorder, as: Comp = "div", children, ...props },
    ref,
  ) => {
    return (
      <Comp
        ref={ref}
        className={cn(
          "glass rounded-lg p-6 md:p-8",
          "transition-[transform,box-shadow,border-color] duration-300",
          interactive &&
            "spotlight hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-ambient-lg)]",
          gradientBorder && "border-gradient",
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
