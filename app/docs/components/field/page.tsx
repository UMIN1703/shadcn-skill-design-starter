import type { Metadata } from "next";
import { FieldDemo } from "@/components/demos/field-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Field" };

const code = `import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function Demo() {
  return (
    <Field>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" />
      <FieldDescription>We&apos;ll never share your email.</FieldDescription>
    </Field>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Field"
      description="A lightweight wrapper for label + input + helper/error text — works with any input primitive, without requiring react-hook-form."
      code={code}
      install="# no external deps — copy file"
      importPath="components/ui/field.tsx"
    >
      <FieldDemo />
    </ComponentDocs>
  );
}
