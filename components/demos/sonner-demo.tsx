"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function SonnerDemo() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <Button
          variant="outline"
          className="w-fit"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
            })
          }
        >
          Show toast
        </Button>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Success
        </h3>
        <Button
          variant="outline"
          className="w-fit"
          onClick={() => toast.success("Profile updated successfully")}
        >
          Show success
        </Button>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Error
        </h3>
        <Button
          variant="outline"
          className="w-fit"
          onClick={() =>
            toast.error("Unable to save changes", {
              description: "Please check your connection and try again.",
            })
          }
        >
          Show error
        </Button>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Action
        </h3>
        <Button
          variant="outline"
          className="w-fit"
          onClick={() =>
            toast("Event has been created", {
              action: {
                label: "Undo",
                onClick: () => toast("Undone"),
              },
            })
          }
        >
          Show with action
        </Button>
      </section>
    </div>
  );
}
