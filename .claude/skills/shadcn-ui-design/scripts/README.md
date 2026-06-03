# Scripts

## `sync-tokens.py`

Generates the complete Tailwind v4 `app/globals.css` from
`../references/variables-export.json` (Figma export, shadcn/ui collection,
4 modes).

### Usage

```bash
# From the Next.js project root:
python .claude/skills/shadcn-ui-design/scripts/sync-tokens.py --output app/globals.css

# Preview without writing:
python .claude/skills/shadcn-ui-design/scripts/sync-tokens.py | less

# Use a different source JSON:
python .claude/skills/shadcn-ui-design/scripts/sync-tokens.py \
    --json path/to/other-export.json \
    --output app/globals.css
```

### What it generates

- `@import "tailwindcss"`
- `@theme { ... }` block mapping CSS vars → Tailwind utility classes
- `@layer base` with four selectors:
  - `:root` — Light mode
  - `.dark` — Dark mode
  - `[data-theme="primary"]` — Primary (blue)
  - `[data-theme="secondary"]` — Secondary (yellow)
- Font variables (`--font-sans`, `--font-mono`, `--font-thai`) and `--radius`
  emitted in `:root` only.

### When to run

- After designer pushes a new Figma export → replace
  `references/variables-export.json` → run the script.
- The script is idempotent — committing the diff in `app/globals.css` is the
  source of truth for token changes in code review.

### Requirements

- Python 3.8+ (no third-party dependencies)
