import type { Metadata } from "next";
import { DocsHeader } from "@/components/tokens/docs-header";
import { SectionHeading } from "@/components/tokens/section-heading";
import { SemanticSwatch, ColorSwatch } from "@/components/tokens/color-swatch";
import { rdxColors, shadcnTokens, twColors } from "@/lib/tokens/colors";

export const metadata: Metadata = {
  title: "Colors",
};

const THEMES = ["light", "dark", "primary", "secondary"] as const;

export default async function ColorTokensPage() {
  return (
    <article className="flex flex-col gap-12">
      <DocsHeader
        section="Design Tokens"
        title="Colors"
        description="Semantic shadcn tokens drive every UI surface. Primitive palettes (Tailwind, Radix) are the source — semantic tokens alias into them per theme."
      />

      <section className="flex flex-col gap-6">
        <SectionHeading
          title="Semantic tokens"
          count={shadcnTokens.length}
          description="Each token resolves to a different primitive in each of the 4 themes. Use these (e.g. bg-background, text-muted-foreground) in components — never the primitives directly."
        />
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="grid grid-cols-[200px_1fr_1fr_1fr_1fr] gap-4 border-b border-border bg-muted/30 px-4 py-3 text-xs font-medium text-foreground">
            <span>Token</span>
            {THEMES.map((theme) => (
              <span key={theme} className="capitalize">
                {theme}
              </span>
            ))}
          </div>
          {shadcnTokens.map((token, i) => (
            <div
              key={token.name}
              className={
                "grid grid-cols-[200px_1fr_1fr_1fr_1fr] items-center gap-4 px-4 py-4" +
                (i === shadcnTokens.length - 1 ? "" : " border-b border-border")
              }
            >
              <code className="font-mono text-xs text-foreground">{token.name}</code>
              <SemanticSwatch hex={token.light.hex} alias={token.light.alias} />
              <SemanticSwatch hex={token.dark.hex} alias={token.dark.alias} />
              <SemanticSwatch hex={token.primary.hex} alias={token.primary.alias} />
              <SemanticSwatch hex={token.secondary.hex} alias={token.secondary.alias} />
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeading
          title="Tailwind palette"
          count={Object.values(twColors).reduce((acc, items) => acc + items.length, 0)}
          description="Tailwind CSS standard palette. Semantic tokens alias into these for Light, Dark, Primary, and Secondary themes."
        />
        <div className="flex flex-col gap-8">
          {Object.entries(twColors).map(([family, items]) => (
            <div key={family} className="flex flex-col gap-3">
              <h3 className="font-mono text-sm font-semibold text-foreground">{family}</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                {items.map((item) => (
                  <ColorSwatch
                    key={item.name}
                    hex={item.hex}
                    name={item.name}
                    step={item.step}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeading
          title="Radix palette"
          count={Object.values(rdxColors).reduce((acc, items) => acc + items.length, 0)}
          description="Radix UI color system. 12-step scales used for chart and sidebar accents. Alpha variants for translucent borders."
        />
        <div className="flex flex-col gap-8">
          {Object.entries(rdxColors).map(([family, items]) => (
            <div key={family} className="flex flex-col gap-3">
              <h3 className="font-mono text-sm font-semibold text-foreground">{family}</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
                {items.map((item) => (
                  <ColorSwatch
                    key={item.name}
                    hex={item.hex}
                    name={item.name}
                    step={item.step}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
