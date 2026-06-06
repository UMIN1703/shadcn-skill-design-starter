import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchDemo() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-8">
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center gap-3">
          <Switch id="airplane-1" />
          <Label htmlFor="airplane-1">Airplane mode</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch id="airplane-2" defaultChecked />
          <Label htmlFor="airplane-2">Airplane mode</Label>
        </div>
      </div>

      <form className="flex flex-col gap-4">
        <p className="text-base font-semibold text-foreground">
          Email Notifications
        </p>
        <div className="flex flex-col gap-4 rounded-lg border border-border p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="grid gap-0.5">
              <Label htmlFor="marketing">Marketing emails</Label>
              <p className="text-sm text-muted-foreground">
                Receive emails about new products, features, and more.
              </p>
            </div>
            <Switch id="marketing" defaultChecked />
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border border-border p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="grid gap-0.5">
              <Label htmlFor="security">Security emails</Label>
              <p className="text-sm text-muted-foreground">
                Receive emails about your account security.
              </p>
            </div>
            <Switch id="security" />
          </div>
        </div>
        <Button type="submit" className="w-fit">
          Submit
        </Button>
      </form>
    </div>
  );
}
