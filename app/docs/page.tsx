import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Introduction",
};

export default async function DocsHomePage() {
  return (
    <article className="flex flex-col gap-10">
      <header className="flex flex-col gap-3 border-b border-border pb-8">
        <p className="text-sm font-medium text-muted-foreground">
          Getting Started
        </p>
        <h1 className="font-mono text-4xl font-semibold tracking-tight text-foreground">
          Introduction
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          A documentation site for the components in this starter — built on
          shadcn/ui, Tailwind CSS v4, and design tokens synced from Figma.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-2xl font-semibold text-foreground">
          What&apos;s in the box
        </h2>
        <ul className="flex flex-col gap-2 text-sm text-foreground">
          <li className="flex gap-3">
            <span className="text-muted-foreground">—</span>
            <span>
              <span className="font-medium">1,807 design tokens</span> exported
              from Figma covering colors, spacing, typography, radius, and
              opacity.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-muted-foreground">—</span>
            <span>
              <span className="font-medium">4 themes</span> — Light, Dark,
              Primary, Secondary — wired to CSS variables.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-muted-foreground">—</span>
            <span>
              <span className="font-medium">Claude Code skill</span> that
              auto-loads on UI tasks and produces components matching the design
              system.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-muted-foreground">—</span>
            <span>
              <span className="font-medium">Token sync script</span> that
              regenerates <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">globals.css</code> from the Figma JSON in one command.
            </span>
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-2xl font-semibold text-foreground">
          Browse the system
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/tokens"
            className="group flex flex-col gap-1 rounded-lg border border-border bg-card p-5 transition-colors hover:border-foreground/30"
          >
            <p className="text-sm font-medium text-foreground">Design tokens</p>
            <p className="text-sm text-muted-foreground">
              All 1,807 variables — colors, typography, spacing, sizing,
              borders, and effects — straight from the Figma export.
            </p>
          </Link>
          <Link
            href="/docs/components/accordion"
            className="group flex flex-col gap-1 rounded-lg border border-border bg-card p-5 transition-colors hover:border-foreground/30"
          >
            <p className="text-sm font-medium text-foreground">Components</p>
            <p className="text-sm text-muted-foreground">
              Composable shadcn/ui primitives. Start with Accordion — more
              coming.
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}
