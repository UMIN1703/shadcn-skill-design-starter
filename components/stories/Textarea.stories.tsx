import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: { placeholder: "Type your message here." },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const Disabled: Story = { args: { disabled: true } };

export const WithLabel: Story = {
  name: "With Label",
  render: (args) => (
    <div className="grid w-full max-w-md gap-3">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" {...args} />
    </div>
  ),
};

export const Form: Story = {
  render: () => (
    <form className="grid w-full max-w-md gap-2">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us a little about yourself" />
      <p className="text-sm text-muted-foreground">
        You can <span className="font-medium">@mention</span> other users and
        organizations.
      </p>
      <Button type="submit" className="mt-4 w-fit">
        Submit
      </Button>
    </form>
  ),
};

export const WithAction: Story = {
  name: "With Action",
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
      >
        <Send className="size-4" />
      </Button>
    </div>
  ),
};
