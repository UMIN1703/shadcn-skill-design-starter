import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
    },
    size: { control: "select", options: ["default", "sm", "lg", "icon"] },
  },
  args: { onClick: fn(), children: "Button" },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Secondary: Story = { args: { variant: "secondary" } };

export const Destructive: Story = {
  args: { variant: "destructive", children: "Delete" },
};

export const Outline: Story = { args: { variant: "outline" } };

export const Ghost: Story = { args: { variant: "ghost" } };

export const Link: Story = { args: { variant: "link", children: "Read more" } };

export const Disabled: Story = { args: { disabled: true } };

export const Clickable: Story = {
  name: "Click interaction (QA test)",
  args: { children: "Click me" },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole("button", { name: /click me/i });
    await userEvent.click(btn);
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};
