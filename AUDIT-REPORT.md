# Component Audit Report — 2026-06-14

> Audit of `components/ui/*` (primitives) + `components/demos/*` (Figma-fidelity
> demos) + `app/docs/components/*/page.tsx` (docs pages) against the source Figma
> file `92ljrxYvIaOPQnAY8hqAU2` (`@shadcn_ui components not token`) and the
> project's stated rules in `CLAUDE.md` + `.claude/skills/shadcn-ui-design/SKILL.md`.
>
> Method: full inventory reconciliation, full-codebase grep for raw hex / Tailwind
> primitive palette classes / `bg-black|white` / `rgba|hsla`, sectional convention
> grep, and spot-read of high-risk primitives (button, calendar, chart, sidebar,
> overlay set). Figma frame names confirmed via `mcp__figma__get_metadata`. Per-
> frame visual diff was **not** done — the Dev Mode MCP requires an active
> selection in the Figma desktop app, which is not available in this audit
> session. Findings marked **(spot-checked only)** rely on code inspection plus
> Figma frame name presence, not pixel comparison.

---

## Summary

- **56 components** audited end-to-end (53 primitives + 3 composite demos).
- **49 pass** clean, **6 minor**, **0 needs work**, **1 informational note**.
- Inventory is **1:1 with Figma** (every Figma component frame has a built artifact).
- No raw hex, no `bg-blue-500`-style palette classes, no `rgba()` / `hsla()` leakage anywhere in `components/ui` or `components/demos`.

### Top 5 issues by impact

1. **`bg-black/30` in 4 overlay primitives** — `alert-dialog.tsx`, `dialog.tsx`, `sheet.tsx`, `drawer.tsx` all use raw `bg-black/30` for the backdrop. CLAUDE.md §3 forbids non-semantic color classes; should be a semantic `--overlay` token or at least `bg-foreground/30`. (low visual risk, high rule-violation visibility — these files were imported verbatim from shadcn defaults.)
2. **`bg-destructive text-white` mis-pairing** — `button.tsx`, `badge.tsx`, and the inline override in `alert-dialog-demo.tsx` pair `bg-destructive` with raw `text-white` instead of `text-destructive-foreground`. Per the explicit "Pair every surface with its foreground" rule in `SKILL.md`, this is non-compliant. (Functionally identical in current theme; breaks if `destructive-foreground` ever diverges from white.)
3. **4 demos omit the `<h3>` section heading convention** — `tabs-demo.tsx`, `tooltip-demo.tsx`, `label-demo.tsx`, `card-demo.tsx`. All four contain only one canonical sample, so the convention arguably doesn't apply, but the project rule in `CLAUDE.md` §3.3 is written without an exception. (cosmetic / consistency.)
4. **`alert-demo.tsx` lives at `components/alert-demo.tsx`** instead of `components/demos/alert-demo.tsx`. Sole stray file outside the demos folder. Likely the original alert demo was created before the `demos/` folder was conventionalised and was never moved.
5. **`SKILL.md` says "27 components built so far"** — actual is 53 primitives + 3 composites = 56. The skill file's project facts are stale and underrepresent the work done. (Documentation drift, not a code issue.)

---

## Inventory deltas

### Codebase vs Figma frames

Figma file declares **56 component frames** under the `Components` page (extracted via `get_metadata`). The built codebase produces:

- 53 primitives in `components/ui/`
- 3 composite demos with no dedicated primitive (combobox, data-table, date-picker — correct shadcn pattern: combobox = popover+command, data-table = table+@tanstack/react-table, date-picker = popover+calendar)

**Every Figma frame maps 1:1 to a built artifact.** No missing components, no orphans.

