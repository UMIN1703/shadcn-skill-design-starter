import { Kbd, KbdGroup } from "@/components/ui/kbd";

export function KbdDemo() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          <Kbd>⌘</Kbd>
          <Kbd>⌘K</Kbd>
          <Kbd>Esc</Kbd>
          <Kbd>↵</Kbd>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          In Sentence
        </h3>
        <p className="text-sm text-muted-foreground">
          Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Group
        </h3>
        <KbdGroup>
          <Kbd>⇧</Kbd>
          <span className="text-muted-foreground">+</span>
          <Kbd>⌘</Kbd>
          <span className="text-muted-foreground">+</span>
          <Kbd>P</Kbd>
        </KbdGroup>
      </section>
    </div>
  );
}
