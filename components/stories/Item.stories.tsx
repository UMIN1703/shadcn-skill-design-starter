import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Inbox,
  Info,
  Plus,
  Star,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemAction,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemIcon,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

const meta: Meta<typeof Item> = {
  title: "UI/Item",
  component: Item,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "ghost", "outline", "muted"],
    },
    size: { control: "select", options: ["default", "sm", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Item>;

export const Default: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-1">
      <Item>
        <ItemIcon>
          <Inbox />
        </ItemIcon>
        <ItemTitle>Inbox</ItemTitle>
      </Item>
      <Item>
        <ItemIcon>
          <Star />
        </ItemIcon>
        <ItemTitle>Starred</ItemTitle>
      </Item>
    </div>
  ),
};

export const OutlineGroup: Story = {
  name: "Outline Group",
  render: () => (
    <div className="w-full max-w-md">
      <ItemGroup>
        <Item variant="ghost">
          <ItemContent>
            <ItemTitle>Basic Item</ItemTitle>
            <ItemDescription>
              A simple item with title and description.
            </ItemDescription>
          </ItemContent>
          <ItemAction>
            <Button variant="outline" size="sm">
              Action
            </Button>
          </ItemAction>
        </Item>
        <Item variant="ghost">
          <ItemIcon>
            <CheckCircle2 />
          </ItemIcon>
          <ItemContent>
            <ItemTitle>Your profile has been verified.</ItemTitle>
          </ItemContent>
          <ItemAction>
            <ChevronRight className="size-4 text-muted-foreground" />
          </ItemAction>
        </Item>
      </ItemGroup>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <ItemGroup>
        <Item variant="ghost">
          <ItemContent>
            <ItemTitle>Default Variant</ItemTitle>
            <ItemDescription>
              Standard styling with subtle background and borders.
            </ItemDescription>
          </ItemContent>
          <ItemAction>
            <Button variant="outline" size="sm">
              Open
            </Button>
          </ItemAction>
        </Item>
        <Item variant="ghost">
          <ItemContent>
            <ItemTitle>Outline Variant</ItemTitle>
            <ItemDescription>
              Outlined style with clear borders and transparent background.
            </ItemDescription>
          </ItemContent>
          <ItemAction>
            <Button variant="outline" size="sm">
              Open
            </Button>
          </ItemAction>
        </Item>
        <Item variant="muted">
          <ItemContent>
            <ItemTitle>Muted Variant</ItemTitle>
            <ItemDescription>
              Subdued appearance with muted colors for secondary content.
            </ItemDescription>
          </ItemContent>
          <ItemAction>
            <Button variant="outline" size="sm">
              Open
            </Button>
          </ItemAction>
        </Item>
      </ItemGroup>
    </div>
  ),
};

export const Alert: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Item variant="outline">
        <ItemIcon>
          <Info />
        </ItemIcon>
        <ItemContent>
          <ItemTitle>Security Alert</ItemTitle>
          <ItemDescription>
            New login detected from unknown device.
          </ItemDescription>
        </ItemContent>
        <ItemAction>
          <Button variant="outline" size="sm">
            Review
          </Button>
        </ItemAction>
      </Item>
    </div>
  ),
};

export const WithAvatars: Story = {
  name: "With Avatars",
  render: () => (
    <div className="w-full max-w-md">
      <ItemGroup>
        <Item variant="ghost">
          <Avatar className="size-8">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Evil Rabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <ItemContent>
            <ItemTitle>Evil Rabbit</ItemTitle>
            <ItemDescription>Last seen 5 months ago</ItemDescription>
          </ItemContent>
          <ItemAction>
            <Button
              variant="outline"
              size="icon"
              className="size-7 rounded-full"
              aria-label="Add"
            >
              <Plus />
            </Button>
          </ItemAction>
        </Item>
        <Item variant="ghost">
          <div className="flex -space-x-2">
            <Avatar className="size-8 border-2 border-background">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar className="size-8 border-2 border-background">
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
          <ItemContent>
            <ItemTitle>No Team Members</ItemTitle>
            <ItemDescription>
              Invite your team to collaborate on this project.
            </ItemDescription>
          </ItemContent>
          <ItemAction>
            <Button variant="outline" size="sm">
              Invite
            </Button>
          </ItemAction>
        </Item>
      </ItemGroup>
    </div>
  ),
};

export const MediaList: Story = {
  name: "Media List",
  render: () => {
    const tracks = [
      {
        title: "Midnight City Lights",
        subtitle: "Electric Nights",
        desc: "Neon Dreams",
        time: "3:45",
      },
      {
        title: "Coffee Shop Conversations",
        subtitle: "Urban Stories",
        desc: "The Morning Brew",
        time: "4:05",
      },
      {
        title: "Digital Rain",
        subtitle: "Binary Beats",
        desc: "Cyber Symphony",
        time: "3:30",
      },
    ];
    return (
      <div className="flex w-full max-w-md flex-col gap-1">
        {tracks.map((t) => (
          <Item key={t.title}>
            <ItemMedia />
            <ItemContent>
              <ItemTitle>
                {t.title}{" "}
                <span className="font-normal text-muted-foreground">
                  - {t.subtitle}
                </span>
              </ItemTitle>
              <ItemDescription>{t.desc}</ItemDescription>
            </ItemContent>
            <ItemAction>
              <span className="text-sm text-muted-foreground">{t.time}</span>
            </ItemAction>
          </Item>
        ))}
      </div>
    );
  },
};

export const UserList: Story = {
  name: "User List",
  render: () => {
    const users = [
      { name: "shadcn", email: "shadcn@vercel.com" },
      { name: "maxleiter", email: "maxleiter@vercel.com" },
      { name: "evilrabbit", email: "evilrabbit@vercel.com" },
    ];
    return (
      <div className="flex w-full max-w-md flex-col gap-1">
        {users.map((u) => (
          <Item key={u.name}>
            <Avatar className="size-8">
              <AvatarFallback>
                {u.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <ItemContent>
              <ItemTitle>{u.name}</ItemTitle>
              <ItemDescription>{u.email}</ItemDescription>
            </ItemContent>
            <ItemAction>
              <Button
                variant="ghost"
                size="icon"
                className="size-7"
                aria-label={`Add ${u.name}`}
              >
                <Plus />
              </Button>
            </ItemAction>
          </Item>
        ))}
      </div>
    );
  },
};

export const ExternalLinks: Story = {
  name: "External Links",
  render: () => (
    <div className="w-full max-w-md">
      <ItemGroup>
        <Item variant="ghost" asChild>
          <a href="#">
            <ItemContent>
              <ItemTitle>Visit our documentation</ItemTitle>
              <ItemDescription>
                Learn how to get started with our components.
              </ItemDescription>
            </ItemContent>
            <ItemAction>
              <ChevronRight className="size-4 text-muted-foreground" />
            </ItemAction>
          </a>
        </Item>
        <Item variant="ghost" asChild>
          <a href="#" target="_blank" rel="noreferrer">
            <ItemContent>
              <ItemTitle>External resource</ItemTitle>
              <ItemDescription>
                Opens in a new tab with security attributes.
              </ItemDescription>
            </ItemContent>
            <ItemAction>
              <ExternalLink className="size-4 text-muted-foreground" />
            </ItemAction>
          </a>
        </Item>
      </ItemGroup>
    </div>
  ),
};
