import type { Metadata } from "next";
import { InputGroupDemo } from "@/components/demos/input-group-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Input Group" };

const code = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function Demo() {
  return (
    <InputGroup>
      <InputGroupAddon>$</InputGroupAddon>
      <InputGroupInput type="number" placeholder="0.00" />
      <InputGroupAddon position="end">USD</InputGroupAddon>
    </InputGroup>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Input Group"
      description="Composes an input with leading/trailing addons — search icons, currency symbols, unit labels."
      code={code}
      install="# no external deps — copy file"
      importPath="components/ui/input-group.tsx"
    >
      <InputGroupDemo />
    </ComponentDocs>
  );
}
