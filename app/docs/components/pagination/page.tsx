import type { Metadata } from "next";
import { PaginationDemo } from "@/components/demos/pagination-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Pagination" };

const code = `import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function Demo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Pagination"
      description="Pagination with page navigation, next and previous links."
      code={code}
      install="# no external deps — copy file"
      importPath="components/ui/pagination.tsx"
    >
      <PaginationDemo />
    </ComponentDocs>
  );
}
