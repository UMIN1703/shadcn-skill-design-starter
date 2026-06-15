import { Label } from "@/components/ui/label";
import { NativeSelect } from "@/components/ui/native-select";

export function NativeSelectDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <NativeSelect defaultValue="apple">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="grapes">Grapes</option>
          <option value="pineapple">Pineapple</option>
        </NativeSelect>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Label
        </h3>
        <div className="grid gap-3">
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
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Grouped
        </h3>
        <div className="grid gap-3">
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
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Error
        </h3>
        <div className="grid gap-2">
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
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Disabled
        </h3>
        <NativeSelect disabled defaultValue="apple">
          <option value="apple">Apple</option>
        </NativeSelect>
      </section>
    </div>
  );
}
