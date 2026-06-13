import type { Metadata } from "next";
import { ChartDemo } from "@/components/demos/chart-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Chart" };

const code = `import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const data = [{ month: "Jan", desktop: 186 }];
const config: ChartConfig = {
  desktop: { label: "Desktop", color: "var(--primary)" },
};

export function Demo() {
  return (
    <ChartContainer config={config} className="h-[260px] w-full">
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" />
      </BarChart>
    </ChartContainer>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Chart"
      description="Recharts wrapper that pipes design tokens into a chart — ChartContainer for theming, ChartTooltip/Legend for shadcn-style cards."
      code={code}
      install="npm install recharts"
      importPath="components/ui/chart.tsx"
    >
      <ChartDemo />
    </ComponentDocs>
  );
}
