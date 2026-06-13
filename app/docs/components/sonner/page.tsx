import type { Metadata } from "next";
import { SonnerDemo } from "@/components/demos/sonner-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Sonner" };

const code = `"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
        })
      }
    >
      Show toast
    </Button>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Sonner"
      description="An opinionated toast component built on Sonner. Render the <Toaster /> once in the root layout, then call toast() from anywhere."
      code={code}
      install="npm install sonner"
      importPath="components/ui/sonner.tsx"
    >
      <SonnerDemo />
    </ComponentDocs>
  );
}
