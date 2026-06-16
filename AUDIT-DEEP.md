# Deep Audit — 27 components

Promotes the remaining `(sc)` spot-checks to deeper review (primitive + demo + canonical variant inventory). 3 parallel agents handled 9 components each.

**Caveat**: Figma MCP `get_screenshot`/`get_metadata`/`get_design_context` returned permission-denied across all 27 nodes during this pass. Findings are code-side: token hygiene, variant-count completeness vs the canonical shadcn library, demo-section convention, and code-quality scans. Pixel-level fidelity is unverified.

## Findings — 10 ⚠️, 0 ❌

| # | Component | Issue | Action |
|---|---|---|---|
| 1 | `menubar` (ui) | `displayname` typo (lowercase n) on `MenubarShortcut` | ✅ Fixed |
| 2 | `table` (ui) | `TableFooter` uses `border-t` without `border-border` token | ✅ Fixed |
| 3 | `scroll-area` (demo) | Vertical list emits trailing `<Separator />` after final tag — violates `feedback_list_dividers` rule | ✅ Fixed |
| 4 | `skeleton` (demo) | Line skeletons override primitive with `rounded-full` (pill bars) instead of default `rounded-md` | ✅ Fixed |
| 5 | `input` (ui) | No `aria-invalid` styling in primitive — error visual contract missing | ✅ Fixed (primitive + demo) |
| 6 | `form` (demo) | Happy-path only — no preview of `FormMessage` destructive treatment | ✅ Fixed (added Invalid State section) |
| 7 | `sidebar` (demo) | `ClosedSidebar` was a hand-rolled div tree, not the real `collapsible="icon"` primitive | ✅ Fixed (now `SidebarProvider defaultOpen={false}`) |
| 8 | `label` (demo) | Only "With Checkbox" — canonical Figma also has bare/With-Input | ⏸️ Skipped — needs Figma verification |
| 9 | `pagination` (demo) | Single section — Figma likely has disabled prev/next + compact (no-ellipsis) | ⏸️ Skipped — needs Figma verification |
| 10 | `scroll-area` (demo) | Horizontal gradient `from-primary/30 to-accent` differs from Figma flat tiles | ⏸️ Skipped — needs Figma verification |

## What was checked

- **Token hygiene** — no raw hex, no `bg-blue-500`-style classes (clean across all 27)
- **Variant-count vs canonical shadcn library** — section coverage in demo files
- **Demo section convention** — `font-mono text-sm font-medium text-muted-foreground` h3 + `gap-10` outer + `gap-3` per section (clean across all 27)
- **Code-quality scan** — displayName, semantic token usage on borders/footers, list-divider rule

## What was NOT checked

Pixel fidelity (spacing/radius/typography) against actual Figma frames — Figma MCP was denied this session.

## Skipped items (3)

Items 8–10 are speculative based on canonical shadcn variants. Without Figma MCP confirming the source frames, adding sections might over-shoot the design intent. Resume when MCP access is restored or designer confirms scope.

## Verification

- `npm run build` — ✅ Compiled successfully in 24.1s, 68/68 routes static
- `npm run lint` — 0 errors, 9 pre-existing warnings (5 storybook redundant-name + 3 kit script issues + 1 data-table react-hooks/incompatible-library)

---

# Visual 4-theme sweep — 56 components × 4 themes

Captured via Playwright CLI against the running dev server. Each component's `/docs/components/{name}` page rendered under Light, Dark, Primary (blue), Secondary (yellow/brown) by toggling `class="dark"` / `data-theme="primary"` / `data-theme="secondary"` on `<html>`. 224 full-page PNGs saved to `/tmp/theme-check/`.

**Result**: 224/224 rendered cleanly, 0 navigation failures, 0 blank PNGs, 0 console crashes.

## Render health

| Theme | Render OK | File size range |
|---|---|---|
| Light | 56/56 | 61–200 KB |
| Dark | 56/56 | 61–200 KB |
| Primary | 56/56 | 90–220 KB |
| Secondary | 56/56 | 88–217 KB |

Only one size outlier worth noting: **aspect-ratio** primary/secondary PNGs are 75% larger than light/dark — caused by the gradient placeholders, not a render issue.

## ⚠️ Secondary-theme contrast observations

All components use correct semantic tokens — no component-level bugs found. However, the secondary theme palette (`#globals.css` `[data-theme="secondary"]` block, brown/yellow) has low-contrast pairs that affect specific component variants:

| Component | Variant | Issue |
|---|---|---|
| `button` | `ghost` | Foreground ≈ background luminance — button nearly invisible |
| `button` | `outline` | Border close to bg-background — borderline visible |
| `alert` (destructive), `form` (FormMessage), `input` (invalid helper) | destructive text | Red text on brown bg — readability marginal |

These are **palette issues, not component issues**. Per CLAUDE.md §3 ("Figma is the source; never edit `app/globals.css` by hand"), fixing them requires:
1. Designer adjusts secondary theme tokens in Figma (raise `--accent` lightness, raise `--destructive` lightness for secondary mode, or darken `--background`)
2. Re-export `variables-export.json`
3. Re-run `sync-tokens.py`

Components render correctly given the current token values — they aren't doing anything wrong. Flag for the designer.

## Sweep mechanics

- Tool: `playwright-cli` (globally installed `@playwright/cli`)
- Loop: `bash /tmp/theme-check/run.sh` (kept for re-runs)
- Time: ~12 min for 224 navigations + screenshots
- Artifacts: `/tmp/theme-check/{component}-{theme}.png` × 224
- Dev server: port 3004 (existing instance)
