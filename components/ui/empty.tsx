import * as React from "react";
import { cn } from "@/lib/utils";

const Empty = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-border p-12 text-center",
      className,
    )}
    {...props}
  />
));
Empty.displayName = "Empty";

const EmptyIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex size-10 items-center justify-center rounded-lg bg-muted text-foreground [&>svg]:size-6",
      className,
    )}
    {...props}
  />
));
EmptyIcon.displayName = "EmptyIcon";

const EmptyTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-medium leading-7 text-foreground", className)}
    {...props}
  />
));
EmptyTitle.displayName = "EmptyTitle";

const EmptyDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "max-w-sm text-sm text-muted-foreground",
      className,
    )}
    {...props}
  />
));
EmptyDescription.displayName = "EmptyDescription";

const EmptyAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2 pt-2", className)}
    {...props}
  />
));
EmptyAction.displayName = "EmptyAction";

export { Empty, EmptyIcon, EmptyTitle, EmptyDescription, EmptyAction };
