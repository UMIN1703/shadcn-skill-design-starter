import type { Metadata } from "next";
import { TooltipDemo } from "@/components/demos/tooltip-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Tooltip" };

const code = `import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Demo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>Add to library</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Tooltip"
      description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
      code={code}
      install="npm install @radix-ui/react-tooltip"
      importPath="components/ui/tooltip.tsx"
    >
      <TooltipDemo />
    </ComponentDocs>
  );
}
