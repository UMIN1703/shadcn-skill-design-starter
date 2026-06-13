import type { Metadata } from "next";
import { InputOTPDemo } from "@/components/demos/input-otp-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Input OTP" };

const code = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function Demo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Input OTP"
      description="Accessible one-time-password input with copy paste handling."
      code={code}
      install="npm install input-otp"
      importPath="components/ui/input-otp.tsx"
    >
      <InputOTPDemo />
    </ComponentDocs>
  );
}
