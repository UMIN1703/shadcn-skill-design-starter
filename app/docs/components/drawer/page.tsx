import type { Metadata } from "next";
import { DrawerDemo } from "@/components/demos/drawer-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Drawer" };

const code = `import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function Demo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Drawer"
      description="A draggable bottom-sheet for mobile-style overlays — built on vaul."
      code={code}
      install="npm install vaul"
      importPath="components/ui/drawer.tsx"
    >
      <DrawerDemo />
    </ComponentDocs>
  );
}
