import type { Metadata } from "next";
import { ContextMenuDemo } from "@/components/demos/context-menu-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Context Menu" };

const code = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export function Demo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Right-click here</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Context Menu"
      description="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
      code={code}
      install="npm install @radix-ui/react-context-menu"
      importPath="components/ui/context-menu.tsx"
    >
      <ContextMenuDemo />
    </ComponentDocs>
  );
}
