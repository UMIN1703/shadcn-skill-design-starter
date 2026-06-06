import { cn } from "@/lib/utils";

type ComponentPreviewProps = {
  children: React.ReactNode;
  code: string;
  className?: string;
};

export function ComponentPreview({
  children,
  code,
  className,
}: ComponentPreviewProps) {
  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn(
          "flex min-h-[350px] items-center justify-center rounded-lg border border-border bg-background p-10",
          className
        )}
      >
        {children}
      </div>
      <details className="group rounded-lg border border-border bg-muted/30">
        <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-medium text-foreground">
          <span>Code</span>
          <span className="text-xs text-muted-foreground group-open:hidden">
            Show
          </span>
          <span className="hidden text-xs text-muted-foreground group-open:inline">
            Hide
          </span>
        </summary>
        <pre className="overflow-x-auto rounded-b-lg border-t border-border bg-background p-4 text-xs leading-relaxed text-foreground font-mono">
          <code>{code}</code>
        </pre>
      </details>
    </div>
  );
}
