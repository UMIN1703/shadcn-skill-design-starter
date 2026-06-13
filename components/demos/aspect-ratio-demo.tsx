import { AspectRatio } from "@/components/ui/aspect-ratio";

export function AspectRatioDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          16 / 9
        </h3>
        <div className="w-full overflow-hidden rounded-lg border border-border">
          <AspectRatio ratio={16 / 9}>
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/40 to-accent">
              <span className="font-mono text-sm text-foreground">16 : 9</span>
            </div>
          </AspectRatio>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          4 / 3
        </h3>
        <div className="w-full overflow-hidden rounded-lg border border-border">
          <AspectRatio ratio={4 / 3}>
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <span className="font-mono text-sm text-muted-foreground">
                4 : 3
              </span>
            </div>
          </AspectRatio>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Square
        </h3>
        <div className="w-full max-w-xs overflow-hidden rounded-lg border border-border">
          <AspectRatio ratio={1}>
            <div className="flex h-full w-full items-center justify-center bg-foreground text-background">
              <span className="font-mono text-sm">1 : 1</span>
            </div>
          </AspectRatio>
        </div>
      </section>
    </div>
  );
}
