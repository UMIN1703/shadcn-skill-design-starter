import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

function CalendarSingle() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border border-border"
    />
  );
}

function CalendarRange() {
  const [range, setRange] = React.useState<{ from?: Date; to?: Date }>({
    from: new Date(),
  });
  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange as never}
      numberOfMonths={2}
      className="rounded-md border border-border"
    />
  );
}

const meta: Meta<typeof CalendarSingle> = {
  title: "UI/Calendar",
  component: CalendarSingle,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CalendarSingle>;

export const Single: Story = {};

export const Range: Story = {
  render: () => <CalendarRange />,
};
