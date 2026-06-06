import { cn } from "@/lib/utils";

type ColorSwatchProps = {
  hex: string;
  name: string;
  step?: string;
  alias?: string | null;
  className?: string;
};

export function ColorSwatch({ hex, name, step, alias, className }: ColorSwatchProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div
        className="h-16 w-full rounded-md border border-border"
        style={{ backgroundColor: hex }}
      />
      <div className="flex flex-col gap-0.5">
        <p className="font-mono text-xs font-medium text-foreground">
          {step ? <span>{step}</span> : <span>{name}</span>}
        </p>
        <p className="font-mono text-[10px] uppercase text-muted-foreground">{hex}</p>
        {alias ? (
          <p className="font-mono text-[10px] text-muted-foreground/80">→ {alias}</p>
        ) : null}
      </div>
    </div>
  );
}

type SemanticSwatchProps = {
  hex: string;
  alias: string | null;
};

export function SemanticSwatch({ hex, alias }: SemanticSwatchProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-12 w-full rounded-md border border-border"
        style={{ backgroundColor: hex }}
      />
      <div className="flex flex-col gap-0.5">
        <p className="font-mono text-[11px] uppercase text-foreground">{hex}</p>
        {alias ? (
          <p className="font-mono text-[10px] text-muted-foreground">{alias}</p>
        ) : null}
      </div>
    </div>
  );
}
