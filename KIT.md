# KIT.md — what is upstream-managed

The folders below were originally **dropped by `npx ux-ui-agent-skills init`** at project root, then moved into `.claude/skills/_ux-ui-shared/` to keep the root clean. Treat the contents as **read-only**: the upstream kit is the source of truth.

Project-specific overrides belong in `.claude/skills/shadcn-ui-design/`, **not** by editing kit files.

---

## Kit-owned (read-only) — under `.claude/skills/_ux-ui-shared/`

| Path | Purpose |
|---|---|
| `_ux-ui-shared/tokens/` | DTCG token specs (colors, typography, spacing, shadows, borders, motion, gradients, opacity, blur, sizing, states, theming, data-viz, breakpoints) |
| `_ux-ui-shared/components/` | Atomic-design specs — atoms.md, molecules.md, organisms.md, templates.md, navigation.md, feedback.md, forms-advanced.md, overlays.md, data-display.md, data-viz.md, icon-system.md |
| `_ux-ui-shared/taste/` | Anti-slop doctrine, aesthetic archetypes, motion choreography |
| `_ux-ui-shared/accessibility/` | WCAG 2.2 checklist, ARIA patterns, cognitive, i18n-RTL, vision, AAA delta |
| `_ux-ui-shared/frameworks/` | Adapter Protocol + React/Tailwind + Next.js + SwiftUI + 16 adapters |
| `_ux-ui-shared/design-systems/` | Interop protocol, crosswalk (incl. shadcn/ui), 138-brand library |
| `_ux-ui-shared/workflows/` | Design review, design-to-code, prototyping, redesign-audit, governance, token-build, figma-integration, design-qa, performance |
| `_ux-ui-shared/content/` | UX writing — voice & tone |
| `_ux-ui-shared/scripts/` | Validators / generators: accuracy_report, validate_tokens, contrast, axe_audit, measure_render, verify_states, lint_hardcodes, lint_taste, scaffold_component, design_systems, build_tokens, … |

## Runnable kit skills — under `.claude/skills/`

17 invocable via `/<name>`:
`a11y-audit` · `apply-aesthetic` · `brandkit` · `design-code` · `design-component` · `design-qa` · `design-review` · `design-tokens` · `figma-integration` · `governance` · `image-to-code` · `migrate-design-system` · `performance` · `prototype` · `redesign` · `token-build` · `ux-writing`

Each `<skill>/SKILL.md` was rewritten so all path references (`tokens/`, `scripts/`, `components/*.md`, etc.) point at `.claude/skills/_ux-ui-shared/<area>/`.

## Project-owned

- `.claude/skills/shadcn-ui-design/` — Figma export, sync pipeline, project SKILL.md
- `app/` · `components/{ui,demos,tokens}/` · `lib/` · `public/`
- `CLAUDE.md` · `README.md` · `package.json` · `tsconfig.json` · `next.config.ts` · `postcss.config.mjs` · `eslint.config.mjs`

---

## Refresh / pin a different kit version

The upstream `npx ux-ui-agent-skills init` installer always drops at **project root**, not at `_ux-ui-shared/`. If you re-run it, you have to redo the move:

```bash
# 1. Re-install the kit at project root
npx ux-ui-agent-skills init --force

# 2. Move kit folders back into _ux-ui-shared (overwrites the read-only side)
SHARED=.claude/skills/_ux-ui-shared
mkdir -p "$SHARED/components"
mv tokens taste accessibility frameworks design-systems workflows content scripts "$SHARED/"
for f in atoms.md molecules.md organisms.md templates.md navigation.md feedback.md \
         forms-advanced.md overlays.md data-display.md data-viz.md icon-system.md; do
  [ -f "components/$f" ] && mv "components/$f" "$SHARED/components/"
done

# 3. Re-apply the path-rewrite over the 17 kit SKILL.md files
#    (sed pattern lives in the move history — see git log of this PR)

# Pin or upgrade in package.json:
npm install ux-ui-agent-skills@latest
```

> Until the kit ships a `--target <dir>` flag, the simplest practice is: **pin the version** in `package.json`, treat re-init as a major maintenance task, and don't `init --force` casually.
