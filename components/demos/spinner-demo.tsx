import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export function SpinnerDemo() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Sizes
        </h3>
        <div className="flex items-center gap-6">
          <Spinner size="sm" />
          <Spinner size="default" />
          <Spinner size="lg" />
          <Spinner size="xl" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          In Button
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button disabled>
            <Spinner size="sm" />
            Please wait
          </Button>
          <Button variant="outline" disabled>
            <Spinner size="sm" />
            Loading
          </Button>
          <Button variant="ghost" disabled>
            <Spinner size="sm" />
            Saving
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          In Card
        </h3>
        <div className="flex h-32 w-full max-w-md items-center justify-center rounded-lg border border-border bg-background">
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <Spinner size="lg" />
            <span className="text-sm">Loading data…</span>
          </div>
        </div>
      </section>
    </div>
  );
}
