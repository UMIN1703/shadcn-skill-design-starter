import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";

function ToastTrigger() {
  return (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
      >
        Show toast
      </Button>
      <Toaster />
    </>
  );
}

const meta: Meta<typeof ToastTrigger> = {
  title: "UI/Toast (Sonner)",
  component: ToastTrigger,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ToastTrigger>;

export const Default: Story = {};

export const ShowOnClick: Story = {
  name: "Show on click (QA test)",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /show toast/i });
    await userEvent.click(trigger);
    // Toast renders in a portal — search the entire document
    const toastEl = await within(document.body).findByText(
      /event has been created/i,
    );
    await waitFor(() => expect(toastEl).toBeVisible());
  },
};
