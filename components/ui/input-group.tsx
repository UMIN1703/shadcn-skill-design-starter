import * as React from "react";
import { cn } from "@/lib/utils";

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: "row" | "col";
  }
>(({ className, orientation = "row", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-md border border-border bg-background shadow-sm transition-colors focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
      orientation === "row" ? "flex items-center" : "flex flex-col",
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
      "flex h-9 items-center gap-2 text-muted-foreground [&>svg]:size-4",
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

const InputGroupTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-16 w-full resize-none bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
InputGroupTextarea.displayName = "InputGroupTextarea";

const InputGroupHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-between gap-2 border-b border-border px-3 py-1.5 text-sm text-muted-foreground",
      className,
    )}
    {...props}
  />
));
InputGroupHeader.displayName = "InputGroupHeader";

const InputGroupFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-between gap-2 border-t border-border px-3 py-1.5 text-sm text-muted-foreground",
      className,
    )}
    {...props}
  />
));
InputGroupFooter.displayName = "InputGroupFooter";

export {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
  InputGroupHeader,
  InputGroupFooter,
};
