import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-medium tracking-wide ring-offset-background transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-foreground/85",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-foreground/5 text-foreground",
        link: "text-foreground underline-offset-4 hover:underline px-0",
        // Editorial variants — kept names for backwards compatibility
        hero: "bg-cream text-navy-dark hover:bg-cream/85 font-medium",
        heroOutline: "border border-cream text-cream hover:bg-cream hover:text-navy-dark font-medium bg-transparent",
        gold: "bg-foreground text-background hover:bg-foreground/85 font-medium",
        goldOutline: "border border-foreground text-foreground hover:bg-foreground hover:text-background font-medium bg-transparent",
        navy: "bg-navy-dark text-cream hover:bg-navy-light font-medium",
        navyOutline: "border border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-cream font-medium bg-transparent",
      },
      size: {
        default: "h-11 px-5 py-2 text-[13px]",
        sm: "h-9 px-3 text-[12px]",
        lg: "h-12 px-7 text-[13px]",
        xl: "h-14 px-9 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
