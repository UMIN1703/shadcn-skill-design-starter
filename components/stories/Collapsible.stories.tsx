import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { expect, userEvent, within } from "storybook/test";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

function StarredRepos() {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="grid w-full max-w-md gap-2"
    >
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-7">
            <ChevronsUpDown />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border border-border px-4 py-2 text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="grid gap-2">
        <div className="rounded-md border border-border px-4 py-2 text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border border-border px-4 py-2 text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

const meta: Meta<typeof StarredRepos> = {
  title: "UI/Collapsible",
  component: StarredRepos,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StarredRepos>;

export const Default: Story = {};

export const ToggleInteraction: Story = {
  name: "Toggle open (QA test)",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /toggle/i });
    await userEvent.click(trigger);
    const hidden = await canvas.findByText(/@radix-ui\/colors/i);
    await expect(hidden).toBeVisible();
  },
};
