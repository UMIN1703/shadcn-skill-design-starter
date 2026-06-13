import * as React from "react";
import { cn } from "@/lib/utils";

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    className={cn(
      "inline-flex items-stretch [&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:first-child)]:-ml-px [&>*:not(:last-child)]:border-r-0 [&>*:focus-visible]:relative [&>*:focus-visible]:z-10",
      className,
    )}
    {...props}
  />
));
ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup };
