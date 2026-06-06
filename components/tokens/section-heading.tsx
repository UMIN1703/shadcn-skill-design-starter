import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  count?: number;
  description?: string;
  className?: string;
};

export function SectionHeading({ title, count, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className="flex items-baseline gap-2">
        <h2 className="font-mono text-2xl font-semibold text-foreground">{title}</h2>
        {typeof count === "number" ? (
          <span className="font-mono text-xs text-muted-foreground">
            {count} {count === 1 ? "token" : "tokens"}
          </span>
        ) : null}
      </div>
      {description ? (
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
