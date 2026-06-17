import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

const meta: Meta<typeof Kbd> = {
  title: "UI/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  args: { children: "⌘K" },
};

export default meta;

type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Kbd>⌘</Kbd>
      <Kbd>⌘K</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>↵</Kbd>
    </div>
  ),
};

export const InSentence: Story = {
  name: "In Sentence",
  render: () => (
    <p className="text-sm text-muted-foreground">
      Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette.
    </p>
  ),
};

export const Group: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⇧</Kbd>
      <span className="text-muted-foreground">+</span>
      <Kbd>⌘</Kbd>
      <span className="text-muted-foreground">+</span>
      <Kbd>P</Kbd>
    </KbdGroup>
  ),
};

export const InButton: Story = {
  name: "In Button",
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        Accept{" "}
        <Kbd className="ml-1 bg-primary-foreground/20 text-primary-foreground">
          ↵
        </Kbd>
      </Button>
      <Button variant="outline">
        Cancel <Kbd className="ml-1">Esc</Kbd>
      </Button>
    </div>
  ),
};

export const InSearchField: Story = {
  name: "In Search Field",
  render: () => (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon position="end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  ),
};
