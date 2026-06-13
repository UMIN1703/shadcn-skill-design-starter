import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function FieldDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" placeholder="you@example.com" />
          <FieldDescription>We&apos;ll never share your email.</FieldDescription>
        </Field>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Error
        </h3>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" defaultValue="123" />
          <FieldError>Password must be at least 8 characters.</FieldError>
        </Field>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Field Group
        </h3>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="first">First name</FieldLabel>
            <Input id="first" placeholder="Ada" />
          </Field>
          <Field>
            <FieldLabel htmlFor="last">Last name</FieldLabel>
            <Input id="last" placeholder="Lovelace" />
          </Field>
        </FieldGroup>
      </section>
    </div>
  );
}
