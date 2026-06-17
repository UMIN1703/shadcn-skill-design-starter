import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

const works = [
  { artist: "Ornella Binni", art: "Abstract series 01" },
  { artist: "Tom Byrom", art: "Abstract series 02" },
  { artist: "Vladimir Malyavko", art: "Abstract series 03" },
  { artist: "Ornella Binni", art: "Abstract series 04" },
  { artist: "Tom Byrom", art: "Abstract series 05" },
];

function VerticalScrollArea() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border border-border">
      <div className="flex flex-col p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag, i) => (
          <div key={tag} className="flex flex-col">
            <div className="py-2 text-sm">{tag}</div>
            {i < tags.length - 1 ? <Separator /> : null}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

function HorizontalScrollArea() {
  return (
    <ScrollArea className="w-full max-w-md whitespace-nowrap rounded-md border border-border">
      <div className="flex w-max gap-4 p-4">
        {works.map((work) => (
          <figure key={work.art} className="shrink-0">
            <div className="h-28 w-40 rounded-md bg-gradient-to-br from-primary/30 to-accent" />
            <figcaption className="pt-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">
                {work.artist}
              </span>{" "}
              · {work.art}
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

const meta: Meta<typeof VerticalScrollArea> = {
  title: "UI/ScrollArea",
  component: VerticalScrollArea,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VerticalScrollArea>;

export const Default: Story = {};

export const Vertical: Story = { render: () => <VerticalScrollArea /> };

export const Horizontal: Story = { render: () => <HorizontalScrollArea /> };
