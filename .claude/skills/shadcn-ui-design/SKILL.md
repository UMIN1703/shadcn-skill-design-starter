---
name: shadcn-ui-design
description: Use when building UI components, pages, forms, dialogs, or layouts in THIS project (shadcn/ui + Tailwind CSS v4 + Next.js App Router). Holds project-specific Figma token reference (1,807 vars across 17 collections), 4 themes (Light/Dark/Primary/Secondary), and the sync-tokens pipeline. For generic patterns (Next.js, React+Tailwind, shadcn primitives, a11y, taste, workflows), delegate to `ux-ui-agent-skills` package.
---

# shadcn/ui Design Skill — project layer

This skill holds **only** what is specific to THIS project. Everything generic lives in the installed `ux-ui-agent-skills` package — do not duplicate it here.

---

## What lives here vs. where

The generic kit's reference content lives under `.claude/skills/_ux-ui-shared/` (moved out of project root to keep root clean). Read this skill for project facts; read the kit paths below for generic patterns.

| Need | Read this |
|---|---|
| Project's actual Figma tokens (1,807 vars, 4 themes) | `references/variables-export.json` + `references/DESIGN.md` |
| Sync Figma → `app/globals.css` | `.claude/skills/_ux-ui-shared/scripts/sync-tokens.py` (+ `.claude/skills/_ux-ui-shared/scripts/README.md`) |
| Project Figma file key, file structure, npm scripts | root `CLAUDE.md` |
| **Next.js 15 App Router patterns** | `.claude/skills/_ux-ui-shared/frameworks/nextjs.md` |
| **React 19 + Tailwind v4 + cva patterns** | `.claude/skills/_ux-ui-shared/frameworks/react-tailwind.md` |
| **shadcn ↔ semantic-token crosswalk** | `.claude/skills/_ux-ui-shared/design-systems/crosswalk.md` |
| **Component patterns** (Atoms/Molecules/Organisms/Templates) | `.claude/skills/_ux-ui-shared/components/{atoms,molecules,organisms,templates}.md` |
| **Figma integration workflow** (Variables ↔ tokens) | `.claude/skills/_ux-ui-shared/workflows/figma-integration.md` |
| **Accessibility checklist & ARIA patterns** | `.claude/skills/_ux-ui-shared/accessibility/{wcag-checklist,aria-patterns,cognitive,i18n-rtl,vision}.md` |
| **Design taste / anti-slop / 138 libraries** | `.claude/skills/_ux-ui-shared/taste/{design-taste,aesthetic-systems,motion-choreography}.md` + `.claude/skills/_ux-ui-shared/design-systems/library/<name>/DESIGN.md` |
| **Runnable skills** (`/design-component`, `/a11y-audit`, …) | `.claude/skills/<name>/SKILL.md` (17 from the kit) |
| **Validation scripts** (contrast, axe, render-WCAG, one-command gate) | `.claude/skills/_ux-ui-shared/scripts/{accuracy_report,measure_render,verify_states,axe_audit,contrast,validate_tokens,…}` |

> Files dropped by the kit are **upstream-managed** — re-running `npx ux-ui-agent-skills init --force` overwrites them. Project overrides belong inside this skill (`.claude/skills/shadcn-ui-design/`), not by editing kit files.

---

## Project-specific facts (cannot delegate)

### Theme model
The project supports **4 themes** through the same semantic tokens — toggled by root attribute, no per-component overrides:
- **Light** — `:root` default
- **Dark** — `<html class="dark">`
- **Primary** — `<html data-theme="primary">` (blue accent)
- **Secondary** — `<html data-theme="secondary">` (yellow accent)

Every new UI must render correctly under all four. Verify by toggling root attributes in the browser before declaring done.

