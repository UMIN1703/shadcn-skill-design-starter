import type { Metadata } from "next";
import { BadgeDemo } from "@/components/demos/badge-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Badge" };

const code = `import { Badge } from "@/components/ui/badge";

export function Demo() {
  return (
    <div className="flex gap-2">
      <Badge>Badge</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Badge"
      description="Displays a badge or a component that looks like a badge."
      code={code}
      install="npm install class-variance-authority"
      importPath="components/ui/badge.tsx"
    >
      <BadgeDemo />
    </ComponentDocs>
  );
}
