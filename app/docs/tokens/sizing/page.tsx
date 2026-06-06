import type { Metadata } from "next";
import { DocsHeader } from "@/components/tokens/docs-header";
import { SectionHeading } from "@/components/tokens/section-heading";
import { SizeBar } from "@/components/tokens/size-bar";
import { heightTokens, maxHeightTokens, maxWidthTokens } from "@/lib/tokens/sizing";

export const metadata: Metadata = {
  title: "Sizing",
};

export default async function SizingTokensPage() {
  return (
    <article className="flex flex-col gap-12">
      <DocsHeader
        section="Design Tokens"
        title="Sizing"
        description="Width and height tokens for fixed and max-constraint sizing."
      />

      <section className="flex flex-col gap-4">
        <SectionHeading
          title="Height"
          count={heightTokens.length}
          description="h-* utilities. Use min-h-screen patterns from layouts; these are for fixed heights."
        />
        <div className="rounded-lg border border-border p-4">
          {heightTokens.map((t) => (
            <SizeBar key={t.name} name={t.name} value={t.value} alias={t.alias} maxBarWidth={260} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading
          title="Max-height"
          count={maxHeightTokens.length}
          description="max-h-* utilities — cap content height so overflow scrolls instead of blowing the layout."
        />
        <div className="rounded-lg border border-border p-4">
          {maxHeightTokens.map((t) => (
            <SizeBar key={t.name} name={t.name} value={t.value} alias={t.alias} maxBarWidth={260} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading
          title="Max-width"
          count={maxWidthTokens.length}
          description="max-w-* utilities including screen-* breakpoint anchors used for page containers."
        />
        <div className="rounded-lg border border-border p-4">
          {maxWidthTokens.map((t) => (
            <SizeBar key={t.name} name={t.name} value={t.value} alias={t.alias} maxBarWidth={400} />
          ))}
        </div>
      </section>
    </article>
  );
}
