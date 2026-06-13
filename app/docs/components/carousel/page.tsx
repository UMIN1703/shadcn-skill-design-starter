import type { Metadata } from "next";
import { CarouselDemo } from "@/components/demos/carousel-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Carousel" };

const code = `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Demo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        <CarouselItem>Slide 1</CarouselItem>
        <CarouselItem>Slide 2</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Carousel"
      description="A horizontal/vertical slider with motion and swipe — built on Embla Carousel."
      code={code}
      install="npm install embla-carousel-react"
      importPath="components/ui/carousel.tsx"
    >
      <CarouselDemo />
    </ComponentDocs>
  );
}
