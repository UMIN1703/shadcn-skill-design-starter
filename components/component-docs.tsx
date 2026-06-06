import { ComponentPreview } from "@/components/component-preview";

type ComponentDocsProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  code: string;
  install: string;
  importPath: string;
};

export function ComponentDocs({
  title,
  description,
  children,
  code,
  install,
  importPath,
}: ComponentDocsProps) {
  return (
    <article className="flex flex-col gap-10">
      <header className="flex flex-col gap-3 border-b border-border pb-8">
        <p className="text-sm font-medium text-muted-foreground">Components</p>
        <h1 className="font-mono text-4xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-2xl font-semibold text-foreground">
          Preview
        </h2>
        <ComponentPreview code={code}>{children}</ComponentPreview>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-2xl font-semibold text-foreground">
          Installation
        </h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-muted/30 p-4 font-mono text-sm text-foreground">
          <code>{install}</code>
        </pre>
        <p className="text-sm text-muted-foreground">
          Then copy{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            {importPath}
          </code>{" "}
          into your project.
        </p>
      </section>
    </article>
  );
}
