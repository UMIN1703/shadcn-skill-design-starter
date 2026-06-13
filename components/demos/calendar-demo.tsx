"use client";

import * as React from "react";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(),
  });

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Single
        </h3>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border border-border w-fit"
        />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Range
        </h3>
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
          className="rounded-md border border-border w-fit"
        />
      </section>
    </div>
  );
}
