# CLAUDE.md

> **Project**: Next.js App + UI Design System (this directory **is** the Next.js project root)
> **Stack**: React · TypeScript · shadcn/ui · Tailwind CSS v4 · Next.js App Router
> **Package manager**: npm
> **Design source**: Figma file → manually exported to `.claude/skills/shadcn-ui-design/references/variables-export.json`
> **Figma file URL / key**: _TBD — paste here when available (used by Figma MCP / Code Connect)_

This file is read automatically by Claude Code on every session. Keep it short.
Detailed rules live in the skill — do not duplicate them here.

---

## 1. How This Project Works

```
   Figma                    references/                       app/globals.css
   ─────                    ───────────                       ───────────────
[Variables]   ─export→   variables-export.json   ──sync-tokens.py──→   :root
                                                                      .dark
                                                                      [data-theme="primary"]
                                                                      [data-theme="secondary"]
                                                                                ↓
                                                              Components use semantic
                                                              tokens via Tailwind classes
                                                              (bg-background, text-foreground, …)
```

- Designer owns Figma → exports JSON when tokens change.
- Developer (or Claude) runs `sync-tokens.py` → `app/globals.css` is rewritten.
- Components never reference hex values directly — only semantic tokens.

---

## 2. The Skill (auto-loads on UI tasks)

This project ships a Claude Code skill at `.claude/skills/shadcn-ui-design/`.
Its `description` covers UI, components, pages, forms, dialogs, layouts — it
loads only when relevant, not on every turn.

| Resource | Use it for |
|----------|-----------|
| `SKILL.md` | Component patterns, Next.js rules, color/typography/spacing rules, accessibility, pre-delivery checklist |
| `references/DESIGN.md` | Complete 1,807-token reference, all 4 theme definitions, full `globals.css` |
| `references/variables-export.json` | Raw Figma export — source of truth |
| `scripts/sync-tokens.py` | Regenerate `app/globals.css` after a Figma export |

**Read the skill before writing UI code.** Never re-create rules in CLAUDE.md.

---

## 3. Common Workflows

### 🎨 Designer updated Figma → sync tokens

1. Replace `.claude/skills/shadcn-ui-design/references/variables-export.json`
   with the new export from Figma.
2. Run:
   ```bash
   python .claude/skills/shadcn-ui-design/scripts/sync-tokens.py \
       --output app/globals.css
   ```
3. `npm run dev` → toggle root `class="dark"`, `data-theme="primary"`,
   `data-theme="secondary"` to verify all 4 themes still render.
4. Commit `variables-export.json` + `app/globals.css` together so the diff is
   reviewable.

### 🧩 Build a UI from a Figma frame

1. User pastes the Figma screenshot (or shares a Figma link + description) in chat.
2. Claude:
   - Identifies the matching shadcn primitive(s) (decision tree in `SKILL.md` §2).
   - Maps every visible color to a semantic token — looks up `references/DESIGN.md`
     §2 to find the right token name. **Never eyedrop hex from the screenshot.**
   - Picks spacing from the token scale (Appendix A5–A8).
   - Builds an `async` Server Component in `app/[route]/page.tsx` with
     `metadata`, `loading.tsx`, `error.tsx`.
3. Claude runs the §10 pre-delivery checklist before reporting done.

### ➕ Add a new route (no Figma reference)

1. Create `app/[route]/page.tsx` — `async` Server Component with `metadata`.
2. Add `app/[route]/loading.tsx` (Skeleton) and `app/[route]/error.tsx`
   (`"use client"`).
3. Add `app/[route]/actions.ts` only if the page mutates data.
4. Use `SKILL.md` §3 Standard Patterns for layout/card/button/form.

### 🐛 Bug fix / refactor

1. Read the affected file(s) — do not refactor unrelated code.
2. Cross-check against `SKILL.md` patterns for the component type.
3. Fix only what is broken; keep the change small and reviewable.

---

## 4. Figma Integration (manual export mode)

- **Figma file URL / key**: _TBD — add to the header block above when available._
  Will be used if Figma MCP server or Code Connect is enabled later.
- **Source of truth**: `.claude/skills/shadcn-ui-design/references/variables-export.json`
  (`lazyyysync-variables-v1` format, 1,807 variables across 17 collections).
- **Re-export trigger**: any change to colors, spacing, typography, radius,
  or any other primitive in Figma. Tokens stay correct only as long as the
  JSON is current.
- **What to share with Claude when building from a frame**:
  - Screenshot pasted into chat
  - Optional Figma frame URL (for written context)
  - Target breakpoint (mobile / tablet / desktop)
- **Hard rule**: never use a hex value picked from a screenshot — always
  resolve to a semantic token in `.claude/skills/shadcn-ui-design/references/DESIGN.md` first.

---

## 5. Always-On Rules (Do / Don't)

These apply on every change, regardless of skill auto-load.
Full Do/Don't reference: `references/DESIGN.md` §3 and `SKILL.md` §§4–7.

### 5.1 Colors

| ✅ Do | ❌ Don't |
|------|--------|
| `bg-background text-foreground` | `bg-white text-black` |
| `text-muted-foreground` | `text-gray-500` |
| `bg-primary text-primary-foreground` | `bg-blue-600 text-white` |
| `bg-destructive` | `bg-red-500` |
| `border-border` | `border-gray-200` |
| `text-green-700 dark:text-green-400` (success — primitive **with** dark variant required) | `text-green-700` (no dark variant) |
| Pair every `bg-*` with its `*-foreground` (e.g. `bg-card text-card-foreground`) | Mix unrelated surface + foreground tokens |

