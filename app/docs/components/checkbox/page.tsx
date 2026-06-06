import type { Metadata } from "next";
import { CheckboxDemo } from "@/components/demos/checkbox-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Checkbox" };

const code = `import { Checkbox } from "@/components/ui/checkbox";

export function Demo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <label htmlFor="terms">Accept terms and conditions</label>
    </div>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
      code={code}
      install="npm install @radix-ui/react-checkbox lucide-react"
      importPath="components/ui/checkbox.tsx"
    >
      <CheckboxDemo />
    </ComponentDocs>
  );
}
