import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export function ToggleDemo() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <Toggle aria-label="Bold">
            <Bold />
          </Toggle>
          <Toggle aria-label="Italic" defaultPressed>
            <Italic />
          </Toggle>
          <Toggle aria-label="Underline" disabled>
            <Underline />
          </Toggle>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Outline
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <Toggle variant="outline" aria-label="Bold">
            <Bold />
          </Toggle>
          <Toggle variant="outline" aria-label="Italic" defaultPressed>
            <Italic />
          </Toggle>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Text
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <Toggle aria-label="Italic">
            <Italic />
            Italic
          </Toggle>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Sizes
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <Toggle size="sm" aria-label="Bold sm">
            <Bold />
          </Toggle>
          <Toggle size="default" aria-label="Bold md">
            <Bold />
          </Toggle>
          <Toggle size="lg" aria-label="Bold lg">
            <Bold />
          </Toggle>
        </div>
      </section>
    </div>
  );
}
