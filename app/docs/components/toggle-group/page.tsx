import type { Metadata } from "next";
import { ToggleGroupDemo } from "@/components/demos/toggle-group-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Toggle Group" };

const code = `import { Bold, Italic, Underline } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function Demo() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold"><Bold /></ToggleGroupItem>
      <ToggleGroupItem value="italic"><Italic /></ToggleGroupItem>
      <ToggleGroupItem value="underline"><Underline /></ToggleGroupItem>
    </ToggleGroup>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Toggle Group"
      description="A set of two-state buttons that can be toggled on or off."
      code={code}
      install="npm install @radix-ui/react-toggle-group"
      importPath="components/ui/toggle-group.tsx"
    >
      <ToggleGroupDemo />
    </ComponentDocs>
  );
}