### Token source of truth
- `references/variables-export.json` — `lazyyysync-variables-v1` format · 1,807 variables across 17 collections (shadcn/ui semantic + tw/colors + rdx/colors + spacing + sizing + radius + opacity + font · …)
- `references/DESIGN.md` — human-readable index of every token and its hex/value (1,335 lines)
- Single direction: **Figma is the source.** `variables-export.json` is exported manually from Figma → `sync-tokens.py` writes `app/globals.css`. Never edit `globals.css` by hand.

### Sync pipeline
```bash
python .claude/skills/shadcn-ui-design/scripts/sync-tokens.py \
    --output app/globals.css
```
Run after every Figma export. Commit `variables-export.json` + `app/globals.css` together so the diff is reviewable.

### Project component inventory
27 components built so far live in `components/ui/` and demoed under `components/demos/*-demo.tsx`. The docs site at `app/docs/components/[name]/page.tsx` consumes the demos. Each demo wraps its variants in sectioned `<h3 class="font-mono text-sm font-medium text-muted-foreground">` blocks — keep this pattern for new components.

### Non-negotiable project rules
- Never use raw hex in component code. Always semantic tokens (`bg-background`, `text-foreground`, `border-border`, …).
- Never use Tailwind primitive palette classes (`bg-blue-500`, `text-gray-500`). Exception: success/warning state pairs require both light **and** dark variants together (`text-green-700 dark:text-green-400`).
- Pair every surface with its foreground (`bg-card text-card-foreground`, `bg-primary text-primary-foreground`). Never mix unrelated surface/foreground.
- Every `bg-*` interactive element gets its `*-foreground` for text.
- Every form field gets a `<Label>`. No placeholder-only inputs.
- Every destructive action goes through `<AlertDialog>`. No silent delete.
- Every icon-only button gets `aria-label`.

### Common project workflows

**Designer updated Figma → sync tokens**
1. Replace `references/variables-export.json` with the new export.
2. Run `sync-tokens.py` → `app/globals.css` regenerated.
3. `npm run dev`, toggle all 4 themes, eyeball every component.
4. Commit JSON + CSS together.

**Build a UI from a Figma frame**
1. Paste the Figma node URL into chat.
2. Pull node spec with the Figma MCP (`get_design_context` + `get_screenshot`).
3. Map every color/spacing/radius back to a semantic token using `references/DESIGN.md`. **Never eyedrop hex.**
4. Pick the matching shadcn primitive from `components/ui/`. If missing, install via `npx shadcn@latest add …`.
5. Build the demo as an `async` Server Component in `app/docs/components/[name]/page.tsx`. Add `metadata`.
6. Run the pre-delivery checklist (below).

**Add a new route (no Figma reference)**
1. `app/[route]/page.tsx` — `async` Server Component with `metadata`.
2. `app/[route]/loading.tsx` (Skeleton).
3. `app/[route]/error.tsx` (`"use client"`).
4. `app/[route]/actions.ts` only if the page mutates data.

---

## Pre-delivery checklist (project-specific add-ons on top of generic gate)

Run BEFORE saying done. The generic gate (contrast, axe, render-WCAG, no-emoji) comes from the kit — invoke `node .claude/skills/_ux-ui-shared/scripts/accuracy_report.mjs` from project root. The project-specific checks below are additional:

- [ ] `npm run build` passes (no TS errors, no lint blockers)
- [ ] `npm run dev` renders correctly in all **4 themes** (Light / Dark / Primary / Secondary)
- [ ] No raw hex or Tailwind primitive color classes (`bg-blue-500`, `text-gray-500`) in changed component code
- [ ] Every new page: `async` + `metadata` export
- [ ] Every new route segment with data: `loading.tsx` + `error.tsx` present
- [ ] Every form field has a `<Label>` (or `<FormLabel>` for react-hook-form)
- [ ] Every destructive action uses `<AlertDialog>`
- [ ] Every icon-only button has `aria-label`
- [ ] `references/variables-export.json` is current with the Figma file (no stale tokens)
- [ ] Demo wraps variants in sectioned `<h3 class="font-mono text-sm font-medium text-muted-foreground">` blocks per project convention
