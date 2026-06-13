import type { Metadata } from "next";
import { TextareaDemo } from "@/components/demos/textarea-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Textarea" };

const code = `import { Textarea } from "@/components/ui/textarea";

export function Demo() {
  return <Textarea placeholder="Type your message here." />;
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Textarea"
      description="Displays a multi-line text input field."
      code={code}
      install="# no external deps — copy file"
      importPath="components/ui/textarea.tsx"
    >
      <TextareaDemo />
    </ComponentDocs>
  );
}
