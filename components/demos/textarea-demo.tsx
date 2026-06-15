import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <Textarea placeholder="Type your message here." />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Disabled
        </h3>
        <Textarea placeholder="Type your message here." disabled />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Label
        </h3>
        <div className="grid gap-3">
          <Label htmlFor="message">Your message</Label>
          <Textarea id="message" placeholder="Type your message here." />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Form
        </h3>
        <form className="grid gap-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us a little about yourself" />
          <p className="text-sm text-muted-foreground">
            You can <span className="font-medium">@mention</span> other users
            and organizations.
          </p>
          <Button type="submit" className="mt-4 w-fit">
            Submit
          </Button>
        </form>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Action
        </h3>
        <div className="relative">
          <Textarea
            placeholder="Type a message..."
            className="resize-none pr-14"
            rows={3}
          />
          <Button
            type="button"
            size="icon"
            className="absolute bottom-2 right-2 size-8"
            aria-label="Send message"
          >
            <Send className="size-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
