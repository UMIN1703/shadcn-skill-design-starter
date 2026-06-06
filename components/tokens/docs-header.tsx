type DocsHeaderProps = {
  section: string;
  title: string;
  description: string;
};

export function DocsHeader({ section, title, description }: DocsHeaderProps) {
  return (
    <header className="flex flex-col gap-3 border-b border-border pb-8">
      <p className="text-sm font-medium text-muted-foreground">{section}</p>
      <h1 className="font-mono text-4xl font-semibold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="max-w-2xl text-base leading-7 text-muted-foreground">{description}</p>
    </header>
  );
}
