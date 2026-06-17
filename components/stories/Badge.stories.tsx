import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CircleCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
    },
  },
  args: { children: "Badge" },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Badge</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  name: "With Icon",
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>
        <CircleCheck />
        Verified
      </Badge>
    </div>
  ),
};

export const Counter: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge className="h-5 w-5 justify-center rounded-full p-0">8</Badge>
      <Badge
        variant="destructive"
        className="h-6 w-6 justify-center rounded-full p-0"
      >
        99
      </Badge>
      <Badge variant="outline">20+</Badge>
    </div>
  ),
};
