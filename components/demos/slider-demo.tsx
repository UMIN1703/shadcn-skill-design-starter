"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function SliderDemo() {
  const [single, setSingle] = React.useState([50]);
  const [range, setRange] = React.useState([20, 80]);

  return (
    <div className="flex w-full max-w-md flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <div className="grid gap-3">
          <Slider defaultValue={[33]} max={100} step={1} aria-label="Volume" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Value
        </h3>
        <div className="grid gap-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="volume">Volume</Label>
            <span className="font-mono text-sm text-muted-foreground">
              {single[0]}
            </span>
          </div>
          <Slider
            id="volume"
            value={single}
            onValueChange={setSingle}
            max={100}
            step={1}
          />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Range
        </h3>
        <div className="grid gap-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="price">Price range</Label>
            <span className="font-mono text-sm text-muted-foreground">
              ${range[0]} – ${range[1]}
            </span>
          </div>
          <Slider
            id="price"
            value={range}
            onValueChange={setRange}
            min={0}
            max={100}
            step={5}
          />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Disabled
        </h3>
        <Slider defaultValue={[50]} max={100} step={1} disabled />
      </section>
    </div>
  );
}
