import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

function DefaultCarousel() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={i}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="font-mono text-4xl font-semibold">
                  {i + 1}
                </span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function MultipleItemsCarousel() {
  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="font-mono text-3xl font-semibold">
                  {i + 1}
                </span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function VerticalCarousel() {
  return (
    <div className="py-14">
      <Carousel
        orientation="vertical"
        opts={{ align: "start" }}
        className="w-full max-w-xs"
      >
        <CarouselContent className="-mt-1 h-[200px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <CarouselItem key={i} className="pt-1 md:basis-1/2">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="font-mono text-3xl font-semibold">
                    {i + 1}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

const meta: Meta<typeof DefaultCarousel> = {
  title: "UI/Carousel",
  component: DefaultCarousel,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DefaultCarousel>;

export const Default: Story = {};

export const MultipleItems: Story = { render: () => <MultipleItemsCarousel /> };

export const Vertical: Story = { render: () => <VerticalCarousel /> };

export const NextInteraction: Story = {
  name: "Next slide (QA test)",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const next = canvas.getByRole("button", { name: /next slide/i });
    await userEvent.click(next);
    await expect(next).toBeEnabled();
  },
};
