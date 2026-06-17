import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "@/components/ui/label";
import { NativeSelect } from "@/components/ui/native-select";

const meta: Meta<typeof NativeSelect> = {
  title: "UI/NativeSelect",
  component: NativeSelect,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NativeSelect>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <NativeSelect defaultValue="apple">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="grapes">Grapes</option>
        <option value="pineapple">Pineapple</option>
      </NativeSelect>
    </div>
  ),
};

export const WithLabel: Story = {
  name: "With Label",
  render: () => (
    <div className="grid w-full max-w-sm gap-3">
      <Label htmlFor="fruit">Favorite fruit</Label>
      <NativeSelect id="fruit" defaultValue="">
        <option value="" disabled>
          Choose a fruit…
        </option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="grapes">Grapes</option>
      </NativeSelect>
    </div>
  ),
};

export const Grouped: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-3">
      <Label htmlFor="department">Department</Label>
      <NativeSelect id="department" defaultValue="">
        <option value="" disabled>
          Choose a department…
        </option>
        <optgroup label="Engineering">
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="devops">DevOps</option>
        </optgroup>
        <optgroup label="Design">
          <option value="product">Product Design</option>
          <option value="brand">Brand</option>
        </optgroup>
        <optgroup label="Operations">
          <option value="ops">Operations</option>
          <option value="finance">Finance</option>
        </optgroup>
      </NativeSelect>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="fruit-error">Favorite fruit</Label>
      <NativeSelect
        id="fruit-error"
        defaultValue=""
        aria-invalid
        className="border-destructive ring-destructive/20 focus-visible:ring-destructive/40"
      >
        <option value="" disabled>
          Choose a fruit…
        </option>
        <option value="apple">Apple</option>
      </NativeSelect>
      <p className="text-sm font-medium text-destructive">
        Please select a fruit to continue.
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <NativeSelect disabled defaultValue="apple">
        <option value="apple">Apple</option>
      </NativeSelect>
    </div>
  ),
};
