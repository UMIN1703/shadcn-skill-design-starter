import { ChevronRight, GitBranch, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-3">
        <Button>Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="icon" variant="outline">
          <ChevronRight />
        </Button>
        <Button variant="outline">
          <GitBranch /> New Branch
        </Button>
        <Button disabled>
          <Loader2 className="animate-spin" /> Please wait
        </Button>
      </div>
    </div>
  );
}
