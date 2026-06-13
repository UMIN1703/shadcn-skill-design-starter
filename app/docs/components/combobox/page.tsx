import type { Metadata } from "next";
import { ComboboxDemo } from "@/components/demos/combobox-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Combobox" };

const code = `"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Demo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {value || "Select…"} <ChevronsUpDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput placeholder="Search…" />
          <CommandList>
            <CommandEmpty>No results.</CommandEmpty>
            <CommandGroup>
              <CommandItem onSelect={setValue}>Next.js</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Combobox"
      description="An autocomplete input + selectable list. Composed from Popover + Command — no standalone primitive."
      code={code}
      install="npm install @radix-ui/react-popover cmdk"
      importPath="components/ui/popover.tsx + components/ui/command.tsx"
    >
      <ComboboxDemo />
    </ComponentDocs>
  );
}
