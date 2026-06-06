import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function LabelDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="terms-1" />
        <Label htmlFor="terms-1">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="terms-2" defaultChecked />
        <Label htmlFor="terms-2">Accept terms and conditions</Label>
      </div>
    </div>
  );
}
