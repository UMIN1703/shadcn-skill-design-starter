import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Bell,
  Cloud,
  FileX,
  Inbox,
  Search,
  Upload,
  UserPlus,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyAction,
  EmptyDescription,
  EmptyIcon,
  EmptyTitle,
} from "@/components/ui/empty";
import { Input } from "@/components/ui/input";

function DefaultEmpty() {
  return (
    <Empty className="w-full max-w-lg">
      <EmptyIcon>
        <Inbox />
      </EmptyIcon>
      <EmptyTitle>No messages yet</EmptyTitle>
      <EmptyDescription>
        When someone sends you a message, it&apos;ll show up here.
      </EmptyDescription>
    </Empty>
  );
}

function WithActionEmpty() {
  return (
    <Empty className="w-full max-w-lg">
      <EmptyIcon>
        <FileX />
      </EmptyIcon>
      <EmptyTitle>No files found</EmptyTitle>
      <EmptyDescription>
        Get started by uploading your first file.
      </EmptyDescription>
      <EmptyAction>
        <Button>Upload file</Button>
        <Button variant="outline">Browse templates</Button>
      </EmptyAction>
    </Empty>
  );
}

function CardEmpty() {
  return (
    <Empty className="w-full max-w-lg rounded-lg border border-border bg-background p-10">
      <EmptyIcon>
        <Cloud />
      </EmptyIcon>
      <EmptyTitle>Cloud Storage Empty</EmptyTitle>
      <EmptyDescription>
        Upload files to start syncing across all your devices.
      </EmptyDescription>
      <EmptyAction>
        <Button>
          <Upload className="mr-2 size-4" />
          Upload
        </Button>
      </EmptyAction>
    </Empty>
  );
}

function MutedEmpty() {
  return (
    <Empty className="w-full max-w-lg rounded-lg bg-muted p-10">
      <EmptyIcon>
        <Bell />
      </EmptyIcon>
      <EmptyTitle>No Notifications</EmptyTitle>
      <EmptyDescription>
        You&apos;re all caught up. We&apos;ll let you know when something new
        arrives.
      </EmptyDescription>
    </Empty>
  );
}

function WithAvatarEmpty() {
  return (
    <Empty className="w-full max-w-lg">
      <Avatar className="size-16">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <EmptyTitle>User Offline</EmptyTitle>
      <EmptyDescription>
        shadcn is currently away. Leave a message and they&apos;ll get back to
        you.
      </EmptyDescription>
      <EmptyAction>
        <Button variant="outline">Leave Message</Button>
      </EmptyAction>
    </Empty>
  );
}

function WithAvatarStackEmpty() {
  return (
    <Empty className="w-full max-w-lg">
      <div className="flex -space-x-2">
        <Avatar className="size-10 border-2 border-background">
          <AvatarImage src="https://github.com/shadcn.png" alt="member 1" />
          <AvatarFallback>U1</AvatarFallback>
        </Avatar>
        <Avatar className="size-10 border-2 border-background">
          <AvatarFallback>U2</AvatarFallback>
        </Avatar>
        <Avatar className="size-10 border-2 border-background">
          <AvatarFallback>U3</AvatarFallback>
        </Avatar>
      </div>
      <EmptyTitle>No Team Members</EmptyTitle>
      <EmptyDescription>
        Invite your team to collaborate on this project.
      </EmptyDescription>
      <EmptyAction>
        <Button>
          <UserPlus className="mr-2 size-4" />
          Invite Members
        </Button>
      </EmptyAction>
    </Empty>
  );
}

function NotFoundEmpty() {
  return (
    <Empty className="w-full max-w-lg">
      <EmptyTitle className="text-5xl">404</EmptyTitle>
      <EmptyDescription>
        The page you&apos;re looking for doesn&apos;t exist.
      </EmptyDescription>
      <div className="relative mt-2 w-full max-w-xs">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search docs..." className="pl-9" />
      </div>
      <EmptyAction>
        <Button variant="outline">Contact support</Button>
      </EmptyAction>
    </Empty>
  );
}

const meta: Meta<typeof DefaultEmpty> = {
  title: "UI/Empty",
  component: DefaultEmpty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DefaultEmpty>;

export const Default: Story = {};

export const WithAction: Story = { render: () => <WithActionEmpty /> };

export const Card: Story = { render: () => <CardEmpty /> };

export const Muted: Story = { render: () => <MutedEmpty /> };

export const WithAvatar: Story = { render: () => <WithAvatarEmpty /> };

export const WithAvatarStack: Story = {
  render: () => <WithAvatarStackEmpty />,
};

export const NotFound: Story = { render: () => <NotFoundEmpty /> };
