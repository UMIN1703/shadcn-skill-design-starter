import type { Metadata } from "next";
import { SidebarDemo } from "@/components/demos/sidebar-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Sidebar" };

const code = `import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function Demo() {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarContent>{/* SidebarMenu… */}</SidebarContent>
      </Sidebar>
      <SidebarInset>
        <SidebarTrigger />
      </SidebarInset>
    </SidebarProvider>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Sidebar"
      description="A composable application shell — collapsible aside + main panel, with mobile sheet fallback. Built on Sheet + Separator."
      code={code}
      install="# no external deps — uses existing sheet / separator primitives"
      importPath="components/ui/sidebar.tsx"
    >
      <SidebarDemo />
    </ComponentDocs>
  );
}