### 5.2 Next.js

| ✅ Do | ❌ Don't |
|------|--------|
| `export default async function Page() { ... }` | `"use client"` at the top of every page |
| `await getData()` directly in Server Components | `useEffect(() => fetch(...))` for initial data |
| `Promise.all([getA(), getB()])` for independent fetches | Sequential `await getA(); await getB();` (waterfall) |
| Export `metadata` or `generateMetadata` from every `page.tsx` | Set `<title>` inside JSX |
| Add `loading.tsx` + `error.tsx` per route segment | One global error/loading for everything |
| Mark **only** `error.tsx` with `"use client"` (it must be) | Mark `layout.tsx` / `page.tsx` as `"use client"` to "make it work" |
| `<Image src=... width=... height=... alt=... />` from `next/image` | `<img src=... />` |
| Load fonts via `next/font` in root layout | `@import url(fonts.googleapis...)` in CSS |
| Pass serialisable props across Server/Client boundary | Pass functions, class instances, or Promises as props |

### 5.3 Forms

| ✅ Do | ❌ Don't |
|------|--------|
| Server Action form for simple mutations (`<form action={createItem}>`) | `useState` + `fetch('/api')` for a one-field form |
| `react-hook-form` + `zod` for validation / multi-step | Hand-rolled `useState` validation per field |
| `<FormLabel>` (or `<Label htmlFor>`) on every input | Placeholder-only inputs without a label |
| `revalidatePath` / `revalidateTag` after a mutation | Refresh the whole page with `router.refresh()` blindly |

### 5.4 Safety & Feedback

| ✅ Do | ❌ Don't |
|------|--------|
| `<AlertDialog>` for delete / destructive actions | Silent delete on click |
| Show `<Skeleton>` / `loading.tsx` during async work | Blank screen while data loads |
| Show `<Alert variant="destructive">` or `error.tsx` on failure | Console-log errors and show nothing to the user |
| Disable submit + show `<Loader2 className="animate-spin" />` while pending | Allow double-submit by leaving the button enabled |
| `aria-label` on every icon-only `<Button size="icon">` | Icon button with no accessible name |

---

## 6. Project Structure

This directory **is** the Next.js project root. Files marked _(scaffold)_ do not
exist yet — create them as the project grows.

```
./                                         ← Next.js project root (CWD)
├── CLAUDE.md                              ← this file (auto-read)
├── .claude/
│   └── skills/
│       └── shadcn-ui-design/
│           ├── SKILL.md                   ← auto-loads on UI tasks
│           ├── assets/                    ← screenshots, references
│           ├── references/
│           │   ├── DESIGN.md
│           │   └── variables-export.json  ← Figma export
│           └── scripts/
│               ├── README.md
│               └── sync-tokens.py
├── app/                                   ← (scaffold)
│   ├── layout.tsx                         ← next/font, providers, root metadata
│   ├── globals.css                        ← generated by sync-tokens.py
│   ├── page.tsx
│   └── [route]/
│       ├── page.tsx                       ← async + metadata
│       ├── loading.tsx
│       ├── error.tsx                      ← "use client"
│       ├── not-found.tsx
│       └── actions.ts                     ← "use server"
├── components/                            ← (scaffold)
│   ├── ui/                                ← shadcn primitives (edit directly)
│   └── [feature]/
├── hooks/                                 ← (scaffold) use-*.ts
├── lib/                                   ← (scaffold) utils
├── types/                                 ← (scaffold) shared TypeScript types
├── public/                                ← (scaffold) static assets
├── package.json                           ← (scaffold)
├── tsconfig.json                          ← (scaffold)
├── next.config.ts                         ← (scaffold)
└── postcss.config.mjs                     ← (scaffold)
```

---

## 7. Required Packages (npm)

Bootstrap the Next.js app once with `npx create-next-app@latest . --typescript
--tailwind --app --eslint`. Then add these on top:

```bash
# Fonts
npm install geist

# shadcn/ui base — add components on demand:
#   npx shadcn@latest add button card dialog form input ...
npm install class-variance-authority clsx tailwind-merge lucide-react

# Forms (when needed)
npm install react-hook-form @hookform/resolvers zod

# Toasts
npm install sonner
```

Tailwind v4 is installed by `create-next-app` (verify
`@tailwindcss/postcss` is in `package.json`). `shadcn-ui-design` does not
install anything itself — it just describes the patterns and tokens.

---

## 8. Quality Gates (before declaring done)

- [ ] `npm run build` passes (no TS errors, no lint blockers)
- [ ] `npm run dev` renders correctly in all 4 themes
- [ ] No raw hex / Tailwind primitive color classes in component code
- [ ] Every new page: `async` + `metadata` export
- [ ] Every new route segment with data: `loading.tsx` + `error.tsx` present
- [ ] Every form field has a `<Label>`
- [ ] Every destructive action uses `<AlertDialog>`
- [ ] `variables-export.json` is current with the Figma file
- [ ] Full `SKILL.md` §10 checklist run for changed files
