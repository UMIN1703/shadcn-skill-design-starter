import { Separator } from "@/components/ui/separator";

export function SeparatorDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Horizontal
        </h3>
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-sm font-medium leading-none">
              Radix Primitives
            </h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Separator />
          <div className="flex h-5 items-center gap-4 text-sm">
            <span>Blog</span>
            <Separator orientation="vertical" />
            <span>Docs</span>
            <Separator orientation="vertical" />
            <span>Source</span>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Heading
        </h3>
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold">Account</h4>
          <Separator />
          <p className="text-sm text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>
      </section>
    </div>
  );
}
