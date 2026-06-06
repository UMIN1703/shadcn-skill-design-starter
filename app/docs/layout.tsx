import Link from "next/link";
import { DocsSidebar } from "@/components/docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 max-w-screen-2xl items-center gap-6 px-6">
          <Link
            href="/docs"
            className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground"
          >
            <span className="inline-block h-5 w-5 rounded-sm bg-foreground" />
            shadcn-skill-design
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link
              href="/docs"
              className="text-foreground transition-colors hover:text-foreground/80"
            >
              Docs
            </Link>
            <Link
              href="/docs/components/accordion"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Components
            </Link>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <a
              href="https://github.com/UMIN1703/shadcn-skill-design-starter"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-screen-2xl flex-1 gap-10 px-6">
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 overflow-y-auto py-8 md:block">
          <DocsSidebar />
        </aside>
        <main className="min-w-0 flex-1 py-10">{children}</main>
      </div>
    </div>
  );
}
