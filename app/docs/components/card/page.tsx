import type { Metadata } from "next";
import { CardDemo } from "@/components/demos/card-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Card" };

const code = `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Demo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login</CardDescription>
      </CardHeader>
      <CardContent>{/* form fields */}</CardContent>
      <CardFooter>
        <Button>Login</Button>
      </CardFooter>
    </Card>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Card"
      description="Displays a card with header, content, and footer. Composable slots: CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter."
      code={code}
      install="# no external deps — copy file"
      importPath="components/ui/card.tsx"
    >
      <CardDemo />
    </ComponentDocs>
  );
}
