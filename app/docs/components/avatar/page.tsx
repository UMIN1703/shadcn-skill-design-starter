import type { Metadata } from "next";
import { AvatarDemo } from "@/components/demos/avatar-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Avatar" };

const code = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Demo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Avatar"
      description="An image element with a fallback for representing the user."
      code={code}
      install="npm install @radix-ui/react-avatar"
      importPath="components/ui/avatar.tsx"
    >
      <AvatarDemo />
    </ComponentDocs>
  );
}
