import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { CalendarDays } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const meta: Meta<typeof HoverCard> = {
  title: "UI/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

const NextjsHoverCard = () => (
  <HoverCard openDelay={0}>
    <HoverCardTrigger asChild>
      <Button variant="link" className="w-fit px-0">
        @nextjs
      </Button>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">
            The React Framework – created and maintained by @vercel.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <CalendarDays className="h-4 w-4 opacity-70" />
            <span className="text-xs text-muted-foreground">
              Joined December 2021
            </span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export const Default: Story = {
  render: () => <NextjsHoverCard />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /@nextjs/i });
    await userEvent.hover(trigger);
    const content = await within(document.body).findByText(
      /The React Framework/i,
    );
    await waitFor(() => expect(content).toBeVisible());
  },
};
