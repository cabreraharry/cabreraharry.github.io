import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md border border-border bg-inset/60 px-3.5 text-sm text-fg transition-colors",
        "placeholder:text-fg-subtle",
        "focus-visible:border-border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        "aria-[invalid=true]:border-error/70 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
