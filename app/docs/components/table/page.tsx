import type { Metadata } from "next";
import { TableDemo } from "@/components/demos/table-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Table" };

const code = `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Demo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Table"
      description="A responsive table component for displaying structured row-based data."
      code={code}
      install="# no external deps — copy file"
      importPath="components/ui/table.tsx"
    >
      <TableDemo />
    </ComponentDocs>
  );
}
