import { cn } from "@/lib/utils";

type SizeBarProps = {
  name: string;
  value: number;
  alias?: string | null;
  unit?: "px" | "ms";
  maxBarWidth?: number;
  className?: string;
};

export function SizeBar({
  name,
  value,
  alias,
  unit = "px",
  maxBarWidth = 240,
  className,
}: SizeBarProps) {
  const barWidth = Math.min(Math.abs(value), maxBarWidth);
  return (
    <div
      className={cn(
        "flex items-center gap-4 border-b border-border py-2 last:border-b-0",
        className,
      )}
    >
      <code className="w-32 shrink-0 font-mono text-xs text-foreground">{name}</code>
      <code className="w-20 shrink-0 font-mono text-xs text-muted-foreground">
        {value}
        {unit}
      </code>
      <div className="min-w-0 flex-1">
        <div
          className="h-3 rounded-sm bg-foreground/80"
          style={{ width: `${barWidth}px`, maxWidth: "100%" }}
        />
      </div>
      {alias ? (
        <code className="hidden w-24 shrink-0 text-right font-mono text-[10px] text-muted-foreground sm:inline">
          → {alias}
        </code>
      ) : null}
    </div>
  );
}
