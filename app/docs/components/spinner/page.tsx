import type { Metadata } from "next";
import { SpinnerDemo } from "@/components/demos/spinner-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Spinner" };

const code = `import { Spinner } from "@/components/ui/spinner";

export function Demo() {
  return <Spinner />;
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Spinner"
      description="A small animated indicator for in-progress / loading states. Inherits text color so it adapts to any context."
      code={code}
      install="# no external deps — wraps lucide's Loader2"
      importPath="components/ui/spinner.tsx"
    >
      <SpinnerDemo />
    </ComponentDocs>
  );
}
