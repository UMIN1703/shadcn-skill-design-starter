import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Skeleton } from "@/components/ui/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "UI/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Lines: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-[250px] rounded-full" />
      <Skeleton className="h-4 w-[200px] rounded-full" />
    </div>
  ),
};

export const AvatarRow: Story = {
  name: "Avatar Row",
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-[250px] rounded-full" />
        <Skeleton className="h-4 w-[200px] rounded-full" />
      </div>
    </div>
  ),
};

export const CardBlock: Story = {
  name: "Card Block",
  render: () => (
    <div className="flex w-[300px] flex-col gap-3">
      <Skeleton className="h-32 w-full rounded-lg" />
      <Skeleton className="h-4 w-[250px] rounded-full" />
      <Skeleton className="h-4 w-[200px] rounded-full" />
    </div>
  ),
};
