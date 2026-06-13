import { FileX, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyAction,
  EmptyDescription,
  EmptyIcon,
  EmptyTitle,
} from "@/components/ui/empty";

export function EmptyDemo() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <Empty>
          <EmptyIcon>
            <Inbox />
          </EmptyIcon>
          <EmptyTitle>No messages yet</EmptyTitle>
          <EmptyDescription>
            When someone sends you a message, it&apos;ll show up here.
          </EmptyDescription>
        </Empty>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Action
        </h3>
        <Empty>
          <EmptyIcon>
            <FileX />
          </EmptyIcon>
          <EmptyTitle>No files found</EmptyTitle>
          <EmptyDescription>
            Get started by uploading your first file.
          </EmptyDescription>
          <EmptyAction>
            <Button>Upload file</Button>
            <Button variant="outline">Browse templates</Button>
          </EmptyAction>
        </Empty>
      </section>
    </div>
  );
}
