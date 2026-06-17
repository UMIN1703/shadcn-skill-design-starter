import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: { onCheckedChange: fn() },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Switch id="airplane" {...args} />
      <Label htmlFor="airplane">Airplane mode</Label>
    </div>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const sw = canvas.getByRole("switch", { name: /airplane mode/i });
    await userEvent.click(sw);
    await expect(args.onCheckedChange).toHaveBeenCalledOnce();
    await expect(sw).toHaveAttribute("data-state", "checked");
  },
};

function FormStory() {
  const [marketing, setMarketing] = React.useState(true);
  const [security, setSecurity] = React.useState(false);
  const allOff = !marketing && !security;

  return (
    <form className="flex w-full max-w-2xl flex-col gap-4">
      <p className="text-base font-semibold text-foreground">
        Email Notifications
      </p>
      <div className="flex flex-col gap-4 rounded-lg border border-border p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="grid gap-0.5">
            <Label htmlFor="marketing">Marketing emails</Label>
            <p className="text-sm text-muted-foreground">
              Receive emails about new products, features, and more.
            </p>
          </div>
          <Switch
            id="marketing"
            checked={marketing}
            onCheckedChange={setMarketing}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-lg border border-border p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="grid gap-0.5">
            <Label htmlFor="security">Security emails</Label>
            <p className="text-sm text-muted-foreground">
              Receive emails about your account security.
            </p>
          </div>
          <Switch
            id="security"
            checked={security}
            onCheckedChange={setSecurity}
          />
        </div>
      </div>
      <Button type="submit" disabled={allOff} className="w-fit">
        Submit
      </Button>
    </form>
  );
}

export const Form: Story = {
  render: () => <FormStory />,
};
