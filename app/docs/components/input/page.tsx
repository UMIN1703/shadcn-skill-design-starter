import type { Metadata } from "next";
import { InputDemo } from "@/components/demos/input-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Input" };

const code = `import { Input } from "@/components/ui/input";

export function Demo() {
  return <Input placeholder="Email" />;
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Input"
      description="Displays a form input field or a component that looks like an input field."
      code={code}
      install="# no external deps — copy file"
      importPath="components/ui/input.tsx"
    >
      <InputDemo />
    </ComponentDocs>
  );
}
