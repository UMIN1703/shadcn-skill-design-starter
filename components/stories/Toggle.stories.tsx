import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const meta: Meta<typeof Toggle> = {
  title: "UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "outline"] },
    size: { control: "select", options: ["sm", "default", "lg"] },
  },
  args: {
    "aria-label": "Bold",
    children: <Bold />,
    onPressedChange: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle aria-label="Bold" {...args}>
        <Bold />
      </Toggle>
      <Toggle aria-label="Italic" defaultPressed>
        <Italic />
      </Toggle>
      <Toggle aria-label="Underline" disabled>
        <Underline />
      </Toggle>
    </div>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const bold = canvas.getByRole("button", { name: /^bold$/i });
    await userEvent.click(bold);
    await expect(args.onPressedChange).toHaveBeenCalledOnce();
    await expect(bold).toHaveAttribute("data-state", "on");
  },
};

export const Outline: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" aria-label="Bold">
        <Bold />
      </Toggle>
      <Toggle variant="outline" aria-label="Italic" defaultPressed>
        <Italic />
      </Toggle>
    </div>
  ),
};

export const WithText: Story = {
  name: "With Text",
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle aria-label="Italic">
        <Italic />
        Italic
      </Toggle>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle size="sm" aria-label="Bold sm">
        <Bold />
      </Toggle>
      <Toggle size="default" aria-label="Bold md">
        <Bold />
      </Toggle>
      <Toggle size="lg" aria-label="Bold lg">
        <Bold />
      </Toggle>
    </div>
  ),
};
