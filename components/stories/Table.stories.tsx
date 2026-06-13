import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { invoice: "INV003", status: "Unpaid", method: "Bank", amount: "$350.00" },
];

function InvoiceTable() {
  return (
    <Table className="w-full max-w-xl">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((i) => (
          <TableRow key={i.invoice}>
            <TableCell className="font-medium">{i.invoice}</TableCell>
            <TableCell>{i.status}</TableCell>
            <TableCell>{i.method}</TableCell>
            <TableCell className="text-right">{i.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

const meta: Meta<typeof InvoiceTable> = {
  title: "UI/Table",
  component: InvoiceTable,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InvoiceTable>;

export const Invoices: Story = {};

export const RowCount: Story = {
  name: "Row count (QA test)",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rows = canvas.getAllByRole("row");
    // header + 3 body + 1 footer = 5
    await expect(rows.length).toBe(5);
  },
};
