import type { Metadata } from "next";
import { ButtonDemo } from "@/components/demos/button-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Button" };

const code = `import { Button } from "@/components/ui/button";

export function Demo() {
  return (
    <div className="flex gap-3">
      <Button>Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Button"
      description="Displays a button or a component that looks like a button. Includes 6 variants, 4 sizes, asChild, and disabled/loading states."
      code={code}
      install="npm install @radix-ui/react-slot class-variance-authority lucide-react"
      importPath="components/ui/button.tsx"
    >
      <ButtonDemo />
    </ComponentDocs>
  );
}
