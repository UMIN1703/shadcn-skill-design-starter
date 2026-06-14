import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

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
          Multi-column
        </h3>
        <div className="grid grid-cols-3 gap-3">
          <Field>
            <FieldLabel htmlFor="card-month">Month</FieldLabel>
            <Select>
              <SelectTrigger id="card-month">
                <SelectValue placeholder="MM" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }).map((_, i) => (
                  <SelectItem key={i} value={String(i + 1).padStart(2, "0")}>
                    {String(i + 1).padStart(2, "0")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="card-year">Year</FieldLabel>
            <Select>
              <SelectTrigger id="card-year">
                <SelectValue placeholder="YYYY" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 8 }).map((_, i) => (
                  <SelectItem key={i} value={String(2026 + i)}>
                    {2026 + i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="card-cvv">CVV</FieldLabel>
            <Input id="card-cvv" placeholder="123" />
          </Field>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Checkbox
        </h3>
        <Field>
          <FieldLabel>Billing Address</FieldLabel>
          <FieldDescription>
            The billing address associated with your payment method.
          </FieldDescription>
          <div className="flex items-center gap-2 pt-1">
            <Checkbox id="same-as-shipping" defaultChecked />
            <Label htmlFor="same-as-shipping" className="font-normal">
              Same as shipping address
            </Label>
          </div>
        </Field>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Textarea
        </h3>
        <Field>
          <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
          <Textarea
            id="feedback"
            placeholder="Your feedback helps us improve..."
          />
          <FieldDescription>
            Share your thoughts about our service.
          </FieldDescription>
        </Field>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Radio Group
        </h3>
        <Field>
          <FieldLabel>Subscription Plan</FieldLabel>
          <FieldDescription>
            Yearly and lifetime plans offer significant savings.
          </FieldDescription>
          <RadioGroup defaultValue="monthly" className="gap-2 pt-1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="monthly" id="plan-monthly" />
              <Label htmlFor="plan-monthly" className="font-normal">
                Monthly ($9.99/month)
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="yearly" id="plan-yearly" />
              <Label htmlFor="plan-yearly" className="font-normal">
                Yearly ($99.99/year)
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="lifetime" id="plan-lifetime" />
              <Label htmlFor="plan-lifetime" className="font-normal">
                Lifetime ($299.99)
              </Label>
            </div>
          </RadioGroup>
        </Field>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Inline Switch
        </h3>
        <Field className="flex flex-row items-start justify-between gap-4">
          <div className="grid gap-1">
            <FieldLabel htmlFor="mfa">Multi-factor authentication</FieldLabel>
            <FieldDescription>
              Enable multi-factor authentication. If you do not have a
              two-factor device, you can use a one-time code sent to your
              email.
            </FieldDescription>
          </div>
          <Switch id="mfa" defaultChecked />
        </Field>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Field Group
        </h3>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="street">Street Address</FieldLabel>
            <Input id="street" placeholder="123 Main St" />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <Input id="city" placeholder="San Francisco" />
            </Field>
            <Field>
              <FieldLabel htmlFor="postal">Postal Code</FieldLabel>
              <Input id="postal" placeholder="94103" />
            </Field>
          </div>
          <div className="flex gap-2 pt-2">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </div>
        </FieldGroup>
      </section>
    </div>
  );
}
