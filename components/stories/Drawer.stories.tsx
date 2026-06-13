import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function DrawerExample() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

const meta: Meta<typeof DrawerExample> = {
  title: "UI/Drawer",
  component: DrawerExample,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DrawerExample>;

export const Default: Story = {};

export const OpenInteraction: Story = {
  name: "Open by click (QA test)",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /open drawer/i });
    await userEvent.click(trigger);
    const title = await within(document.body).findByText(/move goal/i);
    await expect(title).toBeVisible();
  },
};
