import { ChevronRight, Inbox, Star } from "lucide-react";
import {
  Item,
  ItemAction,
  ItemContent,
  ItemDescription,
  ItemIcon,
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
          With Description
        </h3>
        <div className="flex flex-col gap-1">
          <Item>
            <ItemIcon>
              <Inbox />
            </ItemIcon>
            <ItemContent>
              <ItemTitle>Inbox</ItemTitle>
              <ItemDescription>12 unread messages</ItemDescription>
            </ItemContent>
            <ItemAction>
              <ChevronRight className="size-4 text-muted-foreground" />
            </ItemAction>
          </Item>
          <Item>
            <ItemIcon>
              <Star />
            </ItemIcon>
            <ItemContent>
              <ItemTitle>Starred</ItemTitle>
              <ItemDescription>5 saved items</ItemDescription>
            </ItemContent>
            <ItemAction>
              <ChevronRight className="size-4 text-muted-foreground" />
            </ItemAction>
          </Item>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Outline
        </h3>
        <Item variant="outline">
          <ItemIcon>
            <Inbox />
          </ItemIcon>
          <ItemContent>
            <ItemTitle>Standalone item</ItemTitle>
            <ItemDescription>Bordered card for emphasis.</ItemDescription>
          </ItemContent>
        </Item>
      </section>
    </div>
  );
}
