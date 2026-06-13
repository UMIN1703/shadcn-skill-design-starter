import type { Metadata } from "next";
import { BreadcrumbDemo } from "@/components/demos/breadcrumb-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Breadcrumb" };

const code = `import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function Demo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Current</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Breadcrumb"
      description="Displays the path to the current resource using a hierarchy of links."
      code={code}
      install="# no external deps — copy file"
      importPath="components/ui/breadcrumb.tsx"
    >
      <BreadcrumbDemo />
    </ComponentDocs>
  );
}
