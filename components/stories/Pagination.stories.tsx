import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function DefaultPagination() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

const meta: Meta<typeof DefaultPagination> = {
  title: "UI/Pagination",
  component: DefaultPagination,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DefaultPagination>;

export const Default: Story = {};

export const PageClickInteraction: Story = {
  name: "Click page link (QA test)",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const page3 = canvas.getByRole("link", { name: "3" });
    await userEvent.click(page3);
    await expect(page3).toBeVisible();
  },
};
