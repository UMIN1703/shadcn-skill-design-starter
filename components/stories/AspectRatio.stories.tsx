import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const meta: Meta<typeof AspectRatio> = {
  title: "UI/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  name: "16 / 9",
  render: () => (
    <div className="w-full max-w-md overflow-hidden rounded-lg border border-border">
      <AspectRatio ratio={16 / 9}>
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/40 to-accent">
          <span className="font-mono text-sm text-foreground">16 : 9</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const FourThree: Story = {
  name: "4 / 3",
  render: () => (
    <div className="w-full max-w-md overflow-hidden rounded-lg border border-border">
      <AspectRatio ratio={4 / 3}>
        <div className="flex h-full w-full items-center justify-center bg-muted">
          <span className="font-mono text-sm text-muted-foreground">4 : 3</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  render: () => (
    <div className="w-full max-w-xs overflow-hidden rounded-lg border border-border">
      <AspectRatio ratio={1}>
        <div className="flex h-full w-full items-center justify-center bg-foreground text-background">
          <span className="font-mono text-sm">1 : 1</span>
        </div>
      </AspectRatio>
    </div>
  ),
};
