import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-32 w-full rounded-md border border-border bg-inset/60 px-3.5 py-2.5 text-sm text-fg transition-colors",
        "placeholder:text-fg-subtle",
        "focus-visible:border-border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        "aria-[invalid=true]:border-error/70 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

export { Textarea };
