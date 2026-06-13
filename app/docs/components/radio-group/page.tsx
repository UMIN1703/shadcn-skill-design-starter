import type { Metadata } from "next";
import { RadioGroupDemo } from "@/components/demos/radio-group-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Radio Group" };

const code = `import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function Demo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
    </RadioGroup>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Radio Group"
      description="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
      code={code}
      install="npm install @radix-ui/react-radio-group"
      importPath="components/ui/radio-group.tsx"
    >
      <RadioGroupDemo />
    </ComponentDocs>
  );
}
