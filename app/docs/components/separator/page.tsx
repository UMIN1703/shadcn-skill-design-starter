import type { Metadata } from "next";
import { SeparatorDemo } from "@/components/demos/separator-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Separator" };

const code = `import { Separator } from "@/components/ui/separator";

export function Demo() {
  return <Separator />;
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Separator"
      description="Visually or semantically separates content."
      code={code}
      install="npm install @radix-ui/react-separator"
      importPath="components/ui/separator.tsx"
    >
      <SeparatorDemo />
    </ComponentDocs>
  );
}
