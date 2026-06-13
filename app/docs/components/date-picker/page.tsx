import type { Metadata } from "next";
import { DatePickerDemo } from "@/components/demos/date-picker-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Date Picker" };

const code = `"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Demo() {
  const [date, setDate] = React.useState<Date | undefined>();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Date Picker"
      description="A date selection input composed from Popover + Calendar (react-day-picker)."
      code={code}
      install="npm install @radix-ui/react-popover react-day-picker date-fns"
      importPath="components/ui/popover.tsx + components/ui/calendar.tsx"
    >
      <DatePickerDemo />
    </ComponentDocs>
  );
}
