"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibleDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex w-full max-w-md flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <Collapsible open={open} onOpenChange={setOpen} className="grid gap-2">
          <div className="flex items-center justify-between gap-4">
            <h4 className="text-sm font-semibold">
              @peduarte starred 3 repositories
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon" className="size-7">
                <ChevronsUpDown />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border border-border px-4 py-2 text-sm">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="grid gap-2">
            <div className="rounded-md border border-border px-4 py-2 text-sm">
              @radix-ui/colors
            </div>
            <div className="rounded-md border border-border px-4 py-2 text-sm">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      </section>
    </div>
  );
}