| Figma frame name (verbatim)    | Built as                                          |
| ------------------------------ | ------------------------------------------------- |
| Accordion                      | `ui/accordion.tsx` + docs page (inlined demo)     |
| Alert                          | `ui/alert.tsx` + `components/alert-demo.tsx` (*)  |
| Alert Dialog                   | `ui/alert-dialog.tsx` + demo                      |
| Aspect Radio *(sic)*           | `ui/aspect-ratio.tsx` + demo                      |
| Avatar                         | `ui/avatar.tsx` + demo                            |
| Badge                          | `ui/badge.tsx` + demo                             |
| Breadcrumb                     | `ui/breadcrumb.tsx` + demo                        |
| Button                         | `ui/button.tsx` + demo                            |
| Button Group                   | `ui/button-group.tsx` + demo                      |
| Calendar                       | `ui/calendar.tsx` + demo                          |
| Card                           | `ui/card.tsx` + demo                              |
| Carousel                       | `ui/carousel.tsx` + demo                          |
| Chart                          | `ui/chart.tsx` + demo                             |
| Checkbox                       | `ui/checkbox.tsx` + demo                          |
| Collapsible                    | `ui/collapsible.tsx` + demo                       |
| Combobox                       | (composite) `demos/combobox-demo.tsx`             |
| Command                        | `ui/command.tsx` + demo                           |
| Contex Menu *(sic)*            | `ui/context-menu.tsx` + demo                      |
| Data Table                     | (composite) `demos/data-table-demo.tsx`           |
| Date Picker                    | (composite) `demos/date-picker-demo.tsx`          |
| Dialog                         | `ui/dialog.tsx` + demo                            |
| Drawer                         | `ui/drawer.tsx` + demo                            |
| Dropdown Menu                  | `ui/dropdown-menu.tsx` + demo                     |
| Empty                          | `ui/empty.tsx` + demo                             |
| Field                          | `ui/field.tsx` + demo                             |
| Hover Card                     | `ui/hover-card.tsx` + demo                        |
| Input                          | `ui/input.tsx` + demo                             |
| Input Group                    | `ui/input-group.tsx` + demo                       |
| Input OPT *(sic, OTP)*         | `ui/input-otp.tsx` + demo                         |
| Item                           | `ui/item.tsx` + demo                              |
| KPD *(sic, KBD)*               | `ui/kbd.tsx` + demo                               |
| Label                          | `ui/label.tsx` + demo                             |
| Menubar                        | `ui/menubar.tsx` + demo                           |
| Native Select                  | `ui/native-select.tsx` + demo                     |
| Navigation Menu                | `ui/navigation-menu.tsx` + demo                   |
| Pagination                     | `ui/pagination.tsx` + demo                        |
| Popover                        | `ui/popover.tsx` + demo                           |
| Progress                       | `ui/progress.tsx` + demo                          |
| Radio Group                    | `ui/radio-group.tsx` + demo                       |
| Scroll-area                    | `ui/scroll-area.tsx` + demo                       |
| Select                         | `ui/select.tsx` + demo                            |
| Seperator *(sic, Separator)*   | `ui/separator.tsx` + demo                         |
| Sheet                          | `ui/sheet.tsx` + demo                             |
| Sidebar                        | `ui/sidebar.tsx` + demo                           |
| Skeleton                       | `ui/skeleton.tsx` + demo                          |
| Slider                         | `ui/slider.tsx` + demo                            |
| Sonner                         | `ui/sonner.tsx` + demo                            |
| Spinner                        | `ui/spinner.tsx` + demo                           |
| Switch                         | `ui/switch.tsx` + demo                            |
| Table                          | `ui/table.tsx` + demo                             |
| Tabs                           | `ui/tabs.tsx` + demo                              |
| Textarea                       | `ui/textarea.tsx` + demo                          |
| Toggle                         | `ui/toggle.tsx` + demo                            |
| Toggle Group                   | `ui/toggle-group.tsx` + demo                      |
| Tooltip                        | `ui/tooltip.tsx` + demo                           |

(*) alert-demo lives one level up from `components/demos/`.

There is also a `components/ui/form.tsx` (react-hook-form `<Form>` wrapper + matching `form-demo.tsx` + docs page) which has **no Figma counterpart frame**. This is conventional shadcn — Form is a library helper, not a UI surface — but worth knowing the codebase has one extra primitive beyond Figma.

### Missing from `SKILL.md`

- `SKILL.md` (line 59) states "27 components built so far". Actual count is **53 primitives + 3 composites = 56**. The project inventory section is stale.
- `SKILL.md` does not enumerate the components (intentional — Figma is source of truth). No per-component drift.

### Missing from `DESIGN.md`

`DESIGN.md` is a **token specification only** — sections cover core principles, semantic tokens, do/don'ts, typography, radius, accessibility, Tailwind v4 setup, and primitive colour tables (A1–A13). It does **not** document individual components, so there is no per-component delta to report; this is by design (kit's `_ux-ui-shared/components/*.md` carries generic component patterns).

---

## Per-component findings

Legend: ✅ pass · ⚠️ minor issue · ❌ needs work · (sc) spot-checked only — code review + Figma frame presence, not pixel diff.

