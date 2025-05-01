import { forwardRef } from "react";
import { cn } from "../lib/utils";

const Button = forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "slot" : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",

          // Variants
          variant === "default" &&
            "bg-primary text-background hover:bg-primary/90 p-4",
          variant === "outline" &&
            "border border-primary bg-transparent text-primary hover:bg-primary/5",
          variant === "ghost" && "hover:bg-primary/5 text-primary",
          variant === "link" &&
            "text-primary underline-offset-4 hover:underline",

          // Sizes
          size === "default" && "h-10 px-6 py-2",
          size === "sm" && "h-8 px-4 text-xs",
          size === "lg" && "h-12 px-8 text-base",
          size === "icon" && "h-10 w-10",

          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
