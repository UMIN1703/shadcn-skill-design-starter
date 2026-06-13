import type { Metadata } from "next";
import { ItemDemo } from "@/components/demos/item-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Item" };

const code = `import {
  Item,
  ItemContent,
  ItemDescription,
  ItemIcon,
  ItemTitle,
} from "@/components/ui/item";

export function Demo() {
  return (
    <Item>
      <ItemIcon>{/* lucide icon */}</ItemIcon>
      <ItemContent>
        <ItemTitle>Inbox</ItemTitle>
        <ItemDescription>12 unread messages</ItemDescription>
      </ItemContent>
    </Item>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Item"
      description="A list row primitive with icon, title, description, and trailing action — used in lists, settings, and pickers."
      code={code}
      install="# no external deps — copy file"
      importPath="components/ui/item.tsx"
    >
      <ItemDemo />
    </ComponentDocs>
  );
}
