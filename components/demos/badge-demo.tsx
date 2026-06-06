import { CircleCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge>
          <CircleCheck />
          Verified
        </Badge>
        <Badge className="h-5 w-5 justify-center rounded-full p-0">8</Badge>
        <Badge variant="destructive" className="h-6 w-6 justify-center rounded-full p-0">
          99
        </Badge>
        <Badge variant="outline">20+</Badge>
      </div>
    </div>
  );
}
