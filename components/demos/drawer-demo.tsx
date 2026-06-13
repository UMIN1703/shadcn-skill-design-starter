"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerDemo() {
  const [goal, setGoal] = React.useState(350);
  const onClick = (delta: number) =>
    setGoal(Math.max(200, Math.min(400, goal + delta)));

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" className="w-fit">
              Open Drawer
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>
                  Set your daily activity goal.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-8 shrink-0 rounded-full"
                    onClick={() => onClick(-10)}
                    disabled={goal <= 200}
                  >
                    <Minus />
                    <span className="sr-only">Decrease</span>
                  </Button>
                  <div className="flex-1 text-center">
                    <div className="font-mono text-7xl font-bold tracking-tighter">
                      {goal}
                    </div>
                    <div className="text-[0.7rem] uppercase text-muted-foreground">
                      Calories/day
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-8 shrink-0 rounded-full"
                    onClick={() => onClick(10)}
                    disabled={goal >= 400}
                  >
                    <Plus />
                    <span className="sr-only">Increase</span>
                  </Button>
                </div>
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </section>
    </div>
  );
}
