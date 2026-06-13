import type { Metadata } from "next";
import { ToggleDemo } from "@/components/demos/toggle-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Toggle" };

const code = `import { Bold } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export function Demo() {
  return (
    <Toggle aria-label="Bold">
      <Bold />
    </Toggle>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Toggle"
      description="A two-state button that can be either on or off."
      code={code}
      install="npm install @radix-ui/react-toggle"
      importPath="components/ui/toggle.tsx"
    >
      <ToggleDemo />
    </ComponentDocs>
  );
}
