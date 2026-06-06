import type { Metadata } from "next";
import { SelectDemo } from "@/components/demos/select-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Select" };

const code = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Demo() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
      </SelectContent>
    </Select>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Select"
      description="Displays a list of options for the user to pick from — triggered by a button."
      code={code}
      install="npm install @radix-ui/react-select lucide-react"
      importPath="components/ui/select.tsx"
    >
      <SelectDemo />
    </ComponentDocs>
  );
}
