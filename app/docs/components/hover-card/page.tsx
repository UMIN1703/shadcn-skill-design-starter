import type { Metadata } from "next";
import { HoverCardDemo } from "@/components/demos/hover-card-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Hover Card" };

const code = `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function Demo() {
  return (
    <HoverCard>
      <HoverCardTrigger>@nextjs</HoverCardTrigger>
      <HoverCardContent>The React Framework.</HoverCardContent>
    </HoverCard>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Hover Card"
      description="A rich preview card that appears when a user hovers a trigger — typically used for usernames, links, or terms that benefit from extra context."
      code={code}
      install="npm install @radix-ui/react-hover-card"
      importPath="components/ui/hover-card.tsx"
    >
      <HoverCardDemo />
    </ComponentDocs>
  );
}
