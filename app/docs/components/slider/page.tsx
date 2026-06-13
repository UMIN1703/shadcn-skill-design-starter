import type { Metadata } from "next";
import { SliderDemo } from "@/components/demos/slider-demo";
import { ComponentDocs } from "@/components/component-docs";

export const metadata: Metadata = { title: "Slider" };

const code = `import { Slider } from "@/components/ui/slider";

export function Demo() {
  return <Slider defaultValue={[33]} max={100} step={1} />;
}`;

export default async function Page() {
  return (
    <ComponentDocs
      title="Slider"
      description="An input where the user selects a value from within a given range."
      code={code}
      install="npm install @radix-ui/react-slider"
      importPath="components/ui/slider.tsx"
    >
      <SliderDemo />
    </ComponentDocs>
  );
}
