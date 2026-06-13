import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const schema = z.object({
  username: z.string().min(2, { message: "At least 2 characters." }),
});

function ProfileForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { username: "" },
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => {})}
        className="flex w-80 flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit">
          Submit
        </Button>
      </form>
    </Form>
  );
}

const meta: Meta<typeof ProfileForm> = {
  title: "UI/Form",
  component: ProfileForm,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProfileForm>;

export const Profile: Story = {};

export const ValidationError: Story = {
  name: "Validation error (QA test)",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submit = canvas.getByRole("button", { name: /submit/i });
    await userEvent.click(submit);
    const msg = await canvas.findByText(/at least 2 characters/i);
    await expect(msg).toBeVisible();
  },
};
