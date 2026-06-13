"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";

export function ProgressDemo() {
  const [value, setValue] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setValue(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full max-w-md flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <Progress value={value} />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Steps
        </h3>
        <div className="flex flex-col gap-4">
          <Progress value={25} />
          <Progress value={50} />
          <Progress value={75} />
          <Progress value={100} />
        </div>
      </section>
    </div>
  );
}
