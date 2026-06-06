import type { Metadata } from "next";
import { DropdownMenuDemo } from "@/components/demos/dropdown-menu-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Dropdown Menu" };

const code = `import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Demo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My account</DropdownMenuLabel>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Dropdown Menu"
      description="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
      code={code}
      install="npm install @radix-ui/react-dropdown-menu lucide-react"
      importPath="components/ui/dropdown-menu.tsx"
    >
      <DropdownMenuDemo />
    </ComponentDocs>
  );
}
