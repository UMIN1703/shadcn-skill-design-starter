"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";

export type ChartConfig = {
  [k: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
  };
};

type ChartContextValue = { config: ChartConfig };
const ChartContext = React.createContext<ChartContextValue | null>(null);

function useChart() {
  const ctx = React.useContext(ChartContext);
  if (!ctx) throw new Error("useChart must be used within <ChartContainer />");
  return ctx;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    config: ChartConfig;
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border [&_.recharts-tooltip-cursor]:stroke-border",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "ChartContainer";

function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const colors = Object.entries(config).filter(([, c]) => c.color);
  if (!colors.length) return null;
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `[data-chart=${id}] { ${colors
          .map(([k, c]) => `--color-${k}: ${c.color};`)
          .join(" ")} }`,
      }}
    />
  );
}

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    payload?: Array<{
      name?: string;
      value?: number | string;
      dataKey?: string;
      color?: string;
    }>;
    label?: React.ReactNode;
    hideLabel?: boolean;
  }
>(({ payload, label, hideLabel, className, ...props }, ref) => {
  const { config } = useChart();
  if (!payload?.length) return null;
  return (
    <div
      ref={ref}
      className={cn(
        "grid min-w-32 gap-1.5 rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-md",
        className,
      )}
      {...props}
    >
      {!hideLabel && label != null && (
        <div className="font-medium text-foreground">{label}</div>
      )}
      <div className="grid gap-1">
        {payload.map((item, i) => {
          const key = item.dataKey ?? item.name ?? `${i}`;
          const cfg = config[key];
          return (
            <div
              key={i}
              className="flex w-full items-center justify-between gap-4 text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <span
                  className="size-2 shrink-0 rounded-[2px]"
                  style={{ background: item.color ?? cfg?.color }}
                />
                <span>{cfg?.label ?? item.name}</span>
              </div>
              <span className="font-mono font-medium tabular-nums text-foreground">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
});
ChartTooltipContent.displayName = "ChartTooltipContent";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    payload?: Array<{ dataKey?: string; value?: string; color?: string }>;
  }
>(({ payload, className, ...props }, ref) => {
  const { config } = useChart();
  if (!payload?.length) return null;
  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center gap-4 pt-3", className)}
      {...props}
    >
      {payload.map((item, i) => {
        const key = item.dataKey ?? `${i}`;
        const cfg = config[key];
        return (
          <div
            key={i}
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <span
              className="size-2 shrink-0 rounded-[2px]"
              style={{ background: item.color ?? cfg?.color }}
            />
            {cfg?.label ?? item.value}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegendContent";

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
};
