import type { Metadata } from "next";
import { SheetDemo } from "@/components/demos/sheet-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Sheet" };

const code = `import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Demo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes here.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Sheet"
      description="Extends the Dialog to display content as a panel that slides in from the edge of the screen."
      code={code}
      install="npm install @radix-ui/react-dialog"
      importPath="components/ui/sheet.tsx"
    >
      <SheetDemo />
    </ComponentDocs>
  );
}
