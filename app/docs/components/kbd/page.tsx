import type { Metadata } from "next";
import { KbdDemo } from "@/components/demos/kbd-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Kbd" };

const code = `import { Kbd } from "@/components/ui/kbd";

export function Demo() {
  return <Kbd>⌘K</Kbd>;
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Kbd"
      description="Inline keyboard shortcut indicator for use in tooltips, menus, and command palettes."
      code={code}
      install="# no external deps — copy file"
      importPath="components/ui/kbd.tsx"
    >
      <KbdDemo />
    </ComponentDocs>
  );
}
