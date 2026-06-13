import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxDemo() {
  const sidebarItems = [
    { id: "recents", label: "Recents", defaultChecked: false },
    { id: "home", label: "Home", defaultChecked: false },
    { id: "applications", label: "Applications", defaultChecked: true },
    { id: "desktop", label: "Desktop", defaultChecked: false },
    { id: "downloads", label: "Downloads", defaultChecked: true },
    { id: "documents", label: "Documents", defaultChecked: false },
  ];

  return (
    <div className="flex w-full max-w-md flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <div className="flex items-center gap-2">
          <Checkbox id="terms-1" />
          <Label htmlFor="terms-1">Accept terms and conditions</Label>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Description
        </h3>
        <div className="flex items-start gap-2">
          <Checkbox id="terms-2" className="mt-0.5" />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="terms-2">Accept terms and conditions</Label>
            <p className="text-sm text-muted-foreground">
              By clicking this checkbox, you agree to the terms and conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Disabled
        </h3>
        <div className="flex items-center gap-2">
          <Checkbox id="notif-disabled" disabled />
          <Label htmlFor="notif-disabled" className="text-muted-foreground">
            Enable notifications
          </Label>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Card
        </h3>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="card-1"
            className="flex items-start gap-3 rounded-lg border border-border bg-background p-4"
          >
            <Checkbox id="card-1" className="mt-0.5" />
            <div className="grid gap-1.5 leading-none">
              <span className="text-sm font-medium text-foreground">
                Enable notifications
              </span>
              <p className="text-sm text-muted-foreground">
                You can enable or disable notifications at any time.
              </p>
            </div>
          </label>
          <label
            htmlFor="card-2"
            className="flex items-start gap-3 rounded-lg border border-border bg-muted/40 p-4"
          >
            <Checkbox id="card-2" defaultChecked className="mt-0.5" />
            <div className="grid gap-1.5 leading-none">
              <span className="text-sm font-medium text-foreground">
                Enable notifications
              </span>
              <p className="text-sm text-muted-foreground">
                You can enable or disable notifications at any time.
              </p>
            </div>
          </label>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Form
        </h3>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-foreground">Sidebar</p>
            <p className="text-sm text-muted-foreground">
              Select the items you want to display in the sidebar.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {sidebarItems.map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <Checkbox id={item.id} defaultChecked={item.defaultChecked} />
                <Label htmlFor={item.id} className="font-normal">
                  {item.label}
                </Label>
              </div>
            ))}
          </div>
          <Button type="submit" className="mt-2 w-fit">
            Submit
          </Button>
        </form>
      </section>
    </div>
  );
}
