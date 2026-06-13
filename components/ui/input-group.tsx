import * as React from "react";
import { cn } from "@/lib/utils";

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center rounded-md border border-border bg-background shadow-sm transition-colors focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
      className,
    )}
    {...props}
  />
));
InputGroup.displayName = "InputGroup";

const InputGroupAddon = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    position?: "start" | "end";
  }
>(({ className, position = "start", ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "flex h-9 items-center text-muted-foreground [&>svg]:size-4",
      position === "start" ? "pl-3" : "pr-3",
      className,
    )}
    {...props}
  />
));
InputGroupAddon.displayName = "InputGroupAddon";

const InputGroupInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "h-9 flex-1 bg-transparent px-2 text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
InputGroupInput.displayName = "InputGroupInput";

export { InputGroup, InputGroupAddon, InputGroupInput };
