import type { Metadata } from "next";
import { ButtonGroupDemo } from "@/components/demos/button-group-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Button Group" };

const code = `import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export function Demo() {
  return (
    <ButtonGroup>
      <Button variant="outline">Years</Button>
      <Button variant="outline">Months</Button>
      <Button variant="outline">Weeks</Button>
    </ButtonGroup>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Button Group"
      description="A segmented cluster of buttons with shared borders — useful for time-range pickers, view toggles, and split actions."
      code={code}
      install="# no external deps — copy file"
      importPath="components/ui/button-group.tsx"
    >
      <ButtonGroupDemo />
    </ComponentDocs>
  );
}
