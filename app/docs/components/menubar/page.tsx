import type { Metadata } from "next";
import { MenubarDemo } from "@/components/demos/menubar-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Menubar" };

const code = `import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function Demo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Menubar"
      description="A visually persistent menu common in desktop applications that provides a consistent place to expose a set of commands."
      code={code}
      install="npm install @radix-ui/react-menubar"
      importPath="components/ui/menubar.tsx"
    >
      <MenubarDemo />
    </ComponentDocs>
  );
}
