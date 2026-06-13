import type { Metadata } from "next";
import { CollapsibleDemo } from "@/components/demos/collapsible-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Collapsible" };

const code = `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function Demo() {
  return (
    <Collapsible>
      <CollapsibleTrigger>Toggle</CollapsibleTrigger>
      <CollapsibleContent>Hidden content.</CollapsibleContent>
    </Collapsible>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Collapsible"
      description="An interactive component which expands and collapses a panel."
      code={code}
      install="npm install @radix-ui/react-collapsible"
      importPath="components/ui/collapsible.tsx"
    >
      <CollapsibleDemo />
    </ComponentDocs>
  );
}
