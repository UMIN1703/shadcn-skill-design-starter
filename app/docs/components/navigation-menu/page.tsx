import type { Metadata } from "next";
import { NavigationMenuDemo } from "@/components/demos/navigation-menu-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Navigation Menu" };

const code = `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Demo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Navigation Menu"
      description="A collection of links for navigating websites."
      code={code}
      install="npm install @radix-ui/react-navigation-menu"
      importPath="components/ui/navigation-menu.tsx"
    >
      <NavigationMenuDemo />
    </ComponentDocs>
  );
}
