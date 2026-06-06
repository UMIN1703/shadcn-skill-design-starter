import type { Metadata } from "next";
import { DialogDemo } from "@/components/demos/dialog-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Dialog" };

const code = `import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Demo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes here.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Dialog"
      description="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
      code={code}
      install="npm install @radix-ui/react-dialog lucide-react"
      importPath="components/ui/dialog.tsx"
    >
      <DialogDemo />
    </ComponentDocs>
  );
}