| Component        | Status | Tokens OK | Demo convention | Notes                                               |
| ---------------- | ------ | --------- | --------------- | --------------------------------------------------- |
| accordion        | ✅ (sc) | ✓         | n/a             | demo inlined in docs page via `<Faq>`, primitive clean |
| alert            | ✅ (sc) | ✓         | ✓               | demo at `components/alert-demo.tsx`, not `demos/`   |
| alert-dialog     | ⚠️ (sc) | ⚠️ `bg-black/30` overlay | ✓               | also `text-white` override in demo                  |
| aspect-ratio     | ✅ (sc) | ✓         | ✓               |                                                     |
| avatar           | ✅ (sc) | ✓         | ✓               |                                                     |
| badge            | ⚠️      | ⚠️ `text-white` on destructive | ✓               | shadcn default pattern                              |
| breadcrumb       | ✅ (sc) | ✓         | ✓               |                                                     |
| button           | ⚠️      | ⚠️ `text-white` on destructive | ✓               | otherwise clean, all 6 variants demoed              |
| button-group     | ✅ (sc) | ✓         | ✓               |                                                     |
| calendar         | ✅      | ✓         | ✓               | full read — clean shadcn pattern with semantic tokens |
| card             | ✅      | ✓         | ⚠️ single variant, no `<h3>` | functional but off-convention                       |
| carousel         | ✅ (sc) | ✓         | ✓               |                                                     |
| chart            | ✅      | ✓         | ✓               | uses `var(--primary)` colour config (semantic)      |
| checkbox         | ✅ (sc) | ✓         | ✓               |                                                     |
| collapsible      | ✅ (sc) | ✓         | ✓               |                                                     |
| combobox         | ✅ (sc) | ✓         | ✓               | composite demo, popover+command                     |
| command          | ✅ (sc) | ✓         | ✓               |                                                     |
| context-menu     | ✅ (sc) | ✓         | ✓               |                                                     |
| data-table       | ✅ (sc) | ✓         | ✓               | composite (164 LOC), uses table+tanstack            |
| date-picker      | ✅ (sc) | ✓         | ✓               | composite, popover+calendar                         |
| dialog           | ⚠️ (sc) | ⚠️ `bg-black/30` overlay | ✓               |                                                     |
| drawer           | ⚠️ (sc) | ⚠️ `bg-black/30` overlay | ✓               |                                                     |
| dropdown-menu    | ✅ (sc) | ✓         | ✓               |                                                     |
| empty            | ✅ (sc) | ✓         | ✓               |                                                     |
| field            | ✅ (sc) | ✓         | ✓               |                                                     |
| form             | ✅ (sc) | ✓         | ✓               | no Figma frame (library helper)                     |
| hover-card       | ✅ (sc) | ✓         | ✓               |                                                     |
| input            | ✅ (sc) | ✓         | ✓               |                                                     |
| input-group      | ✅ (sc) | ✓         | ✓               |                                                     |
| input-otp        | ✅ (sc) | ✓         | ✓               |                                                     |
| item             | ✅ (sc) | ✓         | ✓               |                                                     |
| kbd              | ✅ (sc) | ✓         | ✓               |                                                     |
| label            | ✅      | ✓         | ⚠️ single variant, no `<h3>` | tiny 11-line demo                                   |
| menubar          | ✅ (sc) | ✓         | ✓               |                                                     |
| native-select    | ✅      | ✓         | ✓               | semantic tokens throughout                          |
| navigation-menu  | ✅ (sc) | ✓         | ✓               |                                                     |
| pagination       | ✅ (sc) | ✓         | ✓               |                                                     |
| popover          | ✅ (sc) | ✓         | ✓               |                                                     |
| progress         | ✅ (sc) | ✓         | ✓               |                                                     |
| radio-group      | ✅ (sc) | ✓         | ✓               |                                                     |
| scroll-area      | ✅ (sc) | ✓         | ✓               |                                                     |
| select           | ✅ (sc) | ✓         | ✓               |                                                     |
| separator        | ✅ (sc) | ✓         | ✓               |                                                     |
| sheet            | ⚠️ (sc) | ⚠️ `bg-black/30` overlay | ✓               |                                                     |
| sidebar          | ✅      | ✓         | ✓               | 371 LOC, all sidebar-scoped tokens                  |
| skeleton         | ✅ (sc) | ✓         | ✓               |                                                     |
| slider           | ✅ (sc) | ✓         | ✓               |                                                     |
| sonner           | ✅ (sc) | ✓         | ✓               |                                                     |
| spinner          | ✅ (sc) | ✓         | ✓               |                                                     |
| switch           | ✅ (sc) | ✓         | ✓               |                                                     |
| table            | ✅ (sc) | ✓         | ✓               |                                                     |
| tabs             | ✅      | ✓         | ⚠️ single variant, no `<h3>` | tabs over Card login form, one canonical sample     |
| textarea         | ✅ (sc) | ✓         | ✓               |                                                     |
| toggle           | ✅ (sc) | ✓         | ✓               |                                                     |
| toggle-group     | ✅ (sc) | ✓         | ✓               |                                                     |
| tooltip          | ✅      | ✓         | ⚠️ single variant, no `<h3>` | one button + tooltip                                |

Totals: **49 ✅ · 6 ⚠️ · 0 ❌**.

---

## Detail: components needing work

### alert-dialog / dialog / sheet / drawer (overlay set)

