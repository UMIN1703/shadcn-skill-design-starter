import type { Metadata } from "next";
import { EmptyDemo } from "@/components/demos/empty-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Empty" };

const code = `import {
  Empty,
  EmptyAction,
  EmptyDescription,
  EmptyIcon,
  EmptyTitle,
} from "@/components/ui/empty";

export function Demo() {
  return (
    <Empty>
      <EmptyIcon>{/* lucide icon */}</EmptyIcon>
      <EmptyTitle>No messages yet</EmptyTitle>
      <EmptyDescription>Get started by sending a message.</EmptyDescription>
    </Empty>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Empty"
      description="A friendly empty-state pattern with icon, title, description, and optional action — used for empty lists, no-results, and first-run screens."
      code={code}
      install="# no external deps — copy file"
      importPath="components/ui/empty.tsx"
    >
      <EmptyDemo />
    </ComponentDocs>
  );
}
