import type { Metadata } from "next";
import Link from "next/link";
import { DocsHeader } from "@/components/tokens/docs-header";
import { collectionSummary, totalTokens } from "@/lib/tokens/summary";

export const metadata: Metadata = {
  title: "Design Tokens",
};

const sectionLinks: { title: string; href: string; description: string; collections: string[] }[] = [
  {
    title: "Colors",
    href: "/docs/tokens/colors",
    description: "shadcn semantic tokens across 4 themes, Tailwind palette, Radix palette.",
    collections: ["shadcn/ui", "tw/colors", "rdx/colors"],
  },
  {
    title: "Typography",
    href: "/docs/tokens/typography",
    description: "Font family, size, weight, leading, tracking, and Thai font usage.",
    collections: ["font", "fontUse"],
  },
  {
    title: "Spacing",
    href: "/docs/tokens/spacing",
    description: "Base unit scale plus padding, margin, gap, and space directional variants.",
    collections: ["token", "padding", "margin", "gap", "space"],
  },
  {
    title: "Sizing",
    href: "/docs/tokens/sizing",
    description: "Width and height utilities including max-w screen variants.",
    collections: ["height", "max-height", "max-width"],
  },
  {
    title: "Borders",
    href: "/docs/tokens/borders",
    description: "Border radius (all corners) and border width (all sides).",
    collections: ["border-radius", "border-width"],
  },
  {
    title: "Effects",
    href: "/docs/tokens/effects",
    description: "Opacity scale and SVG stroke width.",
    collections: ["opacity", "stroke-width"],
  },
];

function countFor(slugs: string[]) {
  return collectionSummary
    .filter((c) => slugs.includes(c.name))
    .reduce((acc, c) => acc + c.count, 0);
}

export default async function DesignTokensPage() {
  return (
    <article className="flex flex-col gap-10">
      <DocsHeader
        section="Getting Started"
        title="Design Tokens"
        description={`${totalTokens.toLocaleString()} variables exported from Figma across ${collectionSummary.length} collections. Every value below comes from the same source of truth as app/globals.css.`}
      />

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Browse</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {sectionLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 transition-colors hover:border-foreground/30"
            >
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-semibold text-foreground">{link.title}</p>
                <span className="font-mono text-xs text-muted-foreground">
                  {countFor(link.collections).toLocaleString()} tokens
                </span>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{link.description}</p>
              <p className="font-mono text-[10px] text-muted-foreground/70">
                {link.collections.join(" · ")}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-2xl font-semibold text-foreground">
          Collection inventory
        </h2>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-muted/30 text-left">
              <tr>
                <th className="px-4 py-3 font-medium text-foreground">Collection</th>
                <th className="px-4 py-3 font-medium text-foreground">Type</th>
                <th className="px-4 py-3 text-right font-medium text-foreground">Count</th>
              </tr>
            </thead>
            <tbody>
              {collectionSummary.map((c, i) => (
                <tr
                  key={c.name}
                  className={
                    i === collectionSummary.length - 1
                      ? ""
                      : "border-b border-border"
                  }
                >
                  <td className="px-4 py-3 font-mono text-xs text-foreground">{c.name}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                    {c.type}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-xs text-foreground">
                    {c.count}
                  </td>
                </tr>
              ))}
              <tr className="border-t border-border bg-muted/20 font-medium">
                <td className="px-4 py-3 font-mono text-xs text-foreground">Total</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">—</td>
                <td className="px-4 py-3 text-right font-mono text-xs text-foreground">
                  {totalTokens.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
