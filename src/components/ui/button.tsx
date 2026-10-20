import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:size-[1.1em]",
  {
    variants: {
      variant: {
        // AA-correct fill: #2563EB with white text, blue glow on hover.
        primary:
          "rounded-md bg-primary-strong text-primary-fg shadow-[var(--shadow-ambient-sm)] hover:bg-primary hover:shadow-[var(--glow-primary)] active:translate-y-px",
        secondary:
          "rounded-md bg-secondary-strong text-primary-fg hover:bg-secondary hover:shadow-[var(--glow-secondary)] active:translate-y-px",
        ghost:
          "glass rounded-md text-fg hover:border-border-strong hover:bg-glass-strong",
        outline:
          "rounded-md border border-border-strong bg-transparent text-fg hover:bg-glass hover:border-border-accent",
        link: "rounded-sm text-primary-400 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-3.5 text-sm",
        md: "h-11 px-5 text-[0.95rem]",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10 rounded-md",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