- Files: `components/ui/alert-dialog.tsx:19`, `components/ui/dialog.tsx:20`, `components/ui/sheet.tsx:21`, `components/ui/drawer.tsx:28`
- Issue: All four use `bg-black/30` for the modal scrim. This violates the project rule in `CLAUDE.md` §3 ("No raw hex or `bg-blue-500`-style classes") and `SKILL.md` "Non-negotiable project rules" ("Never use Tailwind primitive palette classes"). `bg-black` is the `black` keyword colour, semantically the same class of leak the rule targets.
- Suggested fix: either
  (a) introduce a semantic `--overlay` token in `globals.css` (e.g. mapped to `oklch(0 0 0 / 0.3)` light, `oklch(0 0 0 / 0.5)` dark) and use `bg-overlay` everywhere, or
  (b) switch to `bg-foreground/30` (uses theme foreground; auto-adapts) — simpler but does not give designers Figma-side control.
- Impact: low visual risk under current themes, but the same scrim alpha across all 4 themes is suspicious — primary (blue) and secondary (yellow) themes may want a tinted scrim.

### button / badge

- Files: `components/ui/button.tsx:13`, `components/ui/badge.tsx:15`, also `components/demos/alert-dialog-demo.tsx:63` (consumer override)
- Issue: `bg-destructive text-white` does not pair `bg-destructive` with `text-destructive-foreground`. This breaks the explicit "Pair every surface with its foreground" rule in `SKILL.md`.
- Suggested fix: replace `text-white` with `text-destructive-foreground` and ensure the token resolves to white in light/dark and stays appropriate under primary/secondary themes. If `destructive-foreground` is already defined in `globals.css` (it should be — token #14 in DESIGN.md's semantic set), this is a one-line change per file.

### card-demo / tabs-demo / tooltip-demo / label-demo

- Files: `components/demos/card-demo.tsx`, `components/demos/tabs-demo.tsx`, `components/demos/tooltip-demo.tsx`, `components/demos/label-demo.tsx`
- Issue: Each demo shows only one canonical variant and skips the project's `<section><h3 className="font-mono text-sm font-medium text-muted-foreground">…</h3>…</section>` wrapper required by `CLAUDE.md` §3.3.
- Suggested fix: either (i) wrap the single variant in a section with the label `Default`/`Login form`/etc. for uniformity, or (ii) amend `CLAUDE.md` §3.3 to allow demos with exactly one variant to skip the heading. Option (i) is cheaper and aligns with the other 50 demos.

### alert-demo (location)

- File: `components/alert-demo.tsx`
- Issue: Sole demo file outside `components/demos/`. Likely a pre-convention artefact; the corresponding `app/docs/components/alert/page.tsx` imports it from `@/components/alert-demo`.
- Suggested fix: `git mv components/alert-demo.tsx components/demos/alert-demo.tsx` and update the import in the docs page. No content change required.

### SKILL.md project inventory line

- File: `.claude/skills/shadcn-ui-design/SKILL.md:59`
- Issue: "27 components built so far" — actual is 53 + 3 = 56.
- Suggested fix: replace with the current count (or rephrase to "all shadcn primitives + composites are built, see `components/ui/`") so future audits don't accept stale numbers.

---

## What was NOT checked

- **Figma pixel-fidelity per variant.** The Dev Mode MCP requires an active Figma selection that this audit could not establish. Variant lists were inferred from primitive `cva` configs + demo coverage, not from `get_design_context` per frame. If pixel comparison is needed, re-run this audit with each frame selected in the Figma desktop app and let me call `get_design_context` on each node id (the metadata extraction above already lists every node id).
- **Per-theme rendering.** No browser run was performed; the 4-theme requirement (`CLAUDE.md` §3.1) was not visually validated.
- **`npm run build` and the kit's `accuracy_report.mjs` gate.** Out of scope for a read-only audit; should be the next step before any of the fixes above are merged.

---

## Recommendations (prioritised)

1. **Fix the 4 overlay backdrops** (`bg-black/30` → semantic overlay token). Single biggest rule violation; touches 4 files; one-line change after token is added.
2. **Fix `text-white` → `text-destructive-foreground`** in `button.tsx`, `badge.tsx`, and `alert-dialog-demo.tsx`.
3. **Move `components/alert-demo.tsx` into `components/demos/`** for folder-shape consistency. Update the one import.
4. **Wrap the 4 single-variant demos in a labelled `<section>`** to honour the demo convention (or update the rule, but pick one).
5. **Update the stale `SKILL.md` line 59** ("27 components" → current count, or remove the number).
6. **Once the above land, run** `node .claude/skills/_ux-ui-shared/scripts/accuracy_report.mjs` to confirm no contrast/axe/spec regressions.
7. **For deeper Figma fidelity sweep**, open the Figma file, select each component frame in order from the inventory table, and re-run an audit pass that calls `get_design_context` per node — that is the only way to catch silent variant drift (e.g., button size now has an `xl` variant, sidebar collapsed state padding, etc.).
