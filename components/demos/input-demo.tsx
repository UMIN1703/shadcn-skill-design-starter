import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Input placeholder="Email" />
        <Input placeholder="Email" autoFocus />
        <Input placeholder="Email" disabled />
        <Input placeholder="Email" className="bg-muted" />
      </div>

      <div className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
      </div>

      <Input placeholder="Email" />

      <div className="flex flex-col gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email-a">Email</Label>
          <Input id="email-a" placeholder="Email" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email-b">Email</Label>
          <Input id="email-b" placeholder="Email" autoFocus />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Input placeholder="Email" />
          <Button variant="outline">Subscribe</Button>
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Email" />
          <Button variant="outline">Subscribe</Button>
        </div>
      </div>

      <form className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="username-a">Username</Label>
          <Input id="username-a" defaultValue="shadcn" />
          <p className="text-sm text-muted-foreground">
            This is your public display name.
          </p>
          <Button type="submit" className="w-fit">
            Submit
          </Button>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="username-b">Username</Label>
          <Input id="username-b" defaultValue="shadcn" />
          <p className="text-sm text-muted-foreground">
            This is your public display name.
          </p>
          <Button type="submit" className="w-fit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
