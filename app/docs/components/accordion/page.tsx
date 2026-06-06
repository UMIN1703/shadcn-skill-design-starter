import type { Metadata } from "next";
import { ComponentPreview } from "@/components/component-preview";
import { Faq } from "@/components/faq";

export const metadata: Metadata = {
  title: "Accordion",
};

const usageCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Demo() {
  return (
    <div className="w-full max-w-[543px] rounded-xl border border-border bg-background p-5">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="product-information">
          <AccordionTrigger>Product Information</AccordionTrigger>
          <AccordionContent>
            <p>
              Our flagship product combines cutting-edge technology with sleek
              design.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="shipping-details">
          <AccordionTrigger>Shipping Details</AccordionTrigger>
          <AccordionContent>
            <p>
              We offer worldwide shipping through trusted courier partners.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="return-policy">
          <AccordionTrigger>Return Policy</AccordionTrigger>
          <AccordionContent>
            <p>
              We stand behind our products with a comprehensive 30-day return
              policy.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}`;

const installCode = `npm install @radix-ui/react-accordion`;

export default async function AccordionDocPage() {
  return (
    <article className="flex flex-col gap-10">
      <header className="flex flex-col gap-3 border-b border-border pb-8">
        <p className="text-sm font-medium text-muted-foreground">Components</p>
        <h1 className="font-mono text-4xl font-semibold tracking-tight text-foreground">
          Accordion
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a
          section of content.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-2xl font-semibold text-foreground">
          Preview
        </h2>
        <ComponentPreview code={usageCode}>
          <div className="w-full max-w-[543px] rounded-xl border border-border bg-background p-5">
            <Faq />
          </div>
        </ComponentPreview>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-2xl font-semibold text-foreground">
          Installation
        </h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-muted/30 p-4 font-mono text-sm text-foreground">
          <code>{installCode}</code>
        </pre>
        <p className="text-sm text-muted-foreground">
          Then copy{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            components/ui/accordion.tsx
          </code>{" "}
          into your project.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-2xl font-semibold text-foreground">
          API Reference
        </h2>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-muted/30 text-left">
              <tr>
                <th className="px-4 py-3 font-medium text-foreground">
                  Component
                </th>
                <th className="px-4 py-3 font-medium text-foreground">Prop</th>
                <th className="px-4 py-3 font-medium text-foreground">Type</th>
                <th className="px-4 py-3 font-medium text-foreground">
                  Default
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-foreground">
                  Accordion
                </td>
                <td className="px-4 py-3 font-mono text-xs text-foreground">
                  type
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  &quot;single&quot; | &quot;multiple&quot;
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  —
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-foreground">
                  Accordion
                </td>
                <td className="px-4 py-3 font-mono text-xs text-foreground">
                  collapsible
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  boolean
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  false
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-foreground">
                  AccordionItem
                </td>
                <td className="px-4 py-3 font-mono text-xs text-foreground">
                  value
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  string
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  —
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
