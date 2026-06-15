import { ChevronRight, GitBranch, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Variants
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button>Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Sizes
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Next">
            <ChevronRight />
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Icon
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="icon" variant="outline" aria-label="Next">
            <ChevronRight />
          </Button>
          <Button variant="outline">
            <GitBranch /> New Branch
          </Button>
          <Button disabled>
            <Loader2 className="animate-spin" /> Please wait
          </Button>
        </div>
      </section>
    </div>
  );
}
