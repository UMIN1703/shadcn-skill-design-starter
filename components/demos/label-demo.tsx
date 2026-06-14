import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function LabelDemo() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Checkbox
        </h3>
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </section>
    </div>
  );
}
