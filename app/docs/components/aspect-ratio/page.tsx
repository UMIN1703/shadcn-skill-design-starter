import type { Metadata } from "next";
import { AspectRatioDemo } from "@/components/demos/aspect-ratio-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Aspect Ratio" };

const code = `import { AspectRatio } from "@/components/ui/aspect-ratio";

export function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <div className="h-full w-full bg-muted" />
    </AspectRatio>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Aspect Ratio"
      description="Displays content within a desired ratio."
      code={code}
      install="npm install @radix-ui/react-aspect-ratio"
      importPath="components/ui/aspect-ratio.tsx"
    >
      <AspectRatioDemo />
    </ComponentDocs>
  );
}
