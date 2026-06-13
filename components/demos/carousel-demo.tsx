"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function CarouselDemo() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
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
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Multiple Items
        </h3>
        <Carousel
          opts={{ align: "start" }}
          className="w-full max-w-sm"
        >
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
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Vertical
        </h3>
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
      </section>
    </div>
  );
}
