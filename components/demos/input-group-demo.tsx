import { CreditCard, Mail, Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function InputGroupDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Icon Start
        </h3>
        <InputGroup>
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search…" />
        </InputGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Icon Both Sides
        </h3>
        <InputGroup>
          <InputGroupAddon>
            <Mail />
          </InputGroupAddon>
          <InputGroupInput type="email" placeholder="you@example.com" />
          <InputGroupAddon position="end">
            <CreditCard />
          </InputGroupAddon>
        </InputGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Text Addon
        </h3>
        <InputGroup>
          <InputGroupAddon>
            <span className="text-sm">$</span>
          </InputGroupAddon>
          <InputGroupInput type="number" placeholder="0.00" />
          <InputGroupAddon position="end">
            <span className="text-sm">USD</span>
          </InputGroupAddon>
        </InputGroup>
      </section>
    </div>
  );
}
