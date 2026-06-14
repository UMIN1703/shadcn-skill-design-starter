import type { Metadata } from "next";
import { AlertDemo } from "@/components/demos/alert-demo";
import { ComponentPreview } from "@/components/component-preview";

export const metadata: Metadata = {
  title: "Alert",
};

const usageCode = `import { CircleCheck } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

export function Demo() {
  return (
    <Alert>
      <CircleCheck />
      <AlertTitle>Success! Your changes have been saved</AlertTitle>
      <AlertDescription>
        This is an alert with icon, title and description.
      </AlertDescription>
    </Alert>
  );
}`;

const destructiveCode = `<Alert variant="destructive">
  <CircleAlert />
  <AlertTitle>Unable to process your payment.</AlertTitle>
  <AlertDescription>
    Please verify your billing information and try again.
  </AlertDescription>
</Alert>`;

const installCode = `npm install class-variance-authority lucide-react`;

export default async function AlertDocPage() {
  return (
    <article className="flex flex-col gap-10">
      <header className="flex flex-col gap-3 border-b border-border pb-8">
        <p className="text-sm font-medium text-muted-foreground">Components</p>
        <h1 className="font-mono text-4xl font-semibold tracking-tight text-foreground">
          Alert
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          Displays a callout for user attention. Includes default and
          destructive variants, with optional icon, title, and description
          slots.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-2xl font-semibold text-foreground">
          Preview
        </h2>
        <ComponentPreview code={usageCode}>
          <AlertDemo />
        </ComponentPreview>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-2xl font-semibold text-foreground">
          Destructive
        </h2>
        <p className="text-sm text-muted-foreground">
          Use the <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">destructive</code> variant for errors and failed actions.
        </p>
        <pre className="overflow-x-auto rounded-lg border border-border bg-muted/30 p-4 font-mono text-xs leading-relaxed text-foreground">
          <code>{destructiveCode}</code>
        </pre>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-2xl font-semibold text-foreground">
          Installation
        </h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-muted/30 p-4 font-mono text-sm text-foreground">
          <code>{installCode}</code>
        </pre>
        <p className="text-sm text-muted-foreground">
          Then copy{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            components/ui/alert.tsx
          </code>{" "}
          into your project.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-2xl font-semibold text-foreground">
          API Reference
        </h2>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-muted/30 text-left">
              <tr>
                <th className="px-4 py-3 font-medium text-foreground">
                  Component
                </th>
                <th className="px-4 py-3 font-medium text-foreground">Prop</th>
                <th className="px-4 py-3 font-medium text-foreground">Type</th>
                <th className="px-4 py-3 font-medium text-foreground">
                  Default
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs text-foreground">Alert</td>
                <td className="px-4 py-3 font-mono text-xs text-foreground">variant</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  &quot;default&quot; | &quot;destructive&quot;
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  &quot;default&quot;
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs text-foreground">AlertTitle</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">—</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">—</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">—</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-foreground">AlertDescription</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">—</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">—</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
