"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  XAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

// 90 days of fake visitor data starting from April 9 — deterministic so SSR/CSR match
const startDate = new Date(2024, 3, 9);
const noise = (n: number) =>
  Math.floor(80 + ((Math.sin(n * 1.7) + 1) / 2) * 460);
const interactiveData = Array.from({ length: 90 }, (_, i) => {
  const date = new Date(startDate);
  date.setDate(date.getDate() + i);
  return {
    date: date.toISOString().split("T")[0],
    desktop: noise(i),
    mobile: noise(i + 73),
  };
});

const interactiveConfig = {
  views: { label: "Page Views" },
  desktop: { label: "Desktop", color: "var(--primary)" },
  mobile: { label: "Mobile", color: "var(--primary)" },
} satisfies ChartConfig;

function InteractiveBarChart() {
  const [active, setActive] =
    React.useState<"desktop" | "mobile">("desktop");

  const totals = React.useMemo(
    () => ({
      desktop: interactiveData.reduce((acc, d) => acc + d.desktop, 0),
      mobile: interactiveData.reduce((acc, d) => acc + d.mobile, 0),
    }),
    [],
  );

  return (
    <Card className="py-0">
      <CardHeader className="flex flex-col items-stretch gap-0 space-y-0 border-b border-border !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {(["desktop", "mobile"] as const).map((key) => (
            <button
              key={key}
              data-active={active === key}
              onClick={() => setActive(key)}
              className={cn(
                "relative z-30 flex flex-1 flex-col justify-center gap-1 border-t border-border px-6 py-4 text-left transition-colors",
                "data-[active=true]:bg-muted/50",
                "even:border-l",
                "sm:border-l sm:border-t-0 sm:px-8 sm:py-6",
              )}
            >
              <span className="text-xs text-muted-foreground">
                {interactiveConfig[key].label}
              </span>
              <span className="text-lg font-bold leading-none sm:text-3xl">
                {totals[key].toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-2 pb-6 sm:p-6">
        <ChartContainer
          config={interactiveConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            data={interactiveData}
            margin={{ left: 12, right: 12, top: 8, bottom: 8 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value: string) => {
                const d = new Date(value);
                return d.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey={active} fill={`var(--color-${active})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

const areaData = [
  { day: "Mon", visitors: 220 },
  { day: "Tue", visitors: 410 },
  { day: "Wed", visitors: 330 },
  { day: "Thu", visitors: 510 },
  { day: "Fri", visitors: 470 },
  { day: "Sat", visitors: 600 },
  { day: "Sun", visitors: 580 },
];

const areaConfig: ChartConfig = {
  visitors: { label: "Visitors", color: "var(--primary)" },
};

const pieData = [
  { name: "Direct", value: 400 },
  { name: "Search", value: 300 },
  { name: "Social", value: 200 },
  { name: "Referral", value: 100 },
];

const pieConfig: ChartConfig = {
  Direct: { label: "Direct", color: "var(--primary)" },
  Search: { label: "Search", color: "var(--accent-foreground)" },
  Social: { label: "Social", color: "var(--muted-foreground)" },
  Referral: { label: "Referral", color: "var(--border)" },
};

export function ChartDemo() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Bar Chart — Interactive
        </h3>
        <InteractiveBarChart />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Area
        </h3>
        <ChartContainer config={areaConfig} className="h-[260px] w-full">
          <AreaChart data={areaData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              dataKey="visitors"
              type="monotone"
              stroke="var(--color-visitors)"
              fill="var(--color-visitors)"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ChartContainer>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Pie
        </h3>
        <ChartContainer config={pieConfig} className="h-[260px] w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={48}>
              {pieData.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={`var(--color-${entry.name})`}
                />
              ))}
            </Pie>
            <ChartLegend content={<ChartLegendContent />} />
          </PieChart>
        </ChartContainer>
      </section>
    </div>
  );
}
