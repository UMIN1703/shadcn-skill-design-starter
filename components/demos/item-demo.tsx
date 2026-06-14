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

export function ItemDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <div className="flex flex-col gap-1">
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
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Outline Group
        </h3>
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
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Variants
        </h3>
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
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Alert
        </h3>
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
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Avatars
        </h3>
        <ItemGroup>
          <Item variant="ghost">
            <Avatar className="size-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="Evil Rabbit" />
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
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Media List
        </h3>
        <div className="flex flex-col gap-1">
          {[
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
          ].map((t) => (
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
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          User List
        </h3>
        <div className="flex flex-col gap-1">
          {[
            { name: "shadcn", email: "shadcn@vercel.com" },
            { name: "maxleiter", email: "maxleiter@vercel.com" },
            { name: "evilrabbit", email: "evilrabbit@vercel.com" },
          ].map((u) => (
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
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          External Links
        </h3>
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
      </section>
    </div>
  );
}
