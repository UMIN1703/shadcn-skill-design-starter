import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const itemVariants = cva(
  "flex items-center gap-3 rounded-md text-sm transition-colors",
  {
    variants: {
      variant: {
        default: "hover:bg-accent hover:text-accent-foreground",
        ghost: "",
        outline: "border border-border",
        muted: "bg-muted",
      },
      size: {
        default: "px-3 py-2",
        sm: "px-2 py-1.5 text-xs",
        lg: "px-4 py-3",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

interface ItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemVariants> {
  asChild?: boolean;
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(itemVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Item.displayName = "Item";

const ItemGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col overflow-hidden rounded-md border border-border [&>*]:rounded-none [&>*+*]:border-t [&>*+*]:border-border",
      className,
    )}
    {...props}
  />
));
ItemGroup.displayName = "ItemGroup";

const ItemIcon = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "flex size-5 shrink-0 items-center justify-center text-muted-foreground [&>svg]:size-4",
      className,
    )}
    {...props}
  />
));
ItemIcon.displayName = "ItemIcon";

const ItemMedia = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted",
      className,
    )}
    {...props}
  />
));
ItemMedia.displayName = "ItemMedia";

const ItemContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex min-w-0 flex-1 flex-col gap-0.5", className)}
    {...props}
  />
));
ItemContent.displayName = "ItemContent";

const ItemTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("truncate font-medium leading-none", className)}
    {...props}
  />
));
ItemTitle.displayName = "ItemTitle";

const ItemDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("truncate text-xs text-muted-foreground", className)}
    {...props}
  />
));
ItemDescription.displayName = "ItemDescription";

const ItemAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("ml-auto flex shrink-0 items-center gap-2", className)}
    {...props}
  />
));
ItemAction.displayName = "ItemAction";

export {
  Item,
  ItemGroup,
  ItemIcon,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemAction,
  itemVariants,
};
