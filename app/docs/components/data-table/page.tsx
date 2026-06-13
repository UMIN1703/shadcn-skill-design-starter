import type { Metadata } from "next";
import { DataTableDemo } from "@/components/demos/data-table-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Data Table" };

const code = `"use client";

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Demo({ data, columns }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((g) => (
          <TableRow key={g.id}>
            {g.headers.map((h) => (
              <TableHead key={h.id}>
                {flexRender(h.column.columnDef.header, h.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((c) => (
              <TableCell key={c.id}>
                {flexRender(c.column.columnDef.cell, c.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Data Table"
      description="A sortable, paginated table built on top of the Table primitive using TanStack Table for headless logic."
      code={code}
      install="npm install @tanstack/react-table"
      importPath="components/ui/table.tsx + per-feature data-table file"
    >
      <DataTableDemo />
    </ComponentDocs>
  );
}
