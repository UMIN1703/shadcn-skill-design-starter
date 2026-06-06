import type { Metadata } from "next";
import { DocsHeader } from "@/components/tokens/docs-header";
import { SectionHeading } from "@/components/tokens/section-heading";
import { opacityTokens, strokeWidthTokens } from "@/lib/tokens/effects";

export const metadata: Metadata = {
  title: "Effects",
};

export default async function EffectsTokensPage() {
  return (
    <article className="flex flex-col gap-12">
      <DocsHeader
        section="Design Tokens"
        title="Effects"
        description="Opacity and SVG stroke width tokens."
      />

      <section className="flex flex-col gap-4">
        <SectionHeading
          title="Opacity"
          count={opacityTokens.length}
          description="opacity-0 through opacity-100 in steps of 5. Apply to colors as bg-foreground/N or use on whole elements."
        />
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-7">
          {opacityTokens.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-3"
            >
              <div
                className="h-12 w-full rounded-sm bg-foreground"
                style={{ opacity: Number(t.value) / 100 }}
              />
              <div className="text-center">
                <p className="font-mono text-xs font-medium text-foreground">{t.name}</p>
                <p className="font-mono text-[10px] text-muted-foreground">
                  {Number(t.value) / 100}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading
          title="Stroke width"
          count={strokeWidthTokens.length}
          description="SVG stroke width scale for icons and shapes. 0.5px increments through 3px."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {strokeWidthTokens.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-4"
            >
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                stroke="currentColor"
                strokeWidth={t.value}
                strokeLinecap="round"
                className="text-foreground"
              >
                <circle cx="28" cy="28" r="20" />
                <path d="M18 28h20M28 18v20" />
              </svg>
              <div className="text-center">
                <p className="font-mono text-xs font-medium text-foreground">{t.name}</p>
                <p className="font-mono text-[10px] text-muted-foreground">{t.value}px</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
