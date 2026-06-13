"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioGroupDemo() {
  const [plan, setPlan] = React.useState("free");

  return (
    <div className="flex w-full max-w-md flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="default" id="r-default" />
            <Label htmlFor="r-default">Default</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="comfortable" id="r-comfortable" />
            <Label htmlFor="r-comfortable">Comfortable</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="compact" id="r-compact" disabled />
            <Label htmlFor="r-compact" className="text-muted-foreground">
              Compact (disabled)
            </Label>
          </div>
        </RadioGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Form
        </h3>
        <form className="flex flex-col gap-4">
          <div className="grid gap-2">
            <p className="text-sm font-medium text-foreground">
              Choose your plan
            </p>
            <RadioGroup value={plan} onValueChange={setPlan}>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="free" id="plan-free" />
                <Label htmlFor="plan-free">Free</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="pro" id="plan-pro" />
                <Label htmlFor="plan-pro">Pro</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="enterprise" id="plan-enterprise" />
                <Label htmlFor="plan-enterprise">Enterprise</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-fit">
            Submit
          </Button>
        </form>
      </section>
    </div>
  );
}
