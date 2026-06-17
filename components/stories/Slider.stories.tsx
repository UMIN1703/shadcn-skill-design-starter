import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { expect, userEvent, within } from "storybook/test";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const meta: Meta<typeof Slider> = {
  title: "UI/Slider",
  component: Slider,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => (
    <div className="grid w-full max-w-md gap-3">
      <Slider defaultValue={[33]} max={100} step={1} aria-label="Volume" />
    </div>
  ),
};

export const WithValue: Story = {
  name: "With Value",
  render: () => {
    function Example() {
      const [single, setSingle] = React.useState([50]);
      return (
        <div className="grid w-full max-w-md gap-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="volume">Volume</Label>
            <span className="font-mono text-sm text-muted-foreground">
              {single[0]}
            </span>
          </div>
          <Slider
            id="volume"
            value={single}
            onValueChange={setSingle}
            max={100}
            step={1}
          />
        </div>
      );
    }
    return <Example />;
  },
};

export const Range: Story = {
  render: () => {
    function Example() {
      const [range, setRange] = React.useState([20, 80]);
      return (
        <div className="grid w-full max-w-md gap-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="price">Price range</Label>
            <span className="font-mono text-sm text-muted-foreground">
              ${range[0]} – ${range[1]}
            </span>
          </div>
          <Slider
            id="price"
            value={range}
            onValueChange={setRange}
            min={0}
            max={100}
            step={5}
          />
        </div>
      );
    }
    return <Example />;
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Slider defaultValue={[50]} max={100} step={1} disabled />
    </div>
  ),
};

export const KeyboardInteraction: Story = {
  name: "Keyboard (QA test)",
  render: () => (
    <div className="w-full max-w-md">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        aria-label="QA volume"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const thumb = canvas.getByRole("slider", { name: /qa volume/i });
    await expect(thumb).toHaveAttribute("aria-valuenow", "50");
    thumb.focus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(thumb).toHaveAttribute("aria-valuenow", "51");
  },
};
