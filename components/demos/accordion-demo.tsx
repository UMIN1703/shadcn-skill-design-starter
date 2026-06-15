import { Faq } from "@/components/faq";

export function AccordionDemo() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <div className="w-full max-w-[543px] rounded-xl border border-border bg-background p-5">
          <Faq />
        </div>
      </section>
    </div>
  );
}
