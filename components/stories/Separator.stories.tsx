import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Separator } from "@/components/ui/separator";

const meta: Meta<typeof Separator> = {
  title: "UI/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] },
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Separator />
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div>
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
  ),
};

export const WithHeading: Story = {
  name: "With Heading",
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-3">
      <h4 className="font-semibold">Account</h4>
      <Separator />
      <p className="text-sm text-muted-foreground">
        Manage your account settings and preferences.
      </p>
    </div>
  ),
};
