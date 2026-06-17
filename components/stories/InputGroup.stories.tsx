import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  ArrowUp,
  ChevronDown,
  Copy,
  CreditCard,
  Info,
  Loader2,
  Mail,
  MoreHorizontal,
  Plus,
  RotateCcw,
  Search,
  Star,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupFooter,
  InputGroupHeader,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";

const meta: Meta<typeof InputGroup> = {
  title: "UI/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "select", options: ["row", "col"] },
  },
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
    </div>
  ),
};

export const IconStart: Story = {
  name: "Icon Start",
  render: () => (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
    </div>
  ),
};

export const IconBothSides: Story = {
  name: "Icon Both Sides",
  render: () => (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupAddon>
          <Mail />
        </InputGroupAddon>
        <InputGroupInput type="email" placeholder="you@example.com" />
        <InputGroupAddon position="end">
          <CreditCard />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const TextAddon: Story = {
  name: "Text Addon",
  render: () => (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupAddon>
          <span className="text-sm">$</span>
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
        <InputGroupAddon position="end">
          <span className="text-sm">USD</span>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const UrlPrefixSuffix: Story = {
  name: "URL Prefix & Suffix",
  render: () => (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupAddon>
          <span className="text-sm text-muted-foreground">https://</span>
        </InputGroupAddon>
        <InputGroupInput placeholder="example" />
        <InputGroupAddon position="end">
          <span className="text-sm text-muted-foreground">.com</span>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithButton: Story = {
  name: "With Button",
  render: () => (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupInput
          placeholder="https://x.com/shadcn"
          defaultValue="https://x.com/shadcn"
        />
        <InputGroupAddon position="end" className="pr-1">
          <Button size="sm" className="h-7 px-3">
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithCounter: Story = {
  name: "With Counter",
  render: () => (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon position="end">
          <span className="text-sm text-muted-foreground">12 results</span>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const AvatarPrefix: Story = {
  name: "Avatar Prefix",
  render: () => (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupAddon>
          <Avatar className="size-5">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </InputGroupAddon>
        <InputGroupInput placeholder="@shadcn" defaultValue="@shadcn" />
      </InputGroup>
    </div>
  ),
};

export const WithInfoIcon: Story = {
  name: "With Info Icon",
  render: () => (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupInput placeholder="Enter password" type="password" />
        <InputGroupAddon position="end">
          <Info />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const MultipleEndIcons: Story = {
  name: "Multiple End Icons",
  render: () => (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon position="end">
          <Star />
          <Info />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const EmailDomainSuffix: Story = {
  name: "Email Domain Suffix",
  render: () => (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupInput placeholder="Enter your username" />
        <InputGroupAddon position="end">
          <span className="text-sm text-muted-foreground">@company.com</span>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithCopyButton: Story = {
  name: "With Copy Button",
  render: () => (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupInput defaultValue="https://x.com/shadcn" readOnly />
        <InputGroupAddon position="end" className="pr-1">
          <Button
            size="icon"
            variant="ghost"
            className="size-7"
            aria-label="Copy link"
          >
            <Copy />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const ButtonPrefix: Story = {
  name: "Button Prefix",
  render: () => (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupAddon className="pl-1">
          <Button size="sm" className="h-7 px-3">
            Click for help with API keys
          </Button>
        </InputGroupAddon>
        <InputGroupInput placeholder="Your email address" />
      </InputGroup>
    </div>
  ),
};

export const LoadingSpinner: Story = {
  name: "Loading Spinner",
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-3">
      <InputGroup>
        <InputGroupInput defaultValue="Searching..." readOnly />
        <InputGroupAddon position="end">
          <Loader2 className="animate-spin" />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <Loader2 className="animate-spin" />
        </InputGroupAddon>
        <InputGroupInput defaultValue="Processing..." readOnly />
      </InputGroup>
      <InputGroup>
        <InputGroupInput defaultValue="Saving changes..." readOnly />
        <InputGroupAddon position="end">
          <span className="text-sm text-muted-foreground">Saving...</span>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const DropdownTriggerEnd: Story = {
  name: "Dropdown Trigger End",
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-3">
      <InputGroup>
        <InputGroupInput placeholder="Enter file name" />
        <InputGroupAddon position="end" className="pr-1">
          <Button
            size="icon"
            variant="ghost"
            className="size-7"
            aria-label="Open menu"
          >
            <MoreHorizontal />
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter search query" />
        <InputGroupAddon position="end" className="pr-1">
          <Button
            size="sm"
            variant="ghost"
            className="h-7 gap-1 px-2 text-muted-foreground"
          >
            Search in...
            <ChevronDown className="size-3" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const TextareaWithFooter: Story = {
  name: "Textarea With Footer",
  render: () => (
    <div className="w-full max-w-md">
      <InputGroup orientation="col">
        <InputGroupTextarea placeholder="Ask, Search or Chat..." />
        <InputGroupFooter className="text-foreground">
          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              className="size-7 rounded-full border border-border"
              aria-label="Add"
            >
              <Plus />
            </Button>
            <span className="text-sm">Auto</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">52% used</span>
            <Button
              size="icon"
              className="size-7 rounded-full"
              aria-label="Send"
            >
              <ArrowUp />
            </Button>
          </div>
        </InputGroupFooter>
      </InputGroup>
    </div>
  ),
};

export const TextareaWithCounter: Story = {
  name: "Textarea With Counter",
  render: () => (
    <div className="w-full max-w-md">
      <InputGroup orientation="col">
        <InputGroupTextarea placeholder="Enter your message" />
        <InputGroupFooter>
          <span className="text-sm text-muted-foreground">
            120 characters left
          </span>
        </InputGroupFooter>
      </InputGroup>
    </div>
  ),
};

export const CodeEditor: Story = {
  name: "Code Editor",
  render: () => (
    <div className="w-full max-w-md">
      <InputGroup orientation="col">
        <InputGroupHeader>
          <span className="font-mono text-sm text-foreground">script.js</span>
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="ghost"
              className="size-7"
              aria-label="Reset"
            >
              <RotateCcw />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="size-7"
              aria-label="Copy"
            >
              <Copy />
            </Button>
          </div>
        </InputGroupHeader>
        <InputGroupTextarea
          defaultValue={`console.log("Hello, world!");`}
          className="min-h-32 font-mono"
        />
        <InputGroupFooter>
          <span className="text-sm">Line 1, Column 1</span>
          <Button size="sm" className="h-7 gap-1 px-3">
            Run
            <span className="text-xs opacity-70">↵</span>
          </Button>
        </InputGroupFooter>
      </InputGroup>
    </div>
  ),
};

export const TextareaWithSubmit: Story = {
  name: "Textarea With Submit",
  render: () => (
    <div className="w-full max-w-md">
      <InputGroup orientation="col">
        <InputGroupTextarea placeholder="Autoresize textarea..." />
        <InputGroupFooter className="justify-end">
          <Button size="sm" className="h-7 px-3">
            Submit
          </Button>
        </InputGroupFooter>
      </InputGroup>
    </div>
  ),
};
