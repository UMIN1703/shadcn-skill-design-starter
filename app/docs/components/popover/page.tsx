import type { Metadata } from "next";
import { PopoverDemo } from "@/components/demos/popover-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Popover" };

const code = `import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Demo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open</Button>
      </PopoverTrigger>
      <PopoverContent>Hello</PopoverContent>
    </Popover>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Popover"
      description="Displays rich content in a portal, triggered by a button — base primitive for Combobox, Date Picker, and any anchored panel."
      code={code}
      install="npm install @radix-ui/react-popover"
      importPath="components/ui/popover.tsx"
    >
      <PopoverDemo />
    </ComponentDocs>
  );
}
