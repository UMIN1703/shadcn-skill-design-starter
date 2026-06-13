import type { Metadata } from "next";
import { SkeletonDemo } from "@/components/demos/skeleton-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Skeleton" };

const code = `import { Skeleton } from "@/components/ui/skeleton";

export function Demo() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Skeleton"
      description="Use to show a placeholder while content is loading."
      code={code}
      install="# no external deps — copy file"
      importPath="components/ui/skeleton.tsx"
    >
      <SkeletonDemo />
    </ComponentDocs>
  );
}
