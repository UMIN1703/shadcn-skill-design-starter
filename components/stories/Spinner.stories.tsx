import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";

const meta: Meta<typeof Spinner> = {
  title: "UI/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "default", "lg", "xl"] },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="sm" />
      <Spinner size="default" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const InButton: Story = {
  name: "In Button",
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button disabled>
        <Spinner size="sm" />
        Please wait
      </Button>
      <Button variant="outline" disabled>
        <Spinner size="sm" />
        Loading
      </Button>
      <Button variant="ghost" disabled>
        <Spinner size="sm" />
        Saving
      </Button>
    </div>
  ),
};

export const InCard: Story = {
  name: "In Card",
  render: () => (
    <div className="flex h-32 w-full max-w-md items-center justify-center rounded-lg border border-border bg-background">
      <div className="flex flex-col items-center gap-3 text-muted-foreground">
        <Spinner size="lg" />
        <span className="text-sm">Loading data…</span>
      </div>
    </div>
  ),
};

export const StatusBadges: Story = {
  name: "Status Badges",
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="gap-1.5 font-normal">
        <Spinner size="sm" />
        Syncing
      </Badge>
      <Badge variant="outline" className="gap-1.5 font-normal">
        <Spinner size="sm" />
        Updating
      </Badge>
      <Badge variant="outline" className="gap-1.5 font-normal">
        <Spinner size="sm" />
        Processing
      </Badge>
    </div>
  ),
};

export const InputValidating: Story = {
  name: "Input Validating",
  render: () => (
    <div className="relative w-full max-w-md">
      <Textarea
        placeholder="Type a message..."
        className="resize-none pr-14"
        rows={3}
      />
      <Button
        type="button"
        size="icon"
        className="absolute bottom-2 right-2 size-8"
        aria-label="Send message"
        disabled
      >
        <Send className="size-4" />
      </Button>
      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
        <Spinner size="sm" />
        Validating…
      </div>
    </div>
  ),
};

export const DownloadProgress: Story = {
  name: "Download Progress",
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-3 rounded-lg border border-border bg-background p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Spinner size="default" />
          <div className="grid">
            <span className="text-sm font-medium">design-assets.zip</span>
            <span className="text-xs text-muted-foreground">
              12.4 MB of 28.0 MB
            </span>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
      </div>
      <Progress value={44} />
    </div>
  ),
};
