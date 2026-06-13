"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchDemo() {
  const [marketing, setMarketing] = React.useState(true);
  const [security, setSecurity] = React.useState(false);
  const allOff = !marketing && !security;

  return (
    <div className="flex w-full max-w-2xl flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <div className="flex items-center gap-3">
          <Switch id="airplane" />
          <Label htmlFor="airplane">Airplane mode</Label>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Form
        </h3>
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
              <Switch
                id="marketing"
                checked={marketing}
                onCheckedChange={setMarketing}
              />
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
              <Switch
                id="security"
                checked={security}
                onCheckedChange={setSecurity}
              />
            </div>
          </div>
          <Button type="submit" disabled={allOff} className="w-fit">
            Submit
          </Button>
        </form>
      </section>
    </div>
  );
}
