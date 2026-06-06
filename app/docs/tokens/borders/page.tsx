import type { Metadata } from "next";
import { DocsHeader } from "@/components/tokens/docs-header";
import { SectionHeading } from "@/components/tokens/section-heading";
import { borderRadiusTokens, borderWidthTokens } from "@/lib/tokens/borders";

export const metadata: Metadata = {
  title: "Borders",
};

const RADIUS_SIZES = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "none", "full"];

function radiusBySize(size: string) {
  return borderRadiusTokens.filter((t) => {
    const tail = t.name.split("-").pop() ?? "";
    return tail === size;
  });
}

export default async function BordersTokensPage() {
  return (
    <article className="flex flex-col gap-12">
      <DocsHeader
        section="Design Tokens"
        title="Borders"
        description="Border radius and border width tokens. All directional variants exported from Figma."
      />

      <section className="flex flex-col gap-4">
        <SectionHeading
          title="Border radius — core sizes"
          count={RADIUS_SIZES.length}
          description="The shared radius scale. Directional variants below alias into these same values."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {RADIUS_SIZES.map((size) => {
            const all = radiusBySize(size);
            const base = all.find((t) => t.name === `rounded-${size}`);
            const value = base?.value ?? 0;
            return (
              <div
                key={size}
                className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-4"
              >
                <div
                  className="flex h-20 w-20 items-center justify-center border-2 border-foreground/20 bg-foreground/5"
                  style={{ borderRadius: value === 9999 ? "9999px" : `${value}px` }}
                />
                <div className="text-center">
                  <p className="font-mono text-xs font-medium text-foreground">
                    rounded-{size}
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground">
                    {value === 9999 ? "9999px" : `${value}px`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading
          title="Border radius — all directions"
          count={borderRadiusTokens.length}
          description="rounded-* with directional suffixes — t (top), r (right), b (bottom), l (left), tl, tr, br, bl, plus logical s/e variants."
        />
        <details className="rounded-lg border border-border bg-muted/20">
          <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-medium text-foreground">
            <span>Show all {borderRadiusTokens.length} tokens</span>
            <span className="text-xs text-muted-foreground">Click to expand</span>
          </summary>
          <div className="border-t border-border bg-background p-4">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {borderRadiusTokens.map((t) => (
                <div
                  key={t.name}
                  className="flex items-center gap-3 border-b border-border py-2 last:border-b-0"
                >
                  <div
                    className="h-8 w-8 shrink-0 border border-foreground/20 bg-foreground/5"
                    style={{
                      borderRadius: t.value === 9999 ? "9999px" : `${t.value}px`,
                    }}
                  />
                  <code className="flex-1 truncate font-mono text-xs text-foreground">
                    {t.name}
                  </code>
                  <code className="font-mono text-xs text-muted-foreground">
                    {t.value}px
                  </code>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading
          title="Border width"
          count={borderWidthTokens.length}
          description="border-0, border (1px), border-2, border-4, border-8 — and the same for each side."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {[0, 1, 2, 4, 8].map((w) => (
            <div
              key={w}
              className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-4"
            >
              <div
                className="flex h-16 w-16 items-center justify-center bg-foreground/5"
                style={{
                  border: `${w}px solid var(--color-foreground)`,
                }}
              />
              <div className="text-center">
                <p className="font-mono text-xs font-medium text-foreground">
                  {w === 1 ? "border" : `border-${w}`}
                </p>
                <p className="font-mono text-[10px] text-muted-foreground">{w}px</p>
              </div>
            </div>
          ))}
        </div>
        <details className="rounded-lg border border-border bg-muted/20">
          <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-medium text-foreground">
            <span>All {borderWidthTokens.length} directional tokens</span>
            <span className="text-xs text-muted-foreground">Click to expand</span>
          </summary>
          <div className="border-t border-border bg-background p-4">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {borderWidthTokens.map((t) => (
                <div
                  key={t.name}
                  className="flex items-center gap-3 border-b border-border py-2 last:border-b-0"
                >
                  <code className="flex-1 font-mono text-xs text-foreground">{t.name}</code>
                  <code className="font-mono text-xs text-muted-foreground">{t.value}px</code>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>
    </article>
  );
}
