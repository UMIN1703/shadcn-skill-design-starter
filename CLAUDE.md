# CLAUDE.md

> **Project**: Next.js App + shadcn/ui Design System (this directory **is** the Next.js project root)
> **Stack**: React 19 · TypeScript · shadcn/ui · Tailwind CSS v4 · Next.js 15 App Router
> **Package manager**: npm
> **Design source**: Figma → exported to `.claude/skills/shadcn-ui-design/references/variables-export.json`
> **Figma file**: `92ljrxYvIaOPQnAY8hqAU2` (`@shadcn_ui components not token`)

Loaded automatically every session. Generic rules and patterns are NOT duplicated here — they live in the shared kit folder (see §1).

---

## 1. Where things live

All design-system reference material — the kit that was installed via `npx ux-ui-agent-skills init` — lives **inside `.claude/skills/`** so the project root stays clean. Layout:

```
.claude/skills/
├── _ux-ui-shared/        ← KIT reference (read-only, upstream-managed)
│   ├── tokens/           DTCG specs
│   ├── components/       Atomic-design specs (atoms.md, molecules.md, …)
│   ├── taste/            Anti-slop + 138 aesthetic systems
│   ├── accessibility/    WCAG, ARIA, cognitive, i18n-RTL, vision
│   ├── frameworks/       Adapter protocol + 19 framework adapters
│   ├── design-systems/   Interop + crosswalk + library
│   ├── workflows/        Review, prototyping, qa, perf, figma-integration, …
│   ├── content/          UX writing (voice & tone)
│   └── scripts/          Validators: accuracy_report, contrast, axe, render-WCAG, …
│
├── shadcn-ui-design/     ← PROJECT layer (the only thing you edit)
│   ├── SKILL.md
│   ├── references/       Figma export + DESIGN.md (1,807 tokens)
│   ├── scripts/          sync-tokens.py, build-tokens-data.py
│   └── assets/
│
└── {17 runnable skills}  ← /design-tokens, /design-component, /design-code,
                              /design-review, /a11y-audit, /apply-aesthetic,
                              /image-to-code, /brandkit, /redesign,
                              /migrate-design-system, /prototype, /ux-writing,
                              /governance, /token-build, /figma-integration,
                              /design-qa, /performance
```

Auto-load contract:
- The **project skill** (`.claude/skills/shadcn-ui-design/SKILL.md`) auto-loads on UI tasks via its `description` match.
- The kit's `CLAUDE.md` persona lives at `node_modules/ux-ui-agent-skills/CLAUDE.md` — Senior Design Architect persona, decision framework, verification protocol, Request Router. Use it as the foundation context.
- The kit's **reference content** (token specs, component patterns, taste, a11y, workflows, scripts) lives at `.claude/skills/_ux-ui-shared/` after the move. All 17 kit skills' SKILL.md files have been rewritten to point at this path.
- Never duplicate content between layers. Generic patterns → link to `_ux-ui-shared/`; project-specific facts → write in `shadcn-ui-design/`.

> **Caution on `init --force`** — the kit's installer drops files at project root, not at `_ux-ui-shared/`. Re-running `npx ux-ui-agent-skills init --force` will re-clutter the root and you must re-do the move (`KIT.md` § "Refresh"). Until the kit gains a `--target` flag, pin a known good `ux-ui-agent-skills` version and avoid re-init unless you intend to absorb breaking changes.

---

## 2. Pipeline (Figma → globals.css)

```
   Figma                     references/                       app/globals.css
   ─────                     ───────────                       ───────────────
[Variables]   ─export→   variables-export.json   ──sync-tokens.py──→  :root + .dark
                                                                       + [data-theme="primary"]
                                                                       + [data-theme="secondary"]
                                                                                ↓
                                                              Components use semantic
                                                              tokens via Tailwind classes
                                                              (bg-background, text-foreground, …)
```

**Steps (when designer ships new tokens):**
```bash
# 1. Drop fresh export into references/
# 2. Regenerate the CSS
python .claude/skills/shadcn-ui-design/scripts/sync-tokens.py \
    --output app/globals.css
# 3. (Optional) regenerate typed TS data for /docs/tokens pages
python .claude/skills/shadcn-ui-design/scripts/build-tokens-data.py
# 4. npm run dev → toggle each theme and eyeball
# 5. git commit JSON + CSS together
```

---

## 3. Project-specific rules (do not delegate)

