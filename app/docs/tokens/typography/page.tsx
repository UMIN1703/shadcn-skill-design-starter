import type { Metadata } from "next";
import { DocsHeader } from "@/components/tokens/docs-header";
import { SectionHeading } from "@/components/tokens/section-heading";
import { fontTokens, fontUseTokens } from "@/lib/tokens/typography";

export const metadata: Metadata = {
  title: "Typography",
};

const CATEGORY_ORDER = ["family", "size", "weight", "style", "leading", "tracking"] as const;
const CATEGORY_LABEL: Record<string, string> = {
  family: "Family",
  size: "Size",
  weight: "Weight",
  style: "Style",
  leading: "Leading (line-height)",
  tracking: "Tracking (letter-spacing)",
  other: "Other",
};

function previewFor(category: string, name: string, value: string | number) {
  const text = "Ag";
  if (category === "family") {
    return (
      <span
        className="text-3xl text-foreground"
        style={{ fontFamily: String(value) }}
      >
        {text}
      </span>
    );
  }
  if (category === "size") {
    return (
      <span
        className="text-foreground"
        style={{ fontSize: typeof value === "number" ? `${value}px` : value }}
      >
        Aa
      </span>
    );
  }
  if (category === "weight") {
    return (
      <span
        className="text-3xl text-foreground"
        style={{ fontWeight: Number(value) }}
      >
        {text}
      </span>
    );
  }
  if (category === "style") {
    return (
      <span
        className="text-3xl text-foreground"
        style={{ fontStyle: String(value) }}
      >
        {text}
      </span>
    );
  }
  if (category === "leading") {
    return (
      <span
        className="block text-sm text-foreground"
        style={{
          lineHeight:
            typeof value === "number"
              ? value > 4
                ? `${value}px`
                : value
              : value,
        }}
      >
        Line one
        <br />
        Line two
      </span>
    );
  }
  if (category === "tracking") {
    return (
      <span
        className="text-lg text-foreground"
        style={{ letterSpacing: typeof value === "number" ? `${value}em` : value }}
      >
        SPACING
      </span>
    );
  }
  return <span className="text-sm text-muted-foreground">{name}</span>;
}

export default async function TypographyTokensPage() {
  const grouped: Record<string, typeof fontTokens> = {};
  for (const t of fontTokens) {
    grouped[t.category] ??= [];
    grouped[t.category].push(t);
  }

  const orderedKeys = Array.from(
    new Set([
      ...CATEGORY_ORDER.filter((k) => grouped[k]),
      ...Object.keys(grouped).filter((k) => !CATEGORY_ORDER.includes(k as never)),
    ]),
  );

  return (
    <article className="flex flex-col gap-12">
      <DocsHeader
        section="Design Tokens"
        title="Typography"
        description="Font scales, weights, leading, and tracking exported from Figma. Plus Thai font usage tokens."
      />

      {orderedKeys.map((cat) => {
        const items = grouped[cat];
        return (
          <section key={cat} className="flex flex-col gap-4">
            <SectionHeading title={CATEGORY_LABEL[cat] ?? cat} count={items.length} />
            <div className="overflow-hidden rounded-lg border border-border">
              <div className="grid grid-cols-[1fr_140px_140px] gap-4 border-b border-border bg-muted/30 px-4 py-3 text-xs font-medium text-foreground">
                <span>Preview</span>
                <span>Name</span>
                <span>Value</span>
              </div>
              {items.map((t, i) => (
                <div
                  key={t.name}
                  className={
                    "grid grid-cols-[1fr_140px_140px] items-center gap-4 px-4 py-4" +
                    (i === items.length - 1 ? "" : " border-b border-border")
                  }
                >
                  <div>{previewFor(cat, t.name, t.value)}</div>
                  <code className="font-mono text-xs text-foreground">{t.name}</code>
                  <code className="font-mono text-xs text-muted-foreground">
                    {String(t.value)}
                  </code>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <section className="flex flex-col gap-4">
        <SectionHeading
          title="Font usage"
          count={fontUseTokens.length}
          description="Project-specific font assignments — Sans Serif and Serif slots used by Thai content."
        />
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="grid grid-cols-[1fr_140px_1fr] gap-4 border-b border-border bg-muted/30 px-4 py-3 text-xs font-medium text-foreground">
            <span>Preview</span>
            <span>Slot</span>
            <span>Font</span>
          </div>
          {fontUseTokens.map((t, i) => (
            <div
              key={t.name}
              className={
                "grid grid-cols-[1fr_140px_1fr] items-center gap-4 px-4 py-4" +
                (i === fontUseTokens.length - 1 ? "" : " border-b border-border")
              }
            >
              <span
                className="text-lg text-foreground"
                style={{ fontFamily: String(t.value) }}
              >
                สวัสดี — The quick brown fox
              </span>
              <code className="font-mono text-xs text-foreground">{t.name}</code>
              <code className="font-mono text-xs text-muted-foreground">{String(t.value)}</code>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
