import type { Metadata } from "next";
import { ScrollAreaDemo } from "@/components/demos/scroll-area-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Scroll Area" };

const code = `import { ScrollArea } from "@/components/ui/scroll-area";

export function Demo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      {/* ...content */}
    </ScrollArea>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Scroll Area"
      description="Augments native scroll functionality for custom, cross-browser styling."
      code={code}
      install="npm install @radix-ui/react-scroll-area"
      importPath="components/ui/scroll-area.tsx"
    >
      <ScrollAreaDemo />
    </ComponentDocs>
  );
}
