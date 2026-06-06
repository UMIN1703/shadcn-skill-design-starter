import type { Metadata } from "next";
import { SwitchDemo } from "@/components/demos/switch-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Switch" };

const code = `import { Switch } from "@/components/ui/switch";

export function Demo() {
  return (
    <div className="flex items-center gap-3">
      <Switch id="airplane" />
      <label htmlFor="airplane">Airplane mode</label>
    </div>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Switch"
      description="A control that allows the user to toggle between checked and not checked."
      code={code}
      install="npm install @radix-ui/react-switch"
      importPath="components/ui/switch.tsx"
    >
      <SwitchDemo />
    </ComponentDocs>
  );
}
