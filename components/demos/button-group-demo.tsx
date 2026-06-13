import { Bold, ChevronDown, Italic, Plus, Underline } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export function ButtonGroupDemo() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <ButtonGroup>
          <Button variant="outline">Years</Button>
          <Button variant="outline">Months</Button>
          <Button variant="outline">Weeks</Button>
        </ButtonGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Icon Group
        </h3>
        <ButtonGroup>
          <Button variant="outline" size="icon" aria-label="Bold">
            <Bold />
          </Button>
          <Button variant="outline" size="icon" aria-label="Italic">
            <Italic />
          </Button>
          <Button variant="outline" size="icon" aria-label="Underline">
            <Underline />
          </Button>
        </ButtonGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Split
        </h3>
        <ButtonGroup>
          <Button variant="secondary">Button</Button>
          <Button variant="secondary" size="icon" aria-label="Add">
            <Plus />
          </Button>
        </ButtonGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Primary with menu
        </h3>
        <ButtonGroup>
          <Button>Save</Button>
          <Button size="icon" aria-label="More options">
            <ChevronDown />
          </Button>
        </ButtonGroup>
      </section>
    </div>
  );
}
