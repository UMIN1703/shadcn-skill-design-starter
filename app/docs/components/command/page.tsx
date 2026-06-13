import type { Metadata } from "next";
import { CommandDemo } from "@/components/demos/command-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Command" };

const code = `import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export function Demo() {
  return (
    <Command>
      <CommandInput placeholder="Type a command…" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>New file</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Command"
      description="A fast, composable command menu — built on cmdk. Used standalone or inside Combobox / command palettes."
      code={code}
      install="npm install cmdk"
      importPath="components/ui/command.tsx"
    >
      <CommandDemo />
    </ComponentDocs>
  );
}
