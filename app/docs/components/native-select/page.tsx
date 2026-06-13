import type { Metadata } from "next";
import { NativeSelectDemo } from "@/components/demos/native-select-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Native Select" };

const code = `import { NativeSelect } from "@/components/ui/native-select";

export function Demo() {
  return (
    <NativeSelect>
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
    </NativeSelect>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Native Select"
      description="A styled wrapper around the native HTML <select> — keeps platform a11y while matching the design system."
      code={code}
      install="# no external deps — copy file"
      importPath="components/ui/native-select.tsx"
    >
      <NativeSelectDemo />
    </ComponentDocs>
  );
}