1. **4 themes always** — Light, Dark, Primary (blue), Secondary (yellow). Every new UI verified under all four (root attribute toggle). Generic semantic tokens only — no per-theme overrides in components.
2. **Figma is the source.** Never edit `app/globals.css` by hand; always re-run `sync-tokens.py`. Never eyedrop hex from a screenshot — resolve to a semantic token via `.claude/skills/shadcn-ui-design/references/DESIGN.md`.
3. **Demo section convention** — every component demo (`components/demos/*-demo.tsx`) wraps variants in:
   ```tsx
   <section className="flex flex-col gap-3">
     <h3 className="font-mono text-sm font-medium text-muted-foreground">
       Section Name
     </h3>
     {/* variant content */}
   </section>
   ```
   Outer wrapper uses `gap-10` between sections.
4. **Skill split rule** — project-specific facts live in `.claude/skills/shadcn-ui-design/SKILL.md`; generic patterns live in `_ux-ui-shared/`. When in doubt, link to the shared file. Never copy generic content into the project skill.

Everything else (Next.js App Router rules, React+Tailwind code shape, shadcn primitives, color/typography/spacing rules, form patterns, safety patterns, a11y checklist) — read the relevant file from `_ux-ui-shared/`. Do not repeat them here.

---

## 4. Project structure

```
./                                         ← Next.js project root (CWD)
├── CLAUDE.md                              ← this file
├── KIT.md                                 ← upstream ownership map
├── README.md
├── .claude/
│   └── skills/
│       ├── _ux-ui-shared/                 ← KIT reference (read-only)
│       ├── shadcn-ui-design/              ← PROJECT layer
│       │   ├── SKILL.md
│       │   ├── references/
│       │   │   ├── DESIGN.md
│       │   │   └── variables-export.json
│       │   ├── scripts/
│       │   │   ├── README.md
│       │   │   ├── sync-tokens.py          ← Figma JSON → app/globals.css
│       │   │   └── build-tokens-data.py    ← Figma JSON → lib/tokens/*.ts
│       │   └── assets/
│       └── {17 kit skills}                ← runnable: /design-tokens, /a11y-audit, …
├── app/                                   ← project — Next.js routes
│   ├── layout.tsx
│   ├── globals.css                        ← generated by sync-tokens.py — do not edit
│   ├── page.tsx
│   └── docs/
├── components/                            ← project — React only after the move
│   ├── ui/                                ← shadcn primitives
│   ├── demos/
│   ├── tokens/                            ← React swatch helpers (not kit tokens)
│   ├── component-docs.tsx
│   ├── component-preview.tsx
│   ├── docs-sidebar.tsx
│   ├── faq.tsx
│   └── alert-demo.tsx
├── lib/
│   ├── utils.ts
│   └── tokens/                            ← generated by build-tokens-data.py
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

The project root is now clean — only Next.js + project code. All design-system reference material is consolidated under `.claude/skills/_ux-ui-shared/`.

---

## 5. Required packages

Already installed (see `package.json` for versions):
```
# Core
next react react-dom typescript tailwindcss @tailwindcss/postcss tw-animate-css

# shadcn primitives — Radix UI parts
@radix-ui/react-alert-dialog @radix-ui/react-avatar @radix-ui/react-checkbox
@radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card
@radix-ui/react-label @radix-ui/react-popover @radix-ui/react-progress
@radix-ui/react-radio-group @radix-ui/react-select @radix-ui/react-slot
@radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-tooltip
@radix-ui/react-accordion

# shadcn helpers
class-variance-authority clsx tailwind-merge lucide-react

# Forms
react-hook-form @hookform/resolvers zod

# Toasts
sonner

# Date picker / data table / cmdk
react-day-picker date-fns cmdk @tanstack/react-table

# Design agent kit
ux-ui-agent-skills
```

---

## 6. Pre-delivery checklist

Run the kit's one-command gate first:
```bash
node .claude/skills/_ux-ui-shared/scripts/accuracy_report.mjs
```
(= tokens + contrast + spec + no-hardcode + theme-refs + no-emoji + real-render WCAG + state-aware, light & dark — see kit's CLAUDE.md "Verification Protocol")

Project-specific additions on top of that:
- [ ] `npm run build` passes
- [ ] Renders correctly in all **4 themes** (Light / Dark / Primary / Secondary)
- [ ] No raw hex or `bg-blue-500`-style classes in changed component code
- [ ] Every new page: `async` + `metadata`; `loading.tsx` + `error.tsx` when fetching
- [ ] Every form field has a `<Label>` / `<FormLabel>`
- [ ] Every destructive action goes through `<AlertDialog>`
- [ ] Every icon-only button has `aria-label`
- [ ] `.claude/skills/shadcn-ui-design/references/variables-export.json` is current with Figma
- [ ] Demos use the section heading convention (§3.3)
