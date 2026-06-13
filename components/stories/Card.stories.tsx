import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Login: Story = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link" className="px-0">
            Sign up
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Email" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full">Login</Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const SimpleStats: Story = {
  name: "Simple Stats",
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardDescription>Total revenue</CardDescription>
        <CardTitle className="font-mono text-3xl">$45,231.89</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          +20.1% from last month
        </p>
      </CardContent>
    </Card>
  ),
};
