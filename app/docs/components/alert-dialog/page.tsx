import type { Metadata } from "next";
import { AlertDialogDemo } from "@/components/demos/alert-dialog-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Alert Dialog" };

const code = `import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function Demo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Alert Dialog"
      description="A modal dialog that interrupts the user with important content and expects a response. Use for destructive confirmations."
      code={code}
      install="npm install @radix-ui/react-alert-dialog"
      importPath="components/ui/alert-dialog.tsx"
    >
      <AlertDialogDemo />
    </ComponentDocs>
  );
}
