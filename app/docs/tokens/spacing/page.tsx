import type { Metadata } from "next";
import { DocsHeader } from "@/components/tokens/docs-header";
import { SectionHeading } from "@/components/tokens/section-heading";
import { SizeBar } from "@/components/tokens/size-bar";
import {
  baseScale,
  gapTokens,
  marginTokens,
  paddingTokens,
  spaceTokens,
} from "@/lib/tokens/spacing";

export const metadata: Metadata = {
  title: "Spacing",
};

type Group = { name: string; items: typeof paddingTokens };

function groupByPrefix(items: typeof paddingTokens): Group[] {
  const groups: Record<string, typeof paddingTokens> = {};
  for (const t of items) {
    const prefix = t.name.split("-").slice(0, t.name.split("-").length - 1).join("-") || t.name;
    groups[prefix] ??= [];
    groups[prefix].push(t);
  }
  return Object.entries(groups).map(([name, items]) => ({ name, items }));
}

export default async function SpacingTokensPage() {
  const paddingGroups = groupByPrefix(paddingTokens);
  const marginGroups = groupByPrefix(marginTokens);
  const gapGroups = groupByPrefix(gapTokens);
  const spaceGroups = groupByPrefix(spaceTokens);

  return (
    <article className="flex flex-col gap-12">
      <DocsHeader
        section="Design Tokens"
        title="Spacing"
        description="A single base scale powers every spacing utility. Padding, margin, gap, and space tokens all alias into it — change the base, change the system."
      />

      <section className="flex flex-col gap-4">
        <SectionHeading
          title="Base scale"
          count={baseScale.length}
          description="Raw numeric values in pixels. Includes negatives, sub-pixel steps, and screen-scale anchors."
        />
        <div className="rounded-lg border border-border p-4">
          {baseScale.map((t) => (
            <SizeBar key={t.name} name={t.name} value={t.value} alias={t.alias} maxBarWidth={300} />
          ))}
        </div>
      </section>

      <DirectionalSection
        title="Padding"
        description="p-* (all sides), px-* (x), py-* (y), pt-*, pr-*, pb-*, pl-*."
        groups={paddingGroups}
        totalCount={paddingTokens.length}
      />

      <DirectionalSection
        title="Margin"
        description="m-* (all sides), mx-* (x), my-* (y), mt-*, mr-*, mb-*, ml-*."
        groups={marginGroups}
        totalCount={marginTokens.length}
      />

      <DirectionalSection
        title="Gap"
        description="gap-* (both axes), gap-x-* (column), gap-y-* (row)."
        groups={gapGroups}
        totalCount={gapTokens.length}
      />

      <DirectionalSection
        title="Space"
        description="space-x-* and space-y-* — applied between siblings."
        groups={spaceGroups}
        totalCount={spaceTokens.length}
      />
    </article>
  );
}

function DirectionalSection({
  title,
  description,
  groups,
  totalCount,
}: {
  title: string;
  description: string;
  groups: Group[];
  totalCount: number;
}) {
  return (
    <section className="flex flex-col gap-4">
      <SectionHeading title={title} count={totalCount} description={description} />
      <div className="flex flex-col gap-4">
        {groups.map((g) => (
          <details
            key={g.name}
            className="group rounded-lg border border-border bg-muted/20"
          >
            <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-medium text-foreground">
              <span className="font-mono">{g.name}-*</span>
              <span className="font-mono text-xs text-muted-foreground">
                {g.items.length} tokens
              </span>
            </summary>
            <div className="border-t border-border bg-background px-4 py-3">
              {g.items.map((t) => (
                <SizeBar
                  key={t.name}
                  name={t.name}
                  value={t.value}
                  alias={t.alias}
                  maxBarWidth={240}
                />
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
