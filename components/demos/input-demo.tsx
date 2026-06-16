import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <div className="flex flex-col gap-4">
          <Input placeholder="Email" />
          <Input placeholder="Email" disabled />
          <Input defaultValue="Email" disabled />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          File
        </h3>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="picture">Picture</Label>
          <label
            htmlFor="picture"
            className="flex h-9 w-full cursor-pointer items-center rounded-md border border-border bg-background px-3 py-1 text-sm shadow-sm"
          >
            <span className="pr-1">
              <span className="block px-1.5 py-px font-medium text-foreground">
                Choose File
              </span>
            </span>
            <span className="text-muted-foreground">No file chosen</span>
            <input id="picture" type="file" className="sr-only" />
          </label>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Button
        </h3>
        <div className="flex items-center gap-2">
          <Input placeholder="Email" />
          <Button variant="outline">Subscribe</Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Invalid
        </h3>
        <div className="grid gap-2">
          <Label htmlFor="invalid-email">Email</Label>
          <Input
            id="invalid-email"
            type="email"
            defaultValue="not-an-email"
            aria-invalid
            aria-describedby="invalid-email-msg"
          />
          <p id="invalid-email-msg" className="text-sm text-destructive">
            Please enter a valid email address.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Form
        </h3>
        <form className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="shadcn" />
          <p className="text-sm text-muted-foreground">
            This is your public display name.
          </p>
          <Button type="submit" className="mt-4 w-fit">
            Submit
          </Button>
        </form>
      </section>
    </div>
  );
}
