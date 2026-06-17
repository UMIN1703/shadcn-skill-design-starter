import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { expect, userEvent, within } from "storybook/test";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const meta: Meta<typeof RadioGroup> = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r-default" />
        <Label htmlFor="r-default">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="r-comfortable" />
        <Label htmlFor="r-comfortable">Comfortable</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="compact" id="r-compact" disabled />
        <Label htmlFor="r-compact" className="text-muted-foreground">
          Compact (disabled)
        </Label>
      </div>
    </RadioGroup>
  ),
};

export const Form: Story = {
  render: () => {
    function FormExample() {
      const [plan, setPlan] = React.useState("free");
      return (
        <form className="flex w-full max-w-md flex-col gap-4">
          <div className="grid gap-2">
            <p className="text-sm font-medium text-foreground">
              Choose your plan
            </p>
            <RadioGroup value={plan} onValueChange={setPlan}>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="free" id="plan-free" />
                <Label htmlFor="plan-free">Free</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="pro" id="plan-pro" />
                <Label htmlFor="plan-pro">Pro</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="enterprise" id="plan-enterprise" />
                <Label htmlFor="plan-enterprise">Enterprise</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-fit">
            Submit
          </Button>
        </form>
      );
    }
    return <FormExample />;
  },
};

export const ToggleInteraction: Story = {
  name: "Toggle (QA test)",
  render: () => (
    <RadioGroup defaultValue="one">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="one" id="qa-one" />
        <Label htmlFor="qa-one">One</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="two" id="qa-two" />
        <Label htmlFor="qa-two">Two</Label>
      </div>
    </RadioGroup>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const one = canvas.getByRole("radio", { name: /one/i });
    const two = canvas.getByRole("radio", { name: /two/i });
    await expect(one).toHaveAttribute("data-state", "checked");
    await userEvent.click(two);
    await expect(two).toHaveAttribute("data-state", "checked");
    await expect(one).toHaveAttribute("data-state", "unchecked");
  },
};
