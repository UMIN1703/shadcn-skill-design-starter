import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  args: { placeholder: "Email" },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Disabled: Story = { args: { disabled: true } };

export const WithLabel: Story = {
  name: "With Label",
  render: (args) => (
    <div className="grid w-full max-w-sm gap-3">
      <Label htmlFor="email">Email</Label>
      <Input id="email" {...args} />
    </div>
  ),
};

export const TypeInteraction: Story = {
  name: "Typing (QA test)",
  args: { placeholder: "Type here…" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(/type here/i);
    await userEvent.type(input, "hello@example.com");
    await expect(input).toHaveValue("hello@example.com");
  },
};
