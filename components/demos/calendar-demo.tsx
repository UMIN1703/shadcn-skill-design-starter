"use client";

import * as React from "react";
import { faIR } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const presets: { label: string; days: number }[] = [
  { label: "Today", days: 0 },
  { label: "Tomorrow", days: 1 },
  { label: "In 3 days", days: 3 },
  { label: "In a week", days: 7 },
];

function addDays(base: Date, days: number) {
  const d = new Date(base);
  d.setDate(d.getDate() + days);
  return d;
}

const monthShort = (date: Date) =>
  date.toLocaleString("en-US", { month: "short" });
const yearOnly = (date: Date) => date.getFullYear().toString();

export function CalendarDemo() {
  const [single, setSingle] = React.useState<Date | undefined>(new Date());
  const [preset, setPreset] = React.useState<Date | undefined>(new Date());
  const [time, setTime] = React.useState<Date | undefined>(new Date());
  const [submitted, setSubmitted] = React.useState<Date | undefined>(undefined);
  const [formError, setFormError] = React.useState<string | undefined>(
    undefined,
  );

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Single
        </h3>
        <Calendar
          mode="single"
          captionLayout="dropdown"
          selected={single}
          onSelect={setSingle}
          formatters={{
            formatMonthDropdown: monthShort,
            formatYearDropdown: yearOnly,
          }}
          className="w-fit rounded-md border border-border"
        />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          RTL
        </h3>
        <Calendar
          mode="single"
          dir="rtl"
          locale={faIR}
          selected={single}
          onSelect={setSingle}
          className="w-fit rounded-md border border-border"
        />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Multi-month
        </h3>
        <Calendar
          mode="single"
          selected={single}
          onSelect={setSingle}
          numberOfMonths={2}
          className="w-fit rounded-md border border-border"
        />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Caption Layouts
        </h3>
        <div className="flex flex-wrap items-start gap-4">
          <div className="flex flex-col gap-2">
            <Label className="text-xs font-normal text-muted-foreground">
              Month and Year
            </Label>
            <Calendar
              mode="single"
              captionLayout="dropdown"
              selected={single}
              onSelect={setSingle}
              formatters={{
                formatMonthDropdown: monthShort,
                formatYearDropdown: yearOnly,
              }}
              className="w-fit rounded-md border border-border"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-xs font-normal text-muted-foreground">
              Month Only
            </Label>
            <Calendar
              mode="single"
              captionLayout="dropdown-months"
              selected={single}
              onSelect={setSingle}
              formatters={{ formatMonthDropdown: monthShort }}
              className="w-fit rounded-md border border-border"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-xs font-normal text-muted-foreground">
              Year Only
            </Label>
            <Calendar
              mode="single"
              captionLayout="dropdown-years"
              selected={single}
              onSelect={setSingle}
              formatters={{ formatYearDropdown: yearOnly }}
              className="w-fit rounded-md border border-border"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Time
        </h3>
        <div className="flex w-fit flex-col gap-4 rounded-md border border-border p-3">
          <Calendar mode="single" selected={time} onSelect={setTime} />
          <div className="grid gap-2">
            <Label htmlFor="time-of-day">Time</Label>
            <Input
              id="time-of-day"
              type="time"
              defaultValue="10:30"
              step="1"
              className="w-[140px] appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Preset
        </h3>
        <div className="flex w-fit flex-col gap-3 rounded-md border border-border p-3">
          <Select
            onValueChange={(v) => setPreset(addDays(new Date(), Number(v)))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {presets.map((p) => (
                <SelectItem key={p.label} value={String(p.days)}>
                  {p.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Calendar mode="single" selected={preset} onSelect={setPreset} />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          In Form
        </h3>
        <form
          className="flex w-fit flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (!submitted) {
              setFormError("Please pick a date.");
              return;
            }
            setFormError(undefined);
          }}
        >
          <Field>
            <FieldLabel>Date of birth</FieldLabel>
            <Calendar
              mode="single"
              captionLayout="dropdown"
              selected={submitted}
              onSelect={(d) => {
                setSubmitted(d);
                setFormError(undefined);
              }}
              formatters={{
                formatMonthDropdown: monthShort,
                formatYearDropdown: yearOnly,
              }}
              className="rounded-md border border-border"
            />
            {formError ? (
              <FieldError>{formError}</FieldError>
            ) : (
              <FieldDescription>
                Your date of birth is used to calculate your age.
              </FieldDescription>
            )}
          </Field>
          <Button type="submit" className="w-fit">
            Submit
          </Button>
        </form>
      </section>
    </div>
  );
}
