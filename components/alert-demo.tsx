import { CircleCheck, Trash, CircleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDemo() {
  return (
    <div className="flex w-full max-w-[503px] flex-col gap-6">
      <Alert>
        <CircleCheck />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>

      <Alert>
        <Trash />
        <AlertTitle>This Alert has a title and an icon. No description.</AlertTitle>
      </Alert>

      <Alert variant="destructive">
        <CircleAlert />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          <p>Please verify your billing information and try again.</p>
          <ul>
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
