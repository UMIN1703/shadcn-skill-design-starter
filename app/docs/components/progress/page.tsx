import type { Metadata } from "next";
import { ProgressDemo } from "@/components/demos/progress-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Progress" };

const code = `import { Progress } from "@/components/ui/progress";

export function Demo() {
  return <Progress value={66} />;
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Progress"
      description="Displays an indicator showing the completion progress of a task — typically as a horizontal bar."
      code={code}
      install="npm install @radix-ui/react-progress"
      importPath="components/ui/progress.tsx"
    >
      <ProgressDemo />
    </ComponentDocs>
  );
}
