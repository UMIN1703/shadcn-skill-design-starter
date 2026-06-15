import { Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";

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

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Status Badges
        </h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="gap-1.5 font-normal">
            <Spinner size="sm" />
            Syncing
          </Badge>
          <Badge variant="outline" className="gap-1.5 font-normal">
            <Spinner size="sm" />
            Updating
          </Badge>
          <Badge variant="outline" className="gap-1.5 font-normal">
            <Spinner size="sm" />
            Processing
          </Badge>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Input Validating
        </h3>
        <div className="relative w-full max-w-md">
          <Textarea
            placeholder="Type a message..."
            className="resize-none pr-14"
            rows={3}
          />
          <Button
            type="button"
            size="icon"
            className="absolute bottom-2 right-2 size-8"
            aria-label="Send message"
            disabled
          >
            <Send className="size-4" />
          </Button>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Spinner size="sm" />
            Validating…
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Download Progress
        </h3>
        <div className="flex w-full max-w-md flex-col gap-3 rounded-lg border border-border bg-background p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Spinner size="default" />
              <div className="grid">
                <span className="text-sm font-medium">design-assets.zip</span>
                <span className="text-xs text-muted-foreground">
                  12.4 MB of 28.0 MB
                </span>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              Cancel
            </Button>
          </div>
          <Progress value={44} />
        </div>
      </section>
    </div>
  );
}
