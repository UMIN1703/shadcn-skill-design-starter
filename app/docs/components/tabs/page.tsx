import type { Metadata } from "next";
import { TabsDemo } from "@/components/demos/tabs-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Tabs" };

const code = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Demo() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings</TabsContent>
      <TabsContent value="password">Password settings</TabsContent>
    </Tabs>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Tabs"
      description="A set of layered sections of content — known as tab panels — that are displayed one at a time."
      code={code}
      install="npm install @radix-ui/react-tabs"
      importPath="components/ui/tabs.tsx"
    >
      <TabsDemo />
    </ComponentDocs>
  );
}
