import type { Metadata } from "next";
import { LabelDemo } from "@/components/demos/label-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Label" };

const code = `import { Label } from "@/components/ui/label";

export function Demo() {
  return <Label htmlFor="email">Email</Label>;
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Label"
      description="Renders an accessible label associated with controls."
      code={code}
      install="npm install @radix-ui/react-label"
      importPath="components/ui/label.tsx"
    >
      <LabelDemo />
    </ComponentDocs>
  );
}
