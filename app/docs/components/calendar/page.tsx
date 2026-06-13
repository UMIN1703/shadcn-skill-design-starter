import type { Metadata } from "next";
import { CalendarDemo } from "@/components/demos/calendar-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Calendar" };

const code = `import { Calendar } from "@/components/ui/calendar";

export function Demo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <Calendar mode="single" selected={date} onSelect={setDate} />;
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Calendar"
      description="A flexible date-grid component — built on react-day-picker v10. Used standalone or inside Date Picker."
      code={code}
      install="npm install react-day-picker date-fns"
      importPath="components/ui/calendar.tsx"
    >
      <CalendarDemo />
    </ComponentDocs>
  );
}
